import React from "react";
import { Link } from "react-router-dom";

function Univerce() {
  return (
    <div className="container " style={{ marginTop: "10rem" }}>
      <div className="row text-center mb-5">
        <h3 className="mb-4">The Zerodha Universe</h3>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col align-items-center">
          <img
            src="assets/images/zerodhafundhouse.png"
            alt="fundimg"
            style={{ width: "60%" }}
          ></img>
          <p className="opacity-75 mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img
            className="mt-3"
            src="assets/images/streakLogo.png"
            alt="fundimg"
            style={{ width: "60%" }}
          ></img>
          <p className="opacity-75 mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col mt-3">
          <img
            src="assets/images/sensibullLogo.svg"
            alt="fundimg"
            style={{ width: "60%" }}
          ></img>
          <p className="opacity-75 mt-3 mb-5">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          <img
            className="mb-2"
            src="assets/images/smallcaseLogo.png"
            alt="fundimg"
            style={{ width: "60%" }}
          ></img>
          <p className="opacity-75 mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col">
          <img
            src="assets/images/tijori.svg"
            alt="fundimg"
            style={{ width: "40%" }}
          ></img>
          <p className="opacity-75 mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img
            className="mt-4"
            src="assets/images/dittoLogo.png"
            alt="fundimg"
            style={{ width: "40%" }}
          ></img>
          <p className="opacity-75" style={{ marginTop: "2rem" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
      </div>
      <Link
        to='/signup'
        className="btn btn-primary p-2 fs-5 fw-semibold "
        style={{
          width: "15rem",
          margin: "0 auto",
          marginBottom: "6rem",
          display: "block",
        }}
      >
        Sign up for free
      </Link>
    </div>
  );
}

export default Univerce;
