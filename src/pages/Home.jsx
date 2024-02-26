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
          <NavLink>Profile</NavLink>
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
      </div>
    </div>
  )
}

export default Home
