import React from "react";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const socials = [
  {
    name: "Github",
    href: "",
    icon: <FiGithub className="w-full h-full" />,
  },
  {
    name: "Linkedin",
    href: "",
    icon: <FaLinkedinIn className="w-full h-full" />,
  },
  {
    name: "Mail",
    href: "",
    icon: <FaEnvelope className="w-full h-full" />,
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-blue-100">
      <div className="container mx-auto flex flex-col gap-6 items-center justify-center py-12 lg:py-16">
        <div className="flex flex-col items-center gap-3">
          <span className="font-oswald text-xl lg:text-4xl font-bold cursor-default">Sormak istediğin bir şey mi var?</span>
          <span className="font-arimo text-xs lg:text-lg cursor-default">Aşağıdaki bağlantıları kullanarak bana ulaşabilirsin.</span>
        </div>
        <div className="flex items-center gap-2 lg:gap-5">
          {socials.map((social, index) => (
            <Link key={index} to={social.href} target="_blank" rel="noopener noreferrer" className="relative w-10 h-10 lg:w-12 lg:h-12 group">
              <div className="absolute inset-0 w-full h-full bg-blue-900 rounded-xl transition-transform duration-300 translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <span className="block w-full h-full rounded-xl bg-blue-50 border border-blue-900 p-2 text-blue-950 relative">{social.icon}</span>
            </Link>
          ))}
        </div>
        <span className="font-arimo lg:text-lg font-thin">erdogan.sad@windowslive.com</span>
      </div>
    </footer>
  );
};

export default Footer;
