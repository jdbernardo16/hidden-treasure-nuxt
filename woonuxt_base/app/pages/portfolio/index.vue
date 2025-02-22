<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFetch } from '#app';
import { ChevronRight } from 'lucide-vue-next';
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

const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
const { data: allPortfolios } = useFetch(`${API_BASE_URL}/wp-json/wp/v2/portfolio`, {
    query: {
        _fields: 'thumbnail,acf,title,date,slug,featured_media', // Select specific fields to reduce payload size
        acf_format: 'standard', // Ensure the format for ACF data
    },
    transform: (response) => {
        return response || []; // Return the array of posts or an empty array
    },
});

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
</script>
<template>
    <section class="bg-brand-dark4">
        <div class="mx-auto max-w-screen-xl px-4 py-10 lg:py-20 lg:flex lg:items-center">
            <div class="mx-auto text-center space-y-4 max-w-3xl">
                <div class="font-semibold text-white">
                    <p>{{ data?.frame_1?.eyebrow }}</p>
                </div>
                <div>
                    <h1 class="text-4xl lg:text-5xl font-extrabold text-primary lg:leading-relaxed">
                        {{ data?.frame_1?.header }}
                    </h1>
                </div>
                <div class="text-white text-lg" v-html="data?.frame_1?.description" />
            </div>
        </div>
    </section>
    <section class="bg-brand-dark4">
        <div class="max-w-[1440px] px-4 lg:px-20 py-10 lg:pt-20 lg:pb-40 m-auto">
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 md:gap-10 lg:gap-16 portfolio-container"
            >
                <div
                    class="text-white portfolio-item"
                    v-for="project in allPortfolios"
                    :key="project?.title?.rendered"
                >
                    <div class="aspect-w-1 aspect-h-1 bg-white overflow-hidden rounded-lg mb-6">
                        <NuxtImg
                            quality="80"
                            format="webp"
                            :src="project.acf?.thumbnail?.image?.url"
                            :alt="project?.title?.rendered"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 class="text-xl lg:text-2xl font-bold mb-2 lg:h-16 line-clamp-2">
                            {{ project?.title?.rendered }}
                        </h3>
                        <p class="line-clamp-2 leading-relaxed mb-4">
                            {{ project.acf?.thumbnail?.excerpt }}
                        </p>
                        <div class="relative space-x-2 mb-6">
                            <div
                                v-for="tag in project?.acf?.frame_1?.tags"
                                :key="tag"
                                class="bg-primary text-white inline-block text-sm font-semibold px-2 py-1"
                            >
                                {{ tag.tag_label }}
                            </div>
                        </div>
                        <a
                            :href="`/portfolio/${project?.slug}`"
                            class="flex items-center space-x-2 text-white transition hover:text-primary"
                        >
                            <p>View project</p>
                            <ChevronRight class="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
