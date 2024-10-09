import React from 'react'

export default function About() {
  return (
    <section id='about' className=''>
      <div className="flex items-center justify-center py-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full max-w-7xl">
        
        {/* Columna de texto */}
        <div className="p-8 rounded-lg">
          <h2 className="text-4xl font-bold text-stone-700 mb-4">Sobre Nosotros</h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            ¡Bienvenidos a nuestra tienda de cerámica! Con más de 30 años de experiencia, nos apasiona ofrecer cerámicas artesanales de alta calidad que aporten calidez y elegancia a tu hogar. Nuestro viaje comenzó en 1988 con una profunda admiración por la artesanía tradicional, y hoy en día nos enorgullece presentar una selección exclusiva de piezas únicas. Cada artículo en nuestra tienda cuenta una historia, combinando técnicas tradicionales. Desde jarrones y juegos de vajilla, hasta esculturas decorativas, tenemos algo especial para cada estilo y ocasión. Elaboramos todos nuestros productos con barro y arcilla, manteniendo viva la tradición de la cerámica artesanal.
          </p>
        </div>
        
        {/* Columna de imagen */}
        <div className="flex items-center justify-center rounded-lg p-8">
          <img 
            src="/about.jpg" 
            alt="Ceramic Collection" 
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>
    </div>
    </section>
  )
}
