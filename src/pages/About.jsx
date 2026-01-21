import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiTarget, FiEye, FiAward, FiBook, FiBriefcase } from 'react-icons/fi';
import '../styles/App.css';

const About = () => {
  const teamMembers = [
    {
      name: "Mark Systems",
      role: "CEO & Founder",
      bio: "Visionary leader with extensive experience in tech innovation and business development.",
      image: "👨‍💼"
    },
    {
      name: "Market Sharing",
      role: "CTO",
      bio: "Expert in quantum computing and advanced technological solutions with 10+ years experience.",
      image: "👩‍💻"
    }
  ];

  const stats = [
    { value: "50+", label: "Projects Completed", icon: <FiBriefcase /> },
    { value: "200+", label: "Students Trained", icon: <FiUsers /> },
    { value: "15+", label: "Startups Partnered", icon: <FiBook /> },
    { value: "10+", label: "Awards Won", icon: <FiAward /> }
  ];

  return (
    <div className="about">
      {/* Hero */}
      <section className="about-hero section">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">About Us</h1>
            <p className="hero-subtitle">
              Building a platform where education meets technology and innovation drives progress
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section">
        <div className="container">
          <div className="mv-grid">
            <motion.div 
              className="mv-card mission"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mv-icon">
                <FiTarget />
              </div>
              <h3 className="mv-title">Our Mission</h3>
              <p className="mv-description">
                To create an accessible and innovative tech ecosystem where students, startups, 
                and enterprises come together to shape the future of technology.
              </p>
            </motion.div>

            <motion.div 
              className="mv-card vision"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mv-icon">
                <FiEye />
              </div>
              <h3 className="mv-title">Our Vision</h3>
              <p className="mv-description">
                To empower individuals and organizations with the skills, tools, and technologies 
                needed to drive success and innovate in the digital age.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="company-info section">
        <div className="container">
          <motion.div 
            className="company-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Goklyn Private Limited</h2>
            <div className="company-text">
              <p>
                At GOKLYN Technologies, we are committed to creating an inclusive and innovative 
                ecosystem that fosters learning, collaboration, and technological advancement.
              </p>
              <p>
                Our mission is to bridge the gap between academia and industry, empowering students 
                from all backgrounds, especially those in tier 3 and tier 4 colleges, by providing 
                hands-on training and opportunities to work on real-world projects.
              </p>
              <p>
                Through our partnerships with startups, enterprises, and government organizations, 
                we deliver high-quality solutions and innovative projects that address real-world challenges.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="team-section section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Meet the Visionaries Behind GOKLYN</h2>
            <p className="section-description">
              Industry veterans with a shared vision of bridging the gap between academia and industry
            </p>
          </motion.div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="team-image">{member.image}</div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-social">
                  <button className="social-btn">LinkedIn</button>
                  <button className="social-btn">Twitter</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;