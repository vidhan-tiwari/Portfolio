import { socials } from "../data/socials.jsx"
import { motion } from "framer-motion"

function Contact() {
    return (
        <section id="contact" className="py-20 px-8 max-w-4xl mx-auto text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-6"
            >
                Contacts
            </motion.h2>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center gap-6"
            >
                {socials.map((item, i) => (
                    <a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        title={item.label}
                        className={`${item.color} hover:text-gray-500 transition-colors duration-300`}
                    >
                        {item.icon}
                    </a>
                ))}
            </motion.div>
        </section>
    )
}

export default Contact