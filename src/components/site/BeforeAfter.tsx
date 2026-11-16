import { useState } from "react";
import { MoveHorizontal } from "lucide-react";

type Props = {
  before: string;
  after: string;
  /** Shared aspect ratio of both photos (width / height). */
  ratio: string;
  beforeLabel: string;
  afterLabel: string;
  hint: string;
  alt: string;
};

export function BeforeAfter({ before, after, ratio, beforeLabel, afterLabel, hint, alt }: Props) {
  const [pos, setPos] = useState(50);

  return (
    <figure className="select-none">
      <div className="relative overflow-hidden rounded-2xl shadow-soft" style={{ aspectRatio: ratio }} role="img" aria-label={alt}>
        <img src={before} alt="" draggable={false} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <img
          src={after}
          alt=""
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          loading="lazy"
        />
        <span className="text-eyebrow absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1.5 text-foreground">
          {beforeLabel}
        </span>
        <span className="text-eyebrow absolute right-3 top-3 rounded-full bg-primary px-3 py-1.5 text-primary-foreground">
          {afterLabel}
        </span>
        <div className="pointer-events-none absolute inset-y-0 w-px bg-background" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow-soft">
            <MoveHorizontal className="h-5 w-5" strokeWidth={1.25} />
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={hint}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-3 text-xs text-muted-foreground">{hint}</figcaption>
    </figure>
  );
}
