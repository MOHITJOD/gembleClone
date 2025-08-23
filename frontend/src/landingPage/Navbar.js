import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-lg border-bottom">
        <div className="container ">
          <Link className="navbar-brand" to="/">
            <img style={{width:"22%"}} src="assets/images/logo.svg" alt="logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active m-2"
                  aria-current="page"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link className="nav-link" to="/price">
                  Pricing
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item dropdown m-2">
                <Link
                  className="nav-link "
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-bars"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
