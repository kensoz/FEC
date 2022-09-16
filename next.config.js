/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['zh', 'ja'],
    defaultLocale: 'ja',
  },
}

module.exports = nextConfig
