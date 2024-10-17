// src/components/Contact.js
import React from 'react';
import './styles/contact.css'; // Assuming you have a CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or would like to get in touch with us, please reach out using the following information:</p>

      <div className="contact-details">
        <p><strong>Email:</strong> contact@thewayproject.com</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Address:</strong> 123 Action Park Avenue, City Name, Country</p>
      </div>

      <div className="social-media">
        <h3>Follow Us</h3>
        <p>
          Stay updated with our latest news and progress by following us on social media:
        </p>
        <p><strong>Facebook:</strong> @TheWayProject</p>
        <p><strong>Instagram:</strong> @TheWayProject</p>
        <p><strong>Twitter:</strong> @TheWayProject</p>
      </div>
    </div>
  );
};

export default Contact;
