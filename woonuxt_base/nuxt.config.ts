import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
    compatibilityDate: '2024-07-09',
    future: {
        compatibilityVersion: 4,
    },
    site: {
        url: 'https://hiddentreasuresagency.com/',
        name: 'Hidden Treasures',
    },
    css: ['./assets/css/general.scss', './assets/css/custom-fonts.css'],

    app: {
        head: {
            htmlAttrs: { lang: 'en' },
            link: [{ rel: 'icon', href: '/favicon3.png', type: 'image/svg+xml' }],
            script: [
                {
                    hid: 'meta-pixel',
                    innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '453183277830202');
            fbq('track', 'PageView');
          `,
                    type: 'text/javascript',
                },
                {
                    hid: 'voiceflow-widget',
                    innerHTML: `
            (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '6780f16040d0634c3490b975' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production'
                  });
                }
                v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
            })(document, 'script');
          `,
                    type: 'text/javascript',
                },
                {
                    hid: 'gtag',
                    innerHTML: `
            <!-- Google tag (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16839371435"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-16839371435');
            </script>
          `,
                    type: 'text/javascript',
                },
            ],
            __dangerouslyDisableSanitizersByTagID: {
                'meta-pixel': ['innerHTML'],
                'voiceflow-widget': ['innerHTML'],
            },
            noscript: [
                {
                    hid: 'fb-pixel-noscript',
                    innerHTML: `<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=453183277830202&ev=PageView&noscript=1"/>`,
                },
            ],
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

    modules: [
        'woonuxt-settings',
        'nuxt-graphql-client',
        '@nuxtjs/tailwindcss',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxtjs/i18n',
        '@nuxtjs/google-fonts',
        '@nuxtjs/sitemap',
    ],
    sitemap: {
        excludeAppSources: true,
        defaults: {
            lastmod: new Date().toISOString(),
            priority: 0.5,
            changefreq: 'weekly',
        },
        sources: [`${process.env.API_BASE_URL}/wp-json/sitemap/v1/generate`],
        xslColumns: [
            { label: 'URL', width: '75%' },
            { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
        ],
        xslTips: false,
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
                headers: { Origin: process.env.APP_HOST || 'http://localhost:3000' },
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
            addPage(
                'product-category-page',
                '/product-category/:categorySlug',
                'product-category/[slug].vue',
            );
            addPage(
                'product-category-page-pager',
                '/product-category/:categorySlug/page/:pageNumber',
                'product-category/[slug].vue',
            );
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
