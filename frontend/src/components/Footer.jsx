import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'; // Social media icons
import '../components/styles/footer.css'; // Import the footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 The Way. All Rights Reserved.</p>
      <div className="social-links">
        <a href="https://twitter.com/TheWayProject" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/TheWayProject" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaInstagram />
        </a>
        <a href="https://facebook.com/TheWayProject" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaFacebookF />
        </a>
      </div>
    </footer>
  );
};

export default Footer;