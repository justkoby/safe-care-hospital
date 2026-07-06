import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <img src="/Assets/images/safe care.png" alt="Safe Care Hospital Logo" className="footer-logo" />
            <p style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
              Safe Care Hospital is a primary hospital located in Anyirawase, Volta Region, committed to delivering quality and compassionate healthcare services 24 hours a day.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 ps-lg-5">
            <h5 className="footer-col-title">Quick Links</h5>
            <nav className="d-flex flex-column gap-2">
              <Link to="/" onClick={scrollToTop} className="footer-link">Home</Link>
              <Link to="/about" onClick={scrollToTop} className="footer-link">About Us</Link>
              <Link to="/services" onClick={scrollToTop} className="footer-link">Services</Link>
              <Link to="/news" onClick={scrollToTop} className="footer-link">News</Link>
              <Link to="/contact" onClick={scrollToTop} className="footer-link">Contact</Link>
            </nav>
          </div>

          <div className="col-lg-5 col-md-6">
            <h5 className="footer-col-title">Contact Info</h5>
            <div className="footer-contact-item mb-2">
              <i className="fa-solid fa-location-dot footer-contact-icon me-2"></i>
              <span>Anyirawase, Volta Region – Ghana</span>
            </div>
            <div className="footer-contact-item mb-2">
              <i className="fa-solid fa-phone footer-contact-icon me-2"></i>
              <span>+233 533 990 935</span>
            </div>
            <div className="footer-contact-item mb-2 d-flex align-items-start">
              <i className="fa-solid fa-envelope footer-contact-icon me-2 mt-1"></i>
              <div>
                <span>info@safecarehospital.com</span><br />
                <span>safecarehospital2023@gmail.com</span>
              </div>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-clock footer-contact-icon me-2"></i>
              <span>Open 24 Hours</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom mt-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                &copy; {new Date().getFullYear()} Safe Care Hospital. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0" style={{ color: 'var(--primary-green)', fontWeight: 700, letterSpacing: '1px' }}>
                "Your Health, Our Priority."
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
