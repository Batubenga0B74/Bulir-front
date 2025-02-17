'use-client'
import patter from '../../public/hero-pattern.png'
import Footer from '@/components/footer';
import Header from "@/components/header";
import Link from 'next/link';

export default function Home() {
  return (
        <div className="bg-white w-full h-full  flex justify-center items-center flex-col gap-10">
            <Header />
          <div className="bg-main w-[1600px] h-[592] rounded-3xl flex items-center flex-col justify-center gap-7   ">
      
              <div className="w-[645] h-[144] text-center">
                  <h1 className="text-4xl font-extrabold text-white">Uma plataforma para voce encontrar prestadores de serviços</h1>
              </div>

              <div className="w-[790] h-[100] text-center">
                <p className="text-xl text-white">Saiba os requisitos necessários para contratar um prestador de serviços a partir do seu conforto e segurança   pesquise por  serviços.</p>
              </div>

              <div className="w-[800] h-[100] items-center justify-center flex">
                <Link href='/prestador'>
                <button className="bg-btn  w-[200] rounded-3xl h-10 text-center font-bold  text-w">Sou prestador </button>
                </Link>
                
              </div>
          </div>
          <div className="w-[1400px] h-[628]   flex  items-center justify-around ">
             <div>

             <img src='about.png'
                alt='logo'
                width={500}
                height={80}
                />
             </div>

             <div className="w-[50%] h-[300] flex flex-col gap-20 ">
                <div className="w-[500] h-[100] gap-9">
                  <p className="text-main">Saiba mais sobre nós</p>
                  <p className="">Somos uma plataforma inovadora e interativa, dedicada a facilitar a sua vida na hora de tratar documentos essenciais c, Cédula Pessoal, Assento de Nascimento, registo criminal e muito mais. Nosso objetivo é fornecer a você os requisitos necessários para tratar qualquer documento pessoal e ainda mostrar onde mais próximo de você podes tratar o mesmo</p>
                </div>

                <div className="w-[300] h-[190]">
                    <h1 className=" text-3xl font-extralight font-serif">
                    service L!nk! 
                    O primeiro passo 
                    para seus serviços
                    está Aqui
                    </h1>
                </div>
             </div>

          </div>

          <div className="w-full h-[130] bg-main flex  items-center justify-center gap-20">
          <div> <img src='logo.png'alt='logo2' width={124}height={74}/></div>
          <div> <img src='logo.png'alt='logo2' width={124}height={74}/></div> 
          <div> <img src='logo.png'alt='logo2' width={124}height={74}/></div>
          <div> <img src='logo.png'alt='logo2' width={124}height={74}/></div>
          <div> <img src='logo.png'alt='logo2' width={124}height={74}/></div>
          <div> <img src='logo.png'alt='logo2' width={124}height={74}/></div>  
          <div> <img src='logo.png'alt='logo2' width={124}height={74}/></div>
          <div> <img src='logo.png'alt='logo2' width={124}height={74}/></div>  
          </div>

          <div className="w-[100%] h-[600] flex items-center justify-around" >
              <div>
                <video src="/Mackbook.webm" width={780} height={400} autoPlay loop></video>

              </div>
              <div>
                  <img src='woma.png' alt='zero'  width={1000} height={898}/>
              </div>
          
          </div>
          <Footer/>
        </div>
  );
}
