import React from 'react'

function Hero() {
  return (
   <div className='container p-5'>
    <div className='row p-5 text-center'>
    <img src='assets/images/homeHero.png' alt='hero-Image' className='mb-5'/>
    <h1 className='mt-4'>Invest in everything</h1>
    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
    <button className='btn btn-primary p-2 fs-5 fw-semibold' style={{width:"15rem", margin:"0 auto"}}>Sign up for free</button>
    </div>
    
   </div>
  )
}

export default Hero