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
      en: "Cross-border trading across FMCG staples, fertilizer, frozen foods, minerals and metals. We connect suppliers, sourcing markets and buyers through international trading activities.",
      ar: "التجارة العابرة للحدود عبر السلع الاستهلاكية الأساسية، الأسمدة، الأغذية المجمدة، المعادن والفلزات. نربط الموردين وأسواق المنشأ والمشترين من خلال أنشطة التداول التجاري الدولي.",
    },
    whatWeDo: [
      {
        title: { en: "Structured Trading", ar: "التداول المنظم" },
        description: {
          en: "We coordinate back-to-back contracts, aligning purchase and sales transactions for each cargo.",
          ar: "ننسق عقوداً متقابلة (Back-to-back) لتوفيق معاملات الشراء والبيع لكل شحنة.",
        },
      },
      {
        title: { en: "Counterparty Assessment", ar: "تقييم الأطراف المقابلة" },
        description: {
          en: "We apply due diligence to trading counterparties and relevant supply-chain participants.",
          ar: "نطبق إجراءات العناية الواجبة على الأطراف التجارية والجهات المشاركة في سلاسل الإمداد.",
        },
      },
      {
        title: { en: "Contract & Documentation Coordination", ar: "تنسيق العقود والمستندات" },
        description: {
          en: "We coordinate commercial contracts and the documentation required for international commodity transactions.",
          ar: "ننسق العقود التجارية والمستندات اللازمة لصفقات السلع الدولية.",
        },
      },
      {
        title: { en: "Cargo Execution", ar: "تنفيذ الشحنات" },
        description: {
          en: "We coordinate the movement of goods from sourcing origins to destination markets through the relevant shipping and logistics arrangements.",
          ar: "ننسق حركة البضائع من مصادر المنشأ إلى أسواق الوجهة عبر ترتيبات الشحن والخدمات اللوجستية المناسبة.",
        },
      },
    ],
    processSteps: [
      {
        step: "01",
        title: { en: "Structured Trading", ar: "التداول المنظم" },
        detail: {
          en: "We coordinate back-to-back contracts, aligning purchase and sales transactions for each cargo.",
          ar: "ننسق عقوداً متقابلة لتوفيق معاملات الشراء والبيع لكل شحنة.",
        },
      },
      {
        step: "02",
        title: { en: "Counterparty Assessment", ar: "تقييم الأطراف المقابلة" },
        detail: {
          en: "We apply due diligence to trading counterparties and relevant supply-chain participants.",
          ar: "نطبق إجراءات العناية الواجبة على الأطراف التجارية والجهات المعنية بسلسلة الإمداد.",
        },
      },
      {
        step: "03",
        title: { en: "Contract & Documentation", ar: "تنسيق العقود والمستندات" },
        detail: {
          en: "We coordinate commercial contracts and the documentation required for international commodity transactions.",
          ar: "ننسق العقود التجارية والمستندات اللازمة لإتمام الصفقات الدولية.",
        },
      },
      {
        step: "04",
        title: { en: "Cargo Execution", ar: "تنفيذ الشحنات" },
        detail: {
          en: "We coordinate the movement of goods from sourcing origins to destination markets through the relevant shipping and logistics arrangements.",
          ar: "ننسق حركة البضائع من مصادر المنشأ إلى أسواق الوجهة عبر ترتيبات الشحن واللوجستيات.",
        },
      },
    ],
    whoWeServe: {
      en: [
        "Distributors and wholesalers",
        "Government tender requirements",
        "Refiners",
        "Mills and smelters",
        "Manufacturers",
        "Institutional and commercial buyers",
      ],
      ar: [
        "الموزعون وتجار الجملة",
        "متطلبات المناقصات الحكومية",
        "المصافي",
        "المطاحن والمصاهر",
        "الشركات المصنعة",
        "المشترون المؤسسيون والتجاريون",
      ],
    },
    complianceNotes: {
      en: [
        "KYC and sanctions screening for counterparties, origins and vessels.",
        "OECD due diligence for mineral-related trading activities.",
        "Counterparty assessment and commercial due diligence.",
        "Contract and transaction coordination.",
      ],
      ar: [
        "فحص اعرف عميلك والعقوبات للأطراف المقابلة ومصادر المنشأ والسفن.",
        "العناية الواجبة وفق معايير منظمة التعاون الاقتصادي (OECD) لأنشطة تجارة المعادن.",
        "تقييم الأطراف المقابلة والعناية الواجبة التجارية.",
        "تنسيق العقود والعمليات التجارية.",
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
      en: "The Right Vessel for Every Cargo • Coordinating cargo movement from origin to discharge.",
      ar: "السفينة المناسبة لكل شحنة • تنسيق حركة البضائع من المنشأ حتى التفريغ.",
    },
    summary: {
      en: "Voyage chartering and freight coordination for bulk, containerised and selected international cargo requirements. We support cargo movement between origin and destination markets.",
      ar: "تأجير السفن بالرحلة وتنسيق الشحن البحري للبضائع السائبة والحاويات ومتطلبات الشحن الدولية المختارة. ندعم حركة البضائع بين أسواق المنشأ والوجهات النهائية.",
    },
    whatWeDo: [
      {
        title: { en: "Dry Bulk Voyage Chartering", ar: "تأجير سفن الصب الجاف بالرحلة" },
        description: {
          en: "Voyage chartering solutions for dry bulk cargo, with vessel selection based on cargo requirements, route and availability.",
          ar: "حلول تأجير السفن بالرحلة لبضائع الصب الجافة، مع اختيار السفينة بناءً على متطلبات الشحنة والمسار والجاهزية.",
        },
      },
      {
        title: { en: "Container Freight Coordination", ar: "تنسيق شحن الحاويات" },
        description: {
          en: "Freight coordination for suitable containerised cargo volumes and international shipping requirements.",
          ar: "تنسيق الشحن لأحجام مناسبة من البضائع المشحونة في حاويات ومتطلبات الشحن الدولي.",
        },
      },
      {
        title: { en: "Port Agency & Stevedoring Coordination", ar: "تنسيق الوكالات الملاحية والشحن والتفريغ" },
        description: {
          en: "Coordination of port-related services and stevedoring requirements to support cargo handling at relevant ports.",
          ar: "تنسيق الخدمات المينائية وعمليات الشحن والتفريغ لدعم مناولة البضائع في الموانئ المعنية.",
        },
      },
      {
        title: { en: "Laytime & Demurrage Management", ar: "إدارة وقت الرسو وغرامات التأخير" },
        description: {
          en: "Coordination of laytime requirements and demurrage-related matters throughout the cargo operation.",
          ar: "تنسيق متطلبات وقت الرسو ومسائل غرامات التأخير طوال فترة عمليات الشحن.",
        },
      },
      {
        title: { en: "Cargo Inspection & Insurance Coordination", ar: "تنسيق فحص البضائع والتأمين" },
        description: {
          en: "Coordination of cargo inspection and insurance requirements as applicable to the shipment.",
          ar: "تنسيق متطلبات فحص البضائع والتأمين البحري بما ينطبق على كل شحنة.",
        },
      },
      {
        title: { en: "Third-Party Cargo Chartering", ar: "تأجير السفن لأطراف ثالثة" },
        description: {
          en: "Chartering support for third-party cargo owners, subject to confirmation of service availability and applicable licensing.",
          ar: "دعم تأجير السفن لأصحاب البضائع من الأطراف الثالثة، رهناً بتأكيد توفر الخدمة والترخيص المعمول به.",
        },
      },
    ],
    processSteps: [
      {
        step: "1",
        title: { en: "Enquiry", ar: "الاستفسار" },
        detail: {
          en: "Receive cargo details, quantity, loading and discharge ports, and laycan requirements.",
          ar: "استلام تفاصيل الشحنة، الكمية، موانئ التحميل والتفريغ، ومتطلبات فترة الجاهزية (Laycan).",
        },
      },
      {
        step: "2",
        title: { en: "Fixture", ar: "التثبيت" },
        detail: {
          en: "Screen and select a suitable vessel based on cargo and route requirements, subject to availability.",
          ar: "فحص واختيار السفينة المناسبة بناءً على متطلبات الشحنة والمسار، رهناً بالتوفر.",
        },
      },
      {
        step: "3",
        title: { en: "Loading", ar: "التحميل" },
        detail: {
          en: "Coordinate loading, inspection and relevant cargo documentation.",
          ar: "تنسيق عمليات التحميل، الفحص، ومستندات الشحن المعنية.",
        },
      },
      {
        step: "4",
        title: { en: "Voyage", ar: "الرحلة" },
        detail: {
          en: "Coordinate voyage progress and provide relevant updates.",
          ar: "متابعة سير الرحلة وتقديم التحديثات التشغيلية ذات الصلة.",
        },
      },
      {
        step: "5",
        title: { en: "Discharge", ar: "التفريغ" },
        detail: {
          en: "Coordinate discharge arrangements, port agency requirements and demurrage settlement.",
          ar: "تنسيق ترتيبات التفريغ، متطلبات الوكالة المينائية، وتسوية غرامات التأخير.",
        },
      },
    ],
    whoWeServe: {
      en: [
        "Connected Trading Requirements: Cargo requirements from the Group's trading activities help inform vessel and freight coordination.",
        "Africa Port Knowledge: A focus on relevant African trade corridors and port-related coordination.",
        "Vessel Screening: Vessel screening and sanctions compliance as part of the fixture process.",
        "Demurrage Discipline: Attention to laytime, operational coordination and demurrage-related matters.",
      ],
      ar: [
        "متطلبات التداول المترابطة: تساهم متطلبات الشحن الناتجة عن أنشطة التداول التابعة للمجموعة في توجيه عمليات تنسيق السفن والشحن.",
        "معرفة بالموانئ الأفريقية: تركيز على الممرات التجارية الأفريقية والتنسيق المينائي ذي الصلة.",
        "فحص السفن والامتثال: فحص دقيق للسفن والامتثال للعقوبات كجزء أساسي من عملية تثبيت الشحن.",
        "انضباط غرامات التأخير: اهتمام دقيق بوقت الرسو والتنسيق التشغيلي وإدارة مسائل غرامات التأخير.",
      ],
    },
    complianceNotes: {
      en: [
        "Asset-light & voyage-based: vessels chartered per cargo requirements (no owned vessels claimed)",
        "Strict vessel screening and sanctions compliance on every fixture",
        "Cargo inspection and marine insurance coordination",
        "Strict laytime and demurrage discipline",
        "Third-party cargo chartering subject to service availability and applicable licensing",
      ],
      ar: [
        "نموذج خفيف الأصول وقائم على الرحلات: استئجار السفن حسب متطلبات الشحنة (دون ادعاء ملكية سفن)",
        "فحص صارم للسفن والامتثال للعقوبات في كل عقد تثبيت",
        "تنسيق فحص البضائع والتأمين البحري",
        "انضباط تشغيلي في إدارة وقت الرسو وغرامات التأخير",
        "تأجير السفن لأطراف ثالثة مشروط بتأكيد توفر الخدمة والتراخيص اللازمة",
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
      en: "Noor Al Arab is GSY International Group’s food brand and distribution business. Building on its rice brand foundation, Noor Al Arab is expanding its product range and distribution channels to serve customers across wholesale, retail, catering and HORECA markets. Our focus is to connect food products with business customers through a growing distribution network across the UAE and selected international markets.",
      ar: "نور العرب هي العلامة التجارية للأغذية وذراع التوزيع التابع لمجموعة جي إس واي الدولية. انطلاقاً من مكانتها الراسخة كعلامة تجارية متخصصة في الأرز، تعمل نور العرب على توسيع نطاق منتجاتها وقنوات توزيعها لخدمة العملاء في أسواق الجملة والتجزئة والتموين وقطاع الضيافة. وينصب تركيزنا على ربط المنتجات الغذائية بعملاء الأعمال من خلال شبكة توزيع متنامية في دولة الإمارات العربية المتحدة وأسواق دولية مختارة.",
    },
    whatWeDo: [
      {
        title: { en: "Rice & Staple Foods", ar: "الأرز والأغذية الأساسية" },
        description: {
          en: "Extra-long basmati, parboiled rice, edible oils, flour and pulses connecting origins with wholesale and retail buyers.",
          ar: "أرز بسمتي طويل الحبة، أرز مسلوق، زيوت طعام، دقيق وبقوليات تربط مصادر المنشأ بالمشترين في الجملة والتجزئة.",
        },
      },
      {
        title: { en: "Spices & Packaged Goods", ar: "التوابل والأغذية المعبأة" },
        description: {
          en: "Whole and ground spices, tomato paste, pasta, milk powder and pantry staples in consumer and catering formats.",
          ar: "توابل وبهارات كاملة ومطحونة، معجون طماطم، معكرونة، حليب مجفف ومؤن غذائية بعبوات استهلاكية وأحجام تموين.",
        },
      },
      {
        title: { en: "HORECA & Foodservice", ar: "قطاع الضيافة والتموين" },
        description: {
          en: "Tailored bulk packaging and dependable commercial supply for hotels, restaurants, cafes and institutional caterers.",
          ar: "عبوات تموينية مخصصة وتوريد تجاري منتظم للفنادق والمطاعم والمقاهي وشركات التموين والإعاشة.",
        },
      },
      {
        title: { en: "Retail & Distribution", ar: "التجزئة والتوزيع" },
        description: {
          en: "Consumer retail shelf integration across supermarket channels, independent grocers and regional distributors.",
          ar: "حضور على رفوف المتاجر وسلاسل السوبرماركت ومتاجر البقالة المستقلة والموزعين الإقليميين.",
        },
      },
    ],
    processSteps: [
      {
        step: "01",
        title: { en: "Product Sourcing", ar: "توريد المنتجات" },
        detail: {
          en: "Sourcing staple and packaged food products from established producers and certified mills.",
          ar: "توريد الأغذية الأساسية والمعلبة من منتجين ومطاحن معتمدة.",
        },
      },
      {
        step: "02",
        title: { en: "Quality Verification", ar: "التحقق من الجودة" },
        detail: {
          en: "Food safety evaluation and quality assurance across all product categories.",
          ar: "تقييم سلامة الأغذية وضمان الجودة عبر مختلف فئات المنتجات.",
        },
      },
      {
        step: "03",
        title: { en: "Packaging & Formats", ar: "التعبئة والتغليف" },
        detail: {
          en: "Consumer retail shelf packaging and bulk foodservice formats tailored to business clients.",
          ar: "عبوات لرفوف التجزئة وأحجام تموين للعملاء التجاريين.",
        },
      },
      {
        step: "04",
        title: { en: "Channel Distribution", ar: "التوزيع عبر القنوات" },
        detail: {
          en: "Coordinated distribution to HORECA, caterers, wholesalers, supermarkets and retailers.",
          ar: "توزيع منسق لقطاع الضيافة والتموين وتجار الجملة والأسواق المركزية والتجزئة.",
        },
      },
    ],
    whoWeServe: {
      en: [
        "Hotels, Restaurants and Cafés: Food products for commercial kitchens and hospitality operations.",
        "Caterers: Product supply for catering and food-service requirements.",
        "Wholesalers: Food products for wholesale distribution and resale.",
        "Supermarkets: Product distribution for retail shelves and supermarket channels.",
        "Retailers: Food products for retail businesses.",
        "Institutions: Supply opportunities for eligible institutional buyers.",
      ],
      ar: [
        "الفنادق والمطاعم والمقاهي: منتجات غذائية للمطابخ التجارية وعمليات الضيافة.",
        "شركات التموين: توريد المنتجات لمتطلبات التموين وخدمات الأغذية.",
        "تجار الجملة: منتجات غذائية للتوزيع بالجملة وإعادة البيع.",
        "الأسواق المركزية (السوبرماركت): توزيع المنتجات لرفوف التجزئة وقنوات المتاجر الكبرى.",
        "متاجر التجزئة: منتجات غذائية للأعمال التجارية في قطاع التجزئة.",
        "المؤسسات: فرص توريد للمشترين المؤسسيين المؤهلين.",
      ],
    },
    complianceNotes: {
      en: [
        "Brand Growth Target: Ambitious target of AED 1 billion before 2030 (future brand target, not an achieved group figure)",
        "Food safety standards and quality compliance across all distribution categories",
        "Due diligence and verified partner onboarding for trade and institutional accounts",
        "Trade account enquiries routed to designated UAE, India and Malaysia commercial teams",
      ],
      ar: [
        "هدف نمو العلامة: استهداف مليار درهم إماراتي قبل عام 2030 (هدف مستقبلي للعلامة وليس رقماً محققاً حالياً)",
        "الالتزام بمعايير سلامة الأغذية والرقابة على الجودة عبر مختلف فئات المنتجات",
        "إجراءات العناية الواجبة واعتماد الشركاء التجاريين لحسابات الجملة والمؤسسات",
        "توجيه استفسارات الحسابات التجارية إلى فرق المبيعات المختصة في الإمارات والهند وماليزيا",
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
    name: { en: "Government & Tenders", ar: "المناقصات الحكومية والمؤسسية" },
    shortTitle: { en: "Government & Tenders", ar: "المناقصات الحكومية والمؤسسية" },
    heroPromise: {
      en: "Reliable Supply for Governments and Institutions",
      ar: "إمدادات موثوقة للحكومات والمؤسسات",
    },
    summary: {
      en: "GSY International Group supports government and institutional procurement requirements through the sourcing and supply of selected commodities and products. All supply arrangements are subject to tender specifications, product requirements, regulatory conditions and confirmed operating capability.",
      ar: "تدعم مجموعة جي إس واي الدولية متطلبات المشتريات الحكومية والمؤسسية من خلال توريد سلع ومنتجات مختارة. وتخضع كافة ترتيبات التوريد لمواصفات المناقصة، ومتطلبات المنتج، والشروط التنظيمية، والقدرة التشغيلية المؤكدة.",
    },
    whatWeDo: [
      {
        title: { en: "Food Reserves & Staples", ar: "الاحتياطيات الغذائية والسلع الأساسية" },
        description: {
          en: "Selected food commodities and essential staples for food procurement and institutional supply requirements.",
          ar: "سلع غذائية مختارة ومواد أساسية لمتطلبات المشتريات الغذائية والتوريد المؤسسي.",
        },
      },
      {
        title: { en: "Fertilizer", ar: "الأسمدة" },
        description: {
          en: "Fertilizer products for relevant agricultural and subsidy programmes, subject to product specifications and procurement requirements.",
          ar: "منتجات الأسمدة للبرامج الزراعية وبرامج الدعم ذات الصلة، رهناً بمواصفات المنتج ومتطلبات المشتريات.",
        },
      },
      {
        title: { en: "Construction Steel", ar: "حديد البناء والصلب الإنشائي" },
        description: {
          en: "Selected steel products for construction and infrastructure-related procurement requirements.",
          ar: "منتجات صلب مختارة لمتطلبات المشتريات المتعلقة بالبناء والبنية التحتية.",
        },
      },
      {
        title: { en: "Institutional Catering", ar: "التموين المؤسسي" },
        description: {
          en: "Food supply solutions for institutional catering requirements, subject to confirmed service scope and operating capability.",
          ar: "حلول إمداد غذائي لمتطلبات التموين المؤسسي، رهناً بنطاق الخدمة المؤكد والقدرة التشغيلية المعتمدة.",
        },
      },
    ],
    processSteps: [
      {
        step: "01",
        title: { en: "Tender Review", ar: "دراسة المناقصة" },
        detail: {
          en: "Understanding procurement specifications, regulatory criteria and product requirements.",
          ar: "فهم المواصفات الفنية للمناقصة والمعايير التنظيمية ومتطلبات المنتج.",
        },
      },
      {
        step: "02",
        title: { en: "Supply Coordination", ar: "تنسيق التوريد" },
        detail: {
          en: "Coordinating suitable supply allocations, logistics alignment and delivery schedules.",
          ar: "تنسيق مخصصات التوريد المناسبة، الترتيبات اللوجستية، وجداول التسليم.",
        },
      },
      {
        step: "03",
        title: { en: "Due Diligence & Compliance", ar: "العناية الواجبة والامتثال" },
        detail: {
          en: "Verification of documentation, tender guarantees and counterparty due diligence.",
          ar: "التحقق من الوثائق، كفالات المناقصة، وإجراءات العناية الواجبة بالأطراف.",
        },
      },
      {
        step: "04",
        title: { en: "Fulfilment & Delivery", ar: "التنفيذ والتسليم" },
        detail: {
          en: "Executing cargo movement, inspection and formal handover to designated authorities.",
          ar: "تنفيذ حركة الشحن، الفحص، والتسليم الرسمي للجهات المعنية.",
        },
      },
    ],
    whoWeServe: {
      en: [
        "Government procurement agencies",
        "Ministries of Agriculture",
        "Food reserve agencies",
        "United Nations and eligible NGO programmes",
        "Defence procurement departments",
        "Institutional buyers",
      ],
      ar: [
        "وكالات وهيئات المشتريات الحكومية",
        "وزارات الزراعة",
        "هيئات المخزون الغذائي والاحتياطي الاستراتيجي",
        "برامج الأمم المتحدة والمنظمات غير الحكومية المؤهلة",
        "إدارات المشتريات الدفاعية",
        "المشترون والمؤسسات المؤهلة",
      ],
    },
    complianceNotes: {
      en: [
        "All supply arrangements subject to tender specifications and confirmed operating capability",
        "Approved procurement information pack available to support buyer evaluation and due diligence",
        "Strict regulatory, origin and sanctions compliance across all corridors",
        "Enquiries reviewed by the dedicated GSY Government & Tenders desk",
      ],
      ar: [
        "تخضع كافة ترتيبات التوريد لمواصفات المناقصة والقدرة التشغيلية المؤكدة",
        "تتوفر حزمة معلومات المشتريات المعتمدة لدعم تقييم المشتري والعناية الواجبة",
        "امتثال صارم للأنظمة وقواعد المنشأ والعقوبات عبر كافة المسارات",
        "تتم مراجعة الاستفسارات من قِبل مكتب المناقصات الحكومية والمؤسسية المختص",
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
      en: "Distribution Solutions for Retail and HORECA",
      ar: "حلول التوزيع لقطاعي التجزئة والضيافة",
    },
    summary: {
      en: "Connecting food and FMCG products with hotels, restaurants, cafés, caterers, retailers and institutional customers through wholesale and distribution channels.",
      ar: "ربط المنتجات الغذائية والاستهلاكية بالفنادق والمطاعم والمقاهي وشركات التموين وتجار التجزئة والعملاء المؤسسيين عبر قنوات الجملة والتوزيع.",
    },
    whatWeDo: [
      {
        title: { en: "Wholesale & Bulk Supply", ar: "إمدادات الجملة والتوريد التجاري" },
        description: {
          en: "Connecting food staples and FMCG products with wholesalers, sub-distributors and commercial buyers across our key markets.",
          ar: "ربط السلع الغذائية الأساسية والمنتجات الاستهلاكية بتجار الجملة والموزعين الفرعيين والمشترين التجاريين في أسواقنا الرئيسية.",
        },
      },
      {
        title: { en: "HORECA & Foodservice", ar: "خدمة الفنادق والمطاعم والمقاهي" },
        description: {
          en: "Dedicated commercial supply and foodservice pack sizes for hotels, restaurants, cafes and institutional kitchens.",
          ar: "حلول توريد تجاري مخصصة وعبوات بأحجام تموينية مناسبة للفنادق والمطاعم والمقاهي والمطابخ المؤسسية.",
        },
      },
      {
        title: { en: "Retail & Resale Distribution", ar: "قنوات التجزئة وإعادة البيع" },
        description: {
          en: "Supplying supermarkets, independent grocers and retail operators with dependable food and consumer products.",
          ar: "تزويد الأسواق المركزية ومتاجر البقالة المستقلة ومشغلي التجزئة بالمنتجات الغذائية والاستهلاكية الموثوقة.",
        },
      },
    ],
    processSteps: [
      {
        step: "01",
        title: { en: "Demand Planning", ar: "تخطيط الطلب" },
        detail: {
          en: "Product and volume alignment with business customers based on operational requirements.",
          ar: "تنسيق متطلبات المنتجات والكميات مع عملاء الأعمال بناءً على الاحتياجات التشغيلية.",
        },
      },
      {
        step: "02",
        title: { en: "Consolidation", ar: "التجميع والتجهيز" },
        detail: {
          en: "Sourcing and staging approved food and FMCG products across distribution channels.",
          ar: "توريد وتجهيز المنتجات الغذائية والاستهلاكية المعتمدة عبر قنوات التوزيع.",
        },
      },
      {
        step: "03",
        title: { en: "Order Fulfilment", ar: "تنفيذ الطلبات" },
        detail: {
          en: "Coordinated dispatch and supply handover to client premises or designated handover points.",
          ar: "تنسيق إرسال وتسليم الشحنات إلى مقرات العملاء أو نقاط التسليم المحددة.",
        },
      },
      {
        step: "04",
        title: { en: "Account Support", ar: "دعم الحسابات" },
        detail: {
          en: "Ongoing replenishment coordination, commercial responsiveness and customer support.",
          ar: "متابعة دورية لإعادة التزويد، استجابة تجارية سريعة، ودعم مستمر للعملاء.",
        },
      },
    ],
    whoWeServe: {
      en: [
        "Hotels, Restaurants and Cafés: Food and FMCG supply requirements for businesses operating across the hospitality and food-service sectors.",
        "Caterers: Product supply requirements for catering businesses serving different customer groups and occasions.",
        "Retailers and Wholesalers: Wholesale and distribution opportunities for businesses sourcing products for resale and onward supply.",
        "Institutional Customers: Food and FMCG requirements for eligible institutional buyers, subject to product availability and agreed supply arrangements.",
      ],
      ar: [
        "الفنادق والمطاعم والمقاهي: متطلبات توريد الأغذية والسلع الاستهلاكية للشركات العاملة في قطاعي الضيافة وخدمات الطعام.",
        "شركات التموين: متطلبات توريد المنتجات لشركات التموين التي تخدم مجموعات ومناسبات متنوعة.",
        "تجار التجزئة والجملة: فرص الجملة والتوزيع للشركات التي تشتري المنتجات لإعادة البيع والتوريد الإضافي.",
        "العملاء المؤسسيون: متطلبات الأغذية والسلع الاستهلاكية للمشترين المؤسسيين المؤهلين، رهناً بتوفر المنتجات وترتيبات التوريد المتفق عليها.",
      ],
    },
    complianceNotes: {
      en: [
        "All distribution arrangements subject to confirmed operating capability and agreed supply scope",
        "Product quality, food safety compliance and dependable counterparty due diligence",
        "Enquiries reviewed and managed by the dedicated Distribution & HORECA team",
      ],
      ar: [
        "تخضع كافة ترتيبات التوزيع للقدرة التشغيلية المؤكدة ونطاق التوريد المتفق عليه",
        "الالتزام بجودة المنتجات ومعايير السلامة الغذائية وإجراءات العناية الواجبة",
        "تتم مراجعة وإدارة الاستفسارات من قِبل فريق التوزيع والضيافة المختص",
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
      en: "Coordinated Logistics and Supply Chain Support",
      ar: "دعم لوجستي منسق وسلاسل إمداد متكاملة",
    },
    summary: {
      en: "Connecting sourcing, trade and cargo movement through coordinated supply-chain activities across GSY’s business network.",
      ar: "ربط التوريد والتجارة وحركة البضائع من خلال أنشطة منسقة لسلاسل الإمداد عبر شبكة أعمال جي إس واي.",
    },
    whatWeDo: [
      {
        title: { en: "Cargo Coordination", ar: "تنسيق حركة البضائع" },
        description: {
          en: "Coordination of cargo movement in line with relevant trade and shipment requirements.",
          ar: "تنسيق حركة البضائع بما يتماشى مع متطلبات التجارة والشحن ذات الصلة.",
        },
      },
      {
        title: { en: "Documentation Support", ar: "دعم المستندات والوثائق" },
        description: {
          en: "Coordination of relevant shipment and trade documentation to support cargo movement.",
          ar: "تنسيق مستندات الشحن والتجارة المعنية لدعم حركة البضائع بسلاسة.",
        },
      },
      {
        title: { en: "Port and Freight Coordination", ar: "تنسيق الموانئ والشحن" },
        description: {
          en: "Coordination of port-related activities and freight requirements, as applicable to the shipment.",
          ar: "تنسيق الأنشطة المينائية ومتطلبات الشحن، وفق ما ينطبق على كل شحنة.",
        },
      },
      {
        title: { en: "Shipment Updates", ar: "متابعة وتحديثات الشحنات" },
        description: {
          en: "Communication and coordination of shipment-related updates throughout the relevant movement process.",
          ar: "التواصل وتنسيق التحديثات المتعلقة بالشحنة طوال مراحل عملية النقل المعنية.",
        },
      },
    ],
    processSteps: [
      {
        step: "01",
        title: { en: "Requirement Scoping", ar: "تحديد نطاق المتطلبات" },
        detail: {
          en: "Understanding cargo specifications, trade terms and agreed transaction scope.",
          ar: "فهم مواصفات الشحنة وشروط التجارة ونطاق المعاملة المتفق عليه.",
        },
      },
      {
        step: "02",
        title: { en: "Logistics Alignment", ar: "المواءمة اللوجستية" },
        detail: {
          en: "Aligning relevant cargo handlers, freight requirements and operating partners.",
          ar: "مواءمة مسؤولي مناولة البضائع ومتطلبات الشحن وشركاء الخدمة المناسبين.",
        },
      },
      {
        step: "03",
        title: { en: "Documentation & Port Flow", ar: "مسار الوثائق والموانئ" },
        detail: {
          en: "Coordinating trade documentation, port-related activities and shipment milestones.",
          ar: "تنسيق المستندات التجارية والأنشطة المينائية ومراحل سير الشحنة.",
        },
      },
      {
        step: "04",
        title: { en: "Journey Tracking & Handover", ar: "متابعة المسار والتسليم" },
        detail: {
          en: "Providing ongoing shipment updates through to destination arrival and formal handover.",
          ar: "تقديم تحديثات مستمرة عن مسار الشحنة حتى الوصول إلى الوجهة والتسليم الرسمي.",
        },
      },
    ],
    whoWeServe: {
      en: [
        "GSY Family trading, food distribution and retail business operations",
        "Third-party commercial buyers and international trading counterparties",
        "Institutional procurement programmes requiring coordinated cargo movement",
        "Suppliers and producers moving products to regional destination markets",
      ],
      ar: [
        "عمليات شركات التداول وتوزيع الأغذية والتجزئة ضمن عائلة جي إس واي",
        "المشترون التجاريون والأطراف التجارية الدولية من خارج المجموعة",
        "برامج المشتريات المؤسسية التي تتطلب تنسيق حركة البضائع",
        "الموردون والمنتجون لنقل البضائع إلى أسواق الوجهة الإقليمية",
      ],
    },
    complianceNotes: {
      en: [
        "Asset-light coordination model: services performed directly or arranged through approved partners",
        "No unverified claims of owned warehouses, fleets, trucks, vessels or container assets",
        "Service scope strictly governed by agreed transaction terms and applicable regulatory requirements",
        "Enquiries reviewed and managed by the dedicated GSY Logistics & Supply Chain team",
      ],
      ar: [
        "نموذج تنسيق خفيف الأصول: تُنفذ الخدمات مباشرة أو عبر شركاء خدمة معتمدين",
        "لا ادعاءات غير موثقة بملكية مستودعات أو أساطيل أو شاحنات أو سفن أو حاويات",
        "يخضع نطاق الخدمة بدقة لشروط المعاملة المتفق عليها والمتطلبات التنظيمية المعمول بها",
        "تتم مراجعة وإدارة الاستفسارات من قِبل فريق اللوجستيات وسلاسل الإمداد المختص",
      ],
    },
    operatingCountries: ["uae", "india", "malaysia", "singapore", "tanzania", "kenya"],
    image: "/images/cold-chain-warehouse.jpg",
    enquiryRouteLabel: {
      en: "Routed to Logistics & Supply Chain Operations",
      ar: "يُوجَّه إلى عمليات اللوجستيات وسلاسل الإمداد",
    },
  },
  {
    slug: "pets-pantry",
    name: { en: "Pets Pantry", ar: "بيتس بانتري" },
    shortTitle: { en: "Pets Pantry", ar: "بيتس بانتري" },
    isFamilyBrand: true,
    heroPromise: {
      en: "Everyday essentials for companion animals across the UAE.",
      ar: "الاحتياجات اليومية للحيوانات الأليفة في دولة الإمارات.",
    },
    summary: {
      en: "Pet food and supplies for companion animals in the UAE.",
      ar: "أغذية ومستلزمات الحيوانات الأليفة في الإمارات.",
    },
    whatWeDo: [
      {
        title: { en: "Dog & Cat Essentials", ar: "مستلزمات الكلاب والقطط" },
        description: {
          en: "Dry foods, wholesome recipes and everyday essentials supporting canine and feline wellness across all life stages.",
          ar: "أطعمة جافة ووصفات متوازنة واحتياجات يومية تدعم صحة الكلاب والقطط في كافة المراحل العمرية.",
        },
      },
      {
        title: { en: "Fish & Bird Care", ar: "رعاية الأسماك والطيور" },
        description: {
          en: "Nutritious fish flakes, pellets, bird seeds, feeders and daily habitat care supplies for domestic companions.",
          ar: "رقائق وحبيبات مغذية للأسماك، وبذور طيور ومغذيات ومستلزمات العناية بالبيئة المنزلية للطيور.",
        },
      },
      {
        title: { en: "Pet Food & Wholesome Treats", ar: "أغذية ومكافآت صحية" },
        description: {
          en: "Everyday nutrition, specialty treats, chews and training rewards curated for pet happiness and vitality.",
          ar: "تغذية يومية ومكافآت تدريب ومضغات منتقاة لتعزيز حيوية وسعادة الحيوانات الأليفة.",
        },
      },
      {
        title: { en: "Accessories & Grooming", ar: "المستلزمات والعناية" },
        description: {
          en: "Everyday pet collars, leashes, harnesses, bowls, hygiene products, brushes and essential grooming accessories.",
          ar: "أطواق ومقود وأوعية طعام ومنتجات نظافة وفرش وأدوات عناية أساسية للاستخدام اليومي.",
        },
      },
    ],
    processSteps: [
      {
        step: "01",
        title: { en: "Curated Product Sourcing", ar: "انتقاء المنتجات الموثوقة" },
        detail: {
          en: "Selecting reliable pet nutrition, everyday care essentials and proven accessory lines.",
          ar: "اختيار أغذية حيوانات موثوقة ومستلزمات رعاية يومية مجربة وعالية الجودة.",
        },
      },
      {
        step: "02",
        title: { en: "Wholesome Nutrition Focus", ar: "التركيز على الجودة والتغذية" },
        detail: {
          en: "Prioritizing verified ingredients, companion animal safety and balanced everyday nutrition.",
          ar: "إعطاء الأولوية لمكونات معتمدة وسلامة الحيوانات الأليفة والتغذية المتوازنة.",
        },
      },
      {
        step: "03",
        title: { en: "Convenient Digital & UAE Access", ar: "قنوات تسوق ملائمة بالإمارات" },
        detail: {
          en: "Serving UAE pet parents through dedicated e-commerce (petspantry.ae) and group retail networks.",
          ar: "خدمة أصحاب الحيوانات في الإمارات عبر المتجر الإلكتروني (petspantry.ae) ومنافذ التجزئة التابعة للمجموعة.",
        },
      },
      {
        step: "04",
        title: { en: "Responsive Customer Care", ar: "خدمة عملاء متفانية" },
        detail: {
          en: "Providing supportive customer care to help pet parents choose the right everyday supplies.",
          ar: "تقديم دعم متجاوب لمساعدة مربي الحيوانات في اختيار المستلزمات اليومية المناسبة.",
        },
      },
    ],
    whoWeServe: {
      en: [
        "Pet parents and companion animal owners across the UAE",
        "Dog and cat owners seeking wholesome nutrition and everyday essentials",
        "Aquarium hobbyists and pet bird owners",
        "Pet care communities and companion animal enthusiasts",
      ],
      ar: [
        "أصحاب ومربو الحيوانات الأليفة في مختلف إمارات الدولة",
        "مربو الكلاب والقطط الباحثون عن تغذية متوازنة ومستلزمات يومية موثوقة",
        "هواة أحواض الأسماك ومربو طيور الزينة",
        "مجتمعات رعاية الحيوانات الأليفة ومحبو الحيوانات المنزلية",
      ],
    },
    complianceNotes: {
      en: [
        "Compliant with UAE Ministry of Climate Change and Environment (MOCCAE) guidelines for pet food and pet supplies.",
        "Sourced from established and verified companion animal nutrition brands.",
        "Quality storage, packaging safety and product authenticity standards maintained throughout handling.",
        "Enquiries and customer support managed directly by the Pets Pantry UAE operations team.",
      ],
      ar: [
        "متوافقة مع إرشادات وزارة التغير المناخي والبيئة بدولة الإمارات بشأن أغذية ومستلزمات الحيوانات الأليفة.",
        "توريد من علامات تغذية حيوانات أليفة معتمدة وموثوقة.",
        "معايير جودة في التخزين وسلامة التغليف وأصالة المنتجات عبر كافة مراحل التداول.",
        "إدارة الاستفسارات وخدمة العملاء مباشرة عبر فريق عمليات بيتس بانتري في الإمارات.",
      ],
    },
    operatingCountries: ["uae"],
    image: "/images/brands/pets-pantry.jpg",
    enquiryRouteLabel: {
      en: "Routed to Pets Pantry UAE Team",
      ar: "يُوجَّه إلى فريق بيتس بانتري في الإمارات",
    },
  },
];

/**
 * 5 Commodity Trading Desks (exact table from Developer Brief v4 Page 7)
 */
export const COMMODITY_DESKS: CommodityDesk[] = [
  {
    id: "fmcg",
    name: { en: "FMCG Staples", ar: "السلع الاستهلاكية الأساسية" },
    summary: {
      en: "We trade essential food and fast-moving consumer goods, connecting suppliers with wholesale and distribution markets.",
      ar: "نتداول الأغذية الأساسية والسلع الاستهلاكية سريعة الدوران، ونربط الموردين بأسواق الجملة والتوزيع.",
    },
    products: {
      en: "Rice, Sugar, Edible oils, Packaged foods, Pasta, Milk powder, Tomato paste, Flour",
      ar: "الأرز، السكر، زيوت الطعام، الأغذية المعبأة، المعكرونة، الحليب المجفف، معجون الطماطم، الدقيق",
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
      en: "India, Pakistan, Thailand, Vietnam, Brazil, Malaysia, Indonesia, Turkey and Egypt.",
      ar: "الهند، باكستان، تايلاند، فيتنام، البرازيل، ماليزيا، إندونيسيا، تركيا، مصر.",
    },
    sellToLabel: {
      en: "East and West Africa, GCC and South Asia.",
      ar: "شرق وغرب أفريقيا، دول الخليج، جنوب آسيا.",
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
      en: "We connect fertilizer suppliers with agricultural and distribution markets through international trading activities.",
      ar: "نربط موردي الأسمدة بالأسواق الزراعية وأسواق التوزيع من خلال أنشطة التداول التجاري الدولي.",
    },
    products: {
      en: "Urea, Phosphates – DAP, MAP and TSP, NPK blends, Sulphur, Potash",
      ar: "اليوريا، الفوسفات – DAP و MAP و TSP، أسمدة NPK المركبة، الكبريت، البوتاس",
    },
    buyFrom: ["Saudi Arabia", "Qatar", "Oman", "Egypt", "Morocco", "Jordan"],
    sellTo: ["East Africa", "West Africa", "Bangladesh", "Sri Lanka", "India"],
    buyFromLabel: {
      en: "Saudi Arabia, Qatar, Oman, Egypt, Morocco and Jordan.",
      ar: "المملكة العربية السعودية، قطر، عُمان، مصر، المغرب، الأردن.",
    },
    sellToLabel: {
      en: "East and West Africa, Bangladesh, Sri Lanka and India.",
      ar: "شرق وغرب أفريقيا، بنغلاديش، سريلانكا، الهند.",
    },
    keySpecs: {
      en: ["Bulk and 50kg PP bagged shipments", "Timed to seasonal ministry tenders & co-op planting cycles"],
      ar: ["شحنات سائبة ومعبأة في أكياس 50 كجم", "مجدولة حسب مناقصات الوزارات ومواسم الزراعة"],
    },
  },
  {
    id: "frozen-foods",
    name: { en: "Frozen Foods", ar: "الأغذية المجمدة" },
    summary: {
      en: "Our frozen foods desk covers selected food categories for wholesale, distribution and retail supply requirements.",
      ar: "يغطي مكتب الأغذية المجمدة لدينا فئات غذائية مختارة لتلبية متطلبات التوريد لتجار الجملة والتوزيع والتجزئة.",
    },
    products: {
      en: "Poultry, Seafood, Frozen vegetables, Halal meat, Ready foods",
      ar: "الدواجن، المأكولات البحرية، الخضروات المجمدة، اللحوم الحلال، الأغذية الجاهزة",
    },
    buyFrom: ["China", "Brazil", "India", "Vietnam", "Thailand"],
    sellTo: ["GCC", "Africa", "Malaysia", "GSY Supermarkets"],
    buyFromLabel: {
      en: "China, Brazil, India, Vietnam and Thailand.",
      ar: "الصين، البرازيل، الهند، فيتنام، تايلاند.",
    },
    sellToLabel: {
      en: "GCC, Africa, Malaysia and GSY supermarket businesses.",
      ar: "دول الخليج، أفريقيا، ماليزيا، أعمال السوبرماركت لمجموعة جي إس واي.",
    },
    keySpecs: {
      en: ["Verified Halal abattoirs & -18°C unbroken reefer chain", "HORECA and retail pack formats"],
      ar: ["مسالخ حلال معتمدة وسلسلة تبريد متواصلة -18°م", "عبوات مخصصة للتجزئة وقطاع الضيافة"],
    },
  },
  {
    id: "minerals",
    name: { en: "Minerals", ar: "المعادن" },
    summary: {
      en: "We connect mineral sourcing opportunities with industrial buyers and processing markets.",
      ar: "نربط فرص توريد المعادن بالمشترين الصناعيين وأسواق المعالجة.",
    },
    products: {
      en: "Manganese, Chrome, Iron ore, Gypsum, Limestone",
      ar: "المنغنيز، الكروم، خام الحديد، الجبس، الحجر الجيري",
    },
    buyFrom: ["South Africa", "Gabon", "Ghana", "Zimbabwe", "Oman"],
    sellTo: ["China", "India", "GCC steel mills"],
    buyFromLabel: {
      en: "South Africa, Gabon, Ghana, Zimbabwe and Oman.",
      ar: "جنوب أفريقيا، الغابون، غانا، زيمبابوي، عُمان.",
    },
    sellToLabel: {
      en: "China, India and GCC steel mills.",
      ar: "الصين، الهند، مصانع الصلب في دول الخليج.",
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
      en: "Our metals desk covers selected non-ferrous and ferrous metal products for industrial and manufacturing requirements.",
      ar: "يغطي مكتب الفلزات لدينا منتجات مختارة من المعادن غير الحديدية والحديدية لتلبية الاحتياجات الصناعية والتصنيعية.",
    },
    products: {
      en: "Aluminium, Copper cathode, Steel billets, Steel rebar, Hot-rolled coil (HRC), Ferrous scrap, Non-ferrous scrap",
      ar: "الألمنيوم، كاثود النحاس، كتل الصلب (البلت)، حديد التسليح، لفائف الصلب المدرفلة على الساخن (HRC)، الخردة الحديدية، الخردة غير الحديدية",
    },
    buyFrom: ["GCC smelters", "China", "Zambia", "Turkey", "Egypt", "India"],
    sellTo: ["China", "Turkey", "India", "Pakistan", "Bangladesh", "Africa"],
    buyFromLabel: {
      en: "GCC smelters, China, Zambia, Turkey, Egypt and India.",
      ar: "مصاهر الخليج، الصين، زامبيا، تركيا، مصر، الهند.",
    },
    sellToLabel: {
      en: "China, Turkey, India, Pakistan, Bangladesh and Africa.",
      ar: "الصين، تركيا، الهند، باكستان، بنغلاديش، أفريقيا.",
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
      en: "Expanding product distribution through HORECA, wholesale, catering and retail channels.",
      ar: "توسيع توزيع المنتجات عبر قنوات الضيافة (HORECA) والجملة والتموين والتجزئة.",
    },
    target: { en: "Part of AED 1B future brand target", ar: "ضمن الهدف المستقبلي للعلامة (مليار درهم)" },
  },
  {
    market: { en: "GCC", ar: "دول الخليج" },
    plan: {
      en: "Growing Noor Al Arab products and distribution into additional GCC markets.",
      ar: "تنمية منتجات وتوزيع نور العرب في أسواق خليجية إضافية.",
    },
    target: { en: "Regional distribution expansion", ar: "توسع التوزيع في الأسواق الإقليمية" },
  },
  {
    market: { en: "India", ar: "الهند" },
    plan: {
      en: "Developing distribution supported by GSY’s India export operations.",
      ar: "تطوير التوزيع بدعم من عمليات التصدير التابعة لـ جي إس واي في الهند.",
    },
    target: { en: "Export operations integration", ar: "تكامل عمليات التصدير والتوريد" },
  },
  {
    market: { en: "Malaysia", ar: "ماليزيا" },
    plan: {
      en: "Expanding distribution connections with supermarket operations and sourcing opportunities.",
      ar: "توسيع روابط التوزيع مع عمليات الأسواق المركزية وفرص التوريد.",
    },
    target: { en: "Retail & sourcing connections", ar: "روابط التجزئة والتوريد" },
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
