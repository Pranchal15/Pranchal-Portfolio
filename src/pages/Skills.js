import React from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      "Python", "SQL", "R", "C/C++", "HTML", "CSS", "JavaScript", "TypeScript",
    ],
  },
  {
    title: "AI/ML Tools",
    skills: [
      "TensorFlow", "PyTorch", "HuggingFace", "Scikit-Learn",
      "NumPy", "Pandas", "Keras"]
  },
 
  
  {
    title: "Deployment & Infra",
    skills: [
      "Docker", "FastAPI", "Git", "GitHub",
      "HPC Clusters", "Slurm",
    ],
  },
  {
    title: "Cloud Technologies",
    skills: [
      "AWS (S3, EC2)", "GCP"
    ],
  },
   {
    title: "Software Technologies",
    skills:["React.js", "Express.js","Streamlit","Gradio"]
  },
];


const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4">Skills & Tech Stack</h2>
    <p className="text-gray-700 max-w-3xl mx-auto mb-10 text-base italic">
  <span className="font-semibold text-blue-700">I’m a fast learner</span> who believes the right mindset matters more than the tech stack — but here’s a curated list of tools and technologies I’ve already worked with and grown confident in.
</p>


      <div className="overflow-x-auto">
        <div className="flex gap-6 min-w-max px-2">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-64 bg-white p-6 rounded-xl shadow border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                {category.title}
              </h3>
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
      </div>
    </section>
  );
};

export default Skills;
