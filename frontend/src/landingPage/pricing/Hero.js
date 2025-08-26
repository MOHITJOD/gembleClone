import React from "react";

function Hero() {
  return (
    <div
      className="container  text-center"
      style={{ marginTop: "10rem", marginBottom: "5rem" }}
    >
      <h2 className="opacity-75">Charges</h2>
      <p className="fs-4 opacity-50" style={{marginBottom:"11rem"}}>List of all charges and taxes</p>
      <div className="row">
        <div className="col">
          <img src="assets/images/pricing0.svg" alt="zeroimg" style={{width:"75%"}}/>
          <h3>Free equity delivery</h3>
          <p className="opacity-75">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col">
          <img src="assets/images/intradayTrades.svg" alt="20Ing" style={{width:"75%"}}/>
          <h3>Intraday and F&O trades</h3>
          <p className="opacity-75"> 
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col">
          <img src="assets/images/pricingMF.svg" alt="zeroimg" style={{width:"75%"}}/>
          <h3>Free direct MF</h3>
          <p className="opacity-75">
          All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
