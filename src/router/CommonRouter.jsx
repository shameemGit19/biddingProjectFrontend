import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Forgot from '../pages/Forgot'
import ResetPassword from '../pages/ResetPassword'
import Home from '../pages/Home'
import UserBuy from '../pages/UserBuy'
import UserSell from '../pages/UserSell'
import Bidding from '../pages/Bidding'
import ChatPage from '../pages/Chat'
import Profile from '../pages/Profile'
import ViewProduct from '../pages/ViewProduct'

function CommonRouter() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/forgot' element={<Forgot/>}></Route>
        <Route path='/reset' element={<ResetPassword/>} ></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/buy' element={<UserBuy/>}></Route>
        <Route path='/sell' element={<UserSell/>}></Route>
        <Route path='/bid/:carId' element={<Bidding/>}></Route>
        <Route path='/chat' element={<ChatPage/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/view' element={<ViewProduct/>}></Route>
        
      </Routes>
    </>
  )
}

export default CommonRouter
