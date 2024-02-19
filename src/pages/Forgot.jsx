import React,{useState} from 'react'
import img3 from '../assets/images/3847ca10f34ff57908c755524866f8d4.jpg'
import img4 from '../assets/images/1954-mercedes-300sl-gullwing-a_1.jpg'
import { Link } from 'react-router-dom' 
import axios from 'axios'

function Forgot() {
  const [username,setUsername] = useState("")
  const [otp,setOtp] = useState('')
  const [password,setPassword] = useState('')

  async function submit(e){
    console.log(username,password)
    e.preventDefault()
  
    try{
      const response = axios.post('http://localhost:4000/user/Forgot',{
        username,
        password
      })
  
    }catch(error){
      console.log('error  has been occured',error)
    }
  
  }
  return (
    <div className='flex justify-center bg-gray-900'>
        <div className='w-screen h-screen bg-cover flex justify-center items-center' style={{backgroundImage:(`url(${img4})`)}} >
        <form onSubmit={submit} className='w-[400px] h-[490px] bg-black opacity-60 rounded-lg flex flex-col   justify-center items-center gap-y-10 '>
          <h1 className='text-white font-bold'>Forgot Password ?</h1>
          <input className='w-80 h-12 placeholder:text-center rounded-lg' onChange={(e)=>(setUsername(e.target.value))} type="text" placeholder='Enter your Username' />
          {/* <input type="text " placeholder='Enter OTP' onChange={(e)=>(setOtp(e.target.value))} className='rounded-lg w-80 h-12 placeholder:text-center' />
          <input type="text" placeholder='Set new password' onChange={(e)=>(setPassword(e.target.value))} className='rounded-lg w-80 h-12 placeholder:text-center'/>
          <input type="text" className='w-80 rounded-lg h-12 placeholder:text-center' placeholder='Confirm new password' /> */}
          <button type='submit' className='bg-white w-32 h-10 rounded-lg font-bold' >Send OTP</button>
        </form>
        
      </div>
    </div>
  )
}

export default Forgot
