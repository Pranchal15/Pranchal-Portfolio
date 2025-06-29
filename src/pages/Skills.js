import React from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Tailwind CSS", "Express", "Node.js", "Streamlit"],
  },
  {
    title: "AI / ML Tools",
    skills: ["PyTorch", "Hugging Face", "vLLM", "scikit-learn", "RAG"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Firebase", "Vercel", "Render", "GitHub Actions", "Docker"],
  },
  {
    title: "Databases",
    skills: ["Firestore", "MongoDB", "PostgreSQL", "Snowflake"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Skills & Tech Stack</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto text-left">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">{category.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <li
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
