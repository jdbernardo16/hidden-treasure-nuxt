<template>
  <section class="bg-brand-dark1">
    <div class="max-w-[1440px] m-auto lg:px-20 px-4 py-16">
      <div class="flex justify-between items-start">
        <div class="flex space-x-4 items-start mb-10">
          <div class="lg:block hidden pt-1">
            <img src="/images/spark.svg" alt="spark" />
          </div>
          <div>
            <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold animateUp">{{ data?.blog_header }}</h2>
          </div>
        </div>
        <div class="flex items-center text-brand-gold space-x-2 cursor-pointer">
          <p>View All</p>
          <ArrowRight class="w-5 h-5" />
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-6 gap-10">
        <div class="lg:col-span-3 group/featured-blog cursor-pointer">
          <div class="aspect-[1/1] overflow-hidden rounded-lg">
            <NuxtImg
              quality="80"
              loading="lazy"
              width="560"
              class="w-full h-full object-cover group-hover/featured-blog:scale-105 transition"
              src="/images/treasure.jpeg"
              placeholder-class="blur-xl" />
          </div>
          <div class="text-white space-y-3 mt-4 group-hover/featured-blog:text-brand-gold">
            <p class="text-sm text-neutral-100 group-hover/featured-blog:text-brand-gold">Dec 17, 2024</p>
            <p class="text-xl font-bold mb-3 text-brand-gold">Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quaerat?</p>
          </div>
        </div>
        <div class="lg:col-span-3 space-y-10">
          <div v-for="(i, index) in 3" class="flex flex-col lg:space-y-0 space-y-4 lg:flex-row lg:space-x-6 group/blog cursor-pointer">
            <div class="w-full lg:w-1/3 aspect-[1/1] overflow-hidden rounded-lg">
              <NuxtImg
                quality="80"
                loading="lazy"
                width="300"
                class="w-full h-full object-cover group-hover/blog:scale-105 transition"
                :src="`https://picsum.photos/id/40${index}/300/300`"
                placeholder-class="blur-xl" />
            </div>
            <div class="text-white flex-1 space-y-3 transition group-hover/blog:text-brand-gold">
              <p class="text-sm text-neutral-100 transition group-hover/blog:text-brand-gold">Dec 17, 2024</p>
              <p class="text-xl font-bold text-brand-gold">Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quaerat?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';

defineProps<{
  data: any;
}>();
</script>
