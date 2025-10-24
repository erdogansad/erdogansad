import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import AnimatedContent from "~/components/AnimatedContent";
import SplitText from "~/components/SplitText";
import Icon from "~/components/Icon";
import { useSharedRef } from "~/context/ContextRef";
import { useSelector } from "react-redux";
import type { RootState } from "~/redux/store";
import Button from "~/components/Button";

const Contact = () => {
  const { hwSupported } = useSelector((state: RootState) => state.root);
  const { contactRef } = useSharedRef();
  const { t } = useTranslation();

  return (
    <section
      ref={contactRef}
      className="container py-12 lg:py-24 lg:space-y-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-40"
    >
      <div className="basis-2/3 space-y-6">
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
            <span>{t("contact.title.0")}</span>
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
            <span className="block text-sky-500">{t("contact.title.1")}</span>
          </AnimatedContent>
        </h2>
        <SplitText
          text={t("contact.subtitle")}
          className="!text-center lg:!text-start lg:w-2/3 lg:text-lg text-gray-600 dark:text-gray-500"
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
      </div>
      <div className="basis-1/3 space-y-8">
        <ul className="space-y-3 *:tracking-[0.15rem]">
          {(t("contact.list", { returnObjects: true }) as any[]).map((contact, idx) => (
            <li key={idx}>
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
                delay={0}
                isAnimated={hwSupported}
              >
                {contact.url ? (
                  <NavLink to={contact.url} className="flex items-center gap-2 group">
                    <div className="border border-sky-500 p-2 group-hover:bg-sky-500 transition-colors duration-300">
                      <Icon
                        name={contact.icon}
                        className="size-4 text-sky-500 group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
                      />
                    </div>
                    <span>{contact.text}</span>
                  </NavLink>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="border border-sky-500 p-2">
                      <Icon name={contact.icon} className="size-4 text-sky-500" />
                    </div>
                    <span>{contact.text}</span>
                  </div>
                )}
              </AnimatedContent>
            </li>
          ))}
        </ul>
        <ul className="flex gap-5">
          {(t("social_list", { returnObjects: true }) as any[]).map((social: { name: string; url: string }, idx: number) => (
            <li key={idx}>
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
                delay={0.1 * idx}
                isAnimated={hwSupported}
              >
                <Button to={social.url} theme={idx % 2 === 0 ? "primary" : "secondary"}>
                  {social.name}
                </Button>
              </AnimatedContent>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
