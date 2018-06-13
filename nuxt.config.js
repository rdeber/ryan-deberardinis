module.exports = {

  /*
  ** Include css not in components
  */
  css: [
    // { src: 'bulma/bulma.scss', lang: 'scss' },
    // { src: 'normalize.css', lang: 'css' },
    { src: 'bulma/bulma.sass', lang: 'sass' },
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
  ** Register middleware
  */
  router: {
    middleware: 'pages'
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
    script: [
      { src: 'https://use.fontawesome.com/releases/v5.0.13/js/all.js', integrity: 'sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe', crossorigin: 'anonymous' }
    ],
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
    postcss: {
      plugins: {
        // Diable Postcss custom properties warnings
        'postcss-custom-properties': {
          warnings: false
        },
        // Force scss preprocessor to run
        'postcss-cssnext': {
          browsers: ['last 3 versions', 'ie >= 10']
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