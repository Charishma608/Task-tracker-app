import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTasks, FaBars, FaTimes, FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import '../../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  // Navigation items
  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome className="nav-icon" /> },
    { path: '/tasks', label: 'My Tasks', icon: <FaTasks className="nav-icon" /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle className="nav-icon" /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope className="nav-icon" /> },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <FaTasks className="logo-icon" />
              <span>Task Tracker</span>
            </Link>
          </div>

          
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link 
                    to={item.path} 
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      
     
      {isMenuOpen && (
        <div 
          className="overlay active" 
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
          aria-label="Close menu"
        />
      )}
    </>
  );
};

export default Header;
