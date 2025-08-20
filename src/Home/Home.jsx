//Home.jsx

import QuantumClasses from "../assets/QuantumClasses.webp";
import teacher1 from "../assets/teacher1.jpg";
import teacher2 from "../assets/teacher2.jpg";

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight, FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiBookOpen } from "react-icons/bi";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-page">
      {/* === HERO SECTION === */}
      <section className="hero-section">

        <div className="hero-image">
          <img
            src={QuantumClasses}
            alt="Learning Illustration"
            className="hero-img"
          />
        </div>

        <div className="hero-info">

          <h1 className="hero-title slide-up">Join Quantum Classes&trade; now!</h1>
          <p className="hero-subtitle slide-up">
          Quantum Classes&trade; : A premium institute for CBSE & ICSE students from classes VII-XII.
          </p>
          
          <div className="address-card">
            <p className="hero-subtitle slide-up">
              <MdOutlineLocationOn /> Quantum Classes, <br/> 1 No. Bijay Nagar, Madhyamgram, <br/>Kolkata - 7000129, India
            </p>
          </div>
          
          <div className="hero-buttons slide-up">
            <Link to={"/courses"} className="btn primary">Explore Courses</Link>
            <br/>
            <Link to={"/about"} className="btn secondary">About Us</Link>
          </div>

        </div>

      </section>

      {/* === TEACHER SECTION === */}
      
      <section className="teacher-section">
        {/* Alok Dey */}
           <div className="teacher-info slide-up">
          <h2><FaChalkboardTeacher /> Main Teacher</h2>
          <p>
            <strong>Alok Dey</strong><br />
            B.Sc (Honors) in Mathematics, 20+ years of teaching experience.<br />
          </p>
        </div>
        <div className="teacher-image slide-up">
          <img
            src={teacher1}
            alt="Main Teacher"
            className="teacher-img"
          />
        </div>
       
        {/* Founder */}
        <div className="teacher-info slide-up">
          <h2><FaChalkboardTeacher /> Founder</h2>
          <p>
            <strong>Alok Dey - [Partner]</strong><br />
            B.Sc (Honors) in Mathematics, 20+ years of teaching experience.<br />
            
          </p>
        </div>
        <div className="teacher-image slide-up">
          <img
            src={teacher2}
            alt="Founder"
            className="teacher-img"
          />
        </div>
        
      </section>

      {/* === COURSES SECTION === */}
      <section className="courses-section">
        <h2 className="section-title slide-up"><BiBookOpen /> Popular Courses</h2>
        <div className="courses-container">
          <div className="course-card math slide-up">Mathematics</div>
          <div className="course-card physics slide-up">Physics</div>
          <div className="course-card chemistry slide-up">Chemistry</div>
          <div className="course-card biology slide-up">Biology</div>
          <div className="course-card cs slide-up">Computer Science</div>
        </div>
        <Link to={"/courses"} className="courses-arrow-link"> <FaArrowAltCircleRight/> </Link>
      </section>

      {/* === CTA SECTION === */}
      <section className="cta-section slide-up">
        <h2>Start Your Learning Journey Today!</h2>
        <p>Contact us now and join thousands of students achieving their dreams.</p>
        <Link to={"/enquiry"} className="btn primary">Contact</Link>
      </section>
    </div>
  );
};

export default Home;
