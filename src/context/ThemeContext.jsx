import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('system');

    useEffect(() => {
        const stored = localStorage.getItem('theme') || 'system';
        setTheme(stored);
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else if (theme === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.classList.toggle('dark', prefersDark);
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
