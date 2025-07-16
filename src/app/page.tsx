'use client';

import React from "react";
import Image from 'next/image';

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/christopher-anandaraj/",
    label: "LinkedIn",
    icon: (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
    ),
  },
  {
    href: "https://github.com/Christopher-Anandaraj",
    label: "GitHub",
    icon: (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.102.823 2.222v3.293c0 .318.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z"/></svg>
    ),
  },
];

const companies = [
  { name: 'MostEdge', icon: <Image src="/mostedge_logo.jpg" alt="MostEdge Logo" width={28} height={28} style={{ height: 28, width: 'auto', display: 'inline-block', verticalAlign: 'middle', borderRadius: '4px' }} /> },
  { name: 'Georgia Tech', icon: <Image src="/gt_logo.jpg" alt="Georgia Tech Logo" width={28} height={28} style={{ height: 28, width: 'auto', display: 'inline-block', verticalAlign: 'middle', borderRadius: '4px' }} /> },
];

export default function Home() {
  // Scroll handler for down arrow
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-me-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative max-w-7xl mx-auto w-full px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-center min-h-[80vh] gap-8 lg:gap-0" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        {/* Background Image */}
        <div className="hidden lg:block absolute top-[126px] left-[20%] h-full w-[60%] z-0">
          <div className="relative h-full w-full">
            <Image
              src="/profile-bg.png"
              alt="Profile Background"
              width={400}
              height={400}
              className="object-contain object-top object-right h-full w-full opacity-90 select-none pointer-events-none"
              style={{ filter: 'drop-shadow(0 0 12px #181A1B)' }}
            />
          </div>
        </div>
        {/* Left: Hero Text */}
        <div className="flex-1 flex flex-col justify-center items-start gap-4 sm:gap-6 pt-4 sm:pt-8 lg:pt-0 z-10 lg:-ml-20 w-full">
          <div className="w-12 h-1 bg-white mb-2 rounded" />
          <h1 className="text-5xl sm:text-7xl font-bold leading-tight text-white">
            I’m Chris, an <br /> AI Developer
          </h1>
          <p className="text-lg mt-6 max-w-md" style={{ color: '#c3cad5', fontFamily: 'Space Grotesk, sans-serif', fontSize: 18, fontWeight: 400, lineHeight: '1.667em' }}>
            I build secure and scalable systems using large language models to solve real business problems across multiple domains.
          </p>
          <div className="mt-16">
            <button
              className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-4xl text-white hover:bg-blue-700 transition shadow-lg animate-bounce"
              onClick={scrollToAbout}
              aria-label="Scroll to About Me"
              type="button"
            >
              <span className="sr-only">Scroll Down</span>
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="animate-bounce" style={{ animationDuration: '1.5s' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
        </div>
        {/* Right: About Me & My Work Cards, Follow Me */}
        <div className="flex-1 flex flex-col justify-center items-start gap-6 sm:gap-10 w-full max-w-xs ml-0 sm:ml-auto z-10" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 18, fontWeight: 400, lineHeight: '1.667em' }}>
          <div className="w-full flex flex-col gap-8">
            {/* About Me */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-wide">ABOUT ME</h3>
              <p className="mb-6" style={{ color: '#c3cad5', fontFamily: 'Space Grotesk, sans-serif', fontSize: 18, fontWeight: 400, lineHeight: '1.667em' }}>I’m passionate about applied AI, with experience in LLM fine-tuning, RAG pipelines, and building end-to-end systems that power intelligent applications</p>
              <a href="/about" className="inline-flex items-center gap-2 text-white font-semibold border-b-2 border-white pb-1 hover:text-blue-400 transition">
                LEARN MORE <span aria-hidden>→</span>
              </a>
            </div>
            <hr className="border-[#23262b] my-2" />
            {/* My Work */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-wide">MY WORK</h3>
              <p className="mb-6" style={{ color: '#c3cad5', fontFamily: 'Space Grotesk, sans-serif', fontSize: 18, fontWeight: 400, lineHeight: '1.667em' }}>From hackathons to production tools, I’ve built AI systems for aviation safety, enterprise insights, and intelligent search, all backed by real data.</p>
              <a href="/portfolio" className="inline-flex items-center gap-2 text-white font-semibold border-b-2 border-white pb-1 hover:text-blue-400 transition">
                BROWSE PORTFOLIO <span aria-hidden>→</span>
              </a>
            </div>
            <hr className="border-[#23262b] my-2" />
            {/* Follow Me */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 tracking-wide">FOLLOW ME</h3>
              <div className="flex gap-5">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="hover:text-blue-400 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <div className="w-full bg-[#23262b] py-16 sm:py-30 mt-16 sm:mt-40" id="about-me-section">
        <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-25 px-4 sm:px-8">
          {/* Left: Main About (centered, with extra top margin) */}
          <div className="flex-1 min-w-0 max-w-3xl mt-8 sm:mt-24 w-full">
            <span className="font-bold text-blue-400 uppercase tracking-wider text-xl">/ About Me</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6 leading-tight"> I’ve been developing LLM applications since 2023</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-md leading-none">
              I build secure and scalable systems using large language models to solve real business problems across multiple domains.
            </p>
            <a href="/about" className="inline-flex items-center gap-2 text-white font-semibold border-b-2 border-gray-400 pb-1 hover:text-blue-400 transition text-lg">
              More about me <span aria-hidden>→</span>
            </a>
          </div>
          {/* Right: Stats (with extra top margin) */}
          <div className="flex-1 flex flex-col gap-4 min-w-0 max-w-3xl mt-8 sm:mt-40 items-start w-full">
            <div className="ml-2 w-full">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 items-start sm:items-center w-full">
                <div className="flex items-center gap-2">
                  <div className="text-6xl font-extrabold text-white leading-none">1</div>
                  <div className="font-bold text-white text-lg leading-tight">
                    Year of<br />experience
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-6xl font-extrabold text-white leading-none">4</div>
                  <div className="font-bold text-white text-lg leading-tight">
                    AI related<br />projects
                  </div>
              </div>
              </div>
              <p className="text-gray-400 text-base max-w-md mt-6">From building an aviation safety assistant for the UC Berkeley AI Hackathon to leading development on enterprise RAG chatbots that integrate SQL and MongoDB-backed knowledge, I thrive at the intersection of innovation, performance, and usability.</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto mt-10 sm:mt-20 px-4 sm:px-8">
          <hr className="border-gray-700 mb-8" />
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-center">
            <span className="text-gray-400 font-semibold uppercase tracking-wider text-sm">Previously worked at</span>
            <div className="flex gap-10 flex-wrap items-center mt-4 sm:mt-0">
              {companies.map((c) => (
                <span key={c.name} className="flex items-center gap-2 text-gray-200 text-lg font-semibold">
                  {c.icon}
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
