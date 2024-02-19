import React,{useState} from 'react'
import img1 from '../assets/images/Classic-cars.png'
import img2 from '../assets/images/bg-Image.jpg'
import img3 from '../assets/images/3847ca10f34ff57908c755524866f8d4.jpg'
import { Link, useNavigate } from 'react-router-dom' 
import axios from 'axios'

function Login() {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  async function submit(e){
    console.log(username,password)
    e.preventDefault()
  
    try{
      const response = await axios.post('http://localhost:4000/user/login',{
        username,
        password
      })

      if(response.data.message){
        setError(response.data.message)
        console.log('user')
      }
      
    }catch(error){
      console.log('error  has been occured',error)
    }
  
  }



  return (
    <div>
        <div className='w-screen h-screen bg-cover flex justify-center items-center' style={{backgroundImage:(`url(${img3})`)}} >
        <form onSubmit={submit} className='w-[300px] sm:w-[400px] h-[400px] bg-black opacity-60 rounded-lg flex flex-col   justify-center items-center gap-y-10 '>
          <h1 className='text-white'>Login</h1>
          <input className='w-[250px] text-center sm:w-[300px] md:w-[350px] h-12 placeholder:text-center' onChange={(e)=>(setUsername(e.target.value))} type="text" placeholder='Enter your Username' />
          <input type="password " placeholder='Enter your password' onChange={(e)=>(setPassword(e.target.value))} className='text-center w-[250px] sm:w-[300px] md:w-[350px] h-12 placeholder:text-center' />
          <button type='submit' className='bg-white  w-32 h-10 rounded-lg font-bold'>Submit</button>
          <div className='flex justify-center'><p className='text-red-500'>{error}</p></div>
          <Link to={'/Forgot'}><h6 className='text-blue-100 -mt-6 ml-40'><u>Forgot your password?</u></h6></Link>
        </form>
        
      </div>
    </div>
  )
}

export default Login
