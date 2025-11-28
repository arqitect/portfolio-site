const skillsData = [
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "🔷" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "⚙️" },
  { name: "Azure", icon: "☁️" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">
          Skills
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h4 className="font-semibold text-slate-800">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
