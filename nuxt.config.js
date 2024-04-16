export default defineNuxtConfig({
  // https://nuxt.com/docs/api/nuxt-config#baseurl
  app: {
    baseURL: process.env.NODE_ENV !== 'development' ? '/compare-learn/' : '',
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

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],


})