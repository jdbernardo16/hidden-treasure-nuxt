<script setup lang="ts">
const { FALLBACK_IMG } = useHelpers();
const props = defineProps({
  node: { type: Object, required: true },
  imageLoading: { type: String as PropType<'lazy' | 'eager'>, default: 'lazy' },
});

const imgWidth = 220;
const imgHeight = Math.round(imgWidth * 1.125);
</script>

<template>
  <NuxtLink v-if="node" :to="`/product-category/${decodeURIComponent(node.slug)}`"
    class="relative flex justify-center overflow-hidden rounded-lg item snap-mandatory snap-x group/product">
    <div>
      <NuxtImg :width="imgWidth" :height="imgHeight" class="absolute inset-0 object-cover w-full h-full saturate-0 group-hover/product:saturate-100 transition"
        :src="node.image?.sourceUrl || FALLBACK_IMG" :alt="node.image?.altText || node.name"
        :title="node.image?.title || node.name" :loading="imageLoading" :sizes="`sm:${imgWidth / 2}px md:${imgWidth}px`"
        placeholder placeholder-class="blur-xl" />
    </div>
    <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-gold to-brand-gold h-full opacity-[63%] group-hover/product:opacity-0  transition" />
    <span class="relative z-10 mt-auto mb-2 !text-[24px] font-semibold text-white capitalize md:text-base md:mb-4 px-4 text-center"
      v-html="node.name" />
  </NuxtLink>
</template>

<style lang="postcss" scoped>
.item {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  aspect-ratio: 4 / 5;
}
</style>
