import Projects from "@/core/components/Projects";
import WhatCanIDo from "@/core/components/WhatCanIDo";
import Section from "@/core/components/Section";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/store";
import { fetchData } from "@/redux/slices/rootSlice";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <main className="h-screen flex justify-center items-center mt-10 md:block md:h-auto md:mt-28 py-60 bg-white dark:bg-slate-900 transition-colors duration-500">
        <div className="container grid md:grid-cols-2 items-center gap-10">
          <div className="text-center md:text-start">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -10 },
              }}
              className="font-semibold text-4xl md:text-5xl select-none text-slate-950 dark:text-slate-50 transition-colors"
            >
              Merhaba!
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.85 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -10 },
              }}
              className="text-3xl md:text-3xl font-thin select-none text-slate-950 dark:text-slate-50 transition-colors"
            >
              Ben Erdoğan.
            </motion.p>
            <motion.ul className="flex justify-center md:justify-normal gap-2 pt-5 transition-colors">
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -10 },
                }}
              >
                <Link
                  className="block border rounded-full p-3 md:p-3 cursor-pointer select-none border-slate-950 text-slate-950 hover:bg-slate-400 hover:border-slate-400 transition-colors dark:text-slate-50 dark:border-slate-50"
                  to="https://www.linkedin.com/in/erdogansad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="size-5" />
                </Link>
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.95 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -10 },
                }}
              >
                <Link
                  className="block border rounded-full p-3 md:p-3 cursor-pointer select-none border-slate-950 text-slate-950 hover:bg-slate-400 hover:border-slate-400 transition-colors dark:text-slate-50 dark:border-slate-50"
                  to="https://www.github.com/erdogansad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub className="size-5" />
                </Link>
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -10 },
                }}
              >
                <Link
                  className="block border rounded-full p-3 md:p-3 cursor-pointer select-none border-slate-950 text-slate-950 hover:bg-slate-400 hover:border-slate-400 transition-colors dark:text-slate-50 dark:border-slate-50"
                  to="mailto:its@erdogans.space"
                >
                  <FaEnvelope className="size-5" />
                </Link>
              </motion.li>
            </motion.ul>
          </div>
          <div className="hidden md:block text-center md:text-start">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -10 },
              }}
              className="text-2xl md:text-4xl font-medium select-none text-slate-950 dark:text-slate-50 transition-colors"
            >
              Web uygulamaları başta olmak üzere;
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -10 },
              }}
              className="text-sm pt-3 md:text-base font-thin select-none text-slate-500 dark:text-slate-400 transition-colors"
            >
              Tüm cihazlar ve platformlar için, kullanıcı dostu dijital çözümler sunuyorum.
            </motion.p>
            <ul className="flex justify-center md:justify-start gap-2 pt-5">
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.3 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -10 },
                }}
              >
                <ScrollIntoView
                  smooth
                  scrollOptions={{
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest",
                  }}
                  selector="#iletisim"
                >
                  <button className="rounded-lg px-4 py-3 cursor-pointer select-none border-slate-950 bg-slate-950 text-slate-50 hover:bg-slate-400 hover:border-slate-400 transition-colors dark:border-slate-300 dark:bg-slate-50 dark:text-slate-950">
                    İletişime geç
                  </button>
                </ScrollIntoView>
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.4 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -10 },
                }}
              >
                <ScrollIntoView
                  smooth
                  scrollOptions={{
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  }}
                  selector="#projelerim"
                >
                  <button className="border rounded-lg px-4 py-3 border-slate-950 hover:border-slate-400 hover:text-slate-400 transition-colors dark:border-slate-50 dark:text-slate-50">
                    Projelerim
                  </button>
                </ScrollIntoView>
              </motion.li>
            </ul>
          </div>
        </div>
      </main>
      <Section id="hakkimda" className="bg-slate-50 dark:bg-slate-950 transition-colors duration-500" title="Hakkımda">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -10 },
          }}
          className="text-justify select-none text-slate-950 dark:text-slate-50 transition-colors"
        >
          2010 yılından beri LUA dilini kullanarak oyunlara çeşitli eklentiler geliştirmekteyim. 2019 yılından itibaren ise front-end'de React, Next.js,
          TailwindCSS, Bootstrap; back-end'de ise Node.js, MySQL, MongoDB gibi diller, çözümler ve kütüphaneler ile çalışmaktayım. Bununla birlikte C# ve Java
          dilleri ile de ilgilenmekteyim. Ayrıca kendimi geliştirmek için sürekli olarak yeni teknolojileri takip etmekte ve öğrenmeye çalışmaktayım.
        </motion.p>
      </Section>
      <WhatCanIDo />
      <Projects />
    </>
  );
};

export default Home;
