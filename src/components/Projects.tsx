const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with payment integration and inventory management.",
    tags: ["JavaScript", "Node.js", "MongoDB"],
    icon: "🛒",
  },
  {
    title: "Task Management App",
    description:
      "A productivity app for managing tasks with drag-and-drop functionality.",
    tags: ["JavaScript", "HTML", "CSS"],
    icon: "✅",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather information with interactive maps and forecasts.",
    tags: ["JavaScript", "API", "CSS"],
    icon: "🌤️",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    icon: "💼",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">
          My Projects
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="h-48 bg-blue-500 flex items-center justify-center text-6xl">
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-blue-500 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
