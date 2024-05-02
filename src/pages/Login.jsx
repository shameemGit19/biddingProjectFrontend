import React, { useState } from 'react';
import img3 from '../assets/images/3847ca10f34ff57908c755524866f8d4.jpg';
import { Link, useNavigate } from 'react-router-dom';
import {jwtDecode} from "jwt-decode"
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // This is used to redirect the user

  async function submit(e) {
    e.preventDefault();

    if (!username || !password) {
      return setError('Please fill in all fields');
    }

    try {
      const response = await axios.post('http://localhost:4000/user/login', {
        username,
        password
      });

      // Check if login was successful and a token was received
      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Storing the token
       const token = localStorage.getItem("token")
       const decodeToken = jwtDecode(token)
       console.log(decodeToken ," token");
        navigate('/home'); // Redirect to home page on successful login
      } else {
        // If the login failed and an error message was provided
        if (response.data.message) {
          setError(response.data.message);
        } else {
          setError('Login failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('An error occurred', error);
      setError('An error occurred during login.');
      if (error.response && error.response.data.error) {
        setError(error.response.data.error);
      }
    }
  }

  return (
    <div>
      <div className='w-screen h-screen bg-cover flex justify-center items-center' style={{ backgroundImage: (`url(${img3})`) }}>
        <form onSubmit={submit} className='w-[300px] sm:w-[400px] h-[400px] bg-black opacity-60 rounded-lg flex flex-col justify-center items-center gap-y-10'>
          <h1 className='text-white'>Login</h1>
          <input className='w-[250px] text-center sm:w-[300px] md:w-[350px] h-12 placeholder:text-center' onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Enter your Username' />
          <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} className='text-center w-[250px] sm:w-[300px] md:w-[350px] h-12 placeholder:text-center' />
          <button type='submit' className='bg-white w-32 h-10 rounded-lg font-bold'>Submit</button>
          <div className='flex justify-center'><p className='text-red-500'>{error}</p></div>
          <Link to={'/reset'}><h6 className='text-blue-100 -mt-6 ml-40'><u>Forgot your password?</u></h6></Link>
        </form>
      </div>
    </div>
  )
}

export default Login;
