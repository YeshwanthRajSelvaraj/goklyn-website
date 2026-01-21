/**
 * Card Components - Glassmorphism Design
 */

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// Base Glass Card
export function Card({
    children,
    className = '',
    hover = true,
    glow = false,
    onClick
}) {
    return (
        <motion.div
            className={`
        relative p-6 md:p-8
        bg-dark-900/50 backdrop-blur-xl
        border border-white/10
        rounded-2xl
        ${hover ? 'transition-all duration-500 hover:-translate-y-2' : ''}
        ${glow ? 'shadow-[0_0_40px_rgba(0,212,255,0.1)]' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
            onClick={onClick}
            whileHover={hover ? {
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 212, 255, 0.1)'
            } : {}}
        >
            {children}
        </motion.div>
    );
}

// Service Card with Icon
export function ServiceCard({
    icon,
    title,
    description,
    link,
    index = 0,
    className = ''
}) {
    return (
        <motion.div
            className={`
        relative group p-8
        bg-dark-900/50 backdrop-blur-xl
        border border-white/10
        rounded-2xl
        transition-all duration-500
        hover:-translate-y-2
        overflow-hidden
        ${className}
      `}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            {/* Gradient Border on Hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[1px] rounded-2xl bg-dark-900" />
                <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(139, 92, 246, 0.2))',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                        padding: '1px'
                    }}
                />
            </div>

            {/* Top Glow Line */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
            />

            {/* Content */}
            <div className="relative z-10">
                {/* Icon */}
                <motion.div
                    className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center text-3xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                >
                    {icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 line-clamp-3">
                    {description}
                </p>

                {/* Link */}
                {link && (
                    <motion.a
                        href={link}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
                        whileHover={{ x: 5 }}
                    >
                        Learn More
                        <FiArrowRight />
                    </motion.a>
                )}
            </div>

            {/* Background Glow */}
            <div
                className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)'
                }}
            />
        </motion.div>
    );
}

// Feature Card
export function FeatureCard({
    icon,
    title,
    description,
    number,
    className = ''
}) {
    return (
        <motion.div
            className={`relative flex gap-6 p-6 rounded-2xl bg-dark-800/30 border border-white/5 hover:border-cyan-500/20 transition-all duration-300 ${className}`}
            whileHover={{ x: 10 }}
        >
            {/* Number */}
            {number && (
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold">{number.toString().padStart(2, '0')}</span>
                </div>
            )}

            {/* Icon */}
            {icon && !number && (
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    {icon}
                </div>
            )}

            <div>
                <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
                <p className="text-gray-400 text-sm">{description}</p>
            </div>
        </motion.div>
    );
}

// Team Member Card
export function TeamCard({
    image,
    name,
    role,
    bio,
    socials = [],
    className = ''
}) {
    return (
        <motion.div
            className={`relative group text-center ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Avatar */}
            <motion.div
                className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
            >
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-2 border-cyan-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%)'
                    }}
                />
            </motion.div>

            {/* Info */}
            <h4 className="text-xl font-bold text-white mb-1">{name}</h4>
            <p className="text-cyan-400 text-sm font-medium mb-3">{role}</p>
            <p className="text-gray-400 text-sm max-w-xs mx-auto">{bio}</p>

            {/* Socials */}
            {socials.length > 0 && (
                <div className="flex justify-center gap-3 mt-4">
                    {socials.map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-dark-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-dark-600 transition-colors"
                            whileHover={{ y: -2 }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            )}
        </motion.div>
    );
}

// Stats Card
export function StatsCard({
    value,
    label,
    icon,
    suffix = '',
    prefix = '',
    className = ''
}) {
    return (
        <motion.div
            className={`p-6 text-center glass rounded-2xl ${className}`}
            whileHover={{ scale: 1.02 }}
        >
            {icon && (
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    {icon}
                </div>
            )}
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {prefix}{value}{suffix}
            </div>
            <p className="text-gray-400">{label}</p>
        </motion.div>
    );
}

// Project/Portfolio Card
export function ProjectCard({
    image,
    title,
    category,
    description,
    tags = [],
    link,
    className = ''
}) {
    return (
        <motion.div
            className={`relative group overflow-hidden rounded-2xl bg-dark-900 ${className}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
        >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60" />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-md bg-dark-700 text-gray-400"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Link */}
                {link && (
                    <motion.a
                        href={link}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                        whileHover={{ x: 5 }}
                    >
                        View Project
                        <FiArrowRight />
                    </motion.a>
                )}
            </div>
        </motion.div>
    );
}
