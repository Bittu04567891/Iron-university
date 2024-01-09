// Register.jsx
import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import Profile from "../profile/Profile";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", {
        username: username,
        name: name,
        password: password,
        img: imgUrl,
        email: email,
      });
      setSuccess(true);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!success && (
        <div className="register-container">
          <h2>Create Your Account</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="imgUrl">Image URL:</label>
              <input
                type="url"
                id="imgUrl"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                required
              />
            </div>

            <button type="submit">Register</button>
          </form>
        </div>
      )}
      {success && (
        <div className="welcome">
          <Profile user={data} />
        </div>
      )}
    </>
  );
};

export default Register;
