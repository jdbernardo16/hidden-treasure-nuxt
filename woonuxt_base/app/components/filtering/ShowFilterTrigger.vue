<script setup>
const { toggleBodyClass, removeBodyClass } = useHelpers();
const { isFiltersActive } = await useFiltering();
onBeforeUnmount(() => {
    removeBodyClass('show-filters');
});
</script>

<template>
    <div class="relative inline-flex -space-x-px shadow-sm rounded-m isolate">
        <button
            class="relative inline-flex items-center p-2 text-sm bg-transparent border border-brand-gold rounded-md hover:bg-brand-gold focus:z-20 text-brand-gold hover:text-white"
            aria-label="Show filters"
            @click.prevent="toggleBodyClass('show-filters')"
            title="Show filters"
        >
            <Icon
                name="ion:funnel-outline"
                size="18"
                class="transition-transform transform transform-origin-center"
            />
        </button>
        <span
            class="absolute z-20 w-2.5 h-2.5 rounded-full bg-primary -top-1 -right-1"
            v-if="isFiltersActive"
        />
    </div>
</template>
