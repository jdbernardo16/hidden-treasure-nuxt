<script setup lang="ts">
const { stripHtml } = useHelpers();
const route = useRoute();
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;

const { data, error } = useFetch(
    `${API_BASE_URL}/wp-json/wp/v2/package?slug=${route.params.slug}`,
    {
        query: {
            _fields: 'acf,title,date,slug', // Select specific fields to reduce payload size
            acf_format: 'standard', // Ensure the format for ACF data
        },
        transform: (response) => {
            return response?.length > 0 ? response[0] : null; // Return the first post or null
        },
    },
);

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>
<template>
    <Head>
        <Title>{{ data?.title?.rendered || '' }}</Title>
        <Meta name="description" hid="description" :content="stripHtml(data?.acf?.content) || ''" />
        <Meta property="og:title" hid="og:title" :content="data?.title?.rendered || ''" />
        <Meta
            property="og:description"
            hid="og:description"
            :content="stripHtml(data?.acf?.content) || ''"
        />
        <Meta property="og:image" hid="og:image" :content="data?.acf?.image?.url || ''" />
        <Meta name="twitter:card" hid="twitter:card" content="summary_large_image" />
    </Head>
    <section class="relative h-[300px] lg:h-[473px]">
        <NuxtImg
            :src="data?.acf?.image?.url"
            alt="banner"
            format="webp"
            quality="80"
            loading="eager"
            class="w-full h-full object-cover"
        />
        <div
            class="bg-gradient-to-t from-black to-transparent w-full h-full absolute top-0 left-0 flex flex-col justify-end"
        >
            <div class="px-4 lg:px-10 py-10 lg:py-16 space-y-6">
                <p class="font-bold text-4xl sm:text-6xl artegra text-brand-gold">
                    {{ data?.title?.rendered }}
                </p>
            </div>
        </div>
    </section>
    <section>
        <div class="max-w-[1000px] px-4 mx-auto lg:px-20 lg:py-16 py-10">
            <div class="wysiwyg" v-html="data?.acf?.content" />
        </div>
    </section>

    <ContactForm />
</template>
