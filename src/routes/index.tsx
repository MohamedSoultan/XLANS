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
} from "lucide-react";
import logoAsset from "@/assets/xlans-logo-new.png.asset.json";
import ownerPhoto from "@/assets/business-owner.jpg";
import { AutoRail } from "@/components/AutoRail";
import { BookingWizard } from "@/components/BookingWizard";

const logo = logoAsset.url;

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.47 1.73 6.42L3.2 28.8l6.55-1.71a12.77 12.77 0 0 0 6.25 1.6h.01c7.06 0 12.8-5.73 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05a12.71 12.71 0 0 0-9.06-3.64Zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.88 1.02 1.03-3.79-.25-.4a10.62 10.62 0 0 1-1.63-5.68c0-5.87 4.78-10.64 10.64-10.64 2.84 0 5.51 1.11 7.52 3.12a10.55 10.55 0 0 1 3.12 7.52c0 5.87-4.78 10.64-10.64 10.64Zm5.83-7.97c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55-.18-.01-.4-.01-.61-.01-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.28 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XLANS Web Solutions | مواقع احترافية للشركات" },
      {
        name: "description",
        content:
          "XLANS تبني لشركتك موقعًا سريعًا وآمنًا يخدم أهداف البيزنس: مواقع شركات، متاجر إلكترونية وأنظمة حجز، مع عرض سعر واضح قبل البدء.",
      },
      { property: "og:title", content: "XLANS Web Solutions | مواقع احترافية للشركات" },
      {
        property: "og:description",
        content:
          "XLANS تبني لشركتك موقعًا سريعًا وآمنًا يخدم أهداف البيزنس: مواقع شركات، متاجر إلكترونية وأنظمة حجز.",
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
          "@type": "ProfessionalService",
          name: "XLANS Web Solutions",
          description:
            "تصميم وتطوير مواقع احترافية للشركات، متاجر إلكترونية وأنظمة حجز.",
          url: "/",
          telephone: "+201140226705",
          areaServed: ["EG", "SA", "QA", "US"],
          sameAs: [
            "https://www.facebook.com/profile.php?id=61592109614629",
            "https://www.instagram.com/1xlans1/",
            "https://www.linkedin.com/company/xlans-web-solutions",
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
  "مرحبًا XLANS، وصلت ليكم من الموقع وعايز أعرف أنسب حل لموقع شركتي.";
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

const CARD = "shrink-0 snap-center w-[82%] sm:w-[48%] lg:w-[31.5%]";

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
        <Process />
        <PortfolioCTA />
        <BookingSection onBook={() => openWizard()} />
        <FAQ />
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
            : "bg-background/60 py-3 backdrop-blur-sm"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4">
          <a href="#home" className="flex shrink-0 items-center" aria-label="XLANS">
            <img src={logo} alt="XLANS" width={180} height={60} className="h-12 w-auto sm:h-14" />
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
            <img src={logo} alt="XLANS" className="h-12 w-auto" />
            <button
              onClick={() => setMobileMenu(false)}
              aria-label="إغلاق"
              className="grid h-11 w-11 place-items-center rounded-full border border-border"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="container-x flex flex-1 flex-col gap-2 pt-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMobileMenu(false)}
                className="rounded-2xl border border-border px-5 py-3.5 text-base font-semibold text-foreground transition hover:border-gold hover:bg-cream"
              >
                {n.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenu(false);
                onBook();
              }}
              className="mt-4 min-h-13 rounded-2xl navy-gradient text-base font-bold text-navy-foreground"
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
function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream pt-24 pb-12 sm:pt-28 md:pt-32 md:pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 select-none opacity-[0.05] md:-left-28 md:opacity-[0.07]"
      >
        <img src={logo} alt="" className="w-[24rem] md:w-[36rem]" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12">
          <div className="reveal text-center md:text-right">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-4 py-1.5 text-xs font-semibold text-navy backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-gold" />
              شريك رقمي لأصحاب الشركات
            </span>

            <h1 className="mt-4 text-3xl font-black leading-[1.15] text-navy sm:text-4xl md:text-5xl">
              موقع شركتك مش ديكور…
              <br />
              لازم <span className="gold-text">يجيب لك عملاء</span>.
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-foreground/80 md:mx-0">
              في XLANS بنبني لشركتك موقعًا سريعًا وآمنًا مبنيًا على أهداف البيزنس، يخلي عميلك
              يوصل للتواصل أو الحجز أو طلب عرض السعر بأقل خطوات.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
              <button
                onClick={onBook}
                className="group inline-flex min-h-12 items-center gap-2 rounded-full navy-gradient px-6 text-sm font-bold text-navy-foreground shadow-xl transition hover:brightness-110 sm:text-base"
              >
                احجز استشارة لشركتك
                <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
              </button>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-navy/15 bg-white px-5 text-sm font-bold text-navy transition hover:border-gold sm:text-base"
              >
                خدماتنا
              </a>
            </div>

            <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-muted-foreground md:justify-start sm:text-sm">
              <Clock className="h-4 w-4 text-gold" />
              نسخة V1 خلال 48 ساعة للمواقع التعريفية • عرض سعر واضح • بدون التزام
            </p>
          </div>

          <div className="reveal relative mx-auto w-full max-w-sm" style={{ animationDelay: "120ms" }}>
            <div className="absolute inset-0 rounded-[2rem] gold-gradient" />
            <div className="relative m-[3px] overflow-hidden rounded-[1.9rem] bg-navy">
              <img
                src={ownerPhoto}
                alt="صاحب شركة يراجع موقع شركته"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent p-5 pt-12 text-white">
                <p className="text-sm font-bold leading-snug">
                  قرارات تصميم مبنية على بيزنس شركتك — مش على الذوق فقط.
                </p>
              </div>
            </div>
          </div>
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
    { icon: Briefcase, label: "+10 مشاريع لشركات حقيقية" },
    { icon: TrendingUp, label: "+3 سنوات خبرة متخصصة" },
    { icon: Globe, label: "عملاء في مصر والخليج وأمريكا" },
    { icon: Zap, label: "مواقع سريعة وآمنة" },
  ];
  return (
    <section className="border-y border-border bg-white py-6">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
          {items.map((it) => (
            <div key={it.label} className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold/30 bg-cream text-gold">
                <it.icon className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold leading-tight text-navy md:text-sm">
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
      desc: "اعرض خدمات شركتك وخلّي العميل يحجز أو يتواصل بسهولة.",
    },
    {
      icon: Building2,
      title: "الشركات الصناعية",
      desc: "الشركة والمنتجات والكتالوج وطلب عرض السعر في مكان واحد.",
    },
    {
      icon: Stethoscope,
      title: "العيادات والمراكز",
      desc: "موقع تعريفي مع نظام حجز أو طلب استشارة بسيط.",
    },
    {
      icon: ShoppingBag,
      title: "المتاجر والعلامات",
      desc: "متجر سريع يساعد العميل يكتشف المنتج ويكمّل الطلب.",
    },
    {
      icon: RefreshCw,
      title: "شركات لديها موقع قديم",
      desc: "إعادة تصميم وتحسين السرعة وتجربة الموبايل.",
    },
  ];
  return (
    <Section eyebrow="لمين الخدمة؟" title="مناسبة لشركتك لو…">
      <AutoRail>
        {cards.map((c) => (
          <article
            key={c.title}
            dir="rtl"
            className={`${CARD} rounded-2xl border border-border bg-white p-5 text-right`}
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl gold-gradient text-navy">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-base font-bold text-navy">{c.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
          </article>
        ))}
      </AutoRail>
      <div className="mt-6 text-center">
        <button
          onClick={onBook}
          className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-navy px-5 text-sm font-bold text-navy transition hover:bg-navy hover:text-navy-foreground"
        >
          مش متأكد إيه المناسب لشركتك؟ اسألنا مجانًا
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
      desc: "موقع يبني ثقة عملاء شركتك ويسهّل طلب عرض السعر.",
      features: ["تصميم مخصص للنشاط", "متوافق مع الموبايل", "ربط واتساب والسوشيال"],
    },
    {
      icon: Zap,
      key: "موقع تعريفي",
      title: "مواقع تعريفية سريعة",
      desc: "حل مختصر للشركات الناشئة والخدمات والـPortfolio.",
      features: ["صفحات واضحة", "نسخة V1 خلال 48 ساعة", "أداء قوي"],
    },
    {
      icon: Calendar,
      key: "نظام حجز بسيط",
      title: "أنظمة الحجز",
      desc: "خلي عميلك يحجز موعد أو استشارة بدون تعقيد.",
      features: ["خطوات حجز سهلة", "اختيار الخدمة والموعد", "تحويل مباشر لواتساب"],
    },
    {
      icon: Store,
      key: "متجر إلكتروني",
      title: "المتاجر الإلكترونية",
      desc: "متجر سريع وآمن بتجربة شراء مناسبة لمنتجات شركتك.",
      features: ["WooCommerce", "إدارة المنتجات", "ربط الدفع والشحن"],
    },
    {
      icon: Wrench,
      key: "تطوير موقع حالي",
      title: "تطوير موقع قائم",
      desc: "تحسين موقع شركتك الحالي بدل البدء من الصفر.",
      features: ["تحسين السرعة", "تحسين الموبايل", "الحماية والنسخ الاحتياطي"],
    },
  ];
  return (
    <Section id="services" eyebrow="خدماتنا" title="حلول تخدم أهداف شركتك" bg="bg-cream">
      <AutoRail speed={0.3}>
        {services.map((s) => (
          <article
            key={s.title}
            dir="rtl"
            className={`${CARD} flex flex-col rounded-2xl border border-border bg-white p-5 text-right`}
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl navy-gradient text-gold">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-lg font-bold text-navy">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <ul className="mt-4 flex-1 space-y-2">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => onBook(s.key)}
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-navy/15 bg-cream/60 px-4 text-sm font-bold text-navy transition hover:border-gold hover:bg-gold"
            >
              اطلب عرض سعر
              <ArrowLeft className="h-4 w-4" />
            </button>
          </article>
        ))}
      </AutoRail>
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
      title: "فهم البيزنس أولًا",
      desc: "بنبدأ من هدف شركتك وسلوك عميلك، مش من الألوان.",
    },
    { icon: Zap, title: "سرعة تنفيذ", desc: "تسليم سريع بدون تنازل عن الجودة." },
    { icon: Layers, title: "تخصيص حسب النشاط", desc: "كل موقع مبني على طبيعة شركتك وجمهورها." },
    { icon: Smartphone, title: "أداء قوي على الموبايل", desc: "أغلب عملاء شركتك هيشوفوك من الموبايل." },
    { icon: Wallet, title: "أسعار واضحة", desc: "نطاق عمل وسعر واضح قبل البداية، بدون مفاجآت." },
    { icon: Headphones, title: "تواصل مباشر", desc: "متابعة مباشرة مع الفريق المسؤول عن حساب شركتك." },
  ];
  return (
    <section id="why" className="relative overflow-hidden navy-gradient py-12 sm:py-16">
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-gold/30 px-4 py-1.5 text-xs font-semibold text-gold-light">
            لماذا XLANS؟
          </span>
          <h2 className="mt-3 text-2xl font-black text-navy-foreground sm:text-4xl">
            ليه شركتك تشتغل مع <span className="gold-text">XLANS</span>؟
          </h2>
        </div>
        <div className="mt-8">
          <AutoRail speed={0.25}>
            {items.map((it) => (
              <div
                key={it.title}
                dir="rtl"
                className={`${CARD} rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-right backdrop-blur-sm`}
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl gold-gradient text-navy">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-base font-bold text-navy-foreground">{it.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">{it.desc}</p>
              </div>
            ))}
          </AutoRail>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROCESS
============================================================ */
function Process() {
  const steps = [
    { n: "01", title: "نفهم شركتك", desc: "نشاطك، جمهورك، هدفك، والخدمات اللي تركز عليها." },
    { n: "02", title: "نحدد الهيكل", desc: "ترتيب الصفحات والرسائل ورحلة العميل." },
    { n: "03", title: "نصمم وننفذ", desc: "نسخة احترافية سريعة ومتوافقة مع الموبايل." },
    { n: "04", title: "نراجع ونطلق", desc: "مراجعة معك، تعديلات متفق عليها، ثم الإطلاق." },
  ];
  return (
    <Section id="process" eyebrow="خطوات العمل" title="من أول جلسة للإطلاق" bg="bg-cream">
      <AutoRail speed={0.25}>
        {steps.map((s) => (
          <div
            key={s.n}
            dir="rtl"
            className={`${CARD} rounded-2xl border border-border bg-white p-5 text-right`}
          >
            <span className="text-3xl font-black text-gold/50">{s.n}</span>
            <h3 className="mt-2 text-base font-bold text-navy">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </AutoRail>
    </Section>
  );
}

/* ============================================================
   PORTFOLIO
============================================================ */
function PortfolioCTA() {
  const projects = [
    {
      flag: "🇸🇦", country: "السعودية", type: "حل خدمي · قطاع قانوني",
      name: "Rewaq Law",
      desc: "منصة رقمية تعزز حضور المكتب وتسهل الوصول إلى خدماته القانونية.",
      tags: ["Lead Generation", "Corporate", "Responsive"],
      url: "https://rewaqlaw.com",
    },
    {
      flag: "🇸🇦", country: "السعودية", type: "حل تعريفي · Corporate",
      name: "Real Promise",
      desc: "حضور رقمي مؤسسي ينظم قطاعات وخدمات الشركة في تجربة واحدة واضحة.",
      tags: ["Corporate", "B2B"],
      url: "https://realpromise-eg.com/",
    },
    {
      flag: "🇸🇦", country: "السعودية", type: "حل خدمي · هندسي",
      name: "Alafdal Engineering",
      desc: "منصة تجمع بيع وتأجير أجهزة المساحة والدعم والصيانة والرفع المساحي في تجربة واحدة.",
      tags: ["B2B", "E-Commerce"],
      url: "https://alafdaleng.com",
    },
    {
      flag: "🇶🇦", country: "قطر", type: "حل تعريفي · قطاع قانوني",
      name: "Al Wajba Law",
      desc: "حضور رقمي لمكتب محاماة قطري يعكس الخبرة ويعزز الثقة ويسهّل الوصول للمكتب.",
      tags: ["Corporate", "خدمي"],
      url: "https://alwajba-law.com/",
    },
    {
      flag: "🇪🇬", country: "مصر", type: "حل خدمي · حجز",
      name: "Adelaide Barbershop",
      desc: "تجربة رقمية تُظهر هوية المكان وتحوّل زيارة الموقع إلى حجز وتواصل مباشر.",
      tags: ["Booking", "B2C"],
      url: "https://adeleidbarbershop.com/",
    },
    {
      flag: "🇪🇬", country: "مصر", type: "حل تعريفي · Personal Brand",
      name: "Mohamad Sultan",
      desc: "منصة تجمع الخبرة والأعمال والخدمات في واجهة واحدة لبناء حضور شخصي مهني.",
      tags: ["Personal Brand", "Lead Generation"],
      url: "https://mohamadsultan.com",
    },
    {
      flag: "🇪🇬", country: "مصر", type: "حل B2B · خدمات",
      name: "Tyto Web",
      desc: "منصة B2B تربط وكالات التسويق بقدرات تطوير الويب كامتداد لفريق الوكالة.",
      tags: ["B2B", "Lead Generation"],
      url: "https://tytoweb.com/",
    },
    {
      flag: "🇰🇼", country: "الكويت", type: "حل تعريفي · Corporate",
      name: "Desquare Global",
      desc: "حضور رقمي لعلامة تعليم وتطوير يقدّم نشاطها وحلولها بصورة منظمة واحترافية.",
      tags: ["Corporate", "B2B"],
      url: "http://desquareglobal.com/",
    },
    {
      flag: "🇪🇬", country: "مصر", type: "حل تجارة إلكترونية",
      name: "Capital Tires",
      desc: "تجربة شراء تعتمد على البحث الذكي بالمقاسات بدل التصفح اليدوي لآلاف المنتجات.",
      tags: ["E-Commerce", "Smart Search"],
      url: "https://capitaltires-eg.com/",
    },
    {
      flag: "🇪🇬", country: "مصر", type: "منصة عقارية",
      name: "Capital Homes",
      desc: "منصة تجمع المشاريع العقارية والبحث بالمدن والمناطق لاكتشاف الاستثمار المناسب.",
      tags: ["Real Estate", "Search"],
      url: "https://capitalhomes-eg.com/",
    },
    {
      flag: "🇪🇬", country: "مصر", type: "حل تجارة إلكترونية · B2B",
      name: "Sama Link",
      desc: "تنظيم آلاف منتجات الشبكات والحلول التقنية في تجربة تسوق واضحة مع بحث وتصنيفات.",
      tags: ["E-Commerce", "B2B", "Catalog"],
      url: "https://sama-link.com/",
    },
    {
      flag: "🇪🇬", country: "مصر", type: "حل تجارة إلكترونية · خدمي",
      name: "Electro Home",
      desc: "منصة تجمع بيع المنتجات وطلب المقايسات وخدمات التركيب والصيانة في رحلة واحدة.",
      tags: ["E-Commerce", "Quote Request"],
      url: "https://electro-eg.com/",
    },
    {
      flag: "🇺🇸", country: "الولايات المتحدة", type: "حل B2B · كتالوج رقمي",
      name: "NetSys US",
      desc: "كتالوج رقمي واسع لمنتجات الألياف والبنية التحتية للشبكات بحضور دولي في مصر ودبي وأمريكا.",
      tags: ["B2B", "Catalog", "International"],
      url: "https://netsys-us.com/",
    },
  ];

  return (
    <Section
      id="portfolio"
      eyebrow="سابقة الأعمال"
      title="13 مشروعًا حقيقيًا في 5 دول"
      lead="نحن نبيع حلولًا تخدم البيزنس — مش مواقع شكلها حلو وخلاص. تصفح المشاريع مباشرة."
    >
      <AutoRail speed={0.3}>
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            dir="rtl"
            className={`${CARD} group flex flex-col rounded-2xl border border-border bg-white p-5 text-right shadow-sm transition hover:border-gold/60 hover:shadow-md`}
          >
            <div className="flex items-center justify-between gap-2 text-xs font-semibold text-muted-foreground">
              <span>{p.flag} {p.country}</span>
              <span className="text-[0.7rem] font-bold text-gold">{p.type}</span>
            </div>
            <div className="mt-2.5 text-base font-extrabold leading-snug text-navy" dir="ltr" style={{ textAlign: "right" }}>
              {p.name}
            </div>
            <p className="mt-1.5 flex-1 text-xs leading-relaxed text-foreground/70">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  dir="ltr"
                  className="rounded-full bg-cream px-2 py-0.5 text-[0.62rem] font-bold text-navy"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="mt-3 inline-flex items-center gap-1.5 border-t border-border pt-3 text-xs font-bold text-navy transition group-hover:text-gold">
              استكشف المشروع
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            </span>
          </a>
        ))}
      </AutoRail>

      <div className="mt-4 flex flex-col items-center gap-2">
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
            "مرحبًا XLANS،\nأرغب في استلام ملف سابقة الأعمال الكامل بالروابط والتفاصيل."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full max-w-sm items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-lg transition hover:brightness-110"
        >
          <WhatsAppIcon className="h-5 w-5" />
          استلم ملف سابقة الأعمال
        </a>
        <p className="text-center text-xs text-muted-foreground">
          رد خلال دقائق في أوقات العمل — التزام كامل بالسرية.
        </p>
      </div>
    </Section>
  );
}

/* ============================================================
   BOOKING SECTION
============================================================ */
function BookingSection({ onBook }: { onBook: () => void }) {
  return (
    <Section
      id="contact"
      eyebrow="ابدأ الآن"
      title="استشارة مجانية لشركتك في أقل من دقيقة"
      bg="bg-cream"
    >
      <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
        <div className="navy-gradient p-5">
          <div className="flex items-center gap-3 text-navy-foreground">
            <div className="grid h-11 w-11 place-items-center rounded-xl gold-gradient text-navy">
              <Rocket className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-gold-light">4 خطوات فقط</div>
              <div className="text-base font-bold">استشارة مجانية بدون التزام</div>
            </div>
          </div>
        </div>
        <div className="p-5">
          <ul className="space-y-2.5">
            {[
              "اختر الخدمة المناسبة لشركتك",
              "اكتب بيانات الشركة وهدف الموقع",
              "حدد الخصائص وحالة المحتوى",
              "اترك بياناتك وطريقة التواصل",
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
            className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-full navy-gradient text-base font-bold text-navy-foreground shadow-lg transition hover:brightness-110"
          >
            ابدأ الحجز الآن
            <ArrowLeft className="h-4 w-4" />
          </button>
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
      a: "التكلفة حسب عدد الصفحات والخصائص والمحتوى. بعد فهم احتياج شركتك هتستلم عرض سعر واضح قبل البداية.",
    },
    {
      q: "فعلًا نسخة خلال 48 ساعة؟",
      a: "نعم للمواقع التعريفية القياسية، بعد استلام المحتوى وتأكيد النطاق. التسليم يكون للنسخة الأولى V1.",
    },
    {
      q: "هل الموقع هيشتغل كويس على الموبايل؟",
      a: "نعم، كل المواقع بتتصمم Mobile-first وتتراجع على أحجام شاشات مختلفة.",
    },
    {
      q: "أقدر أعدل الموقع بعد التسليم؟",
      a: "نعم، مع شرح لإدارة المحتوى أو باقة صيانة ودعم حسب احتياج شركتك.",
    },
    {
      q: "الدومين والاستضافة مشمولين؟",
      a: "بيتم توضيحهم داخل عرض السعر حسب الباقة ومتطلبات شركتك.",
    },
    {
      q: "بتطوروا المواقع القديمة؟",
      a: "نعم، بنراجع الموقع الحالي ونحسّن التصميم والسرعة والأمان وتجربة الموبايل.",
    },
    {
      q: "هتتعامل مع مين أثناء التنفيذ؟",
      a: "مع فريق XLANS المسؤول عن حساب شركتك من التخطيط حتى الإطلاق والدعم.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" eyebrow="FAQ" title="أسئلة شائعة">
      <div className="mx-auto max-w-3xl space-y-2.5">
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
                className="flex w-full items-center justify-between gap-4 px-5 py-3.5 text-right"
              >
                <span className="text-sm font-bold text-navy">{it.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gold transition ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">{it.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 text-center">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-lg transition hover:brightness-110"
        >
          <WhatsAppIcon className="h-5 w-5" />
          اسأل مباشرة على واتساب
        </a>
      </div>
    </Section>
  );
}

/* ============================================================
   FINAL CTA
============================================================ */
function FinalCTA({ onBook }: { onBook: () => void }) {
  return (
    <section className="relative overflow-hidden navy-gradient py-12 sm:py-16">
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-black leading-tight text-navy-foreground sm:text-4xl">
            جاهز تحوّل موقع شركتك لأداة <span className="gold-text">تجيب عملاء</span>؟
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            احجز استشارة مجانية ونحدد أنسب حل وخطة تنفيذ واضحة لشركتك.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={onBook}
              className="inline-flex min-h-12 items-center gap-2 rounded-full gold-gradient px-6 text-sm font-black text-navy shadow-xl transition hover:brightness-105 sm:text-base"
            >
              ابدأ الآن
              <ArrowLeft className="h-4 w-4" />
            </button>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-5 text-sm font-bold text-white transition hover:border-gold sm:text-base"
            >
              <WhatsAppIcon className="h-5 w-5" />
              تواصل واتساب
            </a>
          </div>
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
    <footer className="bg-navy-deep pt-10 pb-24 text-white/80 md:pb-10">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/5">
                <img src={logo} alt="XLANS" className="h-8 w-auto" />
              </div>
              <div className="text-base font-black text-white">XLANS Web Solutions</div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              حلول مواقع احترافية تساعد الشركات على بناء حضور رقمي واضح وتحقيق أهداف البيزنس.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
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
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">روابط سريعة</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { l: "خدماتنا", h: "#services" },
                { l: "سابقة الأعمال", h: "#portfolio" },
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
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-gold"
              dir="ltr"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              +20 114 022 6705
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-white/50">
          جميع الحقوق محفوظة © {new Date().getFullYear()} XLANS Web Solutions
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   FLOATING WHATSAPP + MOBILE BAR
============================================================ */
function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل على واتساب"
      className="fixed bottom-6 left-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:brightness-110 md:grid"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}

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
          احجز استشارة
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
    <section id={id} className={`${bg} py-12 sm:py-16`}>
      <div className="container-x">
        <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-8">
          {eyebrow && (
            <span className="inline-block rounded-full border border-gold/40 bg-white px-4 py-1.5 text-xs font-semibold text-gold">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-3 text-2xl font-black text-navy sm:text-4xl">{title}</h2>
          {intro && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {intro}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
