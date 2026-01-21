/**
 * ScrollAnimations - GSAP-powered scroll reveal components
 * Quantum-inspired scroll animations
 */

import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// Fade Up Animation
export function FadeUp({
    children,
    delay = 0,
    duration = 0.8,
    distance = 50,
    className = ''
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: distance }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
        >
            {children}
        </motion.div>
    );
}

// Fade In Scale Animation
export function FadeInScale({
    children,
    delay = 0,
    duration = 0.6,
    className = ''
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
        >
            {children}
        </motion.div>
    );
}

// Slide In From Side
export function SlideIn({
    children,
    direction = 'left',
    delay = 0,
    duration = 0.8,
    className = ''
}) {
    const getInitialPosition = () => {
        switch (direction) {
            case 'left': return { x: -100, y: 0 };
            case 'right': return { x: 100, y: 0 };
            case 'up': return { x: 0, y: -100 };
            case 'down': return { x: 0, y: 100 };
            default: return { x: -100, y: 0 };
        }
    };

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...getInitialPosition() }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
        >
            {children}
        </motion.div>
    );
}

// Staggered Children Animation
export function StaggerContainer({
    children,
    staggerDelay = 0.1,
    className = ''
}) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className = '' }) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
}

// Parallax Scroll Effect
export function ParallaxScroll({
    children,
    speed = 0.5,
    className = ''
}) {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        gsap.to(element, {
            yPercent: -20 * speed,
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [speed]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

// Quantum Reveal - Special effect with glowing border
export function QuantumReveal({
    children,
    delay = 0,
    className = ''
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            className={`relative ${className}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay }}
        >
            {/* Animated Border */}
            <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={isInView ? {
                    opacity: [0, 1, 0],
                    scale: [0.95, 1, 1.02]
                } : { opacity: 0 }}
                transition={{
                    duration: 1,
                    delay: delay + 0.2,
                    times: [0, 0.5, 1]
                }}
                style={{
                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(139, 92, 246, 0.3))',
                    filter: 'blur(10px)'
                }}
            />

            {/* Content */}
            <motion.div
                initial={{ y: 30 }}
                animate={isInView ? { y: 0 } : { y: 30 }}
                transition={{ duration: 0.6, delay: delay + 0.1 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

// Text Reveal Character by Character
export function TextReveal({
    text,
    delay = 0,
    className = ''
}) {
    const words = text.split(' ');

    return (
        <motion.span
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, i) => (
                <span key={i} className="inline-block mr-[0.25em]">
                    {word.split('').map((char, j) => (
                        <motion.span
                            key={j}
                            className="inline-block"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.4,
                                        delay: delay + (i * 0.1) + (j * 0.02)
                                    }
                                }
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.span>
    );
}

// Counter Animation
export function CountUp({
    end,
    duration = 2,
    suffix = '',
    prefix = '',
    className = ''
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}{count}{suffix}
        </span>
    );
}

// Magnetic Hover Effect
export function MagneticHover({
    children,
    strength = 0.3,
    className = ''
}) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(element, {
                x: x * strength,
                y: y * strength,
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        const handleMouseLeave = () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)'
            });
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [strength]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
