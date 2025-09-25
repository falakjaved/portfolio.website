const projects = [
  {
    title: "Project One",
    description: "A short description of this project.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Another project you built.",
    link: "#",
  },
  {
    title: "Project Three",
    description: "A cool app or website you created.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-4">{p.description}</p>
            <a
              href={p.link}
              target="_blank"
              className="text-purple-600 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
