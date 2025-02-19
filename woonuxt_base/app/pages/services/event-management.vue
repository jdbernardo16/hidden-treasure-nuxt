<script lang="ts" setup>
onMounted(() => {
    window.scrollTo(0, 0);
});
useSeoMeta({
    title: `Event Planning Services - Transform Your Vision`,
    ogTitle: `Create an Extraordinary Experience`,
    description: `Discover how our event planning services can help you create an unforgettable experience. From corporate events to international gatherings, we handle every detail.`,
    ogDescription: `Transform your vision into a memorable event with our expert event planning services. Learn more about our comprehensive approach.`,
    ogImage: `/images/og-images/event-management.jpg`,
    twitterCard: `summary_large_image`,
});
</script>

<template>
    <section class="relative h-[473px] lg:h-[473px]">
        <NuxtImg
            src="/images/event-banner.jpg"
            alt="banner"
            format="webp"
            quality="90"
            loading="eager"
            class="w-full h-full object-cover"
        />
        <div
            class="bg-gradient-to-t from-black to-transparent w-full h-full absolute top-0 left-0 flex flex-col justify-end"
        >
            <div class="px-4 lg:px-10 py-10 lg:py-16 space-y-6">
                <p class="text-white text-2xl sm:text-4xl">Services</p>
                <p class="font-bold text-4xl sm:text-6xl artegra text-brand-gold">
                    Event Planning Services
                </p>
            </div>
        </div>
    </section>
    <section>
        <div class="max-w-[1000px] m-auto px-4 lg:py-10 py-16 wysiwyg">
            <div class="text-xl leading-snug">
                Transform your vision into an extraordinary experience with our
                <b>Event Planning Services</b>, designed to handle every detail from start to
                finish. Whether you're hosting a corporate event, fundraiser, open house,
                international gathering, or trade show, our expertise ensures seamless execution and
                memorable results. <br /><br />
                <h4>Comprehensive Event Planning:</h4>
                <br />
                <ul>
                    <li>
                        <b>Budget Management:</b> We create and manage budgets to ensure your event
                        stays on track financially.
                    </li>
                    <li>
                        <b>Venue Scouting and Booking:</b> Find the perfect location to match your
                        event's theme and needs.
                    </li>
                    <li>
                        <b>Permits and Insurance:</b> We handle the logistics of permits, licenses,
                        and event insurance for peace of mind.
                    </li>
                    <li>
                        <b>Vendor Coordination:</b> From caterers to AV teams, we work with trusted
                        professionals to deliver top-tier service.
                    </li>
                    <li>
                        <b>Event Branding and Promotion:</b> Develop a cohesive look and feel with
                        custom visuals and decor.
                    </li>
                    <li>
                        <b>Guest Management:</b> Manage invitations, RSVPs, seating arrangements,
                        and attendee communications.
                    </li>
                </ul>
                <br />
                <h4>Flawless Execution:</h4>
                <br />
                <ul>
                    <li>
                        <b>Logistics and Scheduling:</b> Ensure every detail, from transportation to
                        timing, runs smoothly.
                    </li>
                    <li>
                        <b>Stage and Entertainment:</b> Coordinate speakers, performers, and
                        interactive activities.
                    </li>
                    <li>
                        <b>Food and Beverage Planning:</b> Arrange menus and catering to suit all
                        tastes and dietary needs.
                    </li>
                    <li>
                        <b>Security and Accessibility:</b> Provide crowd control, safety measures,
                        and accommodations for special needs.
                    </li>
                </ul>
                <br />
                <h4>Enhanced Attendee Experience:</h4>
                <br />
                <ul>
                    <li>
                        <b>Interactive Activities:</b> Create engaging moments with photo booths,
                        live polls, and breakout sessions.
                    </li>
                    <li>
                        <b>Event Promotion:</b> Leverage social media, email campaigns, and PR to
                        maximize attendance.
                    </li>
                    <li>
                        <b>Gift Bags and Giveaways:</b> Curate thoughtful takeaways that leave
                        lasting impressions.
                    </li>
                </ul>
                <br />
                <h4>Post-Event Wrap-Up:</h4>
                <br />
                <ul>
                    <li>
                        <b>Clean-Up and Tear-Down:</b> Restore venues to their original state
                        efficiently.
                    </li>
                    <li>
                        <b>Feedback and Analysis:</b> Collect attendee feedback and assess event
                        performance metrics.
                    </li>
                    <li>
                        <b>Thank You Notes and Media:</b> Follow up with guests and share event
                        highlights on social and media platforms.
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="bg-brand-dark1">
        <div class="max-w-[1000px] m-auto px-4 lg:px-20 sm:px-4 text-center py-16">
            <p class="text-brand-gold text-3xl sm:text-4xl font-bold artegra mb-10">
                Our Track Record
            </p>
            <p class="text-white text-lg sm:text-xl leading-relaxed">
                From high-profile fundraising events to international events and trade shows, we’ve
                planned and executed events from California to Barcelona, Spain that inspire and
                succeed. Let us handle the details while you enjoy the experience.<br /><br />
                Contact us today to start planning your next unforgettable event!
            </p>
        </div>
    </section>

    <ContactForm />
</template>
