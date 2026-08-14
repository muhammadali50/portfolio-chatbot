import Image from "next/image";
import { Code2, ExternalLink, FolderKanban, Github } from "lucide-react";
import SectionDecorations from "@/components/SectionDecorations";
import kidneyStoneImage from "@/public/images/projects/kidney-stone.png";
import riceShopImage from "@/public/images/projects/rice-shop.png";

const projects = [
  {
    title: "Kidney Stone Detection System",
    description:
      "An AI-based kidney stone detection system that analyzes CT scan images using computer vision and deep learning techniques.",
    technologies: ["Python", "Deep Learning", "Computer Vision", "OpenCV"],
    githubUrl:
      "https://github.com/muhammadali50/kidney-stone-detection-ct-scan",
    image: kidneyStoneImage,
    imageAlt: "Kidney Stone Detection System CT scan analysis interface",
  },
  {
    title: "Rice Shop Management System",
    description:
      "A rice shop management system designed to manage products, stock, sales, customers, expenses, invoices, and business records efficiently.",
    technologies: ["Python", "Django", "MySQL", "Web Development"],
    githubUrl: "https://github.com/Raufjatoi/Rice",
    image: riceShopImage,
    imageAlt: "Rice Shop Management System business analytics dashboard",
  },
];

const projectDecorations = [
  {
    name: "Project folder",
    icon: FolderKanban,
    className: "right-[4%] top-[8%] text-[#FB6C00]/[0.09]",
    iconClassName: "size-16 rotate-6 sm:size-24 lg:size-28",
  },
  {
    name: "Source code",
    icon: Code2,
    className:
      "bottom-[12%] left-[3%] hidden text-gray-900/[0.07] sm:block",
    iconClassName: "size-16 -rotate-6 sm:size-20 lg:size-24",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="portfolio-section relative scroll-mt-20 overflow-x-clip bg-transparent px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <SectionDecorations items={projectDecorations} />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col gap-7 border-b border-gray-200 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gray-600 sm:text-sm">
              <span className="h-px w-8 bg-[#FB6C00]" />
              Projects
            </p>
            <h2
              id="projects-heading"
              className="mt-5 text-[clamp(3rem,6vw,5.5rem)] font-black leading-[0.92] tracking-[-0.06em] text-gray-900"
            >
              Selected
              <span className="block text-[#FB6C00]">Projects.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-gray-600 md:text-right">
            A selection of practical projects I have worked on.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-sm shadow-gray-900/5 transition duration-300 hover:-translate-y-1 hover:border-[#FB6C00]/45 hover:shadow-xl hover:shadow-[#FB6C00]/8"
            >
              <div className="relative m-3 aspect-[16/9] overflow-hidden rounded-[1.25rem] border border-gray-200 bg-[#f9fafb]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-3 sm:px-7 sm:pb-7">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-[#FB6C00]">
                  <FolderKanban className="size-4" aria-hidden="true" />
                  Featured Project
                </div>

                <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.03em] text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                  {project.description}
                </p>

                <ul
                  className="mt-6 flex flex-wrap gap-2"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-[#FB6C00]/25 bg-[#FB6C00]/6 px-3 py-1.5 text-xs font-bold text-gray-700"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-xl border border-[#FB6C00] px-4 text-sm font-bold text-[#FB6C00] transition hover:bg-[#FB6C00] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FB6C00]"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <Github className="size-4" aria-hidden="true" />
                  View on GitHub
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
