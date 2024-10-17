import React from 'react';
import useScrollFadeIn from './useScrollFadeIn';

const Home = () => {
  useScrollFadeIn();

  return (
    <div className="container">
      <section className="welcome-section fade-in">
        <h2>Welcome to The Way</h2>
        <p>Discover our unique blend of action, creativity, and community.</p>
        <a href="/contact" className="cta-button">
          Get In Touch
        </a>
      </section>

      <section className="features-grid fade-in">
        <div className="feature-card">
          <h3>Action Sports</h3>
          <p>Join our skate park and experience extreme sports.</p>
        </div>
        <div className="feature-card">
          <h3>Martial Arts</h3>
          <p>Train with top MMA & Muay Thai fighters.</p>
        </div>
        <div className="feature-card">
          <h3>Creative Arts</h3>
          <p>Express yourself in art, music, and design.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
