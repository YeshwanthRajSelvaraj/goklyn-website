/**
 * useTheme Hook
 * Manages theme state with localStorage persistence
 */

import { useState, useEffect } from 'react';

export function useTheme() {
    // Initialize theme from localStorage or default to 'dark'
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('goklyn-theme');
        return savedTheme || 'dark';
    });

    // Apply theme to document and save to localStorage
    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'light') {
            root.classList.add('light-theme');
        } else {
            root.classList.remove('light-theme');
        }

        localStorage.setItem('goklyn-theme', theme);
    }, [theme]);

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return { theme, toggleTheme };
}
