<template>
  <section class="bg-brand-dark1">
    <div class="max-w-[1440px] m-auto lg:px-20 px-4 py-16">
      <div class="flex justify-between items-start">
        <div class="flex space-x-4 items-start mb-10">
          <div class="lg:block hidden pt-1">
            <img src="/images/spark.svg" alt="spark" />
          </div>
          <div>
            <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold animateUp">Latest Blogs</h2>
          </div>
        </div>
        <nuxt-link to="/blog" class="flex items-center text-brand-gold space-x-2 cursor-pointer">
          <p>View All</p>
          <ArrowRight class="w-5 h-5" />
        </nuxt-link>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-6 gap-10">
        <nuxt-link
          :to="`/blog/${blog.slug}`"
          v-for="(blog, index) in featuredBlogs.slice(0, 1)"
          :key="index"
          class="lg:col-span-3 group/featured-blog cursor-pointer block">
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
        </nuxt-link>
        <div class="lg:col-span-3 space-y-10">
          <nuxt-link
            :to="`/blog/${blog.slug}`"
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
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
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

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}
</script>
