import React from 'react';
import './styles/progress.css';

const Progress = () => {
  const currentArt = 30000; // 60% of $50,000 goal
  const currentMusic = 22500; // 45% of $50,000 goal
  const currentSports = 15000; // 30% of $50,000 goal

  const artGoal = 50000;
  const musicGoal = 50000;
  const sportsGoal = 50000;

  const calculateProgress = (current, goal) => {
    const percentage = (current / goal) * 100;
    console.log(`${current} / ${goal} = ${percentage}%`); // Debug log
    return percentage;
  };

  return (
    <div className="progress-page">
      {/* Hero Section */}
      <section className="progress-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Support The Way</h1>
            <p>Help us grow a global community for art, music, and sports, and support kindness initiatives.</p>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="progress-section">
        <h2>Our Fundraising Goals</h2>
        <div className="progress-container">
          {/* Art Community Progress */}
          <div className="progress-item">
            <h3>Art Community - $50,000 Goal</h3>
            <div className="progress-bar-wrapper">
              <div className="progress-bar-3d">
                <div
                  className="progress-bar-fill-3d"
                  style={{ '--progress-width': `${calculateProgress(currentArt, artGoal)}%` }}
                ></div>
              </div>
              <div className="progress-bar-shadow"></div>
            </div>
            <p>${currentArt.toLocaleString()} Raised</p>
          </div>

          {/* Music Community Progress */}
          <div className="progress-item">
            <h3>Music Community - $50,000 Goal</h3>
            <div className="progress-bar-wrapper">
              <div className="progress-bar-3d">
                <div
                  className="progress-bar-fill-3d"
                  style={{ '--progress-width': `${calculateProgress(currentMusic, musicGoal)}%` }}
                ></div>
              </div>
              <div className="progress-bar-shadow"></div>
            </div>
            <p>${currentMusic.toLocaleString()} Raised</p>
          </div>

          {/* Sports Community Progress */}
          <div className="progress-item">
            <h3>Sports Community - $50,000 Goal</h3>
            <div className="progress-bar-wrapper">
              <div className="progress-bar-3d">
                <div
                  className="progress-bar-fill-3d"
                  style={{ '--progress-width': `${calculateProgress(currentSports, sportsGoal)}%` }}
                ></div>
              </div>
              <div className="progress-bar-shadow"></div>
            </div>
            <p>${currentSports.toLocaleString()} Raised</p>
          </div>

          {/* Crypto Donation Info */}
          <div className="crypto-addresses">
            <p>Your support via crypto helps us expand and give back:</p>
            <div className="crypto-address">
              <strong>ETH:</strong> 0xYourEthAddress
              <button className="copy-button">Copy</button>
            </div>
            <div className="crypto-address">
              <strong>SOL:</strong> YourSolAddress
              <button className="copy-button">Copy</button>
            </div>
            <div className="crypto-address">
              <strong>BTC:</strong> YourBtcAddress
              <button className="copy-button">Copy</button>
            </div>
          </div>
        </div>
      </section>

      {/* $WAY Coin Section */}
      <section className="way-coin-section">
        <h2>Boost Us with $WAY</h2>
        <div className="coin-row">
          <div className="coin-3d-container eth-coin">
            <div className="coin-3d"></div>
          </div>
          <div className="coin-3d-container sol-coin">
            <div className="coin-3d"></div>
          </div>
          <div className="coin-3d-container btc-coin">
            <div className="coin-3d"></div>
          </div>
        </div>
        <p>$WAY fuels community growth and kindness efforts. Holders get voting rights and exclusive event access.</p>
      </section>
    </div>
  );
};

export default Progress;