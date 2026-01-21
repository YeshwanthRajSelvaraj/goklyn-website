/**
 * Footer Component - Quantum Dark Theme
 * Premium footer with newsletter signup and social links
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FiMail,
    FiMapPin,
    FiPhone,
    FiArrowRight,
    FiGithub,
    FiLinkedin,
    FiTwitter,
    FiInstagram,
    FiYoutube
} from 'react-icons/fi';
import { LogoIcon } from '../animations/GlowingLogo';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubscribed(true);
            setIsSubmitting(false);
            setEmail('');
        }, 1000);
    };

    const footerLinks = {
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Our Team', path: '/about#team' },
            { name: 'Careers', path: '/careers' },
            { name: 'Press Kit', path: '/press' }
        ],
        services: [
            { name: 'Quantum Computing', path: '/services#quantum' },
            { name: 'AI & Machine Learning', path: '/services#ai' },
            { name: 'Cybersecurity', path: '/services#security' },
            { name: 'Web Development', path: '/services#web' }
        ],
        resources: [
            { name: 'Documentation', path: '/docs' },
            { name: 'Blog', path: '/blog' },
            { name: 'Case Studies', path: '/projects' },
            { name: 'Support', path: '/contact' }
        ],
        legal: [
            { name: 'Privacy Policy', path: '/privacy' },
            { name: 'Terms of Service', path: '/terms' },
            { name: 'Cookie Policy', path: '/cookies' }
        ]
    };

    const socialLinks = [
        { name: 'GitHub', icon: <FiGithub />, url: 'https://github.com/goklyn' },
        { name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/company/goklyn' },
        { name: 'Twitter', icon: <FiTwitter />, url: 'https://twitter.com/goklyn' },
        { name: 'Instagram', icon: <FiInstagram />, url: 'https://instagram.com/goklyn' },
        { name: 'YouTube', icon: <FiYoutube />, url: 'https://youtube.com/@goklyn' }
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-dark-950 border-t border-white/5 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
                        filter: 'blur(60px)'
                    }}
                />
                <div
                    className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                        filter: 'blur(60px)'
                    }}
                />
            </div>

            <div className="relative container mx-auto px-4 md:px-6">
                {/* Newsletter Section */}
                <div className="py-16 border-b border-white/5">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h3
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Stay at the{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
                                Quantum Edge
                            </span>
                        </motion.h3>
                        <motion.p
                            className="text-gray-400 mb-8 max-w-xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Subscribe to our newsletter for the latest updates on quantum computing,
                            AI innovations, and technology breakthroughs.
                        </motion.p>

                        {/* Newsletter Form */}
                        <motion.form
                            onSubmit={handleNewsletterSubmit}
                            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            {!isSubscribed ? (
                                <>
                                    <div className="relative flex-1">
                                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            required
                                            className="w-full pl-12 pr-4 py-4 bg-dark-800/50 border border-dark-600 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                                        />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all disabled:opacity-50"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Subscribing...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Subscribe
                                                <FiArrowRight />
                                            </span>
                                        )}
                                    </motion.button>
                                </>
                            ) : (
                                <motion.div
                                    className="w-full py-4 px-6 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    ✓ Thanks for subscribing! Check your inbox for confirmation.
                                </motion.div>
                            )}
                        </motion.form>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <Link to="/" className="inline-flex items-center gap-3 mb-6">
                            <LogoIcon size="h-10 w-10" />
                            <div>
                                <h4 className="text-xl font-bold text-white">GOKLYN</h4>
                                <p className="text-xs text-cyan-400/70 tracking-wider">Technologies</p>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm mb-6 max-w-xs">
                            Pioneering the future with quantum computing, artificial intelligence,
                            and next-generation technology solutions.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm text-gray-400">
                            <div className="flex items-center gap-3">
                                <FiMapPin className="text-cyan-400" />
                                <span>Bangalore, Karnataka, India</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiMail className="text-cyan-400" />
                                <a href="mailto:hello@goklyn.com" className="hover:text-white transition-colors">
                                    hello@goklyn.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiPhone className="text-cyan-400" />
                                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                                    +91 98765 43210
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h5 className="text-white font-semibold mb-4">Company</h5>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white font-semibold mb-4">Services</h5>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white font-semibold mb-4">Resources</h5>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white font-semibold mb-4">Legal</h5>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} GOKLYN Technologies. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-dark-800/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-dark-700 transition-all"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.name}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
