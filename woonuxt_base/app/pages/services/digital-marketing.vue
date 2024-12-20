<script lang="ts" setup>
const items = [
    { 
        image: '/images/digital-marketing/paid-ads.png', 
        title: 'Paid Ads', 
        description: 'Maximize ROI with expertly managed campaigns across platforms like Google Ads, YouTube Ads, Facebook and Instagram Ads (Meta), Print / Magazine, affiliate marketing, and other top-performing platforms.' 
    },
    { 
        image: '/images/digital-marketing/campaign-development.png',
        title: 'Campaign Development', 
        description: 'Custom strategies crafted to engage your audience, drive conversions, and develop growth.' 
    },
    { 
        image: '/images/digital-marketing/public-relations.png',
        title: 'Public Relations', 
        description: 'Create impactful press releases and secure features in top industry publications to enhance your brand\'s credibility.' 
    },
    { 
        image: '/images/digital-marketing/seo.jpg', 
        title: 'SEO and Copywriting', 
        description: 'Optimize your website and marketing materials with keyword-rich, engaging content that drives traffic and conversions.' 
    },
    { 
        image: '/images/digital-marketing/blog.png', 
        title: 'Blog Management', 
        description: 'Establish thought leadership with professionally written, SEO-optimized blog posts that inform, inspire, and convert.' 
    },
    { 
        image: '/images/digital-marketing/analytics.png', 
        title: 'Analytics Reporting and Progress Updates', 
        description: 'Stay informed with detailed reports and regular updates, providing insights into campaign performance and progress toward your business goals.' 
    },
]
onMounted(() => {
  window.scrollTo(0, 0);
});

useSeoMeta({
  title: `Digital Marketing Services - Grow Your Online Presence`,
  ogTitle: `Unlock Your Digital Potential`,
  description: `Discover how our digital marketing services can help you grow your online presence and reach your target audience. Learn more about our services and how we can help you succeed.`,
  ogDescription: `Take your digital marketing to the next level with our expert services. From social media to SEO, we've got you covered.`,
  ogImage: `/images/og-images/digital-marketing.jpg`,
  twitterCard: `summary_large_image`,
});
</script>

<template>
    <section class="relative h-[300px] lg:h-[473px]">
        <NuxtImg 
            src="/images/digital-marketing/digital.jpg" 
            alt="banner"
            format="webp"
            quality="90"
            loading="eager"  
            class="w-full h-full object-cover"
        />
        <div class="bg-gradient-to-t from-black to-transparent w-full h-full absolute top-0 left-0 flex flex-col justify-end">
            <div class="px-4 lg:px-10 py-10 lg:py-16 space-y-6">
                <p class="text-white text-2xl sm:text-4xl">Services</p>
                <p class="font-bold text-4xl sm:text-6xl artegra text-brand-gold">Digital Marketing</p>
            </div>
        </div>
    </section>
    <section>
        <div class="max-w-[1000px] px-4 mx-auto py-16 text-center wysiwyg">
            <p class="text-xl sm:text-3xl leading-snug">Unlock the full potential of your brand with our <b>Digital Marketing Management</b> services, designed to deliver cutting-edge results. We offer a comprehensive suite of solutions tailored to your business needs, including:</p>
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
            <p class="text-brand-gold text-3xl sm:text-4xl font-bold artegra mb-10">Why Partner with Us?</p>
            <p class="text-white text-lg sm:text-xl leading-relaxed">Our proven processes have helped businesses thrive, in the recent past we have helped startups companies grow to grossing over $1,000,000 annually. With experience managing campaigns spending up to $1,000 per day in ad spend, we bring data-driven strategies and hands-on expertise to every project. Partner with us to elevate your digital marketing efforts and achieve measurable, sustainable growth in today’s competitive marketplace.
            </p>
        </div>
    </section>

    <ContactForm />
</template>
