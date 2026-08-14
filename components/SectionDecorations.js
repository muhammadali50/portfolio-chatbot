export default function SectionDecorations({ items, className = "" }) {
  return (
    <div
      className={`section-decorations pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {items.map(
        ({
          name,
          icon: Icon,
          className: positionClassName,
          iconClassName,
        }) => (
          <span
            key={name}
            className={`absolute opacity-[0.65] ${positionClassName}`}
          >
            <Icon className={`stroke-[1.05] ${iconClassName}`} />
          </span>
        ),
      )}
    </div>
  );
}
