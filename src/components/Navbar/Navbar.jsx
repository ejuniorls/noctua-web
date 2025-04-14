import ThemeMenu from '../ThemeMenu/ThemeMenu';
import { FaBars } from 'react-icons/fa';

export default function Navbar({ onToggleSidebar }) {
    return (
        <div className="w-full h-16 bg-white dark:bg-gray-800 shadow flex justify-between items-center px-4">
            <button onClick={onToggleSidebar} className="text-xl">
                <FaBars className="text-gray-800 dark:text-white" />
            </button>
            <ThemeMenu />
        </div>
    );
}