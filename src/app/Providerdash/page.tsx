import Header from "@/components/header"
export default function Providerdash() {
    return (
        <div className="w-full h-screen ">
            <Header />
            <div className="w-full h-full bg-slate-100 flex gap-2">
                <div className="w-[50%] h-full p-4 gap-5 ">
                    <h1 className="text-2xl font-bold text-white">Pedidos</h1>
                    <div className="w-[75%] h-[50] items-center flex justify-between ">
                        <h1 className="text-2xl font-bold  ">Miguel Luamba</h1>
                        <button className="w-[20%] h-[30px] bg-green-400 rounded-xl text-white">Aceitar</button>
                        <button className="w-[20%] h-[30px] bg-red-600 rounded-xl text-white">Cancelar</button>
                    </div>
                    <div className="w-[75%] h-[50] items-center flex justify-between ">
                        <h1 className="text-2xl font-bold ">Miguel Luamba</h1>
                        <button className="w-[20%] h-[30px] bg-green-400 rounded-xl text-white">Aceitar</button>
                        <button className="w-[20%] h-[30px] bg-red-600 rounded-xl text-white">Cancelar</button>
                    </div>
                    <div className="w-[75%] h-[50] items-center flex justify-between ">
                        <h1 className="text-2xl font-bold text-">Miguel Luamba</h1>
                        <button className="w-[20%] h-[30px] bg-green-400 rounded-xl text-white">Aceitar</button>
                        <button className="w-[20%] h-[30px] bg-red-600 rounded-xl text-white">Cancelar</button>
                    </div>


                    
                    <div className="w-[75%] h-[50] items-center flex justify-between ">
                        <h1 className="text-2xl font-bold  ">Miguel Luamba</h1>
                        <button className="w-[20%] h-[30px] bg-green-400 rounded-xl text-white">Aceitar</button>
                        <button className="w-[20%] h-[30px] bg-red-600 rounded-xl text-white">Cancelar</button>
                    </div>
                    <div className="w-[75%] h-[50] items-center flex justify-between ">
                        <h1 className="text-2xl font-bold ">Miguel Luamba</h1>
                        <button className="w-[20%] h-[30px] bg-green-400 rounded-xl text-white">Aceitar</button>
                        <button className="w-[20%] h-[30px] bg-red-600 rounded-xl text-white">Cancelar</button>
                    </div>
                    <div className="w-[75%] h-[50] items-center flex justify-between ">
                        <h1 className="text-2xl font-bold text-">Miguel Luamba</h1>
                        <button className="w-[20%] h-[30px] bg-green-400 rounded-xl text-white">Aceitar</button>
                        <button className="w-[20%] h-[30px] bg-red-600 rounded-xl text-white">Cancelar</button>
                    </div>




                    <div className="w-[75%] h-[50] items-center flex justify-between ">
                        <h1 className="text-2xl font-bold  ">Miguel Luamba</h1>
                        <button className="w-[20%] h-[30px] bg-green-400 rounded-xl text-white">Aceitar</button>
                        <button className="w-[20%] h-[30px] bg-red-600 rounded-xl text-white">Cancelar</button>
                    </div>
                    <div className="w-[75%] h-[50] items-center flex justify-between ">
                        <h1 className="text-2xl font-bold ">Miguel Luamba</h1>
                        <button className="w-[20%] h-[30px] bg-green-400 rounded-xl text-white">Aceitar</button>
                        <button className="w-[20%] h-[30px] bg-red-600 rounded-xl text-white">Cancelar</button>
                    </div>
                    <div className="w-[75%] h-[50] items-center flex justify-between ">
                        <h1 className="text-2xl font-bold text-">Miguel Luamba</h1>
                        <button className="w-[20%] h-[30px] bg-green-400 rounded-xl text-white">Aceitar</button>
                        <button className="w-[20%] h-[30px] bg-red-600 rounded-xl text-white">Cancelar</button>
                    </div>




                </div>
                <div className="w-[50%] h-full items-center flex justify-center text-center flex-col gap-3" >
                        <h1 className="text-2xl font-bold  text-btn">Service</h1>
                    <form className="w-[70%] h-[70%] bg-slate-200 items-center flex flex-col justify-center">
                    <div className="w-[560] h-28 flex  flex-col gap-2 ">
                          
                            <input type="text" name="servico" id="" placeholder="Qual é o seu service" className="w-[520] h-[50] rounded-xl p-2 outline-none border-2" />
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
                        
                    >
                        Cadastrar
                    </button>
                </div> 
                    </form>
                </div>
            </div>

        </div>
    )
}