// IT IS COMPLETE

import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaBookOpen,
  FaUserAlt,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaInfoCircle, // ✅ Import cross icon
} from 'react-icons/fa';
import './NavBar.scss';

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef();

  // Toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Apply theme class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Close nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
      {/* Overlay for blur and outside-click */}
      {isMenuOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <header className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo">
            <NavLink to="/">Quantum Classes</NavLink>
          </div>

          <nav
            className={`navbar__links ${isMenuOpen ? 'open' : ''}`}
            ref={navRef}
          >
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              <FaHome />
              Home
            </NavLink>

            <NavLink to="/courses" onClick={() => setIsMenuOpen(false)}>
              <FaBookOpen />
              Courses
            </NavLink>

            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
              <FaInfoCircle />
              About
            </NavLink>

            <NavLink to="/enquiry" onClick={() => setIsMenuOpen(false)}>
              <FaEnvelope />
              Contact
            </NavLink>
          </nav>

          <div className="navbar__actions">
            <div className="theme-switch" onClick={toggleTheme}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </div>

            <div className="navbar__toggle" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
