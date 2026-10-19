"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useLenis } from "lenis/react";

type CardData = {
  title: string;
  description: string;
  cta: string;
  icon: ReactNode;
  image: string;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-16 w-16",
  "aria-hidden": true as const,
};

const cards: CardData[] = [
  {
    title: "Tap to pay, anywhere",
    description:
      "Biometric login and real-time fraud monitoring keep your money protected around the clock, wherever you are.",
    cta: "Learn About Security",
    image: "/C3.jfif",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Bank-grade security",
    description:
      "See your spending, savings, and goals in one clean dashboard, updated in real time so nothing catches you off guard.",
    cta: "Explore Digital Banking",
    image: "/C1.jfif",
    icon: (
      <svg {...iconProps}>
        <path d="M4 20V10M12 20V4M20 20v-7" />
      </svg>
    ),
  },
  {
    title: "Track every dollar",
    description:
      "Contactless payments at checkout, in-app, or online. Fast, secure, and always right there in your pocket.",
    cta: "See Payment Options",
    image: "/C2.jfif",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="6" width="15" height="12" rx="2" />
        <path d="M19 9.5a3.5 3.5 0 0 1 0 5M22 8a6 6 0 0 1 0 8" />
      </svg>
    ),
  },
  
];

function Card({
  index,
  card,
  scrollY,
}: {
  index: number;
  card: CardData;
  scrollY: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const offsetTop = useRef(0);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    if (ref.current) offsetTop.current = ref.current.offsetTop;
    setVh(window.innerHeight);
  }, []);

  const progress = useTransform(scrollY, (sy) => {
    if (!vh) return 0;
    const top = offsetTop.current - sy;
    return 1 - Math.min(Math.max(top / vh, 0), 1);
  });

  const y = useTransform(progress, [0, 1], [160, 0]);
  const opacity = useTransform(progress, [0, 1], [0, 1]);
  const scale = useTransform(progress, [0, 1], [0.94, 1]);

  return (
    <div
      ref={ref}
      className="sticky top-0 flex h-screen items-center justify-center px-6 sm:px-12"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="relative flex h-[75vh] w-full max-w-[88rem] flex-col justify-center overflow-hidden rounded-3xl"
      >
        <Image
          src={card.image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/60 to-zinc-950/10" />

        <div className="relative z-10 flex flex-col gap-6 p-10 sm:p-14 md:max-w-md">
          <span className="font-boldonse text-xs uppercase tracking-widest text-yellow-400">
            0{index + 1}
          </span>
          <h3 className="font-boldonse text-3xl uppercase leading-tight text-white sm:text-4xl">
            {card.title}
          </h3>
          <p className="text-base leading-relaxed text-zinc-300">
            {card.description}
          </p>
          <button
            type="button"
            className="mt-2 flex w-fit items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-yellow-300"
          >
            {card.cta}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </button>
        </div>

        <span className="absolute top-10 right-10 z-10 text-yellow-400/90 sm:top-14 sm:right-14">
          {card.icon}
        </span>
      </motion.div>
    </div>
  );
}

export default function StackedCards() {
  const scrollY = useMotionValue(0);

  useLenis(() => {
    scrollY.set(window.scrollY);
  });

  return (
    <section className="relative w-full">
      {cards.map((card, index) => (
        <Card key={card.title} index={index} card={card} scrollY={scrollY} />
      ))}
    </section>
  );
}
