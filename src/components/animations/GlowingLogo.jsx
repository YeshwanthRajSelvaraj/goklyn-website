/**
 * GlowingLogo - Animated Logo Component
 * GOKLYN logo with neural scan and glow effects
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlowingLogo({ className = '', size = 'default' }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const sizes = {
        small: 'h-8',
        default: 'h-10 md:h-12',
        large: 'h-16 md:h-20'
    };

    return (
        <motion.div
            className={`relative flex items-center ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Logo Image */}
            <div className="relative">
                <motion.img
                    src="/goklyn-logo.png"
                    alt="GOKLYN Technologies"
                    className={`${sizes[size]} w-auto object-contain`}
                    initial={{ filter: 'brightness(0.8)' }}
                    animate={{
                        filter: isLoaded ? 'brightness(1)' : 'brightness(0.8)',
                    }}
                    transition={{ duration: 1 }}
                />

                {/* Glow Effect */}
                <motion.div
                    className="absolute inset-0 -z-10"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, transparent 70%)',
                        filter: 'blur(20px)',
                        transform: 'scale(1.5)'
                    }}
                />

                {/* Neural Scan Line */}
                <AnimatePresence>
                    {isLoaded && (
                        <motion.div
                            className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                            initial={{ top: 0, opacity: 0 }}
                            animate={{
                                top: ['0%', '100%', '0%'],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                                ease: 'easeInOut'
                            }}
                        />
                    )}
                </AnimatePresence>

                {/* Pulse Ring on Hover */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            className="absolute inset-0 rounded-full border-2 border-cyan-400/50"
                            initial={{ scale: 1, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: [0, 0.5, 0] }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity }}
                            style={{ transform: 'translate(-25%, -25%)' }}
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* Logo Text (Optional alongside image) */}
            <motion.div
                className="hidden md:block ml-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <div className="flex flex-col">
                    <span className="text-xl font-bold font-display tracking-wider text-white">
                        GOKLYN
                    </span>
                    <span className="text-[10px] font-medium tracking-[0.3em] text-cyan-400/70 uppercase">
                        Technologies
                    </span>
                </div>
            </motion.div>
        </motion.div>
    );
}

// Simplified version for footer/small spaces
export function LogoIcon({ className = '', size = 'h-8 w-8' }) {
    return (
        <motion.div
            className={`relative ${className}`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
        >
            <div
                className={`${size} rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-white text-lg`}
                style={{
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
                }}
            >
                G
            </div>
        </motion.div>
    );
}
