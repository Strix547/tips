const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = {
  ...withReactSvg({
    include: path.resolve(__dirname, 'public'),
    webpack(config) {
      return config
    }
  }),
  images: {
    domains: ['localhost', 'tips.tmweb.ru']
  },
  reactStrictMode: true
}
