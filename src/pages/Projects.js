import React from "react";

const projects = [
  {
    title: "GenAI Evaluation Framework",
    description:
      "Built a regression-based pipeline for evaluating LLMs on summarization using factual consistency, coherence, and relevance scores.",
    tech: ["Python", "HuggingFace", "LLMs", "GenAI Evaluation"],
    links:[
    {url: "https://github.com/YOUR_USERNAME/genai-eval",
    label:"Read the paper"}]
  },
  {
     title: "Retrieval-Augmented Chatbot",
  description:
    "Deployed a chatbot powered by Retrieval-Augmented Generation (RAG) using Streamlit and vLLM.",
  tech: ["RAG", "Streamlit", "vLLM", "Mistral", "Python"],
  links:[
  {url: "https://github.com/Pranchal15/RAG_bot",
  label: "View on GitHub",},{
    url:"https://pranchal15-rag-bot-streamlit-app-5kqfex.streamlit.app/",
    label:"Launch Demo"
  }
  ]
  },
    {
  title: "Pratibha – Learning Management System (LMS)",
  description:
    "Built and deployed a full-stack LMS used by 6000+ students and faculty across 10+ departments reducing grading turnaround by 80%.",
  tech: ["ReactJS", "Firebase", "Google OAuth"],
  links: [
    {
      label: "View on GitHub",
      url: "https://github.com/YOUR_USERNAME/pratibha-lms",
    },
    {label:"Letter of Appreciation",url:"https://drive.google.com/file/d/1vaRrH0BwnfD5WGhYwPOx1co_tJtDSssy/view?usp=sharing"}
  ], // Or deploy URL if public
}

  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>



      {/* Project Cards */}
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
<div
  key={idx}
  className="bg-white p-5 rounded-xl shadow hover:shadow-lg text-left transition flex flex-col justify-between "
>


            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.links && (
  <div className="flex flex-wrap gap-3 mt-4 ">
    {project.links.map((link, i) => (
      <a
        key={i}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
         className="inline-block px-4 py-2 border border-blue-700 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-700 hover:text-white transition"
      >
        {link.label}
      </a>
    ))}
  </div>
)}

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
