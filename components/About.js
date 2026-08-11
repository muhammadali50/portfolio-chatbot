"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BrainCircuit,
  CircleDot,
  Code2,
  Compass,
  Laptop,
  Sparkles,
  Trophy,
  Workflow,
} from "lucide-react";
import SectionDecorations from "@/components/SectionDecorations";

const focusAreas = [
  { name: "Artificial Intelligence", icon: BrainCircuit },
  { name: "Machine Learning", icon: Sparkles },
  { name: "Deep Learning", icon: BrainCircuit },
  { name: "Full-Stack Web Development", icon: Code2 },
  { name: "Automation", icon: Workflow },
];

const aboutDecorations = [
  {
    name: "Code",
    icon: Code2,
    className: "right-[5%] top-[9%] text-[#FB6C00]/[0.09]",
    iconClassName: "size-16 rotate-12 sm:size-24 lg:size-28",
    duration: 10,
  },
  {
    name: "Artificial intelligence",
    icon: BrainCircuit,
    className: "left-[3%] top-[42%] text-gray-900/[0.07]",
    iconClassName: "size-14 -rotate-12 sm:size-20",
    duration: 11,
    delay: 0.8,
  },
  {
    name: "Learning technology",
    icon: Laptop,
    className: "bottom-[12%] right-[3%] hidden text-gray-900/[0.065] sm:block",
    iconClassName: "size-20 rotate-6 lg:size-28",
    duration: 12,
    delay: 0.4,
  },
  {
    name: "Cricket",
    icon: CircleDot,
    className: "bottom-[22%] left-[5%] text-[#FB6C00]/[0.08]",
    iconClassName: "size-12 -rotate-6 sm:size-16",
    duration: 9,
    delay: 1.1,
  },
  {
    name: "Sports",
    icon: Trophy,
    className: "right-[34%] top-[4%] hidden text-gray-900/[0.06] lg:block",
    iconClassName: "size-14 rotate-12",
    duration: 10.5,
    delay: 0.6,
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-20 overflow-x-clip bg-transparent px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:px-12 lg:pb-32 lg:pt-20"
    >
      <div className="pointer-events-none absolute -left-40 top-1/3 size-80 rounded-full bg-[#FB6C00]/6 blur-3xl" />
      <SectionDecorations items={aboutDecorations} />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
        <motion.div {...reveal} className="lg:sticky lg:top-10 lg:self-start">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gray-600 sm:text-sm">
            <span className="h-px w-8 bg-[#FB6C00]" />
            About
          </p>

          <h2
            id="about-heading"
            className="mt-6 text-[clamp(3rem,7vw,6.2rem)] font-black leading-[0.9] tracking-[-0.06em] text-gray-900"
          >
            About
            <span className="block text-[#FB6C00]">Me.</span>
          </h2>

          <div className="mt-8 max-w-sm border-l-2 border-[#FB6C00] pl-5">
            <p className="text-lg font-semibold leading-7 text-gray-900">
              AI student and developer focused on intelligent, practical, and
              useful digital solutions.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm font-medium text-gray-600">
            <span className="grid size-10 place-items-center rounded-full border border-[#FB6C00]/20 bg-[#FB6C00]/7 text-[#FB6C00]">
              <Compass className="size-4" aria-hidden="true" />
            </span>
            Learning through hands-on work
          </div>
        </motion.div>

        <div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>
            <p className="text-2xl font-semibold leading-[1.45] tracking-[-0.025em] text-gray-900 sm:text-3xl sm:leading-[1.4]">
              Hi, I&apos;m Muhammad Ali, an Artificial Intelligence student and
              developer with a strong interest in building intelligent systems,
              modern web applications, and automation solutions.
            </p>

            <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
              I am currently pursuing a{" "}
              <strong className="font-semibold text-gray-900">
                BS in Artificial Intelligence
              </strong>{" "}
              and actively working on projects involving{" "}
              <strong className="font-semibold text-[#FB6C00]">
                Machine Learning, Deep Learning, Full-Stack Web Development,
                and Automation
              </strong>
              .
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <motion.article
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.12 }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-7 transition-colors hover:border-[#FB6C00]/35 sm:col-span-2 sm:p-8"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-[#FB6C00]" />
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#FB6C00] text-white shadow-lg shadow-[#FB6C00]/15">
                  <Compass className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900">
                    Development Approach
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    I focus on understanding the real problem first and then
                    building solutions that are simple, practical, efficient,
                    and easy to use. I enjoy experimenting with new technologies
                    and improving my skills through hands-on projects.
                  </p>
                </div>
              </div>
            </motion.article>

            <motion.article
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.16 }}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm shadow-gray-900/5 transition hover:-translate-y-1 hover:border-[#FB6C00]/35 hover:shadow-lg hover:shadow-[#FB6C00]/8"
            >
              <span className="grid size-11 place-items-center rounded-2xl border border-[#FB6C00]/20 bg-[#FB6C00]/7 text-[#FB6C00]">
                <BrainCircuit className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
                Current Focus
              </h3>
              <ul className="mt-5 space-y-3" aria-label="Current focus areas">
                {focusAreas.map(({ name, icon: Icon }) => (
                  <li key={name} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#FB6C00]/8 text-[#FB6C00]">
                      <Icon className="size-3.5" aria-hidden="true" />
                    </span>
                    {name}
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.2 }}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm shadow-gray-900/5 transition hover:-translate-y-1 hover:border-[#FB6C00]/35 hover:shadow-lg hover:shadow-[#FB6C00]/8"
            >
              <span className="grid size-11 place-items-center rounded-2xl border border-[#FB6C00]/20 bg-[#FB6C00]/7 text-[#FB6C00]">
                <Trophy className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
                Beyond Development
              </h3>
              <p className="mt-4 leading-7 text-gray-600">
                I enjoy playing badminton and have reached an intermediate
                level. I also enjoy cricket, watching TV series, and exploring
                new technologies and tools.
              </p>

              <div className="mt-6 flex flex-wrap gap-2" aria-label="Personal interests">
                {["Badminton", "Cricket", "TV Series", "New Technology"].map(
                  (interest) => (
                    <span
                      key={interest}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600"
                    >
                      {interest}
                    </span>
                  ),
                )}
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
