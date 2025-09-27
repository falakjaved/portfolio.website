export default function projects() {
  const projects = [
    { title: 'Project One', description: 'Amazing web app', link: '#' },
    { title: 'Project Two', description: 'Creative design', link: '#' },
    { title: 'Project Three', description: 'Responsive site', link: '#' },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-20 p-4">
      <h2 className="text-3xl font-bold mb-6">My Work</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="mb-4">{p.description}</p>
            <a href={p.link} className="text-purple-600 font-medium">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
