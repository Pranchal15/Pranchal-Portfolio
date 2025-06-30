import React from "react";
import profilePic from "../assets/profilePic.jpeg";
import { FaGraduationCap } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-start items-center text-center bg-gradient-to-br from-white to-blue-50 pt-12 pb-6 px-4"

    >
      {/* Profile Image */}
 <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 mb-8">
  <img
    src={profilePic}
    alt="Pranchal Agarwal"
    className="w-full h-full object-cover"
  />
</div>

      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
        Pranchal Agarwal
      </h1>

      {/* Education with icon */}
      <p className="mt-2 text-gray-700 text-base md:text-lg flex items-center justify-center gap-2 mb-2">
        <FaGraduationCap className="text-blue-600 text-xl" />
        MSCS @ UMass Amherst (Class of '25)
      </p>

      {/* Title */}
      {/* <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mb-3">
        Machine Learning Engineer • Building GenAI Systems
      </p> */}


<TypeAnimation
  sequence={[
    'Machine Learning Engineer', 2000,
    'Building GenAI Systems', 2000,
    'Solving Real-World Problems', 2000,
  ]}
  wrapper="span"
  speed={50}
  className="text-xl md:text-2xl text-gray-800 max-w-2xl mb-3 inline-block"
  repeat={Infinity}
/>

      {/* Bio */}
      {/* <p className="text-md md:text-lg text-gray-600 max-w-2xl mb-8 leading-relaxed">
        With a passion for solving real-world problems, I blend engineering rigor with research to build smart, scalable solutions that matter.
      </p> */}

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4">

       <a
  href="/Pranchal_Agarwal_Resume.pdf"
  download
  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 text-blue-800 font-semibold rounded-full text-lg shadow hover:bg-blue-200 transition ring-2 ring-blue-300"
>
  <FaDownload className="text-base" />
  Download Resumé
</a>

      </div>
    </section>
  );
};

export default Home;
