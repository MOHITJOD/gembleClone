import React from 'react'

function Hero() {
  return (
   
      <div className='p-5 bg-light' style={{marginTop:"4rem"}}>
       <div className='d-flex justify-content-between mb-4'>
    <div  ><h1>Support Portal</h1></div>
    <div ><button className='btn btn-primary' style={{width:"100%" }}>My Tickets</button></div>
   
</div>
<nav className="navbar bg-body-tertiary">
  <form className="container-fluid">
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input type="text" style={{height:"4rem"}} className="form-control" placeholder="Eg: How do I open my account, How do i activate F&O..." aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
  </form>
</nav>
      </div>
    
  )
}

export default Hero