import { Outlet, Link } from 'react-router-dom';

import BlogHeader from '../components/BlogHeader/BlogHeader';
import BlogFooter from '../components/BlogFooter/BlogFooter';

export default function BlogLayout() {
    return (
        <>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col">
                <BlogHeader />
                <main className="flex-1 container mx-auto px-4 py-6">
                    <Outlet />
                </main>
                <BlogFooter />
            </div>
        </>
    );
}
