
import Link from "next/link"
import { Metadata } from "next"


export const metadata:Metadata = {
    title: 'Bulir-tecnology',
    description: 'procura de prestadores de servoços'

}
export default function Header(){
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
                <li><Link href='/service'> service</Link></li>
                <li><Link href='/'> prestadores</Link></li>
            </ul>
            <div className="flex gap-10">
                <button className="   w-[130] rounded-2xl h-10 text-center font-bold bg-btn text-white " ><Link href='/Logar'> Login</Link></button>
                <Link href="/client"> <button  className=" w-[120] rounded-3xl h-10 text-center font-bold " >cadastro</button></Link>
            </div>
        </header>
    )
}