import { useRef } from "react";
import type { Route } from "./+types/home";
import Contact from "./sections/Contact";
import HeroSection from "./sections/HeroSection";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Erdogan Sad" }, { name: "description", content: "Erdogan Sad's personal website" }];
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
