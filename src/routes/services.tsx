import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import solutionsExecutive from "@/assets/solutions-executive.jpg";
import valuesPartnership from "@/assets/values-partnership.jpg";
import { PageHero, SitePage, WA_LINK } from "@/components/SiteChrome";
import { services } from "@/lib/site-content";

export const Route = createFileRoute("/services")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "الخدمات | XLANS Web Solutions" },
    { name: "description", content: "حلول برمجية للشركات تشمل المنصات، تطبيقات الويب والموبايل، تكامل الأنظمة، وتحديث الأنظمة القديمة." },
    { property: "og:title", content: "الخدمات | XLANS Web Solutions" },
    { property: "og:description", content: "حلول برمجية تُبنى حول عمليات شركتك واحتياجات فرق العمل." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ServicesPage,
});

function ServicesPage() {
  return <SitePage>
    <PageHero eyebrow="الخدمات" title="نظام يخدم العمل، لا عبء تقني جديد" intro="نحدد معكم ما يجب بناؤه وما يجب الحفاظ عليه، ثم نطور حلًا يمكن لفريقكم الاعتماد عليه." image={solutionsExecutive} imageAlt="قيادات تراجع أحد الحلول البرمجية" />
    <section className="bg-background py-14 sm:py-20"><div className="container-x grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">{services.map((service, index) => <article key={service.key} className="bg-background p-6 sm:p-8"><span className="text-xs font-black text-gold" dir="ltr">0{index + 1}</span><h2 className="mt-2 text-xl font-black text-navy">{service.title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p><ul className="mt-5 space-y-3">{service.outcomes.map((outcome) => <li key={outcome} className="flex items-center gap-2 text-sm font-semibold text-foreground"><Check className="h-4 w-4 text-gold" />{outcome}</li>)}</ul></article>)}</div></section>
    <section className="bg-cream py-14 sm:py-20"><div className="container-x grid items-center gap-8 md:grid-cols-2 md:gap-14"><img src={valuesPartnership} alt="فريق عمل يتفق على نطاق المشروع" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" /><div className="text-center md:text-right"><p className="text-sm font-bold text-gold">حل يناسب شركتك</p><h2 className="mt-3 text-2xl font-black text-navy sm:text-4xl">لا نبيع حزمة جاهزة</h2><p className="mt-4 leading-8 text-muted-foreground">نختار المعمارية ونطاق التنفيذ وفق العمليات الحالية، مستخدمي النظام، وخطة النمو.</p><a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center rounded-full navy-gradient px-6 font-bold text-navy-foreground">ناقش احتياج شركتك</a></div></div></section>
  </SitePage>;
}