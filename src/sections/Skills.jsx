import { motion } from "framer-motion"

function Skills() {
    const skillGroups = [
        {
            title: "Languages",
            skills: [
                { name: "Python", stars: 5 },
                { name: "C", stars: 4 },
                { name: "C++", stars: 4 },
                { name: "SQL", stars: 4 },
                { name: "JavaScript", stars: 3 },
            ],
        },
        {
            title: "ML / Data",
            skills: [
                { name: "Machine Learning", stars: 5 },
                { name: "Deep Learning", stars: 5 },
                { name: "Scikit-Learn", stars: 5 },
                { name: "PyTorch", stars: 5 },
                { name: "TensorFlow", stars: 5 },
                { name: "Pandas", stars: 5 },
                { name: "NumPy", stars: 5 },
            ],
        },
        {
            title: "Frameworks / Tools",
            skills: [
                { name: "React", stars: 4 },
                { name: "Streamlit", stars: 4 },
                { name: "Jupyter", stars: 5 },
                { name: "Git", stars: 5 },
                { name: "GitHub", stars: 5 },
                { name: "Vercel", stars: 4 },
            ],
        },
    ]

    return (
        <section id="skills" className="py-20 px-8 max-w-5xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-10 text-center"
            >
                Skills
            </motion.h2>

            <motion.div layout className="grid md:grid-cols-3 gap-6">
                {skillGroups.map((group, index) => (
                    <motion.div
                        key={index}
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{
                            scale: 1.04,
                            boxShadow: "0px 0px 20px rgba(96, 165, 250, 0.4)",
                            transition: { duration: 0.2 }
                        }}
                        className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg"
                    >
                        <motion.h3 layout className="text-xl font-semibold mb-4 text-blue-400">{group.title}</motion.h3>
                        <motion.div layout className="flex flex-wrap gap-2">
                            {group.skills.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    layout
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    className="flex items-center px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 cursor-pointer overflow-hidden"
                                >
                                    <motion.span layout>{skill.name}</motion.span>

                                    <motion.div
                                        variants={{
                                            rest: { width: 0, opacity: 0, marginLeft: 0 },
                                            hover: { width: 60, opacity: 1, marginLeft: 8 }
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="flex text-blue-400 text-xs overflow-hidden whitespace-nowrap"
                                        style={{ textShadow: "0 0 8px rgba(21, 44, 250, 0.93)" }}
                                    >
                                        {Array.from({ length: 5 }).map((_, starIdx) => (
                                            <span key={starIdx} className={starIdx < skill.stars ? "opacity-150" : "opacity-30"}>
                                                ★
                                            </span>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Skills