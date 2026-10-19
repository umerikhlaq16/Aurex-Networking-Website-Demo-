"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const storeLinks = [{ label: "App Store" }, { label: "Google play" }];

export default function CTA() {
  return (
    <motion.section
      initial={{ backgroundColor: "#ffffff" }}
      whileInView={{ backgroundColor: "#facc15" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full overflow-hidden bg-yellow-400"
    >
      <div className="grid w-full grid-cols-1 items-stretch md:min-h-screen md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="pt-10 sm:pt-14 md:h-full md:pt-0"
        >
          <div className="relative h-[380px] w-full overflow-hidden sm:h-[480px] md:h-full">
            <Image
              src="/P1.webp"
              alt="Person holding a phone showing the banking app"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex flex-col items-start justify-center gap-5 px-6 py-16 sm:px-12 sm:py-20 md:py-28 md:pr-16"
        >
          <span className="text-sm font-medium text-zinc-800">
            Download Our App
          </span>
          <h2 className="font-boldonse text-4xl leading-tight text-zinc-900 uppercase sm:text-6xl">
            Your finances, at your fingertips
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-zinc-800">
            Check balances, deposit checks, move money, and monitor your
            spending activity. Stay connected to your finances from anywhere
            using the Aurex mobile app.
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            {storeLinks.map((store) => (
              <button
                key={store.label}
                type="button"
                className="flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-5 text-sm font-semibold text-zinc-900 shadow-sm transition-transform hover:scale-105"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-yellow-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </span>
                {store.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
