<script setup lang="ts">
    const sections = [
        {
            name: 'Каталог',
            navs: [
                { name: 'Все бренды', href: '#' },
                { name: 'Nike', href: '#' },
                { name: 'Adidas', href: '#' },
                { name: 'Puma', href: '#' },
                { name: 'New Balance', href: '#' },
            ]
        },
        {
            name: 'Помощь',
            navs: [
                { name: 'Доставка', href: '#' },
                { name: 'Заказ и оплата', href: '#' },
                { name: 'Обмен и Возврат', href: '#' },
                { name: 'F. A. Q.', href: '#' },
            ]
        },
        {
            name: 'Информация',
            navs: [
                { name: 'Преимущества', href: '#' },
                { name: 'Гарантия и безопасность', href: '#' },
                { name: 'Индивидуальный заказ', href: '#' },
                { name: 'Акции', href: '#' },
            ]
        },
        {
            name: 'Компания',
            navs: [
                { name: 'О нас', href: '#' },
                { name: 'Блог', href: '#' },
                { name: 'Отзывы', href: '#' },
                { name: 'Контакты', href: '#' },
            ]
        },
    ]
</script>

<template>
    <div class="app-footer">
        <Container>
            <nav v-for="section in sections" class="app-footer__section">
                <span class="section__title">
                    {{ section.name }}
                </span>

                <ul>
                    <li v-for="nav in section.navs">
                        <NuxtLink :to="nav.href">
                            {{ nav.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </Container>
    </div>
</template>