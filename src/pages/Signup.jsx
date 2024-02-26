import React,{useState} from 'react'
// const bcrypt = require('bcrypt');

import img1 from '../assets/images/Classic-cars.png'
import img2 from '../assets/images/bg-Image.jpg'
// import 'axios'
import { Link } from 'react-router-dom'
import axios from 'axios'

function signUp() {

  const [username,setUsername] = useState("")
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setconfirmPassword] = useState('')
  
  async function submit(e){
    console.log(username,phone,password,confirmPassword)
    e.preventDefault()

    try{
      const response = axios.post('http://localhost:4000/user/signup',{
        username,
        phone,
        password
      })

    }catch(error){
      console.log('error  has been occured',error)
    }

  }
  return ( 
    <div>
      <div className='w-screen h-screen bg-cover flex justify-center items-center ' style={{backgroundImage:(`url(${img2})`)}} >
        <form onSubmit={submit} className='w-[400px] h-[500px] bg-black opacity-70 flex flex-col rounded-lg  justify-center items-center gap-y-10 '>
          <h1 className='text-white text-3xl mt-3'><b>Sign Up</b></h1>
          <input className='w-80 h-12 placeholder:text-center text-center rounded-lg' onChange={(e)=>(setUsername(e.target.value))} required type="text" placeholder='Enter your Username' />
          <input className='w-80 h-12 placeholder:text-center text-center rounded-lg' onChange={(e)=>(setPhone(e.target.value))} required type="number" placeholder='Enter your phone number' />
          <input type="password " placeholder='Enter new password ' onChange={(e)=>(setPassword(e.target.value))} required className='w-80 h-12 placeholder:text-center text-center rounded-lg' />
          <input type="password" placeholder='Confirm new password' onChange={(e)=>(setconfirmPassword(e.target.value))} className='w-80 h-12 placeholder:text-center text-center rounded-lg' />
          <button type='submit' className='bg-white  w-32 h-10 rounded-lg font-bold'>Submit</button>
          <Link to={'/login'}><h5 className='text-red-100 -mt-4' >Existing User? <a className='text-blue-100' href=""><u><b>Login</b></u></a></h5></Link>
        </form>
        
      </div>
    </div>
  )
}

export default signUp
