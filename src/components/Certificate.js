import React, { useState } from 'react';
import cert1 from '../ceti1.png';
import cert2 from '../ceti2.png';
import cert3 from '../ceti3.png';
import cert4 from '../ceti4.png';
import cert5 from '../ceti5.png';

function Certificates() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="cert-page-wrapper">
      <div className="cert-header">
        <h2>📜 Licenses & Certifications</h2>
      </div>
      
      <div className="certificates-list">
        
        {/* Certificate 1 */}
        <div className="cert-card-row">
          <div className="cert-image-box" onClick={() => setSelectedImg(cert1)}>
             <img src={cert1} alt="Python Programming" style={{ pointerEvents: 'none' }} />
          </div>
          <div className="cert-content">
            <h3>Python Programming</h3>
            <p className="cert-issuer">Centre for Open & Distance Learning (CODL), University of Moratuwa</p>
            <p className="cert-date">📅 Issued: Jan 2026</p>
            <p className="cert-desc">
              Successfully completed the comprehensive Python Programming online learning programme. 
              Gained hands-on experience in Python syntax, data structures, and basic programming logic.
            </p>
            <a href="https://www.linkedin.com/in/nuwanthi-piyathilaka-396a1335b/" target="_blank" rel="noreferrer" className="cert-btn">Show Credential ↗</a>
          </div>
        </div>

        {/* Certificate 2 */}
        <div className="cert-card-row">
          <div className="cert-image-box" onClick={() => setSelectedImg(cert2)}>
             <img src={cert2} alt="Web Design for Beginners" style={{ pointerEvents: 'none' }} />
          </div>
          <div className="cert-content">
            <h3>Web Design for Beginners</h3>
            <p className="cert-issuer">Centre for Open & Distance Learning (CODL), University of Moratuwa</p>
            <p className="cert-date">📅 Issued: Aug 2026</p>
            <p className="cert-desc">
              Learned the fundamentals of web design including HTML, CSS, and responsive layouts. 
              Built basic web pages and understood modern front-end development concepts.
            </p>
            <a href="https://www.linkedin.com/in/nuwanthi-piyathilaka-396a1335b/" target="_blank" rel="noreferrer" className="cert-btn">Show Credential ↗</a>
          </div>
        </div>

        {/* Certificate 3 */}
        <div className="cert-card-row">
          <div className="cert-image-box" onClick={() => setSelectedImg(cert3)}>
             <img src={cert3} alt="Python Essentials 1" style={{ pointerEvents: 'none' }} />
          </div>
          <div className="cert-content">
            <h3>Python Essentials 1</h3>
            <p className="cert-issuer">OpenEDG Python Institute & Cisco Networking Academy</p>
            <p className="cert-date">📅 Issued: Aug 2026</p>
            <p className="cert-desc">
              Mastered the core concepts of Python programming including variables, data types, 
              control flow, and functions. Certified by Cisco & OpenEDG.
            </p>
            <a href="https://www.linkedin.com/in/nuwanthi-piyathilaka-396a1335b/" target="_blank" rel="noreferrer" className="cert-btn">Show Credential ↗</a>
          </div>
        </div>

        {/* Certificate 4 */}
        <div className="cert-card-row">
          <div className="cert-image-box" onClick={() => setSelectedImg(cert4)}>
             <img src={cert4} alt="IT for Business Success" style={{ pointerEvents: 'none' }} />
          </div>
          <div className="cert-content">
            <h3>IT for Business Success</h3>
            <p className="cert-issuer">HP LIFE</p>
            <p className="cert-date">📅 Issued: Jan 2026</p>
            <p className="cert-desc">
              Learned how to choose the best technology for business and how to successfully 
              integrate technology solutions into business operations.
            </p>
            <a href="https://www.linkedin.com/in/nuwanthi-piyathilaka-396a1335b/" target="_blank" rel="noreferrer" className="cert-btn">Show Credential ↗</a>
          </div>
        </div>

        {/* Certificate 5 */}
        <div className="cert-card-row">
          <div className="cert-image-box" onClick={() => setSelectedImg(cert5)}>
             <img src={cert5} alt="Python for Beginners" style={{ pointerEvents: 'none' }} />
          </div>
          <div className="cert-content">
            <h3>Python for Beginners</h3>
            <p className="cert-issuer">University of Moratuwa</p>
            <p className="cert-date">📅 Issued: Mar 2024</p>
            <p className="cert-desc">
              Successfully completed the "Python for Beginners" online learning programme 
              conducted by the Department of Computer Science & Engineering, University of Moratuwa.
            </p>
            <a href="https://www.linkedin.com/in/nuwanthi-piyathilaka-396a1335b/" target="_blank" rel="noreferrer" className="cert-btn">Show Credential ↗</a>
          </div>
        </div>

      </div>

      {/* පින්තූරය Click කළාම ලොකුවට පෙන්නන Modal එක */}
      {selectedImg && (
        <div className="image-modal" onClick={() => setSelectedImg(null)}>
          <span className="close-modal">&times;</span>
          <img src={selectedImg} alt="Certificate Full View" className="modal-img" />
        </div>
      )}

    </div>
  );
}

export default Certificates;