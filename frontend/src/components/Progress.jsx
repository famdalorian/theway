// src/components/Progress.js
import React from "react";
import "./styles/progress.css"; // Link to your CSS file

const Progress = () => {
  const currentGym = 5000; // $20,000 raised
  const currentStudio = 5000; // $50,000 raised
  const currentSkatepark = 5000; // $500,000 raised

  const gymGoal = 50000; // Gym goal
  const studioGoal = 100000; // Studio goal
  const skateparkGoal = 2500000; // Skatepark goal

  const calculateProgress = (current, goal) => (current / goal) * 100;

  return (
    <div className="progress-container">
      <h2>Help Us Reach Our Goals</h2>
      <p>
        We're raising funds for three major parts of our project. Every bit
        helps!
      </p>

      {/* Gym Progress */}
      <div className="progress-section">
        <h3>Gym - $50,000 Goal</h3>
        <div className="progress-bar-3d">
          <div
            className="progress-bar-fill-3d"
            style={{
              transform: `scaleX(${
                calculateProgress(currentGym, gymGoal) / 100
              })`,
            }}
          ></div>
        </div>
        <p>${currentGym.toLocaleString()} raised</p>
      </div>

      {/* Studio Progress */}
      <div className="progress-section">
        <h3>Studio - $100,000 Goal</h3>
        <div className="progress-bar-3d">
          <div
            className="progress-bar-fill-3d"
            style={{
              transform: `scaleX(${
                calculateProgress(currentStudio, studioGoal) / 100
              })`,
            }}
          ></div>
        </div>
        <p>${currentStudio.toLocaleString()} raised</p>
      </div>

      {/* Skatepark Progress */}
      <div className="progress-section">
        <h3>Skatepark - $2,500,000 Goal</h3>
        <div className="progress-bar-3d">
          <div
            className="progress-bar-fill-3d"
            style={{
              transform: `scaleX(${
                calculateProgress(currentSkatepark, skateparkGoal) / 100
              })`,
            }}
          ></div>
        </div>
        <p>${currentSkatepark.toLocaleString()} raised</p>
      </div>
      <div className="crypto-addresses">
        <p>
          <strong>ETH:</strong> 0xGymEthAddress
        </p>
        <p>
          <strong>SOL:</strong> GymSolAddress
        </p>
        <p>
          <strong>BTC:</strong> GymBtcAddress
        </p>
      </div>
      <br />
      {/* 3 Spinning Coins for $WAY */}
      <div className="way-coin-section">
        <h2>Support Us with $WAY</h2>
        <div className="coin-row">
          {/* ETH Coin */}
          <div className="coin-3d-container eth-coin">
            <div className="coin-3d"></div> {/* ETH coin */}
          </div>
          {/* SOL Coin */}
          <div className="coin-3d-container sol-coin">
            <div className="coin-3d"></div> {/* SOL coin */}
          </div>
          {/* BTC Coin */}
          <div className="coin-3d-container btc-coin">
            <div className="coin-3d"></div>
          </div>
        </div>
        <p>
          $WAY is our exclusive token that helps fund the growth and development
          of The Way. You can purchase $WAY and contribute to our project.
        </p>
        <div className="crypto-addresses">
          <p>
            <strong>ETH:</strong> 0xWayEthTokenAddress
          </p>
          <p>
            <strong>SOL:</strong> WaySolTokenAddress
          </p>
          <p>
            <strong>BTC:</strong> WayBtcTokenAddress
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
