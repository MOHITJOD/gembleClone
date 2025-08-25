import React from "react";

function Hero() {
  return (
    <div className="container" style={{marginTop:"10rem"}}>
      <div className="row text-center border-bottom" style={{ margin: "7rem" }}>
        <h3>Zerodha Products</h3>
        <p className="fs-5">Sleek, modern, and intuitive trading platforms</p>
        <p style={{ marginBottom: "7rem" }}>
          Check out our{" "}
          <a
            href="https://zerodha.com/investments"
            className="text-decoration-none fs-5"
          >
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
