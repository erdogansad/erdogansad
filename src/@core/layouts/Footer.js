import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { useSelector } from "react-redux";
import Button from "@components/Button";

const socials = {
  Github: FiGithub,
  Linkedin: FaLinkedinIn,
  "E-Mail": FaEnvelope,
};

const Footer = () => {
  const { data } = useSelector((state) => state.root);

  return (
    <footer id="contact" className="w-full bg-blue-100">
      <div className="container mx-auto flex flex-col gap-6 items-center justify-center py-12 lg:py-16">
        <div className="flex flex-col items-center gap-3">
          <span className="font-oswald text-xl text-blue-950 lg:text-4xl font-bold select-none cursor-default">{data.other_texts[0]}</span>
          <span className="font-arimo text-xs lg:text-lg select-none cursor-default">{data.other_texts[1]}</span>
        </div>
        <div className="flex items-center gap-2 lg:gap-5">
          {data.socials.map((social, index) => (
            <Button theme="secondary" key={index} to={social.url} ButtonIcon={socials[social.title]} />
          ))}
        </div>
        <span className="font-arimo lg:text-lg font-thin">{data.other_texts[2]}</span>
      </div>
    </footer>
  );
};

export default Footer;
