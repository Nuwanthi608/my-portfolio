import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container">
      <div className="contact-section">
        <h2>Contact Me</h2>
        
        <div className="contact-info">
          <p>📧 Email: nuwanthipiyathilaka8@gmail.com</p>
          <p>📱 Phone: +94 701098990</p>
          <p>💻 GitHub: github.com/Nuwanthi608</p>
          <p>🔗 LinkedIn: linkedin.com/in/Nuwanthi Piyathilaka</p>
        </div>

        <div className="contact-form">
          <h3>Send me a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Your Name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Your Email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                aria-label="Your Message"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message
            </button>
            
            {submitted && (
              <div className="success-message" role="alert">
                ✅ Your message has been sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;