// src/pages/AuthChoice.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path if necessary

const AuthChoice = () => {
  return (
    <div className="auth-choice-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className='white-header'>ONLINE BUGAW v2</h1>
      <div className="button-container">
        <Link to="/login">
          <button className="custom-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="custom-button">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default AuthChoice;
