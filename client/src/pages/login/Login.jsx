// Login.jsx
import React from "react";
import "./Login.css"; // Import your stylesheet

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form-box">
        <h2 className="login-heading">Login to Your Account</h2>
        <form className="login`````````````````````````````-form">
          <label htmlFor="email" className="login-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="login-input"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password" className="login-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="login-input"
            placeholder="Enter your password"
            required
          />

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
