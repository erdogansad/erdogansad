import { RootState } from "@/redux/slices/rootSlice";
import { useSelector } from "react-redux";
import Section from "@/core/components/Section";
import { motion } from "framer-motion";

const WhatCanIDo = () => {
  const { whatCanIDo } = useSelector((state: { root: RootState }) => state.root.data);
  return (
    <Section className="bg-white dark:bg-slate-900 transition-colors duration-500" title="Neler yapabilirim?">
      <div className="space-y-10 divide-y">
        {whatCanIDo?.map((item, index) => (
          <div key={index} className="flex flex-col-reverse md:flex-row items-center gap-5 md:gap-10 pt-10 first:pt-0">
            <div className="basis-full space-y-3 text-center md:text-start">
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.25) / 2 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -10 },
                }}
                className="text-4xl select-none text-slate-950 dark:text-slate-50 transition-colors"
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.25) / 2 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -10 },
                }}
                className="select-none text-slate-950 dark:text-slate-50 transition-colors"
              >
                {item.description}
              </motion.p>
            </div>
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.25) / 2 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -10 },
              }}
              className="aspect-video object-cover object-center md:max-w-96 select-none rounded-lg"
              src={item.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhatCanIDo;
