import React from 'react';

const Certificates = () => {
  const certificationsList = [
    {
      title: "Web Design for Beginners",
      issuer: "University of Moratuwa (CODL)",
      date: "Aug 2026",
      description: "Successfully completed online learning programme in Web Design for Beginners."
    },
    {
      title: "Python Essentials 1",
      issuer: "OpenEDG Python Institute & Cisco Networking Academy",
      date: "Aug 2026",
      description: "Completed Python programming essentials and problem-solving concepts."
    },
    {
      title: "IT for Business Success",
      issuer: "HP LIFE",
      date: "Jan 2026",
      description: "Gained knowledge in selecting suitable technology and IT strategies for business success."
    },
    {
      title: "Python for Beginners",
      issuer: "University of Moratuwa (CODL)",
      date: "Mar 2025",
      description: "Completed online learning programme conducted by the Department of Computer Science & Engineering."
    }
  ];

  return (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ color: '#ffb703', fontSize: '2rem', marginBottom: '25px', textAlign: 'center' }}>
        📜 Licenses & Certifications
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {certificationsList.map((cert, index) => (
          <div key={index} style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '20px',
            borderLeft: '4px solid #ffb703',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '8px', fontWeight: 'bold' }}>{cert.title}</h3>
            <p style={{ color: '#ffb703', fontSize: '0.95rem', fontWeight: 'bold', margin: '4px 0' }}>{cert.issuer}</p>
            <p style={{ color: '#cbd5e0', fontSize: '0.85rem', marginBottom: '12px' }}>📅 Issued: {cert.date}</p>
            <p style={{ color: '#f7fafc', fontSize: '0.9rem', lineHeight: '1.5' }}>{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;