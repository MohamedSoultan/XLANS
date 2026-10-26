import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Phone } from "lucide-react";
import logoAsset from "@/assets/xlans-logo-new.png.asset.json";
import { CONTACT_EMAIL, MAILTO, PHONE_NUMBER, WA_LINK, WhatsAppIcon } from "@/components/SiteChrome";

export const Route = createFileRoute("/en")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "XLANS Web Solutions | Software Solutions for Growing Companies" },
      { name: "description", content: "XLANS builds corporate platforms, web & mobile applications, system integrations, and legacy modernization for mid-size and large companies. Start with a Discovery Call." },
      { property: "og:title", content: "XLANS Web Solutions | Software Solutions for Growing Companies" },
      { property: "og:description", content: "We don't start with technology. We start with your business challenge — then build the system your company runs on." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://xlans.lovable.app/en" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://xlans.lovable.app/en" },
      { rel: "alternate", hrefLang: "en", href: "https://xlans.lovable.app/en" },
      { rel: "alternate", hrefLang: "ar", href: "https://xlans.lovable.app/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://xlans.lovable.app/" },
    ],
  }),
  component: EnglishPage,
});

const solutions = [
  { title: "Corporate Platforms", text: "Internal and customer-facing platforms built around your actual workflows." },
  { title: "Web & Mobile Applications", text: "Fast, dependable applications your team and clients can rely on daily." },
  { title: "System Integration", text: "Connect the tools you already use so data flows without manual work." },
  { title: "Legacy System Modernization", text: "Upgrade what slows you down without disrupting daily operations." },
];

const caseStudies = [
  { name: "Capital Homes", kind: "Dynamic real estate experience", url: "https://capitalhomes-eg.com/" },
  { name: "Capital Tires", kind: "Smart automotive e-commerce", url: "https://capitaltires-eg.com/" },
  { name: "NETSYS", kind: "B2B technical product experience", url: "https://netsys-us.com/" },
];

function EnglishPage() {
  return <div className="min-h-screen bg-background text-foreground">
    <header className="fixed inset-x-0 top-0 z-50 bg-background/90 py-3 backdrop-blur">
      <div className="container-x flex items-center justify-between gap-3">
        <Link to="/" aria-label="XLANS — Arabic version"><img src={logoAsset.url} alt="XLANS" width={180} height={60} className="h-12 w-auto sm:h-14" /></Link>
        <div className="flex items-center gap-2">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-bold text-whatsapp-foreground"><WhatsAppIcon className="h-5 w-5" /> WhatsApp</a>
          <Link to="/" className="inline-flex h-11 items-center rounded-full border border-border bg-background px-3 text-xs font-bold text-navy transition hover:border-gold hover:text-gold">العربية</Link>
        </div>
      </div>
    </header>

    <main>
      <section className="bg-cream pb-14 pt-28 sm:pt-36">
        <div className="container-x max-w-3xl text-center">
          <p className="text-sm font-bold text-gold">Software solutions for mid-size and large companies</p>
          <h1 className="mt-4 text-3xl font-black leading-tight text-navy sm:text-5xl">We don't start with technology.<br /><span className="text-gold">We start with your business challenge.</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">XLANS builds the systems growing companies run on. Every project starts with understanding your operations, your decision-makers, and the outcome you need — then we build the solution that fits.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-whatsapp px-6 font-bold text-whatsapp-foreground"><WhatsAppIcon className="h-5 w-5" /> Discuss Your Project on WhatsApp</a>
            <a href={MAILTO} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-gold/60 bg-background px-5 font-bold text-navy"><span dir="ltr" className="text-sm">{CONTACT_EMAIL}</span></a>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-semibold text-navy/70">
            <span>Clear scope and pricing</span><span>Strict NDA compliance</span><span>Structured handover to your team</span>
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-background py-14 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold text-gold">What we build</p><h2 className="mt-3 text-2xl font-black text-navy sm:text-4xl">Solutions tied to the way you operate</h2></div>
          <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {solutions.map((item) => <article key={item.title} className="bg-background p-6"><h3 className="font-bold text-navy">{item.title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="case-studies" className="bg-cream py-14 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold text-gold">Selected case studies</p><h2 className="mt-3 text-2xl font-black text-navy sm:text-4xl">Real projects, measurable outcomes</h2></div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {caseStudies.map((study) => <a key={study.name} href={study.url} target="_blank" rel="noopener noreferrer" className="rounded-sm border border-border bg-background p-6 transition hover:border-gold"><h3 className="font-bold text-navy">{study.name}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{study.kind}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-navy">Explore the project <ArrowLeft className="h-4 w-4 text-gold" /></span></a>)}
          </div>
          <p className="mt-6 text-center text-sm leading-7 text-muted-foreground">Additional case studies — including B2B export platforms serving international markets — are available on request via WhatsApp.</p>
        </div>
      </section>

      <section id="contact" className="bg-background py-14 sm:py-20">
        <div className="container-x max-w-2xl rounded-sm border border-border bg-cream p-6 text-center sm:p-10">
          <p className="text-sm font-bold text-gold">Start with a Discovery Call</p>
          <h2 className="mt-3 text-2xl font-black text-navy sm:text-3xl">Daily except Friday, 9 AM – 6 PM (Cairo time)</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">Pick the channel that suits you — WhatsApp is the fastest way to reach the team.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-whatsapp px-6 font-bold text-whatsapp-foreground"><WhatsAppIcon className="h-5 w-5" /> WhatsApp</a>
            <a href={MAILTO} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-gold/50 bg-background px-5 text-sm font-bold text-navy transition hover:bg-cream"><span dir="ltr">{CONTACT_EMAIL}</span></a>
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-gold/50 bg-background px-5 text-sm font-bold text-navy transition hover:bg-cream"><Phone className="h-4 w-4" /> Call</a>
          </div>
          <ul className="mx-auto mt-7 max-w-md space-y-2 text-left">
            <li className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="mt-1.5 h-4 w-4 shrink-0 text-gold" />A clear scope, timeline, and cost before execution begins.</li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="mt-1.5 h-4 w-4 shrink-0 text-gold" />Strict NDA compliance for every engagement.</li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="mt-1.5 h-4 w-4 shrink-0 text-gold" />Delivery structured for a clean handover to your team.</li>
          </ul>
        </div>
      </section>
    </main>

    <footer className="bg-navy-deep py-8 text-navy-foreground">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-start">
        <img src={logoAsset.url} alt="XLANS" className="h-10 w-auto" />
        <p className="text-xs text-navy-foreground/60">All rights reserved © {new Date().getFullYear()} XLANS Web Solutions</p>
      </div>
    </footer>
  </div>;
}
