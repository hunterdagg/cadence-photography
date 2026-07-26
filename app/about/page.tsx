import PhotoFrame from "@/components/PhotoFrame";
import Testimonial from "@/components/Testimonial";

const values = [
  { title: "Unhurried", copy: "Kids need a minute to warm up, and couples need a minute to stop posing. I build that time into every session." },
  { title: "Honest light", copy: "Natural light first, always. Editing supports the moment — it doesn't replace it." },
  { title: "No forced smiles", copy: "The real ones show up in the in-between moments, not on command. That's what I'm actually shooting for." },
];

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start md:gap-16">
        <div className="cadence-reveal beat-1">
          <PhotoFrame
            label="Studio Portrait — Founder"
            aspect="aspect-[3/4]"
            tone="olive"
            shutter="1/160"
            aperture="f/2.0"
            iso="200"
          />
        </div>

        <div>
          <p className="cadence-reveal beat-2 font-mono text-xs uppercase tracking-[0.2em] text-brass">
            About
          </p>
          <h1 className="cadence-reveal beat-3 mt-4 font-display text-4xl italic text-charcoal md:text-5xl">
            Behind the camera
          </h1>
          <div className="cadence-reveal beat-4 mt-6 space-y-4 font-body text-charcoal/70">
            <p>
              Cadence Photography is a freelance studio based in Crossville,
              Tennessee, working with couples, families, and small
              gatherings throughout the surrounding area.
            </p>
            <p>
              Replace this paragraph with a real bio — how you got started,
              what draws you to photographing couples and families, and
              what people can expect working with you. Two or three short
              paragraphs is plenty.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-xl">
        <Testimonial
          quote="She got our whole extended family — including the toddlers — smiling in the same photo. Still not sure how."
          name="Placeholder client"
          context="Family session"
          variant="light"
        />
      </div>

      <div className="mt-20 border-t border-charcoal/10 pt-14">
        <h2 className="font-display text-2xl italic text-charcoal">How I work</h2>
        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
          {values.map((v, i) => (
            <div key={v.title} className="border-t border-charcoal/20 pt-5">
              <span className="font-mono text-xs text-brass">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg text-charcoal">{v.title}</h3>
              <p className="mt-2 font-body text-sm text-charcoal/75">{v.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
