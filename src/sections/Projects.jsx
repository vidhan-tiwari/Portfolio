import { projects } from "../data/projects"

function Projects() {
    return (
        <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-2xl font-semibold">{project.title}</h3>
                            <span className="text-sm text-blue-400">{project.status}</span>
                        </div>

                        <p className="text-gray-300 mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((item, i) => (
                                <span
                                    key={i}
                                    className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                GitHub
                            </a>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects