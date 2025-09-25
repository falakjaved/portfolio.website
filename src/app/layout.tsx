
import '../../styles/globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../../public/profile.jpg.jpg';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-purple-50 text-gray-800 font-sans">

        {/* Navbar */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
            
            {/* Left: Pic + Name */}
            <div className="flex items-center space-x-3">
              <Image
                src={profilePic}
                alt="Falak Javed"
                width={40}
                height={40}
                className="rounded-full border-2 border-purple-400"
              />
              <span className="font-bold text-lg">Falak Javed</span>
            </div>

            {/* Right: Navigation */}
            <nav className="space-x-6 font-medium">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-white mt-10 p-6 text-center shadow-inner">
          <p className="mb-2">Connect with me:</p>
          <div className="flex justify-center space-x-4">
  <a href="https://www.facebook.com/@Falak Javed " target="_blank" rel="noopener noreferrer">
    Facebook
  </a>
  <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>
  <a href="https://www.github.com/@falakjaved" target="_blank" rel="noopener noreferrer">
    GitHub
  </a>
  <a href="https://www.instagram.com/@falak_javed2" target="_blank" rel="noopener noreferrer">
    Instagram
  </a>
  <a href="https://www.tiktok.com/@falakjaved01" target="_blank" rel="noopener noreferrer">
    TikTok
  </a>
</div>
          <p className="mt-4 text-sm text-gray-500">© 2025 Falak Javed. All Rights Reserved</p>
        </footer>

      </body>
    </html>
  );
}
