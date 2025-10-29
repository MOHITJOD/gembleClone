import React from "react";

function Owner() {
  return (
    <div className="container">
      <div className="row">
        <h3 className="text-center mb-5">People</h3>
        <div className="col text-center">
          <img src="assets/images/mohit1.jpg" alt="owner" style={{width:"50%"}} className="mb-4 rounded"></img>
        <h5 className="text-center">Mohit Giri</h5>
        <h6 className="text-secondary">Founder, CEO</h6>
        </div>
        <div className="col">
          <p className="fs-5 me-5 text-secondary" >
            Mohit bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.<br/><br/> He
            is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).<br/><br/> Playing Batminton is
            his zen.<br/><br/> Connect on Homepage / TradingQnA / Twitter
          </p>
        </div>
      </div>
    </div>
  );
}

export default Owner;
