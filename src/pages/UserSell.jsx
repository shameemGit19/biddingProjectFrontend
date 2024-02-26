import React, { useState } from 'react';

const ProductAddPage = () => {
  const [product, setProduct] = useState({
    manufacture: '',
    description: '',
    price: '',
    year: '',
    model: '',
  });

  const handleChange = (e) => {
    const { product, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [product]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic (e.g., send data to server)
    console.log('Product submitted:', product);
    // Reset the form after submission
    setProduct({
      manufacture: '',
      description: '',
      price: '',
      year: '',
      model: '',
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add Product</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Manufacture
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.manufacture}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            // value={product.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
          <input type="number" name="" id="" />
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700 text-sm font-bold mb-2">
            Year
          </label>
          <input
            type="text"
            id="year"
            name="year"
            value={product.year}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="model" className="block text-gray-700 text-sm font-bold mb-2">
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            value={product.model}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductAddPage;