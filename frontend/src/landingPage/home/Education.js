import React from 'react'

function education() {
  return (
    <div className='container mb-5'>
      <div className='row mt-5 '>
        <div className='col-6'>
          <img src='assets/images/education.svg' alt='eduImg'/>
        </div>
        <div className='col-6 mt-5'>
          <h3 className='mt-5'>Free and open market education</h3>
        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
        <a href='https://zerodha.com/varsity' className='text-decoration-none fw-semibold'>Varsity <i class="fa-solid fa-arrow-right"></i></a>
        <p className=' mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
        <a href='https://tradingqna.com/' className='text-decoration-none fw-semibold'>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>  
  </div>
  )
}

export default education