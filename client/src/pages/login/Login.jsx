import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from "../../Context/AppContext";

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { user, setUser } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${window.location.origin}/api/auth/login`, {
        username: username,
        password: password,
      });

      // Show success toast
      toast.success("Login successful!");

      setUser(res.data);
    } catch (err) {
      // Show error toast
      toast.error("Login failed. Please check your credentials.");

      console.error(err);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form-box">
          <h2 className="login-heading">Login to Your Account</h2>
          <form className="login-form">
            <label htmlFor="username" className="login-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="login-input"
              placeholder="Enter your username"
              required
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="login-button"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
          <div className="reg">
            Don't have an account?
            <Link to="/Iron-university/register">
              <button className="regis">Register</button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
