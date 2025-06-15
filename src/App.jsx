import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../src/components/Navbar/Navbar.jsx';
import Body from '../src/components/Body/Body.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import BootstrapCarousel from './components/Carousel/BootstrapCarousel.jsx';


function App() {
  
  return (
    <>
    <Navbar/>
    <Body/>
   
    <Footer/>
    </>
  )
}

export default App;
