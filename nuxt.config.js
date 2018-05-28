module.exports = {

  /*
  ** Include css not in components
  */
  css: [
    // { src: 'bulma/bulma.scss', lang: 'scss' },
    // { src: 'normalize.css', lang: 'css' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
    { src: '~assets/main.scss', lang: 'scss' },
  ],

  //plugins: [
  //  { src: '~/plugins/custom', ssr: false }
  //],

  /*
  ** Change location of dist folder
  */
  generate: {
    dir: './deploy/'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'ryan-deberardinis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    //script: [
    //  { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    //],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1' }
    ],
    //bodyAttrs: {
    //  class: 'has-navbar-fixed-bottom'
    //}
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Diable Postcss custom properties warnings
    */
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
