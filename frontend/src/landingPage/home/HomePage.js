import React from 'react';
import Hero from './Hero';
import Awards from './Trust';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../Openacc';
import Navbar from '../Navbar';
import Footer from '../Footer';
function HomePage() {
  return (
    <>
    <Navbar/>
    <Hero />
    <Awards />
    <Pricing/>
    <Education/>
    {/* <Stats/> */}
    <OpenAccount/>
    <Footer/>
   </>  
  );
}

export default HomePage