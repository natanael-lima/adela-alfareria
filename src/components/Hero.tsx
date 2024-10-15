"use client"

import React, { useEffect, useState } from 'react'
import { IoArrowDown } from "react-icons/io5";
export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
   // Lista de URLs de imágenes de fondo
   const backgroundImages = [
    "/bg1.jpg",
    "/bg2.jpg",
    "/bg4.jpg",
  ];

  // Cambiar la imagen de fondo cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex: number) => (prevIndex + 1) % backgroundImages.length);
    }, 10000); // Cambiar cada 10 segundos

    return () => clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
  }, [backgroundImages.length]);
  // Función para cambiar la imagen manualmente
  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index); // Cambiar el índice de la imagen actual
  };
   // Maneja el desplazamiento suave al hacer clic en los enlaces
   const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();  // Prevenir el comportamiento por defecto del enlace
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });  // Desplazamiento suave
    }
  };

  return (
    <section  id="home"
              className="relative flex items-center min-h-1.5 bg-cover bg-center rounded-br-4xl transition-all duration-1000 ease-in-out"
              style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }} // Imagen dinámica
              >
                  {/* Overlay que cubre todo */}
                  <div className="absolute inset-0 bg-stone-900 opacity-60 rounded-br-4xl"></div>
                  <div className="hero flex items-center min-h-screen px-4 lg:px-8 relative max-w-7xl mx-auto">
                    {/* Contenido de la hero section */}
                    <div className="justify-center items-center ">
                    {/* Imagen PNG grande alineada ligeramente a la derecha 
                    <img
                      src="/hero.png" 
                      alt="Hero Image"
                      className="absolute lg:right-10 top-5 h-3/5 lg:h-full z-10 object-cover mx-auto sm:top-10"
                    />*/}
                    <div className="lg:w-3/4 mb-20 lg:mb-0 z-20 lg:mt-2">
                        <h1 className="text-8xl sm:text-huge font-extrabold text-stone-200 leading-none tracking-wide text-center">
                          ADELA
                        </h1>
                        <h1 className="text-5xl sm:text-xxxl font-extrabold text-stone-300 leading-none tracking-wide text-center">
                          ALFARERÍA
                        </h1>
                    </div>
                    {/* Contenedor para texto y botón */}
                    <div className="absolute bottom-20 left-5 z-20">
                      {/* Texto pequeño en la esquina inferior izquierda dividido en 3 líneas */}
                      <p className="text-xl md:text-lg sm:text-base font-light text-stone-300/80 antialiased mb-4">
                        Adela Alfarería transforma el barro en piezas únicas.<br />
                        Cada creación refleja tradición y dedicación.<br />
                        Artesanía hecha con manos expertas y pasión.<br />
                      </p>


                      {/* Botón con efecto SVG debajo del texto */}
                      <a onClick={(e) => handleSmoothScroll(e, 'product')} className="w-56 mt-3 px-4 py-3 rounded-full font-normal tracking-wide bg-stone-200 hover:bg-stone-300 outline-none focus:outline-none transition duration-200 ease-in-out flex items-center justify-center">
                        <span className='text-stone-600 font-semibold'>Explorar Productos</span>
                        <IoArrowDown className='w-6 h-6 ml-3 animate-bounce text-stone-600'/>
                      </a>
                    </div>
                  </div>
                   {/* Indicadores de carrusel (puntos) */}
                    <div className="absolute bottom-5 w-full flex justify-center z-30">
                      {backgroundImages.map((_, index) => (
                        <span
                          key={index}
                          onClick={() => handleDotClick(index)}
                          className={`mx-2 h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
                            currentImageIndex === index ? 'bg-stone-200' : 'bg-stone-500'
                          }`}
                        />
                      ))}
                      </div>
                </div>
    </section>
  
    
  )
}

