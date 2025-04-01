import { Outlet, Link } from 'react-router-dom';

export default function AdminLayout() {
    return (
        <div className="flex h-screen">

            {/* Sidebar */}
            <aside className="w-100 bg-gray-800 text-white p-4">
                <h1 className="text-2xl font-bold mb-6">Admin</h1>
                <nav className="space-y-4">
                    <Link to="/admin" className="block hover:text-gray-400">Dashboard</Link>
                    <Link to="/admin/settings" className="block hover:text-gray-400">Configurações</Link>
                </nav>
            </aside>

            {/* Conteúdo Principal */}
            <div className="flex-1 flex flex-col">

                {/* Header */}
                <header className="bg-white shadow p-4 flex justify-between">
                    <span>Bem-vindo ao Painel</span>
                    {/* <Link to="/logout" className="text-red-500">Logout</Link> */}
                </header>

                {/* Conteúdo das Páginas (Outlet) */}
                <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
                    <Outlet />
                </main>

            </div>
        </div>
    );
}
