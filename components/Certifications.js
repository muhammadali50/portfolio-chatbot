"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  ExternalLink,
  FileCheck2,
  Medal,
  Trophy,
} from "lucide-react";
import SectionDecorations from "@/components/SectionDecorations";
import aiSeekhoCertificate from "@/public/certificates/ai-seekho-hackathon-2026-certificate.jpeg";
import googleCertificate from "@/public/certificates/google-coursera-certificate.jpeg";
import nftpCertificate from "@/public/certificates/nftp-certificate.jpeg";

const certifications = [
  {
    name: "Google × Coursera",
    issuer: "Google · Coursera",
    description:
      "Professional learning and certification through Google and Coursera.",
    image: googleCertificate,
    imageUrl: "/certificates/google-coursera-certificate.jpeg",
    alt: "Google and Coursera course certificate awarded to Muhammad Ali",
  },
  {
    name: "National Freelance Training Program — NFTP",
    issuer: "National Freelance Training Program",
    description: "Professional training and skill development through NFTP.",
    image: nftpCertificate,
    imageUrl: "/certificates/nftp-certificate.jpeg",
    alt: "NFTP completion certificate awarded to Muhammad Ali",
  },
  {
    name: "AI Seekho Hackathon 2026",
    issuer: "AI Seekho · Google for Developers",
    description:
      "Participated in the AI Seekho Hackathon 2026 and gained practical experience in building and presenting AI-based solutions.",
    image: aiSeekhoCertificate,
    imageUrl: "/certificates/ai-seekho-hackathon-2026-certificate.jpeg",
    alt: "AI Seekho Hackathon 2026 participation certificate awarded to Muhammad Ali",
  },
];

const certificationDecorations = [
  {
    name: "Achievement",
    icon: Trophy,
    className: "right-[4%] top-[8%] text-[#FB6C00]/[0.09]",
    iconClassName: "size-16 rotate-12 sm:size-24 lg:size-28",
    duration: 10.5,
  },
  {
    name: "Medal",
    icon: Medal,
    className: "bottom-[16%] left-[3%] text-gray-900/[0.07]",
    iconClassName: "size-14 -rotate-12 sm:size-20",
    duration: 11,
    delay: 0.7,
  },
  {
    name: "Certificate",
    icon: FileCheck2,
    className: "left-[5%] top-[28%] hidden text-[#FB6C00]/[0.08] sm:block",
    iconClassName: "size-16 rotate-6 lg:size-22",
    duration: 12,
    delay: 0.4,
  },
  {
    name: "Award ribbon",
    icon: Award,
    className: "bottom-[6%] right-[4%] text-gray-900/[0.065]",
    iconClassName: "size-14 -rotate-6 sm:size-20",
    duration: 9.5,
    delay: 1.1,
  },
  {
    name: "Verified credential",
    icon: BadgeCheck,
    className: "right-[33%] top-[3%] hidden text-gray-900/[0.06] lg:block",
    iconClassName: "size-14 rotate-12",
    duration: 10,
    delay: 0.9,
  },
];

export default function Certifications() {
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
      id="certifications"
      aria-labelledby="certifications-heading"
      className="relative scroll-mt-20 overflow-x-clip bg-transparent px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-52 top-1/3 size-96 rounded-full bg-[#FB6C00]/5 blur-3xl" />
      <SectionDecorations items={certificationDecorations} />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          {...reveal}
          className="flex flex-col gap-7 border-b border-gray-200 pb-10 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gray-600 sm:text-sm">
              <span className="h-px w-8 bg-[#FB6C00]" />
              Certifications
            </p>
            <h2
              id="certifications-heading"
              className="mt-5 text-[clamp(3rem,6vw,5.5rem)] font-black leading-[0.92] tracking-[-0.06em] text-gray-900"
            >
              Professional
              <span className="block text-[#FB6C00]">Credentials.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-gray-600 md:text-right">
            Certifications and practical learning experiences that support my
            technical development.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate, index) => (
            <motion.article
              key={certificate.name}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.07 }}
              className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-sm shadow-gray-900/5 transition duration-300 hover:-translate-y-1.5 hover:border-[#FB6C00]/45 hover:shadow-xl hover:shadow-[#FB6C00]/8"
            >
              <a
                href={certificate.imageUrl}
                target="_blank"
                rel="noreferrer"
                className="relative m-3 aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-gray-200 bg-[#f9fafb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB6C00]"
                aria-label={`Open ${certificate.name} certificate image`}
              >
                <Image
                  src={certificate.image}
                  alt={certificate.alt}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.025]"
                />
                <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-white/80 bg-white/90 text-[#FB6C00] shadow-sm backdrop-blur">
                  <ExternalLink className="size-4" aria-hidden="true" />
                </span>
              </a>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-[#FB6C00]">
                  <BadgeCheck className="size-4" aria-hidden="true" />
                  Certified Learning
                </div>

                <h3 className="mt-4 text-xl font-black leading-tight tracking-[-0.025em] text-gray-900">
                  {certificate.name}
                </h3>

                <div className="mt-4 flex items-start gap-2 border-l-2 border-[#FB6C00] pl-3">
                  <Award className="mt-0.5 size-4 shrink-0 text-[#FB6C00]" aria-hidden="true" />
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gray-400">
                      Issuing organization
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-5 text-gray-700">
                      {certificate.issuer}
                    </p>
                  </div>
                </div>

                <p className="mt-5 flex-1 text-sm leading-6 text-gray-600">
                  {certificate.description}
                </p>

                <a
                  href={certificate.imageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-xl border border-[#FB6C00] px-4 text-sm font-bold text-[#FB6C00] transition hover:bg-[#FB6C00] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FB6C00]"
                >
                  View Certificate
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
