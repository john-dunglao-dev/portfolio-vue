<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import MyLogo from '@/components/icons/MyLogo.vue'

const isVisible = ref(false)

onMounted(async () => {
  await nextTick()
  isVisible.value = true
})
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center items-center p-8 relative overflow-hidden">
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full items-center z-10 transition-all duration-700 ease-out"
      :class="{
        'opacity-100 translate-y-0': isVisible,
        'opacity-0 translate-y-8': !isVisible,
      }"
    >
      <div class="text-white">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">John Florentino Dunglao</h1>
        <p class="text-xl md:text-2xl mb-8 text-white/90 font-light">Welcome to my portfolio</p>
        <div class="mb-12">
          <p class="text-lg text-white/80 leading-relaxed">
            Full Stack Developer • Problem Solver • Technology Enthusiast
          </p>
        </div>
        <div class="flex gap-4 flex-wrap">
          <RouterLink
            :to="{ name: 'AboutMe' }"
            class="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white border-none rounded-full text-base font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider shadow-lg shadow-red-500/40 hover:shadow-xl hover:shadow-red-500/60 hover:-translate-y-1"
          >
            Know More
          </RouterLink>
          <RouterLink
            :to="{ name: 'ContactMe' }"
            class="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full text-base font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:bg-white/10 hover:border-white/50 hover:-translate-y-1"
          >
            Get in Touch
          </RouterLink>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <MyLogo class="text-primary" />
      </div>
    </div>
  </div>
</template>
