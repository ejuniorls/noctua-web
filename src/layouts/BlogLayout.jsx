import { Outlet, Link } from 'react-router-dom';

export default function BlogLayout() {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    {/* <Link to="/category">Categorias</Link> */}
                    {/* <Link to="/author">Autores</Link> */}
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
