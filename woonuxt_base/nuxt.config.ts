import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  compatibilityDate: '2024-07-09',
  future: {
    compatibilityVersion: 4,
  },
  css: ['./assets/css/general.scss', './assets/css/custom-fonts.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', href: '/favicon3.png', type: 'image/svg+xml' }],
    },
    pageTransition: { name: 'page', mode: 'default' },
  },

  experimental: {
    sharedPrerenderData: true,
    buildCache: true,
    defaults: {
      nuxtLink: {
        prefetch: true,
        prefetchOn: { visibility: false },
      },
    },
  },

  plugins: [resolve('./app/plugins/init.ts')],

  components: [{ path: resolve('./app/components'), pathPrefix: false }],

  modules: ['woonuxt-settings', 'nuxt-graphql-client', '@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image', '@nuxtjs/i18n', '@nuxtjs/google-fonts', 'nuxt-gtag'],

  gtag: {
    id: 'G-7DMFKHCX4P',
  },

  googleFonts: {
    // declare your google fonts here
    families: {
      Poppins: [400, 600, 700, 800],
    },
    display: 'fallback',
    preload: true,
    text: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&'()*+,—-.:?_<>/€`,
  },

  'graphql-client': {
    clients: {
      default: {
        host: process.env.GQL_HOST || 'http://localhost:4000/graphql',
        corsOptions: { mode: 'cors', credentials: 'include' },
      },
    },
  },

  alias: {
    '#constants': resolve('./app/constants'),
    '#woo': '../.nuxt/gql/default',
  },

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:8000',
      SITE_KEY: process.env.SITE_KEY || '',
      SITE_URL: process.env.SITE_URL,
    },
  },

  hooks: {
    'pages:extend'(pages) {
      const addPage = (name: string, path: string, file: string) => {
        pages.push({ name, path, file: resolve(`./app/pages/${file}`) });
      };

      addPage('product-page-pager', '/products/page/:pageNumber', 'products.vue');
      addPage('product-category-page', '/product-category/:categorySlug', 'product-category/[slug].vue');
      addPage('product-category-page-pager', '/product-category/:categorySlug/page/:pageNumber', 'product-category/[slug].vue');
      addPage('order-received', '/checkout/order-received/:orderId', 'order-summary.vue');
      addPage('order-summary', '/order-summary/:orderId', 'order-summary.vue');
      addPage('blog-post', '/blog/:slug', 'blog/[slug].vue');
    },
  },

  nitro: {
    routeRules: {
      '/**': { prerender: true },
      '/products/**': { swr: 3600 },
      '/checkout/order-received/**': { ssr: false },
      '/order-summary/**': { ssr: false },
    },
  },

  // Multilingual support
  i18n: {
    locales: [
      { code: 'en_US', file: 'en-US.json', name: 'English 🇺🇸' },
      { code: 'de_DE', file: 'de-DE.json', name: 'Deutsch 🇩🇪' },
      { code: 'es_ES', file: 'es-ES.json', name: 'Español 🇪🇸' },
      { code: 'fr_FR', file: 'fr-FR.json', name: 'Français 🇫🇷' },
      { code: 'it_IT', file: 'it-IT.json', name: 'Italiano 🇮🇹' },
      { code: 'pt_BR', file: 'pt-BR.json', name: 'Português 🇧🇷' },
    ],
    langDir: 'locales',
    defaultLocale: 'en_US',
    strategy: 'no_prefix',
  },
});
