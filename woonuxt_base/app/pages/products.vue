<script setup lang="ts">
const { setProducts, updateProductList } = useProducts();
const route = useRoute();
const { storeSettings } = useAppConfig();
const { isQueryEmpty } = useHelpers();

const { data } = await useAsyncGql('getProducts');
const allProducts = (data.value?.products?.nodes || []) as Product[];
setProducts(allProducts);

onMounted(() => {
    if (!isQueryEmpty.value) updateProductList();
});

watch(
    () => route.query,
    () => {
        if (route.name !== 'products') return;
        updateProductList();
    },
);

useHead({
    title: `Products`,
    meta: [{ hid: 'description', name: 'description', content: 'Products' }],
    script: [
        {
            innerHTML: `
            gtag('event', 'conversion', {'send_to': 'AW-16839371435/DzyfCO376pYaEKvV0d0-'});
            `,
        },
    ],
});
</script>

<template>
    <section class="bg-brand-dark4">
        <img
            v-if="route.query.filter === 'sale[true]'"
            quality="80"
            format="webp"
            src="/images/july4.png"
            alt="July 4 background"
            class="w-full"
        />
        <div
            class="max-w-[1440px] m-auto flex items-start gap-16 px-4 lg:px-10"
            v-if="allProducts.length"
        >
            <Filters class="border-brand-gold" v-if="storeSettings.showFilters" />

            <div class="w-full">
                <div class="flex items-center justify-between w-full gap-4 mt-8 md:gap-8">
                    <ProductResultCount />
                    <OrderByDropdown
                        class="hidden md:inline-flex"
                        v-if="storeSettings.showOrderByDropdown"
                    />
                    <ShowFilterTrigger v-if="storeSettings.showFilters" class="md:hidden" />
                </div>
                <ProductGrid />
            </div>
        </div>
        <NoProductsFound v-else
            >Could not fetch products from your store. Please check your
            configuration.</NoProductsFound
        >
    </section>
</template>
