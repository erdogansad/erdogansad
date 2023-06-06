import React from "react";
import { useSelector } from "react-redux";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

library.add(faGithub, faLinkedin, faEnvelope);

const Footer = () => {
  const { title, subTitle, email, badges } = useSelector((store) => store.core.contents.footer);

  return (
    <footer className="flex flex-col justify-center items-center py-20 dark:bg-balticSea">
      <span className="text-center text-4xl font-bold text-purpleHearth dark:text-malibu">{title}</span>
      <span className="text-center text-xl py-4 dark:text-white">{subTitle}</span>
      <Link to={`mailto:${email}`} className="text-purpleHearth text-lg underline underline-offset-4 font-semibold dark:text-malibu">
        {email}
      </Link>
      <div className="flex gap-x-4 text-purpleHearth text-3xl py-4 dark:text-malibu">
        {badges.map((badge, id) => (
          <Link to={badge.url} target="_blank" rel="noopener noreferrer" key={id}>
            <FontAwesomeIcon icon={badge.icon} />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
