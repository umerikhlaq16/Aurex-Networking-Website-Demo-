"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type MenuColumn = { heading: string; links: string[] };

type MenuPanel = {
  columns: MenuColumn[];
  cta: string;
};

type QuickAction = {
  label: string;
  badge: boolean;
  image?: string;
  icon?: React.ReactNode;
  panel?: MenuPanel;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
  "aria-hidden": true as const,
};

const items: QuickAction[] = [
  {
    image: "/Tag1.jfif",
    label: "Accounts",
    badge: true,
    panel: {
      columns: [
        {
          heading: "Accounts",
          links: ["Checking Accounts", "Savings Accounts", "Youth Accounts"],
        },
        {
          heading: "High-Yield Savings",
          links: ["Money Market", "Certificate of Deposit", "IRA Account"],
        },
      ],
      cta: "Open an Account",
    },
  },
  {
    label: "Loans",
    badge: true,
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    ),
    panel: {
      columns: [
        {
          heading: "Personal",
          links: ["Auto Loans", "Personal Loans", "Student Loans"],
        },
        {
          heading: "Home",
          links: ["Mortgages", "Home Equity", "Refinancing"],
        },
      ],
      cta: "Apply for a Loan",
    },
  },
  {
    label: "Digital Banking",
    badge: false,
    icon: (
      <svg {...iconProps}>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    label: "Credit Cards",
    badge: false,
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    label: "Become a Member",
    badge: false,
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="7" r="4" />
        <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
  },
];

export default function QuickActions() {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const activeItem = items.find((item) => item.label === openLabel);

  const handleClick = (item: QuickAction) => {
    if (!item.panel) {
      setOpenLabel(null);
      return;
    }
    setOpenLabel((prev) => (prev === item.label ? null : item.label));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="relative z-20 mt-16 hidden w-full max-w-full sm:mt-24 md:block"
    >
      <div className="relative">
        {activeItem?.panel && (
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpenLabel(null)}
            className="fixed inset-0 z-20 cursor-default"
          />
        )}

        <div
          className={`absolute inset-x-0 bottom-full z-30 mb-4 origin-bottom rounded-3xl bg-white p-8 shadow-2xl transition-all duration-300 ease-out ${
            activeItem?.panel
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-6 opacity-0"
          }`}
        >
          <AnimatePresence mode="wait">
            {activeItem?.panel && (
              <motion.div
                key={activeItem.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="flex gap-16">
                  <div className="flex flex-1 gap-16">
                    {activeItem.panel.columns.map((column) => (
                      <div key={column.heading}>
                        <p className="mb-4 text-sm font-medium text-zinc-400">
                          {column.heading}
                        </p>
                        <ul className="flex flex-col gap-3">
                          {column.links.map((link) => (
                            <li key={link}>
                              <a
                                href="#"
                                className="text-lg text-zinc-900 transition-colors hover:text-zinc-600"
                              >
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="relative h-56 w-72 shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src="/Hero.avif"
                      alt=""
                      fill
                      className="object-cover"
                      sizes="288px"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-8 flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-yellow-300"
                >
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
                  {activeItem.panel.cta}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative z-30 flex items-stretch gap-3 rounded-3xl bg-white p-3 shadow-lg">
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              aria-expanded={item.panel ? openLabel === item.label : undefined}
              onClick={() => handleClick(item)}
              className="flex flex-1 items-center justify-start gap-3 rounded-xl bg-zinc-100 py-3 pl-3 pr-6 text-base font-medium whitespace-nowrap text-zinc-900 transition-colors hover:bg-zinc-200"
            >
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white text-zinc-900">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt=""
                    width={32}
                    height={32}
                    className="h-10 w-10 object-contain"
                  />
                ) : (
                  item.icon
                )}
              </span>
              {item.label}
              {item.badge && (
                <span className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-zinc-900">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openLabel === item.label ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
