import React, { useEffect, useState } from "react";
import background from "@assets/img/background.png";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ReactTypingEffect from "react-typing-effect";
import { Transition } from "@headlessui/react";
import {
  ReactOriginal,
  ReduxOriginal,
  TailwindcssPlain,
  NextjsOriginal,
  BootstrapOriginal,
  NodejsOriginal,
  JqueryOriginal,
  MysqlOriginal,
  SqlitePlain,
  ComposerOriginal,
  PhpPlain,
  VuejsOriginal,
  JavascriptOriginal,
} from "devicons-react";
import { TbWorldWww } from "react-icons/tb";
import { useWindowScroll } from "@uidotdev/usehooks";

const list = ["Next.js Developer", "React Developer", "Node.js Developer", "Full-Stack Developer", "Front-End Developer", "Back-End Developer"];
const projects = [
  {
    title: "Nasa Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit, sagittis morbi taciti class eu pulvinar curabitur, malesuada magnis aptent dislobortis vulputate natoque. Class sem posuere fermentum sed vel nulla fringilla nisl taciti, suscipit eleifend dapibus luctus accumsan tristique anibh, ridiculus odio habitasse diam porta fusce nostra ante.",
    image: "https://via.placeholder.com/1600x900",
    github: "#",
    web: "#",
  },
  {
    title: "Nasa Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit, sagittis morbi taciti class eu pulvinar curabitur, malesuada magnis aptent dislobortis vulputate natoque. Class sem posuere fermentum sed vel nulla fringilla nisl taciti, suscipit eleifend dapibus luctus accumsan tristique anibh, ridiculus odio habitasse diam porta fusce nostra ante.",
    image: "https://via.placeholder.com/1600x900",
    github: "#",
    web: "#",
  },
  {
    title: "Nasa Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit, sagittis morbi taciti class eu pulvinar curabitur, malesuada magnis aptent dislobortis vulputate natoque.",
    image: "https://via.placeholder.com/1600x900",
    github: "#",
    web: "#",
  },
];

const Home = () => {
  const [shuffledList, setShuffledList] = useState(list);
  const [sections, setSections] = useState({
    one: false,
    two: false,
    three: false,
  });
  const [{ y }] = useWindowScroll();
  useEffect(() => {
    setShuffledList((prev) => {
      const shuffled = prev.sort(() => Math.random() - 0.5);
      return shuffled;
    });
  }, []);

  useEffect(() => {
    setSections((prev) => {
      if (y === 0) {
        return { ...prev, one: true };
      }
      if (y > 550 && y < 1250) {
        return { ...prev, two: true };
      }
      if (y > 1250) {
        return { ...prev, three: true };
      }
      return prev;
    });
  }, [y]);

  return (
    <main>
      <section id="main-section" className="h-screen">
        <div className="relative h-full w-full flex justify-center items-center">
          <div className="absolute h-full w-full bg-slate-900 -z-20"></div>
          <Transition className="absolute h-full w-full flex justify-center items-center" show={sections.one}>
            <Transition.Child
              className="absolute top-0 h-full w-full bg-black -z-10"
              enter="transition ease duration-1000 transform"
              enterFrom="opacity-0 translate-y-12"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease duration-300 transform"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-12"
            >
              <img className="h-full w-full object-cover object-bottom opacity-25" src={background} alt="" />
            </Transition.Child>
            <div className="flex flex-col items-center gap-5 lg:gap-10">
              <div className="flex flex-col items-center gap-2 lg:gap-8">
                <Transition.Child
                  enter="transition ease duration-1000 transform delay-500"
                  enterFrom="opacity-0 translate-y-12"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease duration-300 transform"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-12"
                >
                  <span className="text-blue-50 text-3xl md:text-5xl xl:text-7xl font-bold cursor-default font-oswald">Erdoğan Şad</span>
                </Transition.Child>
                <Transition.Child
                  enter="transition ease duration-1000 transform delay-1000"
                  enterFrom="opacity-0 translate-y-12"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease duration-300 transform"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-12"
                >
                  <span className="text-blue-50 md:text-xl xl:text-2xl font-semibold italic cursor-default font-arimo">
                    <ReactTypingEffect text={shuffledList} staticText="I'm a" speed="100" eraseSpeed="200" typingDelay="500" eraseDelay="2500" />
                  </span>
                </Transition.Child>
              </div>
              <Transition.Child
                enter="transition ease duration-1000 transform delay-[2000ms]"
                enterFrom="opacity-0 translate-y-12"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease duration-300 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-12"
              >
                <div className="flex flex-col lg:flex-row gap-4">
                  <Link
                    to={{ pathname: "https://www.linkedin.com/in/erdogansad" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-3 py-1 lg:px-6 lg:py-2 group"
                  >
                    <span className="absolute inset-0 w-full h-full rounded-lg transition duration-300 ease-out transform translate-x-0 translate-y-0 bg-blue-50 group-hover:translate-x-1 group-hover:translate-y-1"></span>
                    <span className="absolute inset-0 w-full h-full bg-blue-900 border border-blue-50 rounded-lg"></span>
                    <div className="flex gap-1 relative items-center text-blue-50">
                      <span>
                        <AiFillLinkedin className="h-4 w-4 lg:h-8 lg:w-8" />
                      </span>
                      <span className="font-bold font-arimo md:text-xl">Linkedin</span>
                    </div>
                  </Link>
                  <Link
                    to={{ pathname: "https://www.linkedin.com/in/erdogansad" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-3 py-1 lg:px-6 lg:py-2 group"
                  >
                    <span className="absolute inset-0 w-full h-full rounded-lg transition duration-300 ease-out transform translate-x-0 translate-y-0 bg-blue-50 group-hover:translate-x-1 group-hover:translate-y-1"></span>
                    <span className="absolute inset-0 w-full h-full bg-blue-900 border border-blue-50 rounded-lg"></span>
                    <div className="flex gap-1 relative items-center text-blue-50">
                      <span>
                        <AiFillGithub className="h-4 w-4 lg:h-8 lg:w-8" />
                      </span>
                      <span className="font-bold font-arimo md:text-xl">Github</span>
                    </div>
                  </Link>
                </div>
              </Transition.Child>
            </div>
          </Transition>
        </div>
      </section>
      <section id="about-section" className="bg-blue-200 py-12 lg:py-44">
        <div className="container flex flex-col lg:flex-row gap-12 lg:gap-32">
          <div
            className={`${
              sections.two ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            } transition-all duration-1000 basis-1/2 space-y-4 lg:space-y-10`}
          >
            <span className="text-4xl lg:text-6xl font-bold cursor-default font-oswald text-blue-950">About Me</span>
            <p className="text-justify text-blue-900 font-arimo text-sm lg:text-base leading-7 cursor-default">
              Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit, sagittis morbi taciti class eu pulvinar curabitur, malesuada magnis aptent dis
              lobortis vulputate natoque. Class sem posuere fermentum sed vel nulla fringilla nisl taciti, suscipit eleifend dapibus luctus accumsan tristique a
              nibh, ridiculus odio habitasse diam porta fusce nostra ante. Inceptos auctor nullam orci tristique et dictum mi iaculis commodo ullamcorper,
              praesent fames ac consequat hac libero at mus augue, porttitor duis himenaeos sodales nulla fusce vitae interdum cursus.
            </p>
          </div>
          <div
            className={`${
              sections.two ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            } transition-all duration-1000 delay-200 basis-1/2 space-y-4 lg:space-y-10`}
          >
            <span className="text-4xl lg:text-6xl font-bold cursor-default font-oswald text-blue-950">Skills</span>
            <div className="flex flex-wrap gap-3 lg:gap-6 justify-center">
              <span className="w-14 h-14 lg:w-20 lg:h-20">
                <JavascriptOriginal size="full" />
              </span>
              <span className="w-14 h-14 lg:w-20 lg:h-20">
                <ReactOriginal size="full" />
              </span>
              <span className="w-14 h-14 lg:w-20 lg:h-20">
                <ReduxOriginal size="full" />
              </span>
              <span className="w-14 h-14 lg:w-20 lg:h-20">
                <TailwindcssPlain size="full" />
              </span>
              <span className="w-14 h-14 lg:w-20 lg:h-20">
                <NextjsOriginal size="full" />
              </span>
              <span className="w-14 h-14 lg:w-20 lg:h-20">
                <BootstrapOriginal size="full" />
              </span>
              <span className="w-14 h-14 lg:w-20 lg:h-20">
                <NodejsOriginal size="full" />
              </span>
              <span className="w-14 h-14 lg:w-20 lg:h-20">
                <JqueryOriginal size="full" />
              </span>
              <span className="w-14 h-14 lg:w-20 lg:h-20">
                <MysqlOriginal size="full" />
              </span>
              <span className="w-14 h-14 lg:w-20 lg:h-20">
                <SqlitePlain size="full" />
              </span>
              <span className="w-14 h-14 lg:w-20 lg:h-20">
                <ComposerOriginal size="full" />
              </span>
              <span className="w-14 h-14 lg:w-20 lg:h-20">
                <PhpPlain size="full" />
              </span>
              <span className="w-14 h-14 lg:w-20 lg:h-20">
                <VuejsOriginal size="full" />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="projects-section" className="bg-blue-950 py-12 lg:py-44">
        <div
          className={`${
            sections.three ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          } transition-all duration-1000 container space-y-4 lg:space-y-12`}
        >
          <span className="text-4xl lg:text-6xl font-bold cursor-default font-oswald text-blue-200">Projects</span>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${sections.three ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} relative transition-all duration-1000 delay-${
                  500 * index
                } group`}
              >
                <div className="absolute inset-0 h-full w-full bg-blue-500 -z-10 rounded-xl transition-transform duration-500 translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <img src={project.image} className="transition-all duration-400 w-full h-full object-cover rounded-xl" alt="" />
                <div className="transition-all delay-[100ms] duration-400 absolute inset-0 flex translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 flex-col h-full py-3 px-5 rounded-xl gap-1 lg:gap-3 bg-blue-200/75">
                  <span className="transition-transform duration-500 delay-100 -translate-y-4 opacity-0 lg:text-2xl font-bold font-oswald text-blue-950 block text-center cursor-default group-hover:opacity-100 group-hover:translate-y-0">
                    {project.title}
                  </span>
                  <p className="hidden lg:block transition-transform duration-500 delay-100 translate-y-4 opacity-0 text-blue-950 font-arimo text-sm text-justify grow cursor-default group-hover:opacity-100 group-hover:translate-y-0">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center text-blue-950 grow shrink-0 lg:grow-0 lg:shrink">
                    <Link
                      to={{ pathname: project.github }}
                      className="transition-all duration-500 delay-100 group/inner -translate-x-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 w-10 h-10"
                    >
                      <div className="absolute inset-0 w-full h-full bg-blue-900 rounded-xl transition-transform duration-300 translate-x-0 translate-y-0 group-hover/inner:translate-x-1 group-hover/inner:translate-y-1"></div>
                      <div className="relative p-1 bg-blue-50 border border-blue-900 rounded-xl group/inner transition-color duration-200">
                        <AiFillGithub className="h-full w-full" />
                      </div>
                    </Link>
                    <Link
                      to={{ pathname: project.web }}
                      className="transition-all duration-500 delay-100 group/inner translate-x-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 w-10 h-10"
                    >
                      <div className="absolute inset-0 w-full h-full bg-blue-900 rounded-xl transition-transform duration-300 translate-x-0 translate-y-0 group-hover/inner:translate-x-1 group-hover/inner:translate-y-1"></div>
                      <div className="relative p-1 bg-blue-50 border border-blue-900 rounded-xl group/inner transition-color duration-200">
                        <TbWorldWww className="h-full w-full" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
