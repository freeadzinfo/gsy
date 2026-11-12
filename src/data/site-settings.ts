import { SiteSettings, VisionMilestone } from "@/types/cms";

/**
 * Single CMS configuration object — edit figures once here and
 * they propagate site-wide across Homepage, Stats Bar, Vision 2030, and Investors.
 */
export const SITE_SETTINGS: SiteSettings = {
  companyName: {
    en: "GSY International Group",
    ar: "مجموعة جي إس واي الدولية",
  },
  tagline: {
    en: "Connecting origins to markets across Asia, the Gulf and Africa.",
    ar: "نربط مصادر الإنتاج بالأسواق عبر آسيا والخليج وأفريقيا.",
  },
  heroHeadline: {
    en: "From 7 countries to 25+ — building a US$2.5 billion group by 2030.",
    ar: "من 7 دول إلى أكثر من 25 دولة — بناء مجموعة بقيمة 2.5 مليار دولار بحلول عام 2030.",
  },
  heroSubheadline: {
    en: "One GSY Family for trade, shipping, food and supermarkets.",
    ar: "عائلة واحدة للتجارة والشحن البحري والأغذية والأسواق المركزية.",
  },
  oneLineDescription: {
    en: "GSY International Group is a Dubai-headquartered trading, shipping and food group, founded in 1974, sourcing from origin markets and supplying distributors, retailers and governments across three continents.",
    ar: "مجموعة جي إس واي الدولية هي مجموعة تجارية وشحن وغذاء مقرها الرئيسي في دبي، تأسست عام 1974، وتعمل على التوريد من أسواق المنشأ وتزويد الموزعين وتجار التجزئة والحكومات عبر ثلاث قارات.",
  },
  foundedYear: 1974,
  countriesToday: 7,
  countries2030: "25+",
  peopleCount: "350+",
  groupGoal2030: "US$2.5B",
  groupGoalAedApprox: "AED 9.2B",
  supermarketsToday: 5,
  supermarkets2030: 50,
  noorAlArabTarget2030: "AED 1B",
  hqAddress: {
    en: "Dubai International Corporate Headquarters, Dubai, United Arab Emirates (Demo Address Placeholder)",
    ar: "المقر الرئيسي للشركات، دبي، الإمارات العربية المتحدة (عنوان تجريبي)",
  },
  hqEmail: "corporate@gsyinternational-demo.com",
  hqPhone: "+971 4 000 0000 (Demo)",
};

export const WHY_GSY_POINTS = [
  {
    id: "heritage",
    title: { en: "50 years of trade", ar: "50 عاماً من التجارة" },
    detail: {
      en: "Founded in 1974, operating with multi-decade supplier and buyer relationships.",
      ar: "تأسست عام 1974 وتعمل عبر علاقات راسخة مع الموردين والمشترين لعقود.",
    },
  },
  {
    id: "origin-to-shelf",
    title: { en: "Origin-to-shelf control", ar: "تحكم كامل من المنشأ إلى الرف" },
    detail: {
      en: "Sourcing, chartering, packing, wholesale distribution and group supermarkets under one roof.",
      ar: "التوريد والشحن والتعبئة والتوزيع بالجملة والأسواق المركزية تحت مظلة واحدة.",
    },
  },
  {
    id: "corridor",
    title: { en: "Africa–GCC corridor expertise", ar: "خبرة في ممر أفريقيا – الخليج – آسيا" },
    detail: {
      en: "Deep port, customs and distributor coverage linking Asia and Africa with the Gulf.",
      ar: "تغطية عميقة للموانئ والجمارك والموزعين تربط آسيا وأفريقيا بمنطقة الخليج.",
    },
  },
  {
    id: "compliance",
    title: { en: "Bank-grade compliance and risk discipline", ar: "امتثال مصرفي وانضباط في إدارة المخاطر" },
    detail: {
      en: "Back-to-back trade structures, credit insurance, LC-backed sales, KYC and sanctions screening.",
      ar: "عقود متقابلة، ومبيعات مضمونة باعتمادات مستندية، وفحص اعرف عميلك والعقوبات.",
    },
  },
];

export const VISION_TIMELINE: VisionMilestone[] = [
  {
    year: "2026",
    phase: { en: "Base", ar: "القاعدة" },
    headline: { en: "7 countries • Holding company set up", ar: "7 دول • تأسيس الشركة القابضة" },
    details: {
      en: "Consolidation under the UAE holding structure across 7 active jurisdictions, launching Tanzania corridor.",
      ar: "توحيد الهيكل تحت الشركة القابضة في الإمارات عبر 7 أسواق نشطة، وإطلاق ممر تنزانيا.",
    },
  },
  {
    year: "2027",
    phase: { en: "Build", ar: "البناء" },
    headline: {
      en: "Saudi, Kenya, Oman, Sri Lanka; trading desks",
      ar: "السعودية، كينيا، عُمان، سريلانكا؛ مكاتب التداول",
    },
    details: {
      en: "Establishing Nairobi East Africa hub, Singapore trading and treasury desk, and Gulf retail expansion.",
      ar: "تأسيس مركز نيروبي لشرق أفريقيا، ومكتب سنغافورة للتداول والخزانة، والتوسع في الخليج.",
    },
  },
  {
    year: "2028",
    phase: { en: "Scale", ar: "التوسع" },
    headline: {
      en: "Tanzania, Nigeria, Qatar, Indonesia, Bangladesh",
      ar: "تنزانيا، نيجيريا، قطر، إندونيسيا، بنغلاديش",
    },
    details: {
      en: "West Africa office in Lagos, Abidjan and Mumbai desks, plus multi-desk commodity scaling.",
      ar: "مكتب غرب أفريقيا في لاغوس وأبيدجان ومومباي مع توسيع مكاتب السلع المتعددة.",
    },
  },
  {
    year: "2029",
    phase: { en: "Deepen", ar: "التعميق" },
    headline: {
      en: "Gulf and Africa wave; own-label foods",
      ar: "موجة الخليج وأفريقيا؛ الأغذية ذات العلامة الخاصة",
    },
    details: {
      en: "Noor Al Arab expansion across GCC, Ghana, Egypt, Thailand and Vietnam; Geneva & Johannesburg offices.",
      ar: "توسيع نور العرب عبر الخليج وغانا ومصر وتايلاند وفيتنام مع مكاتب جنيف وجوهانسبرغ.",
    },
  },
  {
    year: "2030",
    phase: { en: "Lead", ar: "الريادة" },
    headline: {
      en: "25+ countries; US$2.5B group",
      ar: "أكثر من 25 دولة؛ مجموعة بقيمة 2.5 مليار دولار",
    },
    details: {
      en: "50 retail outlets (25 UAE, 20 Malaysia, 5 hypermarkets), Dar es Salaam & São Paulo offices, EU Rotterdam entry.",
      ar: "50 متجراً (25 في الإمارات، 20 في ماليزيا، 5 هايبرماركت)، ومكاتب دار السلام وساو باولو والدخول الأوروبي عبر روتردام.",
    },
  },
];

export interface NavItemConfig {
  id: string;
  label: { en: string; ar: string };
  href: string;
  description?: { en: string; ar: string };
  featuredCta?: {
    label: { en: string; ar: string };
    href: string;
  };
  children?: Array<{
    label: { en: string; ar: string };
    description?: { en: string; ar: string };
    href: string;
    badge?: { en: string; ar: string };
  }>;
}

/**
 * Exact 9 main navigation categories specified in Management Brief v4
 */
export const MAIN_NAVIGATION: NavItemConfig[] = [
  {
    id: "about",
    label: { en: "About", ar: "عن المجموعة" },
    href: "/about",
    description: {
      en: "Five decades of international trade, Dubai holding governance and our 2030 roadmap.",
      ar: "خمسة عقود من التجارة الدولية، والحوكمة من دبي، وخارطة طريق 2030.",
    },
    featuredCta: {
      label: { en: "Explore The GSY Family Network", ar: "استكشف شبكة عائلة جي إس واي" },
      href: "/about/gsy-family",
    },
    children: [
      {
        label: { en: "Our Story", ar: "قصتنا" },
        description: { en: "Heritage since 1974 across three continents", ar: "إرث منذ عام 1974 عبر ثلاث قارات" },
        href: "/about/our-story",
      },
      {
        label: { en: "Chairman's Message", ar: "رسالة رئيس مجلس الإدارة" },
        description: { en: "Strategic direction toward US$2.5B by 2030", ar: "التوجه الاستراتيجي نحو 2.5 مليار دولار بحلول 2030" },
        href: "/about/chairmans-message",
      },
      {
        label: { en: "Leadership", ar: "القيادة التنفيذية" },
        description: { en: "Board and executive team overview", ar: "نظرة عامة على مجلس الإدارة والفريق التنفيذي" },
        href: "/about/leadership",
      },
      {
        label: { en: "Vision 2030", ar: "رؤية 2030" },
        description: { en: "2026–2030 milestones & GSY Country Engine", ar: "مراحل 2026–2030 ومحرك التوسع القطري" },
        href: "/about/vision-2030",
      },
      {
        label: { en: "Governance & Compliance", ar: "الحوكمة والامتثال" },
        description: { en: "UAE holding, Big-4 audit, KYC & risk discipline", ar: "الشركة القابضة بالإمارات، والتدقيق، وإدارة المخاطر" },
        href: "/about/governance",
      },
      {
        label: { en: "The GSY Family", ar: "عائلة جي إس واي" },
        description: { en: "Interactive network of all group entities & brands", ar: "مخطط تفاعلي لجميع شركات وعلامات المجموعة" },
        href: "/about/gsy-family",
        badge: { en: "Interactive", ar: "تفاعلي" },
      },
      {
        label: { en: "Media Gallery", ar: "معرض الصور" },
        description: { en: "Visual showcase of ports, processing units, stores & events", ar: "عرض مرئي للموانئ ومرافق التعبئة والمتاجر والفعاليات" },
        href: "/about/gallery",
      },
    ],
  },
  {
    id: "businesses",
    label: { en: "Businesses", ar: "الأعمال" },
    href: "/businesses",
    description: {
      en: "Two integrated engines: our food platform and our asset-light commodity trading house, linked by shipping.",
      ar: "محركان متكاملان: منصة غذائية متكاملة وبيت تداول سلع مرن الأصول يربطهما الشحن.",
    },
    featuredCta: {
      label: { en: "View All Divisions", ar: "عرض جميع القطاعات" },
      href: "/businesses",
    },
    children: [
      {
        label: { en: "Overview of All Divisions", ar: "نظرة عامة على القطاعات" },
        description: { en: "How our 5-step group model connects origins to retail", ar: "كيف يربط نموذج المجموعة المنشأ بالتجزئة" },
        href: "/businesses",
      },
      {
        label: { en: "Commodity Trading", ar: "تجارة السلع" },
        description: { en: "FMCG, Fertilizer, Frozen Foods, Minerals & Metals", ar: "السلع الاستهلاكية، الأسمدة، المجمدات، المعادن والفلزات" },
        href: "/businesses/commodity-trading",
      },
      {
        label: { en: "Shipping & Chartering", ar: "الشحن والتأجير البحري" },
        description: { en: "Asset-light dry bulk voyage & container freight", ar: "تأجير السفن بالرحلة والشحن بالحاويات" },
        href: "/businesses/shipping-chartering",
      },
      {
        label: { en: "Noor Al Arab", ar: "نور العرب" },
        description: { en: "Food brand, packing, private label & 1,000 SKUs", ar: "علامة غذائية وتعبئة وتوزيع لقطاع الضيافة" },
        href: "/businesses/noor-al-arab",
      },
      {
        label: { en: "Government & Tenders", ar: "الحكومات والمناقصات" },
        description: { en: "Food reserves, subsidy fertilizer & institutional supply", ar: "الاحتياطيات الغذائية ومناقصات الوزارات والمؤسسات" },
        href: "/businesses/government-tenders",
      },
      {
        label: { en: "Distribution & HORECA", ar: "التوزيع والضيافة" },
        description: { en: "Wholesale, catering and hotel supply chains", ar: "شبكات الجملة والفنادق والمطاعم والتموين" },
        href: "/businesses/distribution",
      },
      {
        label: { en: "Logistics & Supply Chain", ar: "اللوجستيات وسلاسل الإمداد" },
        description: { en: "Warehousing, cold chain, customs and port release", ar: "التخزين وسلسلة التبريد والتخليص الجمركي" },
        href: "/businesses/logistics",
      },
    ],
  },
  {
    id: "supermarkets",
    label: { en: "Supermarkets", ar: "الأسواق المركزية" },
    href: "/supermarkets",
    description: {
      en: "Growing from 5 neighbourhood stores today to 50 supermarkets and hypermarkets across UAE, Malaysia and GCC by 2030.",
      ar: "النمو من 5 متاجر اليوم إلى 50 سوبرماركت وهايبرماركت عبر الإمارات وماليزيا والخليج بحلول 2030.",
    },
    featuredCta: {
      label: { en: "Open Store Finder", ar: "افتح محدد مواقع المتاجر" },
      href: "/supermarkets/stores",
    },
    children: [
      {
        label: { en: "Supermarket Group Home", ar: "مجموعة الأسواق المركزية" },
        description: { en: "Our retail brands, growth plan & community focus", ar: "علامات التجزئة وخطة النمو لعام 2030" },
        href: "/supermarkets",
      },
      {
        label: { en: "Elite Baskets (UAE)", ar: "إيليت باسكتس (الإمارات)" },
        description: { en: "Premium supermarket format", ar: "نموذج سوبرماركت فاخر" },
        href: "/supermarkets/elite-baskets",
      },
      {
        label: { en: "GSY Supermarket (UAE)", ar: "سوبرماركت جي إس واي (الإمارات)" },
        description: { en: "Value supermarket for everyday shopping", ar: "سوبرماركت القيمة للتسوق اليومي" },
        href: "/supermarkets/gsy-supermarket",
      },
      {
        label: { en: "Supermarket Malaysia", ar: "سوبرماركت ماليزيا" },
        description: { en: "Kuala Lumpur halal, Indian & Middle Eastern ranges", ar: "تشكيلة حلال وهندية وشرق أوسطية في كوالالمبور" },
        href: "/supermarkets/supermarket-malaysia",
      },
      {
        label: { en: "Store Finder", ar: "ابحث عن متجر" },
        description: { en: "Interactive map, hours and directions", ar: "خريطة تفاعلية وساعات العمل والاتجاهات" },
        href: "/supermarkets/stores",
      },
      {
        label: { en: "Weekly Offers", ar: "العروض الأسبوعية" },
        description: { en: "Current promotional flyers by brand & country", ar: "النشرات الترويجية الحالية حسب العلامة والبلد" },
        href: "/supermarkets/offers",
      },
      {
        label: { en: "Become a Supplier", ar: "كن مورداً" },
        description: { en: "Submit product catalogues to retail buyers", ar: "تقديم كتالوجات المنتجات لفريق المشتريات" },
        href: "/supermarkets/suppliers",
      },
      {
        label: { en: "Store Partners", ar: "شركاء المتاجر" },
        description: { en: "New store sites & investment partnerships", ar: "مواقع المتاجر الجديدة وشراكات التطوير" },
        href: "/supermarkets/partners",
      },
    ],
  },
  {
    id: "presence",
    label: { en: "Global Presence", ar: "الانتشار العالمي" },
    href: "/presence",
    description: {
      en: "28 global markets spanning active hubs, China sourcing, Tanzania launch and planned 2027–2030 expansions.",
      ar: "28 سوقاً عالمياً تشمل المراكز النشطة والتوريد من الصين وتنزانيا وخطط 2027–2030.",
    },
    featuredCta: {
      label: { en: "Explore Interactive Map", ar: "استكشف الخريطة التفاعلية" },
      href: "/presence",
    },
    children: [
      {
        label: { en: "Interactive Global Map", ar: "الخريطة العالمية التفاعلية" },
        description: { en: "Live, Sourcing, Launching & Planned country directory", ar: "دليل الأسواق النشطة وقيد الإطلاق والمخططة" },
        href: "/presence",
      },
      {
        label: { en: "GSY in Africa", ar: "جي إس واي في أفريقيا" },
        description: { en: "East, West, North & Southern Africa corridor", ar: "مراكز شرق وغرب وشمال وجنوب أفريقيا" },
        href: "/presence/africa",
        badge: { en: "Key Growth", ar: "نمو رئيسي" },
      },
      {
        label: { en: "United Arab Emirates (HQ)", ar: "الإمارات العربية المتحدة (المقر)" },
        description: { en: "Group HQ, GCC trading hub & flagship retail", ar: "المقر الرئيسي للمجموعة ومركز التجارة" },
        href: "/presence/uae",
      },
      {
        label: { en: "India (Chennai Export)", ar: "الهند (مركز التصدير)" },
        description: { en: "Sourcing, export base & processing unit", ar: "مركز التوريد والتصدير ووحدة المعالجة" },
        href: "/presence/india",
      },
      {
        label: { en: "Malaysia (ASEAN Hub)", ar: "ماليزيا (مركز آسيان)" },
        description: { en: "Port Klang re-export & supermarkets", ar: "إعادة التصدير عبر ميناء كلانج والأسواق المركزية" },
        href: "/presence/malaysia",
      },
      {
        label: { en: "Tanzania (Launching)", ar: "تنزانيا (قيد الإطلاق)" },
        description: { en: "East Africa distribution via Dar es Salaam", ar: "التوزيع في شرق أفريقيا عبر دار السلام" },
        href: "/presence/tanzania",
      },
    ],
  },
  {
    id: "products",
    label: { en: "Products", ar: "المنتجات" },
    href: "/products",
    description: {
      en: "Filterable catalogue covering FMCG staples, fertilizer, frozen foods, minerals, metals and Noor Al Arab lines.",
      ar: "كتالوج منتجات شامل يشمل السلع الغذائية والأسمدة والمجمدات والمعادن ومنتجات نور العرب.",
    },
  },
  {
    id: "investors",
    label: { en: "Investors", ar: "المستثمرون" },
    href: "/investors",
    description: {
      en: "Institutional governance, Halal Investment Program and partner opportunities toward US$2.5B by 2030.",
      ar: "الحوكمة المؤسسية وبرنامج الاستثمار الحلال وفرص الشراكة نحو 2.5 مليار دولار بحلول 2030.",
    },
    children: [
      {
        label: { en: "Investor Overview", ar: "نظرة عامة للمستثمرين" },
        description: { en: "Vision 2030 strategy & holding governance", ar: "استراتيجية 2030 وحوكمة الشركة القابضة" },
        href: "/investors",
      },
      {
        label: { en: "Halal Investment Program", ar: "برنامج الاستثمار الحلال" },
        description: { en: "Asset-backed Shariah-aligned trade & food growth", ar: "تمويل تجاري وغذائي متوافق مع الشريعة" },
        href: "/investors/halal-investment",
      },
      {
        label: { en: "Partner with GSY", ar: "تشارك مع جي إس واي" },
        description: { en: "For store investors, trade banks & origin producers", ar: "لمستثمري المتاجر والبنوك والمنتجين" },
        href: "/investors/partner-with-gsy",
      },
      {
        label: { en: "Company Profile PDF", ar: "ملف الشركة التعريفي" },
        description: { en: "Downloadable group corporate profile pack", ar: "تحميل الملف التعريفي المؤسسي للمجموعة" },
        href: "/investors/company-profile",
      },
    ],
  },
  {
    id: "careers",
    label: { en: "Careers", ar: "الوظائف" },
    href: "/careers",
    description: {
      en: "Grow with 350+ colleagues across trading desks, maritime operations, food processing and retail.",
      ar: "انضم إلى أكثر من 350 موظفاً في مكاتب التداول والشحن والتصنيع الغذائي والتجزئة.",
    },
  },
  {
    id: "blog",
    label: { en: "Blog", ar: "المدونة" },
    href: "/blog",
    description: {
      en: "Group blog articles, events, trade expos and expansion updates across Asia, the Gulf and Africa.",
      ar: "مقالات المدونة والفعاليات والمعارض ومحطات التوسع عبر آسيا والخليج وأفريقيا.",
    },
  },
  {
    id: "contact",
    label: { en: "Contact", ar: "اتصل بنا" },
    href: "/contact",
    description: {
      en: "Dubai headquarters, country desks and intelligent enquiry routing across all divisions.",
      ar: "المقر الرئيسي في دبي ومكاتب الدول ونموذج توجيه الاستفسارات الذكي.",
    },
  },
];

