
// import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <main id="footer" className="p-10 font-[times-new-roman] bg-gray-100 w-full">
      <div className="flex flex-wrap justify-center md:justify-around">
        <div className="flex flex-col w-full md:w-1/4 mb-6">
          <h1 className="text-xl font-bold mb-2">About Me</h1>
          <p className="text-gray-700 w-[90%]">
            I'm a passionate web developer who excels at transforming ideas into
            stunning and functional websites. With skills in HTML, CSS, and
            JavaScript, I aim to create seamless user experiences that stand out
            in today's digital landscape.
          </p>
        </div>

        <div className="flex flex-col w-full md:w-1/4 mb-6">
          <h2 className="text-xl font-bold mb-2">Quick Links</h2>
          <nav className="flex flex-col gap-1">
            <a
              href="/"
              className="text-gray-600 hover:text-[#297B67] hover:underline transition duration-300 transform hover:scale-105"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-[#297B67] hover:underline transition duration-300 transform hover:scale-105"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-[#297B67] hover:underline transition duration-300 transform hover:scale-105"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-[#297B67] hover:underline transition duration-300 transform hover:scale-105"
            >
              Projects
            </a>
            <a
              href="#Contact"
              className="text-gray-600 hover:text-[#297B67] hover:underline transition duration-300 transform hover:scale-105"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="flex flex-col w-full md:w-1/4 mb-6">
          <h3 className="text-xl font-bold mb-2">My Skills</h3>
          <ul className="flex flex-col gap-1 text-gray-700">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        <div className="flex flex-col w-full md:w-1/4 mb-6">
          <h4 className="text-xl font-bold mb-2">Connect With Me</h4>
          <div className="flex md:flex-col flex-row justify-around text-2xl text-gray-700 gap-2">
            <a
              href=""
              aria-label="GitHub Profile"
            >
              <span className="text-[#297B67] transition duration-300 hover:text-blue-600">
                <FaGithub />
              </span>
            </a>
            <a
              href=""
              aria-label="Instagram Profile"
            >
              <span className="text-[#297B67] transition duration-300 hover:text-blue-600">
                <FaInstagram />
              </span>
            </a>
            <a
              href=""
              aria-label="Twitter Profile"
            >
              <span className="text-[#297B67] transition duration-300 hover:text-blue-600">
                <FaTwitter />
              </span>
            </a>
            <a
              href=""
              aria-label="Facebook Profile"
            >
              <span className="text-[#297B67] transition duration-300 hover:text-blue-600">
                <FaFacebook />
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
