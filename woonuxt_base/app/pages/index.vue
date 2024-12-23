<script lang="ts" setup>
const { siteName, description, shortDescription, siteImage } = useAppConfig();
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
const { data } = useFetch(`${API_BASE_URL}/wp-json/wp/v2/pages`, {
  query: {
    slug: 'home',
    _fields: 'acf',
    acf_format: 'standard',
  },
  transform: (response) => {
    return response[0]?.acf || null;
  },
});

import { ProductsOrderByEnum } from '#woo';
const { data: productData } = await useAsyncGql('getProducts', {
  orderby: ProductsOrderByEnum.POPULARITY,
});

const allProducts = productData.value.products?.nodes || [];

const featuredProducts = allProducts.filter((product) =>
  product.terms.nodes.some((term) => term.taxonomyName === 'product_visibility' && term.slug === 'featured'),
);

useSeoMeta({
  title: `Home`,
  ogTitle: siteName,
  description: description,
  ogDescription: shortDescription,
  ogImage: siteImage,
  twitterCard: `summary_large_image`,
});

const testimonials = [
  {
    image: '/images/testimony1.png',
    text: 'We were welcomed warmly and completely taken care of. Our son was very excited about to play on the Barcelona Olympic Baseball Field and that was truly a highlight of the trip. My husband and I met so many wonderful families that are a part of the organization and it was so uplifting to hear these families cheering for all of the boys. There was tons of laughter and jokes and it was so special to see them really be present and enjoy each other.',
    name: 'Ford Family',
    position: 'Event Planning',
    rating: 5,
  },
  {
    image: '/images/testimony2.png',
    text: 'I just wanted to let you know what a great experience Anthony had(and I!). The coaches were wonderful and I feel like he truly gained his confidence back. I won’t bore you with the long story, but it was definitely missing. Seeing him smile and enjoy baseball again, making it fun, was well worth it all. Thank you for inviting him to be part of the team. I wish you and your family all the best.',
    name: 'Andrea A. ',
    position: 'Event Planning',
    rating: 5,
  },
  {
    image: '/images/testimony3.png',
    text: 'We don’t know what we would have done without their advertising management and detailed progress reports. Their strategies were a game-changer for us! With just one rental property, they helped us gross over $210,000 a year.',
    name: 'Theresa G.',
    position: '(IVR) (Marketing)',
    rating: 5,
  },
  {
    image: '/images/testimony4.png',
    text: 'Working with this team has been one of the most rewarding experiences of my career. They are, without a doubt, some of the smartest and most strategic thinkers I’ve ever met. Their ability to anticipate needs, craft brilliant plans, and execute flawlessly is unparalleled.',
    name: 'Harry',
    position: 'Marketing Virtual Assistant',
    rating: 5,
  },
  {
    image: '/images/testimony5.png',
    text: 'Plenty of staff were on hand to help interpret, guide and help out on everything from places to eat, things to do, where to go, and even where to find the best ice cream! There was plenty of downtime built into the schedule to experience the beaches, the nightlife Spain is famous for, the shopping and some great sightseeing.',
    name: 'Hopp Family',
    position: 'Event Planning',
    rating: 5,
  },
  {
    image: '/images/testimony6.png',
    text: 'Not only did I get top dollar for my items, but they also helped me understand the market and maximize my profits. Their attention to detail and genuine passion for what they do really set them apart. If you’re considering consigning, I highly recommend working with them, they know how to get results.',
    name: 'Frank',
    position: 'Consignment',
    rating: 5,
  },
];
</script>

<template>
  <section>
    <HeroSlider />
  </section>
  <!-- <HeroBanner :data="data" /> -->

  <!-- Section 2: Services -->
  <section class="bg-brand-dark1">
    <div class="max-w-[1440px] m-auto px-4 lg:px-10 pt-10 lg:pt-20 pb-20">
      <div class="flex w-full justify-between mb-10 lg:mb-20">
        <div class="flex space-x-4 items-start">
          <div class="lg:block hidden pt-1">
            <img src="/images/spark.svg" alt="spark" />
          </div>
          <div>
            <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold animateUp">{{ data?.f2_title }}</h2>
            <p class="text-white animateUp">{{ data?.f2_description }}</p>
          </div>
        </div>
        <div></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="item in data?.f2_services"
          @click="navigateTo(item.link)"
          class="space-y-6 px-4 pt-20 pb-10 rounded-t-full border-2 border-brand-gold group/service transition hover:bg-brand-gold cursor-pointer hover:-translate-y-5">
          <img class="m-auto animateUp" :src="item.icon.url" alt="Target" width="130" height="130" />
          <div class="text-center space-y-4">
            <p class="text-brand-gold text-3xl font-semibold h-[72px] line-clamp-2 animateUp group-hover/service:text-brand-dark1 transition">
              {{ item.title }}
            </p>
            <p class="text-white animateUp lg:min-h-[72px]">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
      <!-- <ServiceSlider :data="data?.f2_services" /> -->
    </div>
  </section>

  <AboutSection />

  <BlogSection />

  <!-- <VideoSection /> -->

  <!-- <section class="bg-brand-dark1">
<div class="w-full h-[50vh] bg-fixed bg-center bg-cover bg-no-repeat opacity-50" style="background-image: url('/images/treasure.jpeg')">

</div>
</section> -->

  <!-- Section 3: Advantages -->
  <!-- <PortfolioSection /> -->

  <section class="bg-brand-dark1">
    <div class="max-w-[1440px] m-auto px-4 lg:px-20 lg:pt-20 lg:pb-20 py-10">
      <div class="text-center mb-10 lg:mb-16">
        <p class="artegra text-3xl lg:text-[40px] text-brand-gold animateUp">Consigned Items</p>
      </div>
      <div class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-20 mb-10 lg:mb-16">
        <ProductCard
          v-for="(node, i) in featuredProducts.slice(0, 4)"
          :key="node.databaseId"
          class="w-full animateUp"
          :node="node"
          :index="i"
          :class="{
            hidden: i === featuredProducts.length - 1,
            'lg:block': i === featuredProducts.length - 1,
          }" />
      </div>
      <div class="w-fit m-auto animateUp">
        <Button @click="navigateTo('/products')" class="w-[185px]">View All</Button>
      </div>
    </div>
  </section>

  <section class="bg-brand-dark1">
    <div class="max-w-[1440px] m-auto px-4 lg:px-10 py-10 lg:py-20">
      <div class="flex space-x-4 items-start mb-10">
        <div class="pt-1 lg:block hidden">
          <img src="/images/spark.svg" alt="spark" />
        </div>
        <div>
          <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold animateUp">What Our Clients Say</h2>
          <p class="text-white max-w-[489px] animateUp">
            Discover how Hidden Treasures has transformed brands and driven success through our innovative solutions and dedicated partnership.
          </p>
        </div>
      </div>
      <div class="w-full px-4 md:px-10 lg:px-[160px] animateUp">
        <TestimonySlider :items="testimonials" />
      </div>
    </div>
  </section>

  <section id="your-treasures">
    <PartnerSlider />
  </section>

  <ContactForm />
</template>

<style scope lang="scss">
.brand img {
  max-height: min(8vw, 120px);
  object-fit: contain;
  object-position: center;
}
</style>
