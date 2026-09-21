import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import './About.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-page">
      <Helmet>
        <title>About Us | Safe Care Hospital – Anyirawase, Volta Region, Ghana</title>
        <meta name="description" content="Learn about Safe Care Hospital's mission, vision, and dedicated team of healthcare professionals serving Anyirawase and the Volta Region of Ghana with compassionate 24/7 care." />
        <link rel="canonical" href="https://safecarehospital.com/about" />
        <meta property="og:title" content="About Us | Safe Care Hospital – Ghana" />
        <meta property="og:description" content="Learn about Safe Care Hospital's mission, vision, and dedicated team serving Anyirawase, Volta Region, Ghana with 24/7 compassionate care." />
        <meta property="og:url" content="https://safecarehospital.com/about" />
      </Helmet>
      {/* Modern About Hero */}
      <header className="about-hero">
        <div className="container text-center">
          <div data-aos="fade-up">
            <span className="about-badge">About Safe Care Hospital</span>
            <h1 className="about-heading">
              Compassionate Care for <br />
              Every Family.
            </h1>
            <p className="about-lead">
              Delivering compassionate, accessible, and reliable healthcare to Anyirawase and surrounding communities. We believe everyone deserves premium medical attention.
            </p>
          </div>

          <div className="image-mosaic" data-aos="fade-up" data-aos-delay="200">
            <img src="/Assets/images/Facility 8.png" className="mosaic-item h-sm" alt="Clinic" />

            <div style={{ position: 'relative' }}>
              <img src="/Assets/images/Facility 2.png" className="mosaic-item h-lg" alt="Doctor" />
              <div className="exp-floating d-none d-lg-flex">
                <div className="exp-number">15+</div>
                <div className="text-start">
                  <div className="fw-bold text-dark">Years of</div>
                  <div className="small text-muted">Excellence</div>
                </div>
              </div>
            </div>

            <img src="/Assets/images/Facility 7.png" className="mosaic-item h-md" alt="Lab" />

            <img src="/Assets/images/Facility 6.png" className="mosaic-item h-sm" alt="Patient Care" />
          </div>
        </div>
      </header>

      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="section-tag">Who We Are</span>
              <h2 className="who-title">Serving Anyirawase Since 2023</h2>
              <p className="who-text">
                Safe Care Hospital is a primary hospital located in Anyirawase in the Volta Region of Ghana. Founded with a clear mission, we provide quality, affordable, and patient-centered healthcare to our community and surrounding districts.
              </p>
              <div className="highlight-box">
                "As the only hospital within the district, we play a critical role in ensuring access to safe, timely, and professional medical services."
              </div>
              <p className="who-text">
                We are committed to clinical excellence, ethical medical practice, and compassionate care in everything we do.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-12" data-aos="fade-up" data-aos-delay="100">
                  <div className="mv-card mission-card">
                    <div className="mv-icon text-success">
                      <i className="fa-solid fa-bullseye"></i>
                    </div>
                    <h3 className="mv-title">Our Mission</h3>
                    <p className="mv-text">
                      To deliver accessible, high-quality, and compassionate healthcare services that prioritize patient safety, dignity, and well-being.
                    </p>
                  </div>
                </div>
                <div className="col-12" data-aos="fade-up" data-aos-delay="200">
                  <div className="mv-card vision-card">
                    <div className="mv-icon text-primary">
                      <i className="fa-solid fa-eye"></i>
                    </div>
                    <h3 class="mv-title">Our Vision</h3>
                    <p className="mv-text">
                      To become a leading primary healthcare provider in the Volta Region, recognized for excellence in patient care, emergency response, and maternal health services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <span className="about-badge">Our Pillars</span>
            <h2 className="about-heading" style={{ fontSize: '3rem' }}>Our Core Values</h2>
            <p className="about-lead">
              The fundamental principles that drive our commitment to healthcare excellence in the Volta Region.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card" data-aos="fade-up" data-aos-delay="100">
              <div className="value-number">01</div>
              <h3 className="value-card-title">Compassion</h3>
              <p className="value-card-text">
                We treat every patient with dignity and empathy, ensuring they feel supported throughout their recovery journey.
              </p>
            </div>

            <div className="value-card" data-aos="fade-up" data-aos-delay="200">
              <div className="value-number">02</div>
              <h3 className="value-card-title">Excellence</h3>
              <p className="value-card-text">
                We strive for the highest standards in all medical services, from diagnosis to treatment and aftercare.
              </p>
            </div>

            <div className="value-card" data-aos="fade-up" data-aos-delay="300">
              <div className="value-number">03</div>
              <h3 className="value-card-title">Integrity</h3>
              <p className="value-card-text">
                We uphold strict honesty, medical ethics, and total transparency in every patient interaction.
              </p>
            </div>

            <div className="value-card" data-aos="fade-up" data-aos-delay="400">
              <div className="value-number">04</div>
              <h3 className="value-card-title">Accessibility</h3>
              <p className="value-card-text">
                We ensure healthcare is available 24/7, serving our community whenever medical needs arise.
              </p>
            </div>

            <div className="value-card" data-aos="fade-up" data-aos-delay="500">
              <div className="value-number">05</div>
              <h3 className="value-card-title">Community</h3>
              <p className="value-card-text">
                We exist to improve the health of our local community, building a legacy of trust and wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Framework Section */}
      <section className="services-framework">
        <div className="container">
          <div className="services-header" data-aos="fade-up">
            <span className="section-tag">Our Services Framework</span>
            <h2 className="who-title mb-2">Comprehensive Care Solutions</h2>
            <p className="text-muted fs-5">
              Professional medical services tailored to the needs of Anyirawase and the Volta Region.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-feat-card" data-aos="fade-up" data-aos-delay="100">
              <div className="service-icon-wrap"><i className="fa-solid fa-stethoscope"></i></div>
              <h3 className="service-feat-title">General Outpatient Care</h3>
            </div>

            <div className="service-feat-card" data-aos="fade-up" data-aos-delay="200">
              <div className="service-icon-wrap" style={{ color: 'var(--accent-red)', background: 'rgba(232, 39, 42, 0.08)' }}><i className="fa-solid fa-clock-rotate-left"></i></div>
              <h3 className="service-feat-title">24/7 Emergency Services</h3>
            </div>

            <div className="service-feat-card" data-aos="fade-up" data-aos-delay="300">
              <div className="service-icon-wrap"><i className="fa-solid fa-person-pregnant"></i></div>
              <h3 className="service-feat-title">Maternity & Antenatal Care</h3>
            </div>

            <div className="service-feat-card" data-aos="fade-up" data-aos-delay="400">
              <div className="service-icon-wrap"><i className="fa-solid fa-microscope"></i></div>
              <h3 className="service-feat-title">Laboratory Diagnostics</h3>
            </div>

            <div className="service-feat-card" data-aos="fade-up" data-aos-delay="500">
              <div className="service-icon-wrap"><i className="fa-solid fa-pills"></i></div>
              <h3 className="service-feat-title">Pharmacy Services</h3>
            </div>

            <div className="service-feat-card" data-aos="fade-up" data-aos-delay="600">
              <div className="service-icon-wrap"><i className="fa-solid fa-mask-ventilator"></i></div>
              <h3 className="service-feat-title">Theatre Services (Major & Minor Surgical)</h3>
            </div>
          </div>

          <div className="integrated-model-box" data-aos="zoom-in">
            <div className="model-content">
              <span className="model-label">Patient-Centered Approach</span>
              <h2 className="model-title">Integrated Care Model</h2>
              <p className="model-text">
                Our integrated care model ensures that patients receive diagnosis, treatment, and medication under one roof, saving time and improving health outcomes.
              </p>
            </div>
            <Link to="/services" className="btn-model">
              Explore All Services
            </Link>
            <i className="fa-solid fa-hospital model-icon-bg"></i>
          </div>
        </div>
      </section>

      {/* Quality & Safety Section */}
      <section className="quality-section">
        <div className="container">
          <div className="quality-container" data-aos="fade-up">
            <i className="fa-solid fa-shield-halved shield-bg-icon"></i>

            <div className="row align-items-center quality-content">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <span className="section-tag">Quality & Safety</span>
                <h2 className="quality-title">Your Health & Safety is Our Top Priority</h2>
                <p className="quality-text">
                  At Safe Care Hospital, we adhere to professional healthcare standards, maintain strict hygiene and infection prevention protocols, and ensure that our staff receive ongoing training.
                  <br /><br />
                  Our goal is to deliver care that is not only effective but also reassuring and patient-focused.
                </p>

                <div className="d-flex gap-3 align-items-center">
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">Certified Standards</h6>
                    <p className="mb-0 small text-muted">Strict Clinical Compliance</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 offset-lg-1">
                <span className="serve-title">We Proudly Serve</span>
                <div className="serve-grid">
                  <div className="serve-item">
                    <i className="fa-solid fa-id-card serve-icon"></i>
                    <p className="serve-label">NHIS Patients</p>
                  </div>
                  <div className="serve-item">
                    <i className="fa-solid fa-umbrella serve-icon"></i>
                    <p className="serve-label">Private Insurance</p>
                  </div>
                  <div className="serve-item">
                    <i className="fa-solid fa-building serve-icon"></i>
                    <p className="serve-label">Corporate Clients</p>
                  </div>
                  <div className="serve-item">
                    <i className="fa-solid fa-person-walking serve-icon"></i>
                    <p className="serve-label">Walk-in Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="impact-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <span className="section-tag">Community Impact</span>
              <h2 className="who-title">Building a Stronger, Healthier Community</h2>
              <p className="who-text">
                As the only hospital in the district, Safe Care Hospital plays an essential role in the lives of our neighbors. We believe strong communities are built on strong healthcare systems.
              </p>

              <ul className="impact-list">
                <li className="impact-item"><span className="impact-dot"></span> Reducing emergency response time</li>
                <li className="impact-item"><span class="impact-dot"></span> Supporting maternal and child health</li>
                <li className="impact-item"><span className="impact-dot"></span> Providing accessible healthcare within the community</li>
                <li className="impact-item"><span className="impact-dot"></span> Supporting local businesses and families</li>
              </ul>

              <div className="d-flex align-items-center gap-4 mt-5">
                <Link to="/contact" className="btn-glow-main" style={{ background: '#007bff', color: '#fff' }}>
                  Visit Us Today
                </Link>
                <div className="small text-muted fw-bold">Open 24/7 For All <br />Emergencies</div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <div className="impact-collage">
                <div className="impact-badge-circle">
                  DISTRICT<br />TRUSTED
                </div>

                <div className="d-flex flex-column gap-4">
                  <img src="/Assets/images/Facility 4.png" className="impact-img img-top-left" alt="Community Health" />
                  <img src="/Assets/images/Facility 3.png" className="impact-img img-bottom-left" alt="Emergency Support" />
                </div>

                <div>
                  <img src="/Assets/images/Facility 1.png" className="impact-img img-right" alt="Hospital Interior" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-modern">
        <div className="container">
          <div className="leadership-card" data-aos="zoom-in">
            <div className="leadership-row">
              <div className="ceo-portrait-wrap">
                <div className="ceo-circle-frame">
                  <img src="/Assets/images/Founder.jpeg" alt="CEO Safe Care" className="ceo-portrait-img" />
                </div>
                <div className="ceo-info-modern">
                  <div className="name">Mrs. Josephine Awoye Asamoah</div>
                  <span className="badge">Chief Executive Officer</span>
                </div>
              </div>

              <div className="ceo-message-content">
                <span className="section-tag" style={{ marginBottom: '5px' }}>Leadership Vision</span>
                <i className="fa-solid fa-quote-left quote-accent"></i>
                <h2 className="modern-heading">Your Health, Our Priority</h2>

                <p className="modern-body-text">
                  "At Safe Care Hospital, our promise is simple—Your Health, Our Priority. Since our establishment, we have remained committed to providing dependable and accessible healthcare to our community. We understand the trust our patients place in us, and we work every day to uphold that trust through professionalism, innovation, and compassionate service."
                </p>

                <Link to="/contact" className="priority-btn">
                  <i className="fa-solid fa-circle-plus"></i>
                  Safe Care: Your Health, Our Priority
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
