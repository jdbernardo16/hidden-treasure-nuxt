<template>
  <section class="relative h-[300px] lg:h-[473px]">
    <NuxtImg src="/images/consignment/consignment.jpg" alt="banner" format="webp" quality="90" loading="eager" class="w-full h-full object-cover" />
    <div class="bg-gradient-to-t from-black to-transparent w-full h-full absolute top-0 left-0 flex flex-col justify-end">
      <div class="px-4 lg:px-10 py-10 lg:py-16 lg:space-y-6">
        <p class="text-white text-2xl sm:text-4xl">Hidden Treasures</p>
        <p class="font-bold text-4xl sm:text-6xl artegra text-brand-gold">Blogs</p>
      </div>
    </div>
  </section>
  <section class="bg-brand-dark1">
    <div class="max-w-[1440px] m-auto lg:px-20 px-4 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-6 gap-10">
        <div
          @click="navigateTo(`/blog/${blog.slug}`)"
          v-for="(blog, index) in featuredBlogs.slice(0, 1)"
          :key="index"
          class="lg:col-span-3 group/featured-blog cursor-pointer">
          <div class="aspect-[1/1] overflow-hidden rounded-lg">
            <NuxtImg
              quality="80"
              loading="lazy"
              width="560"
              class="w-full h-full object-cover group-hover/featured-blog:scale-105 transition"
              :src="blog?.acf?.blog_content?.blog_image.url"
              placeholder-class="blur-xl" />
          </div>
          <div class="text-white space-y-3 mt-4 group-hover/featured-blog:text-brand-gold">
            <p class="text-sm text-neutral-100 group-hover/featured-blog:text-brand-gold">{{ formatDate(blog?.date) }}</p>
            <p class="text-xl font-bold mb-3 text-brand-gold line-clamp-2">{{ blog?.title?.rendered }}</p>
            <p class="line-clamp-2 whitespace-pre-wrap">{{ blog?.acf?.blog_content?.short_description }}</p>
          </div>
        </div>
        <div class="lg:col-span-3 space-y-10">
          <div
            @click="navigateTo(`/blog/${blog.slug}`)"
            v-for="blog in featuredBlogs.slice(1, 999)"
            class="flex flex-col lg:space-y-0 space-y-4 lg:flex-row lg:space-x-6 group/blog cursor-pointer">
            <div class="w-full lg:w-1/3 aspect-[1/1] overflow-hidden rounded-lg">
              <NuxtImg
                quality="80"
                loading="lazy"
                width="300"
                class="w-full h-full object-cover group-hover/blog:scale-105 transition"
                :src="blog?.acf?.blog_content?.blog_image.url"
                placeholder-class="blur-xl" />
            </div>
            <div class="text-white flex-1 space-y-3 transition group-hover/blog:text-brand-gold">
              <p class="text-sm text-neutral-100 transition group-hover/blog:text-brand-gold">{{ formatDate(blog?.date) }}</p>
              <p class="text-xl font-bold text-brand-gold line-clamp-2">{{ blog?.title?.rendered }}</p>
              <p class="line-clamp-2 whitespace-pre-wrap">{{ blog?.acf?.blog_content?.short_description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-brand-dark1">
    <div class="max-w-[1440px] m-auto px-4 lg:px-20 py-10 lg:py-16">
      <div class="flex justify-between items-start">
        <div class="flex space-x-4 items-start mb-10">
          <div class="block">
            <img src="/images/spark.svg" alt="spark" />
          </div>
          <div>
            <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold animateUp">More Articles</h2>
          </div>
        </div>
        <div></div>
      </div>
      <div class="grid lg:grid-cols-3 gap-10 lg:gap-20 grid-cols-1">
        <div @click="navigateTo(`/blog/${blog.slug}`)" v-for="blog in nonFeaturedBlogs" class="space-y-4 group/blog cursor-pointer">
          <div class="w-full aspect-[4/3] overflow-hidden rounded-lg">
            <NuxtImg
              quality="80"
              loading="lazy"
              width="300"
              class="w-full h-full object-cover group-hover/blog:scale-105 transition"
              :src="blog?.acf?.blog_content?.blog_image.url"
              placeholder-class="blur-xl" />
          </div>
          <div class="text-white flex-1 space-y-3 transition group-hover/blog:text-brand-gold">
            <p class="text-sm text-neutral-100 transition group-hover/blog:text-brand-gold">{{ formatDate(blog?.date) }}</p>
            <p class="text-xl font-bold text-brand-gold line-clamp-2">{{ blog?.title?.rendered }}</p>
            <p class="line-clamp-2 whitespace-pre-wrap">{{ blog?.acf?.blog_content?.short_description }}</p>
          </div>
        </div>
      </div>
      <div class="w-fit m-auto mt-10">
        <Button v-if="hasMoreBlogs" @click="loadMore" size="lg"> Load More </Button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
import { ref, computed } from 'vue';
import { useFetch } from '#app';

interface Blog {
  acf: {
    featured_to_homepage: boolean;
    blog_content: {
      blog_image: {
        url: string;
      };
      short_description: string;
    };
  };
  title: {
    rendered: string;
  };
  date: string;
  slug: string;
}

const { data: allBlogs } = useFetch<Blog[]>(`${API_BASE_URL}/wp-json/wp/v2/posts`, {
  query: {
    _fields: 'acf,title,date,slug', // Select specific fields to reduce payload size
    acf_format: 'standard', // Ensure the format for ACF data
  },
  transform: (response) => {
    return response || []; // Return the array of posts or an empty array
  },
});

const featuredBlogs = computed(() => (allBlogs.value || []).filter((blog) => blog.acf.featured_to_homepage));
const limit = ref(3);
const nonFeaturedBlogs = computed(() => (allBlogs.value || []).filter((blog) => !blog.acf.featured_to_homepage).slice(0, limit.value));
const hasMoreBlogs = computed(() => (allBlogs.value || []).filter((blog) => !blog.acf.featured_to_homepage).length > limit.value);

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function loadMore() {
  limit.value += 3;
}

useSeoMeta({
  title: 'Blog',
  description: 'Discover our latest blog posts',
  ogImage: 'https://ht.uatproject.website/_ipx/f_webp&q_90&s_93x50/images/ht-logo.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Blog',
  twitterDescription: 'Discover our latest blog posts',
  twitterImage: 'https://ht.uatproject.website/_ipx/f_webp&q_90&s_93x50/images/ht-logo.png',
});

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
