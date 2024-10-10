import React from 'react';
import { Link } from 'react-router-dom';

const FooterNav = () => {
  return (
    <div className="footer-nav">
      <Link to="/">Home</Link>
      <Link to="/chat-history">Chat History</Link>
      <Link to="/profile">Profile</Link>
      <button>Settings</button>
    </div>
  );
};

export default FooterNav;
