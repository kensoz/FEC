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
      unoptimized: true,
      remotePatterns: [
        // {
        //   protocol: 'https',
        //   hostname: 'cdn.simpleicons.org',
        //   port: '',
        //   pathname: '/**',
        // },
        {
          protocol: 'https',
          hostname: 'icons.ly',
        },
      ],
    },
    // images: {
    //   domains: ['cdn.simpleicons.org', 'cdn.jsdelivr.net'],
    // },
  },

  // https://github.com/facebookexperimental/Recoil/issues/733
  (text) => (text.includes('Duplicate atom key') ? '' : text),
)

module.exports = nextConfig
