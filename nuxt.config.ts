// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    /* Options */
  },
  plugins: [
    { src: '~/plugins/quill.js', mode: 'client' }
  ],
  css: ['primevue/resources/themes/aura-light-blue/theme.css','primeflex/primeflex.css'],
})
