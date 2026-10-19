"use client";

import { useState } from "react";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useLenis(() => {
    const scrolled = window.scrollY > window.innerHeight * 0.2;
    setIsScrolled((prev) => (prev === scrolled ? prev : scrolled));
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#"
          className={`flex items-center gap-2 transition-colors duration-300 ${
            isScrolled ? "text-zinc-900" : "text-white"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <circle cx="12" cy="5" r="3" />
            <circle cx="5" cy="17" r="3" />
            <circle cx="19" cy="17" r="3" />
            <path
              d="M12 8v4m0 0-5.5 4M12 12l5.5 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-boldonse text-xl tracking-tight">Aurex</span>
        </a>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-transparent bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-zinc-900 transition-colors duration-300 hover:border-zinc-900"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-yellow-200 transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
            <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-zinc-900 transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[#6F4E37] group-hover:text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </span>
            <span className="relative z-10">Menu</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-zinc-900 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-zinc-900">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </svg>
            </span>
            Log in
          </button>
        </div>
      </nav>
    </header>
  );
}
