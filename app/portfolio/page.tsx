import PhotoFrame from "@/components/PhotoFrame";

const tones = ["brass", "olive", "clay"] as const;
const exif = { shutter: "1/640", aperture: "f/4.5", iso: "320" };

const gallery = [
  { label: "Duo, No. 1", src: "/portfolio/duo-1.jpg", aspect: "aspect-[2/3]", ...exif },
  { label: "Duo, No. 2", src: "/portfolio/duo-2.jpg", aspect: "aspect-[2/3]", ...exif },
  { label: "Duo, No. 3", src: "/portfolio/duo-3.jpg", aspect: "aspect-[2/3]", ...exif },
  { label: "Solo Portrait, No. 1", src: "/portfolio/solo-portrait-1.jpg", aspect: "aspect-[2/3]", ...exif },
  { label: "Solo Portrait, No. 2", src: "/portfolio/solo-portrait-2.jpg", aspect: "aspect-[2/3]", ...exif },
  { label: "Solo Portrait, No. 3", src: "/portfolio/solo-portrait-3.jpg", aspect: "aspect-[2/3]", ...exif },
  { label: "Solo Landscape, No. 1", src: "/portfolio/solo-landscape-1.jpg", aspect: "aspect-[3/2]", ...exif },
  { label: "Solo Landscape, No. 2", src: "/portfolio/solo-landscape-2.jpg", aspect: "aspect-[3/2]", ...exif },
  { label: "Solo Landscape, No. 3", src: "/portfolio/solo-landscape-3.jpg", aspect: "aspect-[3/2]", ...exif },
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
        Every frame here is shown with the settings behind it: a small
        window into how the shot came together. Full galleries available on
        request.
      </p>

      <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
        {gallery.map((photo, i) => (
          <PhotoFrame
            key={photo.label}
            label={photo.label}
            src={photo.src}
            aspect={photo.aspect}
            shutter={photo.shutter}
            aperture={photo.aperture}
            iso={photo.iso}
            tone={tones[i % tones.length]}
          />
        ))}
      </div>
    </section>
  );
}
