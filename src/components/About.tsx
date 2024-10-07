import React from 'react'

export default function About() {
  return (
    <div className=''>
      <div className="flex items-center justify-center py-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full max-w-7xl">
        
        {/* Columna de texto */}
        <div className="p-8 rounded-lg">
        <h2 className="text-4xl font-bold text-stone-700 mb-4">About Us</h2>
        <h3 className="text-3xl font-bold text-stone-600 mb-4">Hand Crafted Pottery since 1985</h3>
          <p className="text-stone-500 text-lg leading-relaxed">
            Welcome to our ceramic store! We are passionate about providing high-quality, handcrafted ceramics that bring warmth and elegance to your home. Our journey started with a deep appreciation for artisanal craftsmanship, and today we proudly offer a curated selection of unique pieces. Every item in our store tells a story, blending traditional techniques with modern design. Whether you're looking for a beautiful vase, a dinnerware set, or a decorative sculpture, we have something special for every style and occasion.
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
    </div>
  )
}
