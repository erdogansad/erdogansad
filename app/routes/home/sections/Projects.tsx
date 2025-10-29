import AnimatedContent from "~/components/AnimatedContent";
import clsx from "clsx";
import SplitText from "~/components/SplitText";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import type { RootState } from "~/redux/store";
import Button from "~/components/Button";

const Projects = () => {
  const { t } = useTranslation();
  const { hwSupported } = useSelector((state: RootState) => state.root);

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
          isAnimated={hwSupported}
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
          isAnimated={hwSupported}
        >
          <span className="block text-sky-500">{t("projects.title.1")}</span>
        </AnimatedContent>
      </h2>
      <div className="space-y-24">
        {(t("projects.list", { returnObjects: true }) as any[]).map((project, idx) => (
          <div key={idx} className={clsx("flex flex-col gap-5 lg:gap-10 items-center justify-between", idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse")}>
            <div className={clsx("relative group overflow-hidden", hwSupported && "transition-transform duration-500 hover:scale-[102%]")}>
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
                isAnimated={hwSupported}
              >
                <div className="relative">
                  <img className={clsx("w-[72rem]", hwSupported && "transition-transform duration-500 group-hover:scale-[105%]")} src={project.img} alt="" />
                  <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-20">
                    <div className={clsx("absolute h-full w-full group-hover:bg-sky-950/70", hwSupported && " transition-colors duration-500")} />
                    <img className={clsx("w-auto h-3/4 z-10")} src={project.img_front} alt="" />
                  </div>
                  <ul className="absolute w-full lg:start-4 bottom-4 flex flex-wrap gap-2 items-center justify-center lg:justify-start z-20">
                    {project.tech.map((tech: string, techIdx: number) => (
                      <li key={techIdx} className="dark:bg-black/70 bg-white/70 px-2 py-1.5 text-xs lg:text-sm border border-sky-500">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
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
                  isAnimated={hwSupported}
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
                  isAnimated={hwSupported}
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
                isAnimated={hwSupported}
              />
              <ul className="flex gap-4 justify-center lg:justify-start">
                {project.buttons.map((button: { text: string; url: string }, buttonIdx: number) => (
                  <li key={buttonIdx}>
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
                      delay={0.45 + buttonIdx * 0.15}
                      isAnimated={hwSupported}
                    >
                      <Button theme={buttonIdx === 0 ? "primary" : "secondary"} to={button.url}>
                        {button.text}
                      </Button>
                    </AnimatedContent>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
