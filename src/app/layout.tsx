import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Chris' Portfolio",
  description: "Explore Chris' work in AI development, LLM applications, and intelligent systems engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/browser_pic.ico" type="image/x-icon" />
      </head>
      <body className="antialiased text-white min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif', backgroundColor: '#1B1E22' }}>
        <header className="w-full flex items-center justify-between py-6 mt-6 px-8 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-blue-500" xmlns="http://www.w3.org/2000/svg"><path d="M8 17L3 12L8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 7L21 12L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 4L11 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>AI Developer</span>
          </div>
          {/* Nav */}
          <nav className="flex items-center gap-8 text-xl font-medium">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link href="/portfolio" className="hover:text-blue-400 transition-colors">Projects</Link>
          </nav>
        </header>
        <main className="w-full flex flex-col items-center justify-center flex-1">
          {children}
        </main>
        {/* Footer */}
        <footer className="w-full border-t border-[#23262b] mt-24 pt-16 pb-8 bg-[#1B1E22]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-60 gap-0">
            {/* Profile & Social */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <Image src="/profile-bg.png" alt="Christopher Anandaraj" width={120} height={120} className="rounded-full bg-[#23262b] border-4 border-[#23262b]" />
              <div>
                <div className="text-4xl font-bold text-white">Christopher Anandaraj</div>
                <div className="text-gray-400 text-2xl">Software Engineer/AI Intern</div>
              </div>
              <div className="flex gap-4 mt-2">
                <a href="https://www.linkedin.com/in/christopher-anandaraj/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition text-gray-300">
                  <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
                </a>
                <a href="https://github.com/Christopher-Anandaraj" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-400 transition text-gray-300">
                  <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.102.823 2.222v3.293c0 .318.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
            {/* Contact Info */}
            <div className="flex-1 flex flex-col items-center md:items-end gap-4">
              <div className="text-4xl font-bold text-white mb-2 flex items-center gap-2">Get in touch <span className="text-blue-400">→</span></div>
              <div className="flex flex-col md:flex-row gap-8 w-full md:justify-end">
                <div>
                  <div className="text-gray-400 font-bold uppercase text-xs mb-1">EMAIL ME:</div>
                  <a href="mailto:js01.christopher@gmail.com" className="text-white font-mono text-lg border-b-2 border-gray-500 hover:text-blue-400 transition inline-flex items-center gap-2">js01.christopher@gmail.com <span aria-hidden>→</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 px-8 text-center text-gray-500 text-sm border-t border-[#23262b] pt-6">
            Copyright © {new Date().getFullYear()} Christopher Anandaraj | Inspired by Developer X
          </div>
        </footer>
      </body>
    </html>
  );
}
