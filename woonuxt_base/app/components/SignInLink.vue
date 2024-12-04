<script setup lang="ts">
const { viewer, avatar, logoutUser, isPending, wishlistLink } = useAuth();
const linkTitle = computed<string>(() => viewer.value?.username || 'Sign In');
import { User } from 'lucide-vue-next';
</script>

<template>
  <NuxtLink to="/my-account" :title="linkTitle" class="hidden sm:inline-flex aspect-square items-center">
    <Transition name="pop-in" mode="out-in">
      <span v-if="avatar" class="relative avatar">
        <User class="w-6 h-6 text-brand-gold" />
        <div class="account-dropdown">
          <NuxtLink :to="wishlistLink" class="hover:bg-brand-gold hover:text-white"><Icon name="ion:heart-outline" size="16" /><span>Wishlist</span></NuxtLink>
          <NuxtLink to="/my-account" class="hover:bg-brand-gold hover:text-white"><Icon name="ion:person-outline" size="16" /><span>My Account</span></NuxtLink>
          <button class="text-red-600 hover:bg-red-50" @click.prevent="logoutUser">
            <LoadingIcon v-if="isPending" size="16" />
            <Icon v-else name="ion:log-out-outline" size="16" />
            <span>Logout</span>
          </button>
        </div>
      </span>
      <User v-else class="w-6 h-6 text-brand-gold" />
    </Transition>
  </NuxtLink>
</template>

<style scoped lang="postcss">
.pop-in-enter-active,
.pop-in-leave-active {
  transition: transform 0.3s;
}

.pop-in-enter-from,
.pop-in-leave-to {
  transform: scale(0);
}

.avatar {
  .account-dropdown {
    @apply absolute gap-2 top-6 -right-2  z-50 p-2 bg-brand-dark1 border border-brand-gold rounded-lg shadow-lg text-sm text-brand-gold hidden;

    a,
    button {
      @apply flex gap-2 items-center p-2 rounded whitespace-nowrap min-w-[200px];
    }
  }

  &:hover .account-dropdown {
    @apply grid;
  }
}
</style>
