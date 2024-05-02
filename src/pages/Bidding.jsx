import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router';
const CarBiddingPage = () => {
  const [bidProduct, setBidProduct] = useState('')
  const [currentBid, setCurrentBid] = useState(0);
  const [bidAmount, setBidAmount]= useState('')

  const { carId } = useParams()
  console.log(carId, " params");
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('bid')
        const response = await axiosInstance.get(`/user/bidCar/${carId}`)
        console.log(response.data.bidCar);
        setBidProduct(response.data.bidCar)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const handleBidSubmit = (e) => {
    e.preventDefault();
    console.log('hi'); 
    if (bidAmount < bidProduct.price) {
      console.log('Amount is less than the base price');
      toast.warning('Bid amount should be higher than the base price')
    } else if (bidAmount > currentBid) {
      const newBidAmount = parseFloat(bidAmount);
      setCurrentBid(newBidAmount);
      setBidAmount('');
    } else {
      console.log('Bid amount is not higher than the current highest bid');
      toast.warning("Bid amount should be higher than the current highest bid")
    }
  };
  

  const handleChatButtonClick = () => {
    // Add logic for opening the chat here
    console.log('Chat button clicked!');
  };


  return (
    <div className='min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" style={{ backgroundImage: url(images[currentImageIndex])}} id="modal-id'>
      <div className="absolute bg-black opacity-80 inset-0 z-0">
        <div className='relative min-h-screen flex flex-col items-center justify-center'>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">Car Bidding</h2>
          <div className="mb-4">
            <img
              src={bidProduct.image}
              alt="Car Image"
              className="w-full h-64 object-cover mb-4 rounded-md shadow-md"
            />
            <div className="flex justify-center gap-60">

            </div>
            <p className="text-white mb-2 text-center">Base Price: ${bidProduct.price}</p>
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
                value={bidAmount.price}
                onChange={(e) => setBidAmount(e.target.value)}
                className="w-2/3 px-3 py-2 border rounded-l focus:outline-none focus:border-blue-500"
                min={'cur' + 1}
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
      <ToastContainer />

    </div>
  );
};

export default CarBiddingPage;
