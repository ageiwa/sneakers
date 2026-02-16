// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    css: [
        '~/assets/scss/app.scss',
        // pages
        '~/assets/scss/pages/catalog.scss',
        // widgets
        '~/assets/scss/components/widgets/app-header.scss',
        '~/assets/scss/components/widgets/app-footer.scss',
        '~/assets/scss/components/widgets/home-preview.scss',
        '~/assets/scss/components/widgets/product-list.scss',
        // shared
        '~/assets/scss/components/shared/container.scss',
        '~/assets/scss/components/shared/burger-button.scss',
        '~/assets/scss/components/shared/product-card.scss',
        '~/assets/scss/components/shared/favorite-button.scss',
    ],
    components: [
        '~/components/shared',
        '~/components/widgets'
    ]
})
