//ChatHistory.js
import React from 'react';

const ChatHistory = () => {
  const chatList = [
    { id: 1, name: "John Doe", lastMessage: "See you later!" },
    { id: 2, name: "Jane Smith", lastMessage: "Let's catch up soon!" },
  ];

  return (
    <div className="centered-container">
      <h1>Chat History</h1>
      <ul>
        {chatList.map(chat => (
          <li key={chat.id}>
            <strong>{chat.name}</strong>: {chat.lastMessage}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatHistory;
