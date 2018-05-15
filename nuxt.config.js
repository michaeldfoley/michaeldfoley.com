const path = require('path');
const gsapPath = '/node_modules/gsap/src/uncompressed/';
var root = __dirname;
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'Michael Foley - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Michael is a front end developer with more than 10 years experience.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['normalize.css', '~/assets/_main.scss'],
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
   ** Plugins
   */
  plugins: [
    { ssr: false, src: '~/plugins/OpeningAnimation' },
    { ssr: false, src: '~/plugins/Console' },
    { ssr: false, src: '~/plugins/CloseNav' }
  ],
  /*
  ** Build configuration
  */
  build: {
    extend (config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
