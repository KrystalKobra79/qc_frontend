// Home.jsx
import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import quantumClasses from '../assets/quantumClasses.svg';
import quantumClasses from './quantumClasses.svg';
import './Home.scss';

//const quantumClassesLogo = require('./assets/quantumClasses.svg');
const Home = () => {
  const [theme, setTheme] = useState('light-mode'); // default

  // === Sync theme with global body class ===
  useEffect(() => {
    const updateTheme = () => {
      const bodyClass = document.body.classList.contains('dark-mode')
        ? 'dark-mode'
        : 'light-mode';
      setTheme(bodyClass);
    };

    // Initial check
    updateTheme();

    // Listen for changes (in case other components change theme)
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`home-container ${theme}`}>
      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Investing in<br />
            <span className="highlight">Knowledge and<br />Your Future</span>
          </h1>
          <p>
            Our e-learning programs have been developed to deliver multimedia learning
            solutions for your business and personal growth.
          </p>
          <Link to="/enquiry" className="cta">Contact</Link>

          <div className="stats">
            <div className="stat">
              <span>50+</span>
              <span>Career Courses</span>
            </div>
            <div className="stat">
              <span>1M+</span>
              <span>Our Students</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          {/* Replace with actual hero image */}
          <div className="image-placeholder">
            <img src={quantumClasses} alt="" className='logo-qc'/>
          </div>
        </div>
      </section>

      {/* ===== Courses Section ===== */}
      <section className="courses">
        <h2>Browse Top Essential Career Courses</h2>
        <div className="course-grid">
          <div className="course-card uiux">
            <div className="card-icon"></div>
            <span>UI/UX Design</span>
          </div>
          <div className="course-card webdev">
            <div className="card-icon"></div>
            <span>Web Development</span>
          </div>
          <div className="course-card dmark">
            <div className="card-icon"></div>
            <span>Digital Marketing</span>
          </div>
          <div className="course-card practical">
            <div className="card-icon"></div>
            <span>Practical Learning</span>
          </div>
        </div>

        <Link to="/courses" className="browse-all">
          <FaArrowRight />
        </Link>
      </section>
    </div>
  );
};

export default Home;
