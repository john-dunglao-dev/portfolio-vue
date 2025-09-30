<script setup lang="ts">
import MyLogo from '@/components/icons/MyLogo.vue'
import { ref, onMounted, nextTick } from 'vue'

const isVisible = ref(false)

onMounted(async () => {
  await nextTick()
  isVisible.value = true
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col justify-center items-center p-8 relative overflow-hidden">
    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 opacity-30 bg-grid-pattern"></div>
    
    <div 
      class="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full items-center z-10 transition-all duration-700 ease-out"
      :class="{ 
        'opacity-100 translate-y-0': isVisible, 
        'opacity-0 translate-y-8': !isVisible 
      }"
    >
      <div class="text-white">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
          John Florentino Dunglao
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-white/90 font-light">
          Welcome to my portfolio
        </p>
        <div class="mb-12">
          <p class="text-lg text-white/80 leading-relaxed">
            Full Stack Developer • Problem Solver • Technology Enthusiast
          </p>
        </div>
        <div class="flex gap-4 flex-wrap">
          <button class="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white border-none rounded-full text-base font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider shadow-lg shadow-red-500/40 hover:shadow-xl hover:shadow-red-500/60 hover:-translate-y-1">
            View My Work
          </button>
          <button class="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full text-base font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:bg-white/10 hover:border-white/50 hover:-translate-y-1">
            Get in Touch
          </button>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <MyLogo />
      </div>
    </div>
    
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
      <div class="w-5 h-5 border-r-2 border-b-2 border-white/70 transform rotate-45 animate-bounce"></div>
    </div>
  </div>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
}
</style>
