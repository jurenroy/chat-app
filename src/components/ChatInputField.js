// src/components/ChatInputField.js
import React from 'react';
import './ChatInputField.css'; // Ensure to create this CSS file

const ChatInputField = ({ value, onChange, onSend }) => {
  return (
    <div className="chat-input-container">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button className="send-button" onClick={onSend}>
        Send
      </button>
    </div>
  );
};

export default ChatInputField;
