import { useEffect, useMemo, useState } from "react";
import { X, ArrowLeft, Check, Pencil } from "lucide-react";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.47 1.73 6.42L3.2 28.8l6.55-1.71a12.77 12.77 0 0 0 6.25 1.6h.01c7.06 0 12.8-5.73 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05a12.71 12.71 0 0 0-9.06-3.64Zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.88 1.02 1.03-3.79-.25-.4a10.62 10.62 0 0 1-1.63-5.68c0-5.87 4.78-10.64 10.64-10.64 2.84 0 5.51 1.11 7.52 3.12a10.55 10.55 0 0 1 3.12 7.52c0 5.87-4.78 10.64-10.64 10.64Zm5.83-7.97c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55-.18-.01-.4-.01-.61-.01-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.28 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z"/>
    </svg>
  );
}

const WA_NUMBER = "201140226705";
const TOTAL_STEPS = 5;

const SERVICES = [
  "موقع شركة",
  "موقع تعريفي",
  "متجر إلكتروني",
  "نظام حجز بسيط",
  "تطوير موقع حالي",
  "تحسين سرعة وأداء",
  "مش متأكد وعايز استشارة",
];

const SECTORS = [
  "خدمات",
  "صناعة",
  "تجارة إلكترونية",
  "عيادات ومراكز",
  "عقارات",
  "هندسة ومقاولات",
  "تعليم وتدريب",
  "سياحة",
  "مطاعم",
  "أخرى",
];

const GOALS = [
  "تعريف بالشركة",
  "استقبال طلبات تواصل",
  "حجز مواعيد",
  "طلب عرض سعر",
  "عرض منتجات",
  "بيع أونلاين",
  "تحسين الثقة",
  "تطوير موقع حالي",
];

const FEATURES = [
  "واتساب مباشر",
  "نموذج تواصل",
  "حجز مواعيد",
  "كتالوج منتجات",
  "متجر إلكتروني",
  "دفع إلكتروني",
  "لغتين",
  "مدونة",
  "طلب عرض سعر",
  "فلترة وبحث",
  "مش متأكد",
];

const CONTENT_STATUS = ["جاهزين", "متوفر جزء منهم", "محتاج مساعدة", "مش عارف المطلوب"];
const START_TIMES = ["في أسرع وقت", "خلال أسبوع", "خلال شهر", "لسه بجمع معلومات"];
const CONTACT_METHODS = ["مكالمة", "واتساب", "رسالة صوتية", "غير محدد"];

type Data = {
  service: string;
  companyName: string;
  sector: string;
  goal: string;
  hasWebsite: string;
  websiteUrl: string;
  features: string[];
  contentStatus: string;
  startTime: string;
  notes: string;
  name: string;
  phone: string;
  email: string;
  day: string;
  time: string;
  contactMethod: string;
  consent: boolean;
};

const INITIAL: Data = {
  service: "",
  companyName: "",
  sector: "",
  goal: "",
  hasWebsite: "",
  websiteUrl: "",
  features: [],
  contentStatus: "",
  startTime: "",
  notes: "",
  name: "",
  phone: "",
  email: "",
  day: "",
  time: "",
  contactMethod: "",
  consent: false,
};

/* ---------------- validation ---------------- */
const AR_EN_NAME = /^[\p{L}][\p{L}\s'.-]{2,}$/u;

function normalizeUrl(v: string) {
  const t = v.trim();
  if (!t) return "";
  return /^https?:\/\//i.test(t) ? t : `https://${t}`;
}

export function validateField(field: keyof Data, d: Data): string | null {
  const v = String(d[field] ?? "").trim();
  switch (field) {
    case "name":
      if (!v) return "من فضلك اكتب اسمك.";
      if (!AR_EN_NAME.test(v)) return "اكتب اسمًا صحيحًا (حروف فقط، 3 أحرف على الأقل).";
      return null;
    case "companyName":
      if (!v) return "اكتب اسم شركتك.";
      if (v.length < 2) return "اسم الشركة قصير جدًا.";
      return null;
    case "phone": {
      if (!v) return "رقم الموبايل مطلوب.";
      const digits = v.replace(/[^\d]/g, "");
      if (!/^\+?[\d\s()-]+$/.test(v)) return "الرقم يحتوي على رموز غير صحيحة.";
      if (digits.length < 9 || digits.length > 15)
        return "رقم غير صحيح — اكتب الرقم بمفتاح الدولة مثل ‎+201140226705.";
      return null;
    }
    case "email":
      if (!v) return null; // optional
      if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v)) return "صيغة البريد الإلكتروني غير صحيحة.";
      return null;
    case "websiteUrl": {
      if (d.hasWebsite !== "نعم") return null;
      if (!v) return "اكتب رابط موقع شركتك الحالي.";
      try {
        const u = new URL(normalizeUrl(v));
        if (!/^https?:$/.test(u.protocol)) return "الرابط لازم يبدأ بـ http أو https.";
        if (!/^[^\s.]+\.[^\s.]{2,}/.test(u.hostname)) return "الرابط غير صحيح (مثال: example.com).";
        return null;
      } catch {
        return "الرابط غير صحيح (مثال: https://example.com).";
      }
    }
    case "day":
      if (!v) return "حدد اليوم المناسب.";
      return null;
    case "time":
      if (!v) return "حدد الوقت المناسب.";
      return null;
    case "consent":
      return d.consent ? null : "لازم توافق على إرسال البيانات على واتساب.";
    case "service":
      return v ? null : "اختر الخدمة المطلوبة.";
    case "sector":
      return v ? null : "اختر مجال نشاط شركتك.";
    case "goal":
      return v ? null : "اختر الهدف الأساسي من الموقع.";
    case "hasWebsite":
      return v ? null : "وضّح لو لدى شركتك موقع حالي.";
    case "contentStatus":
      return v ? null : "اختر حالة المحتوى.";
    case "startTime":
      return v ? null : "اختر موعد بدء التنفيذ.";
    case "notes":
    case "features":
      return null;
    default:
      return v ? null : "هذا الحقل مطلوب.";
  }

}

function buildMessage(d: Data) {
  return `مرحبًا XLANS،
أنا ${d.name.trim()} وأتواصل معكم بخصوص موقع شركتي عبر موقع XLANS.

الخدمة المطلوبة:
${d.service}

اسم الشركة:
${d.companyName.trim()}

مجال النشاط:
${d.sector}

الهدف الأساسي:
${d.goal}

هل يوجد موقع حالي؟
${d.hasWebsite}

رابط الموقع الحالي:
${d.websiteUrl ? normalizeUrl(d.websiteUrl) : "—"}

الخصائص المطلوبة:
${d.features.join("، ") || "—"}

حالة المحتوى:
${d.contentStatus}

موعد بدء التنفيذ:
${d.startTime}

طريقة التواصل المفضلة:
${d.contactMethod}

اليوم والوقت المناسب:
${d.day} — ${d.time}

رقم التواصل:
${d.phone.trim()}${d.email.trim() ? `\n\nالبريد الإلكتروني:\n${d.email.trim()}` : ""}

تفاصيل إضافية:
${d.notes.trim() || "—"}

برجاء إفادتي بالخطوة التالية والتكلفة المناسبة.`;
}


interface Props {
  open: boolean;
  onClose: () => void;
  initialService?: string;
}

export function BookingWizard({ open, onClose, initialService }: Props) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Data>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [waUrl, setWaUrl] = useState("");
  const [messageDraft, setMessageDraft] = useState("");
  const [editingMessage, setEditingMessage] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof Data, boolean>>>({});


  const generatedMessage = useMemo(() => buildMessage(data), [data]);

  useEffect(() => {
    if (open) {
      try {
        const saved = localStorage.getItem("xlans_booking");
        if (saved) setData((d) => ({ ...d, ...JSON.parse(saved) }));
      } catch {}
      if (initialService) setData((d) => ({ ...d, service: initialService }));
      setStep(1);
      setDone(false);
      setEditingMessage(false);
    }
  }, [open, initialService]);

  useEffect(() => {
    if (!open) return;
    try {
      localStorage.setItem("xlans_booking", JSON.stringify(data));
    } catch {}
  }, [data, open]);

  // Refresh preview text when reaching step 5 (unless the user is editing)
  useEffect(() => {
    if (step === 5 && !editingMessage) {
      setMessageDraft(generatedMessage);
    }
  }, [step, generatedMessage, editingMessage]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const stepFields: Record<number, (keyof Data)[]> = {
    1: ["service"],
    2: ["companyName", "sector", "goal", "hasWebsite", "websiteUrl"],
    3: ["contentStatus", "startTime"],
    4: ["name", "phone", "email", "day", "time", "contactMethod", "consent"],
  };

  const fieldError = (f: keyof Data) => (touched[f] ? validateField(f, data) : null);

  const stepErrors = (s: number) =>
    (stepFields[s] ?? []).reduce<Partial<Record<keyof Data, string>>>((acc, f) => {
      const e = validateField(f, data);
      if (e) acc[f] = e;
      return acc;
    }, {});

  const canNext = step === 5 ? messageDraft.trim().length > 10 : true;

  const goNext = () => {
    const errs = stepErrors(step);
    setTouched((t) => ({
      ...t,
      ...Object.fromEntries((stepFields[step] ?? []).map((f) => [f, true])),
    }));
    if (Object.keys(errs).length) return;
    setStep(step + 1);
  };


  const submit = () => {
    if (submitting || !canNext) return;
    setSubmitting(true);
    const text = (editingMessage ? messageDraft : generatedMessage).trim();
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    setWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    try {
      localStorage.removeItem("xlans_booking");
    } catch {}
    setDone(true);
    setSubmitting(false);
  };


  const progress = (step / TOTAL_STEPS) * 100;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-stretch justify-center bg-navy/70 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="wizard-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto flex h-[100dvh] w-full flex-col overflow-hidden bg-background shadow-2xl sm:h-auto sm:max-h-[90vh] sm:max-w-2xl sm:rounded-3xl"
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-border bg-background px-4 py-3 sm:px-7 sm:py-4">
          <div className="min-w-0">
            <p className="text-[11px] text-muted-foreground sm:text-xs">
              خطوة {step} من {TOTAL_STEPS}
            </p>
            <h3 id="wizard-title" className="mt-0.5 truncate text-sm font-bold text-foreground sm:text-lg">
              احجز استشارة مجانية
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="إغلاق"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress */}
        <div className="h-1 w-full shrink-0 bg-muted">
          <div
            className="h-full gold-gradient transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Body */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-7 sm:py-6">
          {done ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full gold-gradient">
                <Check className="h-8 w-8 text-navy" />
              </div>
              <h4 className="mt-5 text-xl font-bold text-foreground">تمام، جهزنا رسالتك</h4>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                هنحوّلك دلوقتي على واتساب لإرسالها. لو التبويب مفتحش تلقائيًا استخدم الزر التحت.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
              >
                <WhatsAppIcon className="h-5 w-5" />
                فتح واتساب يدويًا
              </a>
            </div>
          ) : (
            <>
              {step === 1 && (
                <StepCards
                  title="محتاج إيه لشركتك؟"
                  options={SERVICES}
                  value={data.service}
                  onChange={(v) => setData({ ...data, service: v })}
                />
              )}
              {step === 2 && (
                <div className="space-y-4 sm:space-y-5">
                  <Field label="اسم الشركة" error={fieldError("companyName")}>
                    <input
                      value={data.companyName}
                      onChange={(e) => setData({ ...data, companyName: e.target.value })}
                      onBlur={() => setTouched((t) => ({ ...t, companyName: true }))}
                      className="input"
                      placeholder="مثال: شركة النور للخدمات"
                      aria-invalid={!!fieldError("companyName")}
                    />
                  </Field>
                  <Field label="مجال النشاط">
                    <Select
                      options={SECTORS}
                      value={data.sector}
                      onChange={(v) => setData({ ...data, sector: v })}
                    />
                  </Field>
                  <Field label="إيه الهدف الأساسي من الموقع؟">
                    <Select
                      options={GOALS}
                      value={data.goal}
                      onChange={(v) => setData({ ...data, goal: v })}
                    />
                  </Field>
                  <Field label="هل لدى شركتك موقع حالي؟">
                    <div className="flex gap-3">
                      {["لا", "نعم"].map((v) => (
                        <button
                          key={v}
                          type="button"
                          onClick={() => setData({ ...data, hasWebsite: v })}
                          className={`min-h-12 flex-1 rounded-xl border-2 px-4 text-sm font-semibold transition ${
                            data.hasWebsite === v
                              ? "border-gold bg-gold/10 text-navy"
                              : "border-border text-foreground hover:border-gold/40"
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </Field>
                  {data.hasWebsite === "نعم" && (
                    <Field label="رابط الموقع الحالي" error={fieldError("websiteUrl")}>
                      <input
                        value={data.websiteUrl}
                        onChange={(e) => setData({ ...data, websiteUrl: e.target.value })}
                        onBlur={() => setTouched((t) => ({ ...t, websiteUrl: true }))}
                        className="input"
                        type="url"
                        inputMode="url"
                        placeholder="https://example.com"
                        dir="ltr"
                        aria-invalid={!!fieldError("websiteUrl")}
                      />
                    </Field>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 sm:space-y-5">
                  <Field label="إيه أهم الخصائص المطلوبة؟">
                    <div className="flex flex-wrap gap-2">
                      {FEATURES.map((f) => {
                        const active = data.features.includes(f);
                        return (
                          <button
                            key={f}
                            type="button"
                            onClick={() =>
                              setData({
                                ...data,
                                features: active
                                  ? data.features.filter((x) => x !== f)
                                  : [...data.features, f],
                              })
                            }
                            className={`min-h-11 rounded-full border px-4 text-sm font-medium transition ${
                              active
                                ? "border-gold bg-gold/15 text-navy"
                                : "border-border text-foreground hover:border-gold/40"
                            }`}
                          >
                            {f}
                          </button>
                        );
                      })}
                    </div>
                  </Field>
                  <Field label="هل المحتوى والصور متوفرين؟">
                    <Select
                      options={CONTENT_STATUS}
                      value={data.contentStatus}
                      onChange={(v) => setData({ ...data, contentStatus: v })}
                    />
                  </Field>
                  <Field label="موعد بدء المشروع">
                    <Select
                      options={START_TIMES}
                      value={data.startTime}
                      onChange={(v) => setData({ ...data, startTime: v })}
                    />
                  </Field>
                  <Field label="تفاصيل إضافية (اختياري)">
                    <textarea
                      value={data.notes}
                      onChange={(e) => setData({ ...data, notes: e.target.value })}
                      rows={3}
                      className="input resize-none"
                      placeholder="اكتب أي تفاصيل إضافية"
                    />
                  </Field>
                </div>
              )}
              {step === 4 && (
                <div className="space-y-4 sm:space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                    <Field label="الاسم" error={fieldError("name")}>
                      <input
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                        className="input"
                        autoComplete="name"
                        placeholder="الاسم بالكامل"
                        aria-invalid={!!fieldError("name")}
                      />
                    </Field>
                    <Field label="رقم الموبايل" error={fieldError("phone")}>
                      <input
                        value={data.phone}
                        onChange={(e) => setData({ ...data, phone: e.target.value })}
                        onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                        className="input"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        dir="ltr"
                        placeholder="+201140226705"
                        aria-invalid={!!fieldError("phone")}
                      />
                    </Field>
                  </div>
                  <Field label="البريد الإلكتروني (اختياري)" error={fieldError("email")}>
                    <input
                      value={data.email}
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      className="input"
                      type="email"
                      autoComplete="email"
                      dir="ltr"
                      placeholder="name@company.com"
                      aria-invalid={!!fieldError("email")}
                    />
                  </Field>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                    <Field label="اليوم المفضل" error={fieldError("day")}>
                      <input
                        value={data.day}
                        onChange={(e) => setData({ ...data, day: e.target.value })}
                        onBlur={() => setTouched((t) => ({ ...t, day: true }))}
                        className="input"
                        placeholder="مثال: الأحد"
                        aria-invalid={!!fieldError("day")}
                      />
                    </Field>
                    <Field label="الوقت المفضل" error={fieldError("time")}>
                      <input
                        value={data.time}
                        onChange={(e) => setData({ ...data, time: e.target.value })}
                        onBlur={() => setTouched((t) => ({ ...t, time: true }))}
                        className="input"
                        placeholder="مثال: 6 مساءً"
                        aria-invalid={!!fieldError("time")}
                      />
                    </Field>
                  </div>

                  <Field label="طريقة التواصل المفضلة">
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {CONTACT_METHODS.map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setData({ ...data, contactMethod: m })}
                          className={`min-h-12 rounded-xl border-2 px-3 text-sm font-semibold transition ${
                            data.contactMethod === m
                              ? "border-gold bg-gold/10 text-navy"
                              : "border-border text-foreground hover:border-gold/40"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </Field>
                  <label className="flex items-start gap-3 rounded-xl bg-muted/60 p-4 text-sm">
                    <input
                      type="checkbox"
                      checked={data.consent}
                      onChange={(e) => setData({ ...data, consent: e.target.checked })}
                      className="mt-1 h-5 w-5 accent-[color:var(--gold)]"
                    />
                    <span className="text-foreground">
                      أوافق على إرسال تفاصيل طلبي إلى واتساب XLANS.
                    </span>
                  </label>
                </div>
              )}
              {step === 5 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-foreground sm:text-lg">
                      معاينة الرسالة قبل الإرسال
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      دي الرسالة اللي هتتبعت على واتساب. راجعها كويس وعدّل عليها لو حابب.
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-2 rounded-xl bg-muted/60 p-3">
                    <span className="text-xs font-semibold text-foreground sm:text-sm">
                      {editingMessage ? "وضع التعديل" : "وضع المعاينة"}
                    </span>
                    <div className="flex gap-2">
                      {editingMessage && (
                        <button
                          type="button"
                          onClick={() => {
                            setMessageDraft(generatedMessage);
                          }}
                          className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground transition hover:text-foreground"
                        >
                          استرجاع الأصلية
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => setEditingMessage((v) => !v)}
                        className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-1.5 text-xs font-semibold text-navy-foreground transition hover:brightness-110"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                        {editingMessage ? "تم" : "تعديل"}
                      </button>
                    </div>
                  </div>

                  {editingMessage ? (
                    <textarea
                      value={messageDraft}
                      onChange={(e) => setMessageDraft(e.target.value)}
                      rows={14}
                      className="input min-h-[280px] resize-y whitespace-pre-wrap font-sans text-sm leading-relaxed"
                      dir="rtl"
                    />
                  ) : (
                    <div className="rounded-2xl border border-border bg-[#E7F5EA] p-4 shadow-inner">
                      <div className="max-h-[45vh] overflow-y-auto rounded-xl bg-white p-4 text-sm leading-relaxed text-navy shadow-sm">
                        <pre className="whitespace-pre-wrap break-words font-sans">{messageDraft}</pre>
                      </div>
                      <p className="mt-3 text-center text-[11px] text-muted-foreground">
                        سيتم فتح واتساب مباشرة عند الضغط على زر الإرسال.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {!done && (
          <div
            className="flex shrink-0 items-center justify-between gap-2 border-t border-border bg-cream/80 px-3 py-3 sm:gap-3 sm:px-7 sm:py-4"
            style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
          >
            <button
              type="button"
              disabled={step === 1}
              onClick={() => {
                setEditingMessage(false);
                setStep(Math.max(1, step - 1));
              }}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-xs font-semibold text-muted-foreground transition hover:text-foreground disabled:invisible sm:min-h-12 sm:px-4 sm:text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              السابق
            </button>
            {step < TOTAL_STEPS ? (
              <button
                type="button"
                disabled={!canNext}
                onClick={goNext}
                className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full navy-gradient px-5 text-sm font-bold text-navy-foreground shadow-lg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 sm:min-h-12 sm:flex-none sm:px-6"
              >
                {step === 4 ? "معاينة الرسالة" : "التالي"}
              </button>
            ) : (
              <button
                type="button"
                disabled={!canNext || submitting}
                onClick={submit}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-xs font-bold text-white shadow-lg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 sm:min-h-12 sm:px-6 sm:text-sm"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {submitting ? "جاري التجهيز…" : "إرسال على واتساب"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string | null;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-foreground">{label}</span>
      <div className={error ? "[&_.input]:border-destructive" : undefined}>{children}</div>
      {error && <span className="mt-1.5 block text-xs font-semibold text-destructive">{error}</span>}
    </label>
  );
}


function Select({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="input appearance-none bg-background bg-[left_1rem_center] bg-no-repeat pl-10"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230B1E36' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
      }}
    >
      <option value="">اختر…</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

function StepCards({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <h4 className="mb-3 text-base font-bold text-foreground sm:text-lg">{title}</h4>
      <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
        {options.map((o) => {
          const active = value === o;
          return (
            <button
              key={o}
              type="button"
              onClick={() => onChange(o)}
              className={`flex min-h-12 items-center justify-between rounded-2xl border-2 p-3 text-right text-sm font-semibold transition sm:min-h-14 sm:p-4 ${
                active
                  ? "border-gold bg-gold/10 text-navy"
                  : "border-border text-foreground hover:border-gold/40 hover:bg-muted/50"
              }`}
            >
              <span>{o}</span>
              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition sm:h-6 sm:w-6 ${
                  active ? "border-gold bg-gold" : "border-border"
                }`}
              >
                {active && <Check className="h-3.5 w-3.5 text-navy" />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
