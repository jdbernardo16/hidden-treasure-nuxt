<script lang="ts" setup>
const { siteName, description, shortDescription, siteImage } = useAppConfig();
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
const { data } = useFetch(`${API_BASE_URL}/wp-json/wp/v2/pages`, {
  query: {
    slug: 'home',
    _fields: 'acf',
    acf_format: 'standard',
  },
  transform: (response) => {
    return response[0]?.acf || null;
  },
});
import { ProductsOrderByEnum } from '#woo';
const { data: productData } = await useAsyncGql('getProducts', {
  orderby: ProductsOrderByEnum.POPULARITY,
});

const allProducts = productData.value.products?.nodes || [];

const featuredProducts = allProducts.filter((product) =>
  product.terms.nodes.some((term) => term.taxonomyName === 'product_visibility' && term.slug === 'featured'),
);

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
    <HeroSlider :content="data?.hero_banner" />
  </section>
  <!-- <HeroBanner :data="data" /> -->

  <!-- Section 2: Services -->
  <section class="bg-brand-dark1">
    <div class="max-w-[1440px] m-auto px-4 lg:px-10 pt-10 lg:pt-20 pb-20">
      <div class="flex w-full justify-between mb-10 lg:mb-20">
        <div class="flex space-x-4 items-start">
          <div class="lg:block hidden pt-1">
            <img src="/images/spark.svg" alt="spark" />
          </div>
          <div>
            <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold animateUp">{{ data?.f2_title }}</h2>
            <p class="text-white animateUp">{{ data?.f2_description }}</p>
          </div>
        </div>
        <div></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16">
        <div
          v-for="item in data?.f2_services"
          @click="navigateTo(item.link)"
          class="space-y-6 px-4 pt-20 pb-10 rounded-t-full border-2 border-brand-gold group/service transition hover:bg-brand-gold cursor-pointer hover:-translate-y-5">
          <img class="m-auto animateUp" :src="item.icon.url" alt="Target" width="130" height="130" />
          <div class="text-center space-y-4">
            <p class="text-brand-gold text-3xl font-semibold h-[72px] line-clamp-2 animateUp group-hover/service:text-brand-dark1 transition">
              {{ item.title }}
            </p>
            <p class="text-white animateUp lg:min-h-[72px]">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
      <!-- <ServiceSlider :data="data?.f2_services" /> -->
    </div>
  </section>

  <AboutSection :data="data" />

  <BlogSection :data="data" />

  <!-- <VideoSection /> -->

  <!-- <section class="bg-brand-dark1">
<div class="w-full h-[50vh] bg-fixed bg-center bg-cover bg-no-repeat opacity-50" style="background-image: url('/images/treasure.jpeg')">

</div>
</section> -->

  <!-- Section 3: Advantages -->
  <!-- <PortfolioSection /> -->

  <section class="bg-brand-dark1">
    <div class="max-w-[1440px] m-auto px-4 lg:px-20 lg:pt-20 lg:pb-20 py-10">
      <div class="text-center mb-10 lg:mb-16">
        <p class="artegra text-3xl lg:text-[40px] text-brand-gold animateUp">{{ data?.consignment_header }}</p>
      </div>
      <div class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-20 mb-10 lg:mb-16">
        <ProductCard
          v-for="(node, i) in featuredProducts.slice(0, 4)"
          :key="node.databaseId"
          class="w-full animateUp"
          :node="node"
          :index="i"
          :class="{
            hidden: i === featuredProducts.length - 1,
            'lg:block': i === featuredProducts.length - 1,
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
          <img src="/images/spark.svg" alt="spark" />
        </div>
        <div>
          <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold animateUp">{{ data?.testimony_header }}</h2>
          <p class="text-white max-w-[489px] animateUp">
            {{ data?.testimony_description }}
          </p>
        </div>
      </div>
      <div class="w-full px-4 md:px-10 lg:px-[160px] animateUp">
        <TestimonySlider :items="data?.testimonies" />
      </div>
    </div>
  </section>

  <section id="your-treasures">
    <PartnerSlider :data="data" />
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
