import React,{useState} from 'react'
import img from '../assets/images/3847ca10f34ff57908c755524866f8d4.jpg'
import { NavLink, useNavigate } from 'react-router-dom'


function Home() {
  const navigate  = useNavigate()
  return (
    <div>
      <div className='w-screen h-screen bg-cover  ' style={{backgroundImage:(`url(${img})`)}}>
        <div>
        <nav className='w-full flex  gap-5 text-white font-semibold justify-between p-10'>
          <li className='list-none hover:text-red-500'>
          <button className=' hover:text-red-500' onClick={()=>{navigate('/profile')}}>Profile</button>
          </li>
         <li className='text-black list-none hover:text-red-500'>
         <NavLink>Logout</NavLink>
         </li>
         

        </nav>
        </div>
      <p className='flex justify-center text-red-400 p-32 text-6xl font-bold'>What would you like to do ?</p>
      <div>
        <nav className='text-red-700 text-5xl font-bold gap-20 flex justify-center'>
          <button className=' hover:text-black' onClick={()=>{navigate('/buy')}}>Buy</button>
          <button className=' hover:text-black' onClick={()=>{navigate('/sell')}}>Sell</button>
        </nav>
      </div>
      <div className='flex w-full justify-center'>
      <button
        type="submit"
          className="bg-green-500 text-white px-4 py-2 mt-6 justify-center rounded hover:bg-green-700 focus:outline-none"
          onClick={()=>{navigate('/view')}}
        >
          View your products
        </button>
        </div>
      </div>
    </div>
  )
}

export default Home
