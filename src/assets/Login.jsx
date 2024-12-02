// LoginForm.js
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import styled from "styled-components";
import './logincss.css'

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username == 'vaishnavAdmin' && password == 'vaishnav@123'){
      navigate('/dashboard')
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Admin Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

export default LoginForm;
