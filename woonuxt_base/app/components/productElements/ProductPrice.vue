<script setup lang="ts">
interface ProductPriceProps {
  regularPrice?: string | null;
  salePrice?: string | null;
}

const { regularPrice, salePrice } = defineProps<ProductPriceProps>();
</script>

<template>
  <div v-if="regularPrice">
    <div class="flex items-center space-x-1 text-sm mb-1">
      <p class="text-brand-gold">Price</p>
      <p class="text-white line-through">{{regularPrice}}</p>
    </div>
    <div v-if="salePrice" class="flex items-center space-x-1 text-sm mb-3">
      <p class="text-brand-gold">Discounted Price:</p>
      <p class="text-white stroke">{{salePrice}}</p>
    </div>
  </div>
</template>
