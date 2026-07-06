import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import './News.css';

const allNews = [
  {
    id: 1,
    category: 'Maternal Health',
    date: 'Feb 20, 2026',
    title: "Why Prenatal Care is Your Baby's First Gift",
    excerpt: 'Discover how regular screenings at Safe Care Hospital ensure a safer journey for both mother and child.',
    image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=1000&auto=format&fit=crop',
    type: 'Health Tips'
  },
  {
    id: 2,
    category: 'Technology',
    date: 'Feb 15, 2026',
    title: 'The Power of Precision: New 4D Ultrasound Imaging',
    excerpt: "We've introduced advanced 4D scanning to provide clearer diagnostic insights for all our patients.",
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    type: 'Announcements'
  },
  {
    id: 3,
    category: 'Outreach',
    date: 'Feb 10, 2026',
    title: 'Safe Care Community Wellness Fair 2026',
    excerpt: 'Join us next month for free blood pressure screenings and health consultations in the town square.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    type: 'Outreach'
  }
];

export default function News() {
  const [filter, setFilter] = useState('All Updates');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredNews = filter === 'All Updates' 
    ? allNews 
    : allNews.filter(post => post.type === filter);

  return (
    <div className="news-page">
      {/* News Hero */}
      <header className="news-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <span className="hero-badge">Insights & Updates</span>
              <h1 className="display-4 fw-bold mt-3">Health News For Our Community</h1>
              <p className="hero-subtext mt-3">
                Stay connected with the latest medical advancements, health tips, and hospital stories from Safe Care.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mb-5 pb-5">
        <div className="filter-container">
          <div className="nav nav-pills">
            {['All Updates', 'Announcements', 'Health Tips', 'Outreach'].map((tab) => (
              <button
                key={tab}
                className={`nav-link ${filter === tab ? 'active' : ''}`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post (Only show on 'All Updates' or 'Announcements') */}
        {(filter === 'All Updates' || filter === 'Announcements') && (
          <div className="featured-post mt-5" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="image-container mb-lg-0 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                    alt="Doctor providing care"
                  />
                </div>
              </div>
              <div className="col-lg-7 ps-lg-5">
                <span className="featured-tag">FEATURED UPDATE</span>
                <h2 className="fw-bold mt-3 mb-3">
                  Expanding Our Horizon: 24/7 Specialized Emergency Wing Now Open
                </h2>
                <p className="opacity-75 mb-4">
                  We have officially launched our upgraded emergency department with enhanced life-support systems and dedicated specialists available round the clock for Anyirawase.
                </p>
                <a href="#" className="btn btn-success rounded-pill px-4 fw-bold">
                  Read Full Story
                </a>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="row g-5 mt-2">
          {filteredNews.map((post, idx) => (
            <div key={post.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="news-grid-item">
                <div className="image-container">
                  <img src={post.image} alt={post.title} />
                </div>
                <span className="post-meta">
                  {post.category} • {post.date}
                </span>
                <a href="#" className="post-title">
                  {post.title}
                </a>
                <p className="post-excerpt">{post.excerpt}</p>
              </div>
            </div>
          ))}
          {filteredNews.length === 0 && (
            <div className="col-12 text-center py-5">
              <p className="text-muted">No news stories found in this category.</p>
            </div>
          )}
        </div>
      </main>

      {/* Newsletter Box */}
      <section className="container mb-5">
        <div className="newsletter-box" data-aos="zoom-in">
          <h2 className="fw-bold mb-3">Health Insights Delivered</h2>
          <p className="text-readable mb-4 mx-auto" style={{ maxWidth: '500px' }}>
            Get the latest health updates and hospital news directly to your inbox.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-5">
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }} className="input-group mb-3">
                <input
                  type="email"
                  required
                  className="form-control rounded-start-pill border-0 px-4"
                  placeholder="Email Address"
                />
                <button type="submit" className="btn btn-success rounded-end-pill px-4 fw-bold">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
