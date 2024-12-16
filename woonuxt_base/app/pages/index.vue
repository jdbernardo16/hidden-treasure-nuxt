<script lang="ts" setup>
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
const { siteName, description, shortDescription, siteImage } = useAppConfig();
import { ArrowRight } from 'lucide-vue-next';
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
    <section>
        
        <HeroSlider />
    </section>
    <!-- <HeroBanner :data="data" /> -->

    <!-- Section 2: Services -->
    <section class="bg-brand-dark1">
        <div class="max-w-[1440px] m-auto px-4 lg:px-20 pt-10 lg:pt-20 pb-20">
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
    <PortfolioSection />

    <section class="bg-brand-dark1">
        <div class="max-w-[1440px] m-auto px-4 lg:px-20 lg:pt-20 lg:pb-20 py-10">
            <div class="text-center mb-10 lg:mb-16">
                <p class="artegra text-3xl lg:text-[40px] text-brand-gold animateUp">Consigned Items</p>
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
                <Button @click="navigateTo('/products')" class="w-[185px]">View All</Button>
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
</template>

<style scope lang="scss">
.brand img {
    max-height: min(8vw, 120px);
    object-fit: contain;
    object-position: center;
}
</style>
