import React from "react";

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4 flex flex-col gap-10">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">Get in touch</h1>
      <form className="flex flex-col gap-6 bg-[#23262b] border border-[#2d2f36] rounded-lg p-8">
        <input type="text" placeholder="Name" className="bg-[#23262b] border border-[#2d2f36] rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500" />
        <input type="email" placeholder="Email" className="bg-[#23262b] border border-[#2d2f36] rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500" />
        <textarea placeholder="Message" rows={5} className="bg-[#23262b] border border-[#2d2f36] rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500" />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition">Send Message</button>
      </form>
      <div className="text-gray-400 text-sm flex flex-col gap-1">
        <span>Email: contact@john.com</span>
        <span>Phone: (414) 977 - 048</span>
      </div>
    </section>
  );
} 