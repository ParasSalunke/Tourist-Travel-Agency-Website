import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Packages from './pages/Packages'
import Destination from './pages/Destination'
import Booking from './pages/Booking'
import Team from './pages/Team'
import Testimonial from './pages/Testimonial'
import Error from './pages/Error'


import Contact from './pages/Contact'

export default function App() {
  return (
    <div>
        <Header />
        <BrowserRouter>
        <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path='/error' element={<Error/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  )
}
