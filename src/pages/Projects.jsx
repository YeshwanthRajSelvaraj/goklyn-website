import React from 'react';
import { motion } from 'framer-motion';
import { FiServer, FiBriefcase, FiClock, FiUsers } from 'react-icons/fi';
import '../styles/App.css';

const Projects = () => {
  const projects = [
    {
      type: "Government Projects",
      icon: <FiServer />,
      description: "Collaborating with government agencies to develop secure and efficient solutions that streamline administrative processes.",
      color: "#3B82F6",
      status: "Completed"
    },
    {
      type: "Client Projects",
      icon: <FiBriefcase />,
      description: "Delivering tailored solutions for businesses of all sizes. From custom software to scalable cloud applications.",
      color: "#10B981",
      status: "Ongoing"
    },
    {
      type: "Upcoming Projects",
      icon: <FiClock />,
      description: "Innovative solutions in AI, Quantum Computing, and Cybersecurity. Coming soon to revolutionize industries.",
      color: "#8B5CF6",
      status: "Coming Soon"
    }
  ];

  const faqs = [
    {
      question: "What services does your startup provide?",
      answer: "We provide AI/ML, Cybersecurity, Quantum Computing, Web Development, and Digital Marketing solutions."
    },
    {
      question: "Who can apply for internships and research programs?",
      answer: "Students from all backgrounds, especially tier 3 & 4 colleges, can apply for our programs."
    },
    {
      question: "Do you collaborate on government and corporate projects?",
      answer: "Yes, we partner with startups, enterprises, and government organizations."
    }
  ];

  return (
    <div className="projects">
      {/* Hero Section */}
      <section className="projects-hero section">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Our Projects</h1>
            <p className="hero-subtitle">
              Discover our latest projects and see how we can help you achieve your goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Portfolio</h2>
            <p className="section-description">
              Building scalable, efficient, and secure solutions across various domains
            </p>
          </motion.div>

          <div className="projects-container">
            {projects.map((project, index) => (
              <motion.div 
                key={project.type}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div 
                  className="project-icon"
                  style={{ color: project.color }}
                >
                  {project.icon}
                </div>
                <div className="project-badge" style={{ background: project.color }}>
                  {project.status}
                </div>
                <h3 className="project-title">{project.type}</h3>
                <p className="project-description">{project.description}</p>
                <motion.button 
                  className="btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ background: project.color }}
                >
                  View Details
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
          </motion.div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <motion.div 
                key={faq.question}
                className="faq-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;