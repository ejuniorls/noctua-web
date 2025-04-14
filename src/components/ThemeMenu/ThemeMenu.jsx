import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function ThemeMenu() {
    const { theme, setTheme } = useContext(ThemeContext);

    const options = ['light', 'dark', 'system'];

    return (
        <div className="relative">
            <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded"
            >
                {options.map(opt => (
                    <option key={opt} value={opt}>
                        {opt === 'light' ? '🌞 Claro' : opt === 'dark' ? '🌙 Escuro' : '🖥️ Sistema'}
                    </option>
                ))}
            </select>
        </div>
    );
}
