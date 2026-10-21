import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * The whole site is pre-rendered to static files in `out/`.
   * No Node.js runtime is required in production.
   */
  output: "export",

  /**
   * Emit `/path/index.html` files so any plain static host can serve the site
   * without custom rewrite rules.
   */
  trailingSlash: true,

  images: {
    // The default Next.js image optimizer needs a server; static export cannot use it.
    unoptimized: true,
  },

  reactStrictMode: true,

  poweredByHeader: false,

  // Fail the production build on type errors instead of shipping a broken bundle.
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
