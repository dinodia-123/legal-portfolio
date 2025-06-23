import React from 'react'
import "./Navbar.css"
import ham from "../../assets/ham.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
     <>
        <div className="nav-container ">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          {/* Replace this with your own logo/icon if needed */}
          <img 
        src={ham}
        alt="Logo"
        width="30"
        height="30"
        className="me-2"
      />
          <span className="fs-4">Dinesh Bishnoi Associates</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/features" className="nav-link">Features</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
        </ul>
      </header>
    </div>
     </>
  )
}

export default Navbar;
