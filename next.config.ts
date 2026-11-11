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
    ];
  },
};

export default nextConfig;

