import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import '../styles/App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: "Location",
      details: "Jaipur, Rajasthan",
      color: "#3B82F6"
    },
    {
      icon: <FiMail />,
      title: "Email Us",
      details: "info@goklyn.tech",
      color: "#10B981"
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      details: "+91 9024486472",
      color: "#8B5CF6"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero section">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">
              Have questions? Interested in joining our programs or collaborating on a project? 
              We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <motion.div 
              className="contact-info-side"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Contact Information</h2>
              
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={info.title}
                    className="contact-detail-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div 
                      className="contact-icon-wrapper"
                      style={{ background: `${info.color}20` }}
                    >
                      <div style={{ color: info.color }}>{info.icon}</div>
                    </div>
                    <div className="contact-detail-content">
                      <h3 className="contact-detail-title">{info.title}</h3>
                      <p className="contact-detail-text">{info.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="contact-map">
                <div className="map-placeholder">
                  <FiMapPin size={40} />
                  <p>Jaipur, Rajasthan</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="contact-form-side"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="form-input form-textarea"
                    rows="5"
                    required
                  />
                </div>

                <motion.button 
                  type="submit"
                  className="btn btn-primary submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={submitted}
                >
                  {submitted ? (
                    <>
                      <FiCheck /> Message Sent!
                    </>
                  ) : (
                    <>
                      <FiSend /> Submit Now
                    </>
                  )}
                </motion.button>
              </form>

              {submitted && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;