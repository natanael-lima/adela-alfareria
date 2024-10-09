
"use client"
 
import React, { useState } from 'react';
import { GrFormNext,GrFormPrevious  } from "react-icons/gr";

/*const products = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: `Cerámica ${index + 1}`,
  price: `$${(10 + index).toFixed(2)}`, // Precios desde $10.00 en adelante
  imageUrl: `https://137degrees.com/wp-content/uploads/2021/05/how-to-photograph-your-ceramics-137-degrees-1-1.jpg`, // Placeholder para la imagen
}));*/

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  // Calcular los productos que se mostrarán en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Estado para la imagen seleccionada

  // Función para abrir el modal con la imagen seleccionada
  const handleImageClick = (imgUrl: string) => {
    setSelectedImage(imgUrl); // Establece la imagen seleccionada
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedImage(null); // Cierra el modal
  };

  // Función para cambiar de página
  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id='product' className=''>
          <h1 className='text-4xl font-bold mb-4'>Productos</h1>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
            {/* Mapeo de productos */}
              {currentProducts.map(product => (
                <div key={product.id} className='relative overflow-hidden p-1 group'>
                  {/* Contenedor de la imagen */}
                  <div className='relative' onClick={() => handleImageClick(product.imageUrl)}>
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className='w-full h-40 lg:w-full lg:h-72 object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-70'
                      />
                      {/* Overlay oscuro al hacer hover */}
                      <div onClick={() => handleImageClick(product.imageUrl)} className='absolute inset-0 bg-stone-950 bg-opacity-40 opacity-0 rounded-lg group-hover:opacity-100 transition-opacity duration-300'></div>
                      {/* Botón de View More */}
                      <div className='absolute inset-0 flex justify-center items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <button onClick={() => handleImageClick(product.imageUrl)} className='bg-stone-200 text-stone-600 py-1 px-4 mb-2 rounded-full hover:bg-stone-300'>
                          Ver Mas
                        </button>
                      </div>
                  </div>

                  {/* Información del producto */}
                  <div className='mt-2 px-2 lg:px-2'>
                    <div className='flex flex-col sm:flex-row sm:justify-between items-center'>
                      <h2 className='text-sm font-semibold'>{product.name}</h2>
                      <span className='text-sm font-extrabold'>$ {product.price}</span>
                    </div>
                    <button className='mt-2 bg-stone-600 w-full text-white py-2 px-4 mb-2 rounded-full hover:bg-stone-700'>
                      Comprar
                    </button>
                  </div>
                </div>
              ))}

              {/* Modal para la imagen */}
              {selectedImage && (
                <div
                  className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'
                  onClick={closeModal} // Cierra el modal cuando se hace clic fuera de la imagen
                >
                  <div className='relative'>
                    <img
                      src={selectedImage}
                      alt='Selected'
                      className='max-w-full max-h-screen object-contain'
                    />
                    <button
                      className='absolute top-1 right-4 text-black text-4xl'
                      onClick={closeModal} // Botón para cerrar el modal
                    >
                      &times;
                    </button>
                  </div>
                </div>
              )}
          </div>
          {/* Paginación */}
          <div className="grid min-h-[140px] w-full place-items-start overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <nav>
              <ul className="flex">
                <li>
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-stone-200/35 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    aria-label="Previous"
                  >
                    <GrFormPrevious />
                  </button>
                </li>

                {/* Renderizado dinámico de los números de página */}
                {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setCurrentPage(index + 1)}
                      className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full p-0 text-sm text-stone-600/70 shadow-md transition duration-150 ease-in-out ${
                        currentPage === index + 1 ? 'bg-stone-300' : 'border border-blue-gray-100 bg-transparent text-gray-700 hover:bg-stone-200/35'
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    onClick={nextPage}
                    disabled={currentPage === Math.ceil(products.length / productsPerPage)}
                    className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-stone-200/35 ${currentPage === Math.ceil(products.length / productsPerPage) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    aria-label="Next"
                  >
                    <GrFormNext />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
    </section>
  );
}
const products = [
    {
      id: 1,
      name: "Azucarera",
      price: "5.400",
      imageUrl: "https://i.postimg.cc/43VnKfQG/1.png"
    },
    {
      id: 2,
      name: "Jarron Mujer",
      price: "6.400",
      imageUrl: "https://i.postimg.cc/dVvJW28b/5.png"
    },
    {
      id: 3,
      name: "Cactus Porta Anillos",
      price: "1.500",
      imageUrl: "https://i.postimg.cc/CLbFHPfC/6.png"
    },
    {
      id: 4,
      name: "Olla Grande",
      price: "14.000",
      imageUrl: "https://i.postimg.cc/WzgP8ztp/10.png"
    },
    {
      id: 5,
      name: "Cazuela de Barro",
      price: "3.999",
      imageUrl: "https://i.postimg.cc/66vwtjzs/11.png"
    },
    {
      id: 6,
      name: "Cuenco Bowl Ceramica",
      price: "3.500",
      imageUrl: "https://i.postimg.cc/ncfxz4wX/12.png"
    },
    {
      id: 7,
      name: "Olla Mediana",
      price: "11.600",
      imageUrl: "https://i.postimg.cc/4drgpVfF/8.png"
    },
    {
      id: 8,
      name: "Porta velas",
      price: "2.000",
      imageUrl: "https://i.postimg.cc/s2HyDbtz/7.png"
    },
    {
      id: 9,
      name: "Jarra",
      price: "5,500",
      imageUrl: "https://i.postimg.cc/Bng4RjpX/4.png"
    },
    {
      id: 10,
      name: "Ollita multiuso 2cm",
      price: "200",
      imageUrl: "https://i.postimg.cc/FRfvfD4L/9.png"
    },
    {
      id: 11,
      name: "Ollita multiuso 8cm",
      price: "3.000",
      imageUrl: "https://i.postimg.cc/63KqnkMv/2.png"
    },
    {
      id: 12,
      name: "Ollita multiuso 4cm",
      price: "900",
      imageUrl: "https://i.postimg.cc/Zq54mJsj/3.png"
    }
  ];
  