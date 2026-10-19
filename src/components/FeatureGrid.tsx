"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FeatureCard = {
  title: string;
  description: string;
  bg: string;
  image: string;
};

const cards: FeatureCard[] = [
  {
    title: "Put your home's equity to work",
    description:
      "Access your equity with a flexible line of credit designed to give you more options and control.",
    bg: "bg-lime-300",
    image: "/C4.webp",
  },
  {
    title: "Flexible funds when you need them",
    description:
      "From unexpected costs to planned expenses, borrow funds without the usual runaround.",
    bg: "bg-yellow-300",
    image: "/C5.webp",
  },
  {
    title: "Stay up to date on rates",
    description:
      "See exactly where things stand with access to competitive rates for loans, savings, credit, and more.",
    bg: "bg-sky-200",
    image: "/C6.webp",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function FeatureGrid() {
  return (
    <section className="relative w-full bg-zinc-50 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[88rem] px-6 sm:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-4xl text-zinc-900 sm:text-5xl"
        >
          Your money, your move
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {cards.map((card) => (
            <motion.article
              key={card.title}
              variants={cardVariants}
              className="group cursor-pointer"
            >
              <div
                className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl shadow-sm transition-transform duration-500 ease-out group-hover:-translate-y-1.5 ${card.bg}`}
              >
                <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <button
                  type="button"
                  aria-label={`Learn more: ${card.title}`}
                  className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 shadow-sm transition-transform hover:scale-110"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </button>
              </div>

              <h3 className="mt-6 text-xl font-medium text-zinc-900">
                {card.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-zinc-500">
                {card.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
