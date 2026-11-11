import { FamilyFlow, FamilyMember, GroupModelStep, SupplyLoopCard } from "@/types/cms";

/**
 * 5-Step Group Model Strip shown on Homepage, About, and Businesses pages.
 * Brief page 3: Source & export -> Ship & move -> Process & brand -> Trade & distribute -> Retail
 */
export const GROUP_MODEL_STEPS: GroupModelStep[] = [
  {
    id: "source",
    stepNumber: 1,
    title: { en: "Source & export", ar: "التوريد والتصدير" },
    subtitle: {
      en: "India, Malaysia, Asia and Africa origins",
      ar: "مصادر الهند وماليزيا وآسيا وأفريقيا",
    },
    href: "/businesses/commodity-trading",
    iconName: "sprout",
  },
  {
    id: "ship",
    stepNumber: 2,
    title: { en: "Ship & move", ar: "الشحن والنقل البحري" },
    subtitle: {
      en: "Voyage chartering, containers, ports",
      ar: "تأجير السفن بالرحلة والحاويات والموانئ",
    },
    href: "/businesses/shipping-chartering",
    iconName: "ship",
  },
  {
    id: "process",
    stepNumber: 3,
    title: { en: "Process & brand", ar: "التصنيع والعلامة التجارية" },
    subtitle: {
      en: "Noor Al Arab packing and private label",
      ar: "تعبئة نور العرب والعلامات الخاصة",
    },
    href: "/businesses/noor-al-arab",
    iconName: "factory",
  },
  {
    id: "distribute",
    stepNumber: 4,
    title: { en: "Trade & distribute", ar: "التجارة والتوزيع" },
    subtitle: {
      en: "Bulk trade, wholesale, HORECA",
      ar: "التجارة بالجملة وقطاع الفنادق والمطاعم",
    },
    href: "/businesses/distribution",
    iconName: "handshake",
  },
  {
    id: "retail",
    stepNumber: 5,
    title: { en: "Retail", ar: "التجزئة" },
    subtitle: {
      en: "Supermarkets and hypermarkets",
      ar: "الأسواق المركزية والهايبرماركت",
    },
    href: "/supermarkets",
    iconName: "shopping-basket",
  },
];

/**
 * 8 GSY Family members (Brief page 4) with coordinates for interactive SVG network diagram
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
    nodeY: 16,
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
    nodeX: 17,
    nodeY: 40,
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
    nodeX: 38,
    nodeY: 46,
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
    nodeX: 62,
    nodeY: 46,
    roleTag: { en: "Freight Desk", ar: "مكتب الشحن" },
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
    nodeX: 83,
    nodeY: 40,
    roleTag: { en: "Food Brand", ar: "العلامة الغذائية" },
  },
  {
    id: "country-companies",
    name: { en: "Country companies", ar: "الشركات القُطرية" },
    isRegisteredBrand: false,
    whatItDoes: {
      en: "Import, wholesale and distribution in each new market",
      ar: "الاستيراد والبيع بالجملة والتوزيع في كل سوق جديد",
    },
    where: { en: "25+ countries", ar: "أكثر من 25 دولة" },
    href: "/presence",
    nodeX: 25,
    nodeY: 78,
    roleTag: { en: "Market Hubs", ar: "أسواق التوزيع" },
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
    nodeX: 55,
    nodeY: 80,
    roleTag: { en: "Retail Group", ar: "مجموعة التجزئة" },
  },
  {
    id: "pets-pantry",
    name: { en: "Pets Pantry", ar: "بيتس بانتري" },
    isRegisteredBrand: true,
    whatItDoes: {
      en: "Pets' Pantry (petspantry.ae): wholesome pet nutrition, premium dry foods, treats and pet accessories",
      ar: "بيتس بانتري (petspantry.ae): أغذية ومستلزمات الحيوانات الأليفة المتوازنة، والأطعمة الجافة والمكافآت",
    },
    where: { en: "UAE", ar: "الإمارات" },
    href: "/products?category=Noor+Al+Arab",
    nodeX: 82,
    nodeY: 78,
    roleTag: { en: "Specialty Retail", ar: "تجزئة متخصصة" },
  },
];

export const GSY_FAMILY_FLOWS: FamilyFlow[] = [
  {
    id: "flow-india-trading",
    fromId: "gsy-export-india",
    toId: "gsy-trading",
    label: { en: "Rice, spices & pulses", ar: "الأرز والتوابل والبقوليات" },
  },
  {
    id: "flow-trading-shipping",
    fromId: "gsy-trading",
    toId: "gsy-shipping",
    label: { en: "Chartered cargo", ar: "بضائع الشحن البحري" },
  },
  {
    id: "flow-shipping-noor",
    fromId: "gsy-shipping",
    toId: "noor-al-arab",
    label: { en: "Origin freight delivery", ar: "شحن بضائع المنشأ" },
  },
  {
    id: "flow-shipping-countries",
    fromId: "gsy-shipping",
    toId: "country-companies",
    label: { en: "Bulk & container imports", ar: "واردات الجملة والحاويات" },
  },
  {
    id: "flow-noor-supermarkets",
    fromId: "noor-al-arab",
    toId: "gsy-supermarkets",
    label: { en: "Private-label food SKUs", ar: "منتجات العلامة الخاصة" },
  },
  {
    id: "flow-trading-countries",
    fromId: "gsy-trading",
    toId: "country-companies",
    label: { en: "Cross-border sourcing", ar: "توريد السلع العابرة للحدود" },
  },
  {
    id: "flow-countries-trading",
    fromId: "country-companies",
    toId: "gsy-trading",
    label: { en: "Local origin products back", ar: "إعادة توريد المنتجات المحلية" },
  },
  {
    id: "flow-group-oversight",
    fromId: "gsy-group",
    toId: "gsy-trading",
    label: { en: "Capital & governance", ar: "الحوكمة والتمويل" },
  },
  {
    id: "flow-group-shipping",
    fromId: "gsy-group",
    toId: "gsy-shipping",
    label: { en: "Risk & compliance", ar: "إدارة المخاطر والامتثال" },
  },
  {
    id: "flow-group-india",
    fromId: "gsy-group",
    toId: "gsy-export-india",
    label: { en: "Origin strategy & finance", ar: "استراتيجية المنشأ والتمويل" },
  },
  {
    id: "flow-group-noor",
    fromId: "gsy-group",
    toId: "noor-al-arab",
    label: { en: "Brand stewardship", ar: "رعاية العلامة التجارية" },
  },
  {
    id: "flow-india-noor",
    fromId: "gsy-export-india",
    toId: "noor-al-arab",
    label: { en: "Packed rice & spices", ar: "الأرز والتوابل المعبأة" },
  },
  {
    id: "flow-india-countries",
    fromId: "gsy-export-india",
    toId: "country-companies",
    label: { en: "Direct Indian exports", ar: "الصادرات الهندية المباشرة" },
  },
  {
    id: "flow-noor-countries",
    fromId: "noor-al-arab",
    toId: "country-companies",
    label: { en: "Regional brand wholesale", ar: "توزيع الجملة الإقليمي" },
  },
  {
    id: "flow-countries-supermarkets",
    fromId: "country-companies",
    toId: "gsy-supermarkets",
    label: { en: "Local market supply", ar: "التوريد للأسواق المحلية" },
  },
  {
    id: "flow-supermarkets-pets",
    fromId: "gsy-supermarkets",
    toId: "pets-pantry",
    label: { en: "Retail shelf distribution", ar: "توزيع التجزئة" },
  },
  {
    id: "flow-noor-pets",
    fromId: "noor-al-arab",
    toId: "pets-pantry",
    label: { en: "Logistics & UAE fulfilment", ar: "اللوجستيات والتخزين بالإمارات" },
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

