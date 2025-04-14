import ThemeToggle from "../theme-toggle/ThemeToggle";

export default function Header() {
    return (
        <header className="w-full px-6 py-4 bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 z-50 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                Minha Aplicação
            </h1>
            <ThemeToggle />
        </header>
    );
}
