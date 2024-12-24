<script lang="ts" setup>
const items = [
    { 
        image: '/images/virtual/administrative-support.jpg', 
        title: 'Administrative Support', 
        description: 'Handle scheduling, email management, data entry, document preparation, and other administrative tasks with efficiency and precision.' 
    },
    { 
        image: '/images/virtual/social-media.jpg',
        title: 'Social Media Management', 
        description: 'Grow your online presence with expertly managed accounts, including content creation, post scheduling, and audience engagement on platforms like Instagram, Facebook, LinkedIn, and Twitter.' 
    },
    { 
        image: '/images/virtual/content-writing.jpg', 
        title: 'Content Writing', 
        description: 'Craft compelling blog posts, newsletters, email campaigns, and website content that resonates with your audience and strengthens your brand voice.' 
    },
    { 
        image: '/images/virtual/Ecommerce-Management.jpg', 
        title: 'E-commerce Management', 
        description: 'Manage your online store by handling product listings, inventory updates, order processing, and customer support on platforms like Shopify, WooCommerce, and Etsy.' 
    },
    { 
        image: '/images/virtual/research.jpg', 
        title: 'Research and Data Analysis', 
        description: 'Conduct thorough market research, competitor analysis, or project-specific data gathering to provide actionable insights for your business.' 
    },
    { 
        image: '/images/virtual/Personal-Assistance.jpg', 
        title: 'Personal Assistance', 
        description: 'Get help with personal tasks such as booking appointments, managing reminders, and organizing your daily life to stay stress-free and productive.' 
    },
]
onMounted(() => {
  window.scrollTo(0, 0);
});
useSeoMeta({
  title: `Virtual Assistant Services - Streamline Your Workflow`,
  ogTitle: `Expert Virtual Support for Your Business`,
  description: `Discover how our virtual assistant services can help you simplify your workflow and boost productivity. From administrative tasks to content creation, we've got you covered.`,
  ogDescription: `Maximize your time and efficiency with our expert virtual assistant services. Learn more about our solutions and how we can support your business growth.`,
  ogImage: `/images/og-images/virtual-assistant.jpg`,
  twitterCard: `summary_large_image`,
});
</script>

<template>
    <section class="relative h-[300px] lg:h-[473px]">
        <NuxtImg 
            src="/images/virtual/cover.jpg" 
            alt="banner"
            format="webp"
            quality="90"
            loading="eager"  
            class="w-full h-full object-cover"
        />
        <div class="bg-gradient-to-t from-black to-transparent w-full h-full absolute top-0 left-0 flex flex-col justify-end">
            <div class="px-4 lg:px-10 py-10 lg:py-16 space-y-6">
                <p class="text-white text-2xl sm:text-4xl">Services</p>
                <p class="font-bold text-4xl sm:text-6xl artegra text-brand-gold">Virtual Assistant</p>
            </div>
        </div>
    </section>
    <section>
        <div class="max-w-[1000px] px-4 mx-auto py-16 text-center wysiwyg">
            <p class="text-xl sm:text-3xl leading-snug">Streamline your workflow and focus on what matters most with our professional Virtual Assistant Services. We provide a diverse range of solutions tailored to meet your personal and business needs, including:</p>
        </div>
        <div class="max-w-[1000px] mx-auto py-16 space-y-10 lg:space-y-16 px-4">
            <div v-for="item in items" class="flex flex-col sm:flex-row items-center w-full service-card">
                <div class="w-full sm:w-1/2 aspect-[4/3] relative image">
                    <NuxtImg 
                        class="w-full h-full object-cover" 
                        :src="item.image" 
                        alt="image"
                        quality="80"
                        width="640"
                        format="webp"
                        loading="eager"
                    />
                </div>
                <div class="w-full sm:w-1/2 space-y-5 content mt-6 sm:mt-0">
                    <p class="text-2xl sm:text-3xl font-bold artegra text-brand-gold">{{ item.title }}</p>
                    <p class="sm:text-xl leading-normal">{{item.description}}</p>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-brand-dark1">
        <div class="max-w-[1000px] mx-auto px-4 sm:px-20 text-center py-16">
            <p class="text-brand-gold text-3xl sm:text-4xl font-bold artegra mb-10">Why Choose Us?</p>
            <p class="text-white text-lg sm:text-xl leading-relaxed">With a proven track record of helping clients save time and improve productivity, our virtual assistant services are designed to adapt to your specific requirements. Our team has supported businesses scaling from startups to established enterprises, delivering quality solutions that contribute to measurable growth. Partner with us to achieve a streamlined workflow and take your productivity to the next level.
            </p>
        </div>
    </section>

    <ContactForm />
</template>
