<script setup lang="ts">
    const navs = [
        { name: 'Мужчинам', href: '#' },
        { name: 'Женщинам', href: '#' },
        { name: 'Каталог', href: '#' },
        { name: 'Доставка', href: '#' },
        { name: 'Блог', href: '#' },
        { name: 'О нас', href: '#' },
    ]
</script>

<template>
    <div class="app-header">
        <Container>
            <NuxtLink class="app-header__logo" to="/" />

            <nav class="app-header__navs">
                <ul>
                    <li v-for="nav in navs">
                        <NuxtLink :to="nav.href">
                            {{ nav.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <BurgerButton />
        </Container>
    </div>
</template>