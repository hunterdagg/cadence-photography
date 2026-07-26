"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const leftLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

const rightLinks = [
  { href: "/pricing", label: "Booking" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

const allLinks = [...leftLinks, ...rightLinks];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4 md:px-10">
        {/* Left cell: mobile menu button / desktop left links */}
        <div className="flex items-center justify-self-start">
          <button
            className="text-charcoal md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className="hidden items-center gap-8 md:flex">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-charcoal/80 transition-colors hover:text-brass"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center cell: logo */}
        <Link
          href="/"
          className="flex items-center gap-3 justify-self-center"
          onClick={() => setOpen(false)}
        >
          <Image src="/logo-mark.png" alt="" width={52} height={58} className="h-11 w-auto md:h-[52px]" priority />
          <Image src="/logo-wordmark.png" alt="Cadence Photography" width={252} height={52} className="h-7 w-auto md:h-10" priority />
        </Link>

        {/* Right cell: desktop right links / mobile spacer to balance the menu button */}
        <div className="flex items-center justify-end justify-self-end">
          <nav className="hidden items-center gap-8 md:flex">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-charcoal/80 transition-colors hover:text-brass"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="w-[22px] md:hidden" aria-hidden="true" />
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-charcoal/10 bg-paper px-6 py-4 md:hidden">
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-base text-charcoal/80"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
