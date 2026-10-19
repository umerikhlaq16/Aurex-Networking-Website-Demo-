"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed right-6 bottom-24 z-50 w-80 origin-bottom-right rounded-t-[32px] rounded-b-2xl bg-white shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isOpen
            ? "h-[480px] max-h-[75vh] scale-100 opacity-100"
            : "pointer-events-none h-[480px] max-h-[75vh] scale-0 opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-hidden rounded-t-[32px] rounded-b-2xl">
          <div className="flex items-center justify-between rounded-t-[32px] bg-zinc-900 px-6 py-5 text-white">
            <span className="font-boldonse text-sm uppercase tracking-wide">
              Network Support
            </span>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-6">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-zinc-100 px-4 py-3 text-sm text-zinc-900">
              Hi there 👋 How can we help you today?
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 shadow-lg transition-colors hover:bg-yellow-300"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`absolute h-6 w-6 text-zinc-900 transition-all duration-300 ${
            isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
          aria-hidden="true"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`absolute h-6 w-6 text-zinc-900 transition-all duration-300 ${
            isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          aria-hidden="true"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </>
  );
}
