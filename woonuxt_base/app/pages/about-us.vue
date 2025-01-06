<script setup lang="ts">
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
const { data } = useFetch(`${API_BASE_URL}/wp-json/wp/v2/pages`, {
    query: {
        slug: 'about-us',
        _fields: 'acf',
        acf_format: 'standard',
    },
    transform: (response) => {
        return response[0]?.acf || null;
    },
});

useSeoMeta({
    title: 'About Us',
    ogTitle: 'About Us',
    description:
        'Established in 2017, Hidden Treasures has grown into a globally recognized company servicing a portfolio of over $25 million. Our team, based around the world, brings a wealth of expertise enabling us to deliver exceptional services to clients across industries and continents. We have proudly serviced companies from California to Dubai and have successfully hosted events in iconic locations such as California, Las Vegas, Spain, Italy, and Monaco.',
    ogDescription:
        'Established in 2017, Hidden Treasures has grown into a globally recognized company servicing a portfolio of over $25 million. Our team, based around the world, brings a wealth of expertise enabling us to deliver exceptional services to clients across industries and continents. We have proudly serviced companies from California to Dubai and have successfully hosted events in iconic locations such as California, Las Vegas, Spain, Italy, and Monaco.',
    ogImage: '/_ipx/f_webp&q_90&s_93x50/images/ht-logo.png',
    twitterCard: `summary_large_image`,
});

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
    <section class="relative h-[300px] lg:h-[473px]">
        <NuxtImg
            :src="data?.frame_1?.banner?.url"
            alt="banner"
            format="webp"
            quality="90"
            loading="eager"
            class="w-full h-full object-cover"
        />
        <div
            class="bg-gradient-to-t from-black to-transparent w-full h-full absolute top-0 left-0 flex flex-col justify-end"
        >
            <div class="px-4 lg:px-10 py-10 lg:py-16 space-y-6">
                <p class="text-white text-2xl sm:text-4xl">{{ data?.frame_1?.header }}</p>
                <p class="font-bold text-4xl sm:text-6xl artegra text-brand-gold">
                    {{ data?.frame_1?.sub_header }}
                </p>
            </div>
        </div>
    </section>

    <!-- Introduction Section -->
    <section id="about" class="py-16">
        <div class="container mx-auto px-4 lg:px-10">
            <div class="flex flex-col md:flex-row items-center lg:space-x-10">
                <div class="md:w-1/2">
                    <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold mb-6">
                        {{ data?.frame_2?.title }}
                    </h2>
                    <div class="text-gray-600" v-html="data?.frame_2?.content" />
                </div>
                <div class="md:w-1/2 asepct-[4/3] mt-8 md:mt-0">
                    <nuxt-img
                        quality="80"
                        format="webp"
                        :src="data?.frame_2?.right_image?.url"
                        alt="collage"
                        class="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </section>

    <!-- Mission Statement Section -->
    <section id="mission" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4 lg:px-10">
            <div class="flex flex-col md:flex-row items-center lg:space-x-10">
                <div class="md:w-1/2 asepct-[4/3]">
                    <nuxt-img
                        quality="80"
                        format="webp"
                        :src="data?.frame_3?.image?.url"
                        alt="collage"
                        class="w-full h-full object-cover"
                    />
                </div>
                <div class="md:w-1/2 md:mt-0 mt-8">
                    <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold mb-6">
                        {{ data?.frame_3?.title }}
                    </h2>
                    <div class="text-gray-600" v-html="data?.frame_3?.content" />
                </div>
            </div>
        </div>
    </section>

    <!-- Core Services Section -->
    <section id="services" class="py-12 bg-brand-dark1">
        <div class="container mx-auto px-4 lg:px-10">
            <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold mb-6">
                {{ data?.frame_4?.header }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <nuxt-link
                    v-for="item in data?.frame_4?.what_we_do"
                    :key="item.id"
                    :to="item.link"
                    class="bg-transparent p-6 rounded-lg shadow-md flex flex-col items-center border-2 border-brand-gold transition hover:translate-y-[-5px] hover:bg-neutral-800"
                >
                    <nuxt-img :src="item.icon.url" alt="Digital Marketing" class="mb-4 w-[100px]" />
                    <h3 class="text-xl font-bold text-brand-gold mb-2 artegra text-center">
                        {{ item.title }}
                    </h3>
                    <p class="text-white text-center">{{ item.description }}</p>
                </nuxt-link>
            </div>
        </div>
    </section>

    <!-- Our Story Section -->
    <section id="story" class="pt-16 bg-gray-50">
        <div class="container mx-auto px-4 lg:px-10">
            <div class="m-auto text-center max-w-[1000px]">
                <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold mb-6">
                    {{ data?.frame_5?.title }}
                </h2>
                <div class="text-gray-600" v-html="data?.frame_5?.description" />
            </div>
            <div class="max-w-[800px] m-auto lg:pb-0 py-16">
                <div class="flex flex-col items-center relative lg:space-y-0 space-y-10">
                    <div
                        v-for="(item, index) in data?.frame_5?.timeline"
                        :key="index"
                        class="w-full relative"
                        :class="data?.frame_5?.timeline.length > 1 ? 'timeline-item' : ''"
                    >
                        <div
                            class="flex lg:items-center w-full lg:h-[200px] space-y-3 lg:space-y-0"
                            :class="
                                index % 2 === 0
                                    ? 'flex-col-reverse lg:flex-row-reverse lg:text-left text-center'
                                    : 'flex-col-reverse lg:flex-row lg:text-right text-center'
                            "
                        >
                            <div class="w-full lg:w-1/2 lg:pl-0">
                                <h3 class="text-brand-gold mb-3 font-bold text-xl">
                                    {{ item.title }}
                                </h3>
                                <div class="ck-content" v-html="item?.description" />
                            </div>
                            <div
                                class="shrink-0 rounded-full z-10 bg-black lg:block hidden"
                                :class="[
                                    index === 0
                                        ? '!bg-brand-gold w-5 h-5 m-auto'
                                        : 'w-[13px] h-[13px]',
                                    index > 0 && index % 2 === 0 ? 'lg:mx-10' : 'lg:mx-10',
                                ]"
                            ></div>
                            <div
                                class="flex lg:w-1/2"
                                :class="index % 2 === 0 ? 'lg:justify-end' : 'justify-start'"
                            >
                                <NuxtImg
                                    :src="item.icon.url"
                                    alt="image"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    decoding="async"
                                    format="webp"
                                    densities="1x 2x"
                                    quality="100"
                                    class="w-[133px] h-[133px] object-cover lg:m-0 m-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us Section -->
    <section id="why-choose" class="py-16">
        <div class="container mx-auto px-4 lg:px-10">
            <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold mb-6">
                {{ data?.frame_6?.header }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div
                    v-for="item in data?.frame_6?.items"
                    :key="item.id"
                    class="bg-transparent p-6 rounded-lg shadow-md flex flex-col items-center border-2 border-brand-gold text-center"
                >
                    <nuxt-img
                        quality="80"
                        width="100"
                        :src="item.icon.url"
                        alt="Proven Results"
                        class="mb-4 w-[100px]"
                    />
                    <h3 class="text-xl font-bold text-brand-gold mb-2 artegra">{{ item.title }}</h3>
                    <p class="text-center">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Closing Statement Section -->
    <section
        id="closing"
        class="bg-fixed bg-cover bg-no-repeat"
        :style="`background-image: url('${data?.frame_7?.background_image?.url}')`"
    >
        <div class="w-full h-full bg-black bg-opacity-55 py-16">
            <div class="max-w-[1000px] mx-auto px-4 lg:px-10 text-center">
                <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold mb-6">
                    {{ data?.frame_7?.header }}
                </h2>
                <div class="text-white" v-html="data?.frame_7?.description" />
                <div class="text-center mt-8">
                    <Button @click="navigateTo('/contact')">{{
                        data?.frame_7?.button_text
                    }}</Button>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.bg-collage {
    background-image: url('https://picsum.photos/1200/800?random=3');
    background-size: cover;
    background-position: center;
}

.bg-inspiration {
    background-image: url('https://picsum.photos/1200/800?random=4');
    background-size: cover;
    background-position: center;
}

.bg-happy-client {
    background-image: url('https://picsum.photos/1200/800?random=5');
    background-size: cover;
    background-position: center;
}

.timeline-item {
    position: relative;

    &::before {
        content: '';
        transform: translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4px;
        height: 100%;
        background-color: rgba(33, 33, 33, 0.24);
    }

    &:first-child {
        &::before {
            transform: translate(-50%, 0%);
            height: 50%;
        }
    }

    &:last-child {
        &::before {
            transform: translate(-50%, -100%);
            height: 50%;
        }
    }
}

@media (max-width: 768px) {
    .timeline-item {
        &::before {
            display: none;
        }
    }
}
</style>
