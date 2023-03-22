// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: process.env.NODE_ENV === 'production' ? '/about-pokemon-black-crystal/' : '/'
    }
})