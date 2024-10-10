// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthChoice from './pages/AuthChoice';
import FooterNav from './components/FooterNav';
import AuthPage from './pages/AuthPage';
import Profile from './pages/Profile';
import ChatHistory from './pages/ChatHistory';
import FindingChat from './pages/FindingChat';
import MatchFound from './pages/MatchFound';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* FooterNav only shown on certain routes */}
        {window.location.pathname !== '/login' &&
         window.location.pathname !== '/signup' &&
         window.location.pathname !== '/auth' && (
          <FooterNav />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/auth" element={<AuthChoice />} />
          <Route path="/authz" element={<AuthPage />} />
          <Route path="/chat-history" element={<ChatHistory/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/finding-chat" element={<FindingChat/>} />
          <Route path="/match-found" element={<MatchFound/>} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
