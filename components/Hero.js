"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionDecorations from "@/components/SectionDecorations";
import {
  ArrowUpRight,
  BrainCircuit,
  Braces,
  Code2,
  FileCode2,
  Github,
  Linkedin,
  Mail,
  Network,
  PanelsTopLeft,
  Palette,
  Terminal,
  Workflow,
} from "lucide-react";

const technologies = [
  { name: "Python", icon: Terminal },
  { name: "Django", icon: Braces },
  { name: "n8n", icon: Workflow },
  { name: "Machine Learning", icon: BrainCircuit },
  { name: "Deep Learning", icon: Network },
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: FileCode2 },
  { name: "Next.js", icon: PanelsTopLeft },
];

const heroDecorations = [
  {
    name: "Artificial intelligence",
    icon: BrainCircuit,
    className: "right-[4%] top-[7%] text-[#FB6C00]/[0.09]",
    iconClassName: "size-16 rotate-12 sm:size-20 lg:size-24",
    duration: 10,
  },
  {
    name: "Python",
    icon: Terminal,
    className: "left-[2%] top-[58%] hidden text-gray-900/[0.07] sm:block",
    iconClassName: "size-16 -rotate-12 lg:size-24",
    duration: 11,
    delay: 0.8,
  },
  {
    name: "Deep learning",
    icon: Network,
    className: "left-[43%] top-[5%] text-gray-900/[0.065]",
    iconClassName: "size-14 rotate-6 sm:size-20",
    duration: 9,
    delay: 0.3,
  },
  {
    name: "Next.js",
    icon: PanelsTopLeft,
    className: "bottom-[18%] right-[2%] hidden text-gray-900/[0.07] sm:block",
    iconClassName: "size-16 -rotate-6 lg:size-20",
    duration: 12,
    delay: 1.2,
  },
  {
    name: "n8n automation",
    icon: Workflow,
    className: "right-[23%] top-[2%] hidden text-[#FB6C00]/[0.08] lg:block",
    iconClassName: "size-14 -rotate-12 lg:size-18",
    duration: 10.5,
    delay: 0.6,
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const enter = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section className="hero-shell relative isolate overflow-x-clip px-5 pb-8 pt-5 sm:px-8 sm:pt-6 lg:px-12 lg:pt-7">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-20 opacity-70" />
      <div className="pointer-events-none absolute -right-40 -top-52 -z-10 size-[34rem] rounded-full bg-[#FB6C00]/10 blur-3xl" />
      <SectionDecorations items={heroDecorations} />

      <div id="home" className="relative z-10 mx-auto max-w-7xl scroll-mt-24">
        <div className="grid items-start gap-10 pt-3 sm:pt-4 lg:min-h-[34rem] lg:grid-cols-[minmax(0,1.02fr)_minmax(340px,0.98fr)] lg:gap-8 lg:pt-5 xl:grid-cols-[minmax(0,1fr)_minmax(380px,0.92fr)_minmax(160px,0.3fr)]">
          <motion.div
            {...enter}
            transition={{ ...enter.transition, delay: 0.05 }}
            className="relative z-10"
          >
            <h1 className="relative max-w-3xl text-[clamp(3rem,4.6vw,4.6rem)] font-black leading-[0.92] tracking-[-0.06em] text-gray-900">
              <span className="block">Hello,</span>
              <span className="relative inline-block sm:whitespace-nowrap">
                I am Muhammad
                <span className="absolute -right-7 top-1/2 -z-10 size-20 -translate-y-1/2 rounded-full bg-[#FB6C00]/18 sm:-right-12 sm:size-28" />
              </span>
              <span className="block text-[#FB6C00]">Ali.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-relaxed text-gray-900 sm:text-xl">
              AI Developer <span className="text-[#FB6C00]">/</span> Full-Stack
              Web Developer <span className="text-[#FB6C00]">/</span> Automation
              Enthusiast
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              I build intelligent and practical digital solutions by combining
              Artificial Intelligence, Machine Learning, Deep Learning,
              Full-Stack Web Development, and Automation.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:ha0350731@gmail.com"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#FB6C00] px-6 text-sm font-semibold text-white shadow-lg shadow-[#FB6C00]/20 transition hover:-translate-y-0.5 hover:bg-[#E86100] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FB6C00]"
              >
                <Mail className="size-4" aria-hidden="true" />
                Contact Me
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://github.com/muhammadali50"
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 transition hover:-translate-y-0.5 hover:border-[#FB6C00] hover:text-[#FB6C00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FB6C00]"
                aria-label="View Muhammad Ali's GitHub profile"
              >
                <Github className="size-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-ali-1828b829a"
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 transition hover:-translate-y-0.5 hover:border-[#FB6C00] hover:text-[#FB6C00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FB6C00]"
                aria-label="View Muhammad Ali's LinkedIn profile"
              >
                <Linkedin className="size-5" aria-hidden="true" />
              </a>
              <span className="ml-1 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                GitHub · LinkedIn
              </span>
            </div>
          </motion.div>

          <motion.div
            {...enter}
            transition={{ ...enter.transition, delay: 0.14 }}
            className="relative mx-auto h-[27rem] w-full max-w-[34rem] self-start overflow-hidden sm:h-[30rem] lg:h-[33rem] lg:translate-x-2 xl:h-[34rem] xl:translate-x-6 2xl:translate-x-10"
          >
            <div className="pointer-events-none absolute bottom-[2%] left-[1%] h-[68%] w-[74%] rounded-[48%_52%_45%_55%/55%_42%_58%_45%] bg-gray-900" />
            <div className="pointer-events-none absolute -bottom-[2%] right-[1%] h-[68%] w-[84%] rounded-[46%_54%_52%_48%/45%_42%_58%_55%] bg-[#FB6C00]" />
            <div className="pointer-events-none absolute right-[4%] top-[17%] size-16 rounded-full border-[12px] border-[#FB6C00]/25" />
            <div className="pointer-events-none absolute left-[3%] top-[30%] size-4 rounded-full bg-[#FB6C00] shadow-[0_0_0_8px_rgba(251,108,0,0.1)]" />

            <Image
              src="/images/muhammad-ali-profile.png"
              alt="Muhammad Ali"
              width={1086}
              height={1449}
              priority
              sizes="(max-width: 640px) 120vw, (max-width: 1279px) 52vw, 36vw"
              className="absolute left-1/2 top-[-16%] z-10 h-[150%] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_22px_24px_rgba(17,24,39,0.16)]"
            />
          </motion.div>

          <motion.aside
            {...enter}
            transition={{ ...enter.transition, delay: 0.22 }}
            className="relative hidden h-[33rem] self-start py-10 xl:flex xl:flex-col xl:justify-between"
            aria-label="Professional summary"
          >
            <p className="max-w-[13rem] text-sm font-medium leading-6 text-gray-600">
              I enjoy transforming ideas into intelligent systems, modern web
              applications, and automated workflows.
            </p>

            <div className="ml-auto flex h-64 items-start gap-5">
              <span className="mt-4 size-3 rounded-full bg-[#FB6C00] shadow-[0_0_0_7px_rgba(251,108,0,0.1)]" />
              <span className="h-full w-px bg-gradient-to-b from-gray-300 to-transparent" />
            </div>
          </motion.aside>
        </div>

        <motion.div
          {...enter}
          transition={{ ...enter.transition, delay: 0.3 }}
          className="border-t border-gray-200 pt-6"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
            Technologies I work with
          </p>
          <ul className="flex flex-wrap gap-2.5" aria-label="Technology stack">
            {technologies.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-xs font-semibold text-gray-700 transition hover:-translate-y-0.5 hover:border-[#FB6C00] hover:bg-[#FB6C00]/5 hover:text-[#FB6C00] sm:text-sm"
              >
                <Icon className="size-4 text-[#FB6C00]" aria-hidden="true" />
                {name}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
