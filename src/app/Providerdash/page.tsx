"use client"

import Header from "@/components/header"
import { api } from "@/service/api"
import { FormEvent, useEffect, useState, useTransition } from "react"

interface NewServiceProps {
    nome: string, 
    descricao: string, 
    preco: string, 
    providerID: string
}

interface ProviderData {
    id: string
    nome: string
    email: string
    nif: string
    saldo: string
    senha: string
    create_at: Date

}

interface ReserveProps{
    id: string
    client: {
      nome: string 
    },
    serviceProvider: {
      nome: string
    }
}
export default function Providerdash() {
    const [isPending, startTransition] = useTransition()
    const [aceptTransitions, startAceptTransitions] = useTransition()
    const [myReservs, setMyReservs] = useState<ReserveProps[]>([])

    const [providerData, setProviderData] = useState<ProviderData>()


    function getProviderData(){
        const ddd: ProviderData = JSON.parse(localStorage.getItem("clientData") || "{}")

        setProviderData(ddd)

    }

    function aceitarReserva(id: string){
        const confirm = window.confirm("Deseja aceitar a reserva?")
        if(confirm){
            startAceptTransitions(()=>aceitarPedidoDeReserva(id))
        }
    }

    async function aceitarPedidoDeReserva(id: string){
        try {
            const response = await api.get(`/providers/aceitar/${id}`)
            if(response.data.message === "Reserva não encontrada") return alert("Reserva não encontrada")
            if(response.data.message === "Reserva aceite") return alert("Reserva aceita com sucesso")
        } catch (error) {
            return alert("Impossivel aceitar pedido, tente mais tarde")
        }
    }
    

    function verifySubmitservice(event:FormEvent<HTMLFormElement>){
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const servico = String(data.get("servico"))
        const preco = String(data.get("preco"))
        const descricao =  String(data.get("descricao"))
        if(!servico || !preco || !descricao)return alert("preencha todos os campos")


            if(providerData?.id){
                const newService: NewServiceProps = {
                    descricao, preco, nome:servico, providerID: providerData?.id
                }
                startTransition(()=>sendNewService(newService))

            }
        event.currentTarget.reset()

    }

    async function sendNewService(data: NewServiceProps){
        try{
            const response = await api.post("/providers/new-service", data)
            if(response.data.message === "Provider not found") return alert("Provedor nao encontrado")

            if(response.data.message === "Serviço criado") return alert("Servico criado com sucesso")
        }catch(err){
            alert("Impossivel criar serviço, tente mais tarde")
        }
    }

    async function getAllReservs(){
        try {
            const response= await api.get(`/providers/minhas-reservas/list/${providerData?.id}`)
            // const data: ReserveProps =  response.data
            // console.log(data)

            setMyReservs(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(typeof window !== "undefined"){
            if (providerData?.id) {
                getAllReservs();
              }
        }         
      }, [providerData]);
      
    useEffect(() => {
        if(typeof window !== "undefined"){
            getProviderData()
        }
    }, []);
      




    return (
        <div className="w-full h-screen ">
            <Header />
            <div className="w-full h-full bg-slate-100 flex gap-2 ">
                <div className="w-[50%] h-full p-4 gap-5 bg-btn2 rounded-2xl flex flex-col  items-center justify-center  ">
                    <h1 className="text-2xl font-bold text-btn">Pedidos</h1>
                    {myReservs?.map((e)=>(
                        <div className="w-[75%] h-[50] items-center flex justify-between" key={e.id}>
                            <h1 className="text-2xl font-bold text-white  ">{e.client.nome}</h1>
                            <h1 className="text-2xl font-bold text-white  ">{e.serviceProvider.nome}</h1>
                            <button className="w-[20%] h-[30px] bg-green-400 rounded-xl text-white" onClick={()=>aceitarReserva(e.id)}>
                                {aceptTransitions ? "Aceitando..." : "Aceitar"}
                            </button>
                            <button className="w-[20%] h-[30px] bg-red-600 rounded-xl text-white">Recusar</button>
                        </div>
                    ))}
                    


                </div>
                <div className="w-[50%] h-full items-center flex justify-center text-center flex-col gap-3" >
                        <h1 className="text-2xl font-bold  text-btn">Service</h1>
                    <form className="w-[100%] h-[70%] bg-slate-200 items-center flex flex-col justify-center" onSubmit={verifySubmitservice}>
                    <div className="w-[560] h-28 flex  flex-col gap-2 ">
                          
                            <input type="text" name="servico" id="" placeholder="Qual é o seu service" className="w-[520] h-[50] rounded-xl pverifySubmitservice-2 outline-none border-2" />
                        </div>
                        <div className="w-[560] h-28 flex   gap-2 ">
                           
                            <input type="number" name="preco" id="" placeholder="Digite o preço" className="w-[520] h-[50] rounded-xl p-2 outline-none border-2" />
                        </div>

                        <div className="w-[560] h-max flex  flex-col gap-2 ">
                            <textarea name="descricao" id="" placeholder="uma descrição do seu serviço" className="w-[520] h-[200] rounded-xl p-2 outline-none border-2" ></textarea>
                        </div>  
                        <div className="w-full h-[50]  items-center flex justify-center">
                    <button 
                        className="w-[50%] h-[50] bg-btn items-center flex justify-center font-bold text-white mt-6 rounded-xl"
                        type="submit"
                        
                    >
                        {isPending ? "Enviando..." : "Adicionar novo serviço"}
                    </button>
                </div> 
                    </form>
                </div>
            </div>

        </div>
    )
}