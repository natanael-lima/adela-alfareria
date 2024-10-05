"use client"; // Asegúrate de tener esto si usas Next.js

import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { HiBars3BottomRight } from "react-icons/hi2";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`w-full text-stone-700 py-4 shadow-sm z-30 ${isScrolled ? 'bg-stone-100' : 'bg-transparent'} fixed top-0 left-0 transition-all duration-200`}>
      <div className="container px-4 flex justify-between items-center max-w-7xl mx-auto">
        {/* Contenedor de Logo y Navegación (todo alineado a la izquierda) */}
        <div className="flex items-center space-x-8">
          {/* Logo con texto AG */}
          <div className="flex items-center text-2xl font-bold">
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-10" /> {/* Coloca tu logo aquí */}
              <span className="ml-2 text-stone-600">AG</span> {/* Nombre AG al lado del logo */}
            </a>
          </div>

          {/* Opciones de Navegación alineadas al logo */}
          <nav className="hidden md:flex space-x-14">
            <a href="#home" className="text-1xl font-medium text-stone-600 hover:text-stone-700">Home</a>
            <a href="#about" className="text-1xl font-medium text-stone-600 hover:text-stone-700">Products</a>
            <a href="#services" className="text-1xl font-medium text-stone-600 hover:text-stone-700">About Us</a>
            <a href="#services" className="text-1xl font-medium text-stone-600 hover:text-stone-700">Contac Us</a>
          </nav>
        </div>

        {/* Botón de Contacto alineado a la derecha */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-stone-500/80 hover:bg-stone-600/80 text-white font-md py-2 px-4 rounded-full transition duration-300"
          >
            Message Direct
          </a>
        </div>

        {/* Botón de Menú para Móviles */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-stone-700 focus:outline-none"
          >
            {isMenuOpen ? <IoClose size={28} /> : <HiBars3BottomRight size={28} />} {/* Iconos de hamburguesa y close */}
          </button>
        </div>
      </div>

      {/* Menú para Móviles */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4 bg-stone-100 text-stone-600">
            <a href="#home" className="text-lg hover:text-stone-400" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-lg hover:text-stone-400" onClick={toggleMenu}>About</a>
            <a href="#services" className="text-lg hover:text-stone-400" onClick={toggleMenu}>Services</a>
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
