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
import heroBoardroom from "@/assets/hero-boardroom.jpg";
import aboutDiscovery from "@/assets/about-discovery.jpg";
import ctaArchitecture from "@/assets/cta-architecture.jpg";
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
      { title: "XLANS | شريك التحول الرقمي للشركات" },
      {
        name: "description",
        content:
          "XLANS شريك تحول رقمي للشركات: نبدأ من فهم تحديات البيزنس ثم نبني الحل الرقمي الصحيح — تحسين أداء، أنظمة رقمية، أتمتة وذكاء اصطناعي، وتكامل بين الأنظمة.",
      },
      { property: "og:title", content: "XLANS | شريك التحول الرقمي للشركات" },
      {
        property: "og:description",
        content:
          "نبدأ من فهم تحديات شركتك، ثم نبني الحل الرقمي الذي يصنع أثرًا حقيقيًا في الأداء والقرار والنمو.",
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
            "شريك تحول رقمي للشركات: تحسين الأداء، أنظمة رقمية، أتمتة وذكاء اصطناعي، وتكامل بين الأنظمة.",
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
  "مرحبًا XLANS، أود مناقشة تحدٍّ قائم داخل شركتي وكيف يمكن حله رقميًا.";
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
        <About />
        <Approach />
        <PortfolioCTA />
        <Services onBook={openWizard} />
        <Values />
        <FAQ />
        <BookingSection onBook={() => openWizard()} />
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
  { label: "فلسفتنا", href: "#about" },
  { label: "منهجيتنا", href: "#approach" },
  { label: "أعمالنا", href: "#portfolio" },
  { label: "حلولنا", href: "#services" },
  { label: "ابدأ النقاش", href: "#contact" },
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
              ابدأ رحلة التحول
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
              ابدأ رحلة التحول
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
      className="relative overflow-hidden bg-cream pt-28 pb-14 sm:pt-32 md:pt-36 md:pb-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 select-none opacity-[0.05] md:-left-28 md:opacity-[0.07]"
      >
        <img src={logo} alt="" className="w-[24rem] md:w-[36rem]" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_1fr] md:gap-14">
          <div className="reveal text-center md:text-right">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-4 py-1.5 text-xs font-semibold text-navy backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-gold" />
              شريك التحول الرقمي للشركات
            </span>

            <h1 className="mt-5 text-3xl font-black leading-[1.2] text-navy sm:text-4xl md:text-[3.25rem] md:leading-[1.15]">
              التقنية موجودة في كل مكان.
              <br />
              <span className="gold-text">الحل الصحيح ليس كذلك.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-foreground/75 md:mx-0">
              نبدأ من فهم تحديات شركتك، ثم نبني الحل الرقمي الذي يصنع أثرًا حقيقيًا في الأداء
              والقرار والنمو.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
              <button
                onClick={onBook}
                className="group inline-flex min-h-12 items-center gap-2 rounded-full navy-gradient px-6 text-sm font-bold text-navy-foreground shadow-xl transition hover:brightness-110 sm:text-base"
              >
                ابدأ رحلة التحول
                <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
              </button>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-navy/15 bg-white px-5 text-sm font-bold text-navy transition hover:border-gold sm:text-base"
              >
                ناقش تحديك
              </a>
            </div>
          </div>

          <div className="reveal relative mx-auto w-full max-w-sm" style={{ animationDelay: "120ms" }}>
            <div
              aria-hidden
              className="absolute -bottom-3 -left-3 h-24 w-24 border-b border-l border-gold/50 md:h-32 md:w-32"
            />
            <div className="relative overflow-hidden rounded-sm bg-navy ring-1 ring-navy/10">
              <img
                src={heroBoardroom}
                alt="قيادة تنفيذية تناقش تحول شركتها الرقمي"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/45 to-transparent p-5 pt-16 text-white">
                <span className="block h-px w-10 bg-gold" />
                <p className="mt-3 text-sm font-semibold leading-snug tracking-wide">
                  القرار الصحيح قبل التنفيذ السريع.
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
   ABOUT — الفلسفة
============================================================ */
function About() {
  const points = [
    {
      title: "لماذا تتعثر الشركات؟",
      desc: "المشكلة نادرًا ما تكون في الأدوات. غالبًا تكون في وضوح الصورة وترتيب الأولويات.",
    },
    {
      title: "لماذا تفشل المشاريع التقنية؟",
      desc: "لأنها تبدأ من التقنية، لا من التحدي. فيُبنى الحل الخاطئ بإتقان.",
    },
    {
      title: "لماذا يهم سياق البيزنس؟",
      desc: "الأثر لا يأتي من الكود، بل من قرار مبني على فهم حقيقي لطريقة عمل شركتك.",
    },
  ];
  return (
    <Section
      id="about"
      eyebrow="فلسفتنا"
      title="التحول الرقمي يبدأ بالفهم، لا بالتقنية"
      intro="الذكاء الاصطناعي يبني أي شيء أسرع من أي وقت. لكن بناء الحل الخاطئ بسرعة لا يصنع قيمة."
    >
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2 md:gap-12">
        <figure className="relative overflow-hidden rounded-sm ring-1 ring-navy/10">
          <img
            src={aboutDiscovery}
            alt="مراجعة تنفيذية لعمليات الشركة قبل اختيار الحل التقني"
            width={1280}
            height={960}
            loading="lazy"
            className="h-56 w-full object-cover sm:h-72 md:h-[22rem]"
          />
          <span aria-hidden className="absolute inset-0 bg-navy/10" />
        </figure>

        <div className="grid gap-4">
          {points.map((p) => (
            <article
              key={p.title}
              className="text-center md:border-r-2 md:border-gold/60 md:pr-4 md:text-right"
            >
              <h3 className="text-base font-bold text-navy">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   APPROACH — رحلة التحول
============================================================ */
function Approach() {
  const steps = [
    { icon: Target, n: "01", t: "الاكتشاف", d: "نفهم التحدي الحقيقي داخل شركتك." },
    { icon: Layers, n: "02", t: "التحديد", d: "نصمم الاستراتيجية والحل المناسب." },
    { icon: Wrench, n: "03", t: "البناء", d: "نطوّر التقنية التي تناسب طريقة عملكم." },
    { icon: TrendingUp, n: "04", t: "التحول", d: "نرفع الأداء ونفتح مساحة للنمو." },
  ];
  return (
    <Section id="approach" eyebrow="منهجيتنا" title="رحلة تحول من أربع مراحل" bg="bg-cream">
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <article
            key={s.n}
            className="rounded-2xl border border-border bg-white p-6 text-center md:text-right"
          >
            <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl navy-gradient text-gold md:mx-0">
              <s.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-xs font-black tracking-widest text-gold" dir="ltr">
              {s.n}
            </div>
            <h3 className="mt-1 text-lg font-bold text-navy">{s.t}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
   VALUES — مبادئ العمل
============================================================ */
function Values() {
  const values = [
    { icon: Shield, t: "الشفافية", d: "قرارات معلنة، نطاق واضح، وتكلفة بلا مفاجآت." },
    { icon: Clock, t: "السرعة", d: "إيقاع تنفيذ منضبط يحترم زمن الفرصة في السوق." },
    { icon: Briefcase, t: "الثقة", d: "التزام تعاقدي وسرية كاملة مع فريق يعمل كامتداد لكم." },
  ];
  return (
    <Section id="values" eyebrow="مبادئنا" title="مبادئ عمل، لا شعارات تسويقية" bg="bg-cream">
      <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
        {values.map((v) => (
          <article
            key={v.t}
            className="rounded-2xl border border-border bg-white p-6 text-center md:text-right"
          >
            <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl gold-gradient text-navy md:mx-0">
              <v.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-navy">{v.t}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
   SOLUTIONS
============================================================ */
function Services({ onBook }: { onBook: (s?: string) => void }) {
  const services = [
    {
      icon: TrendingUp,
      key: "تحسين الأداء التشغيلي",
      title: "تحسين الأداء",
      desc: "عمليات أوضح ورؤية أدق وهدر أقل.",
      features: ["تبسيط العمليات", "وضوح المؤشرات", "تقليل الهدر"],
    },
    {
      icon: Layers,
      key: "أنظمة رقمية",
      title: "أنظمة رقمية",
      desc: "منصات وتطبيقات مؤسسية مبنية على واقع شركتك.",
      features: ["منصات مخصصة", "تطبيقات مؤسسية", "حلول ERP"],
    },
    {
      icon: Zap,
      key: "الأتمتة والذكاء الاصطناعي",
      title: "الأتمتة والذكاء الاصطناعي",
      desc: "أتمتة العمل المتكرر وقرارات أسرع وأدق.",
      features: ["أتمتة المهام", "قرارات مدعومة بالبيانات", "كفاءة تشغيلية"],
    },
    {
      icon: RefreshCw,
      key: "التكامل بين الأنظمة",
      title: "التكامل",
      desc: "ربط الأنظمة والبيانات في مصدر واحد موثوق.",
      features: ["ربط الأنظمة", "توحيد البيانات", "تدفق بلا انقطاع"],
    },
  ];
  return (
    <Section
      id="services"
      eyebrow="حلولنا"
      title="نبدأ من احتياج البيزنس، لا من المنتج"
      bg="bg-white"
    >
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
              ناقش هذا التحدي
              <ArrowLeft className="h-4 w-4" />
            </button>
          </article>
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
      eyebrow="أثر حقيقي"
      title="شركات اختارت أن تبدأ من التحدي"
      intro="كل مشروع بدأ بسؤال عن البيزنس، لا بطلب تقني."
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
          اطلب ملف الأعمال الكامل
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
      eyebrow="الخطوة التالية"
      title="التحديات موجودة بالفعل داخل شركتك"
      intro="السؤال الحقيقي: هل تُحل بالرؤية الصحيحة؟"
      bg="bg-white"
    >
      <div className="mx-auto max-w-xl overflow-hidden rounded-sm border border-border bg-white shadow-xl">
        <div className="relative p-5">
          <img
            src={ctaArchitecture}
            alt=""
            aria-hidden
            width={1536}
            height={864}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span aria-hidden className="absolute inset-0 bg-navy/80" />
          <div className="relative flex items-center gap-3 text-navy-foreground">
            <div className="grid h-11 w-11 place-items-center rounded-sm gold-gradient text-navy">
              <Rocket className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-gold-light">أقل من دقيقة</div>
              <div className="text-base font-bold">جلسة نقاش حول تحدي واحد</div>
            </div>
          </div>
        </div>
        <div className="p-5">
          <ul className="space-y-2.5">
            {[
              "حدد مجال التحدي داخل شركتك",
              "شارك سياق البيزنس والأثر المتوقع",
              "نرسم معك ملامح الحل المناسب",
              "تستلم رؤية أولية وخطوات واضحة",
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
            ابدأ نقاش التحول الرقمي
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
       q: "هل شركتي جاهزة للتحول الرقمي؟",
       a: "معظم الشركات لديها البيانات والعمليات، لكنها تحتاج لترتيبها في نظام واحد. خلال Discovery Call نحدد نقطة البداية الصحيحة دون تشتيت.",
     },
     {
       q: "كم تستغرق رحلة التحول؟",
       a: "تبدأ بمرحلة اكتشاف قصيرة تمتد لأسبوع أو أقل، ثم تنفيذ على دفعات تُظهر أثرًا مبكرًا قبل إكمال باقي الرحلة.",
     },
     {
       q: "هل نحتاج لتغيير كل أنظمتنا؟",
       a: "لا بالضرورة. أحيانًا الحل يكون في ربط ما لديكم، وتبسيطه، وتغطية الفجوات بدل البدء من الصفر.",
     },
     {
       q: "كيف نضمن عدم تعطيل العمل أثناء التحول؟",
       a: "ننفذ على مراحل متوازية مع العمل اليومي، ونختبر كل خطوة قبل الاعتماد. التحول لا يعني توقف البيزنس.",
     },
     {
       q: "ما التكلفة المتوقعة؟",
       a: "التكلفة تختلف حسب حجم العمليات والأنظمة المطلوبة. بعد Discovery Call نرسل خطة واضحة تحتوي على نطاق العمل والتكلفة والجدول الزمني.",
     },
   ];
   const [open, setOpen] = useState<number | null>(0);
   return (
     <Section id="faq" eyebrow="FAQ" title="أسئلة في رحلة التحول الرقمي">
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
       <div className="mt-8 rounded-2xl border border-gold/40 bg-cream/60 p-5 text-center">
         <h4 className="text-base font-bold text-navy">ابدأ بـ Discovery Call مجانية</h4>
         <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
           نتواصل يوميًا عدا الجمعة، من ٩ صباحًا حتى ٦ مساءً. حدد الوقت المناسب ونرسم معك الخطوة الأولى.
         </p>
         <a
           href={WA_LINK}
           target="_blank"
           rel="noopener noreferrer"
           className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-lg transition hover:brightness-110"
         >
           <WhatsAppIcon className="h-5 w-5" />
           حدد موعد Discovery Call
         </a>
       </div>
     </Section>
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
              شريك تحول رقمي يساعد الشركات على فهم تحدياتها وبناء الحل الصحيح.
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
                { l: "حلولنا", h: "#services" },
                { l: "أعمالنا", h: "#portfolio" },
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
                  ابدأ النقاش
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
          ابدأ النقاش
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
