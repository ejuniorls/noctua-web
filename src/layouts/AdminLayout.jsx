import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';

export default function AdminLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // mobile

    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
            <Sidebar
                collapsed={collapsed}
                isMobileOpen={isSidebarOpen}
                onCloseMobile={() => setIsSidebarOpen(false)}
            />
            <div className="flex flex-col flex-1">
                <Navbar
                    onToggleSidebar={() => {
                        if (window.innerWidth < 768) {
                            setIsSidebarOpen(!isSidebarOpen);
                        } else {
                            setCollapsed(!collapsed);
                        }
                    }}
                />

                <main className="p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
