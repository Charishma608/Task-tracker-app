import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Organize Your Work & Life</h1>
            <p>Task Tracker helps you stay organized and be more productive. Manage your tasks efficiently and achieve your goals faster.</p>
            <div className="cta-buttons">
              <Link to="/tasks" className="btn btn-primary">Get Started</Link>
              <Link to="/about" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/task-management.svg" alt="Task Management" />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Task Tracker?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-tasks"></i>
              </div>
              <h3>Task Management</h3>
              <p>Easily create, organize, and prioritize your tasks with our intuitive interface.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-bell"></i>
              </div>
              <h3>Reminders</h3>
              <p>Never miss a deadline with our smart reminder system.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Progress Tracking</h3>
              <p>Monitor your productivity and track your progress over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to boost your productivity?</h2>
          <p>Join thousands of users who are already managing their tasks efficiently with Task Tracker.</p>
          <Link to="/signup" className="btn btn-primary">Sign Up Free</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
