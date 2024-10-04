import React from 'react';


/*const products = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: `Cerámica ${index + 1}`,
  price: `$${(10 + index).toFixed(2)}`, // Precios desde $10.00 en adelante
  imageUrl: `https://137degrees.com/wp-content/uploads/2021/05/how-to-photograph-your-ceramics-137-degrees-1-1.jpg`, // Placeholder para la imagen
}));*/

export default function Products() {
  return (
    <div className='h-screen p-4'>
      <h1 className='text-2xl font-bold mb-4'>Products</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {products.slice(0, 6).map(product => (
          <div key={product.id} className='overflow-hidden p-2'>
            <div className='flex justify-center'>
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className='w-72 h-72 object-cover rounded-lg shadow-lg'
              />
            </div>
            <div className='mt-2 px-2 lg:px-14'>
              <div className='flex justify-between'>
                <h2 className='text-lg font-semibold'>{product.name}</h2>
                <span className='text-lg font-bold'>$ {product.price}</span>
              </div>
              <div className='flex justify-between items-center mt-2'>
                <a href="#" className='text-blue-500 hover:underline'>View More</a>
                <button className='bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600'>
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const products = [
    {
      id: 1,
      name: "Vaso Cerámico Azul",
      price: "1,500",
      imageUrl: "https://137degrees.com/wp-content/uploads/2021/05/how-to-photograph-your-ceramics-137-degrees-1-1.jpg"
    },
    {
      id: 2,
      name: "Plato Cerámico Rústico",
      price: "1,200",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5b1c967b620b8539d6648491/1599449431088-CF0AUD45ME4HCBSH59RW/Wandering%2BCollection.%2BSettle%2BCeramics.jpg"
    },
    {
      id: 3,
      name: "Taza de Cerámica Blanca",
      price: "800",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqCxsyEh3seWMyEAGJVzQzp0Guxz1aYEfOlmaToy4nHO-TAvAL_Y1ypEhKu1jTgTBPNw4&usqp=CAU"
    },
    {
      id: 4,
      name: "Jarrón Cerámico Verde",
      price: "2,300",
      imageUrl: "https://www.azuremagazine.com/wp-content/uploads/2023/08/Azure-Ceramics-Roundup-Hero.jpg"
    },
    {
      id: 5,
      name: "Cuenco de Cerámica Amarillo",
      price: "1,000",
      imageUrl: "https://static1.squarespace.com/static/60ae11c53b5cfd0165fd628a/t/64d0c0566c94d354c582b60b/1691402332362/St-Leonards-Ceramics.jpg?format=1500w"
    },
    {
      id: 6,
      name: "Plato hondo Cerámico",
      price: "1,400",
      imageUrl: "https://www.decotazas.com/en/wp-content/uploads/2018/01/Custom-promotional-ceramics.jpg"
    },
    {
      id: 7,
      name: "Taza de Cerámica Decorativa",
      price: "950",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5730cd4e1d07c088bf72484a/1486710563380-HLD26S4LGAQFRI3OIA1Z/File_000+%283%29.jpeg?format=1500w"
    },
    {
      id: 8,
      name: "Cerámica para Plantas",
      price: "1,600",
      imageUrl: "https://www.re-thinkingthefuture.com/materials-construction/a6220-9-must-have-products-made-of-ceramics/attachment/image-8_-andretta-pottery_i-pinimg-com/"
    },
    {
      id: 9,
      name: "Set de Platos Cerámicos",
      price: "3,200",
      imageUrl: "https://kwceramics.com.au/cdn/shop/collections/KWCeramics_LR_MixedSets_SQ-11_2048x.jpg?v=1688874015"
    },
    {
      id: 10,
      name: "Tazón Cerámico Grande",
      price: "1,250",
      imageUrl: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/573/posts/22924/image/photograph-ceramics-final.JPG"
    }
  ];
  