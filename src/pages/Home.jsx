import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import ServicesCarousel from '../components/ServicesCarousel';
import './Home.css';

const words = [
  "24/7 Healthcare",
  "Emergency Care",
  "Family Care",
  "Reliable Care",
  "Quality Healthcare",
  "Primary Care",
  "Expert Care"
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [animationClass, setAnimationClass] = useState('visible');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/Assets/images/image-1.png',
    '/Assets/images/image-2.png',
    '/Assets/images/image-3.png'
  ];

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(imgInterval);
  }, []);

  useEffect(() => {
    // Initialize Scroll Animations
    AOS.init({ duration: 1000, once: true });

    // Rotate Hero words
    const interval = setInterval(() => {
      setAnimationClass('exit');
      
      setTimeout(() => {
        setIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % words.length;
          setCurrentWord(words[nextIndex]);
          return nextIndex;
        });
        setAnimationClass('enter');
        
        setTimeout(() => {
          setAnimationClass('visible');
        }, 50);
      }, 500); 
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <Helmet>
        <title>Safe Care Hospital | 24/7 Healthcare in Anyirawase, Volta Region – Ghana</title>
        <meta name="description" content="Safe Care Hospital is the primary hospital in Anyirawase, Volta Region, offering 24/7 emergency care, antenatal services, laboratory services, and compassionate family healthcare." />
        <link rel="canonical" href="https://safecarehospital.com/" />
        <meta property="og:title" content="Safe Care Hospital | 24/7 Healthcare in Anyirawase, Ghana" />
        <meta property="og:description" content="Safe Care Hospital is the primary hospital in Anyirawase, Volta Region, offering 24/7 emergency care, antenatal services, laboratory services, and compassionate family healthcare." />
        <meta property="og:url" content="https://safecarehospital.com/" />
      </Helmet>
      {/* Centered Redesigned Hero Section */}
      <header className="new-hero-section">
        <div className="container">
          <div data-aos="fade-up">
            <h1 className="new-hero-title">
              Compassionate{' '}
              <span className="dynamic-word-wrapper">
                <span className={`dynamic-word ${animationClass}`}>
                  {currentWord}
                </span>
              </span>{' '}
              <br className="d-none d-md-inline" />
              You Can Trust
            </h1>
            <p className="new-hero-subtext">
              The only primary hospital in the district providing reliable,
              patient-centered medical care for families and organizations.
            </p>
            <div className="new-hero-actions">
              <Link to="/services" className="btn-services">
                Our Services
              </Link>
              <Link to="/contact" className="btn-appointment">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Value Section */}
      <section className="value-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="value-img-wrapper">
                <div className="value-img-slideshow">
                  {images.map((imgSrc, idx) => (
                    <img
                      key={imgSrc}
                      src={imgSrc}
                      className={`value-img-main ${idx === currentImageIndex ? 'active' : ''}`}
                      alt={`Quality Healthcare ${idx + 1}`}
                    />
                  ))}
                </div>
                <div className="floating-feature-box">
                  <div className="feature-item">
                    <i className="fa-solid fa-check-circle"></i> 24/7 Availability
                  </div>
                  <div className="feature-item">
                    <i className="fa-solid fa-check-circle"></i> Expert Medical Staff
                  </div>
                  <div className="feature-item">
                    <i className="fa-solid fa-check-circle"></i> Modern Diagnostics
                  </div>
                  <div className="feature-item">
                    <i className="fa-solid fa-check-circle"></i> Patient-Centered Care
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <span className="value-badge">Our Commitment</span>
              <h2 className="value-headline">Quality Healthcare Close to Home</h2>
              <p className="text-muted mb-4">
                At Safe Care Hospital, we provide comprehensive primary healthcare services to individuals, families, and businesses across the district and beyond. As the only hospital within the district, we are committed to delivering accessible, reliable, and patient-centered care 24 hours a day.
              </p>
              <p className="text-muted mb-4">
                Whether you are visiting for general consultation, maternity services, diagnostics, or emergency care, our qualified medical professionals are ready to serve you with compassion and excellence.
              </p>

              <h6 className="fw-bold mb-3">We proudly accept:</h6>
              <div className="insurance-grid">
                <div className="insurance-tag">
                  <span className="tag-icon"><i className="fa-solid fa-id-card"></i></span>
                  NHIS Patients
                </div>
                <div className="insurance-tag">
                  <span className="tag-icon"><i className="fa-solid fa-shield-halved"></i></span>
                  Private Insurance
                </div>
                <div className="insurance-tag">
                  <span className="tag-icon"><i className="fa-solid fa-building"></i></span>
                  Corporate Clients
                </div>
                <div className="insurance-tag">
                  <span className="tag-icon"><i className="fa-solid fa-user"></i></span>
                  Walk-in Patients
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-inner">
          <div className="row g-4 justify-content-center">
            <div className="col-6 col-md-4" data-aos="fade-up">
              <div className="stat-item">
                <span className="stat-icon"><i className="fa-regular fa-clock"></i></span>
                <span className="stat-number">24/7</span>
                <span className="stat-label">Emergency Availability</span>
              </div>
            </div>
            <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="stat-item">
                <span className="stat-icon"><i className="fa-solid fa-stethoscope"></i></span>
                <span className="stat-number">10+</span>
                <span className="stat-label">Medical Specialties</span>
              </div>
            </div>
            <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-item">
                <span className="stat-icon"><i className="fa-regular fa-heart"></i></span>
                <span className="stat-number">100%</span>
                <span className="stat-label">Community-Focused Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesCarousel />

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2" data-aos="fade-left">
              <span className="value-badge">Our Distinction</span>
              <h2 className="value-headline">Why Patients Trust Us</h2>
              <p className="text-muted mb-5">
                We are dedicated to providing the highest standard of care through a combination of expertise, accessibility, and community connection.
              </p>

              <div className="trust-list">
                <div className="trust-item">
                  <div className="trust-icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="trust-content">
                    <h5>24/7 Emergency Care</h5>
                    <p>We are always open day and night, ready to respond when emergencies arise.</p>
                  </div>
                </div>

                <div className="trust-item">
                  <div className="trust-icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="trust-content">
                    <h5>Only Hospital in the District</h5>
                    <p>Reliable, accessible healthcare without traveling long distances.</p>
                  </div>
                </div>

                <div className="trust-item">
                  <div className="trust-icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="trust-content">
                    <h5>Qualified & Dedicated Professionals</h5>
                    <p>Skilled medical staff focused on quality treatment and patient comfort.</p>
                  </div>
                </div>

                <div className="trust-item">
                  <div className="trust-icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="trust-content">
                    <h5>NHIS & Insurance Accepted</h5>
                    <p>Affordable care with flexible payment options.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-1" data-aos="fade-right">
              <div className="why-img-column">
                <div className="why-circle-accent"></div>
                <img
                  src="/Assets/images/Hospital 2.jpg"
                  className="why-img-main"
                  alt="Professional Medical Team"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strategy */}
      <section className="cta-strategy-section">
        <div className="container">
          <div data-aos="fade-up">
            <span className="value-badge text-white opacity-75">Contact Us</span>
            <h2 className="value-headline">Need Medical Attention? We’re Here for You.</h2>
            <p className="cta-strategy-p">
              Do not delay your health. Our medical team is available 24 hours a day to provide professional and compassionate care.
            </p>
          </div>

          <div className="cta-card-grid">
            <Link to="/contact" className="cta-action-card" data-aos="fade-up" data-aos-delay="100">
              <div className="cta-card-icon">
                <i className="fa-solid fa-calendar-check"></i>
              </div>
              <div className="cta-card-title">Book Appointment</div>
              <p className="small opacity-75">Schedule your visit online with our specialists.</p>
            </Link>

            <a href="tel:+233533990935" className="cta-action-card" data-aos="fade-up" data-aos-delay="200">
              <div className="cta-card-icon">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="cta-card-title">Call Now</div>
              <p className="small opacity-75">Speak directly with our front desk or emergency unit.</p>
            </a>

            <Link to="/contact" className="cta-action-card" data-aos="fade-up" data-aos-delay="300">
              <div className="cta-card-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="cta-card-title">Visit Our Location</div>
              <p className="small opacity-75">Anyirawase, Volta Region. Find us on the map.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="value-badge">Testimonials</span>
            <h2 className="value-headline">What Our Patients Say</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="testimonial-card">
                <div className="quote-icon">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <p className="testimonial-text">
                  "The nurses were very caring and professional. I felt safe throughout my delivery. Thank you Safe Care Hospital."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h6>Maternity Patient</h6>
                    <span>Safe Care Hospital Patient</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="testimonial-card">
                <div className="quote-icon">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <p className="testimonial-text">
                  "They attended to me quickly during an emergency. Truly reliable healthcare."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h6>Community Member</h6>
                    <span>Safe Care Hospital Patient</span>
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
