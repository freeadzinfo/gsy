import { FamilyFlow, FamilyMember, GroupModelStep, SupplyLoopCard } from "@/types/cms";

/**
 * 5-Step Group Model Strip shown on Homepage, About, and Businesses pages.
 * Brief page 3: Source & export -> Ship & move -> Process & brand -> Trade & distribute -> Retail
 */
export const GROUP_MODEL_STEPS: GroupModelStep[] = [
  {
    id: "source",
    stepNumber: 1,
    title: { en: "Source & Export", ar: "التوريد والتصدير" },
    subtitle: {
      en: "Connect with origin markets and suppliers to source products for international trade.",
      ar: "التواصل مع أسواق المنشأ والموردين لتوريد المنتجات للتجارة الدولية.",
    },
    href: "/businesses/commodity-trading",
    iconName: "sprout",
  },
  {
    id: "ship",
    stepNumber: 2,
    title: { en: "Ship & Move", ar: "الشحن والنقل" },
    subtitle: {
      en: "Coordinate voyage chartering, freight and cargo movement between origins and destinations.",
      ar: "تنسيق تأجير السفن بالرحلة وحركة الشحن والبضائع بين المنشأ والوجهات.",
    },
    href: "/businesses/shipping-chartering",
    iconName: "ship",
  },
  {
    id: "process",
    stepNumber: 3,
    title: { en: "Process & Brand", ar: "المعالجة والعلامات التجارية" },
    subtitle: {
      en: "Develop food brands, packing and private-label opportunities through relevant business activities.",
      ar: "تطوير العلامات الغذائية وفرص التعبئة والتغليف والعلامات الخاصة عبر أنشطة الأعمال المعنية.",
    },
    href: "/businesses/noor-al-arab",
    iconName: "factory",
  },
  {
    id: "distribute",
    stepNumber: 4,
    title: { en: "Trade & Distribute", ar: "التجارة والتوزيع" },
    subtitle: {
      en: "Supply wholesalers, retailers, HORECA customers and institutional buyers.",
      ar: "توريد المنتجات لتجار الجملة والتجزئة وقطاع الضيافة والمشترين المؤسسيين.",
    },
    href: "/businesses/distribution",
    iconName: "handshake",
  },
  {
    id: "retail",
    stepNumber: 5,
    title: { en: "Retail", ar: "التجزئة" },
    subtitle: {
      en: "Connect products with customers through the Group's supermarket businesses.",
      ar: "ربط المنتجات بالمستهلكين من خلال أعمال السوبرماركت التابعة للمجموعة.",
    },
    href: "/supermarkets",
    iconName: "shopping-basket",
  },
];

/**
 * 7 GSY Family members with coordinates for interactive SVG network diagram
 */
export const GSY_FAMILY_MEMBERS: FamilyMember[] = [
  {
    id: "gsy-group",
    name: { en: "GSY International Group", ar: "مجموعة جي إس واي الدولية" },
    isRegisteredBrand: true,
    whatItDoes: {
      en: "Group holding, strategy, finance and brand",
      ar: "الشركة القابضة للمجموعة والاستراتيجية والتمويل والعلامة التجارية",
    },
    where: { en: "Dubai HQ", ar: "المقر الرئيسي في دبي" },
    href: "/about/governance",
    nodeX: 50,
    nodeY: 50,
    roleTag: { en: "Holding HQ", ar: "الشركة القابضة" },
  },
  {
    id: "gsy-export-india",
    name: { en: "GSY Export (India)", ar: "جي إس واي للتصدير (الهند)" },
    isRegisteredBrand: false,
    whatItDoes: {
      en: "Exports Indian rice, spices, pulses and FMCG to family companies",
      ar: "تصدير الأرز الهندي والتوابل والبقوليات والسلع الاستهلاكية لشركات العائلة",
    },
    where: { en: "Chennai", ar: "تشيناي" },
    href: "/presence/india",
    nodeX: 18,
    nodeY: 66,
    roleTag: { en: "Origin Export", ar: "منشأ التصدير" },
  },
  {
    id: "gsy-trading",
    name: { en: "GSY Trading", ar: "جي إس واي للتداول" },
    isRegisteredBrand: false,
    whatItDoes: {
      en: "Cross-border and commodity trading: FMCG, frozen, fertilizer, minerals, metals",
      ar: "التجارة العابرة للحدود وتداول السلع: الأغذية والمجمدات والأسمدة والمعادن",
    },
    where: { en: "UAE, Singapore, Africa offices", ar: "الإمارات، سنغافورة، مكاتب أفريقيا" },
    href: "/businesses/commodity-trading",
    nodeX: 22,
    nodeY: 20,
    roleTag: { en: "Trading House", ar: "بيت التداول" },
  },
  {
    id: "gsy-shipping",
    name: { en: "GSY Shipping & Chartering", ar: "جي إس واي للشحن والتأجير" },
    isRegisteredBrand: false,
    whatItDoes: {
      en: "Voyage chartering and freight for family and third-party cargo",
      ar: "تأجير السفن بالرحلة والشحن البحري لبضائع المجموعة والغير",
    },
    where: { en: "Dubai", ar: "دبي" },
    href: "/businesses/shipping-chartering",
    nodeX: 52,
    nodeY: 15,
    roleTag: { en: "Freight Desk", ar: "مكتب الشحن" },
  },
  {
    id: "pets-pantry",
    name: { en: "Pets Pantry", ar: "بيتس بانتري" },
    isRegisteredBrand: true,
    whatItDoes: {
      en: "Pet food and supplies",
      ar: "أغذية ومستلزمات الحيوانات الأليفة",
    },
    where: { en: "UAE", ar: "الإمارات" },
    href: "/businesses/pets-pantry",
    nodeX: 84,
    nodeY: 18,
    roleTag: { en: "Pet Supplies", ar: "مستلزمات الحيوانات الأليفة" },
  },
  {
    id: "noor-al-arab",
    name: { en: "Noor Al Arab", ar: "نور العرب" },
    isRegisteredBrand: true,
    whatItDoes: {
      en: "Food brand and distribution: HORECA, wholesale, catering",
      ar: "علامة الأغذية والتوزيع: الفنادق والمطاعم والجملة والتموين",
    },
    where: { en: "UAE, GCC, India, Malaysia", ar: "الإمارات، الخليج، الهند، ماليزيا" },
    href: "/businesses/noor-al-arab",
    nodeX: 86,
    nodeY: 52,
    roleTag: { en: "Food Brand", ar: "العلامة الغذائية" },
  },
  {
    id: "gsy-supermarkets",
    name: { en: "GSY Supermarket Group", ar: "مجموعة أسواق جي إس واي المركزية" },
    isRegisteredBrand: true,
    whatItDoes: {
      en: "Elite Baskets, GSY Supermarket, Supermarket Malaysia, hypermarkets",
      ar: "إيليت باسكتس، سوبرماركت جي إس واي، سوبرماركت ماليزيا، الهايبرماركت",
    },
    where: { en: "UAE, Malaysia, GCC", ar: "الإمارات، ماليزيا، الخليج" },
    href: "/supermarkets",
    nodeX: 68,
    nodeY: 82,
    roleTag: { en: "Retail Group", ar: "مجموعة التجزئة" },
  },
];

export const GSY_FAMILY_FLOWS: FamilyFlow[] = [
  {
    id: "flow-india-trading",
    fromId: "gsy-export-india",
    toId: "gsy-trading",
    label: { en: "Rice, spices & pulses", ar: "الأرز والتوابل والبقوليات" },
    curveOffset: { x: -30, y: 0 },
  },
  {
    id: "flow-trading-shipping",
    fromId: "gsy-trading",
    toId: "gsy-shipping",
    label: { en: "Chartered cargo", ar: "بضائع الشحن البحري" },
    curveOffset: { x: 0, y: -24 },
  },
  {
    id: "flow-shipping-noor",
    fromId: "gsy-shipping",
    toId: "noor-al-arab",
    label: { en: "Origin freight delivery", ar: "شحن بضائع المنشأ" },
    curveOffset: { x: 20, y: -15 },
  },
  {
    id: "flow-noor-supermarkets",
    fromId: "noor-al-arab",
    toId: "gsy-supermarkets",
    label: {
      en: "Noor Al Arab products stocked in group supermarkets",
      ar: "منتجات نور العرب معروضة في أسواق المجموعة",
    },
    curveOffset: { x: 28, y: 10 },
  },
  {
    id: "flow-india-noor",
    fromId: "gsy-export-india",
    toId: "noor-al-arab",
    label: { en: "Packed rice & spices", ar: "الأرز والتوابل المعبأة" },
    curveOffset: { x: 0, y: 80 },
  },
  {
    id: "flow-group-oversight",
    fromId: "gsy-group",
    toId: "gsy-trading",
    label: { en: "Capital & governance", ar: "الحوكمة والتمويل" },
    curveOffset: { x: -14, y: 0 },
  },
  {
    id: "flow-group-shipping",
    fromId: "gsy-group",
    toId: "gsy-shipping",
    label: { en: "Risk & compliance", ar: "إدارة المخاطر والامتثال" },
    curveOffset: { x: 14, y: 0 },
  },
  {
    id: "flow-group-india",
    fromId: "gsy-group",
    toId: "gsy-export-india",
    label: { en: "Origin strategy & finance", ar: "استراتيجية المنشأ والتمويل" },
    curveOffset: { x: -10, y: 15 },
  },
  {
    id: "flow-group-noor",
    fromId: "gsy-group",
    toId: "noor-al-arab",
    label: { en: "Brand stewardship", ar: "رعاية العلامة التجارية" },
    curveOffset: { x: 0, y: -18 },
  },
  {
    id: "flow-group-supermarkets",
    fromId: "gsy-group",
    toId: "gsy-supermarkets",
    label: {
      en: "Direct group ownership & retail expansion",
      ar: "ملكية مباشرة للمجموعة وتوسع قطاع التجزئة",
    },
    curveOffset: { x: 14, y: -10 },
  },
  {
    id: "flow-group-pets",
    fromId: "gsy-group",
    toId: "pets-pantry",
    label: {
      en: "Direct group ownership & pet supplies subsidiary",
      ar: "شركة مستلزمات حيوانات أليفة تابعة مباشرة للمجموعة",
    },
    curveOffset: { x: -10, y: -20 },
  },
];

/**
 * 6 Supply Loop Cards (Brief page 4: "How the family supplies itself")
 */
export const FAMILY_SUPPLY_LOOPS: SupplyLoopCard[] = [
  {
    id: "malaysia",
    title: { en: "Malaysia » 24 countries", ar: "ماليزيا » 24 دولة" },
    description: {
      en: "Palm oil and halal products sourced by our Malaysia company and supplied to every other GSY market",
      ar: "زيت النخيل والمنتجات الحلال التي توفرها شركتنا في ماليزيا وتزود بها كافة أسواق المجموعة",
    },
    href: "/presence/malaysia",
  },
  {
    id: "india",
    title: { en: "India » the world", ar: "الهند » العالم" },
    description: {
      en: "Rice, spices and pulses exported by our own India company to family distributors and stores",
      ar: "الأرز والتوابل والبقوليات تصدرها شركتنا في الهند مباشرة إلى موزعي ومتاجر المجموعة",
    },
    href: "/presence/india",
  },
  {
    id: "china",
    title: { en: "China » the group", ar: "الصين » المجموعة" },
    description: {
      en: "Frozen foods, metals and other products sourced from China for trading and our stores",
      ar: "الأغذية المجمدة والمعادن والمنتجات المورّدة من الصين للتداول ومتاجرنا",
    },
    href: "/presence/china",
  },
  {
    id: "trading-shipping",
    title: { en: "Trading » shipping", ar: "التداول » الشحن" },
    description: {
      en: "Every family cargo moves on vessels fixed by GSY Shipping & Chartering",
      ar: "كل شحنات العائلة تتحرك على سفن مؤجرة عبر مكتب جي إس واي للشحن والتأجير",
    },
    href: "/businesses/shipping-chartering",
  },
  {
    id: "noor-stores",
    title: { en: "Noor Al Arab » stores", ar: "نور العرب » المتاجر" },
    description: {
      en: "Noor Al Arab products on the shelves of our own supermarkets",
      ar: "منتجات نور العرب حاضرة مباشرة على رفوف أسواقنا المركزية",
    },
    href: "/businesses/noor-al-arab",
  },
  {
    id: "new-country",
    title: { en: "Each new country", ar: "كل سوق جديد" },
    description: {
      en: "Buys from family origins first, then sends its own local products back into the network",
      ar: "يشتري من مصادر العائلة أولاً، ثم يصدر منتجاته المحلية إلى داخل الشبكة",
    },
    href: "/presence",
  },
];

