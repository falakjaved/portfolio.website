
import '../../styles/globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../../public/profile.jpg';

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
              <Link href="/projects">projects</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-purple-100 text-center p-6 mt-10 rounded-2xl shadow-md">
  <p className="mb-3 text-lg font-semibold text-purple-800">Connect with me:</p>
  
  <div className="flex justify-center space-x-6 text-purple-700 font-medium">
     <a 
      href="https://www.facebook.com/falak.javed" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-purple-900 hover:underline"
    >
      Facebook
    </a>
     <a 
  href="https://www.linkedin.com/in/falakjavad-javed-7288b5387"
  target="_blank" 
  rel="noopener noreferrer"
  className="hover:text-purple-900 hover:underline"
>
  LinkedIn
</a>
    <a 
      href="https://github.com/falakjaved" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-purple-900 hover:underline"
    >
      GitHub
    </a>
    <a 
      href="https://www.instagram.com/falak_javed2" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-purple-900 hover:underline"
    >
      Instagram
    </a>
    <a 
      href="https://www.tiktok.com/@falakjaved01" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-purple-900 hover:underline"
    >
      TikTok
    </a>
     <a 
  href="https://wa.me/+923241630151" 
  target="_blank" 
  rel="noopener noreferrer"
  className="hover:text-purple-900 hover:underline"
>
  WhatsApp
</a>


  </div>

  <p className="mt-6 text-sm text-gray-500">© 2025 Falak Javed. All Rights Reserved</p>
</footer>
      </body>
    </html>
  );
}
