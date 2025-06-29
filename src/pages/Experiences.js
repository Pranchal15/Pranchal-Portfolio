import React from "react";

const experiences = [
  
  {
    role: "Machine Learning Researcher (Open Sourced)",
    company: "Adobe Research",
    location: "Remote, USA",
    duration: "Jan 2025 – May 2025",
    description: [
      "Pioneered a 7x computationally efficient alternative to supervised fine-tuning, trained on less human feedback.",
    ],
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "SS&C Intralinks",
    location: "Waltham, MA",
    duration: "Oct 2024 – Dec 2024",
    description: [
      "Benchmarked multiple VLMs on complex financial document understanding tasks resulting in 92% accuracy.",
"Designed multimodal ingestion pipelines that can automate data flows with 5x faster inference using LMDeploy."
    ],
  },
  {
    role: "Machine Learning Research Assistant",
    company: "Manning CICS - UMass",
    location: "Amherst, MA",
    duration: "May 2024 – Aug 2024",
    description: [
      "Created a multimodal 3D asset generation pipeline using GPT-4o with advanced textual and spatial prompting.",
    ],
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "GlobalSmart IT",
    location: "Remote, USA",
    duration: "May 2022 – June 2023",
    description: [
      "Built an end-to-end voice assistant, using OpenAI API for dynamic, context-aware conversational intelligence.",
      "Designed and developed an internal FAQ answering tool from meeting transcriptions, sales playbooks, product demos, and emails using NER, automatic tagging, and a QA chatbot.",
    ],
  },
];

const Experiences = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">Experience</h2>

      <div className="max-w-3xl mx-auto space-y-10 text-left border-l-2 border-blue-600 pl-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {exp.role}{" "}
              <span className="text-blue-600 font-medium">@ {exp.company}</span>
            </h3>
            <p className="text-sm text-gray-500">
              {exp.duration} · {exp.location}
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-sm leading-relaxed space-y-1">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experiences;