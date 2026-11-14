import { LocalizedString, ProductItem } from "@/types/cms";

export interface ProductCategoryInfo {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
}

export const PRODUCT_CATEGORIES: ProductCategoryInfo[] = [
  {
    id: "Rice",
    title: { en: "Rice", ar: "الأرز" },
    description: {
      en: "Basmati and non-basmati rice varieties for wholesale, export and trade requirements. Final product listings and specifications are subject to approval.",
      ar: "أصناف أرز البسمتي وغير البسمتي لمتطلبات تجارة الجملة والتصدير والتجارة الدولية. تخضع قوائم المنتجات والمواصفات النهائية للموافقة.",
    },
    image: "/images/noor-al-arab.jpg",
  },
  {
    id: "Sugar",
    title: { en: "Sugar", ar: "السكر" },
    description: {
      en: "Sugar products for wholesale and trade enquiries.",
      ar: "منتجات السكر لاستفسارات تجارة الجملة والتجارة العامة.",
    },
    image: "/images/commodity-trading.jpg",
  },
  {
    id: "Edible Oils",
    title: { en: "Edible Oils", ar: "زيوت الطعام" },
    description: {
      en: "Edible oil categories handled by GSY’s trading activities.",
      ar: "فئات زيوت الطعام التي تديرها أنشطة التجارة الدولية في جي إس واي.",
    },
    image: "/images/commodity-trading.jpg",
  },
  {
    id: "Pulses & Spices",
    title: { en: "Pulses & Spices", ar: "البقوليات والتوابل" },
    description: {
      en: "Pulses and spices connected to GSY’s food and rice-export portfolio. Detailed product listings are subject to confirmation.",
      ar: "البقوليات والتوابل المرتبطة بمحفظة تصدير الأغذية والأرز في جي إس واي. تخضع قوائم المنتجات التفصيلية للتأكيد.",
    },
    image: "/images/commodity-trading.jpg",
  },
  {
    id: "Packaged Foods",
    title: { en: "Packaged Foods", ar: "الأغذية المعبأة" },
    description: {
      en: "Packaged food categories including pasta, milk powder, tomato paste and flour.",
      ar: "فئات الأغذية المعبأة بما في ذلك المعكرونة والحليب المجفف ومعجون الطماطم والدقيق.",
    },
    image: "/images/elite-baskets-fresh.jpg",
  },
  {
    id: "Frozen Foods",
    title: { en: "Frozen Foods", ar: "الأغذية المجمدة" },
    description: {
      en: "Frozen food categories including poultry, seafood, frozen vegetables, halal meat and ready foods. Specific products and availability are subject to confirmation.",
      ar: "فئات الأغذية المجمدة بما في ذلك الدواجن والمأكولات البحرية والخضروات المجمدة واللحوم الحلال والأغذية الجاهزة. تخضع المنتجات المحددة وتوفرها للتأكيد.",
    },
    image: "/images/cold-chain-warehouse.jpg",
  },
  {
    id: "Fertilizer",
    title: { en: "Fertilizer", ar: "الأسمدة" },
    description: {
      en: "Fertilizer categories including urea, phosphates, NPK blends, sulphur and potash.",
      ar: "فئات الأسمدة بما في ذلك اليوريا والفوسفات وخلائط NPK والكبريت والبوتاس.",
    },
    image: "/images/fertilizer-agri.jpg",
  },
  {
    id: "Minerals & Metals",
    title: { en: "Minerals & Metals", ar: "المعادن والفلزات" },
    description: {
      en: "Selected minerals, ores and metals, including aluminium, copper cathode, steel and scrap.",
      ar: "معادن وخامات وفلزات مختارة، تشمل الألمنيوم وكاثود النحاس وحديد البناء والخردة.",
    },
    image: "/images/minerals-metals.jpg",
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "prod-noor-basmati",
    skuCode: "NAA-RIC-001",
    name: {
      en: "Noor Al Arab Extra Long Basmati Rice",
      ar: "أرز بسمتي نور العرب طويل الحبة الفاخر",
    },
    category: "Rice",
    divisionSlug: "noor-al-arab",
    brandOrDivision: {
      en: "Noor Al Arab (Food Brand & Distribution)",
      ar: "نور العرب (علامة وتوزيع الأغذية)",
    },
    description: {
      en: "Extra-long grain premium basmati rice aged for authentic aroma and slender cooking texture, supplied for retail and catering.",
      ar: "أرز بسمتي فاخر طويل الحبة معتق للنكهة العطرية الأصيلة وقوام الطهي المتناسق، متاح للتجزئة والتموين.",
    },
    specifications: {
      en: "Moisture max 12.5%, average pre-cooking grain length 8.35mm+, 100% sortexed cleaned.",
      ar: "رطوبة قصوى 12.5%، متوسط طول الحبة قبل الطهي 8.35 ملم+، منقى آلياً 100%.",
    },
    origins: ["India"],
    destinations: {
      en: "UAE, GCC, Malaysia, UK, Retail Supermarkets",
      ar: "الإمارات، الخليج، ماليزيا، المملكة المتحدة، المتاجر",
    },
    packaging: {
      en: "2 kg, 5 kg, 10 kg retail packs & 35 kg HORECA bags",
      ar: "عبوات 2 و5 و10 كجم للتجزئة وأكياس 35 كجم للضيافة",
    },
    certifications: ["HACCP", "ISO", "Halal"],
    isNoorAlArab: true,
    image: "/images/noor-al-arab.jpg",
    enquiryRoute: "Noor Al Arab Sales Team",
  },
  {
    id: "prod-fmcg-rice",
    skuCode: "TRD-FMCG-101",
    name: {
      en: "Bulk Parboiled, White & Broken Rice",
      ar: "الأرز المسلوق والأبيض والكسور بكميات تجارية",
    },
    category: "Rice",
    divisionSlug: "commodity-trading",
    brandOrDivision: {
      en: "Commodity Trading Desk",
      ar: "مكتب تداول السلع",
    },
    description: {
      en: "Basmati and non-basmati rice varieties for wholesale, export and trade requirements. Final product listings and specifications subject to approval.",
      ar: "أصناف أرز البسمتي وغير البسمتي لمتطلبات تجارة الجملة والتصدير والتجارة الدولية.",
    },
    specifications: {
      en: "Standard export grading, inspection-certified specifications per contract.",
      ar: "درجات تصدير قياسية ومواصفات خاضعة للتفتيش المعتمد وفق عقد الصفقة.",
    },
    origins: ["India", "Pakistan", "Thailand", "Vietnam"],
    destinations: {
      en: "East & West Africa, GCC, South Asia",
      ar: "شرق وغرب أفريقيا، الخليج، جنوب آسيا",
    },
    packaging: {
      en: "25 kg / 50 kg PP bags (FCL or breakbulk vessel)",
      ar: "أكياس 25 / 50 كجم (حاويات أو شحن بحري سائب)",
    },
    certifications: ["SGS", "Halal"],
    image: "/images/commodity-trading.jpg",
    enquiryRoute: "Commodity Trading Desk",
  },
  {
    id: "prod-fmcg-sugar",
    skuCode: "TRD-FMCG-104",
    name: {
      en: "ICUMSA 45 White Refined & Raw Sugar",
      ar: "السكر الأبيض المكرر والخام (ICUMSA 45)",
    },
    category: "Sugar",
    divisionSlug: "commodity-trading",
    brandOrDivision: {
      en: "Commodity Trading Desk",
      ar: "مكتب تداول السلع",
    },
    description: {
      en: "Sugar products for wholesale and trade enquiries, including white refined cane sugar and raw sugar.",
      ar: "منتجات السكر لاستفسارات تجارة الجملة والتجارة العامة، بما في ذلك السكر الأبيض المكرر والسكر الخام.",
    },
    specifications: {
      en: "Polarization 99.80% min, moisture 0.04% max, color ICUMSA 45 max.",
      ar: "درجة استقطاب 99.80% كحد أدنى، رطوبة 0.04% كحد أقصى، مؤشر اللون 45 كحد أقصى.",
    },
    origins: ["Brazil", "India", "Thailand"],
    destinations: {
      en: "East & West Africa, GCC, South Asia",
      ar: "شرق وغرب أفريقيا، الخليج، جنوب آسيا",
    },
    packaging: {
      en: "50 kg PP woven bags & bulk parcels",
      ar: "أكياس 50 كجم وشحنات سائبة",
    },
    certifications: ["SGS", "ISO"],
    image: "/images/commodity-trading.jpg",
    enquiryRoute: "Commodity Trading Desk",
  },
  {
    id: "prod-noor-oil",
    skuCode: "NAA-OIL-008",
    name: {
      en: "Noor Al Arab Refined Cooking & Palm Oils",
      ar: "زيوت الطهي المكررة وزيت النخيل — نور العرب",
    },
    category: "Edible Oils",
    divisionSlug: "noor-al-arab",
    brandOrDivision: {
      en: "Noor Al Arab & Commodity Trading",
      ar: "نور العرب وتداول السلع",
    },
    description: {
      en: "Edible oil categories handled by GSY’s trading activities, including sunflower, corn oil and refined palm olein.",
      ar: "فئات زيوت الطعام التي تديرها أنشطة التجارة الدولية في جي إس واي، وتشمل زيت دوار الشمس والذرة وزيت النخيل المكرر.",
    },
    specifications: {
      en: "Free fatty acids max 0.1%, IV 56-58, crystal clear at room temperature.",
      ar: "أحماض دهنية حرة 0.1% كحد أقصى، وقيمة يود 56-58، نقاء تام في درجة حرارة الغرفة.",
    },
    origins: ["Malaysia", "Indonesia"],
    destinations: {
      en: "UAE, GCC, East & West Africa, Malaysia",
      ar: "الإمارات، الخليج، شرق وغرب أفريقيا، ماليزيا",
    },
    packaging: {
      en: "1 L, 1.8 L, 5 L PET bottles & 20 L HORECA jerrycans",
      ar: "عبوات 1 و1.8 و5 لتر وجالون 20 لتر للضيافة",
    },
    certifications: ["Halal", "ISO", "HACCP"],
    isNoorAlArab: true,
    image: "/images/commodity-trading.jpg",
    enquiryRoute: "Noor Al Arab Sales Team",
  },
  {
    id: "prod-noor-spices",
    skuCode: "NAA-SPC-014",
    name: {
      en: "Noor Al Arab Whole & Ground Spices Collection",
      ar: "تشكيلة توابل وبهارات نور العرب الكاملة والمطحونة",
    },
    category: "Pulses & Spices",
    divisionSlug: "noor-al-arab",
    brandOrDivision: {
      en: "Noor Al Arab (Food Brand & Distribution)",
      ar: "نور العرب (علامة وتوزيع الأغذية)",
    },
    description: {
      en: "Pulses and spices connected to GSY’s food and rice-export portfolio. Detailed product listings are subject to confirmation.",
      ar: "البقوليات والتوابل المرتبطة بمحفظة تصدير الأغذية والأرز في جي إس واي. تخضع قوائم المنتجات التفصيلية للتأكيد.",
    },
    specifications: {
      en: "Steam sterilized, lab-tested purity, free from artificial additives or adulterants.",
      ar: "معقمة بالبخار، خاضعة لفحص النقاء المخبري، خالية من الإضافات الاصطناعية.",
    },
    origins: ["India", "Vietnam"],
    destinations: {
      en: "UAE, GCC, Malaysia, HORECA",
      ar: "الإمارات، الخليج، ماليزيا، قطاع الضيافة",
    },
    packaging: {
      en: "200 g, 500 g retail pouches & 1 kg/5 kg catering tubs",
      ar: "عبوات 200 و500 جم للتجزئة و1 و5 كجم للتموين",
    },
    certifications: ["HACCP", "ISO", "Halal"],
    isNoorAlArab: true,
    image: "/images/commodity-trading.jpg",
    enquiryRoute: "Noor Al Arab Sales Team",
  },
  {
    id: "prod-noor-tomato-pasta",
    skuCode: "NAA-PAN-042",
    name: {
      en: "Noor Al Arab Tomato Paste, Pasta & Milk Powder",
      ar: "معجون الطماطم والمعكرونة والحليب المجفف — نور العرب",
    },
    category: "Packaged Foods",
    divisionSlug: "noor-al-arab",
    brandOrDivision: {
      en: "Noor Al Arab (Food Brand & Distribution)",
      ar: "نور العرب (علامة وتوزيع الأغذية)",
    },
    description: {
      en: "Packaged food categories including pasta, milk powder, tomato paste and flour.",
      ar: "فئات الأغذية المعبأة بما في ذلك المعكرونة والحليب المجفف ومعجون الطماطم والدقيق.",
    },
    specifications: {
      en: "28-30% Brix double-concentrated paste, 100% durum semolina pasta, food-safe packaging.",
      ar: "معجون طماطم مركز 28-30% بريكس، معكرونة من سميد القمح الصلب 100%، تعبئة غذائية آمنة.",
    },
    origins: ["Turkey", "Egypt", "UAE"],
    destinations: {
      en: "UAE, GCC, East & West Africa",
      ar: "الإمارات، الخليج، شرق وغرب أفريقيا",
    },
    packaging: {
      en: "Consumer tins/cartons & institutional bulk cases",
      ar: "عبوات استهلاكية وكراتين تموين بالجملة",
    },
    certifications: ["HACCP", "Halal"],
    isNoorAlArab: true,
    image: "/images/elite-baskets-fresh.jpg",
    enquiryRoute: "Noor Al Arab Sales Team",
  },
  {
    id: "prod-frz-protein",
    skuCode: "TRD-FRZ-301",
    name: {
      en: "Halal Frozen Poultry, Meat & Seafood",
      ar: "الدواجن واللحوم الحلال والمأكولات البحرية المجمدة",
    },
    category: "Frozen Foods",
    divisionSlug: "commodity-trading",
    brandOrDivision: {
      en: "Commodity Trading & Supermarket Group",
      ar: "تداول السلع ومجموعة الأسواق",
    },
    description: {
      en: "Frozen food categories including poultry, seafood, frozen vegetables, halal meat and ready foods. Specific products and availability are subject to confirmation.",
      ar: "فئات الأغذية المجمدة بما في ذلك الدواجن والمأكولات البحرية والخضروات المجمدة واللحوم الحلال والأغذية الجاهزة.",
    },
    specifications: {
      en: "Deep frozen at -18°C, certified Halal slaughter, cold-chain integrity verified.",
      ar: "مجمدة عند -18° مئوية، ذبح حلال معتمد، وضمان سلامة سلسلة التبريد المباشرة.",
    },
    origins: ["Brazil", "India", "Vietnam", "Thailand"],
    destinations: {
      en: "GCC, Africa, Malaysia, GSY Supermarkets",
      ar: "الخليج، أفريقيا، ماليزيا، أسواق جي إس واي",
    },
    packaging: {
      en: "40ft Reefer containers (-18°C), cartonised export packs",
      ar: "حاويات مبردة 40 قدماً (-18°م) بكراتين تصدير",
    },
    certifications: ["Halal", "HACCP", "ISO"],
    image: "/images/cold-chain-warehouse.jpg",
    enquiryRoute: "Commodity Trading Desk",
  },
  {
    id: "prod-frz-veg",
    skuCode: "TRD-FRZ-306",
    name: {
      en: "IQF Frozen Vegetables & Ready Foods",
      ar: "الخضروات المجمدة السريعة والأغذية الجاهزة",
    },
    category: "Frozen Foods",
    divisionSlug: "commodity-trading",
    brandOrDivision: {
      en: "Commodity Trading & Supermarket Group",
      ar: "تداول السلع ومجموعة الأسواق",
    },
    description: {
      en: "Individually Quick Frozen (IQF) green peas, sweet corn, mixed vegetables and processed frozen foods for retail and food-service.",
      ar: "خضروات مجمدة بتقنية التجميد السريع الفردي وأغذية معالجة مجمدة لتجارة التجزئة والتموين.",
    },
    specifications: {
      en: "Quick frozen preservation of vitamins and taste, -18°C storage compliance.",
      ar: "تجميد فوري يحافظ على القيمة الغذائية والمذاق، متوافق مع درجات حرارة -18° مئوية.",
    },
    origins: ["China", "India", "Egypt"],
    destinations: {
      en: "GCC, Malaysia, GSY Supermarkets, HORECA",
      ar: "الخليج، ماليزيا، متاجر جي إس واي، قطاع الضيافة",
    },
    packaging: {
      en: "400 g / 1 kg retail bags & 2.5 kg HORECA packs",
      ar: "عبوات التجزئة 400 جم و1 كجم وعبوات الضيافة",
    },
    certifications: ["HACCP", "Halal"],
    image: "/images/cold-chain-warehouse.jpg",
    enquiryRoute: "Commodity Trading Desk",
  },
  {
    id: "prod-fert-urea",
    skuCode: "TRD-FRT-201",
    name: {
      en: "Prilled & Granular Urea 46% N",
      ar: "سماد اليوريا المحبب والحبيبي 46% نيتروجين",
    },
    category: "Fertilizer",
    divisionSlug: "commodity-trading",
    brandOrDivision: {
      en: "Commodity Trading Desk",
      ar: "مكتب تداول السلع",
    },
    description: {
      en: "Fertilizer categories including urea, phosphates, NPK blends, sulphur and potash.",
      ar: "فئات الأسمدة بما في ذلك اليوريا والفوسفات وخلائط NPK والكبريت والبوتاس.",
    },
    specifications: {
      en: "Nitrogen 46.0% min, biuret 1.0% max, moisture 0.5% max, free flowing treated.",
      ar: "نيتروجين 46.0% كحد أدنى، بيوريت 1.0% كحد أقصى، رطوبة 0.5% كحد أقصى، معالجة لسهولة الانسياب.",
    },
    origins: ["Saudi Arabia", "Qatar", "Oman", "Egypt"],
    destinations: {
      en: "East & West Africa, Bangladesh, Sri Lanka, India",
      ar: "شرق وغرب أفريقيا، بنغلاديش، سريلانكا، الهند",
    },
    packaging: {
      en: "Bulk vessels & 50 kg UV-stabilised PP bags",
      ar: "سفن البضائع السائبة وأكياس 50 كجم",
    },
    certifications: ["ISO", "Government Tender Compliant"],
    image: "/images/fertilizer-agri.jpg",
    enquiryRoute: "Commodity Trading Desk",
  },
  {
    id: "prod-fert-phosphates",
    skuCode: "TRD-FRT-205",
    name: {
      en: "Phosphates (DAP, MAP, TSP), NPK Blends, Sulphur & Potash",
      ar: "الفوسفات (DAP, MAP, TSP) وخلائط NPK والكبريت والبوتاس",
    },
    category: "Fertilizer",
    divisionSlug: "commodity-trading",
    brandOrDivision: {
      en: "Commodity Trading Desk",
      ar: "مكتب تداول السلع",
    },
    description: {
      en: "Comprehensive crop nutrient portfolio including diammonium phosphate, compound fertilizers, sulphur and muriate of potash.",
      ar: "محفظة متكاملة من مغذيات المحاصيل تشمل فوسفات ثنائي الأمونيوم والأسمدة المركبة والكبريت والبوتاس.",
    },
    specifications: {
      en: "Commercial export specifications in accordance with official tender specifications.",
      ar: "مواصفات تصدير تجارية متوافقة مع دفاتر الشروط والمناقصات الرسمية.",
    },
    origins: ["Morocco", "Jordan", "Saudi Arabia", "Qatar", "Oman"],
    destinations: {
      en: "East & West Africa, Bangladesh, Sri Lanka, India",
      ar: "شرق وغرب أفريقيا، بنغلاديش، سريلانكا، الهند",
    },
    packaging: {
      en: "Handysize/Supramax bulk & 50 kg / 1,000 kg jumbo bags",
      ar: "شحن سائب وأكياس جامبو 1,000 كجم و50 كجم",
    },
    certifications: ["Pre-shipment Inspection", "ISO"],
    image: "/images/fertilizer-agri.jpg",
    enquiryRoute: "Commodity Trading Desk",
  },
  {
    id: "prod-min-ores",
    skuCode: "TRD-MIN-401",
    name: {
      en: "Manganese, Chrome, Iron Ore, Gypsum & Limestone",
      ar: "المنغنيز والكروم وخام الحديد والجبس والحجر الجيري",
    },
    category: "Minerals & Metals",
    divisionSlug: "commodity-trading",
    brandOrDivision: {
      en: "Commodity Trading & Shipping",
      ar: "تداول السلع والشحن البحري",
    },
    description: {
      en: "Selected minerals, ores and metals, including aluminium, copper cathode, steel and scrap.",
      ar: "معادن وخامات وفلزات مختارة، تشمل الألمنيوم وكاثود النحاس وحديد البناء والخردة.",
    },
    specifications: {
      en: "Assay verified by independent inspection agencies (SGS/equivalent) prior to loading.",
      ar: "تحاليل نقاوة ومعايرة مؤكدة من هيئات تفتيش دولية مستقلة قبل الشحن.",
    },
    origins: ["South Africa", "Gabon", "Ghana", "Zimbabwe", "Oman"],
    destinations: {
      en: "China, India, GCC Steel Mills",
      ar: "الصين، الهند، مصانع الصلب في الخليج",
    },
    packaging: {
      en: "Bulk voyage charters (Handysize to Supramax)",
      ar: "شحن بحري سائب بسفن مخصصة",
    },
    certifications: ["OECD Due Diligence", "SGS Assay"],
    image: "/images/minerals-metals.jpg",
    enquiryRoute: "Commodity Trading Desk",
  },
  {
    id: "prod-met-steel",
    skuCode: "TRD-MET-501",
    name: {
      en: "Aluminium, Copper Cathode, Steel & Scrap",
      ar: "الألمنيوم وكاثود النحاس والصلب والخردة المعدنية",
    },
    category: "Minerals & Metals",
    divisionSlug: "commodity-trading",
    brandOrDivision: {
      en: "Commodity Trading & Shipping",
      ar: "تداول السلع والشحن البحري",
    },
    description: {
      en: "Selected industrial metals including primary aluminium, grade A copper cathodes, steel billets, rebar and scrap metals.",
      ar: "معادن صناعية مختارة تشمل الألمنيوم الأولي وكاثود النحاس درجة (أ) وحديد التسليح والخردة.",
    },
    specifications: {
      en: "Standard mill test certificates; LME registered or equivalent commercial standards.",
      ar: "شهادات فحص مصنعية قياسية مطابقة لمعايير بورصة لندن للمعادن أو ما يعادلها.",
    },
    origins: ["GCC Smelters", "Zambia", "Turkey", "Egypt", "India"],
    destinations: {
      en: "China, Turkey, India, Pakistan, Bangladesh, Africa",
      ar: "الصين، تركيا، الهند، باكستان، بنغلاديش، أفريقيا",
    },
    packaging: {
      en: "Bundled coils/billets, containerised cathodes & bulk scrap fixtures",
      ar: "حزم ولفائف وحاويات ومناقلات سائبة للخردة",
    },
    certifications: ["Mill Test Certificates", "KYC & Sanctions Screened"],
    image: "/images/minerals-metals.jpg",
    enquiryRoute: "Commodity Trading Desk",
  },
];
