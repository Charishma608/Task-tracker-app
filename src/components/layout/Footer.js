import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import '../../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/tasks', label: 'My Tasks' },
    { path: '/about', label: 'About Us' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

 
  const contactInfo = [
    { 
      icon: <FaEnvelope />, 
      text: 'info@tasktracker.com',
      href: 'mailto:info@tasktracker.com'
    },
    { 
      icon: <FaPhone />, 
      text: '+1 (123) 456-7890',
      href: 'tel:+11234567890'
    },
    { 
      icon: <FaMapMarkerAlt />, 
      text: '123 Task St, Productivity City, PC 12345',
      href: 'https://maps.google.com'
    },
  ];

  // Social media links
  const socialLinks = [
    { 
      icon: <FaFacebookF />, 
      label: 'Facebook',
      url: '#',
      color: '#1877F2'
    },
    { 
      icon: <FaTwitter />, 
      label: 'Twitter',
      url: '#',
      color: '#1DA1F2'
    },
    { 
      icon: <FaLinkedinIn />, 
      label: 'LinkedIn',
      url: '#',
      color: '#0A66C2'
    },
    { 
      icon: <FaInstagram />, 
      label: 'Instagram',
      url: '#',
      color: '#E4405F'
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3>Task Tracker</h3>
            <p>
              Stay organized and boost your productivity with our intuitive task management solution. 
              Designed for teams and individuals who want to achieve more every day.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{ '--hover-color': social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <FaArrowRight className="link-arrow" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="contact-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for the latest updates and tips on productivity.</p>
            <form className="newsletter-form">
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="form-input"
                  required 
                />
                <button type="submit" className="btn-icon" aria-label="Subscribe">
                  <FiSend />
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Task Tracker. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="divider">•</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="divider">•</span>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
