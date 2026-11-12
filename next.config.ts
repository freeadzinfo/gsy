import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/branches",
        destination: "/en/presence",
        permanent: true,
      },
      {
        source: "/product",
        destination: "/en/products",
        permanent: true,
      },
      {
        source: "/halal-investment",
        destination: "/en/investors/halal-investment",
        permanent: true,
      },
      {
        source: "/:locale(en|ar)/branches",
        destination: "/:locale/presence",
        permanent: true,
      },
      {
        source: "/:locale(en|ar)/product",
        destination: "/:locale/products",
        permanent: true,
      },
      {
        source: "/:locale(en|ar)/halal-investment",
        destination: "/:locale/investors/halal-investment",
        permanent: true,
      },
      {
        source: "/news",
        destination: "/en/blog",
        permanent: true,
      },
      {
        source: "/news/:slug",
        destination: "/en/blog/:slug",
        permanent: true,
      },
      {
        source: "/:locale(en|ar)/news",
        destination: "/:locale/blog",
        permanent: true,
      },
      {
        source: "/:locale(en|ar)/news/:slug",
        destination: "/:locale/blog/:slug",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/en/about/gallery",
        permanent: true,
      },
      {
        source: "/:locale(en|ar)/gallery",
        destination: "/:locale/about/gallery",
        permanent: true,
      },
      {
        source: "/events",
        destination: "/en/blog?category=event",
        permanent: false,
      },
      {
        source: "/:locale(en|ar)/events",
        destination: "/:locale/blog?category=event",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

