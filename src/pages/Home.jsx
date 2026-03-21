import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"
import Footer from "../components/Footer"

function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white scroll-smooth">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </main>
    )
}

export default Home