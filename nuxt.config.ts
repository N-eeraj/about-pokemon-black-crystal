// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
    app: {
        baseURL: process.env.NODE_ENV === 'production' ? '/about-pokemon-black-crystal/' : '/'
    },
    alias: {
      '@styles': resolve(__dirname, './styles'),
      '@images': resolve(__dirname, './public/images')
    }
})