export type Locale = "en" | "ar";

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface LocalizedList {
  en: string[];
  ar: string[];
}

export type MarketStatus = "live" | "sourcing" | "launching" | "planned";
export type WorldRegion = "Middle East" | "Asia" | "Africa" | "Europe" | "Americas";
export type InternalTier = "A" | "B" | "C" | null;

export interface SiteSettings {
  companyName: LocalizedString;
  tagline: LocalizedString;
  heroHeadline: LocalizedString;
  heroSubheadline: LocalizedString;
  oneLineDescription: LocalizedString;
  foundedYear: number;
  countriesToday: number;
  countries2030: string;
  peopleCount: string;
  groupGoal2030: string;
  groupGoalAedApprox: string;
  supermarketsToday: number;
  supermarkets2030: number;
  noorAlArabTarget2030: string;
  hqAddress: LocalizedString;
  hqEmail: string;
  hqPhone: string;
}

export interface GroupModelStep {
  id: string;
  stepNumber: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  href: string;
  iconName: "sprout" | "ship" | "factory" | "handshake" | "shopping-basket";
}

export interface FamilyMember {
  id: string;
  name: LocalizedString;
  isRegisteredBrand: boolean;
  whatItDoes: LocalizedString;
  where: LocalizedString;
  href: string;
  nodeX: number;
  nodeY: number;
  roleTag: LocalizedString;
}

export interface FamilyFlow {
  id: string;
  fromId: string;
  toId: string;
  label: LocalizedString;
  curveOffset?: { x: number; y: number };
}

export interface SupplyLoopCard {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  href: string;
}

export interface CommodityDesk {
  id: "fmcg" | "fertilizer" | "frozen-foods" | "minerals" | "metals";
  name: LocalizedString;
  summary: LocalizedString;
  products: LocalizedString;
  buyFrom: string[];
  sellTo: string[];
  buyFromLabel: LocalizedString;
  sellToLabel: LocalizedString;
  keySpecs: LocalizedList;
}

export interface BusinessDivision {
  slug:
    | "commodity-trading"
    | "shipping-chartering"
    | "noor-al-arab"
    | "government-tenders"
    | "distribution"
    | "logistics";
  name: LocalizedString;
  shortTitle: LocalizedString;
  heroPromise: LocalizedString;
  summary: LocalizedString;
  isFamilyBrand?: boolean;
  whatWeDo: Array<{
    title: LocalizedString;
    description: LocalizedString;
  }>;
  processSteps: Array<{
    step: string;
    title: LocalizedString;
    detail: LocalizedString;
  }>;
  whoWeServe: LocalizedList;
  complianceNotes: LocalizedList;
  operatingCountries: string[];
  image: string;
  enquiryRouteLabel: LocalizedString;
}

export type BrandSlug = "elite-baskets" | "gsy-supermarket" | "supermarket-malaysia";

export interface SupermarketBrand {
  slug: BrandSlug;
  name: LocalizedString;
  country: LocalizedString;
  positioning: LocalizedString;
  storesTodayText: LocalizedString;
  storesTodayCount: number;
  target2030Count: number;
  about: LocalizedString;
  primaryColor: string;
  accentColor: string;
  badgeText: LocalizedString;
  departments: LocalizedList;
  deliveryApps: Array<{ name: string; handle: string }>;
  socialHandles: Array<{ platform: string; handle: string }>;
  contactEmail: string;
  contactPhone: string;
}

export interface StoreRecord {
  id: string;
  store_name: string;
  store_name_ar: string;
  brand: BrandSlug;
  format: "supermarket" | "hypermarket";
  country: "UAE" | "Malaysia" | "GCC";
  city: string;
  city_ar: string;
  area: string;
  area_ar: string;
  address: string;
  address_ar: string;
  lat: number;
  lng: number;
  opening_hours: string;
  opening_hours_ar: string;
  phone: string;
  whatsapp: string;
  services: string[];
  delivery_links: {
    talabat?: string;
    noon?: string;
    grab?: string;
  };
  photo: string;
  status: "open" | "coming-soon";
  isDemoPlaceholder?: boolean;
}

export interface OfferRecord {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  brand: BrandSlug;
  country: "UAE" | "Malaysia";
  validFrom: string;
  validTo: string;
  storesIncluded: LocalizedString;
  highlights: LocalizedList;
  flyerCode: string;
  image: string;
}

export interface CountryRecord {
  slug: string;
  name: string;
  name_ar: string;
  flag: string;
  region: WorldRegion;
  status: MarketStatus;
  show_on_site: boolean;
  entry_year: string;
  tier: InternalTier; // Internal only — never display publicly
  role: LocalizedString;
  divisions: string[];
  products: LocalizedList;
  brands: BrandSlug[];
  ports: string[];
  entity_name: string;
  isConfirmationPending?: boolean;
  office: {
    city: string;
    address: LocalizedString;
    lat: number;
    lng: number;
    mapX: number; // Percentage 0-100 for responsive SVG map
    mapY: number; // Percentage 0-100 for responsive SVG map
  };
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  hero_image: string;
  gallery: string[];
}

export interface ProductItem {
  id: string;
  skuCode: string;
  name: LocalizedString;
  category:
    | "FMCG Staples"
    | "Fertilizer"
    | "Frozen Foods"
    | "Minerals"
    | "Metals"
    | "Noor Al Arab";
  divisionSlug: string;
  origins: string[];
  destinations: LocalizedString;
  packaging: LocalizedString;
  certifications: string[];
  isNoorAlArab?: boolean;
}

export interface JobOpening {
  slug: string;
  title: LocalizedString;
  department:
    | "Commodity Trading"
    | "Shipping & Chartering"
    | "Noor Al Arab"
    | "Retail"
    | "Distribution & HORECA"
    | "Logistics & Supply Chain"
    | "Government & Tenders"
    | "Corporate & Finance";
  divisionSlug: string;
  countrySlug: string;
  location: LocalizedString;
  employmentType: LocalizedString;
  experience: LocalizedString;
  summary: LocalizedString;
  responsibilities: LocalizedList;
  requirements: LocalizedList;
  isDemoPlaceholder?: boolean;
}

export interface NewsArticle {
  slug: string;
  category: "milestone" | "press-release" | "event";
  date: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  body: LocalizedList;
  tag: LocalizedString;
  image: string;
  eventMeta?: {
    venue: LocalizedString;
    statusLabel: LocalizedString;
  };
  isDemoPlaceholder?: boolean;
}

export type GalleryCategory =
  | "events"
  | "operations"
  | "supermarkets"
  | "leadership"
  | "brands";

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  title: LocalizedString;
  caption: LocalizedString;
  location: LocalizedString;
  year: string;
  image: string;
  isDemoPlaceholder?: boolean;
}

export interface VisionMilestone {
  year: string;
  phase: LocalizedString;
  headline: LocalizedString;
  details: LocalizedString;
}

