<script setup lang="ts">
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

const mockProjects = [
    {
        image: 'https://picsum.photos/id/147/300/300',
        title: 'Miraculous Education',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        tags: ['Education', 'Technology'],
        link: '#',
    },
    {
        image: 'https://picsum.photos/id/238/300/300',
        title: 'Innovative Healthcare',
        description:
            'Praesent egestas tristique nibh. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.',
        tags: ['Healthcare', 'Innovation'],
        link: '#',
    },
    {
        image: 'https://picsum.photos/id/239/300/300',
        title: 'Sustainable Agriculture',
        description:
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        tags: ['Agriculture', 'Sustainability'],
        link: '#',
    },
    {
        image: 'https://picsum.photos/id/240/300/300',
        title: 'Creative Arts Platform',
        description:
            'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        tags: ['Arts', 'Creativity'],
        link: '#',
    },
    {
        image: 'https://picsum.photos/id/241/300/300',
        title: 'Financial Technology Solutions',
        description:
            'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
        tags: ['Finance', 'Technology'],
        link: '#',
    },
    {
        image: 'https://picsum.photos/id/242/300/300',
        title: 'Renewable Energy Initiatives',
        description:
            'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
        tags: ['Energy', 'Environment'],
        link: '#',
    },
];
</script>
<template>
    <section class="bg-brand-dark4">
        <div class="mx-auto max-w-screen-xl px-4 py-10 lg:py-20 lg:flex lg:items-center">
            <div class="mx-auto text-center space-y-4 max-w-3xl">
                <div class="font-semibold text-white">
                    <p>Portfolio</p>
                </div>
                <div>
                    <h1 class="text-4xl lg:text-5xl font-extrabold text-primary lg:leading-relaxed">
                        Our Diverse Project Showcase
                    </h1>
                </div>
                <div class="text-white">
                    <p class="lg:text-lg">
                        Turning bold ideas into campaigns that inspire, engage, and deliver results.
                        Let’s create something impactful together.
                    </p>
                </div>
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
                    v-for="project in mockProjects"
                    :key="project.title"
                >
                    <div class="aspect-w-1 aspect-h-1 bg-white overflow-hidden rounded-lg mb-6">
                        <NuxtImg
                            quality="80"
                            format="webp"
                            :src="project.image"
                            :alt="project.title"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 class="text-xl lg:text-2xl font-bold mb-2 lg:h-16 line-clamp-2">
                            {{ project.title }}
                        </h3>
                        <p class="line-clamp-2 leading-relaxed mb-4">
                            {{ project.description }}
                        </p>
                        <div class="relative space-x-2 mb-6">
                            <div
                                v-for="tag in project.tags"
                                :key="tag"
                                class="bg-primary text-white inline-block text-sm font-semibold px-2 py-1"
                            >
                                {{ tag }}
                            </div>
                        </div>
                        <a
                            :href="project.link"
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
