// src/components/Button.js
import React from 'react';

const Button = ({ onClick, label }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
