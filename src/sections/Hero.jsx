function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-32 px-6">
            <p className="text-blue-400 font-medium mb-3 tracking-wide uppercase text-sm">Portfolio</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Vidhan Tiwari</h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
                Aspiring Software/ML Engineer passionate about Machine Learning, Data Science, and building interactive intelligent systems.            </p>
            <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
                View My Work
            </a>
        </section>
    )
}

export default Hero