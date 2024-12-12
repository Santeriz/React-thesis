// src/pages/NotFound.jsx
import React from 'react';
import logo from '../assets/images/tamateur-logo.svg';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - unluko</h1>
      <img src={logo} alt="Logo" className="not-found-logo" />
    </div>
  );
};

export default NotFound;
