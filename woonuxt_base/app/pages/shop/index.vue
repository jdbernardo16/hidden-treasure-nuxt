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
  product.terms.nodes.some((term) => term.taxonomyName === 'product_visibility' && term.slug === 'featured'),
);

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
      <ShopSlider />
    </section>
    <section>
      <PartnerSlider />
    </section>

    <section class="bg-brand-dark1">
      <div class="max-w-full md:max-w-[1440px] m-auto px-4 md:px-10 pt-20 pb-10">
        <div class="flex items-center justify-between">
          <h2 class="text-lg artegra md:text-4xl text-brand-gold">{{ $t('messages.shop.shopByCategory') }}</h2>
          <div class="flex items-center space-x-2 text-brand-gold">
            <NuxtLink to="/categories">{{ $t('messages.general.viewAll') }}</NuxtLink>
            <ArrowRight class="w-5 h-5" />
          </div>
        </div>
        <div class="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-8">
          <CategoryCard v-for="(category, i) in productCategories" :key="i" class="w-full" :node="category" />
        </div>
      </div>
    </section>

    <section class="bg-brand-dark1">
      <div class="max-w-full md:max-w-[1440px] m-auto px-4 md:px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div class="flex items-center space-x-6 px-6 py-8 bg-[#535353] text-brand-gold rounded-lg">
          <div class="w-14">
            <img src="/images/truck.svg" alt="truck" />
          </div>
          <div class="space-y-3 w-[calc(100%-80px)]">
            <h2 class="text-xl font-semibold">Fast Shipping</h2>
            <p>Get your collectibles quickly and securely</p>
          </div>
        </div>
        <div class="flex items-center space-x-6 px-6 py-8 bg-[#535353] text-brand-gold rounded-lg">
          <div class="w-14">
            <img src="/images/relax.svg" alt="relax" />
          </div>
          <div class="space-y-3 w-[calc(100%-80px)]">
            <h2 class="text-xl font-semibold">Peace Of Mind</h2>
            <p>30 days money back guarantee</p>
          </div>
        </div>
        <div class="flex items-center space-x-6 px-6 py-8 bg-[#535353] text-brand-gold rounded-lg">
          <div class="w-14">
            <img src="/images/secure.svg" alt="secure" />
          </div>
          <div class="space-y-3 w-[calc(100%-80px)]">
            <h2 class="text-xl font-semibold">Secure Payment</h2>
            <p>Your payment are safe with us.</p>
          </div>
        </div>
        <div class="flex items-center space-x-6 px-6 py-8 bg-[#535353] text-brand-gold rounded-lg">
          <div class="w-14">
            <img src="/images/chat.svg" alt="chat" />
          </div>
          <div class="space-y-3 w-[calc(100%-80px)]">
            <h2 class="text-xl font-semibold">Support 24/7</h2>
            <p>24/7 Online support</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-brand-dark1">
      <div class="max-w-full md:max-w-[1440px] m-auto px-4 md:px-10 py-10">
        <div class="flex items-center justify-between">
          <h2 class="text-lg artegra md:text-4xl text-brand-gold">{{ $t('messages.shop.popularProducts') }}</h2>
          <div class="flex items-center space-x-2 text-brand-gold">
            <NuxtLink to="/products">{{ $t('messages.general.viewAll') }}</NuxtLink>
            <ArrowRight class="w-5 h-5" />
          </div>
        </div>
        <ProductRow :products="featuredProducts" class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-8" />
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
