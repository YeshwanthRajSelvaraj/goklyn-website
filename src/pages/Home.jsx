import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiPlay, FiSearch } from 'react-icons/fi';
import '../styles/App.css';

const Home = () => {
  const services = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Providing innovative AI/ML solutions that transform businesses and drive growth.",
      icon: "🤖"
    },
    {
      title: "Cyber Security & Ethical Hacking",
      description: "Protecting your digital assets with cutting-edge security solutions.",
      icon: "🔒"
    },
    {
      title: "Quantum Computing",
      description: "Exploring the future with quantum ML and cryptography solutions.",
      icon: "⚛️"
    },
    {
      title: "Web Development & UI/UX Design",
      description: "Creating beautiful, functional websites with exceptional user experiences.",
      icon: "💻"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                Free Your Technologies with
                <span className="gradient-text"> Goklyn</span>
              </h1>
              <p className="hero-subtitle">
                Innovation, Collaboration, and Leadership in Technology
              </p>
              <div className="hero-buttons">
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Projects <FiArrowRight />
                </motion.button>
                <motion.button 
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiPlay /> Watch Video
                </motion.button>
              </div>
            </motion.div>
            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Services We Can Help You With</h2>
            <p className="section-description">
              Provide innovative and efficient solutions to meet your business needs
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to="/services" className="service-link">
                  Learn More <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="innovation-section section">
        <div className="container">
          <div className="innovation-content">
            <motion.div 
              className="innovation-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Innovation, Collaboration, and Leadership</h2>
              <ul className="innovation-list">
                <li><FiCheck /> Enhance technology advances in technological innovation</li>
                <li><FiCheck /> Optimize energy and capabilities with rapid deployment</li>
                <li><FiCheck /> Optimize the efficiency of improved production</li>
                <li><FiCheck /> Optimize performance on a commercial scale</li>
              </ul>
            </motion.div>
            <motion.div 
              className="innovation-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="qr-animation">
                <div className="qr-code">
                  <FiSearch size={60} />
                </div>
                <div className="qr-text">Scan for Innovation</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;