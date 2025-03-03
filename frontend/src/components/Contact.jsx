import React from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>
            Want to connect with our community, explore growth opportunities, or share your creative expression? We’re here for you!
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="contact-details-section">
        <h2>Get in Touch</h2>
        <div className="contact-details">
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>
              <a href="mailto:hello@example.com" className="contact-link">
                hello@example.com
              </a>
            </p>
          </div>
          <div className="contact-card">
            <FaFacebookF className="contact-icon" />
            <h3>Facebook</h3>
            <p>
              <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer" className="contact-link">
                Follow us
              </a>
            </p>
          </div>
          <div className="contact-card">
            <FaInstagram className="contact-icon" />
            <h3>Instagram</h3>
            <p>
              <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" className="contact-link">
                Follow us
              </a>
            </p>
          </div>
          <div className="contact-card">
            <FaTwitter className="contact-icon" />
            <h3>Twitter</h3>
            <p>
              <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="contact-link">
                Follow us
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join the Movement</h2>
        <p>Be part of our vibrant community celebrating art, music, and sports.</p>
        <a href="mailto:hello@example.com?subject=Join Our Community" className="cta-button">
          Reach Out
        </a>
      </section>
    </div>
  );
};

export default Contact;