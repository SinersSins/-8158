import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Instagram, Mail, MapPin, Car } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="main-footer">
          {/* Brand Section */}
          <div className="brand-section">
            <div className="brand-logo">
              <Car size={24} />
              <span className="brand-name">TrafficRelief</span>
            </div>
            <div className="social-icons">
              <a href="#" aria-label="Facebook" className="social-icon">
                <Facebook />
              </a>
              <a href="#" aria-label="Twitter" className="social-icon">
                <Twitter />
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="bottom-bar">
          <p>© {new Date().getFullYear()} Snack & Steer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
