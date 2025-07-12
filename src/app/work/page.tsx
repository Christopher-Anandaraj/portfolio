import React from "react";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio site built with Next.js and Tailwind CSS to showcase my work and skills.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce web app with product listings, cart, and checkout, built for a local business.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Design System Library",
    description: "A reusable component library and design system for rapid UI development across multiple projects.",
    tech: ["TypeScript", "Storybook", "Figma"],
  },
  {
    title: "Real-time Chat App",
    description: "A real-time chat application with authentication and group messaging features.",
    tech: ["Next.js", "Socket.io", "Prisma", "PostgreSQL"],
  },
];

export default function Work() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 flex flex-col gap-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 tracking-tight">My Work</h1>
      <div className="grid gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="rounded-lg bg-gray-50 dark:bg-gray-900 p-6 flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-1">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 text-base mb-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-xs text-gray-700 dark:text-gray-200">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 