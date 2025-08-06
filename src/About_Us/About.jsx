import React from 'react';
import './About.scss';

// Simple reusable SVG Blob
const Blob = ({ className, style }) => (
  <svg
    className={`blob ${className}`}
    style={style}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M45.4,-67.7C57.2,-61.3,64.8,-47.1,69.3,-32.8C73.8,-18.5,75.2,-4.2,73.9,10.9C72.5,26,68.4,41.8,58.6,51.2C48.8,60.6,33.3,63.5,18.2,66.7C3.1,69.9,-11.6,73.4,-27.2,70.4C-42.7,67.4,-59.1,57.8,-67.4,43.7C-75.6,29.6,-75.6,10.9,-73.2,-6.8C-70.8,-24.5,-66.1,-41.3,-55.7,-50.5C-45.3,-59.6,-29.2,-61,-13.1,-67.7C3,-74.4,15.9,-86.5,28.4,-85.2C40.9,-83.8,52.6,-69.8,45.4,-67.7Z"
      transform="translate(100 100)"
    />
  </svg>
);

export default function About() {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>About Us</h1>
        <p>We are learning innovators shaping the future of e‑learning.</p>
      </section>

      {/* BLOB SVGs */}
      <Blob className="blob-one" style={{ top: '10%', left: '5%' }} />
      <Blob className="blob-two" style={{ bottom: '15%', right: '10%' }} />

      {/* STATS */}
      <section className="stats">
        <div className="stat">
          <span className="number">150+</span>
          <span className="label">Courses</span>
        </div>
        <div className="stat">
          <span className="number">10K+</span>
          <span className="label">Students</span>
        </div>
        <div className="stat">
          <span className="number">25</span>
          <span className="label">Instructors</span>
        </div>
      </section>

      {/* TEAM */}
      <section className="team">
        <h2>Our Team</h2>
        <div className="cards">
          {['Alice', 'Bob', 'Carol', 'Dan'].map((name, index) => (
            <div key={index} className="card">
              <div className="avatar">{name[0]}</div>
              <div className="name">{name}</div>
              <div className="role">Team Member</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
