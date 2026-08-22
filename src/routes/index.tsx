import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Menu,
  X,
  Check,
  ChevronDown,
  Rocket,
  Target,
  Zap,
  Shield,
  Sparkles,
  Users,
  Building2,
  Stethoscope,
  ShoppingBag,
  RefreshCw,
  Globe,
  Calendar,
  Store,
  Wrench,
  Briefcase,
  TrendingUp,
  Clock,
  Layers,
  Smartphone,
  Wallet,
  Headphones,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import logoAsset from "@/assets/xlans-logo-new.png.asset.json";
const logo = logoAsset.url;

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.47 1.73 6.42L3.2 28.8l6.55-1.71a12.77 12.77 0 0 0 6.25 1.6h.01c7.06 0 12.8-5.73 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05a12.71 12.71 0 0 0-9.06-3.64Zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.88 1.02 1.03-3.79-.25-.4a10.62 10.62 0 0 1-1.63-5.68c0-5.87 4.78-10.64 10.64-10.64 2.84 0 5.51 1.11 7.52 3.12a10.55 10.55 0 0 1 3.12 7.52c0 5.87-4.78 10.64-10.64 10.64Zm5.83-7.97c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55-.18-.01-.4-.01-.61-.01-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.28 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z"/>
    </svg>
  );
}
import { BookingWizard } from "@/components/BookingWizard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XLANS Web Solutions | تصميم مواقع احترافية للشركات" },
      {
        name: "description",
        content:
          "XLANS تساعد الشركات وأصحاب المشاريع على إنشاء مواقع سريعة وآمنة ومبنية على أهداف البيزنس، مع مواقع تعريفية ومتاجر وأنظمة حجز بسيطة.",
      },
      { property: "og:title", content: "XLANS Web Solutions | تصميم مواقع احترافية للشركات" },
      {
        property: "og:description",
        content: "XLANS تساعد الشركات وأصحاب المشاريع على إنشاء مواقع سريعة وآمنة ومبنية على أهداف البيزنس، مع مواقع تعريفية ومتاجر وأنظمة حجز بسيطة.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              name: "XLANS Web Solutions",
              description:
                "تصميم وتطوير مواقع احترافية للشركات وأصحاب المشاريع، متاجر إلكترونية وأنظمة حجز.",
              url: "/",
              telephone: "+201140226705",
              founder: { "@type": "Person", name: "Mohamed Sultan" },
              areaServed: ["EG", "SA", "QA", "US"],
            },
            {
              "@type": "Person",
              name: "Mohamed Sultan",
              jobTitle: "Web Solutions Specialist",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61592109614629",
                "https://www.instagram.com/1xlans1/",
                "https://www.linkedin.com/company/xlans-web-solutions",
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: LandingPage,
});

const WA_NUMBER = "201140226705";
const PHONE_NUMBER = "+201140226705";
const TEL_LINK = `tel:${PHONE_NUMBER}`;
const WA_DEFAULT_MSG =
  "مرحبًا محمد، وصلت ليك من موقع XLANS وعايز أعرف أنسب حل لموقع مشروعي.";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_DEFAULT_MSG)}`;

const SOCIALS = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592109614629",
  },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/1xlans1/" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/xlans-web-solutions",
  },
];

function LandingPage() {
  const [wizardOpen, setWizardOpen] = useState(false);
  const [initialService, setInitialService] = useState<string | undefined>();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openWizard = (service?: string) => {
    setInitialService(service);
    setWizardOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        scrolled={scrolled}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        onBook={() => openWizard()}
      />

      <main>
        <Hero onBook={() => openWizard()} />
        <TrustStrip />
        <Audience onBook={() => openWizard()} />
        <Services onBook={openWizard} />
        <WhyXlans />
        <CustomerJourney />
        <Process />
        <PortfolioCTA />
        <BookingSection onBook={() => openWizard()} />
        <FAQ />
        <Social />
        <FinalCTA onBook={() => openWizard()} />
      </main>

      <Footer onBook={() => openWizard()} />

      <FloatingWhatsApp />
      <MobileBottomBar onBook={() => openWizard()} />

      <BookingWizard
        open={wizardOpen}
        onClose={() => setWizardOpen(false)}
        initialService={initialService}
      />
    </div>
  );
}

/* ============================================================
   HEADER
============================================================ */
const NAV = [
  { label: "الرئيسية", href: "#home" },
  { label: "خدماتنا", href: "#services" },
  { label: "لماذا XLANS؟", href: "#why" },
  { label: "خطوات العمل", href: "#process" },
  { label: "الأسئلة الشائعة", href: "#faq" },
  { label: "تواصل معنا", href: "#contact" },
];

function Header({
  scrolled,
  mobileMenu,
  setMobileMenu,
  onBook,
}: {
  scrolled: boolean;
  mobileMenu: boolean;
  setMobileMenu: (v: boolean) => void;
  onBook: () => void;
}) {
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 py-2 shadow-[0_4px_20px_-8px_rgba(7,29,59,0.15)] backdrop-blur-md"
            : "bg-background/60 py-4 backdrop-blur-sm"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4">
          <a href="#home" className="flex shrink-0 items-center" aria-label="XLANS">
            <img
              src={logo}
              alt="XLANS"
              width={180}
              height={60}
              className="h-14 w-auto sm:h-16"
            />

          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground/80 transition hover:text-navy"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={onBook}
              className="hidden min-h-11 items-center rounded-full navy-gradient px-5 text-sm font-bold text-navy-foreground shadow-md transition hover:brightness-110 md:inline-flex"
            >
              احجز استشارة مجانية
            </button>
            <a
              href={TEL_LINK}
              aria-label="اتصل بنا"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full navy-gradient px-4 text-sm font-bold text-navy-foreground shadow-md transition hover:brightness-110 md:hidden"
            >
              <Phone className="h-4 w-4" />
              اتصل
            </a>
            <button
              onClick={() => setMobileMenu(true)}
              aria-label="القائمة"
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {mobileMenu && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-background lg:hidden">
          <div className="container-x flex items-center justify-between py-4">
            <img src={logo} alt="XLANS" className="h-14 w-auto" />
            <button
              onClick={() => setMobileMenu(false)}
              aria-label="إغلاق"
              className="grid h-11 w-11 place-items-center rounded-full border border-border"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="container-x flex flex-1 flex-col gap-2 pt-6">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMobileMenu(false)}
                className="rounded-2xl border border-border px-5 py-4 text-base font-semibold text-foreground transition hover:border-gold hover:bg-cream"
              >
                {n.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenu(false);
                onBook();
              }}
              className="mt-4 min-h-14 rounded-2xl navy-gradient text-base font-bold text-navy-foreground"
            >
              احجز استشارة مجانية
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

/* ============================================================
   HERO
============================================================ */
const HERO_SLIDES: {
  eyebrow: string;
  title: string;
  desc: string;
  icon: typeof Rocket;
  points: string[];
}[] = [
  {
    eyebrow: "من نحن",
    title: "شركة XLANS للحلول الرقمية",
    desc: "فريق متخصص في بناء مواقع الشركات والمتاجر بمعايير احترافية، بنركّز على الأداء والأمان وتجربة العميل.",
    icon: Building2,
    points: ["فريق تصميم وتطوير", "خبرة في السوق العربي والخليجي", "شراكة طويلة بعد الإطلاق"],
  },
  {
    eyebrow: "ماذا نقدم",
    title: "مواقع تعريفية ومتاجر إلكترونية",
    desc: "من الموقع التعريفي للشركة إلى المتجر الإلكتروني ونظام الحجز، نبني الحل المناسب لأهداف مشروعك.",
    icon: Store,
    points: ["مواقع شركات وخدمات", "متاجر إلكترونية", "أنظمة حجز ومواعيد"],
  },
  {
    eyebrow: "سرعة التنفيذ",
    title: "نسخة أولية خلال 48 ساعة",
    desc: "بنبدأ التنفيذ فور تأكيد النطاق واستلام المحتوى، وبنسلّم V1 جاهزة للمراجعة والتعديل بسرعة.",
    icon: Zap,
    points: ["خطة واضحة من أول جلسة", "تسليمات مرحلية", "دعم بعد الإطلاق"],
  },
  {
    eyebrow: "الأمان والأداء",
    title: "مواقع سريعة وآمنة",
    desc: "بنيّة تحتية موثوقة، حماية من الاختراق، وسرعة تحميل عالية على الموبايل قبل الديسكتوب.",
    icon: Shield,
    points: ["Core Web Vitals", "شهادات SSL", "نسخ احتياطية"],
  },
];

function HeroSlider() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);
  const slide = HERO_SLIDES[idx];
  const Icon = slide.icon;
  return (
    <div className="relative reveal" style={{ animationDelay: "150ms" }}>
      <div className="relative mx-auto w-full max-w-md">
        {/* Glow */}
        <div
          aria-hidden
          className="absolute inset-4 rounded-[2.5rem] blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 40%, transparent), transparent)",
          }}
        />
        {/* Gold frame */}
        <div className="absolute inset-0 rounded-[2.5rem] gold-gradient" />
        <div className="relative m-[3px] overflow-hidden rounded-[2.35rem] navy-gradient p-6 sm:p-8">
          <div className="relative min-h-[340px] sm:min-h-[380px]">
            {HERO_SLIDES.map((s, i) => {
              const SIcon = s.icon;
              return (
                <div
                  key={i}
                  className={`absolute inset-0 flex flex-col transition-all duration-700 ${
                    i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
                  }`}
                >
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold/15 px-3 py-1.5 text-xs font-bold text-gold ring-1 ring-gold/30">
                    <SIcon className="h-3.5 w-3.5" />
                    {s.eyebrow}
                  </span>
                  <h3 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                    {s.desc}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-white/90">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full gold-gradient text-navy">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-gold ring-1 ring-gold/30">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex gap-1.5">
                      {HERO_SLIDES.map((_, j) => (
                        <button
                          key={j}
                          aria-label={`الشريحة ${j + 1}`}
                          onClick={() => setIdx(j)}
                          className={`h-1.5 rounded-full transition-all ${
                            j === idx ? "w-6 bg-gold" : "w-1.5 bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-24"
    >
      {/* Decorative background logo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 select-none opacity-[0.05] md:-left-32 md:opacity-[0.07]"
      >
        <img src={logo} alt="" className="w-[28rem] md:w-[42rem]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, color-mix(in oklab, var(--gold) 12%, transparent), transparent 40%), radial-gradient(circle at 80% 70%, color-mix(in oklab, var(--navy) 8%, transparent), transparent 45%)",
        }}
      />

      <div className="container-x relative">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_1fr] md:gap-12">
          {/* Text */}
          <div className="reveal text-center md:text-right">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-4 py-2 text-xs font-semibold text-navy backdrop-blur-sm sm:text-sm">
              <Sparkles className="h-4 w-4 text-gold" />
              مواقع احترافية للشركات وأصحاب المشاريع
            </span>

            <h1 className="mt-5 text-3xl font-black leading-[1.15] text-navy sm:text-4xl md:text-5xl lg:text-6xl">
              موقع شركتك مش مجرد شكل…
              <br />
              لازم <span className="gold-text">يحقق هدفك</span>.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg md:mx-0">
              في XLANS بنبني مواقع سريعة وآمنة ومخصصة، مبنية على فهم البيزنس وسلوك
              العميل، عشان تساعد زوارك يوصلوا للتواصل أو الحجز أو طلب عرض سعر بأقل
              خطوات.
            </p>

            <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-2xl border border-gold/30 bg-white/80 px-4 py-3 text-start text-sm text-navy shadow-sm md:mx-0">
              <Clock className="h-4 w-4 shrink-0 text-gold" />
              <div>
                <strong>نسخة أولية V1 خلال 48 ساعة</strong> للمواقع التعريفية القياسية.
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  بعد استلام المحتوى وتأكيد نطاق المشروع.
                </span>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
              <button
                onClick={onBook}
                className="group inline-flex min-h-13 items-center gap-2 rounded-full navy-gradient px-7 py-3 text-sm font-bold text-navy-foreground shadow-xl transition hover:brightness-110 sm:text-base"
              >
                ابدأ مشروعك
                <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
              </button>
              <a
                href="#services"
                className="inline-flex min-h-13 items-center gap-2 rounded-full border-2 border-navy/15 bg-white px-6 py-3 text-sm font-bold text-navy transition hover:border-gold hover:text-navy sm:text-base"
              >
                تعرّف على خدماتنا
              </a>
            </div>

            <p className="mt-5 text-xs text-muted-foreground sm:text-sm">
              استشارة أولية مجانية • أسعار واضحة • بدون تكاليف مفاجئة
            </p>
          </div>

          {/* Slider */}
          <HeroSlider />
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   TRUST STRIP
============================================================ */
function TrustStrip() {
  const items = [
    { icon: Briefcase, label: "+10 مشاريع تم تنفيذها" },
    { icon: TrendingUp, label: "+3 سنوات خبرة متخصصة" },
    { icon: Globe, label: "عملاء في مصر والخليج وأمريكا" },
    { icon: Zap, label: "مواقع سريعة وآمنة" },
  ];
  return (
    <section className="border-y border-border bg-white py-8">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {items.map((it) => (
            <div
              key={it.label}
              className="flex items-center gap-3 rounded-2xl bg-mist/60 px-4 py-4 md:bg-transparent md:px-0"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold/30 bg-cream text-gold">
                <it.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold leading-tight text-navy md:text-base">
                {it.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   AUDIENCE
============================================================ */
function Audience({ onBook }: { onBook: () => void }) {
  const cards = [
    {
      icon: Briefcase,
      title: "الشركات الخدمية",
      desc: "اعرض خدماتك وخلّي العميل يوصل للحجز أو التواصل بسهولة.",
    },
    {
      icon: Building2,
      title: "الشركات الصناعية",
      desc: "اعرض الشركة والمنتجات والكتالوجات وسهّل طلب عرض السعر.",
    },
    {
      icon: Stethoscope,
      title: "العيادات ومراكز الخدمات",
      desc: "موقع تعريفي مع نظام حجز أو طلب استشارة بسيط.",
    },
    {
      icon: ShoppingBag,
      title: "المتاجر وأصحاب المنتجات",
      desc: "متجر سريع وسهل يساعد العميل يكتشف المنتج ويكمل الطلب.",
    },
    {
      icon: RefreshCw,
      title: "الشركات التي لديها موقع قديم",
      desc: "إعادة تصميم وتحسين السرعة وتجربة الموبايل ورحلة العميل.",
    },
  ];
  return (
    <Section eyebrow="لمين الخدمة؟" title="هل الخدمة مناسبة ليك؟" intro="XLANS مناسبة ليك لو أنت صاحب شركة أو مشروع وعايز موقع واضح يخدم هدف حقيقي.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <article
            key={c.title}
            className="hover-lift group rounded-3xl border border-border bg-white p-6 text-center sm:text-right"
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl gold-gradient text-navy sm:mx-0">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-navy">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button
          onClick={onBook}
          className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-navy px-6 text-sm font-bold text-navy transition hover:bg-navy hover:text-navy-foreground"
        >
          مش متأكد إيه المناسب لنشاطك؟ اسألنا مجانًا
          <ArrowLeft className="h-4 w-4" />
        </button>
      </div>
    </Section>
  );
}

/* ============================================================
   SERVICES
============================================================ */
function Services({ onBook }: { onBook: (s?: string) => void }) {
  const services = [
    {
      icon: Building2,
      key: "موقع شركة",
      title: "مواقع الشركات",
      desc: "موقع احترافي يوضح خدماتك، يبني الثقة، ويسهّل التواصل وطلب عرض السعر.",
      features: [
        "تصميم مخصص للنشاط",
        "متوافق مع الموبايل",
        "نموذج تواصل أو طلب عرض سعر",
        "ربط واتساب والسوشيال ميديا",
      ],
    },
    {
      icon: Zap,
      key: "موقع تعريفي",
      title: "مواقع تعريفية سريعة",
      desc: "حل مناسب للمشاريع الصغيرة والخدمات والـPortfolio.",
      features: [
        "صفحات واضحة ومختصرة",
        "نسخة أولية خلال 48 ساعة",
        "سرعة وأداء قوي",
        "سهولة التحديث",
      ],
    },
    {
      icon: Calendar,
      key: "نظام حجز بسيط",
      title: "أنظمة الحجز البسيطة",
      desc: "ساعد العميل يحجز موعد أو يطلب استشارة بدون تعقيد.",
      features: [
        "خطوات حجز سهلة",
        "اختيار الخدمة",
        "اختيار الموعد المفضل",
        "تحويل التفاصيل إلى واتساب",
      ],
    },
    {
      icon: Store,
      key: "متجر إلكتروني",
      title: "المتاجر الإلكترونية",
      desc: "متجر سريع وآمن بتجربة شراء مناسبة لطبيعة منتجاتك.",
      features: [
        "WooCommerce",
        "إدارة المنتجات",
        "تحسين رحلة الشراء",
        "ربط وسائل الدفع والشحن حسب المشروع",
      ],
    },
    {
      icon: Wrench,
      key: "تطوير موقع حالي",
      title: "تطوير وتحسين المواقع",
      desc: "تحسين موقعك الحالي بدل البدء من الصفر.",
      features: [
        "تحسين السرعة",
        "تحسين الموبايل",
        "إصلاح تجربة المستخدم",
        "الحماية والنسخ الاحتياطي",
      ],
    },
  ];
  return (
    <Section
      id="services"
      eyebrow="خدماتنا"
      title="حلول مواقع تناسب هدف مشروعك"
      bg="bg-cream"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="hover-lift flex flex-col rounded-3xl border border-border bg-white p-6 text-center sm:text-right"
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl navy-gradient text-gold sm:mx-0">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-navy">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <ul className="mt-5 flex-1 space-y-2.5">
              {s.features.map((f) => (
                <li key={f} className="flex items-start justify-center gap-2 text-sm text-foreground/85 sm:justify-start">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => onBook(s.key)}
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-navy/15 bg-cream/60 px-5 text-sm font-bold text-navy transition hover:border-gold hover:bg-gold hover:text-navy"
            >
              اعرف المناسب لمشروعك
              <ArrowLeft className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
   WHY XLANS (dark)
============================================================ */
function WhyXlans() {
  const items = [
    {
      icon: Target,
      title: "فهم البيزنس والتسويق",
      desc: "بنبدأ من هدف مشروعك وسلوك عميلك، مش من الألوان والتصميم.",
    },
    {
      icon: Zap,
      title: "سرعة التنفيذ",
      desc: "نسلّم بسرعة من غير ما نضحي بالجودة أو وضوح التجربة.",
    },
    {
      icon: Layers,
      title: "تخصيص حسب النشاط",
      desc: "كل موقع بيتبني حسب طبيعة شركتك وجمهورك والهدف المطلوب.",
    },
    {
      icon: Smartphone,
      title: "أداء قوي على الموبايل",
      desc: "تجربة سريعة وسهلة على الموبايل لأن أغلب عملائك هيشوفوك من خلاله.",
    },
    {
      icon: Wallet,
      title: "أسعار واضحة",
      desc: "نطاق عمل وسعر واضح قبل البداية، بدون مفاجآت أثناء المشروع.",
    },
    {
      icon: Headphones,
      title: "تواصل مباشر",
      desc: "هتتعامل مباشرة مع الشخص المسؤول عن فهم وتنفيذ مشروعك.",
    },
  ];
  return (
    <section id="why" className="relative overflow-hidden navy-gradient py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-20 text-[30rem] font-black leading-none text-gold/[0.04] md:text-[40rem]"
      >
        X
      </div>
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-gold/30 px-4 py-1.5 text-xs font-semibold text-gold-light">
            لماذا XLANS؟
          </span>
          <h2 className="mt-4 text-3xl font-black text-navy-foreground sm:text-4xl md:text-5xl">
            ليه تختار <span className="gold-text">XLANS</span>؟
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-sm transition hover:border-gold/40 hover:bg-white/[0.06] sm:text-right"
            >
              <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl gold-gradient text-navy sm:mx-0">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy-foreground">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CUSTOMER JOURNEY
============================================================ */
function CustomerJourney() {
  const steps = [
    "يدخل العميل",
    "يفهم بتقدم إيه",
    "يثق في شركتك",
    "يختار الخدمة",
    "يتواصل أو يحجز",
  ];
  return (
    <Section
      eyebrow="فلسفتنا"
      title="إحنا مش بنعمل موقع شكله حلو وبس"
      intro="كل قرار في التصميم والمحتوى هدفه يقرّب العميل من الخطوة المطلوبة بأقل مجهود."
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-3 md:flex-col md:gap-2">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full gold-gradient text-sm font-black text-navy shadow-lg">
                {i + 1}
              </div>
              <div className="flex-1 rounded-xl bg-cream px-4 py-3 text-center text-sm font-semibold text-navy md:min-w-[140px]">
                {s}
              </div>
              {i < steps.length - 1 && (
                <ArrowLeft className="hidden h-5 w-5 shrink-0 text-gold md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   PROCESS
============================================================ */
function Process() {
  const steps = [
    {
      n: "01",
      title: "نفهم مشروعك",
      desc: "نعرف نشاطك، جمهورك، هدفك، والخدمات اللي عايز تركز عليها.",
    },
    {
      n: "02",
      title: "نحدد الهيكل والمحتوى",
      desc: "نرتب الصفحات والرسائل ورحلة العميل داخل الموقع.",
    },
    {
      n: "03",
      title: "نصمم وننفذ",
      desc: "نبني نسخة احترافية وسريعة ومتوافقة مع الموبايل.",
    },
    {
      n: "04",
      title: "نراجع ونطلق",
      desc: "نراجع الموقع معاك، ننفذ التعديلات المتفق عليها، ثم نطلقه.",
    },
  ];
  return (
    <Section
      id="process"
      eyebrow="خطوات العمل"
      title="خطوات بسيطة من الفكرة للإطلاق"
      bg="bg-cream"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.n}
            className="hover-lift group relative rounded-3xl border border-border bg-white p-6"
          >
            <span className="text-4xl font-black text-gold/40 transition group-hover:text-gold">
              {s.n}
            </span>
            <h3 className="mt-3 text-lg font-bold text-navy">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        <Clock className="ml-1 inline h-4 w-4 text-gold" />
        نسخة V1 خلال 48 ساعة متاحة للمواقع التعريفية القياسية بعد اكتمال المتطلبات.
      </p>
    </Section>
  );
}

/* ============================================================
   PORTFOLIO
============================================================ */
function PortfolioCTA() {
  const WA_PORTFOLIO = `https://wa.me/201140226705?text=${encodeURIComponent(
    "مرحبًا محمد،\nأرغب في الاطلاع على سابقة أعمال XLANS ونماذج من المشاريع اللي نفذتوها.\nشكرًا."
  )}`;
  const badges = [
    "🇸🇦 السعودية",
    "🇺🇸 الولايات المتحدة",
    "🇪🇬 مصر",
    "🇶🇦 قطر",
    "🇸🇾 سوريا",
  ];
  return (
    <Section id="portfolio" eyebrow="سابقة الأعمال" title="مشاريع نُفّذت لبيزنس حقيقي حول العالم">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-white p-6 text-center shadow-sm sm:p-10">
        <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
          نفتخر بتنفيذ مواقع ومتاجر لشركات في قطاعات صناعية وخدمية وقانونية وعقارية
          وسياحية وتجارية. نرسل لك ملف سابقة الأعمال الكامل بالروابط والتفاصيل مباشرة
          على واتساب خلال دقائق.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-gold/30 bg-cream px-3 py-1.5 text-xs font-semibold text-navy"
            >
              {b}
            </span>
          ))}
        </div>
        <a
          href={WA_PORTFOLIO}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-lg transition hover:brightness-110 sm:text-base"
        >
          <WhatsAppIcon className="h-5 w-5" />
          اطلب سابقة الأعمال عبر واتساب
        </a>
        <p className="mt-4 text-xs text-muted-foreground">
          رد خلال دقائق في أوقات العمل — التزام كامل بالسرية.
        </p>
      </div>
    </Section>
  );
}

/* ============================================================
   BOOKING SECTION (CTA to wizard)
============================================================ */
function BookingSection({ onBook }: { onBook: () => void }) {
  return (
    <Section
      id="contact"
      eyebrow="ابدأ الآن"
      title="احجز استشارة مجانية في أقل من دقيقة"
      intro="جاوب على كام سؤال بسيط، وهتتحول مباشرة لواتساب برسالة فيها كل تفاصيل مشروعك."
    >
      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-border bg-white shadow-xl">
        <div className="navy-gradient p-6 sm:p-8">
          <div className="flex items-center gap-3 text-navy-foreground">
            <div className="grid h-12 w-12 place-items-center rounded-2xl gold-gradient text-navy">
              <Rocket className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm text-gold-light">4 خطوات فقط</div>
              <div className="text-lg font-bold">استشارة مجانية بدون التزام</div>
            </div>
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <ul className="space-y-3">
            {[
              "اختر نوع الخدمة اللي تناسب مشروعك",
              "اكتب معلومات الشركة وهدف الموقع",
              "حدد الخصائص المطلوبة وحالة المحتوى",
              "اترك بياناتك وطريقة التواصل المفضلة",
            ].map((t, i) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full gold-gradient text-xs font-black text-navy">
                  {i + 1}
                </span>
                <span className="text-foreground/85">{t}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={onBook}
            className="mt-7 flex min-h-13 w-full items-center justify-center gap-2 rounded-full navy-gradient text-base font-bold text-navy-foreground shadow-lg transition hover:brightness-110"
          >
            ابدأ الحجز الآن
            <ArrowLeft className="h-4 w-4" />
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            رد مباشر • عرض واضح • بدون التزام
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   FAQ
============================================================ */
function FAQ() {
  const items = [
    {
      q: "الموقع بيتكلف كام؟",
      a: "التكلفة بتتحدد حسب عدد الصفحات والخصائص والمحتوى. بعد فهم احتياجك هتستلم عرض سعر واضح قبل البداية.",
    },
    {
      q: "هل فعلًا ممكن استلام نسخة خلال 48 ساعة؟",
      a: "نعم للمواقع التعريفية القياسية، بعد استلام المحتوى وتأكيد النطاق والدفعة المطلوبة. التسليم خلال 48 ساعة يكون للنسخة الأولى V1.",
    },
    {
      q: "هل الموقع هيشتغل كويس على الموبايل؟",
      a: "نعم، كل المواقع بتتصمم Mobile-first وتتراجع على أحجام شاشات مختلفة.",
    },
    {
      q: "هل أقدر أعدل الموقع بعد التسليم؟",
      a: "نعم، ويمكن توفير شرح لإدارة المحتوى أو باقة صيانة ودعم حسب احتياجك.",
    },
    {
      q: "هل الدومين والاستضافة مشمولين؟",
      a: "بيتم توضيح الدومين والاستضافة داخل عرض السعر حسب الباقة ومتطلبات المشروع.",
    },
    {
      q: "هل بتعملوا متاجر إلكترونية؟",
      a: "نعم، بننفذ متاجر WooCommerce مع تجربة شراء مناسبة وإمكانية ربط وسائل الدفع والشحن حسب المشروع.",
    },
    {
      q: "هل بتطوروا المواقع القديمة؟",
      a: "نعم، نقدر نراجع الموقع الحالي ونحسن التصميم والسرعة والأمان وتجربة الموبايل.",
    },
    {
      q: "هتعامل مع مين أثناء المشروع؟",
      a: "هتتعامل مباشرة مع محمد سلطان لفهم المشروع ومتابعة التنفيذ.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" eyebrow="FAQ" title="أسئلة غالبًا بتدور في بالك" bg="bg-cream">
      <div className="mx-auto max-w-3xl space-y-3">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div
              key={it.q}
              className={`overflow-hidden rounded-2xl border bg-white transition ${
                isOpen ? "border-gold shadow-md" : "border-border"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right"
              >
                <span className="text-sm font-bold text-navy sm:text-base">{it.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gold transition ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {it.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-lg transition hover:brightness-110"
        >
          <WhatsAppIcon className="h-5 w-5" />
          لسه عندك سؤال؟ ابعته مباشرة على واتساب
        </a>
      </div>
    </Section>
  );
}

/* ============================================================
   SOCIAL
============================================================ */
function Social() {
  return (
    <Section
      eyebrow="تابعنا"
      title="تابع XLANS على منصات التواصل"
      intro="محتوى مبسط عن المواقع، WordPress، البيزنس، التسويق وتجربة المستخدم."
    >
      <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-3">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="inline-flex min-h-12 items-center gap-2 rounded-2xl border border-border bg-white px-5 text-sm font-bold text-navy transition hover:border-gold hover:bg-navy hover:text-gold"
          >
            <s.icon className="h-5 w-5" />
            {s.label}
          </a>
        ))}
      </div>
    </Section>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.6 6.3a5.4 5.4 0 0 1-3.3-1.1V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v2.7a2.8 2.8 0 1 0 1.9 2.7V2h2.7a5.4 5.4 0 0 0 3.3 4.3z" />
    </svg>
  );
}
function ThreadsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M8 13c1 2 3 3 5 3s4-1 4-3-2-3-4-3H9c-2 0-3-1-3-3s2-3 4-3 3 1 4 2" />
    </svg>
  );
}

/* ============================================================
   FINAL CTA
============================================================ */
function FinalCTA({ onBook }: { onBook: () => void }) {
  return (
    <section className="relative overflow-hidden navy-gradient py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-20 text-[35rem] font-black leading-none text-gold/[0.05] md:text-[45rem]"
      >
        X
      </div>
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black leading-tight text-navy-foreground sm:text-4xl md:text-5xl">
            جاهز تحوّل فكرة موقعك لحل <span className="gold-text">يخدم البيزنس</span>؟
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
            احجز استشارة مجانية وخلينا نحدد أنسب موقع وخطوات تنفيذ واضحة لمشروعك.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={onBook}
              className="inline-flex min-h-13 items-center gap-2 rounded-full gold-gradient px-7 text-sm font-black text-navy shadow-xl transition hover:brightness-105 sm:text-base"
            >
              ابدأ مشروعك الآن
              <ArrowLeft className="h-4 w-4" />
            </button>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-6 text-sm font-bold text-white transition hover:border-gold hover:bg-white/10 sm:text-base"
            >
              <WhatsAppIcon className="h-5 w-5" />
              تواصل واتساب
            </a>
          </div>
          <p className="mt-5 text-xs text-white/60 sm:text-sm">
            رد مباشر • عرض واضح • بدون التزام
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
============================================================ */
function Footer({ onBook }: { onBook: () => void }) {
  return (
    <footer className="bg-navy-deep pt-14 pb-24 text-white/80 md:pb-14">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5">
                <img src={logo} alt="XLANS" className="h-9 w-auto" />
              </div>
              <div>
                <div className="text-lg font-black text-white">XLANS Web Solutions</div>
                <div className="text-xs text-gold">Mohamed Sultan · Founder</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              حلول مواقع احترافية تساعد الشركات وأصحاب المشاريع على بناء حضور رقمي واضح
              وتحقيق أهدافهم.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">روابط سريعة</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { l: "خدماتنا", h: "#services" },
                { l: "أعمالنا", h: "#portfolio" },
                { l: "خطوات العمل", h: "#process" },
                { l: "الأسئلة الشائعة", h: "#faq" },
              ].map((l) => (
                <li key={l.h}>
                  <a href={l.h} className="text-white/70 transition hover:text-gold">
                    {l.l}
                  </a>
                </li>
              ))}
              <li>
                <button onClick={onBook} className="text-white/70 transition hover:text-gold">
                  احجز استشارة
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">تواصل</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 transition hover:text-gold"
                  dir="ltr"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  +20 114 022 6705
                </a>
              </li>
              <li className="flex flex-wrap gap-2 pt-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/70 transition hover:border-gold hover:text-gold"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <div>جميع الحقوق محفوظة © {new Date().getFullYear()} XLANS Web Solutions</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-gold">
              الشروط والأحكام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   FLOATING WHATSAPP
============================================================ */
function FloatingWhatsApp() {
  const [pulsed, setPulsed] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setPulsed(true), 6000);
    return () => clearTimeout(t);
  }, []);
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setPulsed(true)}
      aria-label="تواصل على واتساب"
      className={`group fixed bottom-24 left-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:brightness-110 md:bottom-6 md:left-6 ${
        pulsed ? "" : "wa-pulse"
      }`}
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-navy px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 md:block">
        تواصل مباشرة
      </span>
    </a>
  );
}

/* ============================================================
   MOBILE BOTTOM BAR
============================================================ */
function MobileBottomBar({ onBook }: { onBook: () => void }) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 p-3 shadow-[0_-8px_24px_-12px_rgba(7,29,59,0.2)] backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-md items-center justify-center gap-2">
        <button
          onClick={onBook}
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full navy-gradient text-sm font-bold text-navy-foreground"
        >
          ابدأ مشروعك
          <ArrowLeft className="h-4 w-4" />
        </button>
        <a
          href={TEL_LINK}
          aria-label="اتصال"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/40 bg-cream text-navy"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="واتساب"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#25D366] text-white"
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

/* ============================================================
   SECTION WRAPPER
============================================================ */
function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  bg = "bg-white",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <section id={id} className={`${bg} py-16 sm:py-24`}>
      <div className="container-x">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          {eyebrow && (
            <span className="inline-block rounded-full border border-gold/40 bg-white px-4 py-1.5 text-xs font-semibold text-gold">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-4 text-3xl font-black text-navy sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
