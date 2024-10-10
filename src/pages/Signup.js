// src/pages/Signup.js
import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import logo from '../assets/logo.png'; // Adjust the path if necessary

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('Logging in with', email, password);
  };

  return (
    <div className="auth-choice-container">
      <h2 className='white-header'>ONLINE BUGAW v2</h2>
      <img src={logo} alt="Logo" className="logo" />
      <InputField value={email} onChange={setEmail} placeholder="Email" />
      <InputField value={password} onChange={setPassword} placeholder="Password" type="password" />
      <Button onClick={handleSignup} label="Signup" />
    </div>
  );
};

export default Signup;
