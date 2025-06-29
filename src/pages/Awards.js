import React from "react";
import { FiExternalLink } from "react-icons/fi";
const awards = [
  {
    title: "Secured All India Rank 15 in IEEEXtreme",
    year: "2021",
    description: "IEEEXtreme is a 24-hour Competitive Programming contest.",
  },
  {
    title: "Tech Lead – Google Developer Student Club",
    year: "2022",
    description: "Led the GDSC Chapter at VBIT, organizing events and mentoring peers.",
  },
  {
    title: "My Bag of Certificates",
    year: "Since I could code",
    description: "I constantly upskill through courses and certifications to stay sharp.",
    link: "https://drive.google.com/drive/u/1/folders/1vsMkhI6QhfhFvmXJRDdL8Rz3v-R73n6D", // <-- Your actual certificate link here
  },
];

const Awards = () => {
  return (
    <section id="awards" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-center">Awards & Achievements</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {awards.map((award, idx) => (
          <div
            key={idx}
            className="w-80 bg-gray-50 border border-gray-200 shadow-sm rounded-xl p-6 flex flex-col"
          >
            <div className="flex-1 grid grid-rows-[auto_auto_1fr] gap-2">
              <h3 className="text-base font-semibold text-blue-700">
                {award.link ? (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {award.title}
                    <FiExternalLink className="inline-block text-blue-600 text-sm" />
                  </a>
                ) : (
                  award.title
                )}
              </h3>
              <p className="text-sm text-gray-500">{award.year}</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {award.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
