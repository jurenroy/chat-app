// src/pages/Chat.js
import React, { useState } from 'react';
import ChatInputField from '../components/ChatInputField';

const Chat = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="chat-container">
      {/* Your chat messages rendering here */}
      <ChatInputField value={message} onChange={setMessage} onSend={handleSend} />
    </div>
  );
};

export default Chat;
