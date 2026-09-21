import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpLeft } from "lucide-react";
import caseStudiesExecutives from "@/assets/case-studies-executives.jpg";
import { PageHero, SitePage, WA_LINK } from "@/components/SiteChrome";
import { projects } from "@/lib/site-content";

export const Route = createFileRoute("/case-studies")({
  head: () => ({ meta: [
    { title: "دراسات الحالة | XLANS Web Solutions" },
    { name: "description", content: "نماذج من حلول XLANS البرمجية للشركات في قطاعات وأسواق متعددة." },
    { property: "og:title", content: "دراسات الحالة | XLANS Web Solutions" },
    { property: "og:description", content: "مشروعات حقيقية بدأت من احتياج العمل وانتهت بتجربة رقمية واضحة." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return <SitePage>
    <PageHero eyebrow="دراسات الحالة" title="حلول حقيقية لقطاعات وأسواق مختلفة" intro="نماذج مختارة توضّح كيف تحوّل احتياج العمل إلى تجربة رقمية قابلة للاستخدام والنمو." image={caseStudiesExecutives} imageAlt="قيادات شركات داخل مقر عمل حديث" />
    <section className="bg-background py-14 sm:py-20"><div className="container-x grid gap-4 md:grid-cols-2 xl:grid-cols-3">{projects.map((project) => <a key={project.name} href={project.url} target="_blank" rel="noopener noreferrer" className="group flex min-h-64 flex-col rounded-sm border border-border bg-background p-6 transition hover:border-gold"><div className="flex items-center justify-between gap-3 text-xs font-bold text-muted-foreground"><span>{project.flag} {project.country}</span><span className="text-gold">{project.type}</span></div><h2 className="mt-5 text-xl font-black text-navy" dir="ltr">{project.name}</h2><p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{project.desc}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="bg-cream px-2 py-1 text-xs font-bold text-navy" dir="ltr">{tag}</span>)}</div><span className="mt-5 inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-bold text-navy">استكشف المشروع <ArrowUpLeft className="h-4 w-4 text-gold" /></span></a>)}</div></section>
    <section className="bg-cream py-14 text-center"><div className="container-x"><h2 className="text-2xl font-black text-navy">هل تريد دراسة حالة قريبة من قطاعك؟</h2><a href={`${WA_LINK}%0Aأرغب%20في%20دراسة%20حالة%20قريبة%20من%20قطاع%20شركتي.`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center rounded-full navy-gradient px-6 font-bold text-navy-foreground">اطلب دراسة حالة مناسبة</a></div></section>
  </SitePage>;
}