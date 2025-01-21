import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes instead of Switch
import MainPage from './MainPage';
import SignupPage from '../src/SignupPage';
import LoginPage from '../src/LoginPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<MainPage />} /> {/* Main page */}
          <Route exact path="/signup" element={<SignupPage />} /> {/* Use element prop */}
          <Route exact path="/login" element={<LoginPage />} /> {/* Use element prop */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
