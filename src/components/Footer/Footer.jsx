import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="big-footer">
      <div className="footer-wrapper">
        <div className="footer-section">
          <h3>Dinesh Bishnoi & Associates</h3>
          <p>
            Office No. 216, 2<sup>nd</sup> floor Crystal mall <br />
            Swai Jai Singh Highway, Bani park,<br />
            Jaipur, Rajasthan - 302016
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: adv.dineshbishnoi@gmail.com</p>
          <p>Phone: +91-9518875785</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bishnoi Associates. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
