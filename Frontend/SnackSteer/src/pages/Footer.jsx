import React from 'react';
import '../styles/Footer.css';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Car, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="text-center">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for traffic updates and service alerts.</p>
          </div>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="main-footer">
          {/* Brand Section */}
          <div className="brand-section">
            <div className="flex items-center space-x-3">
              <div className="icon-wrapper">
                <Car />
              </div>
              <span>TrafficRelief</span>
            </div>
            <p>
              Revolutionizing your traffic experience with smart solutions and real-time assistance. Your journey, our priority.
            </p>
            <div className="social-icons">
              <a href="#"><Facebook /></a>
              <a href="#"><Twitter /></a>
              <a href="#"><Instagram /></a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-section">
            <h3>Contact Us</h3>
            <div className="contact-links">
              <a href="mailto:support@snacknsteer.com">
                <Mail />
                <span>support@snacknsteer.com</span>
              </a>
              <a href="tel:1-800-TRAFFIC">
                <Phone />
                <span>1-800-TRAFFIC</span>
              </a>
              <div>
                <MapPin />
                <span>123 Traffic Way, Smart City</span>
              </div>
              <div>
                <Clock />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar">
          <p>© {new Date().getFullYear()} TrafficRelief. All rights reserved.</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
