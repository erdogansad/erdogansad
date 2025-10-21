import AnimatedContent from "~/components/AnimatedContent";
import clsx from "clsx";
import SplitText from "~/components/SplitText";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="container py-36 lg:py-24 space-y-8 lg:space-y-16">
      <h2 className="text-center text-3xl lg:text-start lg:text-6xl uppercase lg:leading-20">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0}
        >
          <span>{t("projects.title.0")}</span>
        </AnimatedContent>
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.2}
        >
          <span className="block text-sky-500">{t("projects.title.1")}</span>
        </AnimatedContent>
      </h2>
      <div className="space-y-24">
        {(t("projects.list", { returnObjects: true }) as any[]).map((project, idx) => (
          <div key={idx} className={clsx("flex flex-col gap-5 lg:gap-10 items-center justify-between", idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse")}>
            <div className="relative group overflow-hidden transition-transform duration-500 hover:scale-[102%]">
              <div className="absolute h-full w-full transition-colors duration-500 group-hover:bg-sky-700/40 z-10" />
              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={idx % 2 === 0 ? true : false}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={0.1}
              >
                <img className="w-[94rem] transition-transform duration-500 group-hover:scale-[115%]" src={project.img} alt="" />
                <ul className="absolute w-full lg:start-4 bottom-4 flex flex-wrap gap-2 items-center justify-center lg:justify-start z-20">
                  {project.tech.map((tech: string, techIdx: number) => (
                    <li key={techIdx} className="dark:bg-black/70 bg-white/70 px-2 py-1.5 text-xs lg:text-sm border border-sky-500">
                      {tech}
                    </li>
                  ))}
                </ul>
              </AnimatedContent>
            </div>
            <div className="lg:w-2/3 space-y-4">
              <div className="space-y-1">
                <AnimatedContent
                  distance={100}
                  direction="horizontal"
                  reverse={idx % 2 === 0 ? false : true}
                  duration={1.2}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={0}
                >
                  <span className="block tracking-[0.2rem] text-center lg:text-start uppercase text-sky-500">
                    {t("projects.prefix")} 0{idx + 1}
                  </span>
                </AnimatedContent>
                <AnimatedContent
                  distance={100}
                  direction="horizontal"
                  reverse={idx % 2 === 0 ? false : true}
                  duration={1.2}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={0.15}
                >
                  <h3 className="text-2xl lg:text-4xl uppercase text-center lg:text-start">{project.title}</h3>
                </AnimatedContent>
              </div>
              <SplitText
                text={project.description}
                className="text-sm !text-center lg:!text-start lg:text-lg text-gray-600 dark:text-gray-500"
                delay={20}
                duration={0.1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.2}
                rootMargin="-100px"
                textAlign="start"
                startDelay={0.3}
              />
              <ul className="flex gap-4 justify-center lg:justify-start">
                <li>
                  <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                    delay={0.45}
                  >
                    <button className="block px-8 py-3 border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white dark:hover:text-black text-xs lg:text-sm uppercase cursor-pointer transition-colors duration-300">
                      View Project
                    </button>
                  </AnimatedContent>
                </li>
                <li>
                  <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                    delay={0.6}
                  >
                    <NavLink
                      to={project.button.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-8 py-3 border text-xs lg:text-sm uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer transition-colors duration-300"
                    >
                      {project.button.text}
                    </NavLink>
                  </AnimatedContent>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
