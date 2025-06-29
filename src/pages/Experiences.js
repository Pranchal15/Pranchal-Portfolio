import React from "react";

const experiences = [
  {
    role: "Machine Learning Researcher (Open Sourced)",
    company: "Adobe Research",
    duration: "Jan 2025 – May 2025",
    description:
      "Built a regression-based evaluation pipeline for LLMs using factual consistency, relevance, and coherence. Integrated Prometheus judge model and optimized scoring accuracy.",
  },
  {
    role: "Machine Learning Intern",
    company: "SS&C Intralinks",
    duration: "Jan 2024 – May 2024",
    description:
      "Worked on fine-tuning LLMs and automating document workflows using NLP. Delivered a summarization module now used in production pipelines.",
  },
  // Add more entries as needed
];

const Experiences = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>

      <div className="max-w-3xl mx-auto text-left space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {exp.role} @ {exp.company}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
