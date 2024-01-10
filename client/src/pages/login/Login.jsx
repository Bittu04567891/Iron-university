// Login.jsx
import React, { useState } from "react";
import "./Login.css"; // Import your stylesheet
import axios from "axios";
import Profile from "../profile/Profile";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";
const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, setUser } = useAppContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", {
        username: username,
        password: password,
      });
      setSuccess(true);

      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {success && (
        <div className="welcome">
          <Profile user={user} />
        </div>
      )}
      <div className="login-container">
        {!success && (
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
              Dont't have an account?
              <Link to="/Iron-university/register">
                <button className="regis">Register</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
