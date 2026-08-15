import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Side - Copyright */}
          <div className="footer-copyright">
            <p>© {currentYear} Nuwanthi Piyathilaka. All rights reserved.</p>
          </div>
        
        </div>
      </div>
    </footer>
  );
}

export default Footer;