import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'Type of Enquiry',
    date: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Thank you for contacting us! We will get back to you shortly.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      enquiryType: 'Type of Enquiry',
      date: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container" data-aos="fade-up">
          <span className="hero-label">CONTACT SAFE CARE HOSPITAL</span>
          <h1 className="display-4 fw-bold mb-3">We Are Available 24 Hours A Day</h1>
          <p className="lead text-muted mx-auto mb-0" style={{ maxWidth: '700px' }}>
            Reach us by phone, email, or visit our facility in Anyirawase, Volta Region.
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="details-section pb-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="info-card">
                <div className="icon-box">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h5 className="fw-bold">Visit Our Hospital</h5>
                <p className="text-muted small">
                  Safe Care Hospital, Anyirawase
                  <br />
                  Volta Region – Ghana
                </p>
                <hr className="my-4 opacity-50" />
                <div className="d-flex align-items-center text-success fw-bold">
                  <i className="fa-solid fa-clock me-2"></i> Open 24 Hours (Every Day)
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="info-card">
                <div className="icon-box">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <h5 className="fw-bold">Phone Support</h5>
                <p className="text-muted small mb-1">24/7 Primary Line:</p>
                <a href="tel:+233533990935" className="h4 fw-bold text-decoration-none text-dark d-block">
                  +233 533 990 935
                </a>
                <p className="small text-muted mt-3 italic">Call for immediate medical assistance.</p>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="info-card">
                <div className="icon-box">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <h5 className="fw-bold">Email Us</h5>
                <p className="text-muted small mb-1">Official Channels:</p>
                <a
                  href="mailto:info@safecarehospital.com"
                  className="fw-bold text-success text-decoration-none d-block mb-1"
                >
                  info@safecarehospital.com
                </a>
                <a
                  href="mailto:safecarehospital2023@gmail.com"
                  className="fw-bold text-success text-decoration-none d-block"
                >
                  safecarehospital2023@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Map Frame */}
          <div className="row mt-5" data-aos="zoom-in">
            <div className="col-12">
              <div className="rounded-4 overflow-hidden shadow-sm" style={{ height: '450px', border: '1px solid #eee' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15872.48318237073!2d0.3243292499999999!3d6.63185315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10212f6645555555%3A0x7d6a5c1a5c1a5c1a!2sAnyirawase%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Safe Care Hospital Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section py-5" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="contact-form-wrapper">
                <h3 className="fw-bold mb-2">Send Us A Message</h3>
                <p className="text-muted mb-4">General Enquiries & Appointment Requests</p>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="col-md-6">
                      <select
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option disabled>Type of Enquiry</option>
                        <option>General Consultation</option>
                        <option>Antenatal Care</option>
                        <option>Laboratory Services</option>
                        <option>Corporate Medical Services</option>
                        <option>Emergency</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="form-control"
                        title="Preferred Appointment Date"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="form-control"
                        rows="5"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-success w-100 py-3 fw-bold rounded-pill mb-3" type="submit">
                        Submit Request
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade-left">
              <div className="corporate-section h-100 d-flex flex-column justify-content-center">
                <span className="text-success fw-bold small mb-2 text-uppercase" style={{ letterSpacing: '2px' }}>
                  Partnerships
                </span>
                <h2 className="fw-bold mb-4">Corporate Medical Services</h2>
                <p className="opacity-75 mb-5 lead">
                  For pre-employment screening, annual medicals, and workforce health solutions, contact our administration team.
                </p>
                <div className="contact-details-corporate">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-box m-0 me-3 bg-success text-white">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <small className="d-block opacity-50">Call Administration</small>
                      <span className="fs-5 fw-bold">+233 533 990 935</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-box m-0 me-3 bg-success text-white">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <small className="d-block opacity-50">Email Support</small>
                      <span className="fs-5 fw-bold">info@safecarehospital.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
