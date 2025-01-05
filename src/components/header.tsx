'use client'
import Link from "next/link"
import { Metadata } from "next"
import { useEffect, useState } from "react"


export const metadata:Metadata = {
    title: 'Bulir-tecnology',
    description: 'procura de prestadores de servoços'

}

interface HeaderProps{
    buttonControl?: ()=> void
}
export default function Header({
    buttonControl,
}:HeaderProps){
    const [isLoged, setIsLoged] = useState(false)
    // Verificar se  o local storage  esta vazio

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (typeof window !== "undefined") {
                // Obter o valor do localStorage
                const storedData = localStorage.getItem("clientData");
        
                // Verificar se o valor existe antes de analisar o JSON
                const data = storedData ? JSON.parse(storedData) : null;
        
                if (data?.id) {
                    setIsLoged(true);
                } else {
                    setIsLoged(false);
                }
            }
        }
    }, []);
    return(
        <header className=" w-full  flex   items-center h-15 justify-around   text-center mt-5 "> 
            <div>
                <img src='logo.png'
                alt='logo'
                width={150}
                height={74}
                />
            </div>
            <ul className="flex items-center justify-center text-center gap-10">
                <li> <Link href='/'> Home</Link></li>
                {isLoged && <li> <Link href='/service'> Serviços</Link></li>}
                <li><Link href='/'> prestadores</Link></li>
            </ul>
            <div className="flex gap-10">
                {!isLoged && <Link href='/Logar'> <button  className=" w-[120] rounded-3xl h-10 text-center font-bold bg-btn text-white " >Login</button></Link>}
                {buttonControl && <button className="w-[170] bg-red-400 rounded-3xl h-10 text-center font-bold p-2 text-white" onClick={buttonControl}>Terminar Sessao</button>}
                {!buttonControl && <Link href="/client"> <button  className=" w-[120] rounded-3xl h-10 text-center font-bold " >Cadastrar</button></Link>}
                
            </div>
        </header>
    )
}