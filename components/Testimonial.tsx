type TestimonialProps = {
  quote: string;
  name: string;
  context?: string;
  variant?: "light" | "dark";
};

export default function Testimonial({
  quote,
  name,
  context,
  variant = "light",
}: TestimonialProps) {
  const isDark = variant === "dark";
  return (
    <figure
      className={`border-l-2 pl-6 ${
        isDark ? "border-brass-light" : "border-brass"
      }`}
    >
      <blockquote
        className={`font-display text-lg italic leading-snug ${
          isDark ? "text-paper" : "text-charcoal"
        }`}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption
        className={`mt-3 font-mono text-xs uppercase tracking-widest ${
          isDark ? "text-paper/75" : "text-charcoal/75"
        }`}
      >
        {name}
        {context ? ` — ${context}` : ""}
      </figcaption>
    </figure>
  );
}
