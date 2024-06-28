import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom" 
      style={{backgroundColor: "#FFF"}} 
      >
        <div class="container p-2">
          <Link class="navbar-brand" to="#">
            <img src="media/images/logo.svg" style={{width:"25%"}} alt="logo"/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
            <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="#">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li> <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/products">
                  Products
                </Link>
              </li> <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li> <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/support">
                  Support
                </Link>
              </li>        
            </ul>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
