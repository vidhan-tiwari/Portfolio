function Projects() {
  return (
    <section id="projects" className="py-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Gradient Descent Visualizer</h3>
          <p className="text-gray-300 mb-4">
            Interactive comparison of Perceptron and Gradient Descent to show
            why gradient-based learning is effective.
          </p>
          <p className="text-sm text-blue-400">Machine Learning • Gradient Descent • Perceptron</p>
        </div>
      </div>
    </section>
  )
}

export default Projects