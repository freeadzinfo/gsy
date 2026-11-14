import { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://gsyinternationalgroup.com";

const LOCALES = ["en", "ar"] as const;

// Primary static routes across GSY International Group
const ROUTES = [
  "",
  "/about",
  "/about/our-story",
  "/about/chairmans-message",
  "/about/leadership",
  "/about/vision-2030",
  "/about/governance",
  "/about/gsy-family",
  "/about/gallery",
  "/businesses",
  "/businesses/commodity-trading",
  "/businesses/shipping-chartering",
  "/businesses/noor-al-arab",
  "/businesses/government-tenders",
  "/businesses/distribution",
  "/businesses/logistics",
  "/businesses/pets-pantry",
  "/supermarkets",
  "/supermarkets/elite-baskets",
  "/supermarkets/gsy-supermarket",
  "/supermarkets/supermarket-malaysia",
  "/supermarkets/stores",
  "/supermarkets/offers",
  "/supermarkets/suppliers",
  "/supermarkets/partners",
  "/presence",
  "/presence/africa",
  "/presence/uae",
  "/presence/india",
  "/presence/malaysia",
  "/presence/tanzania",
  "/presence/china",
  "/products",
  "/investors",
  "/investors/halal-investment",
  "/investors/partner-with-gsy",
  "/investors/company-profile",
  "/careers",
  "/blog",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const route of ROUTES) {
    for (const locale of LOCALES) {
      const url = `${BASE_URL}/${locale}${route}`;
      const otherLocale = locale === "en" ? "ar" : "en";
      const altUrl = `${BASE_URL}/${otherLocale}${route}`;

      entries.push({
        url,
        lastModified: now,
        changeFrequency: route === "" || route.startsWith("/businesses") ? "weekly" : "monthly",
        priority:
          route === ""
            ? 1.0
            : route === "/businesses" || route === "/businesses/pets-pantry" || route === "/about/gsy-family"
              ? 0.9
              : 0.8,
        alternates: {
          languages: {
            [locale]: url,
            [otherLocale]: altUrl,
          },
        },
      });
    }
  }

  return entries;
}
