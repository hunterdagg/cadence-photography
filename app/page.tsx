import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PhotoFrame from "@/components/PhotoFrame";
import Testimonial from "@/components/Testimonial";

const exif = { shutter: "1/640", aperture: "f/4.5", iso: "320" };

const featured = [
  { label: "Duo, No. 1", src: "/portfolio/duo-1.jpg", aspect: "aspect-[2/3]", tone: "brass" as const, ...exif },
  { label: "Solo Portrait, No. 2", src: "/portfolio/solo-portrait-2.jpg", aspect: "aspect-[2/3]", tone: "olive" as const, ...exif },
  { label: "Solo Landscape, No. 1", src: "/portfolio/solo-landscape-1.jpg", aspect: "aspect-[3/2]", tone: "clay" as const, ...exif },
];

const services = [
  { title: "Couples", copy: "Engagement sessions and anniversary shoots that feel like the two of you, not a staged shot." },
  { title: "Family", copy: "Portraits that hold up on the wall for years. No forced smiles, just how your family actually is together." },
  { title: "Events", copy: "Weddings, receptions, and milestone gatherings, documented without getting in the way of the day." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <div className="cadence-reveal beat-1">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
            Couples &amp; Family Photography, Crossville, TN
          </p>
        </div>
        <h1 className="cadence-reveal beat-2 mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-charcoal md:text-7xl">
          Real moments. <span className="italic text-brass">Real connection.</span>
        </h1>
        <p className="cadence-reveal beat-3 mt-6 max-w-xl font-body text-lg text-charcoal/70">
          Photography for couples, families, and the milestones in between:
          images that hold up because they're actually you, not a
          performance of you.
        </p>
        <div className="cadence-reveal beat-4 mt-8 flex flex-wrap items-center gap-6">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-sm bg-charcoal px-6 py-3 font-body text-sm text-paper transition-colors hover:bg-brass"
          >
            Book a session <ArrowRight size={16} />
          </Link>
          <Link
            href="/portfolio"
            className="font-body text-sm text-charcoal/75 underline decoration-charcoal/20 underline-offset-4 transition-colors hover:text-brass hover:decoration-brass"
          >
            See the portfolio first
          </Link>
        </div>
      </section>

      {/* Featured contact sheet */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <div className="mb-8 flex items-end justify-between border-b border-charcoal/10 pb-4">
          <h2 className="font-display text-2xl italic text-charcoal">Recent frames</h2>
          <Link href="/portfolio" className="font-mono text-xs uppercase tracking-widest text-brass hover:underline">
            Full portfolio
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {featured.map((f) => (
            <PhotoFrame key={f.label} {...f} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-charcoal text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <h2 className="font-display text-3xl italic">What I shoot</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.title} className="border-t border-paper/20 pt-6">
                <span className="font-mono text-xs text-brass">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl">{s.title}</h3>
                <p className="mt-2 font-body text-sm text-paper/75">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <Testimonial
          quote="She made an hour with a squirmy toddler and two tired parents feel completely relaxed, and somehow every photo still looks like us."
          name="Placeholder client"
          context="Family session"
        />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center md:px-10">
        <h2 className="mx-auto max-w-2xl font-display text-3xl italic text-charcoal md:text-4xl">
          Let&rsquo;s make something real together.
        </h2>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-brass px-8 py-3 font-body text-sm text-paper transition-colors hover:bg-charcoal"
        >
          Get in touch <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
