// src/pages/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeartLoader from '../components/HeartLoader';
import logo from '../assets/logo.png'; // Adjust the path if necessary

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleHeartClick = () => {
    setIsLoading(true);
    // Simulate a delay to show the loader before navigating
    setTimeout(() => {
      navigate('/finding-chat');
    }, 500); // Adjust this timeout as needed
  };

  return (
    <div className="centered-container">
      <h1 className='white-header'>ONLINE BUGAW v2</h1>
      <img src={logo} alt="Logo" className="logo" />
      <div className="violet-heart" onClick={handleHeartClick} style={{marginTop: '80px'}}>
        <HeartLoader isActive={false} />
      </div>
    </div>
  );
};

export default Home;

