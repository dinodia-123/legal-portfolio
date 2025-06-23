
import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./BootstrapCarousel.css"

const BootstrapCarousel = () => {
  return (
    <Carousel mt-3 >
      <Carousel.Item>
        <img
          className="c-img"
          src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>Trusted Legal Advice</h3>
          <p>Serving justice with integrity and compassion.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="c-img"
          src="https://images.unsplash.com/photo-1569511165985-82767e534026?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Second slide"
          
        />
        <Carousel.Caption>
          <h3>15+ Years of Experience</h3>
          <p>Fighting for what's right since 2009.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="c-img"
          src="https://images.unsplash.com/photo-1666268015177-fa0d5598296b?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Third slide"
         
        />
        <Carousel.Caption>
          <h3>Client-Centered Approach</h3>
          <p>We listen, we understand, we win.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;

