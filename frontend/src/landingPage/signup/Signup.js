import React, { useEffect } from 'react'

function Signup() {
  useEffect(() => {
    // Instant redirect to dashboard signup
    const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3000';
    window.location.href = `${dashboardUrl}/signup`;
  }, []);

  return (
    <div className='container p-5 mt-5'>
      <div className='row text-center'>
        <h1 className='mt-5 mb-4'>Redirecting...</h1>
        <div className='col-md-6 offset-md-3'>
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup