export const services = [
  {
    key: "منصات الشركات",
    title: "منصات الشركات",
    description: "منصات داخلية وخارجية تُبنى حول العمليات الفعلية واحتياجات فرق العمل.",
    outcomes: ["تجربة موحدة", "صلاحيات واضحة", "قابلية للتوسع"],
  },
  {
    key: "تطبيقات الويب والموبايل",
    title: "تطبيقات الويب والموبايل",
    description: "منتجات رقمية مستقرة تسهّل الخدمة وتدعم نمو الشركة في السوق.",
    outcomes: ["أداء موثوق", "تجربة استخدام واضحة", "إطلاق مرحلي"],
  },
  {
    key: "تكامل الأنظمة",
    title: "تكامل الأنظمة",
    description: "ربط الأنظمة الحالية وتوحيد تدفق البيانات دون استبدال ما يعمل بكفاءة.",
    outcomes: ["بيانات متسقة", "تقليل الازدواجية", "رؤية تشغيلية أفضل"],
  },
  {
    key: "تحديث الأنظمة",
    title: "تحديث الأنظمة",
    description: "إعادة بناء الأنظمة القديمة تدريجيًا مع حماية استمرارية العمل.",
    outcomes: ["مخاطر أقل", "صيانة أسهل", "جاهزية للنمو"],
  },
] as const;

export const projects = [
  { flag: "🇸🇦", country: "السعودية", type: "قطاع قانوني", name: "Rewaq Law", desc: "منصة رقمية تعزز حضور المكتب وتسهل الوصول إلى خدماته القانونية.", tags: ["Lead Generation", "Corporate"], url: "https://rewaqlaw.com" },
  { flag: "🇸🇦", country: "السعودية", type: "Corporate", name: "Real Promise", desc: "حضور مؤسسي ينظم قطاعات وخدمات الشركة في تجربة واحدة واضحة.", tags: ["Corporate", "B2B"], url: "https://realpromise-eg.com/" },
  { flag: "🇸🇦", country: "السعودية", type: "حل هندسي", name: "Alafdal Engineering", desc: "منصة تجمع المبيعات والتأجير والدعم والصيانة والخدمات المساحية.", tags: ["B2B", "E-Commerce"], url: "https://alafdaleng.com" },
  { flag: "🇶🇦", country: "قطر", type: "قطاع قانوني", name: "Al Wajba Law", desc: "حضور رقمي يعكس الخبرة ويعزز الثقة ويسهّل الوصول إلى المكتب.", tags: ["Corporate", "Services"], url: "https://alwajba-law.com/" },
  { flag: "🇪🇬", country: "مصر", type: "حجز وخدمات", name: "Adelaide Barbershop", desc: "تجربة تحول زيارة الموقع إلى حجز وتواصل مباشر.", tags: ["Booking", "B2C"], url: "https://adeleidbarbershop.com/" },
  { flag: "🇪🇬", country: "مصر", type: "Personal Brand", name: "Mohamad Sultan", desc: "منصة تجمع الخبرة والأعمال والخدمات في حضور مهني واحد.", tags: ["Personal Brand", "Leads"], url: "https://mohamadsultan.com" },
  { flag: "🇪🇬", country: "مصر", type: "خدمات B2B", name: "Tyto Web", desc: "منصة تربط وكالات التسويق بقدرات تطوير كامتداد لفريق الوكالة.", tags: ["B2B", "Services"], url: "https://tytoweb.com/" },
  { flag: "🇰🇼", country: "الكويت", type: "Corporate", name: "Desquare Global", desc: "حضور مؤسسي لعلامة تعليم وتطوير يقدم نشاطها بصورة منظمة.", tags: ["Corporate", "B2B"], url: "http://desquareglobal.com/" },
  { flag: "🇪🇬", country: "مصر", type: "تجارة إلكترونية", name: "Capital Tires", desc: "تجربة شراء تعتمد على البحث بالمقاسات بدل تصفح آلاف المنتجات.", tags: ["E-Commerce", "Search"], url: "https://capitaltires-eg.com/" },
  { flag: "🇪🇬", country: "مصر", type: "منصة عقارية", name: "Capital Homes", desc: "منصة تجمع المشاريع والبحث بالمناطق لاكتشاف الاستثمار المناسب.", tags: ["Real Estate", "Search"], url: "https://capitalhomes-eg.com/" },
  { flag: "🇪🇬", country: "مصر", type: "تجارة B2B", name: "Sama Link", desc: "تنظيم آلاف منتجات الشبكات في تجربة واضحة مع بحث وتصنيفات.", tags: ["E-Commerce", "Catalog"], url: "https://sama-link.com/" },
  { flag: "🇪🇬", country: "مصر", type: "تجارة وخدمات", name: "Electro Home", desc: "منصة تجمع البيع وطلب المقايسات والتركيب والصيانة في رحلة واحدة.", tags: ["E-Commerce", "Quotes"], url: "https://electro-eg.com/" },
  { flag: "🇺🇸", country: "الولايات المتحدة", type: "كتالوج B2B", name: "NetSys US", desc: "كتالوج دولي لمنتجات الألياف والبنية التحتية للشبكات.", tags: ["B2B", "Catalog"], url: "https://netsys-us.com/" },
] as const;

export const workSteps = [
  { number: "01", title: "الاستكشاف", description: "نفهم التحدي، أصحاب المصلحة، وطريقة العمل الحالية." },
  { number: "02", title: "التحليل والتخطيط", description: "نحوّل الصورة إلى نطاق واضح وأولويات وجدول قابل للتنفيذ." },
  { number: "03", title: "المعاينة قبل التنفيذ", description: "تشاهد تصور الحل ومساراته الرئيسية قبل بدء التطوير." },
  { number: "04", title: "بدء التنفيذ", description: "نبني على مراحل قصيرة مع متابعة واضحة للتقدم والقرارات." },
  { number: "05", title: "الفاليديشن", description: "نتحقق أن ما بُني يطابق احتياج الشركة والمستخدمين الفعليين." },
  { number: "06", title: "الاختبار والمراجعة", description: "نراجع الجودة والأداء والأمان وتجربة الاستخدام قبل الاعتماد." },
  { number: "07", title: "التسليم للفريق", description: "نسلّم النظام والمعرفة والتوثيق لفريقكم بصورة منظمة." },
  { number: "08", title: "الانطلاق إلى السوق", description: "إطلاق مدروس، متابعة أولية، واستعداد للتوسع بثقة." },
] as const;