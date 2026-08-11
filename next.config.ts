import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /*
   * SiteGround shared hosting serves files through Apache and has no Node
   * runtime, so the site ships as a pre-rendered export instead of running
   * `next start`. Every route here is static, so nothing is given up.
   */
  output: "export",

  /*
   * Emits each route as its own directory index (out/about/index.html), which
   * Apache serves natively — no rewrite rules needed for /about, /menu or
   * /contact, and mod_dir redirects the slashless form for free.
   */
  trailingSlash: true,

  /* Image Optimization needs a server; without one, images ship as authored. */
  images: { unoptimized: true },
};

export default nextConfig;
