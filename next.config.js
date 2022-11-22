const withInterceptStdout = require('next-intercept-stdout')

/** @type {import('next').NextConfig} */
const nextConfig = withInterceptStdout(
  {
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    i18n: {
      locales: ['zh', 'ja'],
      defaultLocale: 'ja',
    },
    images: {
      domains: ['cdn.jsdelivr.net', 'cdn.simpleicons.org'],
    },
  },

  // https://github.com/facebookexperimental/Recoil/issues/733
  (text) => (text.includes('Duplicate atom key') ? '' : text),
)

module.exports = nextConfig
