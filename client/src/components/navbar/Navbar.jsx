import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      {" "}
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.html">
              <img src="images/iron-university-logo.jpg" alt="" />
              <span>Iron University</span>
            </a>
            <div className="contact_nav" id="">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link" href="service.html">
                    <img src="images/location.png" alt="" />
                    <span>Location</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">
                    <img src="images/call.png" alt="" />
                    <span>Call : + 01 1234567890</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">
                    <img src="images/envelope.png" alt="" />
                    <span>demo@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div className="container">
        <div className="custom_nav2">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex  flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item ">
                    <Link to="/Iron-university/" className="nav-link">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link to="/Iron-university/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Services{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Login
                    </a>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  ></button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
