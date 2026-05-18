import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isProjectPage =
  process.env.GITHUB_ACTIONS === "true" &&
  Boolean(repositoryName) &&
  !repositoryName?.endsWith(".github.io");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isProjectPage ? `/${repositoryName}` : undefined,
  assetPrefix: isProjectPage ? `/${repositoryName}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;