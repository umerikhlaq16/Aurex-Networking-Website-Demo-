const quickLinks = [
  "Call us at 800.555.0142",
  "Hours & Locations",
  "Current Rates",
  "Membership",
  "Who We Are",
  "Make a Payment",
  "Disclosures",
  "Service Charges",
];

const disclosureLinks = [
  "Privacy Notice",
  "Funds Availability",
  "Member Service Agreement",
  "Electronic Funds Transfer",
];

const socialLinks = ["Instagram", "TikTok", "Youtube", "Facebook"];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#facc15]">
      <div className="mx-auto w-full max-w-[88rem] px-6 pt-20 pb-10 sm:px-12">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-zinc-900/15 pb-16 md:flex-row md:items-center">
          <h2 className="max-w-md text-4xl leading-tight text-zinc-900 sm:text-5xl">
            Built for how
            <br />
            you bank
          </h2>

          <div className="flex items-center gap-4">
            <span className="rounded-md border border-zinc-900/40 px-3 py-2 text-xs font-medium text-zinc-900">
              Equal Housing
              <br />
              Opportunity
            </span>
            <span className="rounded-md border border-zinc-900/40 px-3 py-2 text-xs font-semibold text-zinc-900">
              NCUA
            </span>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-5 text-sm font-semibold text-zinc-900 shadow-sm transition-transform hover:scale-105"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-zinc-900">
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
                  <path d="M12 3v13m0 0-4-4m4 4 4-4M5 21h14" />
                </svg>
              </span>
              Download the App
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 border-b border-zinc-900/15 py-16 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="mb-5 text-2xl text-zinc-900">Need Help?</h3>
            <div className="flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="rounded-full border border-zinc-900/40 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-yellow-400"
                >
                  {link}
                </a>
              ))}
              <a
                href="#"
                className="flex items-center gap-2 rounded-full border border-zinc-900/40 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-yellow-400"
              >
                Careers
                <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-xs font-semibold text-yellow-400">
                  We&apos;re hiring!
                </span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-wide text-zinc-900/60 uppercase">
                Disclosures
              </p>
              <ul className="flex flex-col gap-3">
                {disclosureLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-base text-zinc-900 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold tracking-wide text-zinc-900/60 uppercase">
                Contact
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="text-base text-zinc-900 hover:underline">
                    Get in Touch
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-zinc-900 hover:underline">
                    Email Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-4">
          <p className="text-xs font-semibold tracking-wide text-zinc-900/60 uppercase">
            Corporate Address
          </p>
          <p className="mt-2 text-base text-zinc-900">
            120 Market Street, Suite 300, Austin, TX 78701
            <br />
            Routing Number: 000123456
          </p>
        </div>
      </div>

      <div className="w-full px-6 sm:px-12">
        <h2 className="font-boldonse w-full text-center text-[18vw] leading-none text-zinc-800 sm:text-[16vw] md:text-[14vw]">
          Aurex
        </h2>
      </div>

      <div className="mx-auto w-full max-w-[88rem] px-6 py-6 sm:px-12">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-zinc-900">
            Copyright &copy; {new Date().getFullYear()} Aurex Bank.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-zinc-900 hover:underline"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-4 max-w-4xl text-xs leading-relaxed text-zinc-900/60">
          All rights reserved. Deposits are federally insured up to $250,000.
          Links to third-party sites are provided for convenience only and do
          not constitute an endorsement by Aurex Bank. Third-party sites are
          not covered by our privacy and security policies, so please review
          their terms before sharing any information.
        </p>
      </div>
    </footer>
  );
}
