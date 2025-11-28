export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 pt-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Hello, I&apos;m <span className="text-blue-500">John Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 mb-3">
          Full Stack Developer
        </p>
        <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
          I build beautiful and functional web applications
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors hover:-translate-y-0.5 transform"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
