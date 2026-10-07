// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  // Completely disables TypeScript checking during build & packaging
  typescript: {
    typeCheck: false
  },

  // Auto-scans components and composables in root folders
  components: [
    { path: 'components', pathPrefix: false }
  ],
  imports: {
    dirs: ['composables']
  },

  css: ['assets/css/main.css'],

  app: {
    head: {
      title: 'Zamari Surfaces | Bathroom & Kitchen Fixtures & Natural Stone',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Bathroom and kitchen fixtures, sinks, faucets and granite, quartz and marble countertops. Browse online or request a quote on WhatsApp.' },
        { name: 'theme-color', content: '#23201e' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Bathroom & Kitchen Fixtures and Countertops' },
        { property: 'og:description', content: 'Browse bathroom and kitchen fixtures, sinks and stone countertops. Delivered to your door.' },
        { property: 'og:image', content: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=75' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Hanken+Grotesk:wght@400;500&display=swap' }
      ]
    }
  }
})