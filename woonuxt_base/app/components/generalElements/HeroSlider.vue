<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="100"
    :direction="'horizontal'"
    :pagination="true"
    :effect="'fade'"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :loop="true"
    :speed="1000"
    class="hero-swiper h-[calc(100vh-72px)] lg:h-[calc(100vh-82px)] bg-neutral-800">
    <swiper-slide v-for="slide in content" :key="slide.id">
      <div class="h-full relative lg:text-left text-center">
        <div class="slider-image w-full h-full">
          <NuxtImg class="w-full h-full object-cover" :src="slide.banner.url" alt="package" loading="lazy" />
        </div>
        <div class="overlay bg-gradient-to-t from-black to-black/50 w-full h-full absolute top-0 left-0 flex px-6 lg:px-20 items-center">
          <div class="max-w-full md:max-w-[700px] space-y-8">
            <h1 class="font-bold text-brand-gold text-4xl md:text-[3rem] lg:text-[4rem] leading-tight whitespace-pre-wrap slider-title">{{ slide.header }}</h1>
            <div class="max-w-[520px]">
              <p class="text-white slider-description">{{ slide.content }}</p>
            </div>
            <div class="slider-button">
              <Button @click="navigateTo('#your-treasures')" variant="secondary">
                {{ slide.button_text }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import 'swiper/css';

defineProps<{
  content: any;
}>();

const slides = [
  {
    id: 1,
    title: 'Where Excellence Meets Opportunity',
    description:
      'Hidden Treasures is a top marketing team specializing in strategic campaigns, targeted ads, and consignment solutions. We deliver measurable results, helping businesses and individuals excel with tailored strategies.',
    image: '/images/vision.jpg',
    buttonText: 'Unvail Your Treasures',
  },
  {
    id: 2,
    title: 'Promotional Prestige',
    description:
      'Hidden Treasures empowers businesses to unlock their full potential with cutting-edge marketing solutions, impactful branding, and scalable growth strategies. Together, we redefine success.',
    image: '/images/Innovate.jpg',
    buttonText: 'Discover Innovation',
  },
];

const modules = [Autoplay, Pagination, EffectFade];
</script>

<style scoped lang="scss">
.hero-swiper {
  overflow: visible;
  --swiper-theme-color: #cfa560;
  --swiper-pagination-bullet-inactive-color: #cfa560;
  --swiper-pagination-bottom: 50px;

  .swiper-slide {
    .slider-title {
      opacity: 0;
      transform: translateY(20px);
      transition: 2s ease all;
      transition-delay: 0.5s;
    }
    .slider-description {
      opacity: 0;
      transform: translateY(20px);
      transition: 2s ease all;
      transition-delay: 0.75s;
    }

    .slider-button {
      opacity: 0;
      transform: translateY(20px);
      transition: 2s ease all;
      transition-delay: 1s;
    }
    .slider-image {
      // clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
      clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);

      transition: 2s ease all;
      img {
        transform: scale(1.5);
        transition: 2s ease all;
      }
    }
    &-active {
      .slider-image {
        clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);

        img {
          transform: scale(1);
        }
      }
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
