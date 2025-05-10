import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import './App.css'
import Login from './Components/Login/Login'
import { UserStorage } from './Contexto'
import ProtectedRouter from './Components/Helper/ProtectedRouter'
import User from './Components/User/User'



function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route>
              <Route path='/' element={<Home />} />
              <Route path='login/*' element={<Login />} />
              <Route
                path='conta/*'
                element={
                  <ProtectedRouter>
                   <User />
                  </ProtectedRouter>} />
            </Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  )
}

export default App
