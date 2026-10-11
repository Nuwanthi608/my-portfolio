import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '50px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ color: '#fbbf24', fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center', fontWeight: '800' }}>
        👋 About Me
      </h2>

      {/* About Me Card */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        borderRadius: '16px',
        padding: '30px',
        marginBottom: '30px',
        border: '1px solid rgba(251, 191, 36, 0.25)',
        boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
      }}>
        <h3 style={{ color: '#fbbf24', fontSize: '1.4rem', marginBottom: '12px' }}>🎓 Who I Am</h3>
        <p style={{ color: '#e2e8f0', lineHeight: '1.8', fontSize: '1rem' }}>
          I am an Information Technology undergraduate at the <strong>Institute of Technology, University of Moratuwa (ITUM)</strong>. I am a passionate Full-Stack Developer with hands-on experience in building responsive web applications using <strong>React.js, Node.js, Express.js, and MySQL</strong>. I love solving real-world problems through clean code, modern web design, and structured databases.
        </p>
      </div>

      {/* Career Aspirations Card */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        borderRadius: '16px',
        padding: '30px',
        borderLeft: '6px solid #fbbf24',
        borderTop: '1px solid rgba(251, 191, 36, 0.25)',
        borderRight: '1px solid rgba(251, 191, 36, 0.25)',
        borderBottom: '1px solid rgba(251, 191, 36, 0.25)',
        boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
      }}>
        <h3 style={{ color: '#fbbf24', fontSize: '1.4rem', marginBottom: '12px' }}>🎯 Career Aspirations</h3>
        <p style={{ color: '#e2e8f0', lineHeight: '1.8', fontSize: '1rem' }}>
          My ambition is to work as a <strong>Full-Stack Software Engineer</strong> in an innovative technology environment. I am actively seeking <strong>internship opportunities</strong> where I can apply my web development skills, contribute to real-world software solutions, learn from industry experts, and grow into a complete software engineering professional.
        </p>
      </div>
    </div>
  );
};

export default About;