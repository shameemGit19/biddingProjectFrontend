import React,{useState} from 'react'
import img4 from '../assets/images/1954-mercedes-300sl-gullwing-a_1.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

function ResetPassword() {
    const [Phone,setPhone] = useState("")
    const [error,setError] = useState('')
    // const [otp,setOtp] = useState('')
    // const [password,setPassword] = useState('')

    const handleOtp = async(e)=>{
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:4000/user/sendotp',{Phone})
            console.log(Phone);
            if(response.data.message){
              setError(response.data.message)
            }
       } catch (error) {
        if(error.response && error.response.data.error){
          setError(error.response.data.error);
        }
        }
    }  

  return (
    <div>
       <div className='flex justify-center bg-gray-900'>
        <div className='w-screen h-screen bg-cover flex justify-center items-center' style={{backgroundImage:(`url(${img4})`)}} >
        <form onSubmit={handleOtp} action='post' className='w-[400px] h-[490px] bg-black opacity-60 rounded-lg flex flex-col   justify-center items-center gap-y-10 '>

          <input className='w-80 h-12 placeholder:text-center rounded-lg' onChange={(e)=>(setPhone(e.target.value))} type="number" placeholder='Enter your Phone number' />

          <button type='submit' className='bg-white w-32 h-10 rounded-lg font-bold' >Send OTP</button>
          <input type="text" placeholder='Enter OTP'  className='rounded-lg w-80 h-12 placeholder:text-center'/>
          <p className=' flex justify-center text-red-500'>{error}</p>
          <button type='button' className='bg-white w-32 h-10 rounded-lg font-bold' >Submit</button>
        </form>
        
      </div>
    </div>
    </div>
  )
}

export default ResetPassword
