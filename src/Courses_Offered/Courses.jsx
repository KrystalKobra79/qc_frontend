import React, { useState, useEffect } from 'react';
import './Courses.scss';

const dummyCourses = [
  {
    id: 1,
    title: 'React for Beginners',
    author: 'John Doe',
    lessons: 12,
    lastAccessed: '2025-08-01',
    progress: 75,
    thumbnail: 'https://via.placeholder.com/300x160',
  },
  {
    id: 2,
    title: 'Advanced CSS Animations',
    author: 'Jane Smith',
    lessons: 9,
    lastAccessed: '2025-07-25',
    progress: 40,
    thumbnail: 'https://via.placeholder.com/300x160',
  },
  {
    id: 3,
    title: 'Mastering JavaScript ES6+',
    author: 'Chris Lee',
    lessons: 15,
    lastAccessed: '2025-06-30',
    progress: 100,
    thumbnail: 'https://via.placeholder.com/300x160',
  },
  {
    id: 4,
    title: 'Responsive Web Design',
    author: 'Emily Carter',
    lessons: 10,
    lastAccessed: '2025-06-15',
    progress: 100,
    thumbnail: 'https://via.placeholder.com/300x160',
  },
  {
    id: 5,
    title: 'Git & GitHub Crash Course',
    author: 'Michael Chan',
    lessons: 7,
    lastAccessed: '2025-07-01',
    progress: 100,
    thumbnail: 'https://via.placeholder.com/300x160',
  },
];


const Courses = () => {
  const [activeTab, setActiveTab] = useState('inProgress');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Track theme based on <body> class
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.body.classList.contains('dark-mode'));
    };

    checkTheme(); // Initial check
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const filteredCourses = dummyCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab =
      activeTab === 'inProgress' ? course.progress < 100 : course.progress === 100;
    return matchesSearch && matchesTab;
  });

  return (
    <div className={`fm-student-courses ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Header Section */}
      <div className="courses-header">
        <h2 className="page-title">My Courses</h2>
        <input
          type="text"
          className="course-search"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === 'inProgress' ? 'active' : ''}
          onClick={() => setActiveTab('inProgress')}
        >
          In Progress
        </button>
        <button
          className={activeTab === 'completed' ? 'active' : ''}
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </button>
      </div>

      {/* Courses List */}
      <div className="courses-list">
        {filteredCourses.length === 0 ? (
          <div className="no-courses">No courses found.</div>
        ) : (
          filteredCourses.map((course) => (
            <div
              className="course-card"
              key={course.id}
              onClick={() => setSelectedCourse(course)}
            >
              <img src={course.thumbnail} alt={course.title} className="course-thumb" />
              <div className="course-info">
                <h3 className="course-title">{course.title}</h3>
                <div className="course-author">By {course.author}</div>
                <div className="course-meta">
                  <span>{course.lessons} Lessons</span>
                  <span>Last accessed: {course.lastAccessed}</span>
                </div>
                <div className="course-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-inner"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="progress-label">{course.progress}%</div>
                </div>
                <button className="btn">Resume</button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div className="modal-backdrop" onClick={() => setSelectedCourse(null)}>
          <div
            className="course-modal fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedCourse.title}</h2>
            <p><strong>Author:</strong> {selectedCourse.author}</p>
            <p><strong>Lessons:</strong> {selectedCourse.lessons}</p>
            <p><strong>Last Accessed:</strong> {selectedCourse.lastAccessed}</p>
            <p><strong>Progress:</strong> {selectedCourse.progress}%</p>
            <button className="btn" onClick={() => setSelectedCourse(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
