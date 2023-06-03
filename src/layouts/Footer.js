import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center py-20 dark:bg-balticSea">
      <span className="text-4xl font-bold text-purpleHearth dark:text-malibu">Send me a message!</span>
      <span className="text-center text-xl py-4 dark:text-white">
        Got a question or proposal, or just want
        <br />
        to say hello? Go ahead.
      </span>
      <span className="text-purpleHearth text-lg underline underline-offset-4 font-semibold dark:text-malibu">erdogan.sad@mail.com</span>
      <div className="flex gap-x-4 text-purpleHearth text-3xl py-4 dark:text-malibu">
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <span>
          <FontAwesomeIcon icon={faGithub} />
        </span>
        <span>
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
