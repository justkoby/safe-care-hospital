import React, { useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicesCarousel.css';

const services = [
  {
    id: 1,
    title: 'General Outpatient Services',
    category: 'Primary Care',
    description:
      'Comprehensive consultation, diagnosis, and treatment for everyday health concerns.',
    image: '/Assets/images/general-house.png',
    bullets: [
      'Routine check-ups and health screenings',
      'Diagnosis and treatment of common illnesses',
      'Chronic disease management and prevention',
    ],
  },
  {
    id: 2,
    title: 'Maternity & Antenatal Care',
    category: "Women's Health",
    description:
      'Safe pregnancy monitoring, maternal care, and professional delivery support.',
    image: '/Assets/images/pregnancy.png',
    bullets: [
      'Regular antenatal check-ups and scans',
      'Professional delivery and postnatal care',
      'Breastfeeding and newborn wellness support',
    ],
  },
  {
    id: 3,
    title: 'Laboratory Services',
    category: 'Diagnostics',
    description:
      'Accurate and timely diagnostic testing to guide effective treatment.',
    image: '/Assets/images/ls.jpg',
    bullets: [
      'Blood work and comprehensive pathology tests',
      'Rapid diagnostic results you can trust',
      'Full health screening and wellness panels',
    ],
  },
  {
    id: 4,
    title: 'Pharmacy',
    category: 'Medication',
    description:
      'Fully stocked pharmacy providing prescribed and over-the-counter medications.',
    image: '/Assets/images/PHARMACY-1.jpg',
    bullets: [
      'Wide range of prescription medications available',
      'Over-the-counter health and wellness products',
      'Expert medication counseling by licensed pharmacists',
    ],
  },
  {
    id: 5,
    title: 'Theatre Services',
    category: 'Surgery',
    description:
      'Major and minor surgical procedures performed in a safe and sterile environment.',
    image: '/Assets/images/theatre.jpg',
    bullets: [
      'State-of-the-art operating theatres',
      'Experienced and skilled surgical teams',
      'Comprehensive post-operative care and recovery',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesCarousel() {
  const isDragging = useRef(false);
  const dragData = useRef({ startX: 0, scrollLeft: 0 });
  const trackRef = useRef(null);

  const handleMouseDown = useCallback((e) => {
    isDragging.current = true;
    const track = e.currentTarget;
    dragData.current = {
      startX: e.pageX - track.offsetLeft,
      scrollLeft: track.scrollLeft,
    };
    track.classList.add('is-dragging');
  }, []);

  const handleMouseUp = useCallback((e) => {
    isDragging.current = false;
    e.currentTarget.classList.remove('is-dragging');
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const track = e.currentTarget;
    const data = dragData.current;
    const x = e.pageX - track.offsetLeft;
    const walk = (x - data.startX) * 1.5;
    track.scrollLeft = data.scrollLeft - walk;
  }, []);

  const handleMouseLeave = useCallback((e) => {
    isDragging.current = false;
    e.currentTarget.classList.remove('is-dragging');
  }, []);

  return (
    <section className="services-carousel-section">
      <div className="services-carousel-container">
        <motion.div
          className="services-carousel-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={headerVariants}
        >
          <span className="services-carousel-badge">Specialized Care</span>
          <h2 className="services-carousel-heading">Our Core Medical Services</h2>
        </motion.div>

        <div
          className="services-scroll-track"
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {services.map((service, index) => (
            <div className="services-scroll-card" key={service.id}>
              <motion.div
                className={`service-card-horizontal ${index % 2 === 0 ? 'card-image-left' : 'card-image-right'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="service-card-image">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.03 }}
                  />
                </div>
                <div className="service-card-content">
                  <span className="service-card-category">{service.category}</span>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">{service.description}</p>
                  <ul className="service-card-bullets">
                    {service.bullets.map((bullet, i) => (
                      <li key={i}>
                        <span className="bullet-check">
                          <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                            <path
                              d="M9 12l2 2 4-4"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services" className="learn-more-link">
                    <span className="learn-more-text">Learn More</span>
                    <span className="learn-more-arrow">
                      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                        <path
                          d="M5 12h14M14 7l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
