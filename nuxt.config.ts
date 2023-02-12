// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    modules: ['@vueuse/nuxt','nuxt-icon','@pinia/nuxt'],
    imports: {
      dirs: ['./stores'],
    },
  
    pinia: {
      autoImports: ['defineStore', 'acceptHMRUpdate'],
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
})
