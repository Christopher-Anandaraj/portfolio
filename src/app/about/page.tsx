import React from "react";

export default function About() {
  return (
    <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-center px-8 py-20">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-4xl">
        <div className="w-16 h-1 bg-white rounded mb-8" />
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 text-left">
          Nice to meet you,<br />I’m Christopher Anandaraj
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mb-10 text-left">
          I’m an AI developer specializing in secure, scalable systems and LLM applications. My work bridges research and production, with a focus on real-world impact and user experience.
        </p>
        <div className="flex gap-16 items-center border-t border-[#23262b] pt-8 w-full">
          <div className="flex items-center gap-2">
            <div className="text-5xl font-extrabold text-white">1</div>
            <div className="font-bold text-white text-lg leading-tight">
              Years of<br />experience
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-5xl font-extrabold text-white">4</div>
            <div className="font-bold text-white text-lg leading-tight">
              AI related<br />projects
            </div>
          </div>
        </div>
      </div>
      {/* Right: Profile Image */}
      <div className="flex-1 flex items-center justify-center mt-12 lg:mt-0">
        <div className="w-120 h-120 rounded-full bg-[#23262b] flex items-center justify-center shadow-2xl border-4 border-[#23262b]">
          <img
            src="/profile-bg.png"
            alt="Profile"
            className="rounded-full object-contain w-120 h-120"
          />
        </div>
      </div>
    </section>
  );
} 