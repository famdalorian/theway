import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './styles/contact.css'; // Custom CSS for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or would like to get in touch, please reach out using the information below:</p>

      <div className="contact-details">
        <p><strong>Email:</strong> contact@thewayproject.com</p>
        {/* <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Address:</strong> 123 Action Park Avenue, City Name, Country</p> */}
      </div>

      <div className="social-media">
        <h3>Follow Us</h3>
        <p>Stay updated with our latest news by following us on social media:</p>
        <div className="social-icons">
          <a href="https://facebook.com/TheWayProject" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="icon" />
          </a>
          <a href="https://instagram.com/TheWayProject" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://twitter.com/TheWayProject" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
