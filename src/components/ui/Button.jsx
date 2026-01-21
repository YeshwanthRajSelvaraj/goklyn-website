/**
 * Button Components - Quantum Styled Buttons
 */

import React from 'react';
import { motion } from 'framer-motion';

// Primary Quantum Button
export function Button({
    children,
    variant = 'primary',
    size = 'default',
    className = '',
    disabled = false,
    loading = false,
    icon = null,
    iconPosition = 'right',
    onClick,
    type = 'button',
    ...props
}) {
    const baseStyles = `
    relative inline-flex items-center justify-center font-semibold rounded-xl
    transition-all duration-300 overflow-hidden
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

    const variants = {
        primary: `
      bg-gradient-to-r from-cyan-500 to-violet-600 text-white
      hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]
      active:scale-95
    `,
        secondary: `
      bg-transparent border-2 border-cyan-500/50 text-cyan-400
      hover:border-cyan-400 hover:bg-cyan-500/10
      hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]
    `,
        ghost: `
      bg-transparent text-gray-300
      hover:bg-white/5 hover:text-white
    `,
        glass: `
      bg-white/5 backdrop-blur-xl border border-white/10 text-white
      hover:bg-white/10 hover:border-white/20
    `,
        danger: `
      bg-gradient-to-r from-red-500 to-pink-600 text-white
      hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]
    `
    };

    const sizes = {
        small: 'px-4 py-2 text-sm',
        default: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg'
    };

    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            {...props}
        >
            {/* Shimmer Effect */}
            {variant === 'primary' && (
                <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                />
            )}

            {/* Loading Spinner */}
            {loading && (
                <span className="absolute inset-0 flex items-center justify-center bg-inherit">
                    <svg
                        className="w-5 h-5 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                </span>
            )}

            {/* Button Content */}
            <span className={`relative z-10 flex items-center gap-2 ${loading ? 'opacity-0' : ''}`}>
                {icon && iconPosition === 'left' && icon}
                {children}
                {icon && iconPosition === 'right' && icon}
            </span>
        </motion.button>
    );
}

// Icon Button
export function IconButton({
    icon,
    variant = 'ghost',
    size = 'default',
    className = '',
    label,
    ...props
}) {
    const sizes = {
        small: 'w-8 h-8',
        default: 'w-10 h-10',
        large: 'w-12 h-12'
    };

    const variants = {
        ghost: 'hover:bg-white/10 text-gray-400 hover:text-white',
        glass: 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10',
        primary: 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
    };

    return (
        <motion.button
            className={`
        ${sizes[size]}
        ${variants[variant]}
        rounded-xl flex items-center justify-center
        transition-all duration-200
        ${className}
      `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={label}
            {...props}
        >
            {icon}
        </motion.button>
    );
}

// Link Button
export function LinkButton({
    children,
    href,
    className = '',
    external = false,
    ...props
}) {
    const Component = href ? 'a' : 'button';

    return (
        <motion.span className="relative inline-block">
            <Component
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className={`
          relative inline-flex items-center gap-2
          text-cyan-400 hover:text-cyan-300
          transition-colors duration-200
          group
          ${className}
        `}
                {...props}
            >
                {children}
                <motion.span
                    className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-cyan-400 to-violet-400 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </Component>
        </motion.span>
    );
}
