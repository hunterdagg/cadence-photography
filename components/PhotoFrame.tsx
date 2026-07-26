import { Camera } from "lucide-react";

type PhotoFrameProps = {
  label: string;
  aspect?: string;
  shutter?: string;
  aperture?: string;
  iso?: string;
  tone?: "brass" | "olive" | "clay";
  className?: string;
};

const tones = {
  brass: "from-[#947961] via-[#6d4929] to-[#4a3018]",
  olive: "from-[#797870] via-[#4a4a3e] to-[#34342a]",
  clay: "from-[#e4dccd] via-[#d1c6b9] to-[#a8988a]",
};

export default function PhotoFrame({
  label,
  aspect = "aspect-[4/5]",
  shutter = "1/250",
  aperture = "f/2.0",
  iso = "400",
  tone = "brass",
  className = "",
}: PhotoFrameProps) {
  return (
    <figure className={`group ${className}`}>
      <div
        className={`relative ${aspect} w-full overflow-hidden rounded-sm bg-gradient-to-br ${tones[tone]} transition-transform duration-500 group-hover:scale-[1.02]`}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <Camera size={40} strokeWidth={1} className="text-paper" />
        </div>
        <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/10" />
      </div>
      <figcaption className="mt-2 flex items-center justify-between font-mono text-[10px] tracking-wide text-charcoal/75">
        <span>{label}</span>
        <span>{shutter} · {aperture} · ISO {iso}</span>
      </figcaption>
    </figure>
  );
}
