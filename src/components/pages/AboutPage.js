import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaRocket, FaHandshake, FaChartLine } from 'react-icons/fa';
import '../../styles/AboutPage.css';

const AboutPage = () => {
  const features = [
    {
      icon: <FaUsers className="feature-icon" />,
      title: 'Our Mission',
      description: 'To empower individuals and teams to achieve their full potential through intuitive task management and productivity tools.'
    },
    {
      icon: <FaRocket className="feature-icon" />,
      title: 'Our Vision',
      description: 'To become the most trusted and innovative task management platform, helping millions organize their work and personal lives.'
    },
    {
      icon: <FaHandshake className="feature-icon" />,
      title: 'Our Values',
      description: 'We believe in simplicity, efficiency, and user-centric design to create the best possible experience for our users.'
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: 'Our Approach',
      description: 'Continuous improvement and innovation drive us to deliver cutting-edge solutions that adapt to your needs.'
    }
  ];

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Product visionary with 10+ years of experience in productivity tools.'
    },
    {
      name: 'Sarah Williams',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Full-stack developer passionate about creating seamless user experiences.'
    },
    {
      name: 'Michael Chen',
      role: 'UX Designer',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      bio: 'Design thinker focused on intuitive and beautiful interfaces.'
    },
    {
      name: 'Emily Davis',
      role: 'Customer Success',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      bio: 'Dedicated to ensuring our users get the most out of our platform.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Task Tracker</h1>
            <p className="lead">Transforming the way you organize, track, and accomplish your tasks.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link to="/" className="btn btn-outline">Explore Features</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Task Tracker?</h2>
            <p>We're on a mission to simplify task management and boost productivity for everyone.</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-container">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The passionate people behind Task Tracker</p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="social-links">
                    <a href="#" aria-label={`${member.name} LinkedIn`}><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" aria-label={`${member.name} Twitter`}><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to boost your productivity?</h2>
            <p>Join thousands of users who are already managing their tasks more effectively.</p>
            <Link to="/register" className="btn btn-primary">Get Started for Free</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
