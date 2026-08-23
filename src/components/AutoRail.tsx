import { useEffect, useRef } from "react";

/**
 * Horizontal auto-scrolling rail.
 * - Scrolls slowly on its own, loops back to start.
 * - Pauses on hover / touch / focus, resumes after.
 * - Fully swipeable by the user.
 * Track is forced to LTR for predictable scrollLeft math; cards keep RTL text.
 */
export function AutoRail({
  children,
  speed = 0.35,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (paused.current) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 4) return;
      el.scrollLeft = el.scrollLeft >= max - 1 ? 0 : el.scrollLeft + speed;
    };
    raf = requestAnimationFrame(tick);

    const pause = () => (paused.current = true);
    const resume = () => (paused.current = false);
    const events: [string, () => void][] = [
      ["mouseenter", pause],
      ["mouseleave", resume],
      ["pointerdown", pause],
      ["pointerup", resume],
      ["touchstart", pause],
      ["touchend", resume],
      ["focusin", pause],
      ["focusout", resume],
    ];
    events.forEach(([e, h]) => el.addEventListener(e, h, { passive: true }));
    return () => {
      cancelAnimationFrame(raf);
      events.forEach(([e, h]) => el.removeEventListener(e, h));
    };
  }, [speed]);

  return (
    <div className="-mx-5 px-5 md:mx-0 md:px-0">
      <div
        ref={ref}
        dir="ltr"
        className={`flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
