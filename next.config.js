/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add external domains for image optimization
    domains: ["bigbluehotel.gumlet.io", "bigbluehotel.net"],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true
};

module.exports = nextConfig;
