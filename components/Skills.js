"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Blocks,
  BrainCircuit,
  Braces,
  Code2,
  Database,
  Eye,
  Github,
  GitBranch,
  MessagesSquare,
  Monitor,
  Network,
  Palette,
  PanelsTopLeft,
  Server,
  Sparkles,
  SquareCode,
  Terminal,
  Workflow,
  Wrench,
} from "lucide-react";
import SectionDecorations from "@/components/SectionDecorations";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Monitor,
    layout: "lg:col-span-7",
    skills: [
      { name: "HTML", icon: Code2 },
      { name: "CSS", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "Next.js", icon: PanelsTopLeft },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    layout: "lg:col-span-5",
    skills: [
      { name: "Python", icon: Terminal },
      { name: "Django", icon: Blocks },
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    layout: "lg:col-span-7",
    skills: [
      { name: "Machine Learning", icon: Sparkles },
      { name: "Deep Learning", icon: Network },
      { name: "Computer Vision", icon: Eye },
      { name: "Natural Language Processing (NLP)", icon: MessagesSquare },
    ],
  },
  {
    title: "Database",
    icon: Database,
    layout: "lg:col-span-5",
    skills: [{ name: "MySQL", icon: Database }],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    layout: "lg:col-span-7",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "Visual Studio Code", icon: SquareCode },
    ],
  },
  {
    title: "Automation",
    icon: Workflow,
    layout: "lg:col-span-5",
    skills: [{ name: "n8n", icon: Workflow }],
  },
];

const skillsDecorations = [
  {
    name: "HTML",
    icon: Code2,
    className: "right-[4%] top-[7%] text-[#FB6C00]/[0.09]",
    iconClassName: "size-16 rotate-12 sm:size-24 lg:size-28",
    duration: 10,
  },
  {
    name: "CSS",
    icon: Palette,
    className: "left-[3%] top-[33%] text-gray-900/[0.07]",
    iconClassName: "size-14 -rotate-12 sm:size-20 lg:size-24",
    duration: 11,
    delay: 0.6,
  },
  {
    name: "JavaScript",
    icon: Braces,
    className: "bottom-[24%] right-[2%] hidden text-gray-900/[0.07] sm:block",
    iconClassName: "size-20 rotate-6 lg:size-28",
    duration: 12,
    delay: 1.1,
  },
  {
    name: "Database",
    icon: Database,
    className: "bottom-[8%] left-[5%] text-[#FB6C00]/[0.08]",
    iconClassName: "size-14 -rotate-6 sm:size-20",
    duration: 9.5,
    delay: 0.4,
  },
  {
    name: "GitHub",
    icon: Github,
    className: "right-[34%] top-[3%] hidden text-gray-900/[0.06] lg:block",
    iconClassName: "size-16 rotate-12",
    duration: 10.5,
    delay: 0.9,
  },
  {
    name: "Automation",
    icon: Workflow,
    className: "bottom-[3%] right-[31%] hidden text-[#FB6C00]/[0.07] lg:block",
    iconClassName: "size-14 -rotate-12",
    duration: 11.5,
    delay: 1.3,
  },
];

export default function Skills() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.12 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative scroll-mt-20 overflow-x-clip bg-transparent px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-52 top-1/3 size-96 rounded-full bg-[#FB6C00]/5 blur-3xl" />
      <SectionDecorations items={skillsDecorations} />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          {...reveal}
          className="flex flex-col gap-8 border-b border-gray-200 pb-10 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gray-600 sm:text-sm">
              <span className="h-px w-8 bg-[#FB6C00]" />
              Skills
            </p>
            <h2
              id="skills-heading"
              className="mt-5 text-[clamp(3rem,6vw,5.5rem)] font-black leading-[0.92] tracking-[-0.06em] text-gray-900"
            >
              Technical
              <span className="block text-[#FB6C00]">Toolkit.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <div className="rounded-2xl border border-gray-200 bg-white px-5 py-3">
              <p className="text-2xl font-black tracking-tight text-gray-900">15</p>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">
                Technologies
              </p>
            </div>
            <div className="rounded-2xl border border-[#FB6C00]/25 bg-[#FB6C00]/6 px-5 py-3">
              <p className="text-2xl font-black tracking-tight text-[#FB6C00]">06</p>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">
                Categories
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {skillGroups.map(({ title, icon: CategoryIcon, layout, skills }, index) => (
            <motion.article
              key={title}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm shadow-gray-900/5 transition duration-300 hover:-translate-y-1 hover:border-[#FB6C00]/40 hover:shadow-xl hover:shadow-[#FB6C00]/8 sm:p-7 ${layout}`}
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#FB6C00] transition-transform duration-300 group-hover:scale-x-100" />

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-[#FB6C00]/20 bg-[#FB6C00]/7 text-[#FB6C00] transition-colors group-hover:bg-[#FB6C00] group-hover:text-white">
                    <CategoryIcon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FB6C00]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-xl font-black tracking-[-0.025em] text-gray-900">
                      {title}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.12em] text-gray-400">
                  {skills.length} {skills.length === 1 ? "Skill" : "Skills"}
                </span>
              </div>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2" aria-label={`${title} skills`}>
                {skills.map(({ name, icon: SkillIcon }) => (
                  <li
                    key={name}
                    className="group/skill flex min-h-16 items-center gap-3 rounded-2xl border border-gray-200 bg-[#f9fafb] px-4 py-3 font-semibold text-gray-700 transition duration-200 hover:border-[#FB6C00]/40 hover:bg-[#FB6C00]/5 hover:text-gray-900"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white text-[#FB6C00] shadow-sm ring-1 ring-gray-200 transition group-hover/skill:ring-[#FB6C00]/30">
                      <SkillIcon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-5">{name}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
