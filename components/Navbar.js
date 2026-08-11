"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Certifications", href: "#certifications", id: "certifications" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -60%", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 px-5 sm:px-8 lg:px-12">
      <nav
        className="relative mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="group inline-flex items-center gap-3 font-semibold tracking-tight text-gray-900"
          aria-label="Muhammad Ali - Home"
        >
          <span className="grid size-10 place-items-center rounded-full bg-[#FB6C00] text-sm text-white shadow-sm shadow-[#FB6C00]/25 transition-transform group-hover:-rotate-6">
            MA
          </span>
          <span className="hidden sm:inline">Muhammad Ali</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map(({ label, href, id }) => {
            const active = activeSection === id;
            return (
              <a
                key={id}
                href={href}
                aria-current={active ? "location" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors xl:px-4 ${
                  active
                    ? "bg-[#FB6C00]/9 text-[#FB6C00]"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-11 place-items-center rounded-full border border-gray-200 bg-white text-gray-900 transition hover:border-[#FB6C00] hover:text-[#FB6C00] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-[calc(100%+0.75rem)] max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-gray-200 bg-white p-3 shadow-xl shadow-gray-900/10 lg:hidden"
          >
            {links.map(({ label, href, id }) => {
              const active = activeSection === id;
              return (
                <a
                  key={id}
                  href={href}
                  onClick={closeMenu}
                  aria-current={active ? "location" : undefined}
                  className={`flex rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-[#FB6C00]/9 text-[#FB6C00]"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
