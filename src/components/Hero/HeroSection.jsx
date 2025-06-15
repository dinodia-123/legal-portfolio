import React from 'react';
import './HeroSection.css'; // Optional: if you want custom styling

const HeroSection = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Text Content */}
        <div className="col-md-6">
          <h1 className="display-5 fw-bold">Trusted Legal Expertise with a Client-Centric Approach</h1>
          <p className="lead my-4">
          We provide comprehensive legal solutions backed by years of experience and a commitment to integrity, advocacy, and justice. Our firm specializes in delivering tailored legal counsel to meet the unique needs of every client.
          </p>
         
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://cdn.pixabay.com/photo/2024/06/02/05/53/architecture-8803583_1280.jpg"
            alt="Hero"
            className="img-fluid rounded"
            style={{ height:"230px",width:"500px"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
