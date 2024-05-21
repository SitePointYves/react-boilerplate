import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

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
export default bundleAnalyzer(nextConfig);
