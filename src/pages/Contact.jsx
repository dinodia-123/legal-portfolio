import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5 text-black">Contact Us</h2>
        <p className="text-muted">We’d love to hear from you. Drop us a message!</p>
      </div>

      <div className="row g-5">
        {/* Contact Form */}
        <div className="col-md-6">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100">
            <h4 className="fw-semibold mb-4 text-black">Send Us a Message</h4>
            <form action="mailto:contact@dineshbishnoi.com" method="POST" encType="text/plain">
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-black">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-black">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-black">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Type your message..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100 py-2">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-md-6">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100">
            <h4 className="fw-semibold mb-4 text-black">Reach Us At</h4>
            <p className="mb-3 text-black"><strong>Address:</strong><br />Office No. 216 second floor crystal mall swai jai Singh Highway bani park, Jaipur, Rajasthan 302016</p>
            <p className="mb-3 text-black"><strong>Email:</strong><br /><a href="mailto:adv.dineshbishnoi@gmail.com" className="text-decoration-none text-black">adv.dineshbishnoi@gmail.com</a></p>
            <p className="mb-3 text-black"><strong>Phone:</strong><br /><a href="tel:+91 9518875785" className="text-decoration-none text-black">+91 9518875785</a></p>
            <p className="mb-0 text-black"><strong>Office Hours:</strong><br />Mon–Fri: 9:00 AM – 8:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
