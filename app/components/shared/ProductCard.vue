<script setup lang="ts">
    const props = defineProps<{
        src?: string
    }>()
</script>

<template>
    <div class="product-card">
        <div class="product-card__actions">
            <slot name="actions"></slot>
        </div>

        <img class="product-card__img" :src="props.src">

        <div class="product-card__info">
            <div class="info__price">
                <span class="price__price-normal">
                    <slot name="price-normal"></slot>
                </span>

                <span class="price__price-x2">
                    <slot name="price-x2"></slot>
                </span>
            </div>

            <span class="info__name">
                <slot name="name"></slot>
            </span>
        </div>
    </div>
</template>