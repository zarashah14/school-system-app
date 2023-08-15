import React from 'react';
import Navbar from './components/home/Navbar'; // Import the Navbar component
import Hero from './components/home/Hero'; // Hero component ko import karein
import SectionB from './components/home/SectionB'; // Import the SectionB component
import SectionC from './components/home/SectionC'; // Import the SectionC component
import Footer from './components/home/Footer'; // Import the Footer component
import './App.css';

function App() {
  return (
    <>
    <Navbar />
     <Hero />
     <SectionB />
     <SectionC />
     <Footer />
    </>
  );
}

export default App;



