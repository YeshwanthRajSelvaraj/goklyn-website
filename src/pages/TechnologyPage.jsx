/**
 * Technology Page - Quantum + AI Architecture Visualization
 * Interactive 3D diagrams and technology showcase
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiCpu,
    FiZap,
    FiLayers,
    FiGrid,
    FiBox,
    FiDatabase,
    FiCloud,
    FiLock,
    FiActivity,
    FiServer
} from 'react-icons/fi';
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from '../components/animations/ScrollAnimations';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function TechnologyPage() {
    const [activeTab, setActiveTab] = useState('quantum');

    const techTabs = [
        { id: 'quantum', label: 'Quantum Computing', icon: <FiCpu /> },
        { id: 'ai', label: 'AI/ML Stack', icon: <FiZap /> },
        { id: 'infrastructure', label: 'Infrastructure', icon: <FiCloud /> }
    ];

    const quantumLayers = [
        {
            name: 'Quantum Applications',
            color: 'from-cyan-500 to-cyan-400',
            items: ['Optimization', 'Simulation', 'Cryptography', 'Machine Learning']
        },
        {
            name: 'Quantum Algorithms',
            color: 'from-violet-500 to-violet-400',
            items: ['VQE', 'QAOA', 'Grover', 'Shor', 'QFT']
        },
        {
            name: 'Quantum Middleware',
            color: 'from-blue-500 to-blue-400',
            items: ['Error Correction', 'Gate Compilation', 'Circuit Optimization']
        },
        {
            name: 'Quantum Hardware',
            color: 'from-pink-500 to-pink-400',
            items: ['Superconducting', 'Trapped Ion', 'Photonic', 'Neutral Atom']
        }
    ];

    const aiLayers = [
        {
            name: 'AI Applications',
            color: 'from-violet-500 to-violet-400',
            items: ['NLP', 'Computer Vision', 'Recommendation', 'Autonomous Systems']
        },
        {
            name: 'Model Development',
            color: 'from-cyan-500 to-cyan-400',
            items: ['PyTorch', 'TensorFlow', 'JAX', 'Hugging Face']
        },
        {
            name: 'MLOps Pipeline',
            color: 'from-green-500 to-green-400',
            items: ['Training', 'Validation', 'Deployment', 'Monitoring']
        },
        {
            name: 'Data Infrastructure',
            color: 'from-orange-500 to-orange-400',
            items: ['Data Lakes', 'Feature Store', 'Vector DB', 'Streaming']
        }
    ];

    const infrastructureLayers = [
        {
            name: 'Edge & CDN',
            color: 'from-cyan-500 to-cyan-400',
            items: ['Global CDN', 'Edge Computing', 'Load Balancing']
        },
        {
            name: 'Application Layer',
            color: 'from-violet-500 to-violet-400',
            items: ['Microservices', 'APIs', 'Serverless']
        },
        {
            name: 'Data Layer',
            color: 'from-blue-500 to-blue-400',
            items: ['SQL', 'NoSQL', 'Cache', 'Search']
        },
        {
            name: 'Cloud Platform',
            color: 'from-green-500 to-green-400',
            items: ['AWS', 'GCP', 'Azure', 'Kubernetes']
        }
    ];

    const techStats = [
        { icon: <FiGrid />, value: '1000+', label: 'Qubits Simulated' },
        { icon: <FiDatabase />, value: '50TB+', label: 'Data Processed' },
        { icon: <FiActivity />, value: '99.9%', label: 'Uptime SLA' },
        { icon: <FiServer />, value: '100+', label: 'Global Servers' }
    ];

    const researchAreas = [
        {
            icon: <FiCpu />,
            title: 'Quantum Error Correction',
            description: 'Developing novel error correction codes to enable fault-tolerant quantum computing at scale.',
            progress: 75
        },
        {
            icon: <FiZap />,
            title: 'Quantum Machine Learning',
            description: 'Exploring quantum advantages in machine learning for exponential speedups.',
            progress: 60
        },
        {
            icon: <FiLock />,
            title: 'Post-Quantum Cryptography',
            description: 'Building cryptographic systems resistant to quantum computer attacks.',
            progress: 85
        },
        {
            icon: <FiLayers />,
            title: 'Hybrid Quantum-Classical',
            description: 'Optimizing the interface between quantum and classical systems.',
            progress: 70
        }
    ];

    const getCurrentLayers = () => {
        switch (activeTab) {
            case 'ai': return aiLayers;
            case 'infrastructure': return infrastructureLayers;
            default: return quantumLayers;
        }
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 neural-pattern" />

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-cyan-500/30"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                            animate={{
                                opacity: [0.3, 0.8, 0.3],
                                scale: [1, 1.5, 1]
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                        />
                    ))}
                </div>

                <div className="relative container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeUp>
                            <span className="inline-block px-4 py-2 mb-6 text-cyan-400 text-sm font-semibold tracking-wider uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20">
                                Our Technology
                            </span>
                        </FadeUp>

                        <FadeUp delay={0.1}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-8">
                                The{' '}
                                <span className="gradient-text">Tech Stack</span>
                                {' '}Behind the Magic
                            </h1>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                                Explore the cutting-edge technologies and architectures that power
                                our quantum and AI solutions.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Tech Stats */}
            <section className="relative py-16 bg-dark-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {techStats.map((stat) => (
                            <StaggerItem key={stat.label}>
                                <div className="text-center p-6 glass rounded-2xl">
                                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                        {stat.value}
                                    </div>
                                    <p className="text-gray-400 text-sm">{stat.label}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Architecture Visualization */}
            <section className="relative py-24 md:py-32">
                <div className="absolute inset-0 quantum-grid opacity-20" />

                <div className="relative container mx-auto px-4 md:px-6">
                    <FadeUp className="text-center mb-12">
                        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                            Architecture
                        </span>
                        <h2 className="section-title text-white mb-6">
                            Technology{' '}
                            <span className="gradient-text">Stack</span>
                        </h2>
                    </FadeUp>

                    {/* Tab Selector */}
                    <div className="flex justify-center gap-4 mb-12">
                        {techTabs.map((tab) => (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${activeTab === tab.id
                                        ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white'
                                        : 'bg-dark-800 text-gray-400 hover:text-white'
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {tab.icon}
                                <span className="hidden md:inline">{tab.label}</span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Stack Visualization */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="relative">
                                {/* Connecting Lines */}
                                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-violet-500 to-pink-500 opacity-30" />

                                {/* Layers */}
                                <div className="space-y-6">
                                    {getCurrentLayers().map((layer, index) => (
                                        <motion.div
                                            key={layer.name}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`relative ${index % 2 === 0 ? 'md:mr-[20%]' : 'md:ml-[20%]'}`}
                                        >
                                            <div className="glass p-6 rounded-2xl">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center`}>
                                                        <FiLayers className="w-6 h-6 text-white" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white">{layer.name}</h3>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {layer.items.map((item) => (
                                                        <motion.span
                                                            key={item}
                                                            className="px-3 py-1 text-sm bg-dark-700 rounded-lg text-gray-300"
                                                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 212, 255, 0.1)' }}
                                                        >
                                                            {item}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Connector Dot */}
                                            <div
                                                className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${layer.color} ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                                                    }`}
                                                style={{ boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' }}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Research & Development */}
            <section className="relative py-24 bg-dark-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <FadeUp className="text-center mb-16">
                        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                            R&D Focus
                        </span>
                        <h2 className="section-title text-white mb-6">
                            Active{' '}
                            <span className="gradient-text">Research</span>
                        </h2>
                        <p className="section-subtitle mx-auto">
                            Pushing the boundaries of what's possible in quantum computing and AI.
                        </p>
                    </FadeUp>

                    <div className="grid md:grid-cols-2 gap-8">
                        {researchAreas.map((area, index) => (
                            <motion.div
                                key={area.title}
                                className="glass p-8 rounded-2xl"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                                        {area.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                                        <p className="text-gray-400 mb-4">{area.description}</p>

                                        {/* Progress Bar */}
                                        <div className="relative">
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-gray-400">Research Progress</span>
                                                <span className="text-cyan-400">{area.progress}%</span>
                                            </div>
                                            <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${area.progress}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners & Integrations */}
            <section className="relative py-24 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <FadeUp className="text-center mb-16">
                        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                            Ecosystem
                        </span>
                        <h2 className="section-title text-white mb-6">
                            Technology{' '}
                            <span className="gradient-text">Partners</span>
                        </h2>
                    </FadeUp>

                    {/* Partner Logos Placeholder */}
                    <div className="flex flex-wrap justify-center items-center gap-12">
                        {['IBM', 'Google', 'Microsoft', 'AWS', 'NVIDIA', 'Intel'].map((partner) => (
                            <motion.div
                                key={partner}
                                className="px-8 py-4 glass rounded-xl text-2xl font-bold text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer"
                                whileHover={{ scale: 1.1 }}
                            >
                                {partner}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 bg-dark-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <FadeUp className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Want to Learn More About Our{' '}
                            <span className="gradient-text">Technology</span>?
                        </h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Our team of experts is ready to discuss how our technology stack
                            can solve your unique challenges.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact">
                                <Button variant="primary" size="large">
                                    Talk to an Expert
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="secondary" size="large">
                                    View Services
                                </Button>
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </div>
    );
}
