<template>
    <div class="product-list">
        <Container>
            <ProductCard v-for="_ in 20" src="https://img.freepik.com/free-photo/black-cat-crossing-neon-city-street_23-2152005296.jpg?semt=ais_hybrid&w=740&q=80">
                <template #actions>
                    <FavoriteButton />
                </template>

                <template #price-normal>
                    16 285 ₽
                </template>

                <template #price-x2>
                    8 328 ₽ × 2
                </template>

                <template #name>
                    Adidas Originals Gazelle
                </template>
            </ProductCard>
        </Container>

        <div class="product-list__footer">
            <button class="footer__load-yet">
                Показать еще
            </button>
        </div>
    </div>
</template>