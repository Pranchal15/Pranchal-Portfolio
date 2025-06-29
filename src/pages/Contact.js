import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white text-center border-t border-gray-200"
    >
      <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        Whether you’re a recruiter, collaborator, or fellow builder — feel free to reach out! I'm always open to interesting conversations and new opportunities.
      </p>

      {/* Contact Links */}
      <div className="flex justify-center space-x-6 text-2xl text-gray-600">
        <a
          href="mailto:pranchal.agarwal@gmail.com"
          className="hover:text-blue-600"
          title="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Pranchal15"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/pranchalagarwal/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;
