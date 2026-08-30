import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const pos = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Auto-scroll on mobile only; desktop users scroll manually.
    if (window.matchMedia("(min-width: 768px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (paused.current) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 4) return;
      pos.current = pos.current >= max - 1 ? 0 : Math.min(max, pos.current + speed);
      el.scrollLeft = pos.current;
    };
    raf = requestAnimationFrame(tick);

    const pause = () => (paused.current = true);
    const resume = () => {
      pos.current = el.scrollLeft;
      paused.current = false;
    };
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

  const scrollByCard = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 12 : el.clientWidth * 0.8;
    const max = el.scrollWidth - el.clientWidth;
    const next = Math.max(0, Math.min(max, el.scrollLeft + dir * step));
    pos.current = next;
    el.scrollTo({ left: next, behavior: "smooth" });
  };

  const btn =
    "grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-navy shadow-sm transition hover:border-gold hover:text-gold active:scale-95";

  return (
    <div className="-mx-5 px-5 md:mx-0 md:px-0">
      <div
        ref={ref}
        dir="ltr"
        style={{ scrollBehavior: "auto" }}
        className={`flex gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
      >
        {children}
      </div>
      <div className="mt-1 flex items-center justify-center gap-3">
        <button type="button" aria-label="التالي" onClick={() => scrollByCard(1)} className={btn}>
          <ChevronRight className="h-5 w-5" />
        </button>
        <button type="button" aria-label="السابق" onClick={() => scrollByCard(-1)} className={btn}>
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
