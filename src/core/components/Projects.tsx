import { RootState } from "@/redux/slices/rootSlice";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState("-40.5rem");
  const [scrollZero, setScrollZero] = useState("21.5rem");
  const { projects } = useSelector((state: { root: RootState }) => state.root.data);

  useEffect(() => {
    const updateScrollDistance = () => {
      if (window.innerWidth >= 1920) {
        setScrollDistance("-75rem");
        setScrollZero("22rem");
      } else if (window.innerWidth >= 1680) {
        setScrollDistance("-83rem");
        setScrollZero("14rem");
      } else if (window.innerWidth >= 1440) {
        setScrollDistance("-94rem");
        setScrollZero("11rem");
      } else if (window.innerWidth >= 1280) {
        setScrollDistance("-99rem");
        setScrollZero("6rem");
      } else if (window.innerWidth >= 1024) {
        setScrollDistance("-113rem");
        setScrollZero("4rem");
      } else if (window.innerWidth >= 768) {
        setScrollDistance("-127rem");
        setScrollZero("2rem");
      }
    };

    updateScrollDistance();
    window.addEventListener("resize", updateScrollDistance);

    return () => window.removeEventListener("resize", updateScrollDistance);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.5 });

  const x = useTransform(smoothScroll, [0, 0.6], [scrollZero, scrollDistance]);

  return (
    <>
      <section id="projelerim" ref={sectionRef} className="hidden md:block relative h-[300vh] bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="container">
            <h2 className="font-thin text-2xl pt-12 pb-8 select-none text-slate-950 dark:text-slate-50 transition-colors">Projelerim</h2>
          </div>
          <div className="relative w-full overflow-hidden">
            <motion.div className="flex gap-4" style={{ x }}>
              {projects?.map((project, index) => (
                <div key={index} className="rounded-lg bg-slate-200 dark:bg-slate-700 p-5 space-y-3 shrink-0 transition-colors">
                  <img className="w-[40rem] rounded aspect-video object-center object-cover" src={project.image} alt="" />
                  <div>
                    <h3 className="text-2xl select-none text-slate-950 dark:text-slate-50 transition-colors">{project.title}</h3>
                    <p className="text-sm select-none text-slate-950 dark:text-slate-50 transition-colors">{project.date}</p>
                  </div>
                  <p className="text-sm select-none text-slate-950 dark:text-slate-50 transition-colors">{project.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <section className="md:hidden bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="container pb-16 md:pt-16 md:pb-32">
          <h2 className="font-thin text-2xl pt-12 pb-8 select-none text-slate-950 dark:text-slate-50 transition-colors">Projelerim</h2>
          <div className="flex flex-col gap-5">
            {projects?.map((project, index) => (
              <div key={index} className="rounded-lg bg-slate-200 dark:bg-slate-700 p-5 space-y-3 transition-colors">
                <img className="w-full aspect-video object-cover object-center rounded select-none" src={project.image} alt="" />
                <div className="text-center">
                  <h3 className="text-2xl select-none text-slate-950 dark:text-slate-50 transition-colors">{project.title}</h3>
                  <p className="text-sm select-none text-slate-950 dark:text-slate-50 transition-colors">{project.date}</p>
                </div>
                <p className="text-sm text-center select-none text-slate-950 dark:text-slate-50 transition-colors">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
