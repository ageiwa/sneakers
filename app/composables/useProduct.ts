import type { Product } from '~/entities/Product/types'

export type GetProductsResponse = {
    total: number
    totalPages: number
    currentPage: number
    limit: number
    products: Product[]
}

export function useProduct() {
    const products = useState<Product[]>('products', () => [])

    const totalPages = ref(0)
    const tolalItems = ref(0)
    const page = ref(1)
    const limit = ref(4)

    const queryParams = computed(() => ({
        page: page.value,
        limit: limit.value
    }))

    const { data, status, refresh } = useFetch<GetProductsResponse>('https://test-task-api.tapir.ws/products', {
        query: queryParams,
        transform: newProducts => {
            totalPages.value = newProducts.totalPages
            tolalItems.value = newProducts.total
            products.value.push(...newProducts.products)

            return {
                ...newProducts,
                products: products.value
            }
        },
        default: () => ({
            total: tolalItems.value,
            totalPages: totalPages.value,
            currentPage: page.value,
            limit: limit.value,
            products: products.value
        }),
    })

    function showMore() {
        page.value++
    }

    function tryAgain() {
        refresh()
    }

    onUnmounted(() => {
        clearNuxtState('products')
    })

    return {
        data,
        status,
        showMore,
        tryAgain
    }
}