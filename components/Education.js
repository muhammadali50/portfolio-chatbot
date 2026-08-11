import {
  BookOpen,
  BrainCircuit,
  Building2,
  CalendarDays,
  GraduationCap,
  Layers3,
} from "lucide-react";
import SectionDecorations from "@/components/SectionDecorations";

const coursework = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Deep Learning",
  "Computer Vision",
  "Natural Language Processing (NLP)",
];

const statusDetails = [
  { label: "Department", value: "Artificial Intelligence", icon: BrainCircuit },
  { label: "Current Year", value: "3rd Year", icon: GraduationCap },
  { label: "Current Semester", value: "6th Semester", icon: Layers3 },
];

const educationDecorations = [
  {
    name: "Graduation",
    icon: GraduationCap,
    className: "right-[4%] top-[8%] text-[#FB6C00]/[0.09]",
    iconClassName: "size-16 rotate-12 sm:size-24 lg:size-28",
  },
  {
    name: "Books",
    icon: BookOpen,
    className: "bottom-[14%] left-[3%] text-gray-900/[0.07]",
    iconClassName: "size-14 -rotate-12 sm:size-20",
  },
  {
    name: "University",
    icon: Building2,
    className: "left-[7%] top-[23%] hidden text-gray-900/[0.065] sm:block",
    iconClassName: "size-16 rotate-6 lg:size-22",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="portfolio-section relative scroll-mt-20 overflow-x-clip bg-transparent px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <SectionDecorations items={educationDecorations} />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col gap-7 border-b border-gray-200 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gray-600 sm:text-sm">
              <span className="h-px w-8 bg-[#FB6C00]" />
              Education
            </p>
            <h2
              id="education-heading"
              className="mt-5 text-[clamp(3rem,6vw,5.5rem)] font-black leading-[0.92] tracking-[-0.06em] text-gray-900"
            >
              Academic
              <span className="block text-[#FB6C00]">Journey.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-gray-600 sm:text-right">
            Building a strong technical foundation through focused study and
            practical application.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
          <aside
            className="relative flex items-center justify-between lg:min-h-full lg:flex-col lg:items-start"
            aria-label="Education timeline from 2023 to 2027"
          >
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gray-200 lg:bottom-0 lg:left-5 lg:right-auto lg:top-0 lg:h-auto lg:w-px lg:translate-y-0" />

            <div className="relative flex items-center gap-3 bg-[#f9fafb] pr-4 lg:bg-transparent lg:pr-0">
              <span className="grid size-10 place-items-center rounded-full bg-[#FB6C00] text-white shadow-lg shadow-[#FB6C00]/20">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FB6C00]">
                  Started
                </p>
                <p className="mt-0.5 text-2xl font-black tracking-tight text-gray-900">
                  2023
                </p>
              </div>
            </div>

            <div className="relative flex items-center gap-3 bg-[#f9fafb] pl-4 lg:bg-transparent lg:pl-0">
              <span className="size-3 rounded-full border-[3px] border-[#FB6C00] bg-white shadow-[0_0_0_6px_rgba(251,108,0,0.1)] lg:ml-3.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">
                  Expected
                </p>
                <p className="mt-0.5 text-2xl font-black tracking-tight text-gray-900">
                  2027
                </p>
              </div>
            </div>
          </aside>

          <article className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-[#f9fafb] p-6 shadow-xl shadow-gray-900/5 sm:p-8 lg:p-10">
            <div className="absolute inset-y-0 left-0 w-1 bg-[#FB6C00]" />

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4 sm:gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#FB6C00] text-white shadow-lg shadow-[#FB6C00]/20 sm:size-14">
                  <GraduationCap className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FB6C00]">
                    Bachelor&apos;s Degree
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.035em] text-gray-900 sm:text-3xl">
                    BS Artificial Intelligence
                  </h3>
                </div>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#FB6C00]/20 bg-white px-4 py-2 text-sm font-bold text-gray-900">
                <CalendarDays className="size-4 text-[#FB6C00]" aria-hidden="true" />
                2023 – 2027
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 border-t border-gray-200 pt-7">
              <Building2 className="mt-0.5 size-5 shrink-0 text-[#FB6C00]" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-gray-500">University</p>
                <p className="mt-1 text-lg font-bold leading-7 text-gray-900">
                  Quaid-e-Awam University of Engineering, Science &amp;
                  Technology (QUEST)
                </p>
              </div>
            </div>

            <dl className="mt-8 grid gap-3 sm:grid-cols-3">
              {statusDetails.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-gray-200 bg-white p-4 transition-colors hover:border-[#FB6C00]/35"
                >
                  <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-500">
                    <Icon className="size-4 text-[#FB6C00]" aria-hidden="true" />
                    {label}
                  </dt>
                  <dd className="mt-3 font-bold leading-6 text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>

            <blockquote className="mt-8 rounded-2xl border-l-4 border-[#FB6C00] bg-white px-5 py-4 text-sm leading-7 text-gray-600 sm:text-base">
              My academic journey is helping me build a strong foundation in
              Artificial Intelligence while allowing me to apply these concepts
              through practical projects and development work.
            </blockquote>

            <div className="mt-9 border-t border-gray-200 pt-8">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl border border-[#FB6C00]/20 bg-[#FB6C00]/7 text-[#FB6C00]">
                  <BookOpen className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FB6C00]">
                    Core Studies
                  </p>
                  <h4 className="mt-1 text-xl font-bold text-gray-900">
                    Relevant Coursework
                  </h4>
                </div>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {coursework.map((course, index) => (
                  <li
                    key={course}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:-translate-y-0.5 hover:border-[#FB6C00]/40"
                  >
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#FB6C00]/9 text-[0.65rem] font-black text-[#FB6C00]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
