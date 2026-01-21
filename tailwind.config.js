/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Primary Quantum Colors
                quantum: {
                    50: '#f0fdff',
                    100: '#ccfbff',
                    200: '#99f6ff',
                    300: '#5eefff',
                    400: '#2ce0f8',
                    500: '#00d4ff',
                    600: '#00a8d4',
                    700: '#0086ab',
                    800: '#086b8a',
                    900: '#0c5873',
                    950: '#003a4f',
                },
                // AI Neural Colors
                neural: {
                    50: '#faf5ff',
                    100: '#f3e8ff',
                    200: '#e9d5ff',
                    300: '#d8b4fe',
                    400: '#c084fc',
                    500: '#a855f7',
                    600: '#9333ea',
                    700: '#7e22ce',
                    800: '#6b21a8',
                    900: '#581c87',
                    950: '#3b0764',
                },
                // Electric Blue
                electric: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#172554',
                },
                // Neon Accent Colors
                neon: {
                    cyan: '#00ffff',
                    violet: '#8b5cf6',
                    pink: '#ec4899',
                    green: '#10b981',
                    orange: '#f59e0b',
                },
                // Dark Theme Background
                dark: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 10s linear infinite',
                'gradient': 'gradient 8s ease infinite',
                'particle': 'particle 20s linear infinite',
                'quantum-wave': 'quantum-wave 3s ease-in-out infinite',
                'neural-pulse': 'neural-pulse 2s ease-in-out infinite',
                'slide-up': 'slide-up 0.5s ease-out',
                'slide-down': 'slide-down 0.5s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'scale-in': 'scale-in 0.3s ease-out',
                'border-flow': 'border-flow 3s linear infinite',
            },
            keyframes: {
                glow: {
                    '0%': {
                        boxShadow: '0 0 5px var(--tw-shadow-color), 0 0 10px var(--tw-shadow-color), 0 0 20px var(--tw-shadow-color)'
                    },
                    '100%': {
                        boxShadow: '0 0 10px var(--tw-shadow-color), 0 0 20px var(--tw-shadow-color), 0 0 40px var(--tw-shadow-color)'
                    },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                particle: {
                    '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: 0 },
                    '10%': { opacity: 1 },
                    '90%': { opacity: 1 },
                    '100%': { transform: 'translateY(-100vh) rotate(720deg)', opacity: 0 },
                },
                'quantum-wave': {
                    '0%, 100%': { transform: 'scaleX(1) scaleY(1)', opacity: 0.3 },
                    '50%': { transform: 'scaleX(1.5) scaleY(1.5)', opacity: 0.1 },
                },
                'neural-pulse': {
                    '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
                    '50%': { opacity: 1, transform: 'scale(1.05)' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(20px)', opacity: 0 },
                    '100%': { transform: 'translateY(0)', opacity: 1 },
                },
                'slide-down': {
                    '0%': { transform: 'translateY(-20px)', opacity: 0 },
                    '100%': { transform: 'translateY(0)', opacity: 1 },
                },
                'fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                'scale-in': {
                    '0%': { transform: 'scale(0.95)', opacity: 0 },
                    '100%': { transform: 'scale(1)', opacity: 1 },
                },
                'border-flow': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'quantum-grid': `
          linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
        `,
                'neural-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
                'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                'quantum': '0 0 20px rgba(0, 212, 255, 0.3)',
                'neural': '0 0 20px rgba(139, 92, 246, 0.3)',
                'glow-cyan': '0 0 30px rgba(0, 255, 255, 0.5)',
                'glow-violet': '0 0 30px rgba(139, 92, 246, 0.5)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
                'inner-glow': 'inset 0 0 60px rgba(0, 212, 255, 0.1)',
            },
            backgroundSize: {
                'grid': '50px 50px',
            },
        },
    },
    plugins: [],
}
