import React from 'react';
import myPhoto from '../me.jpeg';

function Home() {
  return (
    <div className="container">
      <div className="home-section">
        <div className="home-row">
          
          <div className="home-text-col">
            <h1 className="home-name">
              <span className="hello-text">Hello, I'm </span>
              <br />
              <span className="name-highlight">Nuwanthi Piyathilaka</span>
            </h1>

            <h2 className="home-title">IT Undergraduate | Aspiring Software Engineer</h2>
            
            <div className="home-buttons">
              <a href="/projects" className="btn-primary">View My Projects</a>
              
              {/* මෙතන Contact Me වෙනුවට View CV දැම්මා */}
              <a href="/CV.pdf" target="_blank" rel="noreferrer" className="btn-outline">
                View CV
              </a>
            </div>
          </div>

          <div className="home-image-col">
            <div className="image-frame">
              <img src={myPhoto} alt="Nuwanthi Piyathilaka" className="profile-photo-home" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;