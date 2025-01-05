"use client"
import { api } from "@/service/api"
import Link from "next/link"
import { FormEvent, useTransition } from "react"
import { start } from "repl"

interface LoginProviderType{
    email: string
    senha: string
}

export default function Logando(){
    const[isPending, startTransition] = useTransition()

        function ValidarFormLogin(event:FormEvent<HTMLFormElement>){
            event.preventDefault()
            const data = new FormData(event.currentTarget)
            const email = String(data.get("email"))
            const senha = String(data.get("senha"))

            if(!email || !senha)return alert("preencha todos os campos")

            
            startTransition(()=>authproviderLogin({email,senha})  )
        }

        async function authproviderLogin(data: LoginProviderType){
            try {
                const response = await api.get(`/providers/login/${data.email}/${data.senha}`)
                if(response.data.message === "Usuario nao encontrado") return alert("Usuário nao encontrado")
                
                // ARMAZENAR DADOS DO USUARIO NO LOCALSTORAGE
                window.localStorage.setItem("clientData", JSON.stringify(response.data))

                // EXEMPLO DE COMO PEGAR DADOS NO LOCALSTORAGE
                // const getItemFromLocalsorage = JSON.parse(localStorage.getItem("clientData") || "")
                // console.log(getItemFromLocalsorage)

                window.location.href = "/service"
            } catch (error) {
                alert("Impossivel logar, tente mais tarde")
            }
        }

    return(
        <div className=" w-full  bg-slate-50 h-screen flex items-center justify-center">
            <div className="w-[640] h-[832]  overflow-hidden"> 
                <img src="reta2.jpg" width={600} height={237} alt="error"/>
            </div>
            <form   className="w-[640] h-[832] bg-white " onSubmit={ValidarFormLogin}>
                    <div className="w-full h-48  items-center flex flex-col justify-center gap-10">
                        <img src="logo.png" width={80} height={80} alt="erro"/>
                        <div> <h1 className="text-xl font-extralight">Login do  provedor</h1></div>
                    </div>
                    <div className="h-[640] w-full flex flex-col items-center justify-center gap-14">
                        <div className="w-[560] h-28 flex  flex-col gap-2 ">
                            <label htmlFor="email"  className="text-xs font-extralight"> Email:*</label>
                            <input type="email" name="email" id="email"  placeholder=" insira seu email" className="w-[560] h-[70] rounded-xl p-2 outline-none border-2"/>
                        </div>
                        <div className="w-[560] h-28  flex  flex-col gap-2 ">
                            <label htmlFor="senha" className="text-xs font-extralight"> senha:*</label>
                            <input type="password" name="senha" id="email"  placeholder=" insira seu email" className="w-[560] h-[70] rounded-xl p-2 outline-none border-2"/>
                            <p className="text-right text-btn text-xs" >Esqueci a minha senha</p>
                        </div>
                        
                        <div className="w-[560] h-20  flex  flex-col  ">
                            <button  
                                className={`w-[560] h-[70] rounded-xl text-white transition-colors font-bold ${isPending?"bg-btn/50":"bg-btn2"}`}
                                disabled={isPending}
                            >
                                {isPending? "Carregando": "Enviar"}
                            </button>
                        </div>
                        <div className="w-[560] h-20  flex  flex-col text-center  ">
                        
                            
                        </div>
                    </div>
            </form>
        </div>
    )
}