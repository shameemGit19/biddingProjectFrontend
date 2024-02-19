import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Forgot from '../pages/Forgot'
import ResetPassword from '../pages/ResetPassword'
function CommonRouter() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/forgot' element={<Forgot/>}></Route>
        <Route path='/reset' element={<ResetPassword/>} ></Route>
      </Routes>
    </>
  )
}

export default CommonRouter
