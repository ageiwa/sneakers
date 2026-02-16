// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    css: [
        '~/assets/scss/app.scss',
        '~/assets/scss/pages/index.scss',
        // widgets
        '~/assets/scss/components/widgets/app-header.scss',
        '~/assets/scss/components/widgets/home-preview.scss',
        // shared
        '~/assets/scss/components/shared/container.scss',
        '~/assets/scss/components/shared/burger-button.scss'
    ],
    components: [
        '~/components/shared',
        '~/components/widgets'
    ]
})
