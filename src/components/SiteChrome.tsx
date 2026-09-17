import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowLeft, Check, Menu, Phone, X } from "lucide-react";
import logoAsset from "@/assets/xlans-logo-new.png.asset.json";
import { BookingWizard } from "@/components/BookingWizard";

export const PHONE_NUMBER = "+201140226705";
export const WA_NUMBER = "201140226705";
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("مرحبًا XLANS، أود مناقشة احتياج تقني داخل شركتي.")}`;

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true"><path d="M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.47 1.73 6.42L3.2 28.8l6.55-1.71a12.77 12.77 0 0 0 6.25 1.6h.01c7.06 0 12.8-5.73 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05a12.71 12.71 0 0 0-9.06-3.64Zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.88 1.02 1.03-3.79-.25-.4a10.62 10.62 0 0 1-1.63-5.68c0-5.87 4.78-10.64 10.64-10.64 2.84 0 5.51 1.11 7.52 3.12a10.55 10.55 0 0 1 3.12 7.52c0 5.87-4.78 10.64-10.64 10.64Zm5.83-7.97c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55-.18-.01-.4-.01-.61-.01-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.28 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" /></svg>;
}

const nav = [
  { label: "الرئيسية", to: "/" as const },
  { label: "الخدمات", to: "/services" as const },
  { label: "كيفية العمل", to: "/how-we-work" as const },
  { label: "دراسات الحالة", to: "/case-studies" as const },
];

export function SitePage({ children }: { children: ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <div className="min-h-screen bg-background text-foreground">
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "bg-background/95 py-2 shadow-md backdrop-blur" : "bg-background/75 py-3 backdrop-blur-sm"}`}>
      <div className="container-x flex items-center justify-between gap-3">
        <Link to="/" aria-label="XLANS"><img src={logoAsset.url} alt="XLANS" width={180} height={60} className="h-12 w-auto sm:h-14" /></Link>
        <nav className="hidden items-center gap-7 lg:flex">{nav.map((item) => <Link key={item.to} to={item.to} activeProps={{ className: "text-gold" }} className="text-sm font-semibold text-navy transition hover:text-gold">{item.label}</Link>)}</nav>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setCallOpen(true)} className="hidden min-h-11 items-center gap-2 rounded-full border border-gold/50 bg-background px-4 text-sm font-bold text-navy transition hover:bg-cream sm:inline-flex"><Phone className="h-4 w-4" /> مكالمة مباشرة</button>
          <button type="button" onClick={() => setBookingOpen(true)} className="hidden min-h-11 rounded-full navy-gradient px-5 text-sm font-bold text-navy-foreground md:block">احجز Discovery Call</button>
          <button type="button" onClick={() => setMenuOpen(true)} aria-label="القائمة" className="grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden"><Menu className="h-5 w-5" /></button>
        </div>
      </div>
    </header>
    {menuOpen && <div className="fixed inset-0 z-[80] bg-background lg:hidden"><div className="container-x flex items-center justify-between py-4"><img src={logoAsset.url} alt="XLANS" className="h-12 w-auto" /><button type="button" onClick={() => setMenuOpen(false)} aria-label="إغلاق" className="grid h-11 w-11 place-items-center rounded-full border border-border"><X className="h-5 w-5" /></button></div><nav className="container-x grid gap-2 pt-5">{nav.map((item) => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="rounded-md border border-border px-5 py-4 text-base font-bold text-navy">{item.label}</Link>)}<button type="button" onClick={() => { setMenuOpen(false); setBookingOpen(true); }} className="mt-3 min-h-12 rounded-md navy-gradient font-bold text-navy-foreground">احجز Discovery Call</button></nav></div>}
    <main>{children}</main>
    <footer className="bg-navy-deep pb-24 pt-10 text-navy-foreground md:pb-8"><div className="container-x grid gap-8 md:grid-cols-2"><div><img src={logoAsset.url} alt="XLANS" className="h-10 w-auto" /><p className="mt-4 max-w-md text-sm leading-7 text-navy-foreground/70">حلول برمجية للشركات المتوسطة والكبيرة، تبدأ بفهم القرار وتنتهي بنظام جاهز للعمل والنمو.</p></div><nav className="flex flex-wrap content-start gap-x-5 gap-y-3 md:justify-end">{nav.map((item) => <Link key={item.to} to={item.to} className="text-sm text-navy-foreground/75 transition hover:text-gold">{item.label}</Link>)}</nav></div><div className="container-x mt-8 border-t border-navy-foreground/10 pt-5 text-center text-xs text-navy-foreground/50">جميع الحقوق محفوظة © {new Date().getFullYear()} XLANS Web Solutions</div></footer>
    <div className="fixed bottom-6 left-6 z-40 hidden items-center gap-2 md:flex"><button type="button" onClick={() => setCallOpen(true)} className="inline-flex h-14 items-center gap-2 rounded-full bg-background px-5 font-bold text-navy shadow-xl ring-1 ring-border"><Phone className="h-5 w-5" /> مكالمة مباشرة</button><a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="واتساب" className="grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl"><WhatsAppIcon className="h-6 w-6" /></a></div>
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden"><div className="mx-auto grid max-w-md grid-cols-3 gap-2"><button type="button" onClick={() => setBookingOpen(true)} className="min-h-12 rounded-full navy-gradient px-2 text-xs font-bold text-navy-foreground">Discovery Call</button><button type="button" onClick={() => setCallOpen(true)} className="inline-flex min-h-12 items-center justify-center gap-1 rounded-full border border-gold/50 bg-cream px-2 text-xs font-bold text-navy"><Phone className="h-4 w-4" /> اتصال</button><a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-1 rounded-full bg-whatsapp px-2 text-xs font-bold text-whatsapp-foreground"><WhatsAppIcon className="h-4 w-4" /> واتساب</a></div></div>
    <BookingWizard open={bookingOpen} onClose={() => setBookingOpen(false)} />
    <CallModal open={callOpen} onClose={() => setCallOpen(false)} />
  </div>;
}

function CallModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [read, setRead] = useState(false);
  useEffect(() => { if (!open) setRead(false); }, [open]);
  if (!open) return null;
  return <div className="fixed inset-0 z-[110] grid place-items-center bg-navy/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="call-title" onClick={onClose}><div className="w-full max-w-md rounded-md bg-background p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="flex items-start justify-between gap-4"><div><span className="text-xs font-bold text-gold">قبل الاتصال</span><h2 id="call-title" className="mt-1 text-2xl font-black text-navy">مواعيد المكالمات المباشرة</h2></div><button type="button" onClick={onClose} aria-label="إغلاق" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border"><X className="h-5 w-5" /></button></div><div className="mt-5 border-y border-border py-5"><p className="text-base font-bold text-navy">يوميًا عدا الجمعة</p><p className="mt-1 text-2xl font-black text-gold">من ٩ صباحًا حتى ٦ مساءً</p><p className="mt-3 text-sm leading-7 text-muted-foreground">إذا كان الوقت مناسبًا، أكد اطلاعك على المواعيد وسيظهر زر الاتصال المباشر.</p></div><label className="mt-5 flex cursor-pointer items-start gap-3 text-sm font-semibold text-foreground"><input type="checkbox" checked={read} onChange={(event) => setRead(event.target.checked)} className="mt-0.5 h-5 w-5 accent-[color:var(--gold)]" /> قرأت مواعيد العمل وأرغب في الاتصال الآن</label>{read && <a href={`tel:${PHONE_NUMBER}`} className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-full navy-gradient font-bold text-navy-foreground"><Phone className="h-5 w-5" /> اتصال مباشر <span dir="ltr">{PHONE_NUMBER}</span></a>}</div></div>;
}

export function PageHero({ eyebrow, title, intro, image, imageAlt }: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string }) {
  return <section className="bg-cream pb-12 pt-28 sm:pt-32"><div className="container-x grid items-center gap-8 md:grid-cols-2 md:gap-14"><div className="text-center md:text-right"><span className="text-sm font-bold text-gold">{eyebrow}</span><h1 className="mt-3 text-3xl font-black leading-tight text-navy sm:text-5xl">{title}</h1><p className="mx-auto mt-4 max-w-xl text-base leading-8 text-muted-foreground md:mx-0">{intro}</p></div><img src={image} alt={imageAlt} width={1536} height={864} className="aspect-[16/10] w-full rounded-sm object-cover" /></div></section>;
}

export function PrimaryCta({ title = "ناقش احتياج شركتك", onClick }: { title?: string; onClick?: () => void }) {
  return <button type="button" onClick={onClick} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full navy-gradient px-6 font-bold text-navy-foreground">{title}<ArrowLeft className="h-4 w-4" /></button>;
}