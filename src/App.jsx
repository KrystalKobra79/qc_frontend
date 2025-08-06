import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar/NavBar';

// import Courses from './Courses/Courses';
import Courses from './Courses_Offered/Courses';

// import About from './About_Us/About';
import About from './About/About';
import Enquiry from './Enquiry/Enquiry';
import Home from './Home/Home';
import NotFoundPage from './NotFoundPage/NotFoundPage';

const App = () => {
  // Load theme from localStorage or default to light
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const [isDarkMode, setIsDarkMode] = useState(() => {
  return localStorage.getItem('theme') === 'dark';
  });

const toggleTheme = () => {
  const newTheme = isDarkMode ? 'light' : 'dark';
  setIsDarkMode(!isDarkMode);
  localStorage.setItem('theme', newTheme);
};

  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    document.body.classList.add('theme-transition');

    // Save to localStorage
    localStorage.setItem('theme', theme);

    // Remove transition after delay (for animation)
    const timeout = setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 400); // match CSS transition time

    return () => clearTimeout(timeout);
  }, [theme]);

  /*
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
*/
  return (
    <Router>
      <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/courses" element={<Courses/>}></Route>
          <Route path="/enquiry" element={<Enquiry/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/*" element={<NotFoundPage/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
