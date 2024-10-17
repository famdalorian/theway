// src/components/Mission.js
import React from 'react';
import { Link } from 'react-router-dom';

import './styles/mission.css'


const Mission = () => {
  return (
    <div className="mission-container">
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At The Way, our vision is to create a space where action, creativity, and community come together. We are passionate about building a state-of-the-art rollerblading park and an elite training gym for MMA and Muay Thai, but we need your help to make this dream a reality.
        </p>
        <p>
          Currently, we are in the fundraising phase, and with your support, we aim to build a world-class facility that fosters physical and mental growth, where people can push their limits, develop their skills, and explore their creative potential.
        </p>
        <p>
          Join us on this journey to raise the funds needed to bring The Way to life, and together we can create something extraordinary.
        </p>
      </section>
      
      {/* Button to Progress Page */}
      <div className="progress-button-container">
        <Link to="/progress" className="cta-button">
          Check Our Progress and Donate
        </Link>
      </div>
    </div>
  );
};

export default Mission;
