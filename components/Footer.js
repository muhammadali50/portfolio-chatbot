import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "Muhammad Ali on GitHub",
    href: "https://github.com/muhammadali50",
    icon: Github,
    external: true,
  },
  {
    label: "Muhammad Ali on LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-ali-1828b829a",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email Muhammad Ali",
    href: "mailto:ha0350731@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200 bg-white px-5 sm:px-8 lg:px-12">
      <span className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-b-full bg-[#FB6C00]" />

      <div className="mx-auto max-w-7xl pb-24 pt-9 sm:py-10">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3 font-black tracking-[-0.025em] text-gray-900 transition hover:text-[#FB6C00] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FB6C00]"
              aria-label="Back to the top of Muhammad Ali's portfolio"
            >
              <span className="grid size-10 place-items-center rounded-full bg-[#FB6C00] text-sm text-white shadow-sm shadow-[#FB6C00]/20">
                MA
              </span>
              <span className="text-lg">Muhammad Ali</span>
            </a>
            <p className="mt-3 text-sm leading-6 text-gray-500">
              AI Developer <span className="text-[#FB6C00]">•</span> Full-Stack
              Developer <span className="text-[#FB6C00]">•</span> Automation
              Enthusiast
            </p>
          </div>

          <div className="flex items-center gap-3" aria-label="Social links">
            {socialLinks.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-gray-200 bg-[#f9fafb] text-gray-700 transition hover:-translate-y-1 hover:border-[#FB6C00] hover:bg-[#FB6C00] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FB6C00]"
              >
                <Icon className="size-[1.125rem]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-500 sm:text-sm">
            © 2026 Muhammad Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
