export default defineNuxtConfig({
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  router: {
    base: process.env.NODE_ENV !== 'development' ? '/compare-learn/' : '',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  app: {
    head: {
      title: 'Compare Learn',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href:
            process.env.NODE_ENV !== 'development'
              ? '/compare-learn/favicon.ico'
              : '/favicon.ico',
        },
      ],
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    liveEdit: false,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
})