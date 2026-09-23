import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpLeft, Check } from "lucide-react";
import caseStudiesHero from "@/assets/case-studies-hero.jpg";
import caseRawabet from "@/assets/case-rawabet.jpg";
import caseCapitalHomes from "@/assets/case-capital-homes.jpg";
import caseCapitalTires from "@/assets/case-capital-tires.jpg";
import caseNetsys from "@/assets/case-netsys.jpg";
import caseElabyad from "@/assets/case-elabyad.jpg";
import { PageHero, SitePage, WA_LINK } from "@/components/SiteChrome";
import { caseStudies, type CaseStudy } from "@/lib/case-studies-content";

const images: Record<string, string> = {
  rawabet: caseRawabet,
  capitalHomes: caseCapitalHomes,
  capitalTires: caseCapitalTires,
  netsys: caseNetsys,
  elabyad: caseElabyad,
};

export const Route = createFileRoute("/case-studies")({
  head: () => ({ meta: [
    { title: "دراسات الحالة | XLANS Web Solutions" },
    { name: "description", content: "دراسات حالة مختارة من حلول XLANS البرمجية: منصات عقارية، تجارة إلكترونية، منتجات تقنية B2B، ومنصات تصدير." },
    { property: "og:title", content: "دراسات الحالة | XLANS Web Solutions" },
    { property: "og:description", content: "مشروعات حقيقية بدأت من احتياج العمل وانتهت بتجربة رقمية قابلة للاستخدام والنمو." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CaseStudiesPage,
});

function Block({ label, items }: { label: string; items: string[] }) {
  return <div>
    <h3 className="text-sm font-black text-gold">{label}</h3>
    <ul className="mt-2 space-y-1.5">{items.map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-7 text-muted-foreground"><Check className="mt-1.5 h-4 w-4 shrink-0 text-gold" />{item}</li>)}</ul>
  </div>;
}

function CaseStudySection({ study, index }: { study: CaseStudy; index: number }) {
  const reversed = index % 2 === 1;
  return <article className="rounded-sm border border-border bg-background p-6 sm:p-8">
    <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      <img src={images[study.image]} alt={study.imageAlt} width={1536} height={864} loading="lazy" className={`aspect-[16/10] w-full rounded-sm object-cover ${reversed ? "lg:order-2" : ""}`} />
      <div>
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-muted-foreground">
          <span className="bg-cream px-3 py-1 text-navy">{study.industry}</span>
          <span className="text-gold">دراسة حالة {String(index + 1).padStart(2, "0")}</span>
        </div>
        <h2 className="mt-4 text-2xl font-black text-navy sm:text-3xl">{study.name}</h2>
        <p className="mt-1 text-lg font-bold text-foreground">{study.title}</p>
        <div className="mt-6 space-y-5">
          <div>
            <h3 className="text-sm font-black text-gold">التحدي</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{study.challenge}</p>
          </div>
          {study.discovery && <Block label="الاستكشاف والتحليل" items={study.discovery} />}
          <Block label="الحل" items={study.solution} />
          {study.example && <p className="border-r-2 border-gold bg-cream/60 p-4 text-sm leading-7 text-navy"><span className="font-black">مثال: </span>{study.example}</p>}
          <Block label="القيمة للشركة" items={study.value} />
        </div>
        {study.url && <a href={study.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-bold text-navy transition hover:text-gold">استكشف المشروع <ArrowUpLeft className="h-4 w-4 text-gold" /></a>}
      </div>
    </div>
  </article>;
}

function CaseStudiesPage() {
  return <SitePage>
    <PageHero eyebrow="دراسات الحالة" title="من احتياج العمل إلى نظام يخدم النمو" intro="دراسات حالة مختارة توضّح كيف ننتقل من فهم التحدي والتحليل، إلى حل تقني يُقاس بأثره على تشغيل الشركة ونموها." image={caseStudiesHero} imageAlt="فريق دولي متنوع في قاعة اجتماعات يناقش مشروعًا تقنيًا" />
    <section className="bg-cream py-14 sm:py-20"><div className="container-x grid gap-6">{caseStudies.map((study, index) => <CaseStudySection key={study.id} study={study} index={index} />)}</div></section>
    <section className="bg-background py-14 text-center"><div className="container-x"><h2 className="text-2xl font-black text-navy">هل تريد دراسة حالة قريبة من قطاعك؟</h2><a href={`${WA_LINK}%0Aأرغب%20في%20دراسة%20حالة%20قريبة%20من%20قطاع%20شركتي.`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center rounded-full navy-gradient px-6 font-bold text-navy-foreground">اطلب دراسة حالة مناسبة</a></div></section>
  </SitePage>;
}
