<script setup lang="ts">
import VFooter from '@/components/layouts/VFooter.vue'
import VHeader from '@/components/layouts/VHeader.vue'
import FadeTransition from '@/components/transitions/FadeTransition.vue'
</script>

<template>
  <!-- remove overflow-scroll after implementing the planned layout -->
  <div class="bg-background">
    <div class="sticky top-0 z-50">
      <VHeader />
    </div>

    <main class="container mx-auto min-h-[calc(100lvh-64px-24px)]">
      <RouterView v-slot="{ Component, route }">
        <FadeTransition>
          <Component :is="Component" :key="route.path" />
        </FadeTransition>
      </RouterView>
    </main>

    <div class="sticky bottom-0">
      <VFooter />
    </div>
  </div>
</template>
