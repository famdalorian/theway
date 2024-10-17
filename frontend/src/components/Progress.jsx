// src/components/Progress.js
import React from 'react';
import './styles/progress.css'

const Progress = () => {
  // Example current values (you can later update this dynamically)
  const currentGym = 20000; // $20,000 raised
  const currentStudio = 50000; // $50,000 raised
  const currentSkatepark = 500000; // $500,000 raised

  const gymGoal = 50000; // Gym goal
  const studioGoal = 100000; // Studio goal
  const skateparkGoal = 2000000; // Skatepark goal

  const calculateProgress = (current, goal) => (current / goal) * 100;

  return (
    <div className="progress-container">
      <h2>Help Us Reach Our Goals</h2>
      <p>We're raising funds for three major parts of our project. Every bit helps!</p>

      {/* Gym Progress */}
      <div className="progress-section">
        <h3>Gym - $50,000 Goal</h3>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${calculateProgress(currentGym, gymGoal)}%` }}
          ></div>
        </div>
        <p>${currentGym.toLocaleString()} raised</p>
        <div className="crypto-addresses">
          <p><strong>ETH:</strong> 0xGymEthAddress</p>
          <p><strong>SOL:</strong> GymSolAddress</p>
          <p><strong>BTC:</strong> GymBtcAddress</p>
        </div>
      </div>

      {/* Studio Progress */}
      <div className="progress-section">
        <h3>Studio - $100,000 Goal</h3>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${calculateProgress(currentStudio, studioGoal)}%` }}
          ></div>
        </div>
        <p>${currentStudio.toLocaleString()} raised</p>
        <div className="crypto-addresses">
          <p><strong>ETH:</strong> 0xStudioEthAddress</p>
          <p><strong>SOL:</strong> StudioSolAddress</p>
          <p><strong>BTC:</strong> StudioBtcAddress</p>
        </div>
      </div>

      {/* Skatepark Progress */}
      <div className="progress-section">
        <h3>Skatepark - $2,000,000 Goal</h3>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${calculateProgress(currentSkatepark, skateparkGoal)}%` }}
          ></div>
        </div>
        <p>${currentSkatepark.toLocaleString()} raised</p>
        <div className="crypto-addresses">
          <p><strong>ETH:</strong> 0xSkateparkEthAddress</p>
          <p><strong>SOL:</strong> SkateparkSolAddress</p>
          <p><strong>BTC:</strong> SkateparkBtcAddress</p>
        </div>
      </div>

      {/* $WAY Coin Section */}
      <div className="way-coin-section">
        <h2>Support Us with $WAY</h2>
        <p>
          $WAY is our exclusive token that helps fund the growth and development of The Way. By purchasing or donating $WAY, you’re directly supporting our mission to build a world-class facility for extreme sports, martial arts, and creativity.
        </p>
        <p>
          You can purchase $WAY through our partnered platforms and contribute to our project. Every token bought brings us one step closer to building a space where community and growth thrive.
        </p>
        <div className="crypto-addresses">
          <p><strong>Contract Address (ETH):</strong> 0xWayEthTokenAddress</p>
          <p><strong>Contract Address (SOL):</strong> WaySolTokenAddress</p>
          <p><strong>Contract Address (BTC):</strong> WayBtcTokenAddress</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
