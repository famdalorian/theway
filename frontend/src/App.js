import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Contact from './components/Contact';
import Mission from './components/Mission';
import Progress from './components/Progress';
import Community from './components/Community';
import Footer from './components/Footer'; // Import the new Footer component
import './App.css'; // Global styles

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Header with Navigation */}
        <header className="header">
          <h1 className="logo">The Way</h1>
          <nav className="nav">
            <NavLink to="/" label="Home" />
            <NavLink to="/mission" label="Mission" />
            <NavLink to="/progress" label="Progress" />
            <NavLink to="/community" label="Community" />
            <NavLink to="/contact" label="Contact" />
          </nav>
        </header>

        {/* Main content */}
        <main className="main-content">
          <div className="page">
            <Routes>
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/community" element={<Community />} />
            </Routes>
          </div>
        </main>

        {/* Footer (Moved here for all pages) */}
        <Footer />
      </div>
    </Router>
  );
};

// Custom NavLink Component for Active State
const NavLink = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`}>
      {label}
    </Link>
  );
};

// Home Component (Unchanged)
const Home = () => {
  return (
    <div className="home-page">
      {/* Hero section */}
      <section className="home-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Discover The Way</h1>
            <p>A global community celebrating art, music, and sports—wherever the journey takes us.</p>
            <Link to="/community" className="hero-cta-button">
              Join the Community
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Explore Our Community</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏀</div>
            <h3>Sports</h3>
            <p>Connect with fans of action sports—from skateboarding to martial arts.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Art</h3>
            <p>Share and explore creative works that inspire.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎵</div>
            <h3>Music</h3>
            <p>Vibe with a community that lives for the beat.</p>
          </div>
        </div>
      </section>

      {/* Progress Teaser Section */}
      <section className="progress-teaser-section">
        <div className="progress-text">
          <h2>Our Progress</h2>
          <p>Support the growth of our community and kindness efforts.</p>
          <Link to="/progress" className="progress-cta-button">See the Progress</Link>
        </div>
        <div className="progress-image"></div>
      </section>
    </div>
  );
};

export default App;