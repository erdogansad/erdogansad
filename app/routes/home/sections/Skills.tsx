import { useState } from "react";
import Particles from "~/components/Particles";
import AnimatedContent from "~/components/AnimatedContent";
import clsx from "clsx";
import type { RootState } from "~/redux/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Button from "~/components/Button";

const Skills = () => {
  const { theme, hwSupported } = useSelector((state: RootState) => state.root);
  const { t } = useTranslation();
  const [selectedTech, setSelectedTech] = useState<number>(0);

  return (
    <section className="relative pt-12 pb-36 lg:py-24">
      <div className="absolute top-0 start-0 w-full h-full">
        {theme === "dark" ? (
          <Particles
            particleColors={["#F9F9F9"]}
            particleCount={100}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={true}
            cameraDistance={10}
            isAnimated={hwSupported}
          />
        ) : (
          <Particles
            particleColors={["#0A0A0A"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={true}
            cameraDistance={10}
            isAnimated={hwSupported}
          />
        )}
      </div>
      <div className="container relative z-10 space-y-8 lg:space-y-16">
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
            <span>{t("skills.title.0")}</span>
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
            delay={0.1}
            isAnimated={hwSupported}
          >
            <span className="block text-sky-500">{t("skills.title.1")}</span>
          </AnimatedContent>
        </h2>
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <ul className="h-fit lg:basis-2/3 flex flex-wrap items-start justify-center lg:justify-start gap-4">
            {(t("skills.list", { returnObjects: true }) as any[]).map((tech, idx) => (
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
                delay={0.1 * idx + 0.3}
                key={idx}
                isAnimated={hwSupported}
              >
                <li>
                  <Button onClick={() => setSelectedTech(idx)} theme="secondary" isSelected={selectedTech === idx}>
                    {tech.title}
                  </Button>
                </li>
              </AnimatedContent>
            ))}
          </ul>
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={1}
            className="lg:basis-1/3 bg-gray-200 dark:bg-gray-900 border border-gray-500 space-y-6 lg:space-y-12 p-8 lg:pb-12"
            isAnimated={hwSupported}
          >
            <h3 className="uppercase text-lg lg:text-2xl text-center lg:text-start text-sky-500">{t("skills.modal_title")}</h3>
            <div className="space-y-2">
              <h4 className="text-center lg:text-start text-lg lg:text-xl">{t(`skills.list.${selectedTech}.title`)}</h4>
              <p className="text-center lg:text-start lg:text-lg text-gray-600 dark:text-gray-500">{t(`skills.list.${selectedTech}.description`)}</p>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default Skills;
