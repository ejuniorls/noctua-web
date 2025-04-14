export default function BlogFooter() {
    return (
        <footer className="bg-white dark:bg-gray-800 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Meu Blog. Todos os direitos reservados.
        </footer>
    );
}