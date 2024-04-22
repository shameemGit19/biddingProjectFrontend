import React, { useState } from 'react';
import axios from 'axios';

const ProductAddPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [model, setModel] = useState('');
  const [image, setImage] = useState('');

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'year':
        setYear(value);
        break;
      case 'model':
        setModel(value);
        break;
      case 'image':
        setImage(files[0]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('year', year);
    formData.append('model', model);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:4000/user/addproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response);
      setName('');
      setDescription('');
      setPrice('');
      setYear('');
      setModel('');
      setImage('');
    } catch (error) {
      console.error('Error in addproduct page', error);
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4 " style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?luxury,car")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
      <form onSubmit={handleSubmit} className="max-w-screen-sm mx-auto bg-white/80 p-6 rounded-md shadow-md backdrop-blur-sm">
        <h2 className="text-2xl text-center font-bold mb-6 text-blue-800">Add Product</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Manufacture
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
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
            value={description}
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
            value={price}
            onChange={handleChange}
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
            value={model}
            onChange={handleChange}
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
          className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductAddPage;
