<script setup lang="ts">
const route = useRoute();
const { storeSettings } = useAppConfig();
const props = defineProps({
    node: { type: Object as PropType<Product>, required: true },
    index: { type: Number, default: 1 },
});

const imgWidth = 280;
const imgHeight = Math.round(imgWidth * (488 / 284));

// example: ?filter=pa_color[green,blue],pa_size[large]
const filterQuery = ref(route.query?.filter as string);
const paColor = ref(filterQuery.value?.split('pa_color[')[1]?.split(']')[0]?.split(',') || []);

// watch filterQuery
watch(
    () => route.query,
    () => {
        filterQuery.value = route.query.filter as string;
        paColor.value = filterQuery.value?.split('pa_color[')[1]?.split(']')[0]?.split(',') || [];
    },
);

const mainImage = computed<string>(
    () =>
        props.node?.image?.producCardSourceUrl ||
        props.node?.image?.sourceUrl ||
        '/images/placeholder.jpg',
);
const imagetoDisplay = computed<string>(() => {
    if (paColor.value.length) {
        const activeColorImage = props.node?.variations?.nodes.filter((variation) => {
            const hasMatchingAttributes = variation.attributes?.nodes.some((attribute) =>
                paColor.value.some((color) => attribute?.value?.includes(color)),
            );
            const hasMatchingSlug = paColor.value.some((color) => variation.slug?.includes(color));
            return hasMatchingAttributes || hasMatchingSlug;
        });
        if (activeColorImage?.length)
            return (
                activeColorImage[0]?.image?.producCardSourceUrl ||
                activeColorImage[0]?.image?.sourceUrl ||
                mainImage.value
            );
    }
    return mainImage.value;
});
</script>

<template>
    <NuxtLink
        v-if="node.slug"
        :to="`/product/${decodeURIComponent(node.slug)}`"
        :title="node.name"
        class="cursor-pointer space-y-6 group/product relative"
    >
        <div>
            <SaleBadge :node class="absolute top-2 right-2" />
            <div class="relative bg-transparent aspect-[284/488]">
                <div
                    class="w-full h-full border-4 transition group-hover/product:scale-105 rounded-lg overflow-hidden shadow-lg"
                >
                    <NuxtImg
                        :alt="node.image?.altText || node.name || 'Product image'"
                        :title="node.image?.title || node.name"
                        :src="node.image?.sourceUrl || '/images/placeholder.jpg'"
                        :loading="index <= 3 ? 'eager' : 'lazy'"
                        class="w-full h-full object-cover"
                        quality="80"
                        format="webp"
                        :size="imgWidth"
                        :width="imgWidth"
                        :height="imgHeight"
                        placeholder
                        placeholder-class="blur-xl"
                    />
                </div>
            </div>
        </div>
        <div>
            <div class="mb-4 border-b-2 pb-4 border-brand-gold">
                <div>
                    <p class="text-white line-clamp-2 min-h-12">{{ node.name }}</p>
                </div>
            </div>

            <ProductPrice
                class="text-sm"
                :sale-price="node.salePrice"
                :regular-price="node.regularPrice"
            />
            <div
                class="cursor-pointer px-2 py-1.5 border border-brand-gold text-white text-xs w-full lg:text-left text-center lg:w-fit hover:bg-brand-gold transition"
            >
                View
            </div>
        </div>
    </NuxtLink>
</template>
