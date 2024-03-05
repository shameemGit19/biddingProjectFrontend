import React, { useState } from 'react';
import io from 'socket.io-client';


const CarBiddingPage = () => {
  const [basePrice, setBasePrice] = useState(20000);
  const [currentBid, setCurrentBid] = useState(basePrice);
  const [bidAmount, setBidAmount] = useState('');

  const socket = io('http://your-socket-server-url');

  useEffect(() => {
    // Listen for bidding updates from the server
    socket.on('bidUpdate', (newBid) => {
      setCurrentBid(newBid);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, [socket]);


  const handleBidSubmit = (e) => {
    e.preventDefault();
    const newBidAmount = parseFloat(bidAmount);
    if (!isNaN(newBidAmount) && newBidAmount > currentBid) {
      setCurrentBid(newBidAmount);
      setBidAmount('');
    }
  };

  return (
    <div className='bg-red-100 h-screen mt-0'>
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-red-100 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Car Bidding</h2>
        <div className="mb-4">
          <img
            src="https://w7.pngwing.com/pngs/416/601/png-transparent-vintage-car-classic-car-antique-car-classic-car-car-vehicle-transport.png" // Replace with the actual URL of your car image
            alt="Car Image"
            className="w-full h-64 object-cover mb-4"
          />
          <p className="text-gray-700 mb-2">Base Price: ${basePrice}</p>
          <p className="text-gray-700 mb-2">Current Highest Bid: ${currentBid}</p>
        </div>
        <form onSubmit={handleBidSubmit}>
          <label htmlFor="bidAmount" className="block text-gray-700 text-sm font-bold mb-2">
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
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-700 focus:outline-none"
            >
              Bid
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default CarBiddingPage;