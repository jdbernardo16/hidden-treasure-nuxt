<script setup lang="ts">
const { t } = useI18n();
const { node } = defineProps({
  node: { type: Object as PropType<Product>, required: true },
});

const { storeSettings } = useAppConfig();

const salePercentage = computed((): string => {
  if (!node?.rawSalePrice || !node?.rawRegularPrice) return '';
  const salePrice = parseFloat(node?.rawSalePrice);
  const regularPrice = parseFloat(node?.rawRegularPrice);
  return Math.round(((salePrice - regularPrice) / regularPrice) * 100) + ` %`;
});

const showSaleBadge = computed(() => node.rawSalePrice && storeSettings.saleBadge !== 'hidden');

const textToDisplay = computed(() => {
  if (storeSettings?.saleBadge === 'percent') return salePercentage.value;
  return t('messages.shop.onSale') ? t('messages.shop.onSale') : 'Sale';
});
</script>

<template>
  <span v-if="showSaleBadge" class="red-badge">{{ textToDisplay }}</span>
</template>

<style lang="postcss" scoped>
.red-badge {
  @apply bg-brand-gold text-xs text-white tracking-tight px-1.5 leading-6 z-10 border border-brand-gold;
  background: #000 linear-gradient(0deg, #1A1C1C, #1A1C1C);
}
</style>
