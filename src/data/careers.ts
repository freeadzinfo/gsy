import { LocalizedString, JobOpening } from "@/types/cms";

export interface CareerDepartmentInfo {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
}

export const CAREER_DEPARTMENTS: CareerDepartmentInfo[] = [
  {
    id: "Commodity Trading",
    name: { en: "Commodity Trading", ar: "تداول السلع" },
    description: {
      en: "Physical trade execution across agricultural staples, edible oils, sugar, fertilizer, minerals and metals.",
      ar: "تنفيذ صفقات التجارة الفعلية للسلع الأساسية وزيوت الطعام والسكر والأسمدة والمعادن.",
    },
  },
  {
    id: "Shipping & Chartering",
    name: { en: "Shipping & Chartering", ar: "الشحن والتأجير البحري" },
    description: {
      en: "Voyage chartering, vessel selection, port agency coordination and maritime cargo movement.",
      ar: "تأجير السفن بالرحلة واختيار السفن وتنسيق الوكالات الملاحية وحركة الشحنات البحرية.",
    },
  },
  {
    id: "Trade Finance & Treasury",
    name: { en: "Trade Finance & Treasury", ar: "التمويل التجاري والخزينة" },
    description: {
      en: "Letter of credit structuring, trade finance facilities, treasury management and liquidity planning.",
      ar: "هيكلة الاعتمادات المستندية وتسهيلات التمويل التجاري وإدارة الخزينة والسيولة.",
    },
  },
  {
    id: "Risk & Compliance",
    name: { en: "Risk & Compliance", ar: "إدارة المخاطر والامتثال" },
    description: {
      en: "Counterparty due diligence, sanction screening, contract review and board-level risk controls.",
      ar: "الفحص النافي للجهالة للأطراف المقابلة وفحص العقوبات والامتثال وضوابط المخاطر.",
    },
  },
  {
    id: "Operations & Documentation",
    name: { en: "Operations & Documentation", ar: "العمليات والوثائق التجارية" },
    description: {
      en: "Trade documentation, shipping coordination, bill of lading issuance and clearance follow-up.",
      ar: "المستندات التجارية وبوالص الشحن وتنسيق التخليص والمتابعة اللوجستية.",
    },
  },
  {
    id: "Distribution & Sales",
    name: { en: "Distribution & Sales", ar: "التوزيع والمبيعات" },
    description: {
      en: "Wholesale distribution, HORECA key accounts, food supply and FMCG sales relationships.",
      ar: "توزيع الجملة وحسابات قطاع الضيافة ومبيعات الأغذية والسلع الاستهلاكية.",
    },
  },
  {
    id: "Retail",
    name: { en: "Retail", ar: "قطاع التجزئة" },
    description: {
      en: "Supermarket operations, store management, merchandising, fresh produce and butchery.",
      ar: "عمليات المتاجر والأسواق المركزية وإدارة الفروع وتنسيق الرفوف والأقسام الطازجة.",
    },
  },
  {
    id: "Processing & Quality",
    name: { en: "Processing & Quality", ar: "المعالجة وضمان الجودة" },
    description: {
      en: "Quality assurance, packaging oversight, HACCP hygiene compliance and mill grading.",
      ar: "مراقبة الجودة والإشراف على التعبئة والتغليف والامتثال لمعايير الهاسب وفحص المطاحن.",
    },
  },
  {
    id: "Technology",
    name: { en: "Technology", ar: "التكنولوجيا والأنظمة" },
    description: {
      en: "Enterprise systems, retail POS infrastructure, supply chain tracking and digital workflows.",
      ar: "الأنظمة المؤسسية وبنية نقاط البيع بالتجزئة وتتبع سلاسل الإمداد والحلول الرقمية.",
    },
  },
  {
    id: "HR & Administration",
    name: { en: "HR & Administration", ar: "الموارد البشرية والإدارة" },
    description: {
      en: "Talent acquisition, organizational development, corporate administration and employee services.",
      ar: "استقطاب الكفاءات والتطوير المؤسسي والخدمات الإدارية ودعم شؤون الموظفين.",
    },
  },
];

export const CAREERS_DATA: JobOpening[] = [
  {
    slug: "commodity-trader-fmcg-dubai",
    title: {
      en: "Senior Commodity Trader – FMCG Staples",
      ar: "متداول سلع أول – السلع الاستهلاكية الأساسية",
    },
    department: "Commodity Trading",
    divisionSlug: "commodity-trading",
    countrySlug: "uae",
    country: { en: "UAE", ar: "الإمارات العربية المتحدة" },
    city: { en: "Dubai", ar: "دبي" },
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    employmentType: { en: "Full-time", ar: "دوام كامل" },
    experience: { en: "6+ years", ar: "6+ سنوات" },
    seniorityLevel: { en: "Senior Level", ar: "مستوى أول / متقدم" },
    closingDate: { en: "31 Dec 2026", ar: "31 ديسمبر 2026" },
    summary: {
      en: "Lead back-to-back rice, sugar and edible oil transactions across East Africa and GCC buyer corridors.",
      ar: "إدارة صفقات الأرز والسكر وزيوت الطعام بنظام العقود المتقابلة بين أسواق المنشأ وشرق أفريقيا والخليج.",
    },
    responsibilities: {
      en: [
        "Manage supplier allocations across India, Thailand, Vietnam and Brazil",
        "Structure LC-backed and credit-insured sales contracts with regional distributors",
        "Coordinate fixtures closely with the shared Dubai chartering desk",
      ],
      ar: [
        "إدارة حصص التوريد من الهند وتايلاند وفيتنام والبرازيل",
        "هيكلة عقود المبيعات المدعومة بالاعتمادات المستندية والتأمين الائتماني",
        "التنسيق المباشر مع مكتب التأجير البحري المشترك في دبي",
      ],
    },
    requirements: {
      en: [
        "Track record in physical agri-commodity trading on Africa–GCC routes",
        "Strong knowledge of GAFTA/FOSFA terms, LC documentation and KYC",
      ],
      ar: [
        "خبرة عملية في تداول السلع الزراعية عبر مسارات أفريقيا والخليج",
        "إلمام قوي بعقود التداول الدولية والاعتمادات المستندية ومتطلبات الامتثال",
      ],
    },
    isDemoPlaceholder: true,
  },
  {
    slug: "voyage-chartering-executive-dubai",
    title: {
      en: "Voyage Chartering & Operations Executive",
      ar: "مسؤول التأجير البحري والعمليات",
    },
    department: "Shipping & Chartering",
    divisionSlug: "shipping-chartering",
    countrySlug: "uae",
    country: { en: "UAE", ar: "الإمارات العربية المتحدة" },
    city: { en: "Dubai", ar: "دبي" },
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    employmentType: { en: "Full-time", ar: "دوام كامل" },
    experience: { en: "4+ years", ar: "4+ سنوات" },
    seniorityLevel: { en: "Mid-Senior Level", ar: "مستوى متوسط / متقدم" },
    closingDate: { en: "31 Dec 2026", ar: "31 ديسمبر 2026" },
    summary: {
      en: "Execute Handysize to Supramax fixtures, port agency coordination and laytime/demurrage settlement.",
      ar: "تنفيذ عقود استئجار سفن البضائع السائبة، وتنسيق الوكالات الملاحية، وحساب وقت الانتظار.",
    },
    responsibilities: {
      en: [
        "Source competitive voyage charter tonnage and screen vessels for sanctions compliance",
        "Manage load and discharge port agents across Jebel Ali, Mombasa, Dar es Salaam and Lagos",
      ],
      ar: [
        "استقطاب السفن المناسبة وفحصها من حيث الامتثال والعقوبات قبل التثبيت",
        "إدارة الوكلاء الملاحيين في جبل علي ومومباسا ودار السلام ولاغوس",
      ],
    },
    requirements: {
      en: [
        "Dry bulk chartering or post-fixture operations background",
        "Familiarity with African and Asian bulk port constraints",
      ],
      ar: [
        "خبرة في تأجير سفن البضائع الجافة السائبة أو عمليات ما بعد التثبيت",
        "معرفة بظروف الموانئ الأفريقية والآسيوية",
      ],
    },
    isDemoPlaceholder: true,
  },
  {
    slug: "horeca-sales-manager-noor-al-arab-uae",
    title: {
      en: "HORECA Key Account Manager – Noor Al Arab",
      ar: "مدير حسابات قطاع الضيافة – نور العرب",
    },
    department: "Distribution & Sales",
    divisionSlug: "noor-al-arab",
    countrySlug: "uae",
    country: { en: "UAE", ar: "الإمارات العربية المتحدة" },
    city: { en: "Dubai", ar: "دبي" },
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    employmentType: { en: "Full-time", ar: "دوام كامل" },
    experience: { en: "5+ years", ar: "5+ سنوات" },
    seniorityLevel: { en: "Managerial", ar: "مستوى إداري" },
    closingDate: { en: "15 Jan 2027", ar: "15 يناير 2027" },
    summary: {
      en: "Expand Noor Al Arab 1,000-SKU distribution across UAE hotels, central kitchens and catering accounts.",
      ar: "توسيع توزيع محفظة نور العرب (1,000 صنف) في الفنادق والمطابخ المركزية وشركات التموين بالإمارات.",
    },
    responsibilities: {
      en: [
        "Onboard hospitality groups, restaurant chains and catering buyers",
        "Forecast demand across rice, spices, oils and frozen kitchen staples",
      ],
      ar: [
        "التعاقد مع مجموعات الضيافة وسلاسل المطاعم وشركات التموين",
        "تخطيط الطلب على الأرز والتوابل والزيوت والمجمدات",
      ],
    },
    requirements: {
      en: ["UAE HORECA / foodservice sales experience", "Knowledge of Arabic & English"],
      ar: ["خبرة مبيعات في قطاع الضيافة والتموين بالإمارات", "إجادة اللغتين العربية والإنجليزية"],
    },
    isDemoPlaceholder: true,
  },
  {
    slug: "export-operations-lead-chennai-india",
    title: {
      en: "Agri Export & Quality Assurance Lead",
      ar: "مسؤول عمليات التصدير ومراقبة الجودة",
    },
    department: "Processing & Quality",
    divisionSlug: "commodity-trading",
    countrySlug: "india",
    country: { en: "India", ar: "الهند" },
    city: { en: "Chennai", ar: "تشيناي" },
    location: { en: "Chennai, India", ar: "تشيناي، الهند" },
    employmentType: { en: "Full-time", ar: "دوام كامل" },
    experience: { en: "5+ years", ar: "5+ سنوات" },
    seniorityLevel: { en: "Team Lead", ar: "رئيس فريق" },
    closingDate: { en: "15 Jan 2027", ar: "15 يناير 2027" },
    summary: {
      en: "Coordinate rice, spice and pulse procurement, milling QA and container loading from Chennai to GSY markets.",
      ar: "تنسيق توريد الأرز والتوابل والبقوليات ومراقبة الجودة وتحميل الحاويات من تشيناي إلى أسواق المجموعة.",
    },
    responsibilities: {
      en: [
        "Oversee mill grading, moisture/broken limits and phytosanitary certification",
        "Coordinate Chennai port stuffing and Noor Al Arab private-label packing runs",
      ],
      ar: [
        "الإشراف على فحص الجودة وشهادات الصحة النباتية في المطاحن",
        "تنسيق الشحن في ميناء تشيناي وخطوط تعبئة نور العرب",
      ],
    },
    requirements: {
      en: ["Experience in Indian agricultural exports and customs processes"],
      ar: ["خبرة في تصدير المنتجات الزراعية الهندية وإجراءاتها الجمركية"],
    },
    isDemoPlaceholder: true,
  },
  {
    slug: "supermarket-store-manager-uae",
    title: {
      en: "Store Manager – Elite Baskets / GSY Supermarket",
      ar: "مدير متجر – إيليت باسكتس / سوبرماركت جي إس واي",
    },
    department: "Retail",
    divisionSlug: "supermarkets",
    countrySlug: "uae",
    country: { en: "UAE", ar: "الإمارات العربية المتحدة" },
    city: { en: "Dubai", ar: "دبي" },
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    employmentType: { en: "Full-time", ar: "دوام كامل" },
    experience: { en: "5+ years", ar: "5+ سنوات" },
    seniorityLevel: { en: "Store Management", ar: "إدارة متجر" },
    closingDate: { en: "28 Feb 2027", ar: "28 فبراير 2027" },
    summary: {
      en: "Lead store P&L execution, fresh/butchery/bakery merchandising and customer service in our expanding UAE retail network.",
      ar: "إدارة عمليات المتجر اليومية وأقسام الطازج والملحمة والمخبز وخدمة العملاء ضمن شبكة التجزئة المتنامية.",
    },
    responsibilities: {
      en: [
        "Supervise store team including cashiers, butchers, bakers and merchandisers",
        "Maintain HACCP hygiene standards, promotional displays and weekly offer execution",
      ],
      ar: [
        "الإشراف على فريق المتجر من أمناء الصندوق والجزارين والخبازين ومنسقي الرفوف",
        "ضمان معايير السلامة الغذائية الهاسب وتنفيذ العروض الأسبوعية",
      ],
    },
    requirements: {
      en: ["GCC supermarket retail management experience"],
      ar: ["خبرة في إدارة متاجر التجزئة والأسواق المركزية في الخليج"],
    },
    isDemoPlaceholder: true,
  },
  {
    slug: "retail-butcher-bakery-merchandiser-malaysia",
    title: {
      en: "Halal Butcher, Baker & Store Merchandiser Roles",
      ar: "وظائف جزار حلال وخباز ومنسق بضائع",
    },
    department: "Retail",
    divisionSlug: "supermarkets",
    countrySlug: "malaysia",
    country: { en: "Malaysia", ar: "ماليزيا" },
    city: { en: "Kuala Lumpur", ar: "كوالالمبور" },
    location: { en: "Kuala Lumpur, Malaysia", ar: "كوالالمبور، ماليزيا" },
    employmentType: { en: "Full-time", ar: "دوام كامل" },
    experience: { en: "2+ years", ar: "2+ سنوات" },
    seniorityLevel: { en: "Operational / Specialist", ar: "تشغيلي / تخصصي" },
    closingDate: { en: "28 Feb 2027", ar: "28 فبراير 2027" },
    summary: {
      en: "Join Supermarket Malaysia across Kuala Lumpur stores in fresh butchery, daily bakery, cashiering and aisle merchandising.",
      ar: "انضم إلى فروع سوبرماركت ماليزيا في كوالالمبور في أقسام الملحمة الحلال والمخبز والمحاسبة وتنسيق الرفوف.",
    },
    responsibilities: {
      en: [
        "Prepare certified Halal meat cuts, fresh baked goods or manage customer checkout",
        "Keep shelves stocked with Malaysian, Indian and Middle Eastern grocery ranges",
      ],
      ar: [
        "إعداد قطعيات اللحوم الحلال والمخبوزات الطازجة وخدمة المتسوقين",
        "الحفاظ على توفر المنتجات الماليزية والهندية والشرق أوسطية على الرفوف",
      ],
    },
    requirements: {
      en: ["Relevant grocery/fresh department experience; strong customer care"],
      ar: ["خبرة مناسبة في أقسام السوبرماركت الطازجة وخدمة العملاء"],
    },
    isDemoPlaceholder: true,
  },
  {
    slug: "east-africa-distribution-coordinator-tanzania",
    title: {
      en: "East Africa Distribution & Port Coordinator",
      ar: "منسق التوزيع والموانئ – شرق أفريقيا",
    },
    department: "Distribution & Sales",
    divisionSlug: "distribution",
    countrySlug: "tanzania",
    country: { en: "Tanzania", ar: "تنزانيا" },
    city: { en: "Dar es Salaam", ar: "دار السلام" },
    location: { en: "Dar es Salaam, Tanzania (Kenya Hub Supported)", ar: "دار السلام، تنزانيا (بدعم من مركز كينيا)" },
    employmentType: { en: "Full-time", ar: "دوام كامل" },
    experience: { en: "4+ years", ar: "4+ سنوات" },
    seniorityLevel: { en: "Mid Level", ar: "مستوى متوسط" },
    closingDate: { en: "15 Jan 2027", ar: "15 يناير 2027" },
    summary: {
      en: "Support launching distribution flows for staples and FMCG through Dar es Salaam port in coordination with our East Africa hub.",
      ar: "دعم إطلاق عمليات توزيع السلع الغذائية عبر ميناء دار السلام بالتنسيق مع مركز شرق أفريقيا.",
    },
    responsibilities: {
      en: [
        "Coordinate Dar es Salaam customs clearance and regional wholesale distributor accounts",
        "Track inventory replenishment from India, Malaysia and UAE origins",
      ],
      ar: [
        "تنسيق التخليص الجمركي في ميناء دار السلام وحسابات الموزعين المحليين",
        "متابعة إعادة التزويد من الهند وماليزيا والإمارات",
      ],
    },
    requirements: {
      en: ["East African import/FMCG distribution and port logistics background"],
      ar: ["خبرة في استيراد وتوزيع السلع الاستهلاكية واللوجستيات في شرق أفريقيا"],
    },
    isDemoPlaceholder: true,
  },
  {
    slug: "minerals-trading-analyst-singapore",
    title: {
      en: "Minerals & Treasury Analyst",
      ar: "محلل تداول المعادن والخزانة",
    },
    department: "Trade Finance & Treasury",
    divisionSlug: "commodity-trading",
    countrySlug: "singapore",
    country: { en: "Singapore", ar: "سنغافورة" },
    city: { en: "Singapore", ar: "سنغافورة" },
    location: { en: "Singapore", ar: "سنغافورة" },
    employmentType: { en: "Full-time", ar: "دوام كامل" },
    experience: { en: "3+ years", ar: "3+ سنوات" },
    seniorityLevel: { en: "Analyst", ar: "محلل" },
    closingDate: { en: "31 Dec 2026", ar: "31 ديسمبر 2026" },
    summary: {
      en: "Support Singapore minerals desk operations, OECD supply-chain due diligence and trade finance coordination.",
      ar: "دعم عمليات مكتب المعادن في سنغافورة وتطبيق العناية الواجبة وتنسيق التمويل التجاري.",
    },
    responsibilities: {
      en: [
        "Manage assay verification, OECD mineral provenance checks and LC compliance",
        "Liaise with African mineral origins and buyers in China, India and GCC",
      ],
      ar: [
        "إدارة فحوصات التحليل الكيميائي والتحقق من منشأ المعادن والاعتمادات المستندية",
        "التواصل مع مصادر المعادن الأفريقية والمشترين في الصين والهند والخليج",
      ],
    },
    requirements: {
      en: ["Experience in bulk ores/metals trade finance or mineral compliance"],
      ar: ["خبرة في تمويل تجارة المعادن السائبة أو الامتثال لسلاسل التوريد"],
    },
    isDemoPlaceholder: true,
  },
];
