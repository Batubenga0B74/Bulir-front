"use client"
import { api } from "@/service/api"
import { useEffect, useRef, useState, useTransition } from "react"


interface ServicesProps {
    id: string
    nome: string
    descricao: string
    preco: string
    providersId: string
    create_at: Date
}

interface ClientData {
    id: string
    nome: string
    email: string
    nif: string
    saldo: string
    senha: string
    create_at: Date

}
export function Cards(){
    const [isPending, startTransition] = useTransition()
    const [allServices, setAllServices] = useState<ServicesProps[] | undefined>()

    const [userData, setUserData] = useState<ClientData>()

    function getClientData(){
        const ddd: ClientData = JSON.parse(localStorage.getItem("clientData") || "{}")

        setUserData(ddd)
    }

    async function getAllServices(){
        try {
            const response = await api.get("/services/listar")
            setAllServices(response.data)
        } catch (error) {
            setAllServices(undefined)
        }
    }

    function fazerReserva(userId: string, serviceId: string, providerId: string){
        const verify = confirm("Deseja reservar esse servico?")
        if(verify){
            startTransition(()=>{
                sendReserveToDatabase(userId, serviceId, providerId)
            })
        }
        
    }


    async function sendReserveToDatabase(userId: string, serviceId: string, providerId: string){
        try {
            const response = await api.post(`/clients/reservar/${userId}/${serviceId}/${providerId}`)
            console.log(response.data)
            if(response.data.message === "Servico reservado com sucesso!") return alert("Servico reservado com sucesso!")
            if(response.data.message === "Saldo insuficiente") return alert("Saldo Insuficiente!")
            if(response.data.message === "Usuário, Provedor ou servico não encontrado.") return alert("Usuário, Provedor ou servico não encontrado.")
        } catch (error) {
            alert("Impossivel fazer reserva, tente mais tarde")
        }
    }

    useEffect(()=>{
        getClientData()
        getAllServices()
    },[])


    return(
       <div className="w-full h-max flex-wrap gap-5  flex  justify-items-start p-4">

        {allServices?.map((service) => (
            <div className="bg-btn2 w-56 h-72 rounded-xl" key={service.id}>
                <div className="w-full h-24 text-center  items-center flex justify-center flex-col  gap-2">
                <div className="w-full h-8  p-2 text-white text-xl"><p>R$ {service.preco}</p></div>
                    <h1 className="font-extrabold  text-2xl">{service.nome}</h1>
                </div>

                <div className="w-full h-28 p-2">
                    <p className="text-xs text-white">{service.descricao}</p>
                </div>
                
                <div className="w-full h-20 flex items-center justify-center">
                    <button
                        className="bg-btn/25  w-[200] rounded-3xl h-10 text-center font-bold text-white"
                        onClick={()=>fazerReserva(String(userData?.id), service.id, service.providersId)}
                        type="button"
                        disabled={isPending}

                        >
                        {isPending ? "Reservando..." : "Reservar"}
                    </button>
                </div>
            </div>
        ))}

       </div>
    )
}