"use client"; // Asegúrate de tener esto si usas Next.js

import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { HiBars3BottomRight } from "react-icons/hi2";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Alternar el menú de navegación
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Manejar el scroll para cambiar el estado de la barra de navegación
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Efecto para agregar/quitar el evento del scroll en el componente
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Efecto para bloquear/desbloquear el scroll del fondo cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden'); // Bloquea el fondo
    } else {
      document.body.classList.remove('overflow-hidden'); // Desbloquea el fondo
    }

    // Cleanup para remover la clase cuando el componente se desmonte
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]); // Escucha los cambios en `isMenuOpen`


  return (
    <header className={`w-full text-stone-700 py-4 shadow-sm z-30 ${isScrolled ? 'bg-neutral-950' : 'bg-transparent'} ${isMenuOpen ? 'bg-neutral-950 h-full w-80' : 'bg-transparent'}  fixed top-0 left-0 transition-all duration-100`}>
      <div className="container px-4 flex justify-between items-center max-w-7xl mx-auto">
        {/* Contenedor de Logo y Navegación (todo alineado a la izquierda) */}
        <div className="flex items-center space-x-8">
          {/* Logo con texto AG */}
          <div className="flex items-center text-2xl font-bold">
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-10" /> {/* Coloca tu logo aquí */}
              <span className="ml-2 text-stone-200">AG</span> {/* Nombre AG al lado del logo */}
            </a>
          </div>

          {/* Opciones de Navegación alineadas al logo */}
          <nav className="hidden md:flex space-x-14">
            <a href="#home" className="text-1xl font-medium text-stone-200 hover:text-stone-300">Home</a>
            <a href="#about" className="text-1xl font-medium text-stone-200 hover:text-stone-300">Products</a>
            <a href="#services" className="text-1xl font-medium text-stone-200 hover:text-stone-300">About Us</a>
            <a href="#services" className="text-1xl font-medium text-stone-200 hover:text-stone-300">Contac Us</a>
          </nav>
        </div>

        {/* Botón de Contacto alineado a la derecha */}
        <div className="hidden md:block">
          <a href="#contact" className="font-semibold flex items-center justify-center order-1 w-full px-4 py-2 mt-3 text-sm tracking-wide capitalize transition-colors duration-300 transform border rounded-full sm:mx-2 dark:border-stone-100/50 text-stone-100 dark:hover:text-stone-600 sm:mt-0 sm:w-auto focus:outline-none focus:ring dark:hover:bg-stone-200 focus:ring-stone-200 focus:ring-opacity-40">
                Message Direct
          </a>
        </div>

        {/* Botón de Menú para Móviles */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-stone-200 focus:outline-none"
          >
            {isMenuOpen ? <IoClose size={28} /> : <HiBars3BottomRight size={28} />} {/* Iconos de hamburguesa y close */}
          </button>
        </div>
      </div>
      {/* Menú para Móviles */}
      {isMenuOpen  && (
        <div className="md:hidden z-30">
          <nav className="flex flex-col items-center space-y-4 py-4 bg-stone-950 text-stone-200 transition-all duration-100">
            <a href="#home" className="text-lg hover:text-stone-300" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-lg hover:text-stone-300" onClick={toggleMenu}>Products</a>
            <a href="#about" className="text-lg hover:text-stone-300" onClick={toggleMenu}>About us</a>
            <a href="#services" className="text-lg hover:text-stone-300" onClick={toggleMenu}>Contact us</a>
            <a
              href="#contact"
              className="font-semibold px-4 py-2 mt-3 text-sm tracking-wide capitalize transition-colors duration-300 transform border rounded-full sm:mx-2 dark:border-stone-100/50 text-stone-100 dark:hover:text-stone-600 sm:mt-0 sm:w-auto focus:outline-none focus:ring dark:hover:bg-stone-200 focus:ring-stone-200 focus:ring-opacity-40"
            >
              Message Direct
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
