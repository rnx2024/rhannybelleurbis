import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "/rhannybelleurbis";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? repo : "",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
