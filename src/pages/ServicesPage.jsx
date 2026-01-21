/**
 * Services Page - Technology Solutions
 * Quantum + AI architecture visualization with interactive diagrams
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FiCpu,
    FiZap,
    FiShield,
    FiCode,
    FiDatabase,
    FiCloud,
    FiSmartphone,
    FiLayers,
    FiArrowRight,
    FiCheck,
    FiX
} from 'react-icons/fi';
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from '../components/animations/ScrollAnimations';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export default function ServicesPage() {
    const [activeService, setActiveService] = useState(0);

    // Main services
    const services = [
        {
            id: 'quantum',
            icon: <FiCpu className="w-8 h-8" />,
            title: 'Quantum Computing',
            subtitle: 'Next-Generation Computation',
            description: 'Harness the unprecedented power of quantum mechanics to solve complex problems that classical computers cannot handle.',
            color: 'cyan',
            features: [
                'Quantum Algorithm Development',
                'Optimization Solutions',
                'Quantum Machine Learning',
                'Quantum Simulation',
                'Error Correction Systems',
                'Hybrid Quantum-Classical Computing'
            ],
            useCases: [
                'Financial portfolio optimization',
                'Drug discovery acceleration',
                'Supply chain logistics',
                'Climate modeling'
            ]
        },
        {
            id: 'ai',
            icon: <FiZap className="w-8 h-8" />,
            title: 'AI & Machine Learning',
            subtitle: 'Intelligent Systems',
            description: 'Build intelligent systems that learn, adapt, and evolve to transform your business operations and decision-making.',
            color: 'violet',
            features: [
                'Deep Learning Models',
                'Natural Language Processing',
                'Computer Vision',
                'Predictive Analytics',
                'Recommendation Engines',
                'Autonomous Systems'
            ],
            useCases: [
                'Customer behavior prediction',
                'Automated quality control',
                'Fraud detection',
                'Personalized experiences'
            ]
        },
        {
            id: 'security',
            icon: <FiShield className="w-8 h-8" />,
            title: 'Cybersecurity',
            subtitle: 'Quantum-Safe Protection',
            description: 'Protect your digital assets with quantum-resistant encryption and advanced security protocols built for the future.',
            color: 'pink',
            features: [
                'Post-Quantum Cryptography',
                'Zero Trust Architecture',
                'Threat Intelligence',
                'Penetration Testing',
                'Security Audits',
                'Incident Response'
            ],
            useCases: [
                'Financial data protection',
                'Healthcare compliance',
                'Government security',
                'Critical infrastructure'
            ]
        },
        {
            id: 'web',
            icon: <FiCode className="w-8 h-8" />,
            title: 'Web Development',
            subtitle: 'Digital Experiences',
            description: 'Create stunning, high-performance web applications with cutting-edge technologies and exceptional user experiences.',
            color: 'blue',
            features: [
                'Custom Web Applications',
                'Progressive Web Apps',
                'E-commerce Platforms',
                'API Development',
                'Cloud-Native Solutions',
                'Performance Optimization'
            ],
            useCases: [
                'Enterprise portals',
                'SaaS platforms',
                'Digital marketplaces',
                'Content management'
            ]
        },
        {
            id: 'cloud',
            icon: <FiCloud className="w-8 h-8" />,
            title: 'Cloud Solutions',
            subtitle: 'Scalable Infrastructure',
            description: 'Design and deploy scalable cloud infrastructure that grows with your business needs.',
            color: 'green',
            features: [
                'Cloud Architecture Design',
                'Migration Services',
                'Multi-Cloud Strategy',
                'Serverless Computing',
                'Container Orchestration',
                'DevOps Automation'
            ],
            useCases: [
                'Legacy modernization',
                'Auto-scaling applications',
                'Disaster recovery',
                'Global deployment'
            ]
        },
        {
            id: 'mobile',
            icon: <FiSmartphone className="w-8 h-8" />,
            title: 'Mobile Development',
            subtitle: 'Cross-Platform Apps',
            description: 'Build beautiful, performant mobile applications that work seamlessly across all devices.',
            color: 'orange',
            features: [
                'iOS Development',
                'Android Development',
                'Cross-Platform Solutions',
                'Mobile UI/UX Design',
                'App Store Optimization',
                'Push Notifications'
            ],
            useCases: [
                'Consumer apps',
                'Enterprise mobility',
                'IoT dashboards',
                'Healthcare apps'
            ]
        }
    ];

    // Pricing tiers
    const pricingTiers = [
        {
            name: 'Starter',
            price: 'Custom',
            description: 'Perfect for startups and small projects',
            features: [
                'Initial consultation',
                'Project scoping',
                'Basic implementation',
                'Standard support',
                'Documentation'
            ],
            notIncluded: [
                'Advanced analytics',
                '24/7 support',
                'Custom integrations'
            ],
            cta: 'Get Started',
            popular: false
        },
        {
            name: 'Professional',
            price: 'Custom',
            description: 'For growing businesses with complex needs',
            features: [
                'Everything in Starter',
                'Advanced implementation',
                'Custom integrations',
                'Priority support',
                'Training sessions',
                'Performance optimization'
            ],
            notIncluded: [
                '24/7 support'
            ],
            cta: 'Contact Sales',
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'Full-scale solutions for large organizations',
            features: [
                'Everything in Professional',
                'Dedicated team',
                '24/7 premium support',
                'SLA guarantees',
                'Custom development',
                'Executive reporting',
                'On-site consulting'
            ],
            notIncluded: [],
            cta: 'Talk to Us',
            popular: false
        }
    ];

    const activeServiceData = services[activeService];
    const colorClasses = {
        cyan: 'from-cyan-500 to-cyan-400',
        violet: 'from-violet-500 to-violet-400',
        pink: 'from-pink-500 to-pink-400',
        blue: 'from-blue-500 to-blue-400',
        green: 'from-green-500 to-green-400',
        orange: 'from-orange-500 to-orange-400'
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 neural-pattern" />

                <div className="relative container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeUp>
                            <span className="inline-block px-4 py-2 mb-6 text-cyan-400 text-sm font-semibold tracking-wider uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20">
                                Our Services
                            </span>
                        </FadeUp>

                        <FadeUp delay={0.1}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-8">
                                Technology{' '}
                                <span className="gradient-text">Solutions</span>
                            </h1>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                                From quantum computing to AI-driven insights, we offer comprehensive
                                technology services designed to propel your business into the future.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Interactive Services Section */}
            <section className="relative py-24 bg-dark-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Service Selector */}
                        <div className="lg:col-span-1">
                            <h3 className="text-xl font-bold text-white mb-6">Our Expertise</h3>
                            <div className="space-y-3">
                                {services.map((service, index) => (
                                    <motion.button
                                        key={service.id}
                                        onClick={() => setActiveService(index)}
                                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${activeService === index
                                                ? 'bg-dark-800 border border-cyan-500/30'
                                                : 'bg-dark-800/30 border border-white/5 hover:border-white/10'
                                            }`}
                                        whileHover={{ x: activeService === index ? 0 : 5 }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeService === index
                                                    ? `bg-gradient-to-br ${colorClasses[service.color]} text-white`
                                                    : 'bg-dark-700 text-gray-400'
                                                }`}>
                                                {service.icon}
                                            </div>
                                            <div>
                                                <h4 className={`font-semibold ${activeService === index ? 'text-white' : 'text-gray-300'
                                                    }`}>
                                                    {service.title}
                                                </h4>
                                                <p className="text-sm text-gray-500">{service.subtitle}</p>
                                            </div>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Service Details */}
                        <div className="lg:col-span-2">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="glass p-8 md:p-12 rounded-3xl"
                                >
                                    {/* Header */}
                                    <div className="flex items-start gap-6 mb-8">
                                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${colorClasses[activeServiceData.color]} text-white`}>
                                            {activeServiceData.icon}
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white mb-2">
                                                {activeServiceData.title}
                                            </h2>
                                            <p className="text-gray-400 text-lg">
                                                {activeServiceData.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Features & Use Cases */}
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Features */}
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-4">
                                                Key Capabilities
                                            </h4>
                                            <ul className="space-y-3">
                                                {activeServiceData.features.map((feature, index) => (
                                                    <motion.li
                                                        key={feature}
                                                        className="flex items-center gap-3 text-gray-300"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.05 }}
                                                    >
                                                        <FiCheck className="text-cyan-400 flex-shrink-0" />
                                                        {feature}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Use Cases */}
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-4">
                                                Use Cases
                                            </h4>
                                            <div className="space-y-3">
                                                {activeServiceData.useCases.map((useCase, index) => (
                                                    <motion.div
                                                        key={useCase}
                                                        className="p-4 rounded-xl bg-dark-800/50 border border-white/5"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.05 }}
                                                    >
                                                        <span className="text-gray-300">{useCase}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-8 pt-8 border-t border-white/5">
                                        <Link to="/contact">
                                            <Button variant="primary">
                                                Discuss Your Project
                                                <FiArrowRight className="ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="relative py-24 md:py-32">
                <div className="absolute inset-0 quantum-grid opacity-20" />

                <div className="relative container mx-auto px-4 md:px-6">
                    <FadeUp className="text-center mb-16">
                        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                            How We Work
                        </span>
                        <h2 className="section-title text-white mb-6">
                            Our{' '}
                            <span className="gradient-text">Process</span>
                        </h2>
                    </FadeUp>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Discovery', description: 'We analyze your needs, challenges, and goals to understand your unique requirements.' },
                            { step: '02', title: 'Strategy', description: 'Our experts design a tailored solution architecture and implementation roadmap.' },
                            { step: '03', title: 'Development', description: 'We build and iterate rapidly, keeping you informed at every stage.' },
                            { step: '04', title: 'Deployment', description: 'We launch, optimize, and provide ongoing support to ensure success.' }
                        ].map((item, index) => (
                            <FadeUp key={item.step} delay={index * 0.1}>
                                <div className="relative text-center">
                                    {/* Connector Line */}
                                    {index < 3 && (
                                        <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-cyan-500 to-violet-500 opacity-30" />
                                    )}

                                    <motion.div
                                        className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        <span className="text-xl font-bold text-white">{item.step}</span>
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="relative py-24 bg-dark-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <FadeUp className="text-center mb-16">
                        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                            Engagement Models
                        </span>
                        <h2 className="section-title text-white mb-6">
                            Flexible{' '}
                            <span className="gradient-text">Pricing</span>
                        </h2>
                        <p className="section-subtitle mx-auto">
                            Choose the engagement model that best fits your project needs and budget.
                        </p>
                    </FadeUp>

                    <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {pricingTiers.map((tier) => (
                            <StaggerItem key={tier.name}>
                                <motion.div
                                    className={`relative p-8 rounded-3xl h-full flex flex-col ${tier.popular
                                            ? 'bg-gradient-to-b from-cyan-500/10 to-dark-900 border-2 border-cyan-500/30'
                                            : 'glass'
                                        }`}
                                    whileHover={{ y: -10 }}
                                >
                                    {tier.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full text-sm font-semibold text-white">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                                        <div className="text-4xl font-bold gradient-text mb-2">{tier.price}</div>
                                        <p className="text-gray-400 text-sm">{tier.description}</p>
                                    </div>

                                    <ul className="space-y-4 mb-8 flex-1">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <FiCheck className="text-cyan-400 mt-1 flex-shrink-0" />
                                                <span className="text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                        {tier.notIncluded.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 opacity-50">
                                                <FiX className="text-gray-500 mt-1 flex-shrink-0" />
                                                <span className="text-gray-500">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link to="/contact">
                                        <Button
                                            variant={tier.popular ? 'primary' : 'secondary'}
                                            className="w-full"
                                        >
                                            {tier.cta}
                                        </Button>
                                    </Link>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <FadeUp>
                        <div className="relative text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Ready to Start Your{' '}
                                <span className="gradient-text">Project</span>?
                            </h2>
                            <p className="text-xl text-gray-400 mb-10">
                                Let's discuss how we can help transform your ideas into reality
                                with our cutting-edge technology solutions.
                            </p>
                            <Link to="/contact">
                                <Button variant="primary" size="large">
                                    Schedule a Consultation
                                    <FiArrowRight className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </div>
    );
}
