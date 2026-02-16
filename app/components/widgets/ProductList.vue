<script setup lang="ts">
    const {
        data,
        status,
        showMore,
        tryAgain
    } = useProduct()
</script>

<template>
    <div class="product-list">
        <Container>
            <NuxtLink v-for="product in data?.products" to="#">
                <ProductCard :src="product.image">
                    <template #actions>
                        <FavoriteButton />
                    </template>

                    <template #price-normal>
                        {{ product.price.toLocaleString() }} ₽
                    </template>

                    <template #price-x2>
                        {{ Math.ceil(product.price / 2).toLocaleString() }} ₽ × 2
                    </template>

                    <template #name>
                        {{ product.name }}
                    </template>
                </ProductCard>
            </NuxtLink>
        </Container>

        <div class="product-list__footer">
            <button v-if="status !== 'error' || data && data.currentPage < data.totalPages" class="footer__show-more" :class="{ 'footer__show-more_pending': status === 'pending' }" @click="showMore">
                <template v-if="status === 'success'">
                    Показать еще
                </template>

                <template v-else-if="status === 'pending'">
                    Загрузка...
                </template>
            </button>

            <template v-else>
                <span class="footer__error-message">
                    Произошла ошибка, попробуйте позже
                </span>

                <button class="footer__show-more" @click="tryAgain">
                    Повторить
                </button>
            </template>
        </div>
    </div>
</template>