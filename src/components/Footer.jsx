import React from 'react'; // Import React library to create the component
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons from react-icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom to handle internal navigation
import '../css/Footer.css'; // Import CSS for styling the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            {/* Links to internal pages using Link from react-router-dom */}
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li> {/* Updated to route to shop page */}
            <li><a href="#about">About</a></li> {/* External link, could be for an anchor tag on the same page */}
            <li><a href="#contact">Contact</a></li> {/* External link, could be for an anchor tag on the same page */}
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            {/* Social media icons linking to respective profiles */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> {/* Facebook icon */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter /> {/* Twitter icon */}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> {/* Instagram icon */}
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> {/* LinkedIn icon */}
            </a>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@example.com</p> {/* Placeholder email address */}
          <p>Phone: +1 123 456 7890</p> {/* Placeholder phone number */}
          <p>Address: 123 Main St, City, Country</p> {/* Placeholder address */}
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 ShopEase. All Rights Reserved.</p> {/* Copyright information */}
      </div>
    </footer>
  );
};

export default Footer;
