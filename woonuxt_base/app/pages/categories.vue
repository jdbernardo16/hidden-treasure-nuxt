<script lang="ts" setup>
const { data } = await useAsyncGql('getProductCategories');
const productCategories = data.value.productCategories?.nodes as ProductCategory[];

useHead({
  title: `Categories`,
  meta: [{ name: 'description', content: 'All product categories' }],
  link: [{ rel: 'canonical', href: 'https://v3.woonuxt.com/categories' }],
});
</script>

<template>
  <section class="bg-brand-dark4">
    <main class="max-w-[1440px] m-auto px-10 pb-10 py-10">
      <h2 class="text-2xl font-semibold md:text-4xl text-brand-gold artegra">{{ $t('messages.shop.shopByCategory') }}</h2>
      <div v-if="productCategories?.length" class="grid grid-cols-2 gap-4 my-6 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
        <CategoryCard v-for="(category, i) in productCategories" :key="i" :node="category" :image-loading="i <= 2 ? 'eager' : 'lazy'" />
      </div>
    </main>
  </section>
</template>
