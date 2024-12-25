<template>
  <section>
    <div class="max-w-[1440px] m-auto px-4 lg:px-20 py-10 lg:py-16">
      <!-- Back Button -->
      <div class="w-fit mb-4">
        <NuxtLink to="/blog" class="text-brand-gold flex items-center w-fit">
          <ArrowLeft class="w-5 h-5 mr-2" />
          Back
        </NuxtLink>
      </div>

      <div class="flex lg:flex-row flex-col justify-between items-start lg:space-y-0 space-y-10 lg:space-x-20">
        <!-- Blog Content -->
        <div class="lg:flex-1">
          <!-- Image -->
          <div v-if="!blog" class="w-full h-64 bg-gray-200 animate-pulse rounded-lg mb-4"></div>
          <img
            v-else
            :src="blog.acf.blog_content.blog_image.url"
            alt="banner"
            format="webp"
            quality="90"
            loading="eager"
            class="w-full h-full object-cover mb-4" />

          <!-- Title and Date -->
          <div class="mb-10">
            <h1 v-if="!blog" class="h-8 bg-gray-200 animate-pulse rounded mb-2 w-3/4"></h1>
            <h1 v-else class="text-3xl font-bold mb-2">{{ blog.title.rendered }}</h1>
            <p v-if="!blog" class="h-4 bg-gray-200 animate-pulse rounded w-1/3"></p>
            <p v-else>{{ new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
          </div>

          <!-- Blog Description -->
          <div v-if="!blog" class="space-y-4">
            <div class="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
            <div class="h-4 bg-gray-200 animate-pulse rounded w-5/6"></div>
            <div class="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
          </div>
          <div v-else class="wysiwyg" v-html="blog.acf.blog_content.description"></div>
        </div>

        <!-- More Articles -->
        <div class="lg:w-[400px]">
          <p class="artegra font-bold text-2xl mb-6">More Articles</p>
          <div class="space-y-6">
            <template v-if="!morePosts">
              <!-- Skeleton for More Articles -->
              <div class="flex flex-col lg:space-y-0 space-y-4 lg:flex-row lg:space-x-6">
                <div class="w-full lg:w-1/3 aspect-[1/1] bg-gray-200 animate-pulse rounded-lg"></div>
                <div class="flex-1 space-y-3">
                  <div class="h-4 bg-gray-200 animate-pulse rounded w-1/2"></div>
                  <div class="h-6 bg-gray-200 animate-pulse rounded w-3/4"></div>
                  <div class="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
                </div>
              </div>
              <div class="flex flex-col lg:space-y-0 space-y-4 lg:flex-row lg:space-x-6">
                <div class="w-full lg:w-1/3 aspect-[1/1] bg-gray-200 animate-pulse rounded-lg"></div>
                <div class="flex-1 space-y-3">
                  <div class="h-4 bg-gray-200 animate-pulse rounded w-1/2"></div>
                  <div class="h-6 bg-gray-200 animate-pulse rounded w-3/4"></div>
                  <div class="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
                </div>
              </div>
            </template>

            <template v-else-if="morePosts.length === 0">
              <p>No more post available...</p>
            </template>

            <template v-else>
              <nuxt-link
                :to="`/blog/${post.slug}`"
                v-for="post in morePosts?.slice(0, 4)"
                :key="post.id"
                class="flex flex-col lg:space-y-0 space-y-4 lg:flex-row lg:space-x-6 group/blog cursor-pointer block">
                <div class="w-full lg:w-1/3 aspect-[1/1] overflow-hidden rounded-lg">
                  <img
                    quality="80"
                    loading="lazy"
                    width="300"
                    class="w-full h-full object-cover group-hover/blog:scale-105 transition"
                    :src="post.acf.blog_content.blog_image.sizes.thumbnail"
                    placeholder-class="blur-xl" />
                </div>
                <div class="flex-1 space-y-3 transition group-hover/blog:text-brand-gold">
                  <p class="text-sm transition group-hover/blog:text-brand-gold">
                    {{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
                  </p>
                  <p class="text-xl font-bold text-brand-gold line-clamp-2">{{ post.title.rendered }}</p>
                  <p class="line-clamp-2 whitespace-pre-wrap" v-html="post.acf.blog_content.short_description"></p>
                </div>
              </nuxt-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useFetch } from '#app';
import { ArrowLeft } from 'lucide-vue-next';

interface Blog {
  acf: {
    featured_to_homepage: boolean;
    meta_tags: {
      meta_title: string;
      meta_description: string;
      meta_image: string;
    };
    blog_content: {
      blog_image: {
        url: string;
      };
      short_description: string;
      description: string;
    };
  };
  title: {
    rendered: string;
  };
  date: string;
  slug: string;
}

const route = useRoute();
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;

const { data: blog, error } = useFetch<Blog | null>(`${API_BASE_URL}/wp-json/wp/v2/posts?slug=${route.params.slug}`, {
  query: {
    _fields: 'acf,title,date,slug', // Select specific fields to reduce payload size
    acf_format: 'standard', // Ensure the format for ACF data
  },
  transform: (response) => {
    return response?.length > 0 ? response[0] : null; // Return the first post or null
  },
});

if (error.value) {
  throw showError({ statusCode: 404, statusMessage: 'Blog post not found' });
}

const { data: morePosts } = useFetch<Blog[]>(`${API_BASE_URL}/wp-json/wp/v2/posts`, {
  query: {
    _fields: 'acf,title,date,slug', // Select specific fields to reduce payload size
    acf_format: 'standard', // Ensure the format for ACF data
    per_page: 5, // Limit to 3 more posts (or your desired number)
  },
  transform: (response) => {
    // Filter out the current blog post
    const filteredPosts = response?.filter((post) => post.slug !== route.params.slug) || [];
    // Shuffle posts randomly using Fisher-Yates algorithm
    if (filteredPosts.length > 0) {
      const shuffledPosts = [...filteredPosts];
      for (let i = shuffledPosts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPosts[i], shuffledPosts[j]] = [shuffledPosts[j], shuffledPosts[i]]; // Swap elements
      }
      return shuffledPosts; // Return the shuffled array
    }
    return [];
  },
});

useSeoMeta({
  title: blog.value?.acf?.meta_tags?.meta_title || blog.value?.title?.rendered || '',
  description: blog.value?.acf?.meta_tags?.meta_description || blog.value?.acf?.blog_content?.short_description || '',
  ogImage: blog.value?.acf?.meta_tags?.meta_image || blog.value?.acf?.blog_content?.blog_image?.url || '',
  twitterCard: 'summary_large_image',
  twitterTitle: blog.value?.title?.rendered || '',
  twitterDescription: blog.value?.acf?.blog_content?.short_description || '',
  twitterImage: blog.value?.acf?.blog_content?.blog_image?.url || '',
});

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
