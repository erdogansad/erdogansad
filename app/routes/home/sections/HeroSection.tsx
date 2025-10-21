import Threads from "~/components/Threads";
import RotatingText from "~/components/RotatingText";
import AnimatedContent from "~/components/AnimatedContent";
import SplitText from "~/components/SplitText";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { NavLink } from "react-router";

const HeroSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="bg-white dark:bg-black relative py-24 lg:py-18">
      <div className="hidden lg:block absolute top-0 start-0 w-full h-full">
        <Threads amplitude={1} distance={0} />
      </div>
      <div className="relative bg-gradient-to-r from-white via-white dark:from-black dark:via-black to-transparent z-10">
        <div className="absolute top-1/2 transform -translate-y-1/2 right-2 lg:right-16">
          <div className="absolute size-3 bg-sky-500 rounded-full top-0 left-1/2 transform -translate-x-1/2 animate-updown" />
          <div className="w-px h-36 bg-sky-500 "></div>
        </div>
        <div className="container space-y-6">
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={true}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={3}
          >
            <span className="block text-xs lg:text-base text-center lg:text-start text-sky-500 uppercase tracking-[0.4rem]">Fullstack Developer</span>
          </AnimatedContent>
          <h1 className="flex flex-col uppercase text-4xl text-center lg:text-start lg:text-9xl">
            <AnimatedContent
              className={i18n.language === "tr" ? "order-1" : ""}
              distance={100}
              direction="horizontal"
              reverse={true}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={i18n.language === "tr" ? 1.2 : 0.4}
            >
              <RotatingText
                texts={t("hero.title.rotating_texts", { returnObjects: true }) as string[]}
                mainClassName="block text-sky-500 justify-center lg:justify-start"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden py-0.5 sm:py-1 md:py-2"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={5000}
              />
            </AnimatedContent>
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={true}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={i18n.language === "tr" ? 0.4 : 0.8}
            >
              <span className="block">{t("hero.title.others.0")}</span>
            </AnimatedContent>
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={true}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={i18n.language === "tr" ? 0.8 : 1.2}
            >
              <span className="block">{t("hero.title.others.1")}</span>
            </AnimatedContent>
          </h1>

          <SplitText
            text={t("hero.subtitle")}
            className="text-gray-600 dark:text-gray-500 text-sm lg:text-xl !text-center lg:!text-start lg:w-1/3"
            delay={20}
            duration={0.1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-100px"
            textAlign="start"
            startDelay={1.5}
          />
          <ul className="flex justify-center lg:justify-start gap-5">
            {(t("social_list", { returnObjects: true }) as any[]).map((social: { name: string; url: string }, idx: number) => (
              <li key={idx}>
                <AnimatedContent
                  distance={100}
                  direction="vertical"
                  reverse={true}
                  duration={1.2}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={1.8 + idx * 0.2}
                >
                  <NavLink
                    to={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      "block px-8 py-3 border text-xs lg:text-sm uppercase transition-colors duration-300",
                      idx === 0
                        ? "border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white dark:hover:text-black"
                        : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                    )}
                  >
                    {social.name}
                  </NavLink>
                </AnimatedContent>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
