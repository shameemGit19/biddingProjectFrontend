import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import carImage1 from '../assets/images/Classic-cars.png'; 
import carImage2 from '../assets/images/Classic-cars.png';
import carImage3 from '../assets/images/Classic-cars.png';
import carImage4 from '../assets/images/Classic-cars.png';

const ProductListPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Mercedes',
      description: 'Luxury car with advanced features.',
      price: '$50,000',
      year: '2022',
      model: 'Mercedes S-Class',
      image: carImage1,
    },
    {
      id: 2,
      name: 'Audi',
      description: 'Sporty and elegant design.',
      price: '$75,000',
      year: '2021',
      model: 'Audi A8',
      image: carImage2,
    },
    {
      id: 3,
      name: 'Aston Martin',
      description: 'Exquisite design with powerful performance.',
      price: '$70,000',
      year: '2021',
      model: 'Aston Martin DB11',
      image: carImage3,
    },
    {
      id: 4,
      name: 'Chevrolet',
      description: 'Classic American muscle car.',
      price: '$75,000',
      year: '1991',
      model: 'Chevrolet Camaro',
      image: carImage4,
    },
  ]);

  return (
    <div className="container mx-auto bg-black text-white h-screen mt-8 px-4">
      <h2 className="text-4xl font-bold mb-6 text-center">Car Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} to={`/bid`} className="hover:shadow-lg">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 overflow-hidden">
              <img src={product.image} alt={product.name} className="mb-4 w-full h-40 object-cover rounded" />
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <p className="text-gray-300 font-bold mb-2">Base Price: {product.price}</p>
              <p className="text-gray-500">Year: {product.year}</p>
              <p className="text-gray-500">Model: {product.model}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
