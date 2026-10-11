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
      date: "Mar 2024",
      description: "Completed online learning programme conducted by the Department of Computer Science & Engineering."
    }
  ];

  return (
    <section id="certificates" className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Licenses & Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsList.map((cert, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-800">{cert.title}</h3>
            <p className="text-sm font-semibold text-blue-600 mt-1">{cert.issuer}</p>
            <p className="text-xs text-gray-400 mb-3">Issued {cert.date}</p>
            <p className="text-gray-600 text-sm">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;