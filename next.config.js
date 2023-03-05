const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  // any configs you need
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  basePath: '/yubi-react-schema-form',
  exportTrailingSlash: true,
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/formEdit': { page: '/formEdit' },
      '/formEditDemo': { page: '/formEdit/demo' },
    }
  },
}

module.exports = withBundleAnalyzer(nextConfig)
