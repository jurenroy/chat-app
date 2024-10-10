//MatchFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import HeartLoader from '../components/HeartLoader';
import Button from '../components/Button';
import logo from '../assets/logo.png'; // Adjust the path if necessary

const MatchFound = () => {
  return (
    <div className="match-found centered-container">
    <img src={logo} alt="Logo" className="logo" />
      <h1 className='white-header'>Match Found!</h1>
      <p className='white-header'>You have been matched with a new chat partner.</p>
      <div className="violet-heart" style={{marginTop: '180px', marginBottom: '150px'}}>
        <HeartLoader isActive={false} />
      </div>
      <Link to="/chat">
        <Button onClick={console.log('shat')} label="Start Chat"/>
      </Link>
    </div>
  );
};

export default MatchFound;
