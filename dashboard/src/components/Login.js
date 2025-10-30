import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";
import { API_BASE_URL } from "../config";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/auth/login`,
        {
          ...inputValue,
        }
      );
      
      const { success, message, token } = data;
      if (success && token) {
        localStorage.setItem("token", token);
        setSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setError(message);
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred. Please try again.");
    }
    
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  const handleLogoClick = () => {
    const frontendUrl = process.env.REACT_APP_FRONTEND_URL || 'http://localhost:3001';
    window.location.href = frontendUrl;
  };

  return (
    <div className="auth-page">
      <div className="form_container">
        <div className="auth-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src="/logo.png" alt="Logo" />
        </div>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="your.email@example.com"
              onChange={handleOnChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          <button type="submit">Login</button>
          <span>
            Don't have an account? <Link to={"/signup"}>Sign up</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
