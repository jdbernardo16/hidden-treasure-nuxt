<script lang="ts" setup>
const items = [
    { 
        image: 'https://placehold.co/600x400', 
        title: 'Automobiles', 
        description: 'Luxury and exotic cars, vintage classics, and premium vehicles. Whether you’re looking to sell a rare collectible or a recent model, our expert team will help you achieve top market value.' 
    },
    { 
        image: 'https://placehold.co/600x400', 
        title: 'Antiques', 
        description: 'Rare and timeless pieces that hold historical or artistic significance. From antique furniture to vintage artifacts, our consignment services ensure your treasured items receive the attention they deserve.' 
    },
    { 
        image: 'https://placehold.co/600x400',
        title: 'Jewelry', 
        description: 'High-end pieces, including diamonds, watches, and bespoke designs. Our expert jewelry appraisers will help you determine the value of your treasured jewels and find the right buyer.' 
    },
    { 
        image: 'https://placehold.co/600x400', 
        title: 'Collectibles', 
        description: 'Limited edition items, memorabilia, and other sought-after treasures. Whether you’re a seasoned collector or looking to offload a rare find, our consignment services connect you with enthusiasts and collectors worldwide.' 
    },
    { 
        image: 'https://placehold.co/600x400', 
        title: 'Other Valuable Items', 
        description: 'From fine art to premium electronics, we help you turn assets into profit. Our expert team will guide you through the consignment process, ensuring you receive fair market value for your unique items.' 
    },
]
onMounted(() => {
  window.scrollTo(0, 0);
});

useSeoMeta({
  title: 'Consignment Services - Luxury Consignment Made Easy',
  ogTitle: 'Consignment Services for Luxury Items | High-End Consignment',
  description: 'Discover how our consignment services can help you simplify the process of selling your valuable items. From luxury goods to rare collectibles, we ensure your items receive the premium exposure they deserve.',
  ogDescription: 'Expert consignment services for luxury items, including high-end goods, rare collectibles, and more. Get the best value for your treasured possessions with our premium consignment services.',
  ogImage: '/images/consignment-services.jpg',
  twitterCard: 'summary_large_image',
});
</script>

<template>
    <section class="relative h-[300px] lg:h-[473px]">
        <NuxtImg 
            src="/images/services.png" 
            alt="banner"
            format="webp"
            quality="90"
            loading="eager"  
            class="w-full h-full object-cover"
        />
        <div class="bg-gradient-to-t from-black to-transparent w-full h-full absolute top-0 left-0 flex flex-col justify-end">
            <div class="px-4 lg:px-10 py-10 lg:py-16 space-y-6">
                <p class="text-white text-2xl sm:text-4xl">Services</p>
                <p class="font-bold text-4xl sm:text-7xl artegra text-brand-gold">Consignment Services</p>
            </div>
        </div>
    </section>
    <section>
        <div class="max-w-[1000px] px-4 mx-auto py-16 wysiwyg">
            <p class="text-xl sm:text-3xl leading-snug">Simplify the process of selling your valuable items with our <b>Consignment Services</b>, designed for discerning clients who value both efficiency and transparency. Whether you’re selling <b>luxury goods, rare collectibles, or high-value assets</b>, we ensure your items receive the premium exposure they deserve.
                <br><br>
                <b>What We Accept: </b>
                <br><br>
                We require a <b>minimum of $2,500 in appraised value</b> and specialize in consigning a wide range of valuable items, including but not limited to:
            </p>
        </div>
        <div class="max-w-[1000px] mx-auto py-16 space-y-10 lg:space-y-16 px-4">
            <div v-for="item in items" class="flex flex-col sm:flex-row items-center w-full service-card">
                <div class="w-full sm:w-1/2 aspect-[3/2] relative image">
                    <img 
                        class="w-full h-full object-cover" 
                        :src="item.image" 
                        alt="image"
                    >
                </div>
                <div class="w-full sm:w-1/2 space-y-5 content mt-6 sm:mt-0">
                    <p class="text-3xl sm:text-4xl font-bold artegra text-brand-gold">{{ item.title }}</p>
                    <p class="text-xl sm:text-2xl leading-normal">{{item.description}}</p>
                </div>
            </div>
        </div>
        <div class="max-w-[1000px] mx-auto pb-16 wysiwyg px-4">
            <div class="text-xl sm:text-2xl leading-snug">
                <h4>Competitive Rates</h4>
                <br>
                <ul>
                    <li>For items valued <b>over $5,000</b>, we charge a <b>20% commission</b>.</li>
                    <li>For items valued <b>under $5,000</b>, we charge a <b>30% commission</b>.</li>
                </ul>
                <h4>Our Proven Process</h4>
                <br>
                <ul>
                    <li><b>Expert Evaluation:</b> We assess your items to determine the optimal selling price and come to an agreed upon desired and minimum price.</li>
                    <li><b>Premium Marketing:</b> Your items are showcased to the right audience through targeted campaigns, high-quality photography, and luxury-focused platforms on all our platforms with over 500 positive reviews with a 100% satisfaction rate.</li>
                    <li><b>Seamless Transactions:</b> From negotiations to finalizing the sale, we handle every detail for a stress-free experience.</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="bg-brand-dark1">
        <div class="max-w-[1000px] mx-auto px-4 sm:px-20 text-center py-16">
            <p class="text-brand-gold text-3xl sm:text-4xl font-bold artegra mb-10">Why Choose Us?</p>
            <p class="text-white text-lg sm:text-xl leading-relaxed">Our consignment process is tailored to deliver maximum value and peace of mind. Whether you’re an individual seller or managing an estate, we provide unparalleled expertise and customer service. Trust us to elevate your consignment experience and achieve exceptional results.
            </p>
        </div>
    </section>

    <ContactForm />
</template>