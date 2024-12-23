<script setup lang="ts">
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

const items = [
  { title: '2017', description: 'Founded in Newport Beach, CA', icon: 'https://img.icons8.com/?size=200&id=91234&format=png&color=000000' },
  { title: '2018', description: 'First global project launched in California', icon: 'https://img.icons8.com/?size=200&id=115350&format=png&color=000000' },
  {
    title: '2019',
    description: 'Expanded presence in the automotive and collectibles market',
    icon: 'https://img.icons8.com/?size=200&id=91197&format=png&color=000000',
  },
  {
    title: '2020',
    description: 'Hosted major events in Las Vegas and Monaco',
    icon: 'https://img.icons8.com/?size=200&id=muSM3G14dJuM&format=png&color=000000',
  },
  {
    title: '2021',
    description: 'Launched virtual assistant support services',
    icon: 'https://img.icons8.com/?size=200&id=OfKXlxB4IrZ1&format=png&color=000000',
  },
  { title: '2022', description: 'Serving a portfolio of over $25 million', icon: 'https://img.icons8.com/?size=200&id=115635&format=png&color=000000' },
  { title: '2023', description: 'Continued global expansion and innovation', icon: 'https://img.icons8.com/?size=200&id=124059&format=png&color=000000' },
];

useSeoMeta({
  title: 'About Us',
  ogTitle: 'About Us',
  description:
    'Established in 2017, Hidden Treasures has grown into a globally recognized company servicing a portfolio of over $25 million. Our team, based around the world, brings a wealth of expertise enabling us to deliver exceptional services to clients across industries and continents. We have proudly serviced companies from California to Dubai and have successfully hosted events in iconic locations such as California, Las Vegas, Spain, Italy, and Monaco.',
  ogDescription:
    'Established in 2017, Hidden Treasures has grown into a globally recognized company servicing a portfolio of over $25 million. Our team, based around the world, brings a wealth of expertise enabling us to deliver exceptional services to clients across industries and continents. We have proudly serviced companies from California to Dubai and have successfully hosted events in iconic locations such as California, Las Vegas, Spain, Italy, and Monaco.',
  ogImage: '/_ipx/f_webp&q_90&s_93x50/images/ht-logo.png',
  twitterCard: `summary_large_image`,
});

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <section class="bg-banner h-[calc(100vh-72px)] lg:h-[calc(100vh-82px)] bg-fixed bg-cover bg-no-repeat" style="background-image: url('/images/Innovate.jpg')">
    <div class="w-full h-full flex items-center justify-center bg-gradient-to-t from-black to-transparent">
      <div class="text-center px-4 lg:px-10">
        <h1 class="text-4xl md:text-6xl font-bold text-brand-gold mb-4 artegra">Welcome to Hidden Treasures</h1>
        <h2 class="text-2xl md:text-3xl text-white mb-8">Luxury, Innovation, Results</h2>
        <Button @click="navigateTo('#about')" variant="secondary">Discover More</Button>
      </div>
    </div>
  </section>

  <!-- Introduction Section -->
  <section id="about" class="py-16">
    <div class="container mx-auto px-4 lg:px-10">
      <div class="flex flex-col md:flex-row items-center lg:space-x-10">
        <div class="md:w-1/2">
          <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold mb-6">About Us</h2>
          <p class="text-gray-600">
            Established in 2017, Hidden Treasures has grown into a globally recognized company servicing a portfolio of over $25 million. Our team, based around
            the world, brings a wealth of expertise enabling us to deliver exceptional services to clients across industries and continents. We have proudly
            serviced companies from California to Dubai and have successfully hosted events in iconic locations such as California, Las Vegas, Spain, Italy, and
            Monaco.
          </p>
          <p class="mt-4 text-gray-600">
            With experience spanning education, entertainment, athletics, collectibles, automotive, and networking events, we bring a unique, tailored approach
            to every project we undertake.
          </p>
        </div>
        <div class="md:w-1/2 asepct-[4/3] mt-8 md:mt-0">
          <img src="https://picsum.photos/1200/800?random=3" alt="collage" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>

  <!-- Mission Statement Section -->
  <section id="mission" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4 lg:px-10">
      <div class="flex flex-col md:flex-row items-center lg:space-x-10">
        <div class="md:w-1/2 asepct-[4/3]">
          <img src="https://picsum.photos/1200/800?random=4" alt="collage" class="w-full h-full object-cover" />
        </div>
        <div class="md:w-1/2 md:mt-0 mt-8">
          <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold mb-6">Our Mission</h2>
          <p class="text-gray-600">
            At Hidden Treasures, our mission is to empower individuals and businesses to reach their fullest potential by providing innovative, luxury-driven
            solutions tailored to their unique needs. We strive to redefine excellence through a commitment to creativity, precision, and results.
          </p>
          <p class="mt-4 text-gray-600">
            Our goal is not just to deliver services but to build enduring partnerships that inspire confidence and foster growth. By combining global
            expertise, cutting-edge strategies, and a passion for perfection, we transform visions into tangible achievements, helping our clients thrive in
            competitive and dynamic industries.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Core Services Section -->
  <section id="services" class="py-12 bg-brand-dark1">
    <div class="container mx-auto px-4 lg:px-10">
      <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold mb-6">What We Do</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-transparent p-6 rounded-lg shadow-md flex flex-col items-center border-2 border-brand-gold">
          <img src="https://img.icons8.com/?size=100&id=113842&format=png&color=000000" alt="Digital Marketing" class="mb-4 w-[100px]" />
          <h3 class="text-xl font-bold text-brand-gold mb-2 artegra">Digital Marketing</h3>
          <p class="text-white text-center">
            From managing campaigns spending up to $1,000 per day to crafting strategies that helped businesses scale from startups to over $1,000,000 in annual
            revenue.
          </p>
        </div>
        <div class="bg-transparent p-6 rounded-lg shadow-md flex flex-col items-center border-2 border-brand-gold">
          <img src="https://img.icons8.com/?size=100&id=112288&format=png&color=000000" alt="Consignment" class="mb-4 w-[100px]" />
          <h3 class="text-xl font-bold text-brand-gold mb-2 artegra">Consignment</h3>
          <p class="text-white text-center">We simplify the process of selling luxury automobiles, collectibles, antiques, jewelry, and more.</p>
        </div>
        <div class="bg-transparent p-6 rounded-lg shadow-md flex flex-col items-center border-2 border-brand-gold">
          <img src="https://img.icons8.com/bubbles/100/000000/calendar.png" alt="Event Planning" class="mb-4 w-[100px]" />
          <h3 class="text-xl font-bold text-brand-gold mb-2 artegra">Event Planning</h3>
          <p class="text-white text-center">Our team has planned everything from fundraising campaigns to international events with precision.</p>
        </div>
        <div class="bg-transparent p-6 rounded-lg shadow-md flex flex-col items-center border-2 border-brand-gold">
          <img src="https://img.icons8.com/?size=100&id=111133&format=png&color=000000" alt="Digital Marketing" class="mb-4 w-[100px]" />
          <h3 class="text-xl font-bold text-brand-gold mb-2 artegra text-center">Virtual Assistant Support</h3>
          <p class="text-white text-center">
            Starting at just $5/hour, we provide flexible and reliable support for tasks like data entry and e-commerce management.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Story Section -->
  <section id="story" class="pt-16 bg-gray-50">
    <div class="container mx-auto px-4 lg:px-10">
      <div class="m-auto text-center max-w-[1000px]">
        <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold mb-6">Our Story</h2>
        <p class="text-gray-600">
          Hidden Treasures was founded in Newport Beach, CA with a vision to create a company where luxury, innovation, and results converge. Over the years, we
          have grown into a trusted partner for businesses and individuals seeking premium services delivered with a personal touch.
        </p>
        <p class="mt-4 text-gray-600">
          Our team brings together decades of combined experience across industries, ensuring every client receives unparalleled expertise and attention to
          detail.
        </p>
      </div>
      <div class="max-w-[800px] m-auto lg:pb-0 py-16">
        <div class="flex flex-col items-center relative lg:space-y-0 space-y-10">
          <div v-for="(item, index) in items" :key="index" class="w-full relative" :class="items.length > 1 ? 'timeline-item' : ''">
            <div
              class="flex lg:items-center w-full lg:h-[200px] space-y-3 lg:space-y-0"
              :class="
                index % 2 === 0 ? 'flex-col-reverse lg:flex-row-reverse lg:text-left text-center' : 'flex-col-reverse lg:flex-row lg:text-right text-center'
              ">
              <div class="w-full lg:w-1/2 lg:pl-0">
                <h3 class="text-brand-gold mb-3 font-bold text-xl artegra">
                  {{ item.title }}
                </h3>
                <div class="ck-content" v-html="item?.description" />
              </div>
              <div
                class="shrink-0 rounded-full z-10 bg-black lg:block hidden"
                :class="[index === 0 ? '!bg-brand-gold w-5 h-5 m-auto' : 'w-[13px] h-[13px]', index > 0 && index % 2 === 0 ? 'lg:mx-10' : 'lg:mx-10']"></div>
              <div class="flex lg:w-1/2" :class="index % 2 === 0 ? 'lg:justify-end' : 'justify-start'">
                <NuxtImg
                  :src="item.icon"
                  alt="image"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  format="webp"
                  densities="1x 2x"
                  quality="100"
                  class="w-[133px] h-[133px] object-cover lg:m-0 m-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section id="why-choose" class="py-16">
    <div class="container mx-auto px-4 lg:px-10">
      <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold mb-6">Why Choose Hidden Treasures?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-transparent p-6 rounded-lg shadow-md flex flex-col items-center border-2 border-brand-gold text-center">
          <img src="https://img.icons8.com/?size=100&id=112158&format=png&color=000000" alt="Proven Results" class="mb-4 w-[100px]" />
          <h3 class="text-xl font-bold text-brand-gold mb-2 artegra">Proven Results</h3>
          <p class="text-center">
            Our track record includes helping businesses scale to seven figures, executing high-profile events, and delivering ROI-driven marketing campaigns.
          </p>
        </div>
        <div class="bg-transparent p-6 rounded-lg shadow-md flex flex-col items-center border-2 border-brand-gold text-center">
          <img src="https://img.icons8.com/?size=100&id=nUWz0NKN2w_E&format=png&color=000000" alt="Comprehensive Expertise" class="mb-4 w-[100px]" />
          <h3 class="text-xl font-bold text-brand-gold mb-2 artegra">Comprehensive Expertise</h3>
          <p class="text-center">With services spanning multiple disciplines, we provide end-to-end solutions tailored to your unique needs.</p>
        </div>
        <div class="bg-transparent p-6 rounded-lg shadow-md flex flex-col items-center border-2 border-brand-gold text-center">
          <img src="https://img.icons8.com/?size=100&id=113852&format=png&color=000000" alt="Commitment to Excellence" class="mb-4 w-[100px]" />
          <h3 class="text-xl font-bold text-brand-gold mb-2 artegra">Commitment to Excellence</h3>
          <p class="text-center">Every project we undertake is approached with a focus on quality, precision, and client satisfaction.</p>
        </div>
        <div class="bg-transparent p-6 rounded-lg shadow-md flex flex-col items-center border-2 border-brand-gold text-center">
          <img src="https://img.icons8.com/?size=100&id=114421&format=png&color=000000" alt="Personalized Approach" class="mb-4 w-[100px]" />
          <h3 class="text-xl font-bold text-brand-gold mb-2 artegra text-center">Personalized Approach</h3>
          <p class="text-center">We believe in building long-term partnerships and customizing every service to align with your goals.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Closing Statement Section -->
  <section id="closing" class="bg-fixed bg-cover bg-no-repeat" style="background-image: url('https://picsum.photos/1200/800?random=4')">
    <div class="w-full h-full bg-black bg-opacity-55 py-16">
      <div class="max-w-[1000px] mx-auto px-4 lg:px-10 text-center">
        <h2 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold mb-6">Your Partner in Success</h2>
        <p class="text-white">
          At Hidden Treasures, we’re more than a service provider; we’re your partner in growth, innovation, and success. Whether you’re looking to amplify your
          brand, streamline your operations, host a standout event, or maximize the value of your assets, we’re here to help every step of the way.
        </p>
        <p class="text-white mt-4">Let’s uncover the potential together.</p>
        <div class="text-center mt-8">
          <Button @click="navigateTo('/contact')">Uncover Your Potential</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.bg-collage {
  background-image: url('https://picsum.photos/1200/800?random=3');
  background-size: cover;
  background-position: center;
}

.bg-inspiration {
  background-image: url('https://picsum.photos/1200/800?random=4');
  background-size: cover;
  background-position: center;
}

.bg-happy-client {
  background-image: url('https://picsum.photos/1200/800?random=5');
  background-size: cover;
  background-position: center;
}

.timeline-item {
  position: relative;

  &::before {
    content: '';
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 100%;
    background-color: rgba(33, 33, 33, 0.24);
  }

  &:first-child {
    &::before {
      transform: translate(-50%, 0%);
      height: 50%;
    }
  }

  &:last-child {
    &::before {
      transform: translate(-50%, -100%);
      height: 50%;
    }
  }
}

@media (max-width: 768px) {
  .timeline-item {
    &::before {
      display: none;
    }
  }
}
</style>
