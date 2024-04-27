import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../api/axios';

const ProductListPage = () => {
  const [productData, setProductData] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('ji');
        const response = await axiosInstance.get('/user/showProduct')
        console.log(response.data.getProduct);
        setProductData(response.data.getProduct)

      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])
  return (
    <div className=" mx-auto bg-black text-white h-screen mt-8 px-4">
      <h2 className="text-4xl font-bold mb-6 text-center">Car Collection</h2>
      
      {productData.map((product, key) => (
        <div key={product._id} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <>
            <Link to={`/bid/${product._id}`} className="hover:shadow-lg">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 overflow-hidden">
                <img src={product?.image} alt={product.name} className="mb-4 w-full h-40 object-cover rounded" />
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <p className="text-gray-300 font-bold mb-2">Base Price: {product.price}</p>
                <p className="text-gray-500">Year: {product.year}</p>
                <p className="text-gray-500">Model: {product.model}</p>
              </div>
            </Link></>
        </div>
      ))}
    </div>
  );
};

export default ProductListPage;
