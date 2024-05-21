import withBundleAnalyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from "next-intl/plugin";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["swc-plugin-coverage-instrument", {}]],
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};
export default bundleAnalyzer(withNextIntl(nextConfig));
