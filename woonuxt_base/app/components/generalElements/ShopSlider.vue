<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="100"
    :direction="'horizontal'"
    :pagination="true"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :loop="true"
    :speed="1000"
    class="shop-swiper h-full">
    <swiper-slide v-for="item in items?.slider_banner">
      <div class="h-full relative">
        <NuxtImg class="w-full h-full object-cover" :src="item?.image?.url" alt="package" loading="eager" />
        <div class="overlay bg-gradient-to-t from-black w-full h-full absolute top-0 left-0 flex px-20 items-center">
          <div class="max-w-full md:max-w-[573px] space-y-8">
            <h1 class="artegra text-brand-gold text-[2rem] md:text-[4rem] leading-tight slider-title whitespace-pre-wrap">
              {{ item?.title }}
            </h1>
            <p class="text-white text-xl md:text-2xl leading-snug slider-description whitespace-pre-wrap">
              {{ item?.description }}
            </p>
            <div class="slider-button">
              <Button @click="navigateTo('/products')" variant="secondary">{{ item?.button_text }}</Button>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css';

defineProps({
  items: {
    type: Object,
  },
});

const modules = [Autoplay, Pagination];
</script>

<style scoped lang="scss">
.shop-swiper {
  overflow: visible;
  --swiper-theme-color: #cfa560;
  --swiper-pagination-bullet-inactive-color: #cfa560;
  --swiper-pagination-bottom: 50px;

  .swiper-slide {
    .slider-title {
      opacity: 0;
      transform: translateY(20px);
      transition: 1s ease all;
      transition-delay: 0.5s;
    }
    .slider-description {
      opacity: 0;
      transform: translateY(20px);
      transition: 1s ease all;
      transition-delay: 0.75s;
    }

    .slider-button {
      opacity: 0;
      transform: translateY(20px);
      transition: 1s ease all;
      transition-delay: 1s;
    }
    &-active {
      .slider-title {
        opacity: 1;
        transform: translateY(0px);
      }
      .slider-description {
        opacity: 1;
        transform: translateY(0px);
      }
      .slider-button {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
}

@media (max-width: 768px) {
  .shop-swiper {
    .swiper-slide {
      .overlay {
        padding: 20px;
      }
    }
  }
}
</style>
