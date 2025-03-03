import React from 'react';
import './styles/web3.css';

const Web3 = () => {
  return (
    <div className="web3-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Discover Web 3 with The Way</h1>
            <p>
              Experience the future of the internet—where creativity, community, and decentralization unite.
            </p>
          </div>
        </div>
      </section>

      {/* What is Web 3? Section */}
      <section className="intro-section">
        <h2>What is Web 3?</h2>
        <p>
          Web 3 is the next evolution of the internet, powered by blockchain technology. It emphasizes decentralization, user ownership, and secure, transparent interactions. At The Way, we’re embracing Web 3 to empower our community of art, music, and sports enthusiasts.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>Benefits of Web 3</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Decentralized Ownership</h3>
            <p>Own your data and digital assets through NFTs and blockchain technology, ensuring transparency and control.</p>
          </div>
          <div className="benefit-card">
            <h3>Community Governance</h3>
            <p>Participate in shaping our platform through decentralized decision-making, giving every member a voice.</p>
          </div>
          <div className="benefit-card">
            <h3>Secure Interactions</h3>
            <p>Engage with our community using secure, encrypted transactions and identity solutions, powered by Web 3.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join the Web 3 Movement</h2>
        <p>
          Explore our Web 3 initiatives, including our NFT project, The Urchins, and start your journey into the decentralized future.
        </p>
        <a href="https://mint-page-url.com" className="cta-button">Explore The Urchins</a>
      </section>
    </div>
  );
};

export default Web3;