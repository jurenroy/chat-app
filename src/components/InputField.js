// src/components/InputField.js
import React, { useState } from 'react';
import './InputField.css'; // Ensure you create this CSS file

const InputField = ({ value, onChange, placeholder, type = 'text' }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`input-field-container ${isFocused || value ? 'focused' : ''}`}>
      <label className="input-label">{placeholder}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="input-field"
        required
      />
    </div>
  );
};

export default InputField;
