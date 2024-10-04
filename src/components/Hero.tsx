import React from 'react'

export default function Hero() {
  return (
    <section className="hero flex items-center min-h-screen px-4 lg:px-8 relative max-w-7xl mx-auto">
  <div className="justify-center items-center">
    {/* Imagen PNG grande alineada ligeramente a la derecha */}
    <img
      src="/hero.png" // Cambia a la ruta de tu imagen
      alt="Hero Image"

      className="absolute lg:right-10 top-5 h-3/5 lg:h-full z-10 object-cover mx-auto sm:top-10"
    />

    {/* Texto grande en el medio */}
    <div className="lg:w-3/4 mb-8 lg:mb-0 z-20 mt-40 lg:mt-2">
      <h1 className="text-7xl sm:text-huge font-extrabold text-stone-900 leading-none tracking-wide text-center">
        CERAMIC
      </h1>
    </div>

    {/* Contenedor para texto y botón */}
    <div className="absolute bottom-5 left-5 z-20">
      {/* Texto pequeño en la esquina inferior izquierda dividido en 3 líneas */}
      <p className="text-xl md:text-lg sm:text-base font-light text-gray-500 antialiased mb-4">
        Lorem ipsum dolor sit amet, consectetur<br />
        adipisicing elit. Aliquid unde perspiciatis<br />
        sed, facilis voluptate est ullam laborum.
      </p>

      {/* Botón con efecto SVG debajo del texto */}
      <button className="mt-3 px-4 py-3 rounded-full font-normal tracking-wide bg-stone-800 hover:bg-stone-700 text-white outline-none focus:outline-none transition duration-200 ease-in-out flex items-center justify-center">
        <span>Explore Products</span>
        <svg
          className="w-6 h-6 ml-3 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </div>
  </div>
</section>
  )
}

