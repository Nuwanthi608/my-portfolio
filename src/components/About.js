import React from 'react';

function About() {
  return (
    <div className="container">
      <div className="about-section">
        <h2>About Me</h2>
        
        <h3>📚 Educational Background</h3>
        <p>I am an IT student at the
        Institute of Technology,
        University of Moratuwa.</p>
        
        <h3>💻 Technical Skills</h3>
        <ul className="skills-list">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML5/CSS3</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>Git/GitHub</li>
        </ul>
        
        <div className="aspirations">
          <h3>🎯 Career Aspirations</h3>
          <p>I aspire to work as a Software Engineer at a global tech company, building innovative solutions that make a difference in people's lives.</p>
        </div>
      </div>
    </div>
  );
}

export default About;