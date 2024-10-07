import React from 'react'
import { IoArrowDown } from "react-icons/io5";
export default function Hero() {
  return (
    <section className="relative flex items-center min-h-1.5 bg-[url('/bg1.jpg')] bg-cover bg-center rounded-br-4xl">
              {/* Overlay que cubre todo */}
              <div className="absolute inset-0 bg-stone-900 opacity-70 rounded-br-4xl"></div>
                  <div className="hero flex items-center min-h-screen px-4 lg:px-8 relative max-w-7xl mx-auto">
                    {/* Contenido de la hero section */}
                    <div className="justify-center items-center ">
                    {/* Imagen PNG grande alineada ligeramente a la derecha 
                    <img
                      src="/hero.png" 
                      alt="Hero Image"
                      className="absolute lg:right-10 top-5 h-3/5 lg:h-full z-10 object-cover mx-auto sm:top-10"
                    />*/}
                    <div className="lg:w-3/4 mb-10 lg:mb-0 z-20 lg:mt-2">
                        <h1 className="text-8xl sm:text-huge font-extrabold text-stone-300 leading-none tracking-wide text-center">
                          ADELA
                        </h1>
                        <h1 className="text-5xl sm:text-xxxl font-extrabold text-stone-400 leading-none tracking-wide text-center">
                          ALFARERÍA
                        </h1>
                    </div>
         
                    

                    {/* Contenedor para texto y botón */}
                    <div className="absolute bottom-5 left-5 z-20">
                      {/* Texto pequeño en la esquina inferior izquierda dividido en 3 líneas */}
                      <p className="text-xl md:text-lg sm:text-base font-light text-stone-300/80 antialiased mb-4">
                        Lorem ipsum dolor sit amet, consectetur<br />
                        adipisicing elit. Aliquid unde perspiciatis<br />
                        sed, facilis voluptate est ullam laborum.
                      </p>

                      {/* Botón con efecto SVG debajo del texto */}
                      <button className="mt-3 px-4 py-3 rounded-full font-normal tracking-wide bg-stone-200 hover:bg-stone-300 outline-none focus:outline-none transition duration-200 ease-in-out flex items-center justify-center">
                        <span className='text-stone-600 font-semibold'>Explore Products</span>
                        <IoArrowDown className='w-6 h-6 ml-3 animate-bounce text-stone-600'/>
                      </button>
                    </div>
                  </div>
                </div>
    </section>
  
    
  )
}

