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
    <div className="mx-2 md:mx-[18%]  md:px-8 md:w-[65%]">
      <div className="md:px-12  mt-12 md:mt-24">
        <img src="header.png" width={300} height={300}/>
      </div>
      <div className=" sm:px-8 md:px-10 lg:px-12 xl:px-14 mt-12 md:mt-32">
        <h2 className="text-5xl font-bold leading-tight sm:text-5xl">
          10 essential makeup<span className="block mb-2 md:mb-4"></span>
          techniques to create your<span className="block mb-2 md:mb-4"></span>
          perfect look.
        </h2>
      </div>
    <div className=" flex flex-col mt-32 md:ml-4 md:flex-row ">
      <div className="bg-red-100  space-y-4 md:space-y-18 md:px-10 py-2 md:py-6 md:w-[55%] px-4">
        <span className="text-green font-bold text-lg ">
          STEP 1
        </span>
        <h2 className="font-bold sm:text-3xl">
          WATCH THE VIDEO
        </h2>
    
        <div className="w-full h-auto">
          <video controls className="inset-0 w-full h-full object-cover">
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="bg-white space-y-4 md:space-y-18 md:px-10 py-2 md:py-6 md:w-[45%] px-4">
          <span className="text-green font-bold text-lg ml-6">
            STEP 2 
          </span>
          <h2 className="font-bold sm:text-3xl ml-6">
              TAKE THE COURSE
            </h2> 
          <div className=" flex flex-col justify-between items-center h-[35vh]">
                  <div className="h-64"></div>
                  <div className="h-full ">
                    <img src="/boton.png" width={140} height={140}/>
                  </div>
                <button onClick={openModal} className="w-[80%] bg-red-700 hover:bg-red-800 text-white text-xl p-6 font-bold mt-6">SUSCRIBIRSE OF COURSE</button>
                  <Modal isOpen={isModalOpen} onClose={closeModal}>
                    
                </Modal>
          </div>

        </div>
    </div>
    <footer className="flex items-center justify-center text-1xl w-full mt-24 mb-16">
      <div>
      ©2023 Mirage Beauty Coach. All rights reserved.  Privacy Policy  |  Created with Leadpages
      </div>
    </footer>
  </div>
  );
}
