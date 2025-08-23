import React from "react";

function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-lg border-bottom">
        <div className="container ">
          <a className="navbar-brand" href="/">
            <img style={{width:"22%"}} src="assets/images/logo.svg" alt="logo"/>
          </a>
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
                <a
                  className="nav-link active m-2"
                  aria-current="page"
                  href="/signup"
                >
                  Signup
                </a>
              </li>
              <li className="nav-item m-2">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item m-2">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item m-2">
                <a className="nav-link" href="/price">
                  Pricing
                </a>
              </li>
              <li className="nav-item m-2">
                <a className="nav-link" href="/support">
                  Support
                </a>
              </li>
              <li className="nav-item dropdown m-2">
                <a
                  className="nav-link "
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-bars"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
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
