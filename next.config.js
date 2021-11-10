const withReactSvg = require('next-react-svg')
const path = require('path')
const { i18n } = require('./next-i18next.config')

module.exports = {
  ...withReactSvg({
    include: path.resolve(__dirname, 'public'),
    webpack(config) {
      return config
    }
  }),
  images: {
    domains: ['localhost', 'tips.tmweb.ru', 'bs-local.com']
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  i18n
}
