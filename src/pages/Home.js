import React from "react";
import profilePic from "../assets/profilePic.jpeg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-white to-blue-50 py-24 px-4"
    >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 mb-8">
        <img
          src={profilePic}
          alt="Naresh Agarwal"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        Pranchal Agarwal
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-6">
        Machine Learning Engineer • Building GenAI-Powered Systems
      </p>
      <p className="text-md text-gray-600 max-w-xl mb-8">
        With a passion for solving real-world problems, I blend engineering rigor with research to build smart, scalable solutions that matter.
      </p>
      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg shadow hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full text-lg shadow hover:bg-gray-300 transition"
        >
          Download Resume
        </a>
             </div>
    </section>
  );
};

export default Home;
