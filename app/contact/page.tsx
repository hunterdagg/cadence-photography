import { Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

function InstagramGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brass">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <p className="cadence-reveal beat-1 font-mono text-xs uppercase tracking-[0.2em] text-brass">
            Contact
          </p>
          <h1 className="cadence-reveal beat-2 mt-4 font-display text-4xl italic text-charcoal md:text-5xl">
            Let&rsquo;s make it real.
          </h1>
          <p className="cadence-reveal beat-3 mt-4 max-w-md font-body text-charcoal/70">
            Tell me about the date, the people, and the story you want told.
            I typically reply within 1 to 2 business days.
          </p>

          <div className="cadence-reveal beat-4 mt-10 space-y-4 font-body text-sm text-charcoal/70">
            <p className="flex items-center gap-3">
              <Mail size={16} className="text-brass" /> cadencephotographytn@gmail.com
            </p>
            <a
              href="https://instagram.com/cadencephotographytn"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-brass"
            >
              <InstagramGlyph /> @cadencephotographytn
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={16} className="text-brass" /> Crossville, TN
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
