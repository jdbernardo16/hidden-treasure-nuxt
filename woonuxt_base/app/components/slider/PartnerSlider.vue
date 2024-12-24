<template>
  <div class="partner-swiper">
    <swiper
      :modules="modules"
      :loop="true"
      :speed="5000"
      :autoplay="{ delay: 0, disableOnInteraction: false }"
      :breakpoints="{
        '640': {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }">
      <swiper-slide v-for="(partner, index) in data?.partners" :key="index">
        <NuxtImg quality="80" :src="partner.logo.url" alt="Partner Logo" class="partner-logo m-auto" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css';

defineProps({
  data: {
    type: Object,
    default: null,
  },
});

const modules = [Autoplay, FreeMode];

// Partner logos (replace with your actual image paths)
const partners = ['/logos/logo1.png', '/logos/logo2.png', '/logos/l1.png', '/logos/l2.png', '/logos/l4.png', '/logos/5.png', '/logos/l3.png', '/logos/l6.png'];
</script>

<style scoped lang="scss">
.partner-swiper {
  width: 100%;
  overflow: hidden;
  padding: 40px 0;
  background: #333;
  /* Adjust to your design */
}

.partner-logo {
  width: auto;
  height: 100px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  transition: all 0.34s ease;

  &:hover {
    filter: brightness(1) invert(0);
  }
}
</style>
