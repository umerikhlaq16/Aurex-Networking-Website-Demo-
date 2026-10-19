"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 2.4, decimals: 1, suffix: "M+", label: "Active Accounts" },
  { value: 4.8, decimals: 1, prefix: "$", suffix: "B", label: "Assets Managed" },
  { value: 99.9, decimals: 1, suffix: "%", label: "Uptime Guaranteed" },
  { value: 24, suffix: "/7", label: "Customer Support" },
];

function Counter({ value, decimals = 0, prefix = "", suffix = "" }: Stat) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) =>
    `${prefix}${latest.toFixed(decimals)}${suffix}`
  );

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Stats() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 py-24 sm:py-32">
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 h-80 w-80 rounded-full"
        aria-hidden="true"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-zinc-300/40 blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto flex w-full max-w-[88rem] flex-col items-center gap-4 px-6 text-center sm:px-12"
      >
        <span className="font-boldonse text-xs uppercase tracking-widest text-yellow-500">
          Trusted at scale
        </span>
        <h2 className="font-boldonse max-w-2xl text-3xl uppercase leading-tight text-zinc-900 sm:text-5xl">
          Numbers that speak for themselves
        </h2>
      </motion.div>

      <div className="relative mx-auto mt-16 grid w-full max-w-[88rem] grid-cols-2 gap-10 px-6 sm:px-12 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <span className="font-boldonse text-4xl text-zinc-900 sm:text-5xl">
              <Counter {...stat} />
            </span>
            <span className="text-sm tracking-wide text-zinc-500 uppercase">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
