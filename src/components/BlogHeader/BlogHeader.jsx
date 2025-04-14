import { Link } from 'react-router-dom';

export default function BlogHeader() {
    return (
        <header className="bg-white dark:bg-gray-800 shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
                    Meu Blog
                </Link>
                <nav className="space-x-4 text-gray-600 dark:text-gray-300">
                    <Link to="/" className="hover:text-black dark:hover:text-white">
                        Início
                    </Link>
                    <Link to="/post/exemplo" className="hover:text-black dark:hover:text-white">
                        Post Exemplo
                    </Link>
                </nav>
            </div>
        </header>
    );
}