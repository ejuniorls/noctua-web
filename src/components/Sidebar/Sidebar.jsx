import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    FaHome,
    FaUser,
    FaChevronDown,
    FaChevronUp,
    FaCog,
} from 'react-icons/fa';

const menuItems = [
    {
        label: 'Dashboard',
        icon: <FaHome />,
        to: '/admin',
    },
    {
        label: 'Usuários',
        icon: <FaUser />,
        submenu: [
            { label: 'Listar', to: '/admin/usuarios' },
            { label: 'Criar', to: '/admin/usuarios/criar' },
        ],
    },
    {
        label: 'Configurações',
        icon: <FaCog />,
        to: '/admin/settings',
    },
];

export default function Sidebar({ collapsed, isMobileOpen, onCloseMobile }) {
    const [openMenus, setOpenMenus] = useState({});
    const location = useLocation();

    const toggleSubmenu = (label) => {
        setOpenMenus((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    const renderMenuItem = (item, isMobile = false) => {
        const active = location.pathname === item.to;

        return (
            <div key={item.label}>
                {item.submenu ? (
                    <>
                        <div
                            className="flex items-center justify-between cursor-pointer text-gray-800 dark:text-white py-2"
                            onClick={() => toggleSubmenu(item.label)}
                        >
                            <div className="flex items-center gap-2">
                                {item.icon}
                                {!collapsed && <span>{item.label}</span>}
                            </div>
                            {!collapsed && (
                                <span>
                                    {openMenus[item.label] ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            )}
                        </div>
                        {!collapsed && openMenus[item.label] && (
                            <div className="ml-6 text-sm text-gray-500 dark:text-gray-300">
                                {item.submenu.map((sub) => (
                                    <Link
                                        key={sub.label}
                                        to={sub.to}
                                        onClick={() => isMobile && onCloseMobile()}
                                        className={`block py-1 ${location.pathname === sub.to ? 'font-semibold text-indigo-600 dark:text-indigo-400' : ''}`}
                                    >
                                        {sub.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <Link
                        to={item.to}
                        onClick={() => isMobile && onCloseMobile()}
                        className={`flex items-center gap-2 py-2 text-gray-800 dark:text-white ${active ? 'font-semibold text-indigo-600 dark:text-indigo-400' : ''}`}
                    >
                        {item.icon}
                        {!collapsed && <span>{item.label}</span>}
                    </Link>
                )}
            </div>
        );
    };

    return (
        <>
            {/* Sidebar para desktop */}
            <aside className={`
                hidden md:block
                ${collapsed ? 'w-16' : 'w-64'}
                bg-white dark:bg-gray-900 h-screen shadow-md transition-all duration-300
            `}>
                <nav className="p-4">
                    {menuItems.map(item => renderMenuItem(item))}
                </nav>
            </aside>

            {/* Sidebar para mobile */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden"
                    onClick={onCloseMobile}
                >
                    <aside
                        className="w-64 bg-white dark:bg-gray-900 h-full shadow-md p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="mb-4 text-sm text-gray-500 dark:text-gray-300"
                            onClick={onCloseMobile}
                        >
                            Fechar
                        </button>
                        <nav>
                            {menuItems.map(item => renderMenuItem(item, true))}
                        </nav>
                    </aside>
                </div>
            )}
        </>
    );
}
