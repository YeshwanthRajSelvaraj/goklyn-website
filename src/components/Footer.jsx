import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import '../styles/App.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    useful: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Career', path: '/careers' },
      { name: 'Contact us', path: '/contact' },
    ],
    services: [
      { name: 'AI & Machine Learning', path: '/services#ai' },
      { name: 'Cyber Security', path: '/services#cybersecurity' },
      { name: 'Quantum Computing', path: '/services#quantum' },
      { name: 'Web Development', path: '/services#web' },
      { name: 'Data Analysis', path: '/services#data' },
    ],
    contact: [
      { icon: <FiPhone />, text: '+91 9024486472' },
      { icon: <FiMail />, text: 'info@goklyn.tech' },
      { icon: <FiMapPin />, text: 'Jaipur, Rajasthan' },
    ]
  };

  const socialLinks = [
    { icon: <FiFacebook />, url: '#' },
    { icon: <FiTwitter />, url: '#' },
    { icon: <FiLinkedin />, url: '#' },
    { icon: <FiInstagram />, url: '#' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo and Description */}
          <motion.div 
            className="footer-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="footer-logo">
              <div className="logo-icon">
                <div className="logo-gradient">G</div>
              </div>
              <div>
                <h3 className="footer-logo-text">Goklyn</h3>
                <p className="footer-logo-subtitle">Technologies</p>
              </div>
            </div>
            <p className="footer-description">
              Goklyn Technologies, your all-in-one destination for cutting-edge innovations, 
              industrial project development, and skill development.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="social-icon"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div 
            className="footer-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="footer-title">Useful Links</h4>
            <ul className="footer-links">
              {footerLinks.useful.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="footer-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              {footerLinks.services.map((service) => (
                <li key={service.name}>
                  <Link to={service.path} className="footer-link">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="footer-title">Contact Us</h4>
            <ul className="contact-info">
              {footerLinks.contact.map((item, index) => (
                <li key={index} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="copyright">
            © {currentYear} Goklyn Technologies. All rights reserved.
          </div>
          <div className="footer-extra">
            <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;