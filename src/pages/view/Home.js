import React, { lazy, useState } from "react";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import javascript from "@assets/img/skills/javascript.webp";
import react from "@assets/img/skills/react.webp";
import redux from "@assets/img/skills/redux.webp";
import nodejs from "@assets/img/skills/nodejs.webp";
import vscode from "@assets/img/skills/vscode.webp";
import tailwind from "@assets/img/skills/tailwind.webp";

import nasaApodImg from "@assets/img/projects/nasa.png";
import pizzaImg from "@assets/img/projects/pizza.png";
import clientAuthImg from "@assets/img/projects/client-auth.png";
import { Link } from "react-router-dom";

library.add(faGithub, faLinkedinIn);

const LazyHeader = lazy(() => import("@layouts/Header"));

const Home = () => {
  const [images] = useState([javascript, react, redux, nodejs, vscode, tailwind]);
  const [projectsImg] = useState([nasaApodImg, pizzaImg, clientAuthImg]);
  const { title, subTitle, titleImg, buttons, skills, profile, projects } = useSelector((store) => store.core.contents);

  return (
    <div className="font-inter overflow-x-hidden">
      <section className="relative pb-10 h-fit md:pb-0 md:h-screen bg-purpleHearth dark:bg-bunting after:absolute after:bottom-0 after:end-0 after:h-[100rem] after:lg:w-32 after:content-[''] after:overflow-y-hidden after:bg-sulu after:dark:bg-seaWeed">
        <LazyHeader />
        <div className="container grid lg:grid-cols-2 grid-cols-1 gap-x-20 place-items-center md:pt-10 xl:pt-20">
          <div className="order-last lg:order-first">
            <span className="block text-sulu text-center lg:text-start text-3xl md:text-6xl xl:text-7xl font-bold py-10">{title}</span>
            <span className="block text-sulu text-center lg:text-start text-xl md:text-3xl xl:text-4xl pb-10">{subTitle}</span>
            <div className="flex justify-center lg:justify-normal gap-x-4">
              {buttons.map((detail, id) => (
                <Link
                  to={detail.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={id}
                  className="bg-white dark:bg-balticSea flex items-center md:text-xl px-3 py-2 md:px-4 md:py-3 rounded-xl text-purpleHearth dark:text-white font-semibold"
                >
                  <FontAwesomeIcon className="me-2 text-xl md:text-2xl" icon={detail.icon} />
                  {detail.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:place-self-end z-10">
            <img className="rounded-3xl shadow-lg h-auto hidden md:block md:w-96 lg:w-auto" src={titleImg} alt="" />
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-40 dark:bg-balticSea">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-y-10 lg:gap-y-0 lg:grid-cols-3 lg:gap-x-10">
          <span className="col-span-1 md:col-span-2 lg:col-span-1 text-center lg:text-start text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-purpleHearth font-bold dark:text-sulu">
            {skills.title}
          </span>
          <div className="col-span-2 flex flex-col gap-y-6 md:flex-row mx-auto md:mx-0 justify-around">
            <div className="flex flex-col gap-y-6">
              {skills.list.slice(0, 3).map((skill, id) => (
                <div key={id} className="flex gap-x-5 items-center">
                  <img className="rounded w-28 h-28 lg:w-32 lg:h-32" src={images[id]} alt="" />

                  <span className="text-xl lg:text-2xl text-gray-500 dark:text-white">{skill.name}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-y-6">
              {skills.list.slice(3, 6).map((skill, id) => (
                <div key={id} className="flex gap-x-5 items-center">
                  <img className="rounded w-28 h-28 lg:w-32 lg:h-32" src={images[id + 3]} alt="" />
                  <span className="text-xl lg:text-2xl text-gray-500 dark:text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-20 bg-purpleHearth dark:bg-bunting">
        <div className="container">
          <span className="block mb-10 lg:mb-0 text-center lg:text-start text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-sulu font-bold">
            {profile.title}
          </span>
          <div className="grid gap-5 md:gap-10 md:grid-cols-2 lg:gap-5 lg:grid-cols-3 lg:py-10">
            <div className="col-span-1">
              <span className="text-3xl text-sulu dark:text-white">{profile.infTitle}</span>
              <ul className="list-none table border-spacing-y-8 text-sulu">
                {profile.infList.map((inf, id) => (
                  <li key={id} className="table-row">
                    <span className="table-cell pe-4 font-bold">{inf.name}</span>
                    <span className="text-white">{inf.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              className="mb-5 md:mb-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 place-self-center col-span-1 md:col-span-2 order-first lg:col-span-1 lg:order-none rounded-xl"
              src={profile.img}
              alt=""
            />
            <div>
              <span className="text-3xl text-sulu py-4 dark:text-white">{profile.aboutTitle}</span>
              {profile.aboutText.map((t, id) => (
                <p key={id} className="text-white py-4">
                  {t}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-sulu dark:bg-seaWeed">
        <div className="container">
          <span className="block text-center lg:text-start text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-purpleHearth font-bold dark:text-sulu">
            {projects.title}
          </span>
          <div className="flex flex-col gap-y-10 items-center pt-8 lg:pt-20 pb-10">
            {projects.list.map((project, id) => (
              <div key={id} className="bg-white w-80 md:w-96 lg:w-5/6 flex flex-col lg:flex-row gap-x-10 rounded-2xl shadow-xl dark:bg-mineShaft-600">
                <img className="rounded-t-2xl lg:rounded-r-none lg:rounded-s-2xl w-96 object-cover" src={projectsImg[id]} alt="" />
                <div className="flex flex-col flex-grow-1 items-stretch py-10">
                  <div className="flex-grow">
                    <span className="block text-center lg:text-start text-3xl font-bold text-purpleHearth dark:text-bilobaFlower">{project.title}</span>
                    <p className="text-justify py-4 px-10 lg:ps-0 lg:pe-16 text-gray-500 dark:text-white">{project.description}</p>
                  </div>
                  <div className="flex justify-center lg:justify-start gap-x-2 py-2">
                    {project.badges.map((badge, idx) => (
                      <button key={idx} className="rounded-full px-6 py-2 bg-purpleHearth text-white dark:bg-trueV">
                        {badge}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-center lg:justify-start gap-x-4 pt-4">
                    {project.links.map((link, idx) => (
                      <Link
                        to={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={idx}
                        className="underline underline-offset-4 font-semibold dark:text-sulu"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
