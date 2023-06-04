import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useSelector } from "react-redux";

library.add(faGithub, faLinkedin, faEnvelope);

const Footer = () => {
  const { footer } = useSelector((store) => store.core.contents);
  if (footer) {
    return (
      <footer className="flex flex-col justify-center items-center py-20 dark:bg-balticSea">
        <span className="text-4xl font-bold text-purpleHearth dark:text-malibu">{footer.title}</span>
        <span className="text-center text-xl py-4 dark:text-white">{footer.subTitle}</span>
        <span className="text-purpleHearth text-lg underline underline-offset-4 font-semibold dark:text-malibu">{footer.email}</span>
        <div className="flex gap-x-4 text-purpleHearth text-3xl py-4 dark:text-malibu">
          {footer.badges.map((badge, id) => (
            <span key={id}>
              <FontAwesomeIcon icon={badge.icon} />
            </span>
          ))}
        </div>
      </footer>
    );
  }
};

export default Footer;
