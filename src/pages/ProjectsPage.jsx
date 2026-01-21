/**
 * Projects Page - Portfolio Showcase
 * Card-based layout with hover intelligence and animated reveal
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FiExternalLink,
    FiGithub,
    FiArrowRight,
    FiFilter,
    FiGrid,
    FiList
} from 'react-icons/fi';
import { FadeUp, StaggerContainer, StaggerItem } from '../components/animations/ScrollAnimations';
import { Button } from '../components/ui/Button';

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [viewMode, setViewMode] = useState('grid');

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'quantum', label: 'Quantum Computing' },
        { id: 'ai', label: 'AI & ML' },
        { id: 'security', label: 'Cybersecurity' },
        { id: 'web', label: 'Web Development' }
    ];

    const projects = [
        {
            id: 1,
            title: 'Quantum Portfolio Optimizer',
            category: 'quantum',
            description: 'A quantum-enhanced portfolio optimization system that processes 10,000+ assets in seconds, achieving 40% better risk-adjusted returns.',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
            tags: ['Quantum Annealing', 'Finance', 'Optimization'],
            client: 'Global Investment Bank',
            results: '40% improvement in Sharpe ratio',
            featured: true
        },
        {
            id: 2,
            title: 'Neural Drug Discovery Platform',
            category: 'ai',
            description: 'AI-powered drug discovery platform that reduced compound screening time by 90% using deep learning and molecular simulation.',
            image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800',
            tags: ['Deep Learning', 'Healthcare', 'Drug Discovery'],
            client: 'Pharmaceutical Company',
            results: '90% faster compound screening',
            featured: true
        },
        {
            id: 3,
            title: 'Quantum-Safe Messaging',
            category: 'security',
            description: 'End-to-end encrypted messaging platform using post-quantum cryptography, securing communications against future quantum threats.',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
            tags: ['Post-Quantum Crypto', 'Messaging', 'Security'],
            client: 'Government Agency',
            results: 'Zero security breaches',
            featured: true
        },
        {
            id: 4,
            title: 'AI Customer Intelligence Hub',
            category: 'ai',
            description: 'Real-time customer behavior analytics platform processing 50M+ events daily with predictive recommendations.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
            tags: ['Machine Learning', 'Analytics', 'Retail'],
            client: 'E-commerce Leader',
            results: '25% increase in conversions',
            featured: false
        },
        {
            id: 5,
            title: 'Quantum Climate Modeling',
            category: 'quantum',
            description: 'High-resolution climate simulation using quantum computing to model complex atmospheric interactions.',
            image: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800',
            tags: ['Quantum Simulation', 'Climate', 'Research'],
            client: 'Environmental Research Institute',
            results: '100x faster weather predictions',
            featured: false
        },
        {
            id: 6,
            title: 'Smart Contract Auditor',
            category: 'security',
            description: 'AI-powered smart contract analysis tool that detected 50+ vulnerabilities in DeFi protocols.',
            image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
            tags: ['AI Security', 'Blockchain', 'Audit'],
            client: 'DeFi Protocol',
            results: '50+ vulnerabilities detected',
            featured: false
        },
        {
            id: 7,
            title: 'Enterprise SaaS Platform',
            category: 'web',
            description: 'Cloud-native enterprise platform serving 1M+ users with real-time collaboration and AI-powered insights.',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
            tags: ['React', 'Node.js', 'Cloud'],
            client: 'Tech Startup',
            results: '1M+ active users',
            featured: false
        },
        {
            id: 8,
            title: 'Autonomous Trading System',
            category: 'ai',
            description: 'AI-driven trading system with quantum-enhanced prediction models for cryptocurrency markets.',
            image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800',
            tags: ['Reinforcement Learning', 'Trading', 'Finance'],
            client: 'Crypto Fund',
            results: '35% annual returns',
            featured: false
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    const featuredProjects = projects.filter(p => p.featured);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 neural-pattern" />

                <div className="relative container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeUp>
                            <span className="inline-block px-4 py-2 mb-6 text-cyan-400 text-sm font-semibold tracking-wider uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20">
                                Our Work
                            </span>
                        </FadeUp>

                        <FadeUp delay={0.1}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-8">
                                Featured{' '}
                                <span className="gradient-text">Projects</span>
                            </h1>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                                Explore how we've helped leading organizations transform their
                                businesses with quantum computing and AI solutions.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="relative py-16 bg-dark-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <FadeUp className="mb-12">
                        <h2 className="text-3xl font-bold text-white">Highlighted Case Studies</h2>
                    </FadeUp>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="group relative overflow-hidden rounded-3xl bg-dark-900"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />

                                    {/* Featured Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-full">
                                            Featured
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="text-sm text-cyan-400 mb-2">{project.client}</div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Result Highlight */}
                                    <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 mb-4">
                                        <div className="text-sm text-gray-400">Key Result</div>
                                        <div className="text-lg font-semibold text-cyan-400">{project.results}</div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs bg-dark-700 rounded-md text-gray-400"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Projects */}
            <section className="relative py-24 md:py-32">
                <div className="absolute inset-0 quantum-grid opacity-20" />

                <div className="relative container mx-auto px-4 md:px-6">
                    {/* Header with Filters */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                        <h2 className="text-3xl font-bold text-white">All Projects</h2>

                        <div className="flex items-center gap-4">
                            {/* Filter Pills */}
                            <div className="flex flex-wrap gap-2">
                                {filters.map((filter) => (
                                    <motion.button
                                        key={filter.id}
                                        onClick={() => setActiveFilter(filter.id)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter.id
                                                ? 'bg-cyan-500 text-white'
                                                : 'bg-dark-800 text-gray-400 hover:text-white'
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {filter.label}
                                    </motion.button>
                                ))}
                            </div>

                            {/* View Toggle */}
                            <div className="hidden md:flex items-center gap-2 ml-4 border-l border-dark-700 pl-4">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-dark-700 text-cyan-400' : 'text-gray-500'}`}
                                >
                                    <FiGrid />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-dark-700 text-cyan-400' : 'text-gray-500'}`}
                                >
                                    <FiList />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className={viewMode === 'grid'
                                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                                : 'space-y-6'
                            }
                        >
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`group ${viewMode === 'list' ? 'glass p-6 rounded-2xl flex gap-8' : ''
                                        }`}
                                >
                                    {viewMode === 'grid' ? (
                                        // Grid Card
                                        <div className="relative overflow-hidden rounded-2xl bg-dark-900 border border-white/5 hover:border-cyan-500/30 transition-all">
                                            <div className="relative aspect-video overflow-hidden">
                                                <motion.img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.6 }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60" />

                                                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-dark-800/90 text-cyan-400 border border-cyan-500/30 capitalize">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                                    {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.tags.slice(0, 3).map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-2 py-1 text-xs bg-dark-700 rounded-md text-gray-400"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <motion.a
                                                    href="#"
                                                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                                                    whileHover={{ x: 5 }}
                                                >
                                                    View Case Study
                                                    <FiArrowRight />
                                                </motion.a>
                                            </div>
                                        </div>
                                    ) : (
                                        // List View
                                        <>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-48 h-32 object-cover rounded-xl flex-shrink-0"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 capitalize">
                                                        {project.category}
                                                    </span>
                                                    <span className="text-gray-500 text-sm">{project.client}</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-cyan-400 font-medium">{project.results}</span>
                                                    <motion.a
                                                        href="#"
                                                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm"
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        View Details
                                                        <FiArrowRight />
                                                    </motion.a>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-400 text-lg">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 bg-dark-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <FadeUp className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Have a Project in{' '}
                            <span className="gradient-text">Mind</span>?
                        </h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Let's discuss how we can bring your vision to life with our
                            cutting-edge technology solutions.
                        </p>
                        <Link to="/contact">
                            <Button variant="primary" size="large">
                                Start Your Project
                                <FiArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </div>
    );
}
