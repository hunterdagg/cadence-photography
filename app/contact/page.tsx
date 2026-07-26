import { Mail, MapPin } from "lucide-react";

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
            I typically reply within 1–2 business days.
          </p>

          <div className="cadence-reveal beat-4 mt-10 space-y-4 font-body text-sm text-charcoal/70">
            <p className="flex items-center gap-3">
              <Mail size={16} className="text-brass" /> hello@cadencephotography.com
            </p>
            <p className="flex items-center gap-3">
              <InstagramGlyph /> @cadencephotography
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={16} className="text-brass" /> Crossville, TN
            </p>
          </div>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-charcoal/75">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 font-body text-charcoal outline-none focus-visible:border-brass"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-charcoal/75">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 font-body text-charcoal outline-none focus-visible:border-brass"
            />
          </div>

          <div>
            <label htmlFor="sessionType" className="font-mono text-xs uppercase tracking-widest text-charcoal/75">
              Session type
            </label>
            <select
              id="sessionType"
              name="sessionType"
              className="mt-2 w-full rounded-sm border border-charcoal/20 bg-paper px-4 py-3 font-body text-charcoal outline-none focus-visible:border-brass"
            >
              <option>Couples session</option>
              <option>Family session</option>
              <option>Event coverage</option>
              <option>Something else</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-charcoal/75">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-2 w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 font-body text-charcoal outline-none focus-visible:border-brass"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-sm bg-charcoal px-6 py-3 font-body text-sm text-paper transition-colors hover:bg-brass"
          >
            Send message
          </button>
          <p className="font-mono text-[11px] text-charcoal/75">
            Form isn&rsquo;t wired up yet — connect it to Formspree, a Sanity
            mutation, or an email API before launch.
          </p>
        </form>
      </div>
    </section>
  );
}
