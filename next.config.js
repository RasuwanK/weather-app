/** @type {import('next').NextConfig} */

const securityHeaders = [
  // DNS prefetching
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // XXS-Protection
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // Clickjack protection
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  // content permission policy
  {
    key: 'Permissions-Policy',
    value: 'geolocation=()'
  }
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  async Headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
