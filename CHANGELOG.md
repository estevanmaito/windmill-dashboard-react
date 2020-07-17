## [0.2.1](https://github.com/estevanmaito/windmill-dashboard-react/compare/0.2.0...0.2.1) (2020-07-17)


### Bug Fixes

* **header:** fix bleeding header shadow ([4eef708](https://github.com/estevanmaito/windmill-dashboard-react/commit/4eef7087e7e3d63b12cca040084f68d13604cb57))

# [0.2.0](https://github.com/estevanmaito/windmill-dashboard-react/compare/0.1.0...0.2.0) (2020-07-17)


### Bug Fixes

* **favicon:** update logo for pwa ([5e788d2](https://github.com/estevanmaito/windmill-dashboard-react/commit/5e788d24b8a18f90b450c85d04f319daf42bcf82))


### Features

* **global:** update windmill-react-ui ([6c5c3c0](https://github.com/estevanmaito/windmill-dashboard-react/commit/6c5c3c0cb42df1bbbe8cf5d7e5e637101d556433))
* **serviceworker:** activate service worker ([984dd8b](https://github.com/estevanmaito/windmill-dashboard-react/commit/984dd8b87aa7ee54f7a521550b8ad9c396b21e04))


### BREAKING CHANGES

* **global:** Now you need to wrap the entire tailwind config object with Windmill's config
wrapper. There is no need to use Windmill plugin or purge anymore.

Complete example:

```js
const defaultTheme = require('tailwindcss/defaultTheme')
const windmill = require('windmill-react-ui/config')

module.exports = windmill({
  purge: ['src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
})
```

# [0.1.0](https://github.com/estevanmaito/windmill-dashboard-react/compare/0.1.0-alpha.2...0.1.0) (2020-07-14)


### Features

* **global:** upgrade to last windmill-ui version ([708fce4](https://github.com/estevanmaito/windmill-dashboard-react/commit/708fce44efe18e97190775fb41ca068c653549a7))

# [0.1.0-alpha.2](https://github.com/estevanmaito/windmill-dashboard-react/compare/0.1.0-alpha.1...0.1.0-alpha.2) (2020-07-07)


### Bug Fixes

* **avatar:** update avatar image syntax ([e16ea68](https://github.com/estevanmaito/windmill-dashboard-react/commit/e16ea68435ffd9bc7404dfb80120ff18c4c39052))
* **layout:** increase header and sidebar z-index ([c948638](https://github.com/estevanmaito/windmill-dashboard-react/commit/c9486383e3129fb57af5aa0a9ca91c57946c44c1))
* **routes:** redirect index to login ([06405ac](https://github.com/estevanmaito/windmill-dashboard-react/commit/06405ac345c4bdfa6e66bf5225bad868d5721d8b))


### BREAKING CHANGES

* **avatar:** Avatar, with the udate to windmill-react-ui-alpha.10, now uses src instead of img
to pass the image path to the inner image, to better resemble the actual element underneath
* **layout:** increased z-index for header and sidebar

# 0.1.0-alpha.1 (2020-07-01)

