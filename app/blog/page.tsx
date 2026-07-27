import PhotoFrame from "@/components/PhotoFrame";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Five things to bring to your golden hour session",
    excerpt: "A short checklist for making the most of the last hour of daylight.",
    date: "Jun 2026",
    tone: "brass" as const,
  },
  {
    title: "Behind a rainy day backyard wedding",
    excerpt: "How a rainy forecast turned into the best light of the whole day.",
    date: "May 2026",
    tone: "olive" as const,
  },
  {
    title: "How to pick outfits that photograph well",
    excerpt: "Color, texture, and pattern advice for couples and family sessions.",
    date: "Apr 2026",
    tone: "clay" as const,
  },
];

export default function Blog() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <p className="cadence-reveal beat-1 font-mono text-xs uppercase tracking-[0.2em] text-brass">
        Journal
      </p>
      <h1 className="cadence-reveal beat-2 mt-4 max-w-2xl font-display text-4xl italic text-charcoal md:text-5xl">
        Notes from behind the lens.
      </h1>

      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="group cursor-pointer">
            <PhotoFrame label={post.date} tone={post.tone} aspect="aspect-[4/3]" />
            <h2 className="mt-4 font-display text-xl italic text-charcoal">
              {post.title}
            </h2>
            <p className="mt-2 font-body text-sm text-charcoal/75">{post.excerpt}</p>
            <span className="mt-3 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-brass">
              Read post <ArrowRight size={12} />
            </span>
          </article>
        ))}
      </div>

      <p className="mt-14 text-center font-mono text-xs uppercase tracking-widest text-charcoal/75">
        These are placeholder posts. Real entries will come from the CMS.
      </p>
    </section>
  );
}
