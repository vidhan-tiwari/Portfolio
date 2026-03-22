import { techStack } from "../data/techStack.jsx"
import { motion } from "framer-motion"

function About() {
    return (
        <section id="about" className="py-20 px-8 max-w-4xl mx-auto text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-10"
            >
                About Me
            </motion.h2>

            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg font-semibold text-gray-400 mb-4"
            >
                Tech Stack
            </motion.h3>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
                className="flex flex-wrap justify-center gap-8"
            >
                {techStack.map((item, i) => (
                    <motion.div 
                        key={i} 
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        className="flex flex-col items-center gap-2"
                    >
                        <img
                            src={item.icon}
                            alt={item.label}
                            title={item.label}
                            className="w-12 h-12 hover:opacity-40 transition-opacity duration-300"
                        />
                        <span className="text-xs text-gray-500">{item.label}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default About