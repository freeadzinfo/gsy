import { BusinessDivision, CommodityDesk } from "@/types/cms";

export const BUSINESS_DIVISIONS: BusinessDivision[] = [
  {
    slug: "commodity-trading",
    name: { en: "Commodity Trading", ar: "تجارة السلع" },
    shortTitle: { en: "Commodity Trading", ar: "تجارة السلع" },
    heroPromise: {
      en: "An independent trading house on the Africa–GCC–Asia corridor.",
      ar: "بيت تداول مستقل على ممر أفريقيا – الخليج – آسيا.",
    },
    summary: {
      en: "Back-to-back physical trade across five desks: FMCG staples, Fertilizer, Frozen foods, Minerals and Metals.",
      ar: "تجارة فعلية متقابلة عبر خمسة مكاتب: السلع الاستهلاكية الأساسية، الأسمدة، الأغذية المجمدة، المعادن والفلزات.",
    },
    whatWeDo: [
      {
        title: { en: "Back-to-back execution", ar: "التنفيذ بعقود متقابلة" },
        description: {
          en: "Every cargo is sold as it is bought, supported by credit-insured buyers and LC-backed sales.",
          ar: "كل شحنة تُباع فور شرائها، مدعومة بمشترين مؤمنين ائتمانياً ومبيعات باعتمادات مستندية.",
        },
      },
      {
        title: { en: "Direct origin procurement", ar: "التوريد المباشر من المنشأ" },
        description: {
          en: "Sourcing directly from processors, mines, smelters and origin mills across India, Malaysia, China, Brazil and Africa.",
          ar: "التوريد المباشر من المصانع والمناجم والمطاحن في الهند وماليزيا والصين والبرازيل وأفريقيا.",
        },
      },
      {
        title: { en: "Bank-grade compliance", ar: "امتثال مصرفي صارم" },
        description: {
          en: "KYC and sanctions screening on every counterparty, origin and vessel, plus OECD due diligence for minerals.",
          ar: "فحص اعرف عميلك والعقوبات لكل طرف ومنشأ وسفينة، مع العناية الواجبة لمنظمة التعاون الاقتصادي للمعادن.",
        },
      },
      {
        title: { en: "Integrated chartering", ar: "تأجير بحري متكامل" },
        description: {
          en: "Seamless execution with GSY Shipping & Chartering for dry bulk and containerised movements.",
          ar: "تنفيذ متكامل مع مكتب جي إس واي للشحن والتأجير البحري للشحن السائب والحاويات.",
        },
      },
    ],
    processSteps: [
      {
        step: "01",
        title: { en: "Origin Allocation", ar: "تخصيص المنشأ" },
        detail: {
          en: "Grade specification & mill/supplier allocation",
          ar: "تحديد المواصفات وتخصيص الموردين والمصانع",
        },
      },
      {
        step: "02",
        title: { en: "KYC & Credit Cover", ar: "الامتثال والتغطية الائتمانية" },
        detail: {
          en: "Counterparty screening, sanctions check & LC structuring",
          ar: "فحص الأطراف والعقوبات وهيكلة الاعتماد المستندي",
        },
      },
      {
        step: "03",
        title: { en: "Vessel Fixture", ar: "تثبيت الشحن" },
        detail: {
          en: "Chartering desk books vessel or volume container slots",
          ar: "حجز السفينة أو مساحات الحاويات عبر مكتب التأجير",
        },
      },
      {
        step: "04",
        title: { en: "Inspection & Docs", ar: "الفحص والمستندات" },
        detail: {
          en: "Pre-shipment SGS/survey verification and trade finance release",
          ar: "فحص الجودة قبل الشحن وإصدار مستندات التمويل التجاري",
        },
      },
      {
        step: "05",
        title: { en: "Port Discharge", ar: "التفريغ والتسليم" },
        detail: {
          en: "Arrival clearance and delivery to wholesalers, mills or tenders",
          ar: "التخليص في ميناء الوصول والتسليم للمشترين",
        },
      },
    ],
    whoWeServe: {
      en: [
        "Distributors and wholesalers",
        "Government tenders (food reserves, subsidy fertilizer, steel)",
        "Refiners, steel mills and smelters",
      ],
      ar: [
        "الموزعون وتجار الجملة",
        "المناقصات الحكومية (الاحتياطيات الغذائية، الأسمدة، الصلب)",
        "المصافي ومصانع الصلب والمصاهر",
      ],
    },
    complianceNotes: {
      en: [
        "Back-to-back contracts: every cargo is sold as it is bought",
        "Credit-insured buyers and LC-backed sales",
        "KYC and sanctions screening on every counterparty, origin and vessel",
        "OECD due diligence for minerals",
      ],
      ar: [
        "عقود متقابلة: كل شحنة تُباع عند شرائها",
        "مشترون مؤمنون ائتمانياً ومبيعات مدعومة باعتمادات مستندية",
        "فحص اعرف عميلك والعقوبات على كل طرف ومنشأ وسفينة",
        "تطبيق معايير العناية الواجبة لمنظمة التعاون الاقتصادي للمعادن",
      ],
    },
    operatingCountries: ["uae", "india", "malaysia", "singapore", "china", "tanzania", "kenya", "nigeria"],
    image: "/images/commodity-trading.jpg",
    enquiryRouteLabel: {
      en: "Routed to Commodity Trading Desk (Dubai & Singapore)",
      ar: "يُوجَّه إلى مكتب تجارة السلع (دبي وسنغافورة)",
    },
  },
  {
    slug: "shipping-chartering",
    name: { en: "Shipping & Chartering", ar: "الشحن والتأجير البحري" },
    shortTitle: { en: "Shipping & Chartering", ar: "الشحن والتأجير" },
    heroPromise: {
      en: "GSY Shipping & Chartering — the right vessel for every cargo, from origin to discharge.",
      ar: "جي إس واي للشحن والتأجير — السفينة المناسبة لكل شحنة، من المنشأ حتى التفريغ.",
    },
    summary: {
      en: "Asset-light and fleet-flexible: we charter the right vessel for every cargo, serving group desks and approved third-party cargo owners.",
      ar: "تشغيل مرن دون أصول ثقيلة: نستأجر السفينة المناسبة لكل شحنة لخدمة مكاتب المجموعة وأصحاب البضائع المعتمدين.",
    },
    whatWeDo: [
      {
        title: { en: "Dry bulk voyage chartering", ar: "تأجير سفن البضائع السائبة" },
        description: {
          en: "Handysize to Supramax voyage chartering matched precisely to parcel size, draft restrictions and port schedules.",
          ar: "تأجير سفن البضائع الجافة السائبة (من هانديزايز إلى سوبراماكس) حسب حجم الشحنة وقيود الميناء.",
        },
      },
      {
        title: { en: "Container freight at volume rates", ar: "الشحن بالحاويات بأسعار الكميات" },
        description: {
          en: "Contracted space across major shipping lines for containerised FMCG, packaged foods and reefer cargo.",
          ar: "تعاقدات حجمية مع الخطوط الملاحية الكبرى للسلع الاستهلاكية والأغذية المبردة والمجمدة.",
        },
      },
      {
        title: { en: "Port agency & stevedoring coordination", ar: "تنسيق الوكالات الملاحية والشحن والتفريغ" },
        description: {
          en: "Coordinated port agency, stevedoring, laytime and demurrage management across East & West Africa, GCC and Asia.",
          ar: "إدارة شاملة لعمليات الوكالة الملاحية والشحن والتفريغ ووقت الانتظار وغرامات التأخير.",
        },
      },
      {
        title: { en: "Third-party cargo chartering*", ar: "تأجير السفن لأطراف ثالثة*" },
        description: {
          en: "Opening group freight volume and port know-how to external cargo owners (*subject to final UAE trade licence scope confirmation).",
          ar: "إتاحة قدرات التأجير لشحنات الغير (*رهناً بتأكيد نطاق الرخصة التجارية في الإمارات).",
        },
      },
    ],
    processSteps: [
      {
        step: "1",
        title: { en: "Enquiry", ar: "الاستفسار" },
        detail: { en: "Cargo, ports, laycan", ar: "نوع الشحنة والموانئ وفترة التحميل" },
      },
      {
        step: "2",
        title: { en: "Fixture", ar: "التثبيت" },
        detail: { en: "Vessel screened and fixed", ar: "فحص السفينة وتثبيت العقد" },
      },
      {
        step: "3",
        title: { en: "Loading", ar: "التحميل" },
        detail: { en: "Inspection, documents", ar: "الفحص الميداني والمستندات" },
      },
      {
        step: "4",
        title: { en: "Voyage", ar: "الإبحار" },
        detail: { en: "Tracking and updates", ar: "تتبع الرحلة والتحديثات" },
      },
      {
        step: "5",
        title: { en: "Discharge", ar: "التفريغ" },
        detail: { en: "Port agency, demurrage settled", ar: "إجراءات الميناء وتسوية التأخير" },
      },
    ],
    whoWeServe: {
      en: [
        "GSY Commodity Trading desks across FMCG, Fertilizer, Frozen, Minerals and Metals",
        "Noor Al Arab and GSY Supermarket Group import consignments",
        "Approved third-party commodity and industrial cargo owners (subject to trade licence confirmation)",
      ],
      ar: [
        "مكاتب تداول السلع في المجموعة عبر القطاعات الخمسة",
        "شحنات الاستيراد لعلامة نور العرب ومجموعة الأسواق المركزية",
        "أصحاب البضائع الخارجيين المعتمدين (وفق تأكيد الترخيص)",
      ],
    },
    complianceNotes: {
      en: [
        "Fleet-flexible and asset-light: we charter the right vessel for every cargo (no owned vessels claimed)",
        "Vessel screening and sanctions compliance on every fixture",
        "Cargo inspection and marine insurance coordination",
        "Strict laytime and demurrage discipline",
      ],
      ar: [
        "تشغيل مرن وخفيف الأصول: نستأجر السفينة المناسبة لكل شحنة",
        "فحص شامل للسفن والامتثال للعقوبات في كل عقد شحن",
        "تنسيق فحص البضائع والتأمين البحري",
        "انضباط صارم في حساب وقت الانتظار وغرامات التأخير",
      ],
    },
    operatingCountries: ["uae", "kenya", "tanzania", "nigeria", "india", "malaysia"],
    image: "/images/shipping-vessel.jpg",
    enquiryRouteLabel: {
      en: "Routed to Shared Chartering Desk (Dubai)",
      ar: "يُوجَّه إلى مكتب التأجير البحري المشترك (دبي)",
    },
  },
  {
    slug: "noor-al-arab",
    name: { en: "Noor Al Arab", ar: "نور العرب" },
    shortTitle: { en: "Food & Brands (Noor Al Arab)", ar: "نور العرب والأغذية" },
    isFamilyBrand: true,
    heroPromise: {
      en: "Noor Al Arab — trusted food for homes, kitchens and caterers.",
      ar: "نور العرب — غذاء موثوق للمنازل والمطابخ وشركات التموين.",
    },
    summary: {
      en: "Growing from a heritage rice brand into the group's integrated food distribution business, targeting AED 1 billion before 2030.",
      ar: "تتوسع من علامة أرز عريقة إلى ذراع التوزيع الغذائي المتكامل للمجموعة بهدف الوصول إلى مليار درهم قبل 2030.",
    },
    whatWeDo: [
      {
        title: { en: "1,000-SKU Food Portfolio", ar: "محفظة من 1,000 صنف غذائي" },
        description: {
          en: "Basmati and parboiled rice, spices, pulses, edible oils, pasta, tomato paste, milk powder and specialty HORECA packs.",
          ar: "الأرز البسمتي والمسلوق، التوابل، البقوليات، زيوت الطعام، المعكرونة، معجون الطماطم، الحليب المجفف وعبوات الضيافة.",
        },
      },
      {
        title: { en: "Packing & Private Label", ar: "التعبئة والعلامات الخاصة" },
        description: {
          en: "Origin-packed consumer retail SKUs alongside bulk foodservice formats tailored to distributors and supermarkets.",
          ar: "تعبئة للمستهلك النهائي من المنشأ إلى جانب عبوات التموين للموزعين والأسواق المركزية.",
        },
      },
      {
        title: { en: "Origin-Linked Sourcing", ar: "توريد مرتبط بمصادر المجموعة" },
        description: {
          en: "Supplied by GSY Export (India) for rice and spices and Malaysia operations for palm oil and halal food ranges.",
          ar: "مدعومة بشركة التصدير في الهند للأرز والتوابل وعمليات ماليزيا لزيت النخيل والأغذية الحلال.",
        },
      },
      {
        title: { en: "Retail Shelf Integration", ar: "التكامل مع رفوف متاجرنا" },
        description: {
          en: "Featured across Elite Baskets, GSY Supermarket and Supermarket Malaysia as well as third-party retail.",
          ar: "حاضرة على رفوف متاجر إيليت باسكتس وسوبرماركت جي إس واي وماليزيا إضافةً إلى الأسواق الخارجية.",
        },
      },
    ],
    processSteps: [
      {
        step: "01",
        title: { en: "Origin Harvest", ar: "الاختيار من المنشأ" },
        detail: { en: "India, Malaysia & global certified mills", ar: "مطاحن ومصانع معتمدة في الهند وماليزيا" },
      },
      {
        step: "02",
        title: { en: "Quality & Halal QA", ar: "الجودة وشهادات الحلال" },
        detail: { en: "HACCP, ISO & Halal batch testing", ar: "فحوصات الجودة وفق معايير الهاسب والأيزو والحلال" },
      },
      {
        step: "03",
        title: { en: "Packing & Private Label", ar: "التعبئة والتغليف" },
        detail: { en: "Consumer packs & bulk HORECA sacks", ar: "عبوات التجزئة وأكياس التموين والضيافة" },
      },
      {
        step: "04",
        title: { en: "HORECA & Wholesale", ar: "التوزيع والضيافة" },
        detail: { en: "Direct delivery to kitchens, hotels & distributors", ar: "توصيل مباشر للفنادق والمطاعم والموزعين" },
      },
    ],
    whoWeServe: {
      en: [
        "Hotels, restaurants and cafes (HORECA)",
        "Catering companies and labour/staff camps",
        "Regional wholesalers and cash-and-carry",
        "Supermarkets (including GSY Supermarket Group)",
        "Public and private institutions",
      ],
      ar: [
        "الفنادق والمطاعم والمقاهي",
        "شركات التموين والإعاشة",
        "تجار الجملة الإقليميون",
        "الأسواق المركزية (بما فيها متاجر المجموعة)",
        "المؤسسات العامة والخاصة",
      ],
    },
    complianceNotes: {
      en: [
        "AED 1 billion brand revenue target before 2030 (2030 target, not claimed as achieved)",
        "HACCP, ISO and Halal quality assurance standards",
        "Direct traceability back to group origin companies",
      ],
      ar: [
        "هدف علامة نور العرب: مليار درهم قبل 2030 (هدف مستقبلي وليس رقماً محققاً حالياً)",
        "معايير الجودة والسلامة الغذائية: الهاسب والأيزو والحلال",
        "تتبع كامل للمنتجات حتى شركات المنشأ التابعة للمجموعة",
      ],
    },
    operatingCountries: ["uae", "india", "malaysia", "saudi-arabia", "oman", "qatar"],
    image: "/images/noor-al-arab.jpg",
    enquiryRouteLabel: {
      en: "Routed to UAE, India or Malaysia Noor Al Arab Sales Team",
      ar: "يُوجَّه إلى فريق مبيعات نور العرب في الإمارات أو الهند أو ماليزيا",
    },
  },
  {
    slug: "government-tenders",
    name: { en: "Government & Tenders", ar: "الحكومات والمناقصات" },
    shortTitle: { en: "Government & Tenders", ar: "الحكومات والمناقصات" },
    heroPromise: {
      en: "Reliable supply for governments and institutions.",
      ar: "إمدادات موثوقة للحكومات والمؤسسات والهيئات الدولية.",
    },
    summary: {
      en: "Structured public-sector procurement across strategic food reserves, agricultural fertilizer subsidies, construction steel and institutional catering.",
      ar: "توريد منظم لمناقصات القطاع العام في الاحتياطيات الغذائية، وبرامج دعم الأسمدة، وحديد البناء، والإعاشة المؤسسية.",
    },
    whatWeDo: [
      {
        title: { en: "Food reserves & staples", ar: "الاحتياطيات الغذائية والسلع الأساسية" },
        description: {
          en: "Bulk rice, sugar, cooking oils, flour and pulses delivered under sovereign reserve schedules.",
          ar: "توريد الأرز والسكر والزيوت والدقيق والبقوليات لخطط المخزون الاستراتيجي.",
        },
      },
      {
        title: { en: "Fertilizer for subsidy programmes", ar: "الأسمدة لبرامج الدعم الزراعي" },
        description: {
          en: "Urea, DAP, MAP, TSP, NPK blends and potash timed precisely to national planting seasons.",
          ar: "اليوريا والفوسفات والأسمدة المركبة المنسقة بدقة مع مواسم الزراعة الوطنية.",
        },
      },
      {
        title: { en: "Construction steel", ar: "حديد وصلب البناء" },
        description: {
          en: "Billets, rebar and HRC supporting national infrastructure and public works agencies.",
          ar: "القضبان والصلب الإنشائي لمشاريع البنية التحتية والأشغال العامة.",
        },
      },
      {
        title: { en: "Institutional catering supply", ar: "التموين الغذائي المؤسسي" },
        description: {
          en: "Consistent bulk food rations for defence, hospitals, education and humanitarian aid agencies.",
          ar: "توفير الحصص الغذائية المنتظمة لجهات الدفاع والمستشفيات والمنظمات الإغاثية.",
        },
      },
    ],
    processSteps: [
      {
        step: "01",
        title: { en: "Tender Review", ar: "دراسة المناقصة" },
        detail: { en: "Specs, bond terms & delivery windows", ar: "مراجعة المواصفات الفنية والكفالات وجداول التسليم" },
      },
      {
        step: "02",
        title: { en: "Origin & Freight Lock", ar: "تثبيت المنشأ والشحن" },
        detail: { en: "Back-to-back allocation & vessel scheduling", ar: "تخصيص المنشأ وجدولة السفن" },
      },
      {
        step: "03",
        title: { en: "Compliance & Guarantees", ar: "الامتثال والضمانات" },
        detail: { en: "Performance bonds, KYC & pre-shipment inspection", ar: "ضمانات حسن التنفيذ والفحص المسبق" },
      },
      {
        step: "04",
        title: { en: "In-Country Handover", ar: "التسليم الميداني" },
        detail: { en: "Port discharge, customs & ministry depot delivery", ar: "التفريغ والتخليص والتسليم في مستودعات الجهة" },
      },
    ],
    whoWeServe: {
      en: [
        "National food reserve agencies",
        "Ministries of agriculture and farm co-ops",
        "UN and international NGO relief programmes",
        "Defence and institutional catering buyers",
      ],
      ar: [
        "هيئات المخزون الغذائي الاستراتيجي",
        "وزارات الزراعة والجمعيات التعاونية",
        "برامج الأمم المتحدة والمنظمات غير الحكومية",
        "جهات الدفاع ومشتري التموين المؤسسي",
      ],
    },
    complianceNotes: {
      en: [
        "Procurement pack available with trade licences, certifications (HACCP, ISO, Halal), bank reference and corporate profile",
        "Full sanctions and origin compliance per international tender standards",
      ],
      ar: [
        "ملف تأهيل المشتريات يشمل الرخص التجارية والشهادات (الهاسب والأيزو والحلال) والمرجع البنكي",
        "امتثال كامل لمعايير العقوبات وقواعد المنشأ في المناقصات الدولية",
      ],
    },
    operatingCountries: ["uae", "kenya", "tanzania", "nigeria", "bangladesh", "sri-lanka"],
    image: "/images/fertilizer-agri.jpg",
    enquiryRouteLabel: {
      en: "Routed to Government & Tenders Desk",
      ar: "يُوجَّه إلى مكتب المناقصات والحكومات",
    },
  },
  {
    slug: "distribution",
    name: { en: "Distribution & HORECA", ar: "التوزيع والضيافة" },
    shortTitle: { en: "Distribution & HORECA", ar: "التوزيع والضيافة" },
    heroPromise: {
      en: "Multi-channel wholesale, cash-and-carry and HORECA supply across key corridors.",
      ar: "شبكات توزيع متعددة القنوات لقطاع الجملة والفنادق والمطاعم والتموين.",
    },
    summary: {
      en: "Connecting imported staples, Noor Al Arab lines and frozen ranges directly into local wholesalers, hotels, restaurants and catering kitchens.",
      ar: "ربط السلع المستوردة ومنتجات نور العرب والمجمدات مباشرة بتجار الجملة والفنادق والمطاعم ومطابخ الإعاشة.",
    },
    whatWeDo: [
      {
        title: { en: "Regional Wholesale Networks", ar: "شبكات الجملة الإقليمية" },
        description: {
          en: "Structured importer-to-wholesaler delivery across UAE, Malaysia and expanding African country companies.",
          ar: "توزيع منظم من المستورد إلى تاجر الجملة في الإمارات وماليزيا والأسواق الأفريقية.",
        },
      },
      {
        title: { en: "HORECA & Foodservice", ar: "خدمة الفنادق والمطاعم والمقاهي" },
        description: {
          en: "Dedicated account management and kitchen-pack SKUs for hotels, central kitchens and caterers.",
          ar: "إدارة حسابات متخصصة وعبوات مناسبة للمطابخ المركزية والفنادق.",
        },
      },
      {
        title: { en: "Country Company Engine", ar: "نموذج الشركات القُطرية" },
        description: {
          en: "Each new GSY market builds local wholesale and distribution channels before scaling into processing and retail.",
          ar: "تبني كل شركة قُطرية شبكة توزيع وجملة محلية قبل التوسع نحو التصنيع والتجزئة.",
        },
      },
    ],
    processSteps: [
      {
        step: "01",
        title: { en: "Demand Planning", ar: "تخطيط الطلب" },
        detail: { en: "Monthly SKU forecasting with buyers", ar: "تقدير الطلب الشهري مع المشترين" },
      },
      {
        step: "02",
        title: { en: "Consolidation", ar: "التجميع" },
        detail: { en: "Multi-origin stock staged at hub warehouses", ar: "تجميع المخزون في مستودعات المراكز" },
      },
      {
        step: "03",
        title: { en: "Last-Mile Dispatch", ar: "التوصيل النهائي" },
        detail: { en: "Ambient & cold-chain fleet delivery", ar: "أسطول توصيل جاف ومبرد" },
      },
      {
        step: "04",
        title: { en: "Account Support", ar: "دعم الحسابات" },
        detail: { en: "Replenishment & promotional alignment", ar: "إعادة التزويد وتنسيق العروض" },
      },
    ],
    whoWeServe: {
      en: [
        "Regional food wholesalers and sub-distributors",
        "Hospitality groups, restaurants and catering kitchens",
        "Independent grocers and cooperative societies",
      ],
      ar: [
        "تجار الجملة والموزعون الفرعيون",
        "مجموعات الضيافة والمطاعم ومطابخ التموين",
        "البقالات المستقلة والجمعيات التعاونية",
      ],
    },
    complianceNotes: {
      en: [
        "Distribution is our core competitive moat across each market",
        "Temperature-controlled handling and batch traceability",
      ],
      ar: [
        "التوزيع هو الميزة التنافسية الأساسية في كل سوق نعمل به",
        "مناولة مبردة ومضبوطة الحرارة مع تتبع كامل للتشغيلات",
      ],
    },
    operatingCountries: ["uae", "malaysia", "india", "tanzania", "kenya", "uk"],
    image: "/images/elite-baskets-fresh.jpg",
    enquiryRouteLabel: {
      en: "Routed to Distribution & HORECA Team",
      ar: "يُوجَّه إلى فريق التوزيع والضيافة",
    },
  },
  {
    slug: "logistics",
    name: { en: "Logistics & Supply Chain", ar: "اللوجستيات وسلاسل الإمداد" },
    shortTitle: { en: "Logistics & Supply Chain", ar: "اللوجستيات والإمداد" },
    heroPromise: {
      en: "Port clearance, cold-chain storage and cross-border supply execution.",
      ar: "التخليص المينائي والتخزين المبرد وتنفيذ سلاسل الإمداد العابرة للحدود.",
    },
    summary: {
      en: "Coordinating port operations, customs documentation, bonded warehousing and ambient/frozen inventory movement across key trade gateways.",
      ar: "تنسيق عمليات الموانئ والمستندات الجمركية والمستودعات المبردة والجافة عبر الممرات التجارية الرئيسية.",
    },
    whatWeDo: [
      {
        title: { en: "Customs & Port Clearance", ar: "التخليص الجمركي والمينائي" },
        description: {
          en: "Streamlined release through Jebel Ali, Port Klang, Chennai, Mombasa, Dar es Salaam and West African gateways.",
          ar: "تخليص سريع عبر موانئ جبل علي، بورت كلانج، تشيناي، مومباسا، دار السلام ولاغوس.",
        },
      },
      {
        title: { en: "Ambient & Cold Storage", ar: "التخزين الجاف والمبرد" },
        description: {
          en: "Hub storage capacity for dry staples, frozen meats/seafood and retail replenishment.",
          ar: "سعات تخزين للسلع الجافة واللحوم والمأكولات البحرية المجمدة وتزويد المتاجر.",
        },
      },
      {
        title: { en: "Quality & Inventory Control", ar: "مراقبة الجودة والمخزون" },
        description: {
          en: "FIFO stock management, moisture monitoring and halal segregation across distribution nodes.",
          ar: "إدارة المخزون وضبط الرطوبة والفصل الحلال عبر مراكز التوزيع.",
        },
      },
    ],
    processSteps: [
      {
        step: "01",
        title: { en: "Port Arrival", ar: "وصول الميناء" },
        detail: { en: "Pre-arrival customs filing", ar: "إيداع البيانات الجمركية مسبقاً" },
      },
      {
        step: "02",
        title: { en: "Gate Release", ar: "الفسح والإفراج" },
        detail: { en: "Inspection & port haulage", ar: "الفحص والنقل من الميناء" },
      },
      {
        step: "03",
        title: { en: "Hub Storage", ar: "التخزين المركزي" },
        detail: { en: "Ambient, chilled or -18°C frozen", ar: "تخزين جاف أو مبرد أو مجمد -18°م" },
      },
      {
        step: "04",
        title: { en: "Dispatch", ar: "التوزيع" },
        detail: { en: "Scheduled order fulfillment", ar: "تنفيذ الطلبات المجدولة" },
      },
    ],
    whoWeServe: {
      en: [
        "GSY Family trading, food distribution and supermarket companies",
        "Institutional and cross-border wholesale clients",
      ],
      ar: [
        "شركات التداول والغذاء والأسواق المركزية في عائلة جي إس واي",
        "العملاء المؤسسيون وشركاء الجملة العابرون للحدود",
      ],
    },
    complianceNotes: {
      en: [
        "Strict cold-chain integrity and customs documentation accuracy",
        "Seamless handoff from GSY Shipping & Chartering",
      ],
      ar: [
        "الحفاظ الصارم على سلسلة التبريد ودقة المستندات الجمركية",
        "تكامل سلس مع عمليات مكتب الشحن والتأجير البحري",
      ],
    },
    operatingCountries: ["uae", "india", "malaysia", "singapore", "tanzania", "kenya"],
    image: "/images/cold-chain-warehouse.jpg",
    enquiryRouteLabel: {
      en: "Routed to Logistics & Supply Chain Operations",
      ar: "يُوجَّه إلى عمليات اللوجستيات وسلاسل الإمداد",
    },
  },
];

/**
 * 5 Commodity Trading Desks (exact table from Developer Brief v4 Page 7)
 */
export const COMMODITY_DESKS: CommodityDesk[] = [
  {
    id: "fmcg",
    name: { en: "FMCG staples", ar: "السلع الاستهلاكية الأساسية" },
    summary: {
      en: "Core agricultural and packaged food staples traded in bulk and containerised formats.",
      ar: "السلع الزراعية والغذائية الأساسية المتداولة بكميات سائبة وحاويات.",
    },
    products: {
      en: "Rice, sugar, edible oils, packaged foods (pasta, milk powder, tomato paste, flour)",
      ar: "الأرز، السكر، زيوت الطعام، الأغذية المعبأة (المعكرونة، الحليب المجفف، معجون الطماطم، الدقيق)",
    },
    buyFrom: [
      "India",
      "Pakistan",
      "Thailand",
      "Vietnam",
      "Brazil",
      "Malaysia",
      "Indonesia",
      "Turkey",
      "Egypt",
    ],
    sellTo: ["East Africa", "West Africa", "GCC", "South Asia"],
    buyFromLabel: {
      en: "India, Pakistan, Thailand, Vietnam, Brazil, Malaysia, Indonesia, Turkey, Egypt",
      ar: "الهند، باكستان، تايلاند، فيتنام، البرازيل، ماليزيا، إندونيسيا، تركيا، مصر",
    },
    sellToLabel: {
      en: "East and West Africa, GCC, South Asia",
      ar: "شرق وغرب أفريقيا، دول الخليج، جنوب آسيا",
    },
    keySpecs: {
      en: ["Breakbulk 12,500–50,000 MT parcels & 20ft/40ft FCL", "SGS/Intertek weight & quality certification"],
      ar: ["شحنات سائبة من 12,500 إلى 50,000 طن وحاويات كاملة", "شهادات الفحص والوزن من SGS/Intertek"],
    },
  },
  {
    id: "fertilizer",
    name: { en: "Fertilizer", ar: "الأسمدة" },
    summary: {
      en: "Crop nutrients and raw sulphur sourced from Gulf and North African producers for agricultural corridors.",
      ar: "الأسمدة الزراعية والكبريت المورّدة من منتجي الخليج وشمال أفريقيا للأسواق الزراعية.",
    },
    products: {
      en: "Urea, phosphates (DAP, MAP, TSP), NPK blends, sulphur, potash",
      ar: "اليوريا، الفوسفات (DAP, MAP, TSP)، خلائط NPK، الكبريت، البوتاس",
    },
    buyFrom: ["Saudi Arabia", "Qatar", "Oman", "Egypt", "Morocco", "Jordan"],
    sellTo: ["East Africa", "West Africa", "Bangladesh", "Sri Lanka", "India"],
    buyFromLabel: {
      en: "Saudi Arabia, Qatar, Oman, Egypt, Morocco, Jordan",
      ar: "السعودية، قطر، عُمان، مصر، المغرب، الأردن",
    },
    sellToLabel: {
      en: "East and West Africa, Bangladesh, Sri Lanka, India",
      ar: "شرق وغرب أفريقيا، بنغلاديش، سريلانكا، الهند",
    },
    keySpecs: {
      en: ["Bulk and 50kg PP bagged shipments", "Timed to seasonal ministry tenders & co-op planting cycles"],
      ar: ["شحنات سائبة ومعبأة في أكياس 50 كجم", "مجدولة حسب مناقصات الوزارات ومواسم الزراعة"],
    },
  },
  {
    id: "frozen-foods",
    name: { en: "Frozen foods", ar: "الأغذية المجمدة" },
    summary: {
      en: "Temperature-controlled reefer protein, seafood and frozen produce serving Gulf, African and group retail buyers.",
      ar: "البروتينات والمأكولات البحرية والخضروات المجمدة بالحاويات المبردة لأسواق الخليج وأفريقيا ومتاجرنا.",
    },
    products: {
      en: "Poultry, seafood, frozen vegetables, halal meat, ready foods",
      ar: "الدواجن، المأكولات البحرية، الخضروات المجمدة، اللحوم الحلال، الأغذية الجاهزة",
    },
    buyFrom: ["China", "Brazil", "India", "Vietnam", "Thailand"],
    sellTo: ["GCC", "Africa", "Malaysia", "GSY Supermarkets"],
    buyFromLabel: {
      en: "China, Brazil, India, Vietnam, Thailand",
      ar: "الصين، البرازيل، الهند، فيتنام، تايلاند",
    },
    sellToLabel: {
      en: "GCC, Africa, Malaysia, our own supermarkets",
      ar: "دول الخليج، أفريقيا، ماليزيا، أسواقنا المركزية",
    },
    keySpecs: {
      en: ["Verified Halal abattoirs & -18°C unbroken reefer chain", "HORECA and retail pack formats"],
      ar: ["مسالخ حلال معتمدة وسلسلة تبريد متواصلة -18°م", "عبوات مخصصة للتجزئة وقطاع الضيافة"],
    },
  },
  {
    id: "minerals",
    name: { en: "Minerals", ar: "المعادن والخامات" },
    summary: {
      en: "Industrial and steelmaking ores originated across Africa and Oman under OECD due diligence.",
      ar: "خامات التعدين وصناعة الصلب من أفريقيا وعُمان وفق معايير العناية الواجبة لمنظمة التعاون الاقتصادي.",
    },
    products: {
      en: "Manganese, chrome, iron ore, gypsum, limestone; critical minerals from 2028",
      ar: "المنغنيز، الكروم، خام الحديد، الجبس، الحجر الجيري؛ والمعادن الحرجة اعتباراً من 2028",
    },
    buyFrom: ["South Africa", "Gabon", "Ghana", "Zimbabwe", "Oman"],
    sellTo: ["China", "India", "GCC steel mills"],
    buyFromLabel: {
      en: "South Africa, Gabon, Ghana, Zimbabwe, Oman",
      ar: "جنوب أفريقيا، الغابون، غانا، زيمبابوي، عُمان",
    },
    sellToLabel: {
      en: "China, India, GCC steel mills",
      ar: "الصين، الهند، مصانع الصلب في الخليج",
    },
    keySpecs: {
      en: ["OECD Due Diligence Guidance compliance", "Handysize/Supramax bulk fixtures from African & Omani ports"],
      ar: ["الالتزام بإرشادات العناية الواجبة لمنظمة التعاون الاقتصادي", "شحن سائب عبر موانئ أفريقيا وعُمان"],
    },
  },
  {
    id: "metals",
    name: { en: "Metals", ar: "الفلزات" },
    summary: {
      en: "Primary non-ferrous metals, semi-finished steel and recycled scrap for mills and smelters.",
      ar: "المعادن غير الحديدية الأولية والصلب نصف المصنع والخردة المعدنية للمصانع والمصاهر.",
    },
    products: {
      en: "Aluminium, copper cathode, steel (billets, rebar, HRC), ferrous and non-ferrous scrap",
      ar: "الألمنيوم، كاثود النحاس، الصلب (القوالب، حديد التسليح، اللفائف المدرفلة)، الخردة الحديدية وغير الحديدية",
    },
    buyFrom: ["GCC smelters", "China", "Zambia", "Turkey", "Egypt", "India"],
    sellTo: ["China", "Turkey", "India", "Pakistan", "Bangladesh", "Africa"],
    buyFromLabel: {
      en: "GCC smelters, China, Zambia, Turkey, Egypt, India",
      ar: "مصاهر الخليج، الصين، زامبيا، تركيا، مصر، الهند",
    },
    sellToLabel: {
      en: "China, Turkey, India, Pakistan, Bangladesh, Africa",
      ar: "الصين، تركيا، الهند، باكستان، بنغلاديش، أفريقيا",
    },
    keySpecs: {
      en: ["LME-grade copper & primary aluminium sourcing", "Back-to-back LC structures with steel mills & infrastructure buyers"],
      ar: ["توريد النحاس والألمنيوم بمواصفات قياسية عالمية", "عقود متقابلة باعتمادات مستندية لمصانع الصلب"],
    },
  },
];

export const NOOR_AL_ARAB_PLAN = [
  {
    market: { en: "UAE", ar: "الإمارات" },
    plan: {
      en: "Distribution of 1,000 SKUs through a HORECA network, wholesale, catering supply and retail",
      ar: "توزيع 1,000 صنف عبر شبكة الضيافة والجملة والتموين والتجزئة",
    },
    target: { en: "Part of AED 1B brand target", ar: "جزء من هدف مليار درهم للعلامة" },
  },
  {
    market: { en: "GCC", ar: "دول الخليج" },
    plan: {
      en: "Expanding Noor Al Arab products and distribution into other GCC countries",
      ar: "توسيع منتجات وتوزيع نور العرب إلى باقي دول مجلس التعاون الخليجي",
    },
    target: { en: "Part of AED 1B brand target", ar: "جزء من هدف مليار درهم للعلامة" },
  },
  {
    market: { en: "India", ar: "الهند" },
    plan: {
      en: "Noor Al Arab distribution, supplied by our own India export company",
      ar: "توزيع نور العرب مدعوماً بشركة التصدير التابعة للمجموعة في الهند",
    },
    target: { en: "₹200 crore turnover a year", ar: "200 كرور روبية مبيعات سنوية" },
  },
  {
    market: { en: "Malaysia", ar: "ماليزيا" },
    plan: {
      en: "Noor Al Arab distribution, linked to Supermarket Malaysia and palm-oil sourcing",
      ar: "توزيع نور العرب المرتبط بسوبرماركت ماليزيا وتوريد زيت النخيل",
    },
    target: { en: "US$100M distribution", ar: "توزيع بقيمة 100 مليون دولار" },
  },
];

export const SHIPPING_KEY_PORTS = [
  { name: "Jebel Ali", country: "UAE", region: { en: "GCC Hub", ar: "مركز الخليج" } },
  { name: "Mombasa", country: "Kenya", region: { en: "East Africa", ar: "شرق أفريقيا" } },
  { name: "Dar es Salaam", country: "Tanzania", region: { en: "East Africa", ar: "شرق أفريقيا" } },
  { name: "Djibouti", country: "Djibouti", region: { en: "Horn of Africa", ar: "القرن الأفريقي" } },
  { name: "Lagos", country: "Nigeria", region: { en: "West Africa", ar: "غرب أفريقيا" } },
  { name: "Abidjan", country: "Côte d'Ivoire", region: { en: "West Africa", ar: "غرب أفريقيا" } },
  { name: "Chennai", country: "India", region: { en: "South Asia", ar: "جنوب آسيا" } },
  { name: "Port Klang", country: "Malaysia", region: { en: "ASEAN", ar: "آسيان" } },
];
