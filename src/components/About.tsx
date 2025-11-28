export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-12" />
        <div className="text-center text-gray-600 space-y-4">
          <p>
            I&apos;m a passionate full-stack developer with experience in
            building modern web applications. I love creating clean, efficient,
            and user-friendly solutions.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring new
            technologies, contributing to open-source projects, or enjoying a
            good cup of coffee.
          </p>
        </div>
      </div>
    </section>
  );
}
