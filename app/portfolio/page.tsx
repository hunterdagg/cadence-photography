import PhotoFrame from "@/components/PhotoFrame";

const tones = ["brass", "olive", "clay"] as const;

const gallery = [
  { label: "Golden Hour, No. 1", shutter: "1/200", aperture: "f/1.8", iso: "200" },
  { label: "The Reception", shutter: "1/160", aperture: "f/2.5", iso: "640" },
  { label: "First Look", shutter: "1/320", aperture: "f/2.0", iso: "320" },
  { label: "Studio Portrait, No. 4", shutter: "1/125", aperture: "f/4.0", iso: "100" },
  { label: "Quiet Rooms II", shutter: "1/100", aperture: "f/2.0", iso: "800" },
  { label: "The Vows", shutter: "1/320", aperture: "f/2.8", iso: "400" },
  { label: "Anniversary Session", shutter: "1/250", aperture: "f/3.5", iso: "200" },
  { label: "Golden Hour, No. 2", shutter: "1/200", aperture: "f/1.8", iso: "200" },
  { label: "Family, Front Porch", shutter: "1/200", aperture: "f/2.8", iso: "160" },
];

export default function Portfolio() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <p className="cadence-reveal beat-1 font-mono text-xs uppercase tracking-[0.2em] text-brass">
        Selected work
      </p>
      <h1 className="cadence-reveal beat-2 mt-4 max-w-2xl font-display text-4xl italic text-charcoal md:text-5xl">
        A contact sheet of recent sessions.
      </h1>
      <p className="cadence-reveal beat-3 mt-4 max-w-xl font-body text-charcoal/70">
        Every frame here is shown with the settings behind it — a small
        window into how the shot came together. Full galleries available on
        request.
      </p>

      <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
        {gallery.map((photo, i) => (
          <PhotoFrame
            key={photo.label}
            label={photo.label}
            shutter={photo.shutter}
            aperture={photo.aperture}
            iso={photo.iso}
            tone={tones[i % tones.length]}
          />
        ))}
      </div>

      <p className="mt-14 text-center font-mono text-xs uppercase tracking-widest text-charcoal/75">
        These frames are placeholders — swap in real galleries from the CMS.
      </p>
    </section>
  );
}
