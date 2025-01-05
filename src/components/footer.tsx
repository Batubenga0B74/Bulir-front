export  default function Footer(){
    return(
        <div className="w-[100%] h-[300] bg-main flex items-center justify-around">
            <div> <img src="logo.png" alt="logo" width={200} height={200}/></div>
            <div>
                <p className="font-bold text-white text-xl "> Conteudo</p>
                <p className=" text-slate-400"> inicio</p>
                <p className=" text-slate-400"> sobre</p>
                <p className=" text-slate-400"> serviço</p>  
                <p className=" text-slate-400"> Blog</p>
                <p className=" text-slate-400"> Evento</p>
            </div>
            <div >
                <p className="font-bold text-white text-xl "> Comphania</p>
                <p className=" text-slate-400"> inicio</p>
                <p className=" text-slate-400"> inicio</p>
                <p className=" text-slate-400"> sobre</p>
                <p className=" text-slate-400"> serviço</p>  
                <p className=" text-slate-400"> carreira</p>
                <p className=" text-slate-400"> imprensa</p>  
            </div>
            <div>
                <p className="font-bold text-white text-xl "> Recursos</p>
                <p className=" text-slate-400"> Blog</p>
                <p className=" text-slate-400"> Evento</p>
                <p className=" text-slate-400"> Newslatter</p>  
                <p className=" text-slate-400"> centro de ajuda </p> 
            </div>
             <p className="text-white"> © 2025 All rights reserved</p>
        </div>
        
    )
}