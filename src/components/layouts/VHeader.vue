<script setup lang="ts">
import { PhList } from '@phosphor-icons/vue'
import MyLogoMini from '@/components/icons/MyLogoMini.vue'
import NavigationList from '@/components/layouts/NavigationList.vue'
import RightSideModal from '@/components/modals/RightSideModal.vue'
import { ref } from 'vue'

const isMobileMenuOpen = ref<boolean>(false)
</script>

<template>
  <header class="bg-comment/90 shadow backdrop-blur-[2px]" role="banner" aria-label="Site header">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <RouterLink
        :to="{ name: 'Landing' }"
        aria-label="Go to homepage - John Florentino Dunglao"
        class="focus:outline-none rounded-md"
      >
        <div class="text-lg font-bold flex gap-2 items-center text-primary">
          <MyLogoMini class="h-8 w-auto" aria-hidden="true" />
          <h6 class="text-foreground hidden lg:block">John Florentino Dunglao</h6>
        </div>
      </RouterLink>

      <nav class="flex items-center gap-2" role="navigation" aria-label="Main navigation">
        <div class="hidden lg:block">
          <NavigationList />
        </div>

        <!-- TODO: Implement mobile menu -->
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            type="button"
            aria-label="Open mobile menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
            class="focus:outline-none rounded-md p-1"
            @click="isMobileMenuOpen = true"
          >
            <PhList class="h-6 w-6 text-gray-700 hover:text-gray-900" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Teleport to="body">
        <!-- Mobile menu panel (to be implemented) -->
        <RightSideModal v-model:open-modal="isMobileMenuOpen">
          <NavigationList />
        </RightSideModal>
      </Teleport>
    </div>
  </header>
</template>
