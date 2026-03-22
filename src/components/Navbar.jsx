function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-gray-900/90 backdrop-blur sticky top-0 z-50 border-b border-gray-800">
            <h1 className="text-xl font-bold text-blue-400">Vidhan Tiwari</h1>
            {/* optional text-blue-400 */}
            <div className="flex gap-6 text-sm font-medium text-blue-400">
                <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
                <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar