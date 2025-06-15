import React from 'react'
import "./Navbar.css"
import ham from "../../assets/ham.png";

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
            <a href="#" className="nav-link" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>
      </header>
    </div>
     </>
  )
}

export default Navbar;
