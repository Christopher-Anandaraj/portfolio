import React from "react";
import Image from 'next/image';

export default function About() {
  return (
    <>
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
            <Image
              src="/profile-bg.png"
              alt="Profile"
              width={480}
              height={480}
              className="rounded-full object-contain w-120 h-120"
            />
          </div>
        </div>
      </section>
      {/* Story Section */}
      <section className="w-full bg-[#23262b] py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
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
      <section className="w-full py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <span className="text-blue-400 font-bold uppercase text-2xl mb-2 block">/ My Experience</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">AI Developer with hands-on experience across full-stack projects</h2>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="/contact" className="text-white font-semibold border-b-2 border-white pb-1 hover:text-blue-400 transition text-lg inline-flex items-center gap-2">Get in touch <span aria-hidden>→</span></a>
            </div>
          </div>
          <hr className="border-gray-700 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
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
    </>
  );
} 