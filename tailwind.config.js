const defaultTheme = require('tailwindcss/defaultTheme')
const windmillPlugin = require('windmill-react-ui/plugin')

module.exports = {
  purge: {
    content: ['src/**/*.js', 'node_modules/windmill-react-ui/lib/defaultTheme.js'],
    options: {
      whitelist: ['theme-dark'],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [windmillPlugin()],
}
