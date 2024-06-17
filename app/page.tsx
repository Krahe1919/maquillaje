"use client"

import Image from "next/image";
import { Fondo } from "./components/fondo";
import React, { useState } from 'react';
import Modal from './components/modal';
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
    <div className="mx-[20%] px-4 sm:px-6 lg:px-8 md:w-[65%] mt-36">
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
      <div className="bg-pink-100  space-y-16 px-6 md:px-20 py-12 w-[50%]">
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
      <div className="bg-white space-y-16 px-6 md:px-20 py-12 w-[40%] ">
          <span className="text-green font-bold text-2xl">
            STEP 2 
          </span>
          <h2 className="font-bold sm:text-7xl">
              TAKE THE COURSE
            </h2> 
          <div className=" flex flex-col justify-between items-center h-[30vh]">
                  <div className="h-64"></div>
                  <div className="h-full">
                    <img src="/boton.png"/>
                  </div>
                <button onClick={openModal} className="w-full h-64 bg-red-700 hover:bg-red-800 text-white text-4xl px-32 font-bold">SUSCRIBIRSE OF COURSE</button>
                  <Modal isOpen={isModalOpen} onClose={closeModal}>
                    
                </Modal>
          </div>

        </div>
    </div>
    <footer className="flex items-center justify-center text-3xl py-32 w-full ">
      <div>
      ©2023 Mirage Beauty Coach. All rights reserved.  Privacy Policy  |  Created with Leadpages
      </div>
    </footer>
  </div>
  );
}
