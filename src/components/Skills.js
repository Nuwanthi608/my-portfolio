import React from 'react';

function Skills() {
  return (
    <div className="container">
      <div className="about-section">
        <h2>My Technical Skills</h2>
        
        <div className="skills-category">
          <h4>Programming Languages:</h4>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>Java</li>
            <li>Python</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>

        <div className="skills-category">
          <h4>Frontend:</h4>
          <ul className="skills-list">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>Vite</li>
          </ul>
        </div>

        <div className="skills-category">
          <h4>Backend:</h4>
          <ul className="skills-list">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful APIs</li>
            <li>JWT</li>
            <li>bcrypt</li>
          </ul>
        </div>

        <div className="skills-category">
          <h4>Databases:</h4>
          <ul className="skills-list">
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="skills-category">
          <h4>Tools:</h4>
          <ul className="skills-list">
            <li>Git</li>
            <li>GitHub</li>
            <li>Netlify</li>
            <li>Postman</li>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Skills;