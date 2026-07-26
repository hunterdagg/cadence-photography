import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Testimonial from "@/components/Testimonial";

const packages = [
  {
    name: "Mini Session",
    price: "$75–$150",
    unit: "30–45 minutes",
    outcome:
      "A quick, focused session — perfect for a fast family update, a couple wanting a few real shots, or a first session together before committing to more.",
    featured: false,
  },
  {
    name: "Full Session",
    price: "$150–$250",
    unit: "up to 90 minutes",
    outcome:
      "Room to actually settle in — multiple looks or locations, and enough time that the posed feeling fades and the real one shows up.",
    featured: true,
  },
  {
    name: "Event Coverage",
    price: "Custom quote",
    unit: "weddings & gatherings",
    outcome:
      "For the day itself — coverage built around your timeline so nothing important goes undocumented.",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <p className="cadence-reveal beat-1 font-mono text-xs uppercase tracking-[0.2em] text-brass">
        Booking &amp; Pricing
      </p>
      <h1 className="cadence-reveal beat-2 mt-4 max-w-2xl font-display text-4xl italic text-charcoal md:text-5xl">
        Introductory pricing, for now.
      </h1>
      <p className="cadence-reveal beat-3 mt-4 max-w-xl font-body text-charcoal/70">
        I&rsquo;m currently building out the portfolio, so these rates are
        lower than where they&rsquo;ll land long-term. Book now to lock in
        the introductory pricing.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`flex flex-col rounded-sm border p-8 ${
              pkg.featured
                ? "border-brass bg-charcoal text-paper"
                : "border-charcoal/15 bg-paper-dim/40 text-charcoal"
            }`}
          >
            <h2 className="font-display text-xl italic">{pkg.name}</h2>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-3xl">{pkg.price}</span>
              <span className={`font-mono text-xs ${pkg.featured ? "text-paper/75" : "text-charcoal/75"}`}>
                {pkg.unit}
              </span>
            </div>
            <p className={`mt-6 flex-1 font-body text-sm ${pkg.featured ? "text-paper/80" : "text-charcoal/70"}`}>
              {pkg.outcome}
            </p>
            <Link
              href="/contact"
              className={`mt-8 inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-body text-sm transition-colors ${
                pkg.featured
                  ? "bg-brass text-paper hover:bg-brass-light"
                  : "bg-charcoal text-paper hover:bg-brass"
              }`}
            >
              Check availability <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-xl">
        <Testimonial
          quote="Worth every bit of the drive out — she found light in our backyard I didn't know was there."
          name="Placeholder client"
          context="Full session"
        />
      </div>
    </section>
  );
}
