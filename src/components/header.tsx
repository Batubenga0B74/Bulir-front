
export default function Header(){
    return(
        <header className=" w-full  flex   items-center  justify-around h-20"> 
            <div>
                <img src='logo.png'
                alt='logo'
                width={112}
                height={64}
                />
            </div>
            <ul className="flex items-center justify-center text-center gap-10">
                <li>Home</li>
                <li>serviçes</li>
                <li>prestadores</li>
            </ul>
            <div className="flex gap-10">
                <button className="   w-[130] rounded-2xl h-10 text-center font-bold bg-btn text-white " >login</button>
                <button  className=" w-[120] rounded-3xl h-10 text-center font-bold " >cadastro</button>
            </div>
        </header>
    )
}