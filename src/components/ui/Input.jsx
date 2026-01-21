/**
 * Form Input Components - Quantum Styled
 */

import React, { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAlertCircle, FiCheck, FiEye, FiEyeOff } from 'react-icons/fi';

// Text Input
export const Input = forwardRef(({
    label,
    error,
    success,
    icon,
    className = '',
    containerClassName = '',
    ...props
}, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={`relative ${containerClassName}`}>
            {/* Label */}
            {label && (
                <label className="block text-sm font-medium text-gray-300 mb-2">
                    {label}
                    {props.required && <span className="text-red-400 ml-1">*</span>}
                </label>
            )}

            {/* Input Container */}
            <div className="relative">
                {/* Leading Icon */}
                {icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                        {icon}
                    </div>
                )}

                <input
                    ref={ref}
                    className={`
            w-full px-5 py-4
            ${icon ? 'pl-12' : ''}
            bg-dark-800/50
            border ${error ? 'border-red-500' : success ? 'border-green-500' : 'border-dark-600'}
            rounded-xl
            text-white placeholder-gray-500
            transition-all duration-300
            focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20
            hover:border-dark-500
            ${className}
          `}
                    onFocus={(e) => {
                        setIsFocused(true);
                        props.onFocus?.(e);
                    }}
                    onBlur={(e) => {
                        setIsFocused(false);
                        props.onBlur?.(e);
                    }}
                    {...props}
                />

                {/* Status Icons */}
                <AnimatePresence>
                    {(error || success) && (
                        <motion.div
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                        >
                            {error && <FiAlertCircle className="text-red-400" />}
                            {success && <FiCheck className="text-green-400" />}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Focus Glow */}
                <div
                    className={`
            absolute inset-0 -z-10 rounded-xl transition-opacity duration-300
            ${isFocused ? 'opacity-100' : 'opacity-0'}
          `}
                    style={{
                        background: 'radial-gradient(circle at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
                        filter: 'blur(10px)'
                    }}
                />
            </div>

            {/* Error Message */}
            <AnimatePresence>
                {error && (
                    <motion.p
                        className="mt-2 text-sm text-red-400"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
});

Input.displayName = 'Input';

// Password Input
export const PasswordInput = forwardRef(({ ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            <Input
                ref={ref}
                type={showPassword ? 'text' : 'password'}
                {...props}
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[calc(50%+0.5rem)] -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
            >
                {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
        </div>
    );
});

PasswordInput.displayName = 'PasswordInput';

// Textarea
export const Textarea = forwardRef(({
    label,
    error,
    success,
    className = '',
    containerClassName = '',
    rows = 4,
    ...props
}, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [charCount, setCharCount] = useState(0);

    return (
        <div className={`relative ${containerClassName}`}>
            {/* Label */}
            {label && (
                <label className="block text-sm font-medium text-gray-300 mb-2">
                    {label}
                    {props.required && <span className="text-red-400 ml-1">*</span>}
                </label>
            )}

            {/* Textarea */}
            <div className="relative">
                <textarea
                    ref={ref}
                    rows={rows}
                    className={`
            w-full px-5 py-4
            bg-dark-800/50
            border ${error ? 'border-red-500' : success ? 'border-green-500' : 'border-dark-600'}
            rounded-xl
            text-white placeholder-gray-500
            transition-all duration-300
            focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20
            hover:border-dark-500
            resize-none
            ${className}
          `}
                    onFocus={(e) => {
                        setIsFocused(true);
                        props.onFocus?.(e);
                    }}
                    onBlur={(e) => {
                        setIsFocused(false);
                        props.onBlur?.(e);
                    }}
                    onChange={(e) => {
                        setCharCount(e.target.value.length);
                        props.onChange?.(e);
                    }}
                    {...props}
                />

                {/* Character Count */}
                {props.maxLength && (
                    <span className="absolute bottom-3 right-3 text-xs text-gray-500">
                        {charCount}/{props.maxLength}
                    </span>
                )}

                {/* Focus Glow */}
                <div
                    className={`
            absolute inset-0 -z-10 rounded-xl transition-opacity duration-300
            ${isFocused ? 'opacity-100' : 'opacity-0'}
          `}
                    style={{
                        background: 'radial-gradient(circle at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
                        filter: 'blur(10px)'
                    }}
                />
            </div>

            {/* Error Message */}
            <AnimatePresence>
                {error && (
                    <motion.p
                        className="mt-2 text-sm text-red-400"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
});

Textarea.displayName = 'Textarea';

// Select Dropdown
export const Select = forwardRef(({
    label,
    error,
    options = [],
    placeholder = 'Select an option',
    className = '',
    containerClassName = '',
    ...props
}, ref) => {
    return (
        <div className={`relative ${containerClassName}`}>
            {/* Label */}
            {label && (
                <label className="block text-sm font-medium text-gray-300 mb-2">
                    {label}
                    {props.required && <span className="text-red-400 ml-1">*</span>}
                </label>
            )}

            <select
                ref={ref}
                className={`
          w-full px-5 py-4
          bg-dark-800/50
          border ${error ? 'border-red-500' : 'border-dark-600'}
          rounded-xl
          text-white
          transition-all duration-300
          focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20
          hover:border-dark-500
          appearance-none
          cursor-pointer
          ${className}
        `}
                {...props}
            >
                <option value="" disabled className="text-gray-500 bg-dark-800">
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        className="bg-dark-800 text-white"
                    >
                        {option.label}
                    </option>
                ))}
            </select>

            {/* Arrow Icon */}
            <div className="absolute right-4 top-[calc(50%+0.5rem)] -translate-y-1/2 pointer-events-none">
                <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            {/* Error Message */}
            <AnimatePresence>
                {error && (
                    <motion.p
                        className="mt-2 text-sm text-red-400"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
});

Select.displayName = 'Select';

// Checkbox
export const Checkbox = forwardRef(({
    label,
    error,
    className = '',
    ...props
}, ref) => {
    return (
        <label className={`flex items-start gap-3 cursor-pointer group ${className}`}>
            <div className="relative mt-0.5">
                <input
                    ref={ref}
                    type="checkbox"
                    className="sr-only peer"
                    {...props}
                />
                <div className="w-5 h-5 rounded-md border-2 border-dark-500 bg-dark-800 peer-checked:bg-cyan-500 peer-checked:border-cyan-500 transition-all duration-200" />
                <motion.svg
                    className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </motion.svg>
            </div>
            <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                {label}
            </span>
        </label>
    );
});

Checkbox.displayName = 'Checkbox';

// Radio Group
export function RadioGroup({
    name,
    label,
    options = [],
    value,
    onChange,
    error,
    className = ''
}) {
    return (
        <div className={className}>
            {label && (
                <p className="text-sm font-medium text-gray-300 mb-3">{label}</p>
            )}
            <div className="space-y-2">
                {options.map((option) => (
                    <label
                        key={option.value}
                        className="flex items-center gap-3 cursor-pointer group"
                    >
                        <div className="relative">
                            <input
                                type="radio"
                                name={name}
                                value={option.value}
                                checked={value === option.value}
                                onChange={(e) => onChange?.(e.target.value)}
                                className="sr-only peer"
                            />
                            <div className="w-5 h-5 rounded-full border-2 border-dark-500 bg-dark-800 peer-checked:border-cyan-500 transition-all duration-200" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-500 scale-0 peer-checked:scale-100 transition-transform duration-200" />
                        </div>
                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                            {option.label}
                        </span>
                    </label>
                ))}
            </div>
            {error && (
                <p className="mt-2 text-sm text-red-400">{error}</p>
            )}
        </div>
    );
}
