import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../../styles/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
   
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
     
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
       
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="contact-info-icon" />,
      title: 'Location',
      text: '123 Task Street, Productivity City, PC 12345',
      link: 'https://maps.google.com',
      linkText: 'View on Map',
      iconColor: '#4F46E5'
    },
    {
      icon: <FaPhone className="contact-info-icon" />,
      title: 'Phone',
      text: '+1 (123) 456-7890',
      link: 'tel:+11234567890',
      linkText: 'Call Us',
      iconColor: '#10B981'
    },
    {
      icon: <FaEnvelope className="contact-info-icon" />,
      title: 'Email',
      text: 'support@tasktracker.com',
      link: 'mailto:support@tasktracker.com',
      linkText: 'Send Email',
      iconColor: '#3B82F6'
    },
    {
      icon: <FaPaperPlane className="contact-info-icon" />,
      title: 'Follow Us',
      text: 'Connect with us on social media',
      social: true,
      iconColor: '#8B5CF6'
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaFacebookF />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="form-success">
                  <FaCheckCircle className="success-icon" />
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="you@example.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={errors.subject ? 'error' : ''}
                      placeholder="How can we help?"
                    />
                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'error' : ''}
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <FiSend className="mr-2" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact-info-container">
              <div className="contact-info-card">
                <h2>Contact Information</h2>
                <p>Have questions? We're here to help! Reach out using the information below or fill out the form.</p>
                
                <div className="contact-info-items">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="contact-info-item">
                      <div className="contact-info-icon" style={{ color: item.iconColor }}>
                        {item.icon}
                      </div>
                      <div className="contact-info-content">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        {item.social ? (
                          <div className="social-links">
                            {socialLinks.map((social, i) => (
                              <a 
                                key={i} 
                                href={social.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="social-link"
                              >
                                {social.icon}
                              </a>
                            ))}
                          </div>
                        ) : (
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.linkText} <i className="fas fa-arrow-right"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425872413623!3d40.74076987932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sMadison%20Square%20Garden!5e0!3m2!1sen!2sus!4v1623251433927!5m2!1sen!2sus" 
              allowFullScreen="" 
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
