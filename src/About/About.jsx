import React from 'react';
import './About.scss';
import { FaBookOpen } from 'react-icons/fa';


const About = ({ theme }) => {
  return (
    <div className={`about-page ${theme}`}>
      {/* Decorative SVG Blobs */}
      {/* Decorative blobs */}
      <div className="blob top-left">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#54A39F">
          <path d="M43.4,-74.1C56.7,-63.6,69.3,-53.7,74.6,-40.8C79.9,-27.8,77.8,-11.9,75.5,4.7C73.2,21.3,70.7,38.6,60.6,49.6C50.6,60.7,32.9,65.6,15.7,70.6C-1.6,75.6,-18.3,80.7,-30.2,74.3C-42.2,67.9,-49.5,50.1,-57.2,35.1C-64.9,20.1,-73.1,7.8,-70.4,-2.6C-67.6,-13,-53.9,-21.4,-43.2,-33.6C-32.6,-45.8,-24.9,-61.9,-12.7,-72C-0.5,-82.2,16.2,-86.3,30.2,-79.2C44.2,-72.1,56,-53.7,43.4,-74.1Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="blob bottom-right">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#F99975">
          <path d="M44.3,-65.3C57.8,-54.2,69.3,-42.4,75.1,-28.2C81,-13.9,81.3,2.8,73.7,15.4C66.1,28,50.6,36.5,36.1,45.2C21.5,53.8,7.9,62.6,-4.8,68.5C-17.6,74.4,-35.3,77.3,-45.7,68.7C-56.1,60,-59.1,39.8,-65.6,20.4C-72.2,1.1,-82.2,-17.4,-75.9,-28.9C-69.6,-40.5,-46.9,-45.2,-30.6,-53.5C-14.2,-61.8,-7.1,-73.8,4.2,-80.2C15.6,-86.7,31.1,-87.5,44.3,-65.3Z" transform="translate(100 100)" />
        </svg>
      </div>


      {/* Intro Section */}
      <section className="intro fade-in">
        <h1>About Us</h1>
        <h2>Quantum Classes&trade;</h2>
        <p>
          A premium insititute for CBSE and ICSE Students.
        </p>
      </section>

      {/* Values Section */}
      <section className="values fade-in">
        <div className="value-box">
          <h3>Expert Guidance</h3>
          <p>We provide extensive curriculum coverage and encourage students to interact and ask questions.</p>
        </div>

        <div className="value-box">
          <h3>Long-standing Experience</h3>
          <p>Over 20 years of experience being a professor.</p>
        </div>

        <div className="value-box">
          <h3>Why choose us?</h3>
          <p>B.Sc (Hons.) in Mathematics</p>
          <p>Former Professor at St. Xavier's Institute</p>
        </div>
        
      </section>

        {/* 
        <section className="team fade-in">
        <div className="team-card">
          
          <img src={member1} alt="Jane Doe" /> 
          <h4>Jane Doe</h4>
          <span>Nutritionist</span>
        </div>
        <div className="team-card">
          <img src={member1} alt="Jane Doe" />
          <h4>John Smith</h4>
          <span>Yoga Coach</span>
        </div>
        <div className="team-card">
          <img src={member1} alt="Jane Doe" />
          <h4>Sara Lee</h4>
          <span>Therapist</span>
        </div>
      </section> */}
      {/* Team Section */}
      
      {/* CTA Section */}

      <section className="cta fade-in course-link-card">
        <p>
        <a href="/courses"> <FaBookOpen/>   Check out our Courses</a>
        </p>
      </section>
      <section className="cta fade-in">
        <p>
          Ready to start your academic journey? <a href="/enquiry">Contact us today</a> and take the first step.
        </p>
      </section>
    </div>
  );
};

export default About;



