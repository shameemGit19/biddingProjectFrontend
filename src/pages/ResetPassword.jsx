import React,{useState} from 'react'
import img4 from '../assets/images/1954-mercedes-300sl-gullwing-a_1.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

function ResetPassword() {
    const [Phone,setPhone] = useState("")
    // const [otp,setOtp] = useState('')
    // const [password,setPassword] = useState('')

    const handleOtp = async(e)=>{
        e.preventDefault()

        try {
            const res = await axios.post("http://localhost:4000/sendotp",Phone)
            console.log(Phone);
            res.status(200).json({message:'otp send successfully'})
        } catch (error) {
            res.status(400).json({message:'failed to send otp '})
        }
    }  
    async function submit(e){
        e.preventDefault()
      console.log(Phone)
    
      try{
        const response = axios.post('http://localhost:4000/user/Forgot',{
          Phone
        })
    
      }catch(error){
        console.log('error  has been occured',error)
      }
    
    }
  return (
    <div>
       <div className='flex justify-center bg-gray-900'>
        <div className='w-screen h-screen bg-cover flex justify-center items-center' style={{backgroundImage:(`url(${img4})`)}} >
        <form onSubmit={handleOtp} className='w-[400px] h-[490px] bg-black opacity-60 rounded-lg flex flex-col   justify-center items-center gap-y-10 '>
          {/* <h1 className='text-white font-bold'>Forgot Password ?</h1> */}
          <input className='w-80 h-12 placeholder:text-center rounded-lg' value={Phone} onChange={(e)=>(setPhone(e.target.value))} type="text" placeholder='Enter your Phone number' />
          {/* <input type="text " placeholder='Enter OTP' onChange={(e)=>(setOtp(e.target.value))} className='rounded-lg w-80 h-12 placeholder:text-center' />
          <input type="text" placeholder='Set new password' onChange={(e)=>(setPassword(e.target.value))} className='rounded-lg w-80 h-12 placeholder:text-center'/>
          <input type="text" className='w-80 rounded-lg h-12 placeholder:text-center' placeholder='Confirm new password' /> */}
          <button type='submit' className='bg-white w-32 h-10 rounded-lg font-bold' >Send OTP</button>
          <input type="text" placeholder='Enter OTP'  className='rounded-lg w-80 h-12 placeholder:text-center'/>
          <button onClick={handleOtp} className='bg-white w-32 h-10 rounded-lg font-bold' >Submit</button>
        </form>
        
      </div>
    </div>
    </div>
  )
}

export default ResetPassword
