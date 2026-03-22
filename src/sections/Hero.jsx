import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const dynamicWords = [
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Generative AI",
    "Building Systems"
]

function Hero() {
    const [wordIndex, setWordIndex] = useState(0)
    const [text, setText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentWord = dynamicWords[wordIndex]

        let timeout

        if (!isDeleting && text === currentWord) {
            // word completed -> pause before deleting
            timeout = setTimeout(() => setIsDeleting(true), 1300)
        } else if (!isDeleting) {
            // Typing
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length + 1))
            }, 50)
        } else if (isDeleting && text.length === 0) {
            // Deletion completed ->next word
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % dynamicWords.length)

        } else {
            // Deleting
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length - 1))
            }, 50)
        }

        return () => clearTimeout(timeout)
    }, [text, isDeleting, wordIndex])

    return (
        <section className="flex flex-col items-center justify-center text-center py-32 px-6">
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-4"
            >
                Hi, I'm Vidhan Tiwari
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
            >
                Aspiring Software / ML Engineer passionate about{" "}
                <span className="text-blue-400 font-semibold">
                    {text}
                    <span className="animate-pulse">|</span>
                </span>
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4 mb-6"
            >
                <a
                    href="#projects"
                    className="border border-gray-600 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                    View My Work
                </a>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="border border-gray-600 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                    View Resume
                </a>
            </motion.div>

        </section>

    )
}

export default Hero