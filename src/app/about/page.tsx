import React from "react";
import Image from 'next/image';

export default function About() {
  return (
    <>
      <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 py-10 sm:py-20">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-4xl w-full">
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
        <div className="flex-1 flex items-center justify-center mt-8 sm:mt-12 lg:mt-0 w-full">
          <div className="w-40 h-40 sm:w-60 sm:h-60 lg:w-120 lg:h-120 rounded-full bg-[#23262b] flex items-center justify-center shadow-2xl border-4 border-[#23262b]">
            <Image
              src="/profile-bg.png"
              alt="Profile"
              width={240}
              height={240}
              className="rounded-full object-contain w-40 h-40 sm:w-60 sm:h-60 lg:w-120 lg:h-120"
            />
          </div>
        </div>
      </section>
      {/* Story Section */}
      <section className="w-full bg-[#23262b] py-10 sm:py-20 px-2 sm:px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {/* Card 1: Image */}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/story-1.jpg"
              alt="Coding on monitor"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Card 2: Text */}
          <div className="flex flex-col justify-center bg-[#23262b] rounded-2xl p-12 min-h-[400px]">
            <span className="text-blue-400 font-bold uppercase text-2xl mb-2">/ My Story</span>
            <h2 className="text-4xl font-bold text-white mb-4">How I started as an AI developer</h2>
            <p className="text-gray-400 text-xl">My journey into AI began with a curiosity for solving real-world problems using data and code. I started with small projects like object detection and quickly moved into building full-stack AI applications, ranging from chatbots to investment advisors. Over time, I realized the power of AI to make decisions smarter, faster, and more secure. Now, I build systems that combine LLMs, automation, and analytics to drive real impact.</p>
          </div>
          {/* Card 3: Text */}
          <div className="flex flex-col justify-center bg-[#23262b] rounded-2xl p-12 min-h-[400px]">
            <span className="text-blue-400 font-bold uppercase text-2xl mb-2">/ My Story</span>
            <h2 className="text-4xl font-bold text-white mb-4">My first website design back in 2001</h2>
            <p className="text-gray-400 text-xl">In 2023, I developed an object detection system that identified and measured bruises on fruits using Detectron2. The goal was to automate quality control and reduce produce waste through more accurate damage assessment. I trained the model on custom-labeled data and fine-tuned it for precision across different fruit types. That project laid the foundation for my interest in AI and its potential to solve practical, real-world problems.</p>
          </div>
          {/* Card 4: Image */}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/story-2.jpg"
              alt="Laptop coding by window"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section className="w-full py-16 sm:py-50 px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-8">
            <div>
              <span className="text-blue-400 font-bold uppercase text-2xl mb-2 block">/ My Experience</span>
              <div className="max-w-2xl">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">AI Developer with hands-on experience across full-stack projects</h2>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="/contact" className="text-white font-semibold border-b-2 border-white pb-1 hover:text-blue-400 transition text-lg inline-flex items-center gap-2">Get in touch <span aria-hidden>→</span></a>
            </div>
          </div>
          <hr className="border-gray-700 mb-8" />
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {/* Skill Set */}
            <div>
              <span className="text-gray-400 font-bold uppercase text-lg mb-2 block">Languages</span>
              <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 text-white text-lg font-semibold mb-6">
                <span>Python</span>
                <span>Java</span>
                <span>SQL</span>
                <span>C</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
              </div>
              <span className="text-gray-400 font-bold uppercase text-lg mb-2 block">Developer Tools</span>
              <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 text-white text-lg font-semibold mb-6">
                <span>Git</span>
                <span>VS Code</span>
                <span>PyCharm</span>
                <span>Jupyter</span>
              </div>
              <span className="text-gray-400 font-bold uppercase text-lg mb-2 block">Libraries</span>
              <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 text-white text-lg font-semibold mb-6">
                <span>Tensorflow</span>
                <span>PyTorch</span>
                <span>CUDA</span>
                <span>Transformers</span>
                <span>HuggingFace</span>
                <span>Llama.cpp</span>
                <span>NumPy</span>
                <span>React</span>
                <span>Next.js</span>
                <span>Pandas</span>
                <span>PyMongo</span>
              </div>
              <span className="text-gray-400 font-bold uppercase text-lg mb-2 block">Practical</span>
              <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 text-white text-lg font-semibold">
                <span>Large Language Model (LLM)</span>
                <span>Natural Language Processing (NLP)</span>
                <span>Retrieval Augmented Generation (RAG)</span>
                <span>Vector Database</span>
                <span>No-SQL database</span>
                <span>Computer Vision</span>
                <span>Machine Learning</span>
                <span>Artificial Intelligence</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience Timeline Section */}
      <section className="w-full py-10 sm:py-30 px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-8">
            <div>
              <span className="text-blue-400 font-bold uppercase text-2xl mb-2 block">/ My Experience</span>
              <div className="max-w-2xl">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">I&apos;ve worked with some amazing companies and institutions</h2>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="/contact" className="text-white font-semibold border-b-2 border-white pb-1 hover:text-blue-400 transition text-lg inline-flex items-center gap-2">Get in touch <span aria-hidden>→</span></a>
            </div>
          </div>
          <hr className="border-gray-700 mb-8" />
          <div className="flex flex-col gap-6 sm:gap-12">
            {/* Experience Card 1 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-6 min-w-[220px]">
                {/* Placeholder SVG for Venture */}
                <span className="text-gray-300">
                  <Image src="/mostedge_logo.jpg" alt="MostEdge Logo" width={36} height={36} className="rounded-md" />
                </span>
                <span className="text-white text-xl font-bold">MostEdge</span>
              </div>
              <div className="flex-1">
                <div className="text-2xl font-extrabold text-white mb-1">Software Engineer Intern</div>
                <div className="text-gray-400 text-base mb-1">Engineered a Retrieval-Augmented Generation (RAG) pipeline powered by a private LLM to analyze market trends by integrating data from multiple SQL databases. Optimized context handling and memory management to ensure accurate, multi-turn responses. Designed and deployed a responsive user interface that enables users to query the LLM using natural language and apply contextual filters for refined analysis.</div>
              </div>
              <div className="text-gray-400 text-lg font-bold min-w-[160px] text-right">MAY 2025 / AUG 2025</div>
            </div>
            <hr className="border-gray-700" />
            {/* Experience Card 2 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-6 min-w-[220px]">
                {/* Placeholder SVG for Agency */}
                <span className="text-gray-300">
                  <Image src="/gt_logo.jpg" alt="Georgia Tech Logo" width={36} height={36} className="rounded-md" />
                </span>
                <div className="max-w-xs truncate">
                  <span className="text-white text-xl font-bold">Georgia Tech</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-2xl font-extrabold text-white mb-1">Research Assistant</div>
                <div className="text-gray-400 text-base mb-1">Conducting research on hallucinations in various Large Language Models (LLMs) and their impact on user trust and decision-making. The work involves categorizing different types of hallucinations, analyzing the reliability of model responses, and identifying patterns in model behavior. Additionally, exploring and testing counter-measures aimed at reducing hallucinations to enhance the accuracy, safety, and overall user experience in AI-assisted interactions.</div>
              </div>
              <div className="text-gray-400 text-lg font-bold min-w-[160px] text-right">JAN 2025 / AUG 2025</div>
            </div>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section className="w-full bg-[#23262b] py-16 sm:py-50 px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <span className="text-blue-400 font-bold uppercase text-2xl mb-2 block">/ My Experience</span>
              <div className="max-w-5xl w-full">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 w-full whitespace-nowrap">Education & Credentials</h2>
              </div>
            </div>
          </div>
          <hr className="border-gray-700 mb-8" />
          <div className="bg-[#23262b] rounded-2xl overflow-hidden">
            {/* Card 1 */}
            <div className="p-12 w-full">
              <div className="text-gray-400 font-bold uppercase text-sm mb-2">Georgia Institute of Technology / MAY 2024 – MAY 2027</div>
              <div className="text-2xl font-extrabold text-white mb-2">B.S. in Computer Science (Cybersecurity & Intelligence concentration)</div>
              <div className="text-gray-400 text-base">Dean’s List student focused on AI systems, large language models, and data-driven security solutions.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 