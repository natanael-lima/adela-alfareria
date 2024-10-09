import React from 'react'
import { HiMail } from 'react-icons/hi'
import { IoLocationSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
 
export default function Contact() {
  return (
        <section id='contact' className="text-gray-600 body-font  relative">
          <div className="absolute inset-0 rounded-lg">
            <iframe
            width="100%"
            height="600"
            frameBorder="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d383.24175346!2d-65.29338!3d-24.175353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f6424c663a5%3A0xc06735edc0f7198d!2sLos%20Quebrachales%2C%20San%20Salvador%20de%20Jujuy%2C%20Jujuy!5e0!3m2!1ses!2sar!4v1696694952224!5m2!1ses!2sar"
            allowFullScreen
            style={{}}
          />
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-6 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-md z-10">
            <h1 className='text-4xl font-bold mb-4'>Contacto</h1>
              
              
              {/* Dirección */}
              <div className="mb-4">
                <div className="flex items-center mb-4">
                  <IoLocationSharp size={24} className="text-stone-600 mr-2" />
                   <a href="mailto:sales@asdasl" className="text-stone-600 font-semibold">Adela Alfarería</a>
                </div>
                    
                    <p className="text-sm text-stone-500">
                    Margen Derecha del Rio Chijra<br />
                    Numero 35<br />
                    Jujuy, Argentina
                    </p>
                
              </div>
              
              {/* Teléfono */}
              <div className="mb-4">
                <div className="flex items-center mb-4">
                <IoLogoWhatsapp size={24} className="text-stone-600 mr-2" /><p className="text-stone-600 font-semibold">+54 (388) 434 2648</p>
                </div>
                <p className="text-sm text-stone-500">Disponible de Lunes a Viernes de 9:00 AM – 5:00 PM</p>
                <p className="text-sm text-stone-500">Nota: pausa para comer entre las 12:30 y las 13:00 PM</p>
              </div>
              
              {/* Email con icono */}
              <div className="flex items-center mb-4">
                <HiMail size={24} className="text-stone-600 mr-2" />
                <a href="mailto:sales@asd.nl" className="text-stone-600 font-semibold">adelagutierrez@gmail.com</a>
              </div>
              
              {/* Botón de contacto */}
              <button className="text-white bg-stone-600 border-0 py-2 px-6 focus:outline-none hover:bg-stone-700 rounded-full text-lg">
                Contáctanos
              </button>

              <p className="text-xs text-stone-500 mt-3">
                Estamos aquí para ayudarte con cualquier consulta o duda.
              </p>
            </div>
          </div>
        </section>
  )
}
