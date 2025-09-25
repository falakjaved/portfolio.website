export default function About() {
  return (
    <section className="max-w-5xl mx-auto mt-20 p-4">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="mb-4">
        Hi, I am Falak Javed. I specialize in creating beautiful, modern, and responsive websites.
        With skills in web development, design, and management, I make projects that not only look good but also perform excellently.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Skills</h3>
      <ul className="flex flex-wrap gap-4">
        <li className="bg-purple-200 px-4 py-2 rounded-full">Next.js</li>
        <li className="bg-purple-200 px-4 py-2 rounded-full">React</li>
        <li className="bg-purple-200 px-4 py-2 rounded-full">TypeScript</li>
        <li className="bg-purple-200 px-4 py-2 rounded-full">Tailwind CSS</li>
        <li className="bg-purple-200 px-4 py-2 rounded-full">UI/UX Design</li>
      </ul>
    </section>
  );
}
