import './App.css'
import React from 'react';
import Hero from './Sections/Hero';
import Info from './Sections/Info';
import About from './Sections/About';
import Featured from './Sections/Featured';
import Contact from './Sections/Contact';
import NavBar from './Component/NavBar';

const App = () => {
  return(
    <>
    <NavBar/>
    <Hero/>
    <Info/>
    <About/>
    <Featured/>
    <Contact/>
    </>
  )
}

export default App
