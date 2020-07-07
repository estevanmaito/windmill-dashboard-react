const defaultTheme = require('tailwindcss/defaultTheme')
const windmillPlugin = require('windmill-react-ui/plugin')
// const windmillTheme = require('windmill-react-ui/defaultTheme')

module.exports = {
  purge: ['src/**/*.js'],
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
