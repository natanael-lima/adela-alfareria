import React from 'react'
import { FaCreditCard, FaWhatsapp, FaTruck } from 'react-icons/fa'
import { IoIosCall } from "react-icons/io"

export default function InfoPayment() {
  return (
    <div className="max-w-7xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center px-4">
      {/* Envíos a todo el país */}
      <div className="flex flex-col items-center justify-center">
        <FaTruck className="text-4xl text-stone-600 mb-4" />
        <h3 className="text-lg font-bold mb-2">ENVÍOS A todo el País</h3>
        <p className="text-sm font-light">GRATIS JUJUY con mínimo de compra</p>
      </div>

      {/* Cuotas sin interés con borde */}
      <div className="flex flex-col items-center justify-center sm:border-l sm:border-gray-300">
        <FaCreditCard className="text-4xl text-stone-600 mb-4" />
        <h3 className="text-lg font-bold mb-2">Hasta 3 cuotas sin interés</h3>
        <p className="text-sm font-light">10% off en efectivo o transferencia</p>
      </div>

      {/* Consultas con borde */}
      <div className="flex flex-col items-center justify-center sm:border-l sm:border-gray-300">
        <IoIosCall className="text-4xl text-stone-600 mb-4" />
        <h3 className="text-lg font-bold mb-2">Consultas</h3>
        <p className="text-sm font-light">54 9 3884 34 2648</p>
      </div>
    </div>

  )
}
