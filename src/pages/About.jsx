import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p12 from '../assets/p12.jpg';

const teamMembers = [
  {
    name: 'Adv Dinesh Bishnoi',
    title: 'Founder & Senior Advocate',
    image: p1,
    bio: 'Advocate Dinesh Bishnoi is a respected legal expert known for his strategic insight, courtroom experience, and client-first approach. As founder of DB Law Chambers, he has built a reputation for delivering effective legal solutions with integrity and discipline across diverse practice areas.'
  },
  {
    name: 'Adv Kuldeep Vishnoi',
    title: 'Legal Consultant',
    image: p2,
    bio: 'Adv. Kuldeep Vishnoi is a dedicated law graduate from UFYLC, University of Rajasthan, with experience in litigation, legal research, and national moot courts. He has trained under senior advocates at the Rajasthan High Court and is known for his clarity, discipline, and advocacy skills.'
  },
  {
    name: 'Adv Anil Bhadu',
    title: 'Junior Advocate',
    image: p3,
    bio: 'Adv. Anil Bhadu is a dedicated legal professional with a strong focus on litigation and legal research. Known for his analytical approach and attention to detail, he plays a key role in supporting case strategy and preparation.'
  }
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
        style={{ height: '400px', width: '100%', objectFit: 'cover' }}
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
      <div className="text-center mb-4">
        <h2 className="fw-bold text-black mb-4">Meet Our Team</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {teamMembers.map((member, i) => (
          <div className="col" key={i}>
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={member.image}
                alt={member.name}
                className="card-img-top"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-black">{member.name}</h5>
                <h6 className="text-muted">{member.title}</h6>
                <p className="card-text text-muted">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
