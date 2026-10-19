"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import QuickActions from "./QuickActions";

const riseIn = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-end overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/Hero.avif"
          alt="Person smiling while taking a photo on their phone"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-6 sm:px-12 sm:pb-8">
        <div className="max-w-2xl text-white">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={riseIn}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-boldonse not-italic uppercase text-5xl leading-normal tracking-wide [-webkit-text-stroke:1.5px_white] sm:text-6xl lg:text-6xl"
          >
            Banking that moves with you
          </motion.h1>
        </div>
        <QuickActions />
      </div>
    </section>
  );
}
