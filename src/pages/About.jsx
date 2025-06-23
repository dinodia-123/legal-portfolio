import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import p6 from '../assets/p6.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p12 from '../assets/p12.jpg';
import p5 from '../assets/p5.jpg';


const teamMembers = [
  {
    name: ' Dinesh Bishnoi',
    title: 'Founder',
    image: p6,
    bio: 'Advocate Dinesh Bishnoi is a respected legal expert known for his strategic insight, courtroom experience, and client-first approach. As founder of DB Law Chambers, he has built a reputation for delivering effective legal solutions with integrity and discipline across diverse practice areas.'
  },
  {
    name: ' Bharat Budania',
    title: 'Advocate',
    image: p2,
    bio: 'Advocate Dinesh Bishnoi is a respected legal expert known for his strategic insight, courtroom experience, and client-first approach. As founder of DB Law Chambers, he has built a reputation for delivering effective legal solutions with integrity and discipline across diverse practice areas.'
  },
  
  {
    name: ' Anil Bhadu',
    title: 'Advocate',
    image: p3,
    bio: 'Adv. Anil Bhadu is a dedicated legal professional with a strong focus on litigation and legal research. Known for his analytical approach and attention to detail, he plays a key role in supporting case strategy and preparation.'
  },
  {
    name: 'Kuldeep Vishnoi',
    title: 'Advocate',
    image: p5,
    bio: 'Adv. Kuldeep Vishnoi is a dedicated law graduate from UFYLC, University of Rajasthan, with experience in litigation, legal research, and national moot courts. He has trained under senior advocates at the Rajasthan High Court and is known for his clarity, discipline, and advocacy skills.'
  },
  

];

const About = () => {
  return (
    <div className="container py-5">

    {/* Hero Section */}
<div className="row align-items-center mb-5">
  <div className="col-lg-6 mb-4 mb-lg-0">
    <h1 className="fw-bold display-4 text-black mb-4">About Us</h1>
    <p className="text-muted lead">
      <strong>Dinesh Bishnoi & Associates</strong> is built on the belief that law is a craft—refined through discipline,
      research, and lifelong learning.
    </p>
    <p className="text-muted">
      Founded by <strong>Adv. Dinesh Bishnoi</strong>, who has been practicing since 2005, the firm is known for its strategic
      approach, courtroom insight, and commitment to preparation and integrity.
    </p>
    <p className="text-muted">
      We believe that consistent research, analytical thinking, and ethical advocacy are the foundation of success—for both
      clients and aspiring legal professionals.
    </p>
  </div>
  <div className="col-lg-6 text-center">
    <div className="rounded-4 shadow overflow-hidden">
      <img
        src={p12}
        alt="Office"
        className="img-fluid"
        style={{ height: '500px', width: '100%', objectFit: 'cover' }}
      />
    </div>
  </div>
</div>

      {/* Mission & Vision */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100">
            <h4 className="fw-bold text-black mb-3">Our Mission</h4>
            <p className="text-muted">
              To provide strategic legal counsel with the highest level of professionalism and integrity, ensuring each client receives tailored legal support.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100">
            <h4 className="fw-bold text-black mb-3">Our Vision</h4>
            <p className="text-muted">
              To be one of India’s most trusted legal advisors — delivering clarity, confidence, and results in every matter we handle.
            </p>
          </div>
        </div>
      </div>

       {/* Team Section */}
<div className="text-center mb-5">
  <h2 className="fw-bold text-black mb-4">Meet Our Team</h2>
</div>

<div className="d-flex flex-column gap-5">
  {teamMembers.map((member, i) => (
    <div
      key={i}
      className={`d-flex flex-column flex-md-row align-items-center gap-4 p-4 rounded-4 shadow-sm ${
        i % 2 !== 0 ? 'flex-md-row-reverse' : ''
      }`}
      style={{ backgroundColor: '#f8f9fa' }}
    >
      {/* Profile Image */}
      <div className="text-center">
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: '400px',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '6px solid white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
          className="img-fluid"
        />
      </div>

      {/* Description */}
      <div className="text-md-start text-center">
        <h4 className="fw-bold text-black mb-1">{member.name}</h4>
        <h6 className="text-muted mb-3">{member.title}</h6>
        <p className="text-muted mb-0" style={{ maxWidth: '600px' }}>{member.bio}</p>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default About;
