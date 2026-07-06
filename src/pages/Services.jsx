import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import './Services.css';

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="services-page">
      {/* Services Hero */}
      <section className="services-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="hero-label">🏥 OUR SERVICES</span>
              <p className="text-uppercase fw-bold small text-muted mb-2" style={{ letterSpacing: '1.5px' }}>
                Safe Care Hospital – Anyirawase
              </p>
              <h1 className="hero-title">
                Comprehensive <br />
                <span style={{ color: 'var(--primary-green)' }}>Primary Healthcare</span>
              </h1>
              <p className="lead text-muted mb-4">
                Reliable, accessible, and patient-centered medical care for families and organizations — <strong>24 Hours a Day.</strong>
              </p>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 text-center" data-aos="fade-left">
              <img
                src="/Assets/images/Nurse.png"
                className="img-fluid"
                alt="Safe Care Medical Services"
                style={{
                  transform: 'scaleX(-1)',
                  maxHeight: '500px',
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="fw-bold mb-4">Excellence in Community Health</h2>
              <p className="text-muted fs-5">
                At Safe Care Hospital, we deliver high-quality primary healthcare supported by modern diagnostics and professional clinical expertise. As the only hospital within the district, we serve as a critical healthcare provider for our community and surrounding districts.
              </p>
            </div>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-3 col-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="client-card">
                <i className="fa-solid fa-id-card client-icon"></i>
                <h6 className="fw-bold m-0">NHIS Patients</h6>
              </div>
            </div>
            <div className="col-md-3 col-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="client-card">
                <i className="fa-solid fa-shield-heart client-icon"></i>
                <h6 className="fw-bold m-0">Private Insurance</h6>
              </div>
            </div>
            <div className="col-md-3 col-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="client-card">
                <i className="fa-solid fa-building client-icon"></i>
                <h6 className="fw-bold m-0">Corporate Clients</h6>
              </div>
            </div>
            <div className="col-md-3 col-6" data-aos="zoom-in" data-aos-delay="400">
              <div className="client-card">
                <i className="fa-solid fa-person-walking client-icon"></i>
                <h6 className="fw-bold m-0">Walk-in Patients</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Grid */}
      <section className="services-detail-grid pb-5">
        <div className="container">
          <div className="row mb-5 text-center" data-aos="fade-up">
            <div className="col-12">
              <span className="hero-label">CLINICAL DEPARTMENTS</span>
              <h2 className="fw-bold">Our Comprehensive Medical Care</h2>
              <p className="text-muted">High-quality healthcare services designed for the Anyirawase community.</p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="service-detail-card h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="service-number-box">01</div>
                  <h3 className="fw-bold m-0 ms-3">General Outpatient Department (OPD)</h3>
                </div>
                <p className="text-muted fw-semibold mb-3">Diagnosis & Treatment for Everyday Health Needs</p>
                <p className="small text-muted mb-4">
                  Our Outpatient Department provides medical consultation and treatment for a wide range of conditions.
                </p>
                <ul className="service-bullet-list">
                  <li><i className="fa-solid fa-circle-check"></i> Medical consultations</li>
                  <li><i className="fa-solid fa-circle-check"></i> Management of hypertension and diabetes</li>
                  <li><i className="fa-solid fa-circle-check"></i> Treatment of infections and common illnesses</li>
                  <li><i className="fa-solid fa-circle-check"></i> Major & Minor procedures and wound care</li>
                  <li><i className="fa-solid fa-circle-check"></i> Medical assessments and reports</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-detail-card h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="service-number-box">02</div>
                  <h3 className="fw-bold m-0 ms-3">Maternity & Antenatal Care</h3>
                </div>
                <p className="text-muted fw-semibold mb-3">Safe & Professional Maternal Healthcare</p>
                <p className="small text-muted mb-4">
                  We provide comprehensive maternal services ensuring safety for both mother and baby with compassionate support.
                </p>
                <ul className="service-bullet-list">
                  <li><i className="fa-solid fa-circle-check"></i> Antenatal monitoring & Routine pregnancy testing</li>
                  <li><i className="fa-solid fa-circle-check"></i> Supervised deliveries & Postnatal care</li>
                  <li><i className="fa-solid fa-circle-check"></i> Maternal counseling</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up">
              <div className="service-detail-card h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="service-number-box">03</div>
                  <h3 className="fw-bold m-0 ms-3">24/7 Emergency Services</h3>
                </div>
                <p className="text-muted fw-semibold mb-3">Immediate Medical Attention When It Matters Most</p>
                <p className="small text-muted mb-4">
                  Our emergency services operate round-the-clock to handle trauma, acute crises, and sudden illnesses.
                </p>
                <ul className="service-bullet-list">
                  <li><i className="fa-solid fa-circle-check"></i> Trauma, injuries, and obstetric emergencies</li>
                  <li><i className="fa-solid fa-circle-check"></i> Severe infections & Acute medical crises</li>
                  <li><i className="fa-solid fa-phone-volume text-success"></i> <strong>Hotline:</strong> +233 533 990 935</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-detail-card h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="service-number-box">04</div>
                  <h3 className="fw-bold m-0 ms-3">Laboratory Services</h3>
                </div>
                <p className="text-muted fw-semibold mb-3">Accurate, Reliable & Timely Diagnostics</p>
                <p className="small text-muted mb-4">
                  Fast turnaround times help ensure immediate treatment planning using modern diagnostic equipment.
                </p>
                <ul className="service-bullet-list">
                  <li><i className="fa-solid fa-circle-check"></i> Blood investigations & Malaria testing</li>
                  <li><i className="fa-solid fa-circle-check"></i> Urinalysis & Routine medical screenings</li>
                  <li><i className="fa-solid fa-circle-check"></i> Comprehensive Diagnostic panels</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up">
              <div className="service-detail-card h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="service-number-box">05</div>
                  <h3 className="fw-bold m-0 ms-3">Ultrasound & Diagnostic Imaging</h3>
                </div>
                <p className="text-muted fw-semibold mb-3">Clear Imaging for Accurate Diagnosis</p>
                <p className="small text-muted mb-4">
                  Real-time imaging to support medical diagnosis and pregnancy monitoring with clinical accuracy.
                </p>
                <ul className="service-bullet-list">
                  <li><i className="fa-solid fa-circle-check"></i> Obstetric (pregnancy) scans</li>
                  <li><i className="fa-solid fa-circle-check"></i> Abdominal & Pelvic scans</li>
                  <li><i className="fa-solid fa-circle-check"></i> Physician-recommended diagnostic imaging</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-detail-card h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="service-number-box">06</div>
                  <h3 className="fw-bold m-0 ms-3">Pharmacy Services</h3>
                </div>
                <p className="text-muted fw-semibold mb-3">Convenient & Safe Medication Access</p>
                <p className="small text-muted mb-4">
                  Our in-house pharmacy ensures patients receive prescribed medications immediately after consultation.
                </p>
                <ul className="service-bullet-list">
                  <li><i className="fa-solid fa-circle-check"></i> Prescription & OTC dispensing</li>
                  <li><i className="fa-solid fa-circle-check"></i> Professional Medication counseling</li>
                  <li><i className="fa-solid fa-circle-check"></i> Safe pharmaceutical guidance</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up">
              <div className="service-detail-card h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="service-number-box">07</div>
                  <h3 className="fw-bold m-0 ms-3">Theatre Services</h3>
                </div>
                <p className="text-muted fw-semibold mb-3">Safe Minor Surgical Procedures</p>
                <p className="small text-muted mb-4">
                  Qualified professionals performing interventions in a sterile, strictly controlled environment.
                </p>
                <ul className="service-bullet-list">
                  <li><i className="fa-solid fa-circle-check"></i> Major - Minor operations & Wound management</li>
                  <li><i className="fa-solid fa-circle-check"></i> Incision and drainage</li>
                  <li><i className="fa-solid fa-circle-check"></i> Strict infection control protocols</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-detail-card h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="service-number-box">08</div>
                  <h3 className="fw-bold m-0 ms-3">Corporate Medical Services</h3>
                </div>
                <p className="text-muted fw-semibold mb-3">Professional Solutions for Organizations</p>
                <p className="small text-muted mb-4">
                  Tailored healthcare solutions for workforce management and organizational productivity.
                </p>
                <ul className="service-bullet-list">
                  <li><i className="fa-solid fa-circle-check"></i> Pre-employment & Annual staff screenings</li>
                  <li><i className="fa-solid fa-circle-check"></i> Workplace health assessments & Fitness reports</li>
                  <li><i className="fa-solid fa-circle-check"></i> On-call emergency support arrangements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Process Section */}
      <section className="care-process-section py-5" style={{ backgroundColor: 'var(--soft-mint)' }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5" data-aos="fade-right">
              <span className="hero-label">OUR CARE PROCESS</span>
              <h2 className="fw-bold mb-4">A Structured Approach to Your Recovery</h2>
              <p className="text-muted mb-4">
                This professional standard ensures continuity and high-quality care from the moment you step into our facility until you are fully recovered.
              </p>

              <div className="d-flex gap-4 mt-5">
                <div className="stat-item">
                  <h4 className="fw-bold m-0 text-success">24/7</h4>
                  <small className="text-uppercase fw-bold text-muted" style={{ fontSize: '0.7rem' }}>
                    Availability
                  </small>
                </div>
                <div className="stat-item">
                  <h4 className="fw-bold m-0 text-success">10+</h4>
                  <small className="text-uppercase fw-bold text-muted" style={{ fontSize: '0.7rem' }}>
                    Specialties
                  </small>
                </div>
                <div className="stat-item">
                  <h4 className="fw-bold m-0 text-success">100%</h4>
                  <small className="text-uppercase fw-bold text-muted" style={{ fontSize: '0.7rem' }}>
                    Local Support
                  </small>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="process-grid">
                <div className="process-step-card" data-aos="fade-up" data-aos-delay="100">
                  <div className="step-num">01</div>
                  <h5>Consultation</h5>
                  <p className="small m-0 text-muted">
                    Initial meeting with our medical experts to discuss symptoms and health history.
                  </p>
                </div>
                <div className="process-step-card mt-lg-5" data-aos="fade-up" data-aos-delay="200">
                  <div className="step-num">02</div>
                  <h5>Diagnostic Evaluation</h5>
                  <p className="small m-0 text-muted">
                    Precise testing through our lab or imaging to identify the root cause.
                  </p>
                </div>
                <div className="process-step-card" data-aos="fade-up" data-aos-delay="300">
                  <div className="step-num">03</div>
                  <h5>Treatment Plan</h5>
                  <p className="small m-0 text-muted">
                    Developing a personalized medical strategy tailored to your specific needs.
                  </p>
                </div>
                <div className="process-step-card mt-lg-5" data-aos="fade-up" data-aos-delay="400">
                  <div className="step-num">04</div>
                  <h5>Medication or Procedure</h5>
                  <p className="small m-0 text-muted">
                    Expert administration of treatment, surgery, or prescribed pharmaceuticals.
                  </p>
                </div>
                <div className="process-step-card mx-auto" style={{ gridColumn: 'span 2' }} data-aos="fade-up" data-aos-delay="500">
                  <div className="step-num">05</div>
                  <h5>Follow-up & Monitoring</h5>
                  <p className="small m-0 text-muted">
                    Ongoing support and review to ensure your health remains on the right track.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta py-5">
        <div className="container">
          <div className="cta-box text-center text-white" data-aos="zoom-in">
            <h2 className="fw-bold mb-3">Your Health Deserves Professional Care</h2>
            <p className="mb-5 opacity-75">
              Safe Care Hospital operates 24 hours daily to provide dependable medical services.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to="/contact" className="btn btn-light px-4 py-3 fw-bold rounded-pill text-dark">
                Book Appointment
              </Link>
              <a href="tel:+233533990935" className="btn btn-danger px-4 py-3 fw-bold rounded-pill">
                Call Emergency Now
              </a>
              <Link to="/contact" className="btn btn-success px-4 py-3 fw-bold rounded-pill">
                Visit Our Facility Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
