<script lang="ts" setup>
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
const route = useRoute();
const slug = route.params.slug;
const { data } = useFetch(`${API_BASE_URL}/wp-json/wp/v2/pages`, {
  query: {
    slug: slug,
    _fields: 'acf',
    acf_format: 'standard',
  },
  transform: (response) => {
    return response[0]?.acf || null;
  },
});

onMounted(() => {
  window.scrollTo(0, 0);
});

useSeoMeta({
  title: data.value?.frame_1?.header,
  ogTitle: data.value?.frame_1?.header,
  description: data.value?.frame_2?.service_description,
  ogDescription: data.value?.frame_2?.service_description,
  ogImage: data.value?.frame_1?.banner?.url,
  twitterCard: `summary_large_image`,
});
</script>

<template>
  <section v-if="data?.frame_1" class="relative h-[300px] lg:h-[473px]">
    <NuxtImg :src="data?.frame_1?.banner?.url" alt="banner" format="webp" quality="90" loading="eager" class="w-full h-full object-cover" />
    <div class="bg-gradient-to-t from-black to-transparent w-full h-full absolute top-0 left-0 flex flex-col justify-end">
      <div class="px-4 lg:px-10 py-10 lg:py-16 space-y-6">
        <p class="font-bold text-4xl sm:text-6xl artegra text-brand-gold">{{ data?.frame_1?.header }}</p>
      </div>
    </div>
  </section>
  <section>
    <div class="max-w-[1000px] px-4 mx-auto py-16 text-center wysiwyg">
      <div class="text-xl sm:text-3xl leading-snug" v-html="data?.frame_2?.service_description" />
    </div>
    <div class="max-w-[1000px] mx-auto py-16 space-y-10 lg:space-y-16 px-4">
      <div v-for="item in data?.frame_3?.items" class="flex flex-col sm:flex-row items-center w-full service-card">
        <div class="w-full sm:w-1/2 aspect-[4/3] relative image">
          <NuxtImg class="w-full h-full object-cover" :src="item?.image?.url" alt="image" quality="80" width="640" format="webp" loading="eager" />
        </div>
        <div class="w-full sm:w-1/2 space-y-5 content mt-6 sm:mt-0">
          <p class="text-2xl sm:text-3xl font-bold artegra text-brand-gold">{{ item?.label }}</p>
          <p class="sm:text-xl leading-normal">{{ item?.content }}</p>
        </div>
      </div>
    </div>
    <div class="max-w-[1000px] mx-auto pb-16 wysiwyg px-4">
      <div class="text-xl sm:text-2xl leading-snug" v-html="data?.frame_3?.additional_content" />
    </div>
  </section>

  <section class="bg-brand-dark1">
    <div class="max-w-[1000px] mx-auto px-4 sm:px-20 text-center py-16">
      <p class="text-brand-gold text-3xl sm:text-4xl font-bold artegra mb-10">{{ data?.frame_4?.header }}</p>
      <div class="text-white text-lg sm:text-xl leading-relaxed" v-html="data?.frame_4?.content" />
    </div>
  </section>

  <ContactForm />
</template>
