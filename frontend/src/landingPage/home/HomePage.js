import React from 'react';
import Hero from './Hero';
import Awards from './Trust';

import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../Openacc';

function HomePage() {
  return (
    <>
    
    <Hero />
    <Awards />
    <Pricing/>
    <Education/>
    {/* <Stats/> */}
    <OpenAccount/>
   
   </>  
  );
}

export default HomePage