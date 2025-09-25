import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Navbar */}
        <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-purple-500"
            />
            <h1 className="text-xl font-bold">Your Name</h1>
          </div>
          <nav className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        {/* Content */}
        <main className="min-h-screen px-8 py-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-6">
          <p>© 2025 Your Name. All Rights Reserved.</p>
          <div className="flex justify-center gap-6 mt-3">
            <a href="https://github.com/" target="_blank">GitHub</a>
            <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
            <a href="https://twitter.com/" target="_blank">Twitter</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
