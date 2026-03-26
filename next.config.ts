import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "/rhannybelleurbis";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        trailingSlash: true,
        basePath: repo,
      }
    : {}),
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
