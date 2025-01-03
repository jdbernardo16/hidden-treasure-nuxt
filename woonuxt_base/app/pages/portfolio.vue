<script setup lang="ts">
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
const { data } = useFetch(`${API_BASE_URL}/wp-json/wp/v2/pages`, {
    query: {
        slug: 'portfolio',
        _fields: 'acf',
        acf_format: 'standard',
    },
    transform: (response) => {
        return response[0]?.acf || null;
    },
});

useSeoMeta({
    title: 'Portfolio',
    description:
        'Transforming Ideas into, Impactful Campaigns, Turning bold ideas into campaigns that inspire, engage, and deliver results. Let’s create something impactful together.',
    ogTitle: 'Portfolio',
    ogDescription:
        'Transforming Ideas into, Impactful Campaigns, Turning bold ideas into campaigns that inspire, engage, and deliver results. Let’s create something impactful together.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Portfolio',
    twitterDescription:
        'Transforming Ideas into, Impactful Campaigns, Turning bold ideas into campaigns that inspire, engage, and deliver results. Let’s create something impactful together.',
});
</script>
<template>
    <section class="bg-brand-dark1">
        <div class="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:items-center">
            <div class="mx-auto max-w-2xl text-center">
                <div class="portfolio-header" v-html="data?.frame_1?.header" />
                <div class="mt-4 text-white" v-html="data?.frame_1?.description" />
            </div>
        </div>
    </section>
    <section>
        <div class="pb-16 bg-brand-dark1">
            <PortfolioSlider :portfolio="data?.frame_2?.portfolio" />
        </div>
    </section>
</template>
