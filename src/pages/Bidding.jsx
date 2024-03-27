import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const CarBiddingPage = () => {
  const [basePrice, setBasePrice] = useState(20000);
  const [currentBid, setCurrentBid] = useState(basePrice);
  const [bidAmount, setBidAmount] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://etimg.etb2bimg.com/photo/74151705.cms',
    'https://images.unsplash.com/photo-1604262725913-1c415cd27564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2142&q=80',
    // Add more image URLs as needed
  ];
  const navigate = useNavigate();

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const newBidAmount = parseFloat(bidAmount);
    if (!isNaN(newBidAmount) && newBidAmount > currentBid) {
      setCurrentBid(newBidAmount);
      setBidAmount('');
    }
  };

  const handleChatButtonClick = () => {
    // Add logic for opening the chat here
    console.log('Chat button clicked!');
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" style={{ backgroundImage: url(images[currentImageIndex])}} id="modal-id'>
      <div className="absolute bg-black opacity-80 inset-0 z-0">
        <div className='relative min-h-screen flex flex-col items-center justify-center'>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">Car Bidding</h2>
          <div className="mb-4">
            <img
              src={images[currentImageIndex]}
              alt="Car Image"
              className="w-full h-64 object-cover mb-4 rounded-md shadow-md"
            />
            <div className="flex justify-center gap-60">
              <button
                onClick={handlePreviousImage}
                className="bg-blue-500 text-white px-3 py-2 rounded-l hover:bg-blue-700 focus:outline-none"
              >
                ←
              </button>
              <button
                onClick={handleNextImage}
                className="bg-blue-500 text-white px-3 py-2 rounded-r hover:bg-blue-700 focus:outline-none"
              >
                →
              </button>
            </div>
            <p className="text-white mb-2 text-center">Base Price: ${basePrice}</p>
            <p className="text-red-600 font-bold mb-2 text-center">Current Highest Bid: ${currentBid}</p>
          </div>
          <form onSubmit={handleBidSubmit} className="flex flex-col items-center">
            <label htmlFor="bidAmount" className="text-white text-sm font-bold mb-2">
              Your Bid Amount
            </label>
            <div className="flex">
              <input
                type="number"
                id="bidAmount"
                name="bidAmount"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                className="w-2/3 px-3 py-2 border rounded-l focus:outline-none focus:border-blue-500"
                min={currentBid + 1}
                placeholder="Enter your bid..."
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-700 focus:outline-none ml-1"
              >
                Bid
              </button>
            </div>
          </form>
          <button
            onClick={() => {
              navigate('/chat');
            }}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none"
          >
            Chat with seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarBiddingPage;
