import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (see .github/workflows/deploy.yml) so the
// same value is available at build time (here) and inlined into the client
// bundle (via src/lib/basePath.ts) — plain GITHUB_* env vars are only
// visible server-side, which caused client-rendered image preloads to miss
// the prefix even though the server-rendered HTML had it right.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  // Emits /route/index.html instead of /route.html so plain Apache
  // hosting (cPanel) serves clean URLs via its normal directory-index
  // behavior, with no custom rewrite rules needed.
  trailingSlash: true,
};

export default nextConfig;
