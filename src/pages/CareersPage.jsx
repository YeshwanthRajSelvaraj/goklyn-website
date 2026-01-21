/**
 * Careers Page - Job Opportunities
 * Modern job listings with animated cards
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FiMapPin,
    FiBriefcase,
    FiClock,
    FiDollarSign,
    FiArrowRight,
    FiSearch,
    FiHeart,
    FiCoffee,
    FiMonitor,
    FiTrendingUp,
    FiUsers,
    FiGlobe
} from 'react-icons/fi';
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from '../components/animations/ScrollAnimations';
import { Button } from '../components/ui/Button';

export default function CareersPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');

    const departments = [
        { id: 'all', label: 'All Departments' },
        { id: 'engineering', label: 'Engineering' },
        { id: 'research', label: 'Research' },
        { id: 'design', label: 'Design' },
        { id: 'marketing', label: 'Marketing' },
        { id: 'operations', label: 'Operations' }
    ];

    const jobs = [
        {
            id: 1,
            title: 'Senior Quantum Computing Engineer',
            department: 'engineering',
            location: 'Bangalore, India',
            type: 'Full-time',
            experience: '5+ years',
            salary: '₹30-50 LPA',
            description: 'Lead the development of quantum algorithms and work on cutting-edge quantum computing projects.',
            tags: ['Quantum Computing', 'Python', 'Qiskit', 'Research']
        },
        {
            id: 2,
            title: 'Machine Learning Scientist',
            department: 'research',
            location: 'Bangalore, India',
            type: 'Full-time',
            experience: '3+ years',
            salary: '₹25-40 LPA',
            description: 'Design and implement machine learning models for enterprise applications and research initiatives.',
            tags: ['PyTorch', 'TensorFlow', 'Deep Learning', 'NLP']
        },
        {
            id: 3,
            title: 'Full Stack Developer',
            department: 'engineering',
            location: 'Remote',
            type: 'Full-time',
            experience: '2+ years',
            salary: '₹15-25 LPA',
            description: 'Build scalable web applications using modern technologies like React, Node.js, and cloud services.',
            tags: ['React', 'Node.js', 'TypeScript', 'AWS']
        },
        {
            id: 4,
            title: 'UI/UX Designer',
            department: 'design',
            location: 'Bangalore, India',
            type: 'Full-time',
            experience: '3+ years',
            salary: '₹18-28 LPA',
            description: 'Create beautiful, intuitive user experiences for our quantum and AI products.',
            tags: ['Figma', 'Design Systems', 'User Research', 'Prototyping']
        },
        {
            id: 5,
            title: 'Quantum Security Researcher',
            department: 'research',
            location: 'Bangalore, India',
            type: 'Full-time',
            experience: '4+ years',
            salary: '₹28-45 LPA',
            description: 'Research and develop post-quantum cryptographic solutions and security protocols.',
            tags: ['Cryptography', 'Security', 'Research', 'Protocol Design']
        },
        {
            id: 6,
            title: 'DevOps Engineer',
            department: 'engineering',
            location: 'Remote',
            type: 'Full-time',
            experience: '3+ years',
            salary: '₹20-35 LPA',
            description: 'Build and maintain cloud infrastructure and CI/CD pipelines for our quantum platform.',
            tags: ['Kubernetes', 'Docker', 'AWS', 'Terraform']
        },
        {
            id: 7,
            title: 'Content Marketing Manager',
            department: 'marketing',
            location: 'Bangalore, India',
            type: 'Full-time',
            experience: '4+ years',
            salary: '₹15-25 LPA',
            description: 'Lead content strategy and create compelling narratives around quantum technology.',
            tags: ['Content Strategy', 'SEO', 'Technical Writing', 'Analytics']
        },
        {
            id: 8,
            title: 'Operations Manager',
            department: 'operations',
            location: 'Bangalore, India',
            type: 'Full-time',
            experience: '5+ years',
            salary: '₹20-35 LPA',
            description: 'Oversee daily operations and ensure smooth delivery of projects and services.',
            tags: ['Operations', 'Project Management', 'Leadership', 'Agile']
        }
    ];

    const benefits = [
        { icon: <FiHeart />, title: 'Health Insurance', description: 'Comprehensive health coverage for you and your family' },
        { icon: <FiCoffee />, title: 'Free Meals', description: 'Healthy meals and snacks at the office' },
        { icon: <FiMonitor />, title: 'Remote Work', description: 'Flexible work-from-home options' },
        { icon: <FiTrendingUp />, title: 'Learning Budget', description: 'Annual budget for courses and conferences' },
        { icon: <FiUsers />, title: 'Team Events', description: 'Regular team outings and celebrations' },
        { icon: <FiGlobe />, title: 'Global Exposure', description: 'Work on projects with international clients' }
    ];

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDepartment = activeFilter === 'all' || job.department === activeFilter;
        return matchesSearch && matchesDepartment;
    });

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 neural-pattern" />

                <div className="relative container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeUp>
                            <span className="inline-block px-4 py-2 mb-6 text-cyan-400 text-sm font-semibold tracking-wider uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20">
                                Join Our Team
                            </span>
                        </FadeUp>

                        <FadeUp delay={0.1}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-8">
                                Build the{' '}
                                <span className="gradient-text">Future</span>
                                {' '}With Us
                            </h1>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                                Join a team of visionaries, innovators, and problem-solvers who are
                                shaping the future of quantum computing and artificial intelligence.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="relative py-24 bg-dark-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <FadeUp className="text-center mb-16">
                        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                            Why GOKLYN
                        </span>
                        <h2 className="section-title text-white mb-6">
                            Benefits &{' '}
                            <span className="gradient-text">Perks</span>
                        </h2>
                    </FadeUp>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit) => (
                            <StaggerItem key={benefit.title}>
                                <motion.div
                                    className="p-6 glass rounded-2xl h-full"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Job Listings */}
            <section className="relative py-24 md:py-32">
                <div className="absolute inset-0 quantum-grid opacity-20" />

                <div className="relative container mx-auto px-4 md:px-6">
                    <FadeUp className="text-center mb-12">
                        <h2 className="section-title text-white mb-6">
                            Open{' '}
                            <span className="gradient-text">Positions</span>
                        </h2>
                    </FadeUp>

                    {/* Search & Filters */}
                    <div className="flex flex-col md:flex-row gap-4 mb-12">
                        {/* Search */}
                        <div className="relative flex-1">
                            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search positions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-dark-800/50 border border-dark-600 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                            />
                        </div>

                        {/* Department Filters */}
                        <div className="flex flex-wrap gap-2">
                            {departments.map((dept) => (
                                <motion.button
                                    key={dept.id}
                                    onClick={() => setActiveFilter(dept.id)}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeFilter === dept.id
                                            ? 'bg-cyan-500 text-white'
                                            : 'bg-dark-800 text-gray-400 hover:text-white'
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {dept.label}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Job Cards */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter + searchQuery}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6"
                        >
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job, index) => (
                                    <motion.div
                                        key={job.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group glass p-6 md:p-8 rounded-2xl hover:border-cyan-500/30 transition-all"
                                    >
                                        <div className="flex flex-col lg:flex-row gap-6">
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                        {job.title}
                                                    </h3>
                                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 capitalize">
                                                        {job.department}
                                                    </span>
                                                </div>

                                                <p className="text-gray-400 mb-4">{job.description}</p>

                                                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                                    <span className="flex items-center gap-1">
                                                        <FiMapPin className="text-cyan-400" />
                                                        {job.location}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <FiBriefcase className="text-cyan-400" />
                                                        {job.type}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <FiClock className="text-cyan-400" />
                                                        {job.experience}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <FiDollarSign className="text-cyan-400" />
                                                        {job.salary}
                                                    </span>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {job.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-2 py-1 text-xs bg-dark-700 rounded-md text-gray-400"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex lg:flex-col items-end justify-between lg:justify-center gap-4">
                                                <Link to="/contact">
                                                    <Button variant="primary">
                                                        Apply Now
                                                        <FiArrowRight className="ml-2" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="text-center py-16">
                                    <p className="text-gray-400 text-lg">
                                        No positions found matching your criteria.
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Culture Section */}
            <section className="relative py-24 bg-dark-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <SlideIn direction="left">
                            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                                Our Culture
                            </span>
                            <h2 className="section-title text-white mb-6">
                                Innovation is in Our{' '}
                                <span className="gradient-text">DNA</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-6">
                                At GOKLYN, we believe in pushing boundaries, questioning the status quo,
                                and building technology that makes a real difference. We foster a culture
                                of learning, collaboration, and bold experimentation.
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                {[
                                    'Work on cutting-edge quantum and AI projects',
                                    'Learn from world-class scientists and engineers',
                                    'Flexible work environment that values outcomes',
                                    'Regular hackathons and innovation challenges',
                                    'Open communication and flat hierarchy'
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-center gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-cyan-500" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </SlideIn>

                        <SlideIn direction="right">
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    className="aspect-square rounded-2xl overflow-hidden"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400"
                                        alt="Team collaboration"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    className="aspect-square rounded-2xl overflow-hidden mt-8"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400"
                                        alt="Office environment"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    className="aspect-square rounded-2xl overflow-hidden"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400"
                                        alt="Team meeting"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    className="aspect-square rounded-2xl overflow-hidden mt-8"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400"
                                        alt="Presentation"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </div>
                        </SlideIn>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <FadeUp className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Don't See the Right{' '}
                            <span className="gradient-text">Role</span>?
                        </h2>
                        <p className="text-xl text-gray-400 mb-10">
                            We're always looking for talented individuals. Send us your resume
                            and we'll reach out when we have a suitable opportunity.
                        </p>
                        <Link to="/contact">
                            <Button variant="primary" size="large">
                                Send Your Resume
                                <FiArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </div>
    );
}
