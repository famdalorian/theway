import React from "react";
import {
  FaYoutube,
  FaTelegram,
  FaTwitter,
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import "./styles/community.css";

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

      {/* Connect with Us Section */}
      <section className="social-section">
        <h2>Connect with Us</h2>
        <p>Join our community on your favorite platforms and stay updated!</p>
        <div className="social-links">
          <div className="social-card">
            <a href="https://youtube.com/TheWayProject" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaYoutube className="social-icon" />
              <span>YouTube</span>
            </a>
          </div>
          <div className="social-card">
            <a href="https://t.me/TheWayProject" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTelegram className="social-icon" />
              <span>Telegram</span>
            </a>
          </div>
          <div className="social-card">
            <a href="https://twitter.com/TheWayProject" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter className="social-icon" />
              <span>X</span>
            </a>
          </div>
          <div className="social-card">
            <a href="https://discord.gg/TheWayProject" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaDiscord className="social-icon" />
              <span>Discord</span>
            </a>
          </div>
          <div className="social-card">
            <a href="https://facebook.com/TheWayProject" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebookF className="social-icon" />
              <span>Facebook</span>
            </a>
          </div>
          <div className="social-card">
            <a href="https://instagram.com/TheWayProject" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram className="social-icon" />
              <span>Instagram</span>
            </a>
          </div>
          <div className="social-card">
            <a href="https://linkedin.com/company/TheWayProject" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="social-card">
            <a href="https://tiktok.com/@TheWayProject" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTiktok className="social-icon" />
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;