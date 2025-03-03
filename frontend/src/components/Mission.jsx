import React from 'react';
import './styles/mission.css';

const Mission = () => {
  return (
    <div className="mission-page">
      {/* Hero Section with Background Image */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Our Mission</h1>
            <p>
              To unite art, music, and sports lovers in a global community that thrives on creativity, growth, and kindness.
            </p>
          </div>
        </div>
      </section>

      {/* What Drives Us Section with Panels */}
      <section className="drives-section">
        <h2>What Drives Us</h2>
        <div className="drives-panels">
          <div className="panel community">
            <div className="panel-overlay"></div>
            <div className="panel-content">
              <h3>Community Connection</h3>
              <p>Bringing enthusiasts together to share, collaborate, and connect.</p>
            </div>
          </div>
          <div className="panel growth">
            <div className="panel-overlay"></div>
            <div className="panel-content">
              <h3>Growth Opportunities</h3>
              <p>Empowering individuals through creative and athletic pursuits.</p>
            </div>
          </div>
          <div className="panel creativity">
            <div className="panel-overlay"></div>
            <div className="panel-content">
              <h3>Creative Expression</h3>
              <p>Fostering innovation in art, music, and sports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section with Icons */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🛡️</div>
            <h3>Integrity</h3>
            <p>Building trust through transparency and honesty.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🔥</div>
            <h3>Dedication</h3>
            <p>Driven by passion to make a lasting impact.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Inclusion</h3>
            <p>Welcoming all to contribute and grow.</p>
          </div>
        </div>
      </section>

      {/* Future Vision Section with Split Layout */}
      <section className="vision-section">
        <div className="vision-text">
          <h2>Our Vision for the Future</h2>
          <p>
            A world where art, music, and sports unite people globally, inspiring creativity and kindness.
          </p>
        </div>
        <div className="vision-image"></div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join the Movement</h2>
        <p>
          Be part of a community that celebrates creativity and connection. Your journey starts here.
        </p>
        <button className="cta-button">Get Involved</button>
      </section>
    </div>
  );
};

export default Mission;