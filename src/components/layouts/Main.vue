<script setup lang="ts">
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import FadeTransition from '@/components/transitions/FadeTransition.vue';
</script>

<template>
  <!-- remove overflow-scroll after implementing the planned layout -->
  <div class="h-lvh max-h-lvh max-w-full overflow-scroll bg-background">
    <div class="sticky top-0 z-50">
      <Header />
    </div>

    <main class="container mx-auto min-h-[calc(100lvh-64px-24px)]">
      <RouterView v-slot="{ Component, route }">
        <FadeTransition>
          <Component :is="Component" :key="route.path" />
        </FadeTransition>
      </RouterView>
    </main>
    
    <div class="sticky bottom-0">
      <Footer />
    </div>
  </div>
</template>