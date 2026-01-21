/**
 * Home Page - Quantum AI Landing
 * Premium landing page with Three.js particles and advanced animations
 */

import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    FiArrowRight,
    FiPlay,
    FiZap,
    FiShield,
    FiCpu,
    FiGlobe,
    FiLayers,
    FiTrendingUp,
    FiUsers,
    FiAward
} from 'react-icons/fi';
import { Button } from '../components/ui/Button';
import { ServiceCard, StatsCard } from '../components/ui/Card';
import {
    FadeUp,
    SlideIn,
    StaggerContainer,
    StaggerItem,
    CountUp,
    QuantumReveal
} from '../components/animations/ScrollAnimations';

// Lazy load Three.js component for performance
const QuantumParticles = lazy(() => import('../components/animations/QuantumParticles'));

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    // Services data
    const services = [
        {
            icon: '⚛️',
            title: 'Quantum Computing',
            description: 'Harnessing the power of quantum mechanics to solve complex computational problems exponentially faster.',
            link: '/services#quantum'
        },
        {
            icon: '🤖',
            title: 'Artificial Intelligence',
            description: 'Building intelligent systems that learn, adapt, and transform your business operations.',
            link: '/services#ai'
        },
        {
            icon: '🔒',
            title: 'Cybersecurity',
            description: 'Quantum-resistant encryption and advanced security protocols to protect your digital assets.',
            link: '/services#security'
        },
        {
            icon: '💻',
            title: 'Web Development',
            description: 'Creating stunning, high-performance web applications with cutting-edge technologies.',
            link: '/services#web'
        }
    ];

    // Stats data
    const stats = [
        { value: 150, suffix: '+', label: 'Projects Delivered', icon: <FiLayers /> },
        { value: 50, suffix: '+', label: 'Happy Clients', icon: <FiUsers /> },
        { value: 15, suffix: '+', label: 'Team Experts', icon: <FiAward /> },
        { value: 98, suffix: '%', label: 'Success Rate', icon: <FiTrendingUp /> }
    ];

    // Features for innovation section
    const features = [
        {
            icon: <FiZap />,
            title: 'Lightning Fast Performance',
            description: 'Quantum-enhanced algorithms for unprecedented speed'
        },
        {
            icon: <FiShield />,
            title: 'Enterprise Security',
            description: 'Military-grade encryption and secure infrastructure'
        },
        {
            icon: <FiCpu />,
            title: 'AI-Powered Solutions',
            description: 'Machine learning that evolves with your needs'
        },
        {
            icon: <FiGlobe />,
            title: 'Global Scalability',
            description: 'Infrastructure that grows with your business'
        }
    ];

    useEffect(() => {
        // GSAP animations for hero text
        const ctx = gsap.context(() => {
            gsap.from('.hero-word', {
                duration: 1,
                y: 100,
                opacity: 0,
                stagger: 0.1,
                ease: 'power4.out',
                delay: 0.5
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <motion.section
                ref={heroRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
                style={{ opacity: heroOpacity, scale: heroScale }}
            >
                {/* Three.js Quantum Particles Background */}
                <Suspense fallback={
                    <div className="absolute inset-0 bg-dark-950" />
                }>
                    <QuantumParticles />
                </Suspense>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 via-transparent to-dark-950" />
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark-950/80" />

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-4 md:px-6 py-32">
                    <div className="max-w-5xl mx-auto text-center">
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-cyan-500/10 border border-cyan-500/20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                            </span>
                            <span className="text-cyan-400 text-sm font-medium">
                                Pioneering the Future of Technology
                            </span>
                        </motion.div>

                        {/* Main Headline */}
                        <h1 className="text-hero font-bold font-display leading-tight mb-8">
                            <span className="hero-word inline-block text-white">Building </span>
                            <span className="hero-word inline-block text-white">the </span>
                            <br className="hidden md:block" />
                            <span className="hero-word inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 animate-gradient bg-[length:200%_auto]">
                                Quantum Future
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <motion.p
                            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            We combine quantum computing, artificial intelligence, and cutting-edge
                            engineering to create technology solutions that define tomorrow.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <Link to="/contact">
                                <Button variant="primary" size="large">
                                    <span>Start Your Project</span>
                                    <FiArrowRight className="ml-2" />
                                </Button>
                            </Link>
                            <Button variant="secondary" size="large">
                                <FiPlay className="mr-2" />
                                <span>Watch Demo</span>
                            </Button>
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            className="absolute bottom-10 left-1/2 -translate-x-1/2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                        >
                            <motion.div
                                className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <motion.div className="w-1.5 h-2.5 bg-cyan-400 rounded-full" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <section className="relative py-20 bg-dark-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <StaggerItem key={stat.label}>
                                <div className="text-center p-6 glass rounded-2xl">
                                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                        {stat.icon}
                                    </div>
                                    <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                                        <CountUp end={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <p className="text-gray-400">{stat.label}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Services Section */}
            <section className="relative py-24 md:py-32">
                {/* Background Pattern */}
                <div className="absolute inset-0 quantum-grid opacity-30" />

                <div className="relative container mx-auto px-4 md:px-6">
                    {/* Section Header */}
                    <FadeUp className="text-center mb-16">
                        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                            What We Do
                        </span>
                        <h2 className="section-title text-white mb-6">
                            Services That{' '}
                            <span className="gradient-text">Transform</span>
                        </h2>
                        <p className="section-subtitle mx-auto">
                            From quantum computing to AI-driven solutions, we offer comprehensive
                            technology services to accelerate your digital transformation.
                        </p>
                    </FadeUp>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.title}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                link={service.link}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* View All Link */}
                    <FadeUp className="text-center mt-12">
                        <Link to="/services">
                            <Button variant="secondary">
                                Explore All Services
                                <FiArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </FadeUp>
                </div>
            </section>

            {/* Innovation Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                {/* Background Gradient */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.05) 0%, transparent 70%)'
                    }}
                />

                <div className="relative container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <SlideIn direction="left">
                            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                                Why Choose Us
                            </span>
                            <h2 className="section-title text-white mb-6">
                                Innovation at the{' '}
                                <span className="gradient-text">Speed of Light</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                We don't just follow technology trends—we create them. Our team of
                                world-class engineers and researchers pushes the boundaries of what's
                                possible, delivering solutions that give you a competitive edge.
                            </p>

                            {/* Features List */}
                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        className="flex items-start gap-4 p-4 rounded-xl bg-dark-800/30 border border-white/5 hover:border-cyan-500/20 transition-all"
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-1">
                                                {feature.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </SlideIn>

                        {/* Right - Visual */}
                        <SlideIn direction="right" className="relative">
                            <div className="relative aspect-square max-w-lg mx-auto">
                                {/* Outer Ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-cyan-500/20"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                />

                                {/* Middle Ring */}
                                <motion.div
                                    className="absolute inset-8 rounded-full border-2 border-violet-500/20"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                                />

                                {/* Inner Ring */}
                                <motion.div
                                    className="absolute inset-16 rounded-full border-2 border-cyan-500/30"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                                />

                                {/* Center Glow */}
                                <div
                                    className="absolute inset-24 rounded-full"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)',
                                    }}
                                />

                                {/* Floating Nodes */}
                                {[0, 1, 2, 3, 4, 5].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-4 h-4 rounded-full bg-cyan-400"
                                        style={{
                                            top: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
                                            left: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
                                            boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)'
                                        }}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.5, 1, 0.5]
                                        }}
                                        transition={{
                                            duration: 2,
                                            delay: i * 0.3,
                                            repeat: Infinity
                                        }}
                                    />
                                ))}

                                {/* Center Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        style={{
                                            boxShadow: '0 0 60px rgba(0, 212, 255, 0.4)'
                                        }}
                                    >
                                        <FiCpu className="w-12 h-12 text-white" />
                                    </motion.div>
                                </div>
                            </div>
                        </SlideIn>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <QuantumReveal>
                        <div
                            className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
                            style={{
                                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            {/* Background Effects */}
                            <div
                                className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-30"
                                style={{
                                    background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)',
                                    filter: 'blur(60px)'
                                }}
                            />
                            <div
                                className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-30"
                                style={{
                                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                                    filter: 'blur(60px)'
                                }}
                            />

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                    Ready to{' '}
                                    <span className="gradient-text">Transform</span>
                                    {' '}Your Business?
                                </h2>
                                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                                    Let's discuss how our quantum-powered solutions can accelerate
                                    your growth and drive innovation.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link to="/contact">
                                        <Button variant="primary" size="large">
                                            Get in Touch
                                            <FiArrowRight className="ml-2" />
                                        </Button>
                                    </Link>
                                    <Link to="/projects">
                                        <Button variant="secondary" size="large">
                                            View Our Work
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </QuantumReveal>
                </div>
            </section>
        </div>
    );
}
