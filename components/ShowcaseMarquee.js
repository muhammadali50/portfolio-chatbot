const showcaseItems = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Full-Stack Development",
  "Python",
  "Django",
  "Next.js",
  "n8n Automation",
  "Computer Vision",
  "NLP",
  "MySQL",
];

function ShowcaseGroup({ hidden = false }) {
  return (
    <ul
      className="marquee-group"
      aria-hidden={hidden ? "true" : undefined}
    >
      {showcaseItems.map((item) => (
        <li
          key={item}
          className="flex shrink-0 items-center gap-5 px-5 text-xs font-semibold uppercase tracking-[0.14em] text-gray-100 sm:gap-7 sm:px-7 sm:text-sm"
        >
          <span>{item}</span>
          <span
            className="size-1.5 rounded-full bg-[#FB6C00] shadow-[0_0_0_4px_rgba(251,108,0,0.12)]"
            aria-hidden="true"
          />
        </li>
      ))}
    </ul>
  );
}

export default function ShowcaseMarquee() {
  return (
    <section
      className="marquee-strip relative overflow-hidden border-y border-[#FB6C00]/25 bg-gray-950 py-3.5"
      aria-label="Areas of expertise"
    >
      <div className="marquee-track">
        <ShowcaseGroup />
        <ShowcaseGroup hidden />
      </div>
    </section>
  );
}
