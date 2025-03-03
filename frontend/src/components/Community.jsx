import React from "react";
import "./styles/community.css"; // Import the stylesheet

const Community = () => {
  return (
    <div className="project-page">
      {/* Hero Section: Project-Specific */}
      <section className="hero-section">
        <h1>Welcome to The Way</h1>
        <p>
          A global community celebrating art, music, and sports—where creativity meets connection.
        </p>
      </section>

      {/* NFT Section: The Urchins */}
      <section className="nft-section">
        <h2>The Urchins: They’ll Show You the Way</h2>
        <p>
          Mint your Urchin NFT to join our exclusive community and unlock token-gated experiences.
        </p>
        <a href="https://mint-page-url.com" className="mint-button">
          Mint Now
        </a>
      </section>

      {/* What Drives Us Section */}
      <section className="values-section">
        <h2>What Drives Us</h2>
        <div className="values-container">
          <div className="value-card">
            <h3>Community Connection</h3>
            <p>Bringing enthusiasts together to share, collaborate, and connect.</p>
          </div>
          <div className="value-card">
            <h3>Growth Opportunities</h3>
            <p>Empowering individuals through creative and athletic pursuits.</p>
          </div>
          <div className="value-card">
            <h3>Creative Expression</h3>
            <p>Fostering innovation in art, music, and sports.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;