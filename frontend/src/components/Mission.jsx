import React from 'react';
import './styles/mission.css'; // Custom CSS for the mission page

const Mission = () => {
  return (
    <div className="mission-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Our Vision for the Future</h1>
          <p>
            We are creating a dynamic space that combines sports, creativity, and community. 
            Join us on the journey.
          </p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="mission-statement">
        <h2>Our Mission</h2>
        <div className="mission-panels">
          <div className="panel community">
            <h3>Community Driven</h3>
            <p>
              Fostering an inclusive community where individuals come together to share, grow, and succeed.
            </p>
          </div>
          <div className="panel growth">
            <h3>Growth & Opportunity</h3>
            <p>
              Providing opportunities for growth in sports, arts, and personal development. The Way is for everyone.
            </p>
          </div>
          <div className="panel creativity">
            <h3>Creativity & Expression</h3>
            <p>
              Encouraging freedom of expression through creative centers, where art and sports come together.
            </p>
          </div>
        </div>
      </section>

      {/* Values & Goals Section */}
      <section className="values-goals">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-box">
            <h3>Integrity</h3>
            <p>We believe in transparency and honesty, building trust within the community.</p>
          </div>
          <div className="value-box">
            <h3>Dedication</h3>
            <p>Driven by a passion for excellence and commitment to making an impact.</p>
          </div>
          <div className="value-box">
            <h3>Inclusion</h3>
            <p>Creating a welcoming environment where everyone has a place and an opportunity to thrive.</p>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="future-vision">
        <h2>The Future of The Way</h2>
        <div className="future-vision-panel">
          <p>
            Our goal is to create a space that connects creativity, sports, and community. We envision The Way growing globally, impacting lives everywhere.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Join Our Movement</h2>
        <p>
          Help us build the future of The Way by contributing or getting involved. Together, we can make a lasting impact.
        </p>
        <button className="cta-button">Get Involved</button>
      </section>
    </div>
  );
};

export default Mission;
