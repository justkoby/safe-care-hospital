import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmergencyTicker from './components/EmergencyTicker';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import News from './pages/News';
import Contact from './pages/Contact';

// ScrollToTop helper on route change
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <EmergencyTicker />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;
