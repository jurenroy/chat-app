import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InputField from '../components/InputField'; // Ensure this is your custom input component
import Button from '../components/Button'; // Ensure this is your custom button component
import logo from '../assets/logo.png';

const AuthPage = () => {
  const [currentView, setCurrentView] = useState(''); // '', 'login', 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with', email, password);
  };

  const handleSignup = () => {
    console.log('Signing up with', {
      displayName,
      email,
      gender,
      birthday,
      password,
      confirmPassword,
    });
  };

  return (
    <div className="auth-page">
      <motion.div
        className="auth-choice-container"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {currentView !== '' && (
          <button className="back-button" onClick={() => setCurrentView('')}>
            ←
          </button>
        )}
        
        <img src={logo} alt="Logo" className="logo" />
        
        {currentView === '' ? (
          <>
            <h1 className='white-header'>AUTH CHOICE</h1>
            <div className="button-container">
              <button className="custom-button" onClick={() => setCurrentView('login')}>Login</button>
              <button className="custom-button" onClick={() => setCurrentView('signup')}>Signup</button>
            </div>
          </>
        ) : currentView === 'login' ? (
          <>
            <h2 className='white-header'>LOGIN</h2>
            <InputField value={email} onChange={setEmail} placeholder="Email" />
            <InputField value={password} onChange={setPassword} placeholder="Password" type="password" />
            <Button onClick={handleLogin} label="Login" />
            <p className="toggle-text">
              Does not have an account?{' '}
              <span className="hyperlink" onClick={() => setCurrentView('signup')}>Signup</span>
            </p>
          </>
        ) : currentView === 'signup' ? (
          <>
            <h2 className='white-header'>SIGNUP</h2>
            <InputField value={displayName} onChange={setDisplayName} placeholder="Display Name" />
            <InputField value={email} onChange={setEmail} placeholder="Email" />
            <InputField value={gender} onChange={setGender} placeholder="Gender" />
            <InputField value={birthday} onChange={setBirthday} placeholder="Birthday (YYYY-MM-DD)" />
            <InputField value={password} onChange={setPassword} placeholder="Password" type="password" />
            <InputField value={confirmPassword} onChange={setConfirmPassword} placeholder="Confirm Password" type="password" />
            <Button onClick={handleSignup} label="Signup" />
            <p className="toggle-text">
              Already have an account?{' '}
              <span className="hyperlink" onClick={() => setCurrentView('login')}>Login</span>
            </p>
          </>
        ) : null}
      </motion.div>
    </div>
  );
};

export default AuthPage;
