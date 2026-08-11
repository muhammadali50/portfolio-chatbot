"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SectionDecorations({ items, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {items.slice(0, 3).map(
        (
          {
            name,
            icon: Icon,
            className: positionClassName,
            iconClassName,
            distance = 7,
            duration = 9,
            delay = 0,
          },
          index,
        ) => (
          <motion.span
            key={name}
            className={`absolute opacity-65 will-change-transform ${positionClassName}`}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [
                      0,
                      index % 2 === 0
                        ? -Math.min(distance, 3)
                        : Math.min(distance, 3),
                      0,
                    ],
                  }
            }
            transition={{
              duration: Math.max(duration, 16),
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className={`stroke-[1.05] ${iconClassName}`} />
          </motion.span>
        ),
      )}
    </div>
  );
}
