import Link from "next/link"
export default function Logando(){
    return(
        <div className=" w-full  bg-slate-50 h-screen flex items-center justify-center">
            

            <div className="w-[640] h-[832] ">
                
                <img src="reta.png" width={640} height={837} alt="error"/>
            </div>
            <form   className="w-[640] h-[832] bg-white ">
                    <div className="w-full h-48  items-center flex flex-col justify-center gap-10">
                        <img src="logo.png" width={80} height={80} alt="erro"/>
                        <div> <h1 className="text-xl font-extralight">Bem-vindo de Volta</h1></div>
                    </div>
                    <div className="h-[640] w-full flex flex-col items-center justify-center gap-14">
                        <div className="w-[560] h-28 flex  flex-col gap-2 ">
                            <label htmlFor="email"  className="text-xs font-extralight"> Email:*</label>
                            <input type="email" name="" id="email"  placeholder=" insira seu email" className="w-[560] h-[70] rounded-xl p-2 outline-none border-2"/>
                        </div>
                        <div className="w-[560] h-28  flex  flex-col gap-2 ">
                            <label htmlFor="email" className="text-xs font-extralight"> senha:*</label>
                            <input type="password" name="" id="email"  placeholder=" insira seu email" className="w-[560] h-[70] rounded-xl p-2 outline-none border-2"/>
                            <p className="text-right text-btn text-xs" >Esqueci a minha senha</p>
                        </div>
                        
                        <div className="w-[560] h-20  flex  flex-col  ">
                            <button  className="w-[560] h-[70] rounded-xl bg-btn text-white font-bold">Enviar</button>
                        </div>
                        <div className="w-[560] h-20  flex  flex-col text-center  ">
                            <Link href='/cadastro'>Ainda não tenho conta</Link>
                        </div>
                    </div>
            </form>
        </div>
    )
}