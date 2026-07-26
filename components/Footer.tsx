import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

function InstagramGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-paper">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Image src="/logo-wordmark.png" alt="Cadence Photography" width={281} height={58} className="h-10 w-auto brightness-0 invert" />
            <p className="mt-3 max-w-xs font-body text-sm text-paper/75">
              Real moments. Real connection. Portrait, event, and editorial
              photography based in Crossville, Tennessee.
            </p>
          </div>

          <div className="flex gap-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brass">
                Site
              </p>
              <ul className="mt-3 space-y-2 font-body text-sm text-paper/70">
                <li><Link href="/portfolio" className="hover:text-paper">Portfolio</Link></li>
                <li><Link href="/about" className="hover:text-paper">About</Link></li>
                <li><Link href="/pricing" className="hover:text-paper">Booking</Link></li>
                <li><Link href="/blog" className="hover:text-paper">Journal</Link></li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brass">
                Connect
              </p>
              <ul className="mt-3 space-y-2 font-body text-sm text-paper/70">
                <li>
                  <a href="mailto:hello@cadencephotography.com" className="flex items-center gap-2 hover:text-paper">
                    <Mail size={14} /> Email
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-paper">
                    <InstagramGlyph /> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse gap-2 border-t border-paper/10 pt-6 font-mono text-xs text-paper/75 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Cadence Photography. All rights reserved.</p>
          <p>Real moments. Real connection.</p>
        </div>
      </div>
    </footer>
  );
}
