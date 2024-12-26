<template>
  <ContactForm />
</template>

<script setup lang="ts">
const { siteName, description, shortDescription, siteImage } = useAppConfig();

useSeoMeta({
  title: `Contact Us`,
  ogTitle: siteName,
  description: description,
  ogDescription: shortDescription,
  ogImage: siteImage,
  twitterCard: `summary_large_image`,
});
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
