import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'General Outpatient Services',
    description:
      'Comprehensive consultation, diagnosis, and treatment for everyday health concerns. Our outpatient department provides reliable primary care for the entire family.',
    subs: 'Consultations / Diagnostics / Treatments / Health Screenings / Chronic Care / Wound Management',
    image: '/Assets/images/general-house.png',
  },
  {
    id: 2,
    title: 'Maternity & Antenatal Care',
    description:
      'Safe pregnancy monitoring, maternal care, and professional delivery support in a compassionate environment.',
    subs: 'Antenatal Care / Delivery Services / Postnatal Support / Newborn Care / Maternal Counseling',
    image: '/Assets/images/pregnancy.png',
  },
  {
    id: 3,
    title: 'Laboratory Services',
    description:
      'Accurate and timely diagnostic testing to guide effective treatment. Modern equipment for reliable results.',
    subs: 'Blood Tests / Urinalysis / Pathology / Health Panels / Rapid Diagnostics',
    image: '/Assets/images/ls.jpg',
  },
  {
    id: 4,
    title: 'Pharmacy',
    description:
      'Fully stocked pharmacy providing prescribed and over-the-counter medications with expert counseling.',
    subs: 'Prescription Meds / OTC Products / Health Advice / Medication Management / Wellness',
    image: '/Assets/images/PHARMACY-1.jpg',
  },
  {
    id: 5,
    title: 'Theatre Services',
    description:
      'Major and minor surgical procedures performed in a safe, sterile environment by experienced professionals.',
    subs: 'Minor Surgery / Major Operations / Emergency Surgery / Post-Op Care / Sterile Protocols',
    image: '/Assets/images/theatre.jpg',
  },
];

const treatments = [
  { title: 'General medical consultation', image: '/Assets/images/Facility 1.png' },
  { title: 'Maternity & antenatal care', image: '/Assets/images/Facility 2.png' },
  { title: 'Primary healthcare services', image: '/Assets/images/Facility 3.png' },
  { title: 'Emergency & trauma care', image: '/Assets/images/Facility 4.png' },
  { title: 'Diagnostic & lab services', image: '/Assets/images/Facility 6.png' },
];

const faqs = [
  {
    q: 'How do you ensure patient safety and privacy?',
    a: 'We ensure patient safety and privacy through strict hygiene standards, trained medical staff, secure digital records, confidentiality policies, and full compliance with healthcare regulations at every stage of care.',
  },
  {
    q: 'What services does your outpatient department offer?',
    a: 'Our outpatient department offers general consultations, management of chronic conditions like hypertension and diabetes, treatment of infections and common illnesses, wound care, and medical assessments.',
  },
  {
    q: 'Do you accept NHIS and private insurance?',
    a: 'Yes, we accept NHIS patients, private insurance plans, corporate clients, and walk-in patients. We strive to make quality healthcare accessible to everyone.',
  },
  {
    q: 'What are your operating hours?',
    a: 'We operate 24 hours a day, 7 days a week. Our emergency services are available around the clock to handle any medical situation.',
  },
  {
    q: 'How can I book an appointment?',
    a: 'You can book an appointment by calling us at +233 533 990 935, visiting our facility at Anyirawase, Volta Region, or using the contact form on our website.',
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="services-page">
      <Helmet>
        <title>Our Services | Safe Care Hospital – Emergency, Antenatal & Lab Services in Ghana</title>
        <meta name="description" content="Explore Safe Care Hospital's full range of medical services including emergency care, antenatal & delivery, laboratory services, corporate medicals, and general outpatient consultations in Anyirawase, Ghana." />
        <link rel="canonical" href="https://safecarehospital.com/services" />
        <meta property="og:title" content="Our Services | Safe Care Hospital – Ghana" />
        <meta property="og:description" content="Emergency care, antenatal services, laboratory, corporate medicals, and general consultations at Safe Care Hospital, Anyirawase, Ghana." />
        <meta property="og:url" content="https://safecarehospital.com/services" />
      </Helmet>
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-bg"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7" data-aos="fade-up">
              <span className="services-hero-badge">Our Services</span>
              <h1 className="services-hero-title">
                Expert medical care <br />
                <span className="text-green">for lifelong health</span>
              </h1>
              <p className="services-hero-desc">
                At our healthcare center, we are committed to delivering advanced medical care that
                places your health, comfort, and well-being at the heart of everything we do.
              </p>
              <div className="services-hero-actions">
                <Link to="/contact" className="btn-hero-primary">
                  Consult a doctor
                </Link>
                <Link to="/about" className="btn-hero-secondary">
                  Explore more
                </Link>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-flex justify-content-end" data-aos="fade-up" data-aos-delay="150">
              <div className="hero-testimonial">
                <div className="hero-testimonial-avatars">
                  <img src="/Assets/images/Doctor 1.png" alt="" />
                  <img src="/Assets/images/Doctor 2.png" alt="" />
                  <img src="/Assets/images/Doctor 5.png" alt="" />
                </div>
                <div className="hero-testimonial-stars">
                  <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.18l-4.77 2.54.91-5.33L2.27 6.62l5.34-.78L10 1z" fill="#f59e0b"/>
                  </svg>
                  <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.18l-4.77 2.54.91-5.33L2.27 6.62l5.34-.78L10 1z" fill="#f59e0b"/>
                  </svg>
                  <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.18l-4.77 2.54.91-5.33L2.27 6.62l5.34-.78L10 1z" fill="#f59e0b"/>
                  </svg>
                  <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.18l-4.77 2.54.91-5.33L2.27 6.62l5.34-.78L10 1z" fill="#f59e0b"/>
                  </svg>
                </div>
                <span className="hero-testimonial-text">100k+ Satisfied patients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list-section">
        <div className="container">
          <div className="services-list-header" data-aos="fade-up">
            <div>
              <span className="services-list-badge">What We Offer</span>
              <h2 className="services-list-heading">Comprehensive medical services for you</h2>
            </div>
            <Link to="/contact" className="services-list-cta d-none d-lg-flex">
              View more
              <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="services-rows">
            {services.map((service, index) => (
              <Link
                to="/contact"
                className={`service-row ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="service-row-divider"></div>
                <div className="service-row-inner">
                  <div className="service-row-image">
                    <div className="image-wrapper">
                      <img src={service.image} alt={service.title} loading="lazy" />
                    </div>
                  </div>
                  <div className="service-row-content">
                    <div className="service-row-icon">
                      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h3 className="service-row-title">{service.title}</h3>
                    <p className="service-row-desc">{service.description}</p>
                    <div className="service-row-subs">{service.subs}</div>
                  </div>
                </div>
              </Link>
            ))}
            <div className="service-row-divider last"></div>
          </div>
        </div>
      </section>

      {/* Treatment Grid */}
      <section className="treatment-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="services-list-badge">Our Expertise</span>
            <h2 className="treatment-heading">
              Where expert medical care meets <span className="text-green">compassionate treatments</span>
            </h2>
          </div>
          <div className="treatment-grid">
            {treatments.map((item, i) => (
              <div className="treatment-card" key={i} data-aos="fade-up" data-aos-delay={i * 60}>
                <div className="treatment-image-wrapper">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="treatment-label">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="services-list-badge">FAQs</span>
            <h2 className="treatment-heading">Frequently asked questions</h2>
          </div>
          <div className="faq-list" data-aos="fade-up">
            {faqs.map((faq, i) => (
              <div className={`faq-item ${openFaq === i ? 'faq-open' : ''}`} key={i}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" className="faq-plus">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <div className="services-cta-inner" data-aos="fade-up">
            <span className="services-hero-badge">Get In Touch</span>
            <h2 className="services-cta-title">Ready to book an appointment?</h2>
            <p className="services-cta-desc">
              Our team is available 24/7 to provide the care you need. Call us or visit our facility.
            </p>
            <div className="services-cta-actions">
              <Link to="/contact" className="btn-cta-primary">
                Book Appointment
              </Link>
              <a href="tel:+233533990935" className="btn-cta-secondary">
                Call +233 533 990 935
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
