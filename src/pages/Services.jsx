import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight, FiCode, FiShield, FiCpu, FiBarChart, FiGlobe, FiTrendingUp } from 'react-icons/fi';
import '../styles/App.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: "Artificial Intelligence & Machine Learning",
      icon: <FiCpu />,
      description: "Machine learning is a type of artificial intelligence (AI) that enables systems to learn and improve from experience without being explicitly programmed.",
      details: [
        "Custom AI/ML model development",
        "Predictive analytics solutions",
        "Natural Language Processing (NLP)",
        "Computer vision applications",
        "AI-powered automation"
      ],
      color: "#8B5CF6"
    },
    {
      id: 2,
      title: "Cyber Security & Ethical Hacking",
      icon: <FiShield />,
      description: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.",
      details: [
        "Vulnerability assessment",
        "Penetration testing",
        "Security audits",
        "Incident response",
        "Security awareness training"
      ],
      color: "#10B981"
    },
    {
      id: 3,
      title: "Quantum ML & Quantum Cryptography",
      icon: <FiCode />,
      description: "Quantum Machine Learning (QML) refers to the integration of quantum computing with machine learning algorithms.",
      details: [
        "Quantum algorithm development",
        "Quantum-safe cryptography",
        "QML model implementation",
        "Quantum simulation",
        "Research collaborations"
      ],
      color: "#3B82F6"
    },
    {
      id: 4,
      title: "Data Analysis & Business Analysis",
      icon: <FiBarChart />,
      description: "Data analysis and business analysis (BA) are both data-driven processes that help businesses make informed decisions.",
      details: [
        "Business intelligence dashboards",
        "Data visualization",
        "Statistical analysis",
        "Market research",
        "Process optimization"
      ],
      color: "#F59E0B"
    },
    {
      id: 5,
      title: "Web Development & UI/UX Design",
      icon: <FiGlobe />,
      description: "Web development is the technical process of building websites, while UI/UX design focuses on user experience and interface.",
      details: [
        "Responsive web design",
        "Custom web applications",
        "E-commerce solutions",
        "User experience research",
        "Prototype development"
      ],
      color: "#EF4444"
    },
    {
      id: 6,
      title: "Social Media & Digital Marketing",
      icon: <FiTrendingUp />,
      description: "Social media marketing leverages popular social media networks to achieve marketing and branding goals.",
      details: [
        "Social media strategy",
        "Content marketing",
        "SEO optimization",
        "PPC campaign management",
        "Analytics & reporting"
      ],
      color: "#8B5CF6"
    }
  ];

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero section">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Our Services</h1>
            <p className="hero-subtitle">
              Comprehensive solutions for students, businesses, and industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="all-services section">
        <div className="container">
          <div className="services-layout">
            {/* Services List */}
            <motion.div 
              className="services-list"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <motion.div 
                  key={service.id}
                  className={`service-item ${activeService === index ? 'active' : ''}`}
                  onClick={() => setActiveService(index)}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="service-item-icon"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    {service.icon}
                  </div>
                  <div className="service-item-content">
                    <h3 className="service-item-title">{service.title}</h3>
                    <FiChevronRight className="service-item-arrow" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Service Details */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeService}
                className="service-details"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div 
                  className="service-header"
                  style={{ backgroundColor: `${services[activeService].color}10` }}
                >
                  <div 
                    className="service-icon-large"
                    style={{ color: services[activeService].color }}
                  >
                    {services[activeService].icon}
                  </div>
                  <h2 className="service-title-large">
                    {services[activeService].title}
                  </h2>
                </div>

                <div className="service-content">
                  <p className="service-description">
                    {services[activeService].description}
                  </p>
                  
                  <div className="service-features">
                    <h4 className="features-title">What We Offer:</h4>
                    <ul className="features-list">
                      {services[activeService].details.map((feature, index) => (
                        <motion.li 
                          key={index}
                          className="feature-item"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <FiChevronRight style={{ color: services[activeService].color }} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.button 
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ background: `linear-gradient(135deg, ${services[activeService].color} 0%, ${services[activeService].color}80 100%)` }}
                  >
                    Request This Service
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;