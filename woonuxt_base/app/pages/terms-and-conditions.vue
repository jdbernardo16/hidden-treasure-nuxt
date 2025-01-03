<template>
    <section>
        <div class="max-w-[1000px] m-auto px-4 lg:px-20 py-10 min-h-screen lg:py-16">
            <h2 class="text-3xl lg:text-[40px] leading-tight mb-6 artegra text-brand-gold">
                {{ data?.title }}
            </h2>
            <div class="wysiwyg" v-html="data?.content" />
        </div>
    </section>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
const { data } = useFetch(`${API_BASE_URL}/wp-json/wp/v2/pages`, {
    query: {
        slug: 'terms-and-conditions',
        _fields: 'acf',
        acf_format: 'standard',
    },
    transform: (response) => {
        return response[0]?.acf || null;
    },
});

useSeoMeta({
    title: 'Terms and Conditions',
    description: 'Terms and Conditions',
    ogTitle: 'Terms and Conditions',
    ogDescription: 'Terms and Conditions',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Terms and Conditions',
    twitterDescription: 'Terms and Conditions',
});
</script>
