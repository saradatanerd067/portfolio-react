// Introduction.js
import React from 'react';
import './Introduction.css';
import profilePicture from '../assets/profile.jpg'; // Import the profile picture

function Introduction() {
  return (
    <section id="introduction" className="introduction">
      <div className="container">
        <div className="intro-content">
          <div className="intro-text">
            <h2>Hello, I'm Sara</h2>
            <p>Welcome to my portfolio. I'm passionate about creating beautiful web applications.</p>
          </div>
          <div className="profile-picture">
            <img src={profilePicture} alt="Profile" /> {/* Use the profilePicture variable */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;

