import React from 'react'
import "./App.css"
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

function App() {
  return (
    <Router>

      <Navbar/>
      <HeroSection/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </Router>
    
  )
}

export default App
