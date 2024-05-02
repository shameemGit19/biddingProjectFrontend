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
    <div className=" mx-auto bg-gradient-to-b from-gray-900 to-black text-white min-h-screen mt-8 px-4">
    <h2 className="text-4xl font-bold mb-6 text-center">Car Collection</h2>
    <div className="grid grid-cols-2 gap-6">
        {productData.map((product, key) => (
            <Link to={`/bid/${product._id}`} key={product._id} className="hover:shadow-lg">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 overflow-hidden">
                    <img src={product?.image} alt={`${product.name}, ${product.year}`} className="mb-4 w-full h-96 object-cover rounded" loading="lazy"/>
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
