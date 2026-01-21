/**
 * About Page - Vision & Story
 * Futuristic storytelling with neural flow timeline
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
    FiTarget,
    FiEye,
    FiHeart,
    FiUsers,
    FiLinkedin,
    FiTwitter,
    FiGithub
} from 'react-icons/fi';
import { FadeUp, SlideIn, StaggerContainer, StaggerItem, CountUp } from '../components/animations/ScrollAnimations';
import { Button } from '../components/ui/Button';
import { TeamCard } from '../components/ui/Card';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    // Timeline data
    const timeline = [
        {
            year: '2020',
            title: 'The Spark',
            description: 'GOKLYN was founded with a vision to bridge the gap between quantum computing research and practical business applications.'
        },
        {
            year: '2021',
            title: 'First Quantum Prototype',
            description: 'Developed our first quantum-enhanced algorithm for optimization problems, achieving 10x faster results than classical approaches.'
        },
        {
            year: '2022',
            title: 'AI Integration',
            description: 'Launched our AI division, combining machine learning with quantum computing for unprecedented problem-solving capabilities.'
        },
        {
            year: '2023',
            title: 'Global Expansion',
            description: 'Expanded operations globally, partnering with Fortune 500 companies and leading research institutions.'
        },
        {
            year: '2024',
            title: 'Quantum Cloud Launch',
            description: 'Introduced our Quantum-as-a-Service platform, making quantum computing accessible to businesses of all sizes.'
        },
        {
            year: '2025',
            title: 'The Future',
            description: 'Continuing to push the boundaries of what\'s possible, with breakthrough research in quantum AI and cryptography.'
        }
    ];

    // Team members
    const team = [
        {
            name: 'Harsh Saini',
            role: 'Team Member',
            bio: 'A passionate student contributing to cutting-edge projects at GOKLYN Technologies.',
            image: '/images/team/harsh-saini.jpg',
            socials: [
                { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/harsh-saini-26957424a' }
            ]
        },
        {
            name: 'Akarsh Chaturvedi',
            role: 'Team Member',
            bio: 'Dedicated to innovation and technological advancement in the ever-evolving tech landscape.',
            image: '/images/team/akarsh-chaturvedi.jpg',
            socials: [
                { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/akarsh-chaturvedi-259271236' }
            ]
        },
        {
            name: 'Ravindra Yadav',
            role: 'Team Member',
            bio: 'Bringing expertise and fresh perspectives to comprehensive technology solutions.',
            image: '/images/team/ravindra-yadav.jpg',
            socials: [
                { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/ravindra-yadav04' }
            ]
        },
        {
            name: 'Pranjali Khandelwal',
            role: 'Team Member',
            bio: 'Working on innovative solutions with a focus on excellence and collaboration.',
            image: '/images/team/pranjali-khandelwal.png',
            socials: [
                { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/pranjali-khandelwal-0b4041272' }
            ]
        },
        {
            name: 'Sonam Sharma',
            role: 'Team Member',
            bio: 'Contributing to mission-driven projects while gaining real-world experience.',
            image: '/images/team/sonam-sharma.jpg',
            socials: [
                { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/sonam-sharma-52847b255' }
            ]
        }
    ];

    // What sets our team apart
    const teamDifferentiators = [
        {
            icon: <FiTarget />,
            title: 'Student-Led Innovation',
            description: 'Our team members actively contribute to cutting-edge projects, gaining practical knowledge and leadership skills in the ever-evolving tech landscape.'
        },
        {
            icon: <FiUsers />,
            title: 'Mentorship-Driven Approach',
            description: 'Students work under the guidance of skilled professionals who provide personalized mentorship and support, shaping their careers with real-world experience.'
        },
        {
            icon: <FiEye />,
            title: 'Diverse Skill Sets',
            description: 'From AI to Cybersecurity, our team members bring expertise in various domains, enabling us to deliver comprehensive and innovative solutions tailored for the future.'
        }
    ];

    // Core values
    const values = [
        {
            icon: <FiTarget />,
            title: 'Innovation First',
            description: 'We push boundaries and challenge conventions to create breakthrough solutions.'
        },
        {
            icon: <FiEye />,
            title: 'Visionary Thinking',
            description: 'We see beyond today\'s limitations to build tomorrow\'s possibilities.'
        },
        {
            icon: <FiHeart />,
            title: 'Client Success',
            description: 'Your success is our success. We\'re committed to delivering real value.'
        },
        {
            icon: <FiUsers />,
            title: 'Collaboration',
            description: 'The best solutions come from diverse minds working together.'
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 neural-pattern" />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%)',
                        filter: 'blur(60px)'
                    }}
                />

                <div className="relative container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeUp>
                            <span className="inline-block px-4 py-2 mb-6 text-cyan-400 text-sm font-semibold tracking-wider uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20">
                                About GOKLYN
                            </span>
                        </FadeUp>

                        <FadeUp delay={0.1}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-8">
                                Shaping the{' '}
                                <span className="gradient-text">Quantum Era</span>
                            </h1>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                                We are a team of visionaries, scientists, and engineers united by a
                                singular mission: to unlock the transformative potential of quantum
                                computing and artificial intelligence for the world.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="relative py-24 bg-dark-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Mission */}
                        <SlideIn direction="left">
                            <div className="relative p-8 md:p-12 glass rounded-3xl overflow-hidden">
                                <div
                                    className="absolute top-0 right-0 w-64 h-64 opacity-20"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, transparent 70%)'
                                    }}
                                />
                                <div className="relative">
                                    <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center">
                                        <FiTarget className="w-8 h-8 text-cyan-400" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        To democratize access to quantum computing and AI technologies,
                                        empowering businesses of all sizes to solve complex challenges
                                        and unlock unprecedented opportunities for growth and innovation.
                                    </p>
                                </div>
                            </div>
                        </SlideIn>

                        {/* Vision */}
                        <SlideIn direction="right">
                            <div className="relative p-8 md:p-12 glass rounded-3xl overflow-hidden">
                                <div
                                    className="absolute top-0 right-0 w-64 h-64 opacity-20"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)'
                                    }}
                                />
                                <div className="relative">
                                    <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center">
                                        <FiEye className="w-8 h-8 text-violet-400" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        To be the global leader in quantum-enhanced technology solutions,
                                        pioneering breakthroughs that transform industries, advance human
                                        knowledge, and create a more connected, intelligent world.
                                    </p>
                                </div>
                            </div>
                        </SlideIn>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="relative py-24 md:py-32">
                <div className="absolute inset-0 quantum-grid opacity-20" />

                <div className="relative container mx-auto px-4 md:px-6">
                    <FadeUp className="text-center mb-16">
                        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                            Our Journey
                        </span>
                        <h2 className="section-title text-white mb-6">
                            The Path to{' '}
                            <span className="gradient-text">Innovation</span>
                        </h2>
                    </FadeUp>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Center Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-violet-500 to-cyan-500" />

                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 z-10">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 animate-ping opacity-50" />
                                </div>

                                {/* Content */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                                    }`}>
                                    <motion.div
                                        className="relative p-6 glass rounded-2xl"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <span className="inline-block px-3 py-1 mb-3 text-sm font-bold text-cyan-400 bg-cyan-500/10 rounded-full">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.description}</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="relative py-24 bg-dark-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <FadeUp className="text-center mb-16">
                        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                            What Drives Us
                        </span>
                        <h2 className="section-title text-white mb-6">
                            Our Core{' '}
                            <span className="gradient-text">Values</span>
                        </h2>
                    </FadeUp>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <StaggerItem key={value.title}>
                                <motion.div
                                    className="text-center p-8 glass rounded-2xl h-full"
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center text-cyan-400">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                    <p className="text-gray-400">{value.description}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="relative py-24 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Main Title */}
                    <FadeUp className="text-center mb-8">
                        <h2 className="section-title text-white mb-6">
                            Our{' '}
                            <span className="gradient-text">Team</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            At GOKLYN Technologies, our team comprises a dynamic group of passionate students from diverse educational backgrounds. Guided by experienced mentors, we foster a culture of collaboration, innovation, and growth.
                        </p>
                    </FadeUp>

                    {/* Our Staff Section */}
                    <FadeUp className="text-center mb-16 mt-16">
                        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                            Our Staff
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Our Team{' '}
                            <span className="gradient-text">Members</span>
                        </h3>
                    </FadeUp>

                    {/* Team Grid - 5 members in responsive grid */}
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
                        {team.map((member) => (
                            <StaggerItem key={member.name}>
                                <TeamCard {...member} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    {/* What Sets Our Team Apart Section */}
                    <FadeUp className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            What Sets Our Team{' '}
                            <span className="gradient-text">Apart?</span>
                        </h3>
                    </FadeUp>

                    <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-16">
                        {teamDifferentiators.map((item, index) => (
                            <StaggerItem key={item.title}>
                                <motion.div
                                    className="text-center p-8 glass rounded-2xl h-full"
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center text-cyan-400 text-2xl">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    {/* Closing Statement */}
                    <FadeUp className="text-center">
                        <div className="relative p-8 md:p-12 glass rounded-3xl max-w-4xl mx-auto">
                            <div
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 opacity-20"
                                style={{
                                    background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, transparent 70%)'
                                }}
                            />
                            <div className="relative">
                                <FiHeart className="w-12 h-12 mx-auto mb-6 text-cyan-400" />
                                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                                    At GOKLYN, we believe in the power of teamwork and the potential of young minds to drive technological progress.
                                </p>
                            </div>
                        </div>
                    </FadeUp>

                    {/* Join Team CTA */}
                    <FadeUp className="text-center mt-16">
                        <p className="text-gray-400 mb-6">
                            Want to join our team of innovators?
                        </p>
                        <Link to="/careers">
                            <Button variant="primary">
                                View Open Positions
                            </Button>
                        </Link>
                    </FadeUp>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative py-24 bg-dark-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <FadeUp delay={0}>
                            <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                                <CountUp end={500} suffix="+" />
                            </div>
                            <p className="text-gray-400">Projects Completed</p>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                                <CountUp end={50} suffix="+" />
                            </div>
                            <p className="text-gray-400">Team Members</p>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                                <CountUp end={20} suffix="+" />
                            </div>
                            <p className="text-gray-400">Countries Served</p>
                        </FadeUp>
                        <FadeUp delay={0.3}>
                            <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                                <CountUp end={10} suffix="+" />
                            </div>
                            <p className="text-gray-400">Patents Filed</p>
                        </FadeUp>
                    </div>
                </div>
            </section>
        </div>
    );
}
