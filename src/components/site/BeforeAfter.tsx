import { useState } from "react";
import { MoveHorizontal } from "lucide-react";

type Props = {
  /** A single photo with "before" stacked on top and "after" below it. */
  src: string;
  /** Aspect ratio of ONE half of the photo (width / height). */
  ratio: string;
  beforeLabel: string;
  afterLabel: string;
  hint: string;
  alt: string;
};

export function BeforeAfter({ src, ratio, beforeLabel, afterLabel, hint, alt }: Props) {
  const [pos, setPos] = useState(50);
  const bg = { backgroundImage: `url(${src})`, backgroundSize: "100% 200%" } as const;

  return (
    <figure className="select-none">
      <div className="relative overflow-hidden rounded-2xl shadow-soft" style={{ aspectRatio: ratio }} role="img" aria-label={alt}>
        <div className="absolute inset-0" style={{ ...bg, backgroundPosition: "center top" }} />
        <div
          className="absolute inset-0"
          style={{ ...bg, backgroundPosition: "center bottom", clipPath: `inset(0 0 0 ${pos}%)` }}
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
