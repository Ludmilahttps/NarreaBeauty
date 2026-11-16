import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
  delay?: number;
  mask?: boolean;
  style?: CSSProperties;
};

/** Fades/lifts (or unmasks) its content the first time it enters the viewport. */
export function Reveal({ as: Tag = "div", className, children, delay = 0, mask = false, style }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={cn(mask ? "reveal-mask" : "reveal", className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

export function SectionLabel({ number, label, tone = "light" }: { number: string; label: string; tone?: "light" | "dark" }) {
  return (
    <div className={cn("flex items-center gap-4", tone === "dark" ? "text-night-muted" : "text-muted-foreground")}>
      <span className="font-serif text-lg italic text-primary">{number}</span>
      <span className="hairline w-10" />
      <span className="text-eyebrow">{label}</span>
    </div>
  );
}
