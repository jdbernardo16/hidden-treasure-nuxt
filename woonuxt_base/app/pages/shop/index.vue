<script lang="ts" setup>
import { ProductsOrderByEnum } from '#woo';
import { ArrowRight } from 'lucide-vue-next';
const { siteName, description, shortDescription, siteImage } = useAppConfig();

const { data } = await useAsyncGql('getProductCategories', { first: 6 });
const productCategories = data.value?.productCategories?.nodes || [];

const { data: productData } = await useAsyncGql('getProducts', {
    orderby: ProductsOrderByEnum.POPULARITY,
});

const allProducts = productData.value.products?.nodes || [];

const featuredProducts = allProducts.filter((product) =>
    product.terms.nodes.some(
        (term) => term.taxonomyName === 'product_visibility' && term.slug === 'featured',
    ),
);

const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
const { data: cms } = useFetch(`${API_BASE_URL}/wp-json/wp/v2/pages`, {
    query: {
        slug: 'consignment',
        _fields: 'acf',
        acf_format: 'standard',
    },
    transform: (response) => {
        return response[0]?.acf || null;
    },
});

useSeoMeta({
    title: `Shop`,
    ogTitle: siteName,
    description: description,
    ogDescription: shortDescription,
    ogImage: siteImage,
    twitterCard: `summary_large_image`,
});

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
    <main>
        <section class="w-full h-[calc(100vh-82px)] bg-black">
            <ShopSlider :items="cms?.frame_1" />
        </section>
        <section class="bg-brand-dark1">
            <div class="max-w-full md:max-w-[1440px] m-auto px-4 md:px-10 pt-20 pb-10">
                <div class="flex items-center justify-between">
                    <h2 class="text-lg artegra md:text-4xl text-brand-gold">
                        {{ cms?.frame_2?.header }}
                    </h2>
                    <div class="flex items-center space-x-2 text-brand-gold">
                        <NuxtLink to="/categories">{{ $t('messages.general.viewAll') }}</NuxtLink>
                        <ArrowRight class="w-5 h-5" />
                    </div>
                </div>
                <div
                    class="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-8"
                >
                    <CategoryCard
                        v-for="(category, i) in productCategories"
                        :key="i"
                        class="w-full"
                        :node="category"
                    />
                </div>
            </div>
        </section>

        <section class="bg-brand-dark1">
            <div
                class="max-w-full md:max-w-[1440px] m-auto px-4 md:px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
            >
                <div
                    v-for="item in cms?.frame_2?.items"
                    :key="item.title"
                    class="flex items-center space-x-6 px-6 py-8 bg-[#535353] text-brand-gold rounded-lg"
                >
                    <div class="w-14">
                        <nuxt-img
                            :src="item?.icon?.url"
                            alt="icon"
                            width="56"
                            height="56"
                            loading="eager"
                            format="webp"
                            quality="90"
                        />
                    </div>
                    <div class="space-y-3 w-[calc(100%-80px)]">
                        <h2 class="text-xl font-semibold">{{ item?.title }}</h2>
                        <p>{{ item?.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-brand-dark1">
            <div class="max-w-full md:max-w-[1440px] m-auto px-4 md:px-10 py-10">
                <div class="flex items-center justify-between">
                    <h2 class="text-lg artegra md:text-4xl text-brand-gold">
                        {{ $t('messages.shop.popularProducts') }}
                    </h2>
                    <div class="flex items-center space-x-2 text-brand-gold">
                        <NuxtLink to="/products">{{ $t('messages.general.viewAll') }}</NuxtLink>
                        <ArrowRight class="w-5 h-5" />
                    </div>
                </div>
                <ProductRow
                    :products="featuredProducts"
                    class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-8"
                />
            </div>
        </section>
    </main>
</template>

<style scoped>
.brand img {
    max-height: min(8vw, 120px);
    object-fit: contain;
    object-position: center;
}

@media (max-width: 768px) {
    .grid-cols-6 {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
