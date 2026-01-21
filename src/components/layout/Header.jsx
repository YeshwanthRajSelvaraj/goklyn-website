/**
 * Header Component - Glassmorphism Navigation
 * Premium quantum-inspired navigation with mobile support
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiMenu,
    FiX,
    FiChevronDown,
    FiArrowRight
} from 'react-icons/fi';
import GlowingLogo from '../animations/GlowingLogo';
import { Button } from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';
import { useTheme } from '../../hooks/useTheme';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    // Navigation items
    const navItems = [
        { name: 'Home', path: '/' },
        {
            name: 'Company',
            path: '/about',
            dropdown: [
                { name: 'About Us', path: '/about', description: 'Our story and mission' },
                { name: 'Our Team', path: '/about#team', description: 'Meet the experts' },
                { name: 'Careers', path: '/careers', description: 'Join our team' }
            ]
        },
        { name: 'Services', path: '/services' },
        { name: 'Technology', path: '/technology' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'py-3 bg-dark-950/80 backdrop-blur-xl border-b border-white/5'
                    : 'py-5 bg-transparent'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="relative z-50">
                            <GlowingLogo size="default" />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                                    onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                                >
                                    {item.dropdown ? (
                                        <>
                                            <button
                                                className={`
                          flex items-center gap-1 px-4 py-2 text-sm font-medium
                          transition-colors duration-200
                          ${location.pathname.startsWith(item.path)
                                                        ? 'text-cyan-400'
                                                        : 'text-gray-300 hover:text-white'}
                        `}
                                            >
                                                {item.name}
                                                <motion.span
                                                    animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <FiChevronDown className="w-4 h-4" />
                                                </motion.span>
                                            </button>

                                            {/* Dropdown Menu */}
                                            <AnimatePresence>
                                                {activeDropdown === item.name && (
                                                    <motion.div
                                                        className="absolute top-full left-0 mt-2 w-64 py-2 bg-dark-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        {item.dropdown.map((subItem, index) => (
                                                            <Link
                                                                key={subItem.name}
                                                                to={subItem.path}
                                                                className="block px-4 py-3 hover:bg-white/5 transition-colors group"
                                                            >
                                                                <motion.div
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: index * 0.05 }}
                                                                >
                                                                    <span className="block text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                                                        {subItem.name}
                                                                    </span>
                                                                    <span className="block text-xs text-gray-500 mt-0.5">
                                                                        {subItem.description}
                                                                    </span>
                                                                </motion.div>
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className={`
                        relative px-4 py-2 text-sm font-medium
                        transition-colors duration-200
                        ${location.pathname === item.path
                                                    ? 'text-cyan-400'
                                                    : 'text-gray-300 hover:text-white'}
                      `}
                                        >
                                            {item.name}
                                            {location.pathname === item.path && (
                                                <motion.span
                                                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500"
                                                    layoutId="navIndicator"
                                                />
                                            )}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Theme Toggle & CTA Button */}
                        <div className="hidden lg:flex items-center gap-4">
                            <ThemeToggle theme={theme} onToggle={toggleTheme} />
                            <Link to="/contact">
                                <Button variant="primary" size="small">
                                    <span>Get Started</span>
                                    <FiArrowRight className="ml-2" />
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <motion.button
                            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.span
                                        key="close"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FiX size={24} />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="menu"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FiMenu size={24} />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-dark-950/95 backdrop-blur-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.nav
                            className="absolute top-20 left-0 right-0 bottom-0 flex flex-col px-6 py-8 overflow-y-auto"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border-b border-white/5"
                                >
                                    {item.dropdown ? (
                                        <div className="py-4">
                                            <span className="block text-lg font-medium text-white mb-3">
                                                {item.name}
                                            </span>
                                            <div className="pl-4 space-y-2">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        to={subItem.path}
                                                        className="block py-2 text-gray-400 hover:text-cyan-400 transition-colors"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className={`
                        block py-4 text-lg font-medium transition-colors
                        ${location.pathname === item.path
                                                    ? 'text-cyan-400'
                                                    : 'text-white hover:text-cyan-400'}
                      `}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}

                            {/* Mobile Theme Toggle */}
                            <motion.div
                                className="mt-6 flex justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <ThemeToggle theme={theme} onToggle={toggleTheme} />
                            </motion.div>

                            {/* Mobile CTA */}
                            <motion.div
                                className="mt-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link to="/contact" className="block">
                                    <Button variant="primary" className="w-full">
                                        Get Started
                                        <FiArrowRight className="ml-2" />
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
