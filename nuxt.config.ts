// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  hooks: {
    'components:dirs': (dirs) => {
      dirs.unshift({
        path: '~/components',
        // this is required else Nuxt will autoImport `.ts` file
        extensions: ['.vue'],
        // prevent adding another prefix component by it's path.
        pathPrefix: false,
      })
    },
  },
})
