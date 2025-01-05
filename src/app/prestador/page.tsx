'use client'
import { api } from "@/service/api"
import { FormEvent, useTransition } from "react"

interface ProviderType {
    nome: string
    nif: string
    email: string
    senha: string
    preco: string
    service_name: string
    descricao: string
}
export default function Logando(){
    const [isPending, startTransition] = useTransition()


    function ValidatePrestadorData(event:FormEvent<HTMLFormElement>){
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const nome = String(data.get("full_name"))
        const email = String(data.get("email"))
        const nif  = String(data.get("nif"))
        const senha = String(data.get("senha"))
        const preco = String(data.get("preco"))
        const servico = String(data.get("servico"))
        const descricao = String(data.get("descricao"))

        const regex = /^[A-Za-zÀ-ÿ\s]+$/;
        if(!nome || !nif || !email || !senha || !preco || !servico || !descricao) return alert("Peencha todos os campos!")

        if(!regex.test(nome)) return alert("Insira um nome valido")
        
        const precoFormat = preco.replace(/\D/g,"")
        console.log(precoFormat)

        const providersData: ProviderType = {
            descricao, email, nif, nome, preco, senha, service_name:servico
        }
        startTransition(()=> createProvider(providersData))
    }

    async function createProvider(provider: ProviderType){
        try {
            const response = await api.post("/providers/create",provider)
            if(response.data.message === "EMAIL e/ou NIF já existem") return alert("Usuário ja existente")

            if(response.data.message === "Provider created") {
                alert("Cadastrado com sucesso")
                window.location.href = "/service"
            }
        } catch (error) {
            alert("Impossivel criar Provedor, tente mais tarde")
        }
    }

    return(
        <div className=" w-full  bg-slate-50 h-screen flex items-center justify-center ">
            <form   className="w-[1280] h-[832] bg-white  " onSubmit={ValidatePrestadorData}>
                    <div className="w-full h-48  items-center flex flex-col justify-center gap-10">
                        <img src="logo.png" width={80} height={80} alt="erro"/>
                        <div> <h1 className="text-xl font-extralight">Bem-vindo de Volta</h1></div>
                    </div>

                    <div  className="w-[1280] h-[570]  flex  ">
                    <div className=" w-[640] h-[570]  items-center justify-center flex flex-col gap-5">
                        <div className="w-[560] h-28 flex  flex-col gap-2 ">
                            <label htmlFor="">Nome completo</label>
                            <input type="text" name="full_name" id="" placeholder="primeiro e ultimo"  className="w-[520] h-[50] rounded-xl p-2 outline-none border-2"/>
                        </div>

                        <div className="w-[560] h-28 flex  flex-col gap-2 ">
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" id="" placeholder="insira seu email" className="w-[520] h-[50] rounded-xl p-2 outline-none border-2" />
                        </div>

                        <div className="w-[560] h-28 flex  flex-col gap-2 ">
                            <label htmlFor="">NIF</label>
                            <input type="text" name="nif" id="" placeholder="seu nif"  className="w-[520] h-[50] rounded-xl p-2 outline-none border-2"/>
                        </div>

                        <div className="w-[560] h-28 flex  flex-col gap-2 ">
                            <label htmlFor="">senha</label>
                            <input type="password" name="senha" id="" placeholder="isire a senha" className="w-[520] h-[50] rounded-xl p-2 outline-none border-2" />
                        </div>
                    </div>
                    <div  className=" w-[650] h-[570]  items-center justify-center flex flex-col gap-5">
                        <div className="w-[560] h-28 flex  flex-col gap-2 ">
                            <label htmlFor="">preço</label>
                            <input type="number" name="preco" id="" placeholder="Digite o preço" className="w-[520] h-[50] rounded-xl p-2 outline-none border-2" />
                        </div>

                        <div className="w-[560] h-28 flex  flex-col gap-2 ">
                            <label htmlFor="">serviço</label>
                            <input type="text" name="servico" id="" placeholder="Qual é o seu service" className="w-[520] h-[50] rounded-xl p-2 outline-none border-2" />
                        </div>

                        <div className="w-[560] h-max flex  flex-col gap-2 ">
                            <label htmlFor="">Descrição</label>
                            <textarea name="descricao" id="" placeholder="uma descrição do seu serviço" className="w-[520] h-[200] rounded-xl p-2 outline-none border-2" ></textarea>
                        </div>    
                    </div>
                    </div>
                  <div className="w-full h-[50]  items-center flex justify-center">
                    <button 
                        className="w-full h-[50] bg-btn items-center flex justify-center font-bold text-white"
                        disabled={isPending}
                    >
                        {isPending ? "Cadastrando..." : "Cadastrar"}
                    </button>
                </div>
            </form>
        </div>
    )
}