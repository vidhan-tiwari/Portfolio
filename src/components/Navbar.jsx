function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 sticky top-0">
            <h1 className="text-xl font-bold">Vidhan Tiwari</h1>
            <div className="flex gap-6">
                <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar