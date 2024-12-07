<script lang="ts" setup>
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
const { siteName, description, shortDescription, siteImage } = useAppConfig();
const { data } = useFetch(`${API_BASE_URL}/wp-json/wp/v2/pages`, {
    query: {
        slug: 'home',
        _fields: 'acf',
        acf_format: 'standard'
    },
    transform: (response) => {
        return response[0]?.acf || null
    }
})
import { ProductsOrderByEnum } from '#woo';
const { data: productData } = await useAsyncGql('getProducts', { first: 5, orderby: ProductsOrderByEnum.POPULARITY });
const popularProducts = productData.value.products?.nodes || [];

useSeoMeta({
  title: `Home`,
  ogTitle: siteName,
  description: description,
  ogDescription: shortDescription,
  ogImage: siteImage,
  twitterCard: `summary_large_image`,
});
</script>

<template>
    <HeroBanner :data="data" />

    <!-- Section 2: Services -->
    <section class="bg-brand-dark1">
        <div class="max-w-[1440px] m-auto px-4 lg:px-10 pt-10 lg:pt-20 pb-20">
            <div class="flex w-full justify-between mb-10 lg:mb-20">
                <div class="flex space-x-4 items-start">
                    <div class="lg:block hidden pt-1">
                        <img src="/images/spark.svg" alt="spark">
                    </div>
                    <div>
                        <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold animateUp">{{ data?.f2_title }}</h2>
                        <p class="text-white animateUp">{{ data?.f2_description }}</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <ServiceSlider :data="data?.f2_services" />
            
        </div>
    </section>

    <!-- Section 3: Advantages -->
    <section class="bg-brand-dark1">
        <div class="max-w-[1440px] m-auto px-4 lg:px-10 py-10 lg:pt-20 lg:pb-20">
            <div class="flex w-full justify-between mb-20 items-start lg:flex-row flex-col lg:space-y-0 space-y-4">
                <div class="flex lg:space-x-4 items-start">
                    <div class="pt-1 lg:block hidden">
                        <img src="/images/spark.svg" alt="spark">
                    </div>
                    <div>
                        <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold animateUp">Our Work, Your Inspiration</h2>
                        <p class="text-white animateUp">Discover how we’ve helped brands uncover their true potential.</p>
                    </div>
                </div>
                <div class="flex items-center text-brand-gold space-x-2 animateUp">
                    <p>View All</p>
                    <ArrowRight class="w-5 h-5" />
                </div>
            </div>

            <div class="space-y-10 lg:space-y-20">
                <div v-for="i,index in 3" class="portfolio flex items-center px-4 lg:px-20">
                    <div class="portfolio-image w-full lg:w-7/12 lg:block hidden">
                        <div class="w-[120%] aspect-[16/9] relative overflow-hidden image-item fadeIn">
                            <img :src="`https://picsum.photos/id/23${i}/800/450`" alt="luxeglow" class="object-cover w-full h-full">
                            <div class="absolute top-0 left-0 h-full w-full bg-brand-gold opacity-80 overlay"></div>
                        </div>
                    </div>
                    <div class="portfolio-content w-full lg:w-5/12 text-right space-y-6 relative z-[1]">
                        <div class="lg:w-[310px] port-title">
                            <p class="text-2xl artegra text-brand-gold animateUp">LuxeGlow Skincare
                                Redefining Elegance Online</p>
                        </div>
                        <div class="w-full bg-neutral-600 p-4 right-0 text-white animateUp">
                            <p>Hidden Treasures is a Luxury Marketing & Promotional Team specializing in Strategic Campaigns, Targeted Ads, Event Management, and Consignment Services bringing exposure and profit to our clients.</p>
                        </div>

                        <div>
                            <p class="text-neutral-400 mb-6 animateUp">E-Commerce • Branding • Digital Marketing</p>
                            <img class="port-link animateUp" src="/images/link.svg" alt="link">
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-brand-dark1">
        <div class="max-w-[1440px] m-auto px-4 lg:px-10 lg:pt-20 lg:pb-20 py-10">
            <div class="text-center mb-10 lg:mb-16">
                <p class="artegra text-3xl lg:text-[40px] text-brand-gold animateUp">Our Products</p>
            </div>
            <div class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-20 mb-10 lg:mb-16">
          
                <ProductCard
                v-for="(node, i) in popularProducts.slice(0, 4)"
                :key="node.databaseId"
                class="w-full animateUp"
                :node="node"
                :index="i"
                :class="{
                    hidden: i === popularProducts.length - 1,
                    'lg:block': i === popularProducts.length - 1,
                }" />
            </div>
            <div class="w-fit m-auto animateUp">
                <Button class="w-[185px]">View All</Button>
            </div>
        </div>
    </section>

    <section class="bg-brand-dark1">
        <div class="max-w-[1440px] m-auto px-4 lg:px-10 py-10 lg:py-20">
            <div class="flex space-x-4 items-start mb-10">
                <div class="pt-1 lg:block hidden">
                    <img src="/images/spark.svg" alt="spark">
                </div>
                <div>
                    <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold animateUp">What Our Clients Say</h2>
                    <p class="text-white max-w-[489px] animateUp">Discover how Hidden Treasures has transformed brands and driven success through our innovative solutions and dedicated partnership.</p>
                </div>
            </div>
            <div class="w-full px-4 md:px-10 lg:px-[160px] animateUp">
                <TestimonySlider />
            </div>
        </div>
    </section>

    <section id="your-treasures">
        <PartnerSlider />
    </section>

    <ContactForm />
    <!-- <div
        class="container flex flex-wrap items-center justify-center my-16 text-center gap-x-8 gap-y-4 brand lg:justify-between">
        <img src="/images/logoipsum-211.svg" alt="Brand 1" width="132" height="35" />
        <img src="/images/logoipsum-221.svg" alt="Brand 2" width="119" height="30" />
        <img src="/images/logoipsum-225.svg" alt="Brand 3" width="49" height="48" />
        <img src="/images/logoipsum-280.svg" alt="Brand 4" width="78" height="30" />
        <img src="/images/logoipsum-284.svg" alt="Brand 5" width="70" height="44" />
        <img src="/images/logoipsum-215.svg" alt="Brand 6" width="132" height="40" />
    </div>

    <section class="container my-16">
        <div class="flex items-end justify-between">
            <h2 class="text-lg font-semibold md:text-2xl">{{ $t('messages.shop.shopByCategory') }}</h2>
            <NuxtLink class="text-primary" to="/categories">{{ $t('messages.general.viewAll') }}</NuxtLink>
        </div>
        <div class="grid justify-center grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-6">
            <CategoryCard v-for="(category, i) in productCategories" :key="i" class="w-full" :node="category" />
        </div>
    </section>

    <section class="container grid gap-4 my-24 md:grid-cols-2 lg:grid-cols-4">
        <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
            <img src="/icons/box.svg" width="60" height="60" alt="Free Shipping" loading="lazy" />
            <div>
                <h3 class="text-xl font-semibold">Free Shipping</h3>
                <p class="text-sm">Free shipping on order over €50</p>
            </div>
        </div>
        <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
            <img src="/icons/moneyback.svg" width="60" height="60" alt="Money Back" loading="lazy" />
            <div>
                <h3 class="text-xl font-semibold">Peace of Mind</h3>
                <p class="text-sm">30 days money back guarantee</p>
            </div>
        </div>
        <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
            <img src="/icons/secure.svg" width="60" height="60" alt="Secure Payment" loading="lazy" />
            <div>
                <h3 class="text-xl font-semibold">100% Payment Secure</h3>
                <p class="text-sm">Your payment are safe with us.</p>
            </div>
        </div>
        <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
            <img src="/icons/support.svg" width="60" height="60" alt="Support 24/7" loading="lazy" />
            <div>
                <h3 class="text-xl font-semibold">Support 24/7</h3>
                <p class="text-sm">24/7 Online support</p>
            </div>
        </div>
    </section>

    <section class="container my-16" v-if="popularProducts">
        <div class="flex items-end justify-between">
            <h2 class="text-lg font-semibold md:text-2xl">{{ $t('messages.shop.popularProducts') }}</h2>
            <NuxtLink class="text-primary" to="/products">{{ $t('messages.general.viewAll') }}</NuxtLink>
        </div>
        <ProductRow :products="popularProducts" class="grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-8" />
    </section> -->
</template>

<style>
.brand img {
    max-height: min(8vw, 120px);
    object-fit: contain;
    object-position: center;
}
</style>
