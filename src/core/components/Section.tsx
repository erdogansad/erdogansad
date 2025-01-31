import clsx from "clsx";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface SectionProps {
  title: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ title, id, className, children }: SectionProps) => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => {
      if (window.innerWidth <= 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);

    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  return (
    <section id={id} className={clsx("pb-16 md:pt-16 md:pb-32", className)}>
      <div className="container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1, margin: isMobile ? "-10px" : "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="font-thin text-2xl pt-12 pb-8 select-none text-slate-950 dark:text-slate-50 transition-colors"
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
