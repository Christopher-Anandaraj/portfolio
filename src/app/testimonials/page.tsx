import React from "react";

const testimonials = [
  {
    name: "Andy Smith",
    title: "VP of DevOps",
    company: "Venture",
    text: "John did an amazing work with our web-app, everything he did to optimize our software help us to reduce our loading speed by 56%",
  },
  {
    name: "Jim Benson",
    title: "VP of DevOps",
    company: "Company",
    text: "We’ve never had come this far without John’s great attention to detail and care for the final product",
  },
  {
    name: "Sophie Moore",
    title: "VP of DevOps",
    company: "Studio",
    text: "I think John was essential to our product because he truly cared to deliver world-class work results",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 tracking-tight text-white">Testimonials</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-[#23262b] border border-[#2d2f36] rounded-lg p-6 flex flex-col gap-3">
            <p className="text-gray-200 text-base">“{t.text}”</p>
            <div className="mt-2">
              <span className="font-semibold text-white">{t.name}</span>
              <span className="text-gray-400 text-sm ml-2">- {t.title} at {t.company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 