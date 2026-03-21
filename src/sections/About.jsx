import { techStack } from "../data/techStack.jsx"

function About() {
    return (
        <section id="about" className="py-20 px-8 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">About Me</h2>

            <h3 className="text-lg font-semibold text-gray-400 mb-4">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-8">
                {techStack.map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                        <img
                            src={item.icon}
                            alt={item.label}
                            title={item.label}
                            className="w-12 h-12 hover:opacity-40 transition-opacity duration-300"
                        />
                        <span className="text-xs text-gray-500">{item.label}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default About