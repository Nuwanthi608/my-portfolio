import React from 'react';
import myPhoto from '../me.jpeg';  // src folder එකේ තියෙන photo එක import කරන්න

function Home() {
  return (
    <div className="container">
      <div className="home-section">
        <div className="home-row">
          {/* Left Side - Image */}
          <div className="home-image-col">
            <div className="image-frame">
              <img 
                src={myPhoto}
                alt="Nuwanthi Piyathilaka"
                className="profile-photo-home"
              />
              <div className="image-glow"></div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="home-text-col">
            <div className="home-badge">✨ Welcome to My Portfolio ✨</div>
            
            <h1 className="home-name">
              <span className="hello-text">Hello, I'm</span>
              <br />
              <span className="name-highlight">Nuwanthi Piyathilaka</span>
            </h1>
            
            <div className="student-badge">
              🎓 IT Student | Institute of Technology, University of Moratuwa
            </div>
            
            <p className="home-description">
              I'm an IT student at University of Moratuwa. I love building websites and learning new technologies. 
              Looking for internship opportunities to improve my skills and contribute to real projects.
            </p>
            
            <div className="home-buttons">
              <a href="/projects" className="btn-primary">📁 View My Work →</a>
              <a href="/contact" className="btn-outline">📧 Contact Me</a>
            </div>
            
            <div className="social-buttons">
              <a href="https://github.com/Nuwanthi608" target="_blank" rel="noreferrer" className="social-icon">💻 GitHub</a>
              <a href="#" className="social-icon">🔗 LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;