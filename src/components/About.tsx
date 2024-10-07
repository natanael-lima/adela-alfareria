import React from 'react'

export default function About() {
  return (
    <div className='bg-red-200 h-screen'>
      <div className="min-h-screen flex items-center justify-center bg-stone-100 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full max-w-6xl">
        
        {/* Columna de texto */}
        <div className="bg-stone-200 p-8">
          <h2 className="text-4xl font-bold text-stone-700 mb-4">About Us</h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Welcome to our ceramic store! We are passionate about providing high-quality, handcrafted ceramics that bring warmth and elegance to your home. Our journey started with a deep appreciation for artisanal craftsmanship, and today we proudly offer a curated selection of unique pieces. Every item in our store tells a story, blending traditional techniques with modern design. Whether you're looking for a beautiful vase, a dinnerware set, or a decorative sculpture, we have something special for every style and occasion.
          </p>
        </div>
        
        {/* Columna de imagen */}
        <div className="bg-stone-300 flex items-center justify-center p-8">
          <img 
            src="/about.jpg" 
            alt="Ceramic Collection" 
            className="w-80 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>
    </div>
    </div>
  )
}
