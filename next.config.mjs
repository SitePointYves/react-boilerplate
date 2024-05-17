/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        swcPlugins: [["swc-plugin-coverage-instrument", {}]],
    },
    output: "export",
    images: {
        unoptimized: true
    }
};

export default nextConfig;
