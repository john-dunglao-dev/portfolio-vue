<script setup lang="ts">
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
</script>

<template>
  <div>
    <Header />

    <main class="container mx-auto py-4">
      <RouterView />
    </main>
    
    <Footer />
  </div>
</template>