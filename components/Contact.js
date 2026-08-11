"use client";

import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  UserRound,
} from "lucide-react";

const contactDetails = [
  {
    label: "Name",
    value: "Muhammad Ali",
    icon: UserRound,
  },
  {
    label: "Email",
    value: "ha0350731@gmail.com",
    href: "mailto:ha0350731@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "muhammad-ali-1828b829a",
    href: "https://www.linkedin.com/in/muhammad-ali-1828b829a",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/muhammadali50",
    href: "https://github.com/muhammadali50",
    icon: Github,
    external: true,
  },
];

const socialLinks = [
  {
    label: "Email Muhammad Ali",
    href: "mailto:ha0350731@gmail.com",
    icon: Mail,
  },
  {
    label: "Muhammad Ali on LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-ali-1828b829a",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Muhammad Ali on GitHub",
    href: "https://github.com/muhammadali50",
    icon: Github,
    external: true,
  },
];

const inputClassName =
  "mt-2 w-full rounded-2xl border border-gray-200 bg-[#f9fafb] px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#FB6C00] focus:bg-white focus:ring-4 focus:ring-[#FB6C00]/10";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const emailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:ha0350731@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="portfolio-section relative scroll-mt-20 overflow-x-clip bg-transparent px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-20">
        <div className="relative isolate lg:py-4">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[25rem] overflow-hidden sm:h-[29rem]"
            aria-hidden="true"
          >
            <span className="absolute -right-1 top-[2%] text-gray-900/[0.07]">
              <Github className="size-20 rotate-6 stroke-[1.05] sm:size-28" />
            </span>
            <span className="absolute right-[3%] top-[40%] text-[#FB6C00]/[0.09]">
              <Linkedin className="size-16 -rotate-6 stroke-[1.05] sm:size-24" />
            </span>
            <span className="absolute right-[26%] top-[69%] text-gray-900/[0.07]">
              <Mail className="size-14 rotate-3 stroke-[1.05] sm:size-20" />
            </span>
          </div>

          <p className="relative z-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gray-600 sm:text-sm">
            <span className="h-px w-8 bg-[#FB6C00]" />
            Contact
          </p>

          <h2
            id="contact-heading"
            className="relative z-10 mt-5 text-[clamp(3rem,6vw,5.5rem)] font-black leading-[0.92] tracking-[-0.06em] text-gray-900"
          >
            Let&apos;s
            <span className="block text-[#FB6C00]">Connect.</span>
          </h2>

          <p className="relative z-10 mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            Have a project idea, collaboration opportunity, or just want to talk
            about AI, web development, or automation? Feel free to reach out.
          </p>

          <div className="relative z-10 mt-9 space-y-3">
            {contactDetails.map(({ label, value, href, icon: Icon, external }) => {
              const content = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-[#FB6C00]/20 bg-[#FB6C00]/7 text-[#FB6C00] transition-colors group-hover:bg-[#FB6C00] group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-gray-400">
                      {label}
                    </span>
                    <span className="mt-1 block break-words text-sm font-semibold text-gray-800 sm:text-base">
                      {value}
                    </span>
                  </span>
                  {href && (
                    <ArrowUpRight
                      className="size-4 shrink-0 text-gray-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FB6C00]"
                      aria-hidden="true"
                    />
                  )}
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-3.5 transition hover:-translate-y-0.5 hover:border-[#FB6C00]/40 hover:shadow-lg hover:shadow-[#FB6C00]/6 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FB6C00]"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={label}
                  className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-3.5"
                >
                  {content}
                </div>
              );
            })}
          </div>

          <div className="relative z-10 mt-7 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:-translate-y-1 hover:border-[#FB6C00] hover:bg-[#FB6C00] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FB6C00]"
              >
                <Icon className="size-4.5" aria-hidden="true" />
              </a>
            ))}
            <span className="ml-2 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-gray-400 sm:flex">
              <MapPin className="size-4 text-[#FB6C00]" aria-hidden="true" />
              Open to opportunities
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-xl shadow-gray-900/5 sm:p-8 lg:p-10"
        >
          <div className="flex items-center gap-4 border-b border-gray-200 pb-6">
            <span className="grid size-12 place-items-center rounded-2xl bg-[#FB6C00] text-white shadow-lg shadow-[#FB6C00]/20">
              <Send className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#FB6C00]">
                Send a message
              </p>
              <h3 className="mt-1 text-2xl font-black tracking-[-0.03em] text-gray-900">
                Start a conversation
              </h3>
            </div>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold text-gray-800" htmlFor="contact-name">
              Name
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                required
                className={inputClassName}
              />
            </label>

            <label className="text-sm font-bold text-gray-800" htmlFor="contact-email">
              Email
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your email address"
                required
                className={inputClassName}
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-bold text-gray-800" htmlFor="contact-subject">
            Subject
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="What would you like to discuss?"
              required
              className={inputClassName}
            />
          </label>

          <label className="mt-5 block text-sm font-bold text-gray-800" htmlFor="contact-message">
            Message
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              placeholder="Tell me about your project, idea, question, or opportunity..."
              required
              className={`${inputClassName} min-h-40 resize-y`}
            />
          </label>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#FB6C00] px-6 text-sm font-bold text-white shadow-lg shadow-[#FB6C00]/20 transition hover:-translate-y-0.5 hover:bg-[#E86100] hover:shadow-xl hover:shadow-[#FB6C00]/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FB6C00]"
            >
              Send Message
              <Send className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
            <p className="text-xs leading-5 text-gray-400">
              Opens your default email application.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
