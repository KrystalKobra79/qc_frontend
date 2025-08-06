import React, { useState } from 'react';
import './Courses.scss';

const stats = [
  { label: 'Enrolled Courses', value: 8 },
  { label: 'Progress', value: '65%' },
  { label: 'Completed', value: 3 },
];

const courses = [
  {
    title: 'React for Beginners',
    instructor: 'Alice Johnson',
    progress: 45,
  },
  {
    title: 'Advanced CSS & Sass',
    instructor: 'Bob Lee',
    progress: 80,
  },
  {
    title: 'Node.js Mastery',
    instructor: 'Carol Smith',
    progress: 30,
  },
  {
    title: 'UI/UX Design Fundamentals',
    instructor: 'Dave Brown',
    progress: 70,
  },
];

const popularCourses = [
  {
    title: 'Python for Data Science',
    instructor: 'Emma Watson',
    progress: 90,
  },
  {
    title: 'Machine Learning Basics',
    instructor: 'John Snow',
    progress: 78,
  },
];

export default function Courses() {
  const [theme, setTheme] = useState('theme-light');

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === 'theme-light' ? 'theme-dark' : 'theme-light'
    );
  };

  return (
    <div className={`${theme} courses-dashboard`}>
      {/* Toggle Button */}
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: 'var(--primary)',
          color: 'white',
          cursor: 'pointer',
          zIndex: 999,
        }}
      >
        Toggle Theme
      </button>

      {/* Sidebar */}
      <aside className="courses-dashboard__sidebar">
        <h2>Navigation</h2>
        <nav>
          <a href="#overview">Overview</a>
          <a href="#enrolled">Enrolled</a>
          <a href="#popular">Popular</a>
          <a href="#settings">Settings</a>
        </nav>
      </aside>

      {/* Header */}
      <header className="courses-dashboard__header">
        <h1>Your Dashboard</h1>
      </header>

      {/* Stats */}
      <section className="courses-dashboard__stats">
        {stats.map((stat, index) => (
          <div key={index} className="courses-dashboard__stats-card">
            <div className="value">{stat.value}</div>
            <div className="label">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Courses */}
      <section className="courses-dashboard__courses-list">
        {courses.map((course, index) => (
          <div key={index} className="courses-dashboard__card">
            <h2 className="courses-dashboard__card-title">{course.title}</h2>
            <p>Instructor: {course.instructor}</p>
            <div className="progress-bar">
              <div
                className="progress-bar__filled"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </section>

      {/* Popular */}
      <section className="courses-dashboard__popular" id="popular">
        <h3>Popular Courses</h3>
        {popularCourses.map((course, index) => (
          <div key={index} className="highlight-box">
            <div className="highlight-title">{course.title}</div>
            <div className="highlight-progress">
              Instructor: {course.instructor} — Progress: {course.progress}%
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar__filled"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
