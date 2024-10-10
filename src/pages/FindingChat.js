import React, { useEffect, useState } from 'react';
import HeartLoader from '../components/HeartLoader';
import { useNavigate } from 'react-router-dom';

const FindingChat = () => {
  const navigate = useNavigate();
  const [elapsedTime, setElapsedTime] = useState(0); // Initialize elapsed time

  useEffect(() => {
    // Start the timer
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1); // Increment elapsed time every second
    }, 1000);

    // Redirect to MatchFound after 30 seconds
    const redirectTimer = setTimeout(() => {
      navigate('/match-found');
    }, 3000); // Adjust the time as needed

    return () => {
      clearInterval(timer); // Clean up on unmount
      clearTimeout(redirectTimer); // Clean up redirect timer
    };
  }, [navigate]);

  return (
    <div className="centered-container">
      <h1 className='white-header'>{elapsedTime} seconds elapsed</h1>
      <h1 className='white-header'>Finding a Match...</h1>
      <p className='white-header'>Please wait while we connect you to someone.</p>
      <div className="violet-heart" style={{marginTop: '250px'}}>
        <HeartLoader isActive={true} />
      </div>
      
      
    </div>
  );
};

export default FindingChat;
