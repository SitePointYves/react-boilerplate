import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [
      [
        'use-client',
        {
          include: ['@mui/material', '@mui/icons-material', '@mui/x-data-grid'],
        },
        'swc-plugin-coverage-instrument',
        {},
      ],
    ],
  },
  // output: "export",
  images: {
    unoptimized: true,
  },
};
export default bundleAnalyzer(nextConfig);
