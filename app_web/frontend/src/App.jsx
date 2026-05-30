import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Analyse from './pages/Analyse'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser] = useAuth()

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />

        {/* PROTECTED ROUTE */}
        <Route
          path='/Analyse'
          element={authUser ? <Analyse /> : <Navigate to="/Login" />}
        />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App