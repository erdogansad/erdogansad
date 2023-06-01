import React from "react";

const Footer = () => {
  return (
    <footer className="bg-alabaster">
      <div className="container mx-auto">
        <span className="block text-4xl font-semibold py-16">
          Let's work together on
          <br />
          your next product.
        </span>
        <div className="flex justify-between pt-4 pb-16">
          <span>
            <span className="me-2">👉</span>
            <span className="text-shiraz underline underline-offset-4 font-semibold">erdogan.sad@gmail.com</span>
          </span>
          <ul className="flex gap-x-8 font-semibold">
            <li>Personal Blog</li>
            <li className="text-jade">Github</li>
            <li className="text-deepCerulean">Linkedin</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
