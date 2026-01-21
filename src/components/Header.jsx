import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import '../styles/App.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Our Company', 
      path: '#',
      dropdown: [
        { name: 'About', path: '/about' },
        { name: 'Our Team', path: '/about#team' },
        { name: 'Careers', path: '/careers' }
      ]
    },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <motion.div 
              className="logo-icon"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <div className="logo-gradient">G</div>
            </motion.div>
            <div>
              <h1 className="logo-text">Goklyn</h1>
              <p className="logo-subtitle">Technologies</p>
            </div>
          </Link>

          <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="nav-item-wrapper"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <div className="nav-item dropdown">
                    <span className="nav-link">
                      {item.name}
                      <FiChevronDown className="dropdown-icon" />
                    </span>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div 
                          className="dropdown-menu"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {item.dropdown.map(subItem => (
                            <Link 
                              key={subItem.name}
                              to={subItem.path}
                              className="dropdown-item"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <motion.button 
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>

          <motion.div 
            className="mobile-nav"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ 
              opacity: isOpen ? 1 : 0,
              x: isOpen ? 0 : '100%'
            }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <div key={item.name} className="mobile-nav-item">
                {item.dropdown ? (
                  <div className="mobile-dropdown">
                    <button className="mobile-dropdown-btn">
                      {item.name}
                      <FiChevronDown className="mobile-dropdown-icon" />
                    </button>
                    <div className="mobile-dropdown-content">
                      {item.dropdown.map(subItem => (
                        <Link 
                          key={subItem.name}
                          to={subItem.path}
                          className="mobile-nav-link"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;