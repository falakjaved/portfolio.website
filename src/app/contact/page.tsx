export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto py-16">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded-md"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="p-3 border rounded-md"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700"
        >
          Send Message
        </button>
      </form>
      <p className="mt-6 text-gray-600">
        I’ll get back to you as soon as possible. Thanks for reaching out!
      </p>
    </section>
  );
}
