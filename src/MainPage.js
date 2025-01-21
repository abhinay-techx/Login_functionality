import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';  // Ensure you have the CSS file imported for styling

const MainPage = () => {
  return (
    <div className="main-container">
      {/* Link components to navigate to different pages */}
      <Link to="/signup" className="button-css">Sign Up</Link>
      <Link to="/login" className="button-css">Sign In</Link>
    </div>
  );
};

export default MainPage;
