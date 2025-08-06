import React, { useEffect, useRef } from 'react';
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
  FaInfoCircle,
} from 'react-icons/fa';
import './NavBar.scss';

const NavBar = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navRef = useRef();

  // Apply theme class to body via props
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
          {/* Logo */}
          <div className="navbar__logo">
            <NavLink to="/">Quantum Classes</NavLink>
          </div>

          {/* Navigation Links */}
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

          {/* Actions */}
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
