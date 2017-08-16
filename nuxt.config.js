const path = require('path');
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
  // loading: { color: '#3B8070' },
  loading: false,
  /*
   ** Plugins
   */
  plugins: [
    { ssr: false, src: '~plugins/OpeningAnimation' }
  ],
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
