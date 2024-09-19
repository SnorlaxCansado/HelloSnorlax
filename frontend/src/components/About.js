// src/components/About.js
import React from 'react';
import profileImage from '../assets/profile.png';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profileImage} alt="Gabriel Santos" className="profile-image" />
        <div className="about-text">
          <p>Hello, I'm Gabriel Santos, an aspiring developer with a passion for Computer Science.</p>

          <h3>Education and Interests</h3>
          <p>
            Despite being a reserved person, I am always kind and open to new friendships. I began my academic journey in Economics and History but found my true passion in Computer Science. I enjoy reading, programming, and experimenting with new technologies.
          </p>

          <h3>International Experience</h3>
          <p>
            I recently returned from Portugal, where I lived for almost five years. I studied History at the University of Porto, and this experience has greatly enriched my outlook on life.
          </p>

          <h3>Personal and Professional Development</h3>
          <p>
            My journey has equipped me with skills that transcend my academic background. I look forward to contributing these experiences in my professional career as a developer.
          </p>

          <h3>Professional Objective</h3>
          <p>
            I am eager to apply my knowledge and skills in Computer Science to contribute to innovative and creative solutions.
          </p>

          <p>Let's connect!</p>
          <a href="mailto:gabrielthss@gmail.com" className="cta-button">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default About;