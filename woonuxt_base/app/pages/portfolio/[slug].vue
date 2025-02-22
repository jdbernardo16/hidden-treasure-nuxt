<script lang="ts" setup>
const route = useRoute();
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
const { data, error } = useFetch(
    `${API_BASE_URL}/wp-json/wp/v2/portfolio?slug=${route.params.slug}`,
    {
        query: {
            _fields: 'acf,title,date,slug', // Select specific fields to reduce payload size
            acf_format: 'standard', // Ensure the format for ACF data
        },
        transform: (response: any) => {
            return response?.length > 0 ? response[0] : null;
        },
    },
);

useSeoMeta({
    title: data.value?.title?.rendered,
    description: data.value?.acf?.frame_1?.description,
    ogTitle: data.value?.title?.rendered,
    ogDescription: data.value?.acf?.frame_1?.description,
    ogImage: data.value?.acf?.frame_1?.banner?.url,
    twitterCard: 'summary_large_image',
    twitterTitle: data.value?.title?.rendered,
    twitterDescription: data.value?.acf?.frame_1?.description,
    twitterImage: data.value?.acf?.frame_1?.banner?.url,
});
</script>
<template>
    <section class="relative bg-black h-[400px] md:h-[711px] w-full">
        <img
            class="w-full h-full object-cover absolute top-0 left-0"
            :src="data?.acf?.frame_1?.banner?.url"
            alt="alpha"
        />
        <div
            class="max-w-[1440px] m-auto w-full h-full z-[1] flex items-center justify-center relative px-4 md:px-0"
        >
            <div class="text-center max-w-[768px] space-y-4 md:space-y-6">
                <h1 class="text-primary font-bold text-3xl md:text-5xl">
                    {{ data?.acf?.frame_1?.header }}
                </h1>
                <div class="text-center text-white m-auto">
                    <p class="text-sm md:text-base">
                        {{ data?.acf?.frame_1?.description }}
                    </p>
                </div>
                <div class="relative space-x-2 mb-6">
                    <div
                        v-for="(tag, index) in data?.acf?.frame_1?.tags"
                        :key="index"
                        class="bg-primary text-white inline-block text-sm font-semibold px-2 py-1 lg:mb-0 mb-4"
                    >
                        {{ tag.tag_label }}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-black">
        <div class="max-w-[1440px] m-auto px-4 md:px-20 py-12 md:py-20">
            <div class="block md:flex items-center w-full space-y-8 md:space-y-0 md:space-x-20">
                <div class="w-full md:w-1/2">
                    <h3 class="font-bold text-3xl md:text-4xl text-primary mb-4 md:mb-6">
                        {{ data?.acf?.frame_2?.title }}
                    </h3>

                    <div
                        class="text-white wysiwyg text-sm md:text-base"
                        v-html="data?.acf?.frame_2?.description"
                    ></div>
                </div>
                <div class="w-full md:w-1/2 mt-8 md:mt-0">
                    <div
                        class="aspect-w-1 aspect-h-1 relative rounded-[20px] md:rounded-[50px] overflow-hidden"
                    >
                        <img
                            :src="data?.acf?.frame_2?.image?.url"
                            alt="alpha logo"
                            class="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-white">
        <div class="max-w-[1440px] m-auto p-8 md:p-20">
            <PortfolioTestimonySlider :items="data?.acf?.frame_3?.testimonial" />
        </div>
    </section>
    <section class="bg-black">
        <div class="max-w-[1440px] m-auto px-4 md:px-20 py-12 md:py-20">
            <div class="block md:flex w-full space-y-8 md:space-y-0 md:space-x-20">
                <div class="w-full md:w-1/2">
                    <div
                        class="aspect-w-1 aspect-h-1 relative rounded-[20px] md:rounded-[50px] overflow-hidden"
                    >
                        <img
                            :src="data?.acf?.frame_4?.image?.url"
                            alt="alpha logo"
                            class="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div class="w-full md:w-1/2 mt-8 md:mt-0">
                    <h3 class="font-bold text-3xl md:text-4xl text-primary mb-4 md:mb-6">
                        {{ data?.acf?.frame_4?.title }}
                    </h3>

                    <div
                        class="text-white wysiwyg text-sm md:text-base"
                        v-html="data?.acf?.frame_4?.description"
                    ></div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-black">
        <div class="max-w-[1440px] m-auto p-8 md:p-20 space-y-8 md:space-y-20">
            <div
                class="aspect-w-[1312] aspect-h-[738] overflow-hidden rounded-[20px] md:rounded-[50px]"
            >
                <img
                    :src="data?.acf?.frame_5?.image?.url"
                    alt="alpha logo"
                    class="w-full h-full object-cover"
                />
            </div>
            <div class="max-w-[738px] m-auto">
                <h3 class="font-bold text-3xl md:text-4xl text-primary mb-4 md:mb-6">
                    {{ data?.acf?.frame_5?.title }}
                </h3>

                <div
                    class="text-white wysiwyg text-sm md:text-base"
                    v-html="data?.acf?.frame_5?.description"
                ></div>
            </div>
        </div>
    </section>
</template>
