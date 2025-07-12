import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Developer Portfolio",
  description: "Professional portfolio for an AI developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-white min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif', backgroundColor: '#1B1E22' }}>
        <header className="w-full flex items-center justify-between py-6 mt-6 px-8 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-blue-500" xmlns="http://www.w3.org/2000/svg"><path d="M8 17L3 12L8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 7L21 12L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 4L11 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>AI Developer</span>
          </div>
          {/* Nav */}
          <nav className="flex items-center gap-8 text-xl font-medium">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="/portfolio" className="hover:text-blue-400 transition-colors">Projects</a>
          </nav>
        </header>
        <main className="w-full flex flex-col items-center justify-center flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
