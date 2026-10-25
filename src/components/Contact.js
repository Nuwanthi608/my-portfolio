import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container contact-container">
      <div className="contact-section">
        <h2>Contact Me</h2>
        
        {/* ඊමේල් එක ලොකුවට */}
        <a href="mailto:nuwanthipiyathilaka8@gmail.com" className="contact-email">
          nuwanthipiyathilaka8@gmail.com
        </a>
        
        <p className="contact-subtext">
          Feel free to contact me with any inquiries or questions!
        </p>

        {/* අලුතෙන් එකතු කරපු Details ටික (ඊමේල් එකට යටින්) */}
        <div className="contact-details-top">
          <div className="contact-item">
            <span>📱</span>
            <a href="tel:+94701098990">+94 70 109 8990</a>
          </div>
          <div className="contact-item">
            <span>💻</span>
            <a href="https://github.com/Nuwanthi608" target="_blank" rel="noreferrer">github.com/Nuwanthi608</a>
          </div>
          <div className="contact-item">
            <span>🔗</span>
            <a href="https://www.linkedin.com/in/nuwanthi-piyathilaka-396a1335b/" target="_blank" rel="noreferrer">linkedin.com/in/Nuwanthi-Piyathilaka</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea 
              name="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>

          <div className="form-submit-area">
            <button type="submit" className="submit-btn">Submit</button>
            {submitted && <span className="success-msg">✅ Message Sent Successfully!</span>}
          </div>
        </form>

      </div>
    </div>
  );
}

export default Contact;