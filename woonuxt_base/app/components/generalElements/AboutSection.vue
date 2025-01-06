<template>
    <section class="bg-neutral-100 relative" id="interactive-section">
        <div
            class="flex items-center lg:flex-row flex-col max-w-[1440px] m-auto px-4 lg:px-20 py-16 lg:space-x-20 lg:space-y-0 space-y-10"
        >
            <div class="w-full lg:w-6/12 lg:py-16 space-y-16 text-white">
                <div class="space-y-6">
                    <div class="flex space-x-4 items-start">
                        <div class="lg:block hidden pt-1 w-10">
                            <img src="/images/spark.svg" alt="spark" />
                        </div>
                        <div class="flex-1">
                            <h2
                                class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold animateUp mb-4"
                            >
                                {{ data.about_title }}
                            </h2>
                            <div
                                class="text-brand-dark1 animateUp mb-10"
                                v-html="data?.about_content"
                            />
                            <nuxt-link to="/about-us" class="animateUp w-fit">
                                <p class="sr-only">{{ data?.about_button_text }}</p>
                                <Button variant="secondary">{{ data?.about_button_text }}</Button>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-6/12 relative aspect-[4/3] overflow-hidden rounded-lg">
                <NuxtImg
                    quality="80"
                    loading="lazy"
                    width="560"
                    :alt="data?.about_image?.name"
                    :src="data?.about_image?.url"
                    placeholder-class="blur-xl"
                    class="w-full object-cover h-full"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps({
    data: {
        type: Object,
        default: null,
    },
});
</script>

<style scoped>
#interactive-image {
    transform: translate(0, 0);
    will-change: transform;
    /* Optimizes rendering performance */
}
</style>
