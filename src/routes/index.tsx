import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, ChevronDown } from "lucide-react";
import heroBoardroom from "@/assets/hero-boardroom.jpg";
import aboutDiscovery from "@/assets/about-discovery.jpg";
import solutionsExecutive from "@/assets/solutions-executive.jpg";
import valuesPartnership from "@/assets/values-partnership.jpg";
import ctaArchitecture from "@/assets/cta-architecture.jpg";
import { BookingWizard } from "@/components/BookingWizard";
import { SitePage, WA_LINK, WhatsAppIcon } from "@/components/SiteChrome";
import { services } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XLANS | حلول برمجية للشركات" },
      { name: "description", content: "XLANS تطور حلولًا برمجية للشركات المتوسطة والكبيرة، تبدأ بفهم التحدي وتنتهي بنظام جاهز للعمل والنمو." },
      { property: "og:title", content: "XLANS | حلول برمجية للشركات" },
      { property: "og:description", content: "نفهم تحدي شركتك أولًا، ثم نبني الحل البرمجي المناسب لعملياتها ومرحلة نموها." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const principles = [
  { title: "وضوح قبل التنفيذ", text: "نطاق وقرارات وتكلفة معلنة من البداية." },
  { title: "سرعة منضبطة", text: "تقدم ملموس دون التضحية بالجودة أو استقرار العمل." },
  { title: "شراكة يمكن الاعتماد عليها", text: "فريق يفهم مسؤولية القرار ويحمي سرية شركتك." },
];

const faq = [
  { q: "هل نحتاج إلى استبدال الأنظمة الحالية؟", a: "ليس بالضرورة. نقيّم ما يعمل أولًا، ثم نحدد إن كان الأنسب تطويره أو ربطه أو استبدال جزء محدد منه." },
  { q: "كيف تبدأون المشروع؟", a: "نبدأ بجلسة استكشاف لفهم التحدي وأصحاب المصلحة والنتيجة المطلوبة، ثم نقدم نطاقًا واضحًا قبل التنفيذ." },
  { q: "هل يمكن التنفيذ دون تعطيل العمل؟", a: "نعم. نخطط للإطلاق على مراحل، ونختبر كل جزء قبل اعتماده داخل بيئة العمل الفعلية." },
  { q: "كيف تُحدد التكلفة والمدة؟", a: "بعد فهم النطاق والتكاملات المطلوبة، تحصل على عرض واضح يحدد التكلفة والمراحل والجدول الزمني." },
];

function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <SitePage>
      <section className="relative overflow-hidden bg-cream pb-14 pt-28 sm:pt-32 md:pb-20 md:pt-36">
        <div className="container-x grid items-center gap-9 md:grid-cols-[1.05fr_.95fr] md:gap-16">
          <div className="text-center md:text-right">
            <p className="text-sm font-bold text-gold">حلول برمجية للشركات المتوسطة والكبيرة</p>
            <h1 className="mt-4 text-3xl font-black leading-tight text-navy sm:text-5xl">
              لا نبدأ بالتقنية.<br /><span className="text-gold">نبدأ بتحدي شركتك.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted-foreground md:mx-0">
              نفهم العمليات والقرار المطلوب، ثم نبني نظامًا يناسب طريقة عمل شركتك ويستعد معها للنمو.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
              <button type="button" onClick={() => setBookingOpen(true)} className="inline-flex min-h-12 items-center gap-2 rounded-full navy-gradient px-6 font-bold text-navy-foreground">
                احجز Discovery Call <ArrowLeft className="h-4 w-4" />
              </button>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-gold/60 bg-background px-6 font-bold text-navy">
                <WhatsAppIcon className="h-5 w-5 text-whatsapp" /> ناقش احتياجك
              </a>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-semibold text-navy/70 md:justify-start">
              <span>سرية كاملة</span><span>نطاق واضح</span><span>تسليم منظم للفريق</span>
            </div>
          </div>
          <figure className="relative mx-auto w-full max-w-md overflow-hidden rounded-sm bg-navy">
            <img src={heroBoardroom} alt="فريق قيادة يناقش احتياجات الشركة التقنية" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/80 to-transparent p-6 pt-20 text-sm font-bold text-navy-foreground">
              القرار الصحيح يسبق التنفيذ السريع.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="container-x grid items-center gap-9 md:grid-cols-2 md:gap-16">
          <figure className="overflow-hidden rounded-sm"><img src={aboutDiscovery} alt="تحليل احتياجات الشركة قبل تطوير الحل" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" /></figure>
          <div className="text-center md:text-right">
            <p className="text-sm font-bold text-gold">قبل كتابة أول سطر</p>
            <h2 className="mt-3 text-2xl font-black text-navy sm:text-4xl">نفهم ما يحتاج إلى التغيير فعلًا</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">المشروع الناجح لا يبدأ بقائمة خصائص. يبدأ بفهم العمليات، المستخدمين، القيود، والنتيجة التي يحتاجها أصحاب القرار.</p>
            <Link to="/how-we-work" className="mt-6 inline-flex items-center gap-2 font-bold text-navy">اطّلع على طريقة العمل <ArrowLeft className="h-4 w-4 text-gold" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold text-gold">ما نبنيه</p><h2 className="mt-3 text-2xl font-black text-navy sm:text-4xl">حلول مرتبطة بواقع العمل</h2></div>
          <div className="mt-8 grid overflow-hidden rounded-sm border border-border bg-background md:grid-cols-[.9fr_1.1fr]">
            <img src={solutionsExecutive} alt="إدارة تنفيذية تراجع نظامًا رقميًا للشركة" width={1280} height={960} loading="lazy" className="h-full min-h-64 w-full object-cover" />
            <div className="grid sm:grid-cols-2">
              {services.map((service) => <article key={service.key} className="border-b border-border p-5 text-center sm:border-l sm:text-right"><h3 className="font-bold text-navy">{service.title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{service.description}</p></article>)}
            </div>
          </div>
          <div className="mt-6 text-center"><Link to="/services" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-navy/20 bg-background px-6 font-bold text-navy">استكشف الخدمات <ArrowLeft className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="container-x grid items-center gap-9 md:grid-cols-[1.05fr_.95fr] md:gap-16">
          <div><p className="text-center text-sm font-bold text-gold md:text-right">مبادئ العمل</p><h2 className="mt-3 text-center text-2xl font-black text-navy sm:text-4xl md:text-right">شراكة مسؤولة أمام القرار</h2><div className="mt-7 divide-y divide-border">{principles.map((item) => <article key={item.title} className="py-4 text-center md:text-right"><h3 className="font-bold text-navy">{item.title}</h3><p className="mt-1 text-sm leading-7 text-muted-foreground">{item.text}</p></article>)}</div></div>
          <img src={valuesPartnership} alt="شراكة عمل بين قيادات الشركات" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" />
        </div>
      </section>

      <section className="bg-cream py-14 sm:py-20">
        <div className="container-x"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold text-gold">قبل أن تبدأ</p><h2 className="mt-3 text-2xl font-black text-navy sm:text-4xl">إجابات تساعدك على اتخاذ القرار</h2></div>
          <div className="mx-auto mt-8 max-w-3xl divide-y divide-border border-y border-border">{faq.map((item, index) => { const isOpen = openFaq === index; return <article key={item.q}><button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} className="flex w-full items-center justify-between gap-4 py-5 text-right" aria-expanded={isOpen}><span className="font-bold text-navy">{item.q}</span><ChevronDown className={`h-5 w-5 shrink-0 text-gold transition ${isOpen ? "rotate-180" : ""}`} /></button>{isOpen && <p className="pb-5 text-sm leading-7 text-muted-foreground">{item.a}</p>}</article>; })}</div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-16 text-center sm:py-20">
        <img src={ctaArchitecture} alt="" aria-hidden width={1536} height={864} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" /><div className="absolute inset-0 bg-navy/75" />
        <div className="container-x relative"><p className="text-sm font-bold text-gold">الخطوة الأولى</p><h2 className="mx-auto mt-3 max-w-2xl text-2xl font-black text-navy-foreground sm:text-4xl">ابدأ بنقاش واضح حول تحدٍ واحد داخل شركتك</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-navy-foreground/75">Discovery Call يوميًا عدا الجمعة، من ٩ صباحًا حتى ٦ مساءً.</p><button type="button" onClick={() => setBookingOpen(true)} className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full gold-gradient px-7 font-bold text-gold-foreground">حدد موعد المكالمة <ArrowLeft className="h-4 w-4" /></button></div>
      </section>
      <BookingWizard open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </SitePage>
  );
}