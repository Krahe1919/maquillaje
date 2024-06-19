"use client"


import Image from "next/image";
import { Fondo } from "./components/fondo";
import React, { useState } from 'react';
import Modal from './components/modal';
import { PiPaintBrushBold } from "react-icons/pi";

// import { Fondo } from "./components/fondo";



export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);



  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  

  return (
    <div className="mx-2 md:mx-[18%]  md:px-8 md:w-[65%] space-y-12 md:space-y-28 pt-4 mt-8 md:mt-16">
      <div className="md:px-12 text-white md:pb-16">
        <img src="header.png" width={300} height={300}/>
      </div>
      <div className=" sm:px-8 md:px-10 lg:px-12 xl:px-14 pb-16 ">
        <h2 className="text-5xl font-bold leading-tight sm:text-5xl">
          10 essential makeup<span className="block mb-2 md:mb-4"></span>
          techniques to create your<span className="block mb-2 md:mb-4"></span>
          perfect look.
        </h2>
      </div>
    <div className=" flex flex-col md:ml-4 md:flex-row ">
      <div className="bg-red-100 shadow-xl border shadow-red-300/90 space-y-4 md:space-y-18 md:px-10 py-2 md:py-6 md:w-[50%] px-4">
        <span className="text-green font-bold md:text-lg text-sm text-red-500">
          STEP 1
        </span>
        <h2 className="font-bold md:text-3xl text-2xl ">
          WATCH THE VIDEO
        </h2>
    
        <div className="relative w-full h-auto">
          <video controls className="inset-0 w-full h-full object-cover">
            <source src="/video.mp4"  />
          </video>
        </div>
      </div>
      <div className=" bg-violet-100 shadow-xl border shadow-violet-300/90 space-y-4 md:space-y-18 md:px-10 py-2 md:py-6 md:w-[51%] ">
          <span className="text-green font-bold md:text-lg text-sm ml-6 text-violet-500">
            STEP 2 
          </span>
          <h2 className="font-bold md:text-3xl text-2xl ml-6">
              TAKE THE COURSE
            </h2> 
          <div className=" flex flex-col justify-between items-center h-[35vh]">
                  <div className="h-64"></div>
                  <div className="h-full text-9xl text-violet-500">
                    <PiPaintBrushBold />

                  </div>
                <button onClick={openModal} className="md:w-[80%] bg-violet-500 hover:bg-violet-700 text-white text-xl p-6 font-bold">SUSCRIBIRSE OF COURSE</button>
                  <Modal isOpen={isModalOpen} onClose={closeModal}>
                    
                  </Modal>
          </div>

        </div>
      </div>
        <footer className="flex items-center justify-center text-1xl w-full pb-20">
          <div className="text-center">
          ©2023 Mirage Beauty Coach. All rights reserved.  Privacy Policy  |  Created with Leadpages
          </div>
        </footer>
  </div>
  );
}
