import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"
import Footer from "../sections/Footer"

function Home() {
    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home