import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="signup-container">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="signup-input" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="signup-input" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="signup-input" required />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
