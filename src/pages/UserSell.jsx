import React, { useState } from 'react';
import axios from 'axios';
// import {useHistory} from 'react-router-dom'

const ProductAddPage = () => {
  // const history = useHistory();
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');
  const [price, setprice] = useState('');
  const [year, setyear] = useState('');
  const [model, setmodel] = useState('');
  const [image, setimage] = useState(null);


  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'name':
        setname(value);
        break;
      case 'description':
        setdescription(value);
        break;
      case 'price':
        setprice(value);
        break;
      case 'year':
        setyear(value);
        break;
      case 'model':
        setmodel(value);
        break;
      case 'image':
        setimage(e.target.files[0]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData= new FormData();
    formData.append('name',name);
    formData.append('description',description)
    formData.append('price',price)
    formData.append('year',year)
    formData.append('model',model)
    formData.append('image',image)

    try{
      const response= await axios.post('http://localhost:4000/user/addproduct',formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response);
  

    }catch(error){
      console.error('Error in addproduct page',error)
    }
    
    // console.log('Product submitted:', name, description, price, year, model, image);
    // // Reset the form after submission
    // setname('');
    // setdescription('');
    // setprice('');
    // setyear('');
    // setmodel('');
    // setimage(null);
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
            value={name}
            onChange={(e) => setname(e.target.value)}
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
            value={description}
            onChange={(e) => setdescription(e.target.value)}
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
            value={price}
            onChange={(e) => setprice(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700 text-sm font-bold mb-2">
            Year
          </label>
          <input
            type="number"
            id="year"
            name="year"
            value={year}
            onChange={(e) => setyear(e.target.value)}
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
            value={model}
            onChange={(e) => setmodel(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
        >
          Add Product
        </button>
        <button></button>
      </form>
    </div>
  );
};

export default ProductAddPage;