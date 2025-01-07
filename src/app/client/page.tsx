'use client'
// importação do arquivo que faz a conexão com a Api
import { api } from "@/service/api"
import Link from "next/link"
import { FormEvent, useTransition } from "react"

//essa inteface foi criada para mostrar o tipo de dados que esperamos
interface Client {
    nome: string
    nif: string
    email: string
    senha: string
}
export default function Logando(){
    const [isPending, startTransition] = useTransition()
    // funcão que faz a validação de campos
    //para ver se tem dados ou não
    function validateClientData(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const nome = String(data.get("full_name"))
        const nif = String(data.get("nif"))
        const email = String(data.get("email"))
        const senha = String(data.get("senha"))
//uma forma de validação ele verifica se há um caracter especial
        const regex = /^[A-Za-zÀ-ÿ\s]+$/;
        if(!nome || !nif || !email || !senha) return alert("Peencha todos os campos!")

        if(!regex.test(nome)) return alert("Insira um nome valido")

        const userData: Client  = {
            nome, nif, email, senha
        }

        startTransition(()=>createNewClient(userData)) 
    }
    //inicio do code que faz conexão com api
    async function createNewClient(data: Client){
        try {
            const response = await api.post("/clients/create", data)

            if(response.data.message === "Client created") {
                /* esse window,location.href ela indica aonde o o usurario
                vai depois do cadastro for um sucesso
                 */
                window.location.href = "/service"
            }
            if(response.data.message === "EMAIL e/ou NIF já existem") return alert("Usuário ja existente")
        } catch (error) {
            alert("Impossivel criar usuário, tente mais tarde")
        }
    }
    // fim do code  que faz conexão com a Api
    return(
        <div className=" w-full  bg-slate-50 h-screen flex items-center justify-center  flex-col">
            <div className="w-full h-[300]  items-center flex flex-col justify-center gap-10">
                        <img src="logo.png" width={80} height={80} alt="erro"/>
                        <div> <h1 className="text-xl font-extralight">Cadastro do cliente</h1></div>
                    </div>

    
            <form   className="w-[1280] h-[842] bg-white  p-3" onSubmit={validateClientData}>
                    <div  className="w-[1280] h-[570]  flex  ">
                    <div className=" w-[640] h-[570]  items-center justify-center flex flex-col gap-5">
                        <div className="w-[560] h-28 flex  flex-col gap-2 ">
                            <label htmlFor="">Nome completo</label>
                            <input type="text" name="full_name" id="" placeholder="primeiro e ultimo nome"  className="w-[520] h-[50] rounded-xl p-2 outline-none border-2"/>
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
                        <div className="w-[560] h-28  items-center flex justify-center">
                    <button 
                        className="w-full h-[50] bg-btn items-center flex justify-center font-bold text-white" 
                        type="submit"
                        disabled={isPending}     
                    >
                        {isPending ? "Cadastrando..." : "Cadastrar"}
                    </button>
                </div>
                    </div>
                    <div  className=" w-[650] h-[570]  items-center justify-center flex flex-col gap-5">
                        <img src="reta.png" className=" w-[650] h-[570]  items-center justify-center flex flex-col " />
                    </div>
                    </div>
            </form>
        </div>
    )
}
/*
    dentro do botão usamos o disabled para que quando estamos a fazer a requizição o
    botão fique desabilitado.
*/