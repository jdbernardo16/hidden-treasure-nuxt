<template>
    <section class="bg-brand-dark1">
        <div class="max-w-[1440px] m-auto px-4 lg:px-20 py-10 lg:pt-20 lg:pb-20">
            <div class="flex w-full justify-between mb-10 items-start lg:flex-row flex-col lg:space-y-0 space-y-4">
                <div class="flex lg:space-x-4 items-start">
                    <div class="pt-1 lg:block hidden">
                        <img src="/images/spark.svg" alt="spark">
                    </div>
                    <div>
                        <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold animateUp">Our Work,
                            Your Inspiration</h2>
                        <p class="text-white animateUp">Discover how we’ve helped brands uncover their true potential.
                        </p>
                    </div>
                </div>
                <!-- <div class="flex items-center text-brand-gold space-x-2 animateUp">
                    <p>View All</p>
                    <ArrowRight class="w-5 h-5" />
                </div> -->
            </div>

            <div 
                id="portfolio"
                class="grid grid-cols-1 lg:grid-cols-3 gap-10"
            >
                <a v-for="item, index in works" 
                    target="_blank"
                    rel="noreferrer" 
                    :href="item.type === 'video' ? item.video : item.image"
                    :data-pswp-width="700"
                    :data-pswp-height="700"
                    class="bg-[#333] rounded-lg overflow-hidden work-card"
                >
                    <div class="aspect-[4/2]">
                            <NuxtImg class="w-full h-full object-cover" :src="item.image" alt="package"
                                placeholder-class="blur-xl" quality="80" loading="lazy" />
                    </div>
                    <div class="p-5 space-y-3 text-center">
                        <h2 class="text-xl font-bold text-brand-gold">{{ item.title }}</h2>
                        <p class="text-white text-sm leading-loose line-clamp-3">{{ item.description }}</p>
                    </div>
                </a>
            </div>

            <!-- <div class="space-y-10 lg:space-y-20">
                <div class="portfolio flex items-center px-4 lg:px-20">
                    <div class="portfolio-image w-full lg:w-7/12 lg:block hidden">
                        <div class="w-[120%] aspect-[16/9] relative overflow-hidden image-item fadeIn">
                            <img :src="`https://picsum.photos/id/231/800/450`" alt="luxeglow" class="object-cover w-full h-full">
                            <div class="absolute top-0 left-0 h-full w-full bg-brand-gold opacity-80 overlay"></div>
                        </div>
                    </div>
                    <div class="portfolio-content w-full lg:w-5/12 text-right space-y-6 relative z-[1]">
                        <div class="lg:w-[310px] port-title">
                            <p class="text-2xl artegra text-brand-gold animateUp">LuxeGlow Skincare
                                Redefining Elegance Online</p>
                        </div>
                        <div class="w-full bg-neutral-600 p-4 right-0 text-white animateUp">
                            <p>Hidden Treasures is a Luxury Marketing & Promotional Team specializing in Strategic Campaigns, Targeted Ads, Event Management, and Consignment Services bringing exposure and profit to our clients.</p>
                        </div>

                        <div>
                            <p class="text-neutral-400 mb-6 animateUp">E-Commerce • Branding • Digital Marketing</p>
                            <img class="port-link animateUp" src="/images/link.svg" alt="link">
                        </div>
                        
                    </div>
                </div>
            </div> -->
        </div>
    </section>
</template>

<script lang="ts" setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css'; 

const lightbox = ref()

const works = [
    {
        title: 'Alpha Apparel',
        description: 'For Alpha Apparel, a brand specializing in contemporary and unique clothing, I designed a logo that encapsulates the brand\'s values of style, durability, and community. The goal was to create a logo that would appeal to a young, fashion-conscious audience while maintaining a professional and timeless look.',
        image: 'images/aplha.jpg',
    },
    {
        title: 'Social Media Audit',
        description: 'The Hidden Treasures marketing strategiest, designer and advertiser will conduct a complete social media audit on all your platforms. A full report on strengths, weaknesses, market placement and target audience will be provided along with next step suggestions.',
        image: 'images/social-media-audit.jpg',
    },
    {
        title: 'Branded Company Video',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum repudiandae dicta dignissimos at minus alias incidunt perspiciatis harum quasi!',
        image: 'images/mm.jpg',
    },
    {
        title: 'One Page Flyer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum repudiandae dicta dignissimos at minus alias incidunt perspiciatis harum quasi!',
        image: 'images/flyers.jpg',
    },
    {
        title: 'Business Card Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum repudiandae dicta dignissimos at minus alias incidunt perspiciatis harum quasi!',
        image: 'images/mockup.jpg',
    },
]

onMounted(() => {
    if (!lightbox.value) {
        lightbox.value = new PhotoSwipeLightbox({
        gallery: '#portfolio',
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
    }
    lightbox.value.init()
})

onMounted(() => {
    if (!lightbox.value) {
        lightbox.value = new PhotoSwipeLightbox({
        gallery: '#portfolio',
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
    }
    lightbox.value.init()
})

onUnmounted(() => {
    if (lightbox.value) {
      lightbox.value.destroy();
      lightbox.value = null;
    }
})

</script>

<style lang="scss" scoped>
.work-card {
    transition: all 0.34s ease;
    box-shadow: 5px 5px 10px 2px rgba(151, 111, 0, 0.534);
    &:hover {
        transform: translateY(-5px);
        box-shadow: 5px 10px 10px 2px rgba(151, 111, 0, 0.534);
    }
}
</style>