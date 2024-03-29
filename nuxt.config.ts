// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/about-pokemon-black-crystal/' : '/'
  },
  alias: {
    '@composables': resolve(__dirname, './composables'),
    '@data': resolve(__dirname, './data'),
    '@styles': resolve(__dirname, './styles'),
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NODE_ENV === 'production' ? '/about-pokemon-black-crystal' : ''
    }
  }
})