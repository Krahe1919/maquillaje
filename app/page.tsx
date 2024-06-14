import Image from "next/image";
import { Fondo } from "./components/fondo";
// import { Fondo } from "./components/fondo";



export default function Home() {
  return (
    <div className="mx-[16%] px-4 sm:px-6 lg:px-8 md:w-[65%] mt-36">
    <div className="mb-64 ">
      <div className="py-12 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 mb-52">
        <img src="header.png"/>
      </div>
      <div className="px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 ">
        <h2 className="text-5xl font-bold leading-tight sm:text-8xl">
          10 essential makeup<span className="block mb-2 md:mb-6"></span>
          techniques to create your<span className="block mb-2 md:mb-6"></span>
          perfect look.
        </h2>
      </div>
    </div>
    <div className="flex">
      <div className="bg-pink-100  space-y-16 px-6 md:px-20 py-12 w-[60%]">
        <span className="text-green font-bold text-2xl">
          STEP 1
        </span>
        <h2 className="font-bold sm:text-7xl">
          WATCH THE VIDEO
        </h2>
    
        <div className="w-full h-auto">
          <img src="/video.png" className=" inset-0 w-full h-full object-cover"/>
        </div>
      </div>
      <div className="bg-gray-400 md:px-20 py-12 w-[40%]">
          <span className="text-green font-bold text-2xl">
            STEP 2
          </span>
          <div className="flex flex-col items-center justify-between h-full">
            <h2 className="font-bold sm:text-7xl mb-8">
              TAKE THE COURSE
            </h2> 
                
                <div className="mb-64">
                  <img src="/boton.png"/>
                  <button className="w-full h-32 bg-red-600 text-white text-4xl px-32">SUSCRIBIRSE OF COURSE</button>
                </div>
          </div>

        </div>
    </div>
  </div>
  
  );
}
