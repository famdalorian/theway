import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import Mission from './components/Mission';
import Progress from './components/Progress';
import './App.css'; // Global styles

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Header with navigation */}
        <header className="header">
          <h1>The Way</h1>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/mission">Mission</Link>
            <Link to="/progress">Progress</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        {/* Main content with hero section and page transitions */}
        <main className="main-content">
          <div className="page">
            <Routes>
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/progress" element={<Progress />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2024 The Way. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

// Home component with hero section
const Home = () => {
  return (
    <div className="home-container">
      {/* Hero section with background image */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h2>Experience the Energy of The Way</h2>
          <p>Join our skate park, train in MMA, or express your creativity. Adventure awaits you here!</p>
          <Link to="/contact" className="cta-button">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Other content like features */}
      <section className="features-grid">
        <div className="feature-card">
          <h3>Action Sports</h3>
          <p>Join our dynamic skate park and experience extreme sports.</p>
        </div>
        <div className="feature-card">
          <h3>Martial Arts</h3>
          <p>Train with top MMA & Muay Thai fighters.</p>
        </div>
        <div className="feature-card">
          <h3>Creative Arts</h3>
          <p>Express yourself in art, music, and design.</p>
        </div>
      </section>
    </div>
  );
};

export default App;
