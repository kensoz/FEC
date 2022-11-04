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
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/home',
        },
      ]
      //   return {
      //     beforeFiles: [
      //       {
      //         source: '/',
      //         destination: '/home',
      //       },
      //     ],
      //     fallback: [{ source: '/:path*', destination: '/_404/:path*' }],
      //   }
      // },
    },
  },

  // https://github.com/facebookexperimental/Recoil/issues/733
  (text) => (text.includes('Duplicate atom key') ? '' : text),
)

module.exports = nextConfig
