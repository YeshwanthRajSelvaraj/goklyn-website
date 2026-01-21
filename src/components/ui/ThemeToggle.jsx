/**
 * ThemeToggle Component
 * Animated button to switch between light and dark themes
 */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle({ theme, onToggle }) {
    const isDark = theme === 'dark';

    return (
        <motion.button
            onClick={onToggle}
            className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-quantum-500/10 to-neural-500/10 border border-white/10 hover:border-quantum-400/50 transition-all duration-300 group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        >
            {/* Background glow effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-quantum-500/20 to-neural-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
            />

            {/* Icon container with rotation animation */}
            <motion.div
                className="relative z-10"
                initial={false}
                animate={{ rotate: isDark ? 0 : 180 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                <AnimatePresence mode="wait">
                    {isDark ? (
                        <motion.div
                            key="moon"
                            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FiMoon className="w-5 h-5 text-cyan-400" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FiSun className="w-5 h-5 text-amber-500" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Pulse effect on hover */}
            <motion.div
                className="absolute inset-0 rounded-xl border-2 border-quantum-400/50 opacity-0 group-hover:opacity-100"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.5, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </motion.button>
    );
}
