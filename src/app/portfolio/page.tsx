import React from "react";
import Image from 'next/image';

const projects = [
  {
    title: "SkyScraper",
    category: "Hackathon Project / AI & Automation",
    image: "/project-skyscraper.jpg",
    hosted: false,
    description:
      "SkyScraper is an AI-powered dashboard designed to enhance aviation safety and operational decision-making. It provides real-time flight tracking with dynamic risk scores based on weather, ATC load, and aircraft data. The platform features a conversational AI assistant that answers safety queries, recommends rescheduling, and issues proactive alerts. A voice agent powered by Vapi enables phone-based customer interaction and lead qualification.",
    link: "https://github.com/TheClassicTechno/SkyScraper",
  },
  {
    title: "InvAI",
    category: "AI-Powered Investment Dashboard",
    image: "/project-invai.jpg",
    hosted: true,
    description:
      "InvAI is an AI-powered dashboard for tracking and optimizing personal investments. It connects to live portfolio data via Robinhood and uses Yahoo Finance for market history. A Gemini-powered assistant provides trend analysis, asset suggestions, and personalized insights. The platform features a modern UI with dynamic charts and performance summaries to guide financial decisions.",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section className="max-w-6xl mx-auto py-8 sm:py-16 px-2 sm:px-4">
      <div className="flex flex-col items-center mb-12">
        <div className="w-16 h-1 bg-white rounded mb-6" />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Projects</h1>
        <p className="text-lg text-gray-400 max-w-2xl text-center">Showcasing a selection of my work in AI, automation, and intelligent dashboards. Each project demonstrates a unique approach to solving real-world problems with modern technology.</p>
      </div>
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-[#23262b] border border-[#2d2f36] rounded-2xl p-0 flex flex-col min-h-[320px] sm:min-h-[400px] w-full shadow-2xl overflow-hidden">
            {/* Image section */}
            <div className="w-full h-40 sm:h-72">
              <Image
                src={project.image}
                alt={project.title}
                width={560}
                height={280}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Content section */}
            <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-10 flex-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{project.title}</h2>
              <span className="text-base sm:text-lg text-gray-400 mb-2">{project.category}</span>
              {project.description && (
                <p className="text-sm sm:text-base text-gray-300 mb-2">{project.description}</p>
              )}
              {project.hosted !== undefined && (
                <div className="text-xs sm:text-sm text-gray-400 mb-2">Hosted: <span className={`font-semibold ${project.hosted ? 'text-green-400' : 'text-red-400'}`}>{project.hosted ? 'True' : 'False'}</span></div>
              )}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-lg sm:text-xl font-semibold hover:underline self-start mt-auto">View project →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 