import { createFileRoute } from "@tanstack/react-router";
import howWeWork from "@/assets/how-we-work.jpg";
import { PageHero, SitePage, WA_LINK } from "@/components/SiteChrome";
import { workSteps } from "@/lib/site-content";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({ meta: [
    { title: "كيفية العمل | XLANS Web Solutions" },
    { name: "description", content: "ثماني خطوات واضحة من استكشاف تحدي الشركة حتى تسليم الحل البرمجي والانطلاق إلى السوق." },
    { property: "og:title", content: "كيفية العمل | XLANS Web Solutions" },
    { property: "og:description", content: "رحلة تنفيذ واضحة تحمي القرار وتبقي فريقك مطلعًا حتى الانطلاق." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HowWeWorkPage,
});

function HowWeWorkPage() {
  return <SitePage>
    <PageHero eyebrow="كيفية العمل" title="من التحدي إلى السوق بخطوات واضحة" intro="كل مرحلة تنتهي بمخرج مفهوم وقرار يمكن اعتماده قبل الانتقال إلى المرحلة التالية." image={howWeWork} imageAlt="ورشة تخطيط لمراحل تنفيذ نظام برمجي" />
    <section className="bg-background py-14 sm:py-20"><div className="container-x"><div className="grid gap-x-10 md:grid-cols-2">{workSteps.map((step) => <article key={step.number} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-border py-6"><span className="text-sm font-black text-gold" dir="ltr">{step.number}</span><div><h2 className="text-lg font-black text-navy">{step.title}</h2><p className="mt-2 text-sm leading-7 text-muted-foreground">{step.description}</p></div></article>)}</div></div></section>
    <section className="bg-navy py-14 text-center"><div className="container-x"><h2 className="text-2xl font-black text-navy-foreground">ابدأ من الاستكشاف، لا من الافتراضات</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-navy-foreground/70">شاركنا التحدي الحالي وسنحدد معك نقطة البداية المناسبة.</p><a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center rounded-full gold-gradient px-6 font-bold text-gold-foreground">ابدأ النقاش</a></div></section>
  </SitePage>;
}