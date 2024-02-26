import React, { useState } from 'react';

const ProductListPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: '$50.00',
      year: '2022',
      model: 'Model A',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: '$75.00',
      year: '2021',
      model: 'Model B',
    },
    // Add more products as needed
  ]);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-gray-600">Price: {product.price}</p>
            <p className="text-gray-600">Year: {product.year}</p>
            <p className="text-gray-600">Model: {product.model}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
