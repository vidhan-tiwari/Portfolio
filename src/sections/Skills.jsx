function Skills() {
    const skillGroups = [
        {
            title: "Languages",
            skills: ["Python", "C", "C++", "SQL", "JavaScript"],
        },
        {
            title: "ML / Data",
            skills: ["Machine Learning", "Deep Learning", "Scikit-Learn", "PyTorch", "TensorFlow", "Pandas", "NumPy"],
        },
        {
            title: "Frameworks / Tools",
            skills: ["React", "Streamlit", "Jupyter", "Git", "GitHub", "Vercel"],
        },
    ]

    return (
        <section id="skills" className="py-20 px-8 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {skillGroups.map((group, index) => (
                    <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-semibold mb-4 text-blue-400">{group.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills