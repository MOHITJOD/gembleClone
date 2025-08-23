import React from 'react'

function pricing() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 mt-5'>
          <h3 className='fw-semibold'>Unbeatable pricing
          </h3>
          <p className='opacity-75'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
</p>
<a href='https://zerodha.com/charges/ ' className='text-decoration-none fw-semibold    pb-4'>See Pricing <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className='col-6'>
          <img src='assets/images/pricing0.svg' alt='price' style={{width:"22%"}} className='mt-5'/>
          <p style={{display:"inline-block"}} className='opacity-75 mt-5 p-0'>Free account<br/>opening</p>
        </div>
      </div>
    </div>
  )
}

export default pricing