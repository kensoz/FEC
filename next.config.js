/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  i18n: {
    locales: ['zh', 'ja'],
    defaultLocale: 'ja',
  },
  async rewrites() {
    return {
      fallback: [{ source: '/:path*', destination: '/_404/:path*' }],
    }
  },
}

module.exports = nextConfig
