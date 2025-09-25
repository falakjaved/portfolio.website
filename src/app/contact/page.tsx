export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto mt-20 p-4">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-3 rounded border border-gray-300"/>
        <input type="email" placeholder="Email" className="p-3 rounded border border-gray-300"/>
        <textarea placeholder="Message" rows={5} className="p-3 rounded border border-gray-300"></textarea>
        <button className="bg-purple-500 text-white py-3 rounded hover:bg-purple-600 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
