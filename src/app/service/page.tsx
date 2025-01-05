"use client"
import { Cards } from "@/components/cards"
import Header from "@/components/header"
import { useEffect } from "react"
export default function Service(){
// funcao que permite terminar seccao
    function logOutClient(){
        if(typeof window !== "undefined"){
            localStorage.removeItem("clientData")
            window.location.href = "/"
        }
    }
    
    return(
        <div className=" w-full h-screen bg-white"> 
            <Header buttonControl={logOutClient}/>
            <Cards />

        </div>
    )
}