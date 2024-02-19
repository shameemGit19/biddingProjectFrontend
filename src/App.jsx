import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { BrowserRouter } from 'react-router-dom'
import CommonRouter from './router/CommonRouter'
import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
  
    <Routes>
      <Route path='/*' element={<CommonRouter/>} ></Route>
    </Routes>
    
    </>
  )
}

export default App
