import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Item = { src: string; alt: string };

type Props = {
  items: Item[];
  index: number | null;
  onChange: (i: number | null) => void;
  labels: { prev: string; next: string; close: string };
};

export function Lightbox({ items, index, onChange, labels }: Props) {
  const touchX = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;

  const go = (d: number) => {
    if (index === null) return;
    onChange((index + d + items.length) % items.length);
  };

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index]);

  if (index === null) return null;
  const item = items[index];

  return (
    <div
      className="animate-in fade-in fixed inset-0 z-[60] flex items-center justify-center bg-night/95 duration-500"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={() => onChange(null)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <img
        key={item.src}
        src={item.src}
        alt={item.alt}
        className="animate-in zoom-in-95 fade-in max-h-[85dvh] max-w-[92vw] rounded-xl object-contain duration-500"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 text-center text-sm text-night-muted">
        {index + 1} / {items.length}
      </p>
      <button
        ref={closeRef}
        type="button"
        onClick={() => onChange(null)}
        aria-label={labels.close}
        className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-night-foreground/30 text-night-foreground"
      >
        <X className="h-5 w-5" strokeWidth={1.25} />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          go(-1);
        }}
        aria-label={labels.prev}
        className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-night-foreground/30 text-night-foreground md:flex"
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={1.25} />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          go(1);
        }}
        aria-label={labels.next}
        className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-night-foreground/30 text-night-foreground md:flex"
      >
        <ChevronRight className="h-5 w-5" strokeWidth={1.25} />
      </button>
    </div>
  );
}
