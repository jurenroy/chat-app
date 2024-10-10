import React from 'react';
import './HeartLoader.css';

const HeartLoader = ({ isActive }) => {
  return (
    <div className="cssload-main">
      <div className={`cssload-heart ${isActive ? '' : 'no-animation'}`}>
        <span className={`cssload-heartL ${isActive ? '' : 'no-animation'}`}></span>
        <span className={`cssload-heartR ${isActive ? '' : 'no-animation'}`}></span>
        <span className={`cssload-square ${isActive ? '' : 'no-animation'}`}></span>
      </div>
      <div className={`cssload-shadow ${isActive ? '' : 'no-animation'}`}></div>
    </div>
  );
};

export default HeartLoader;
