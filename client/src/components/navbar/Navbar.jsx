import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";

const Navbar = () => {
  const { user, setUser, setProducts, setAmount } = useAppContext();

  const handleClick = (e) => {
    // e.preventDefault();
    setUser(null);
    setProducts([]);
    setAmount("");
    console.log(user);
  };
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
                  <li className="nav-item ">
                    <Link to="/Iron-university/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Iron-university/services" className="nav-link">
                      Services{" "}
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/Iron-university/product" className="nav-link">
                      Shop
                    </Link>
                  </li>

                  {user && (
                    <li className="nav-item" style={{ cursor: "pointer" }}>
                      <Link
                        to="/Iron-university/"
                        className="nav-link"
                        onClick={handleClick}
                      >
                        Logout
                      </Link>
                    </li>
                  )}
                  {!user && (
                    <li className="nav-item">
                      <Link to="/Iron-university/login" className="nav-link">
                        Login
                      </Link>
                    </li>
                  )}
                  {user && (
                    <li className="nav-item">
                      <Link to="/Iron-university/cart" className="nav-link">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </Link>
                    </li>
                  )}
                  {user && (
                    <li className="nav-item ">
                      <Link to="/Iron-university/profile" className="nav-link">
                        {" "}
                        <img
                          src={user.img}
                          alt=""
                          className="img-fluid rounded-circle"
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                        />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
