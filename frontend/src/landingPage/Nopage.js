import React from 'react'
import { useNavigate } from 'react-router-dom'

function NoPage() {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <div className='container'>
      <div className='row text-center'>
        <h3 className='mt-5'>error code - 404</h3>
        <p className=''>Page not found.</p>
        <button 
          className='btn btn-primary p-2 fs-5 fw-semibold mb-5' 
          style={{width:"15rem", margin:"0 auto"}}
          onClick={handleGoHome}
        >
          Go Home
        </button>
      </div>
    </div>
  )
}

export default NoPage