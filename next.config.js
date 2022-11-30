const withInterceptStdout = require('next-intercept-stdout')

/** @type {import('next').NextConfig} */
const nextConfig = withInterceptStdout(
  {
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    i18n: {
      locales: ['zh', 'ja', 'en'],
      defaultLocale: 'ja',
    },
    images: {
      unoptimized: true,
    },
  },

  // https://github.com/facebookexperimental/Recoil/issues/733
  (text) => (text.includes('Duplicate atom key') ? '' : text),
)

module.exports = nextConfig
