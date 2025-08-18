import React, { useState } from "react";
import courseData from "./courseData"; // keep your 60-course dataset here
import "./Courses.scss";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedBoard, setSelectedBoard] = useState("");
  const [flipped, setFlipped] = useState(null); // id of flipped card

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleFlip = (id) => setFlipped((prev) => (prev === id ? null : id));

  const filteredCourses = courseData.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesClass = selectedClass ? course.class === selectedClass : true;
    const matchesBoard = selectedBoard ? course.board === selectedBoard : true;
    return matchesSearch && matchesClass && matchesBoard;
  });

  return (
    <div className="fm-student-courses">
      {/* Header & Filters */}
      <div className="courses-header">
        <h2 className="page-title">Our Courses</h2>

        <input
          type="text"
          className="course-search"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={handleSearchChange}
          aria-label="Search courses"
        />

        <div className="filters">
          <select
            className="filter-select"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            aria-label="Filter by class"
          >
            <option value="">All Classes</option>
            <option value="VII">Class VII</option>
            <option value="VIII">Class VIII</option>
            <option value="IX">Class IX</option>
            <option value="X">Class X</option>
            <option value="XI">Class XI</option>
            <option value="XII">Class XII</option>
          </select>

          <select
            className="filter-select"
            value={selectedBoard}
            onChange={(e) => setSelectedBoard(e.target.value)}
            aria-label="Filter by board"
          >
            <option value="">All Boards</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="courses-list">
        {filteredCourses.length === 0 ? (
          <div className="no-courses">No courses found.</div>
        ) : (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`course-card ${flipped === course.id ? "flipped" : ""}`}
              onClick={() => handleFlip(course.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleFlip(course.id);
              }}
            >
              {/* Front Face */}
              <div className="course-front">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-meta">Class {course.class} &middot; {course.board}</p>
                <span className="flip-hint">Click to view syllabus</span>
              </div>

              {/* Back Face */}
              <div className="course-back">
                <h4 className="syllabus-title">Syllabus</h4>
                <ul className="syllabus-list">
                  {course.syllabus.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
                <span className="flip-hint">Click to flip back</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Courses;
