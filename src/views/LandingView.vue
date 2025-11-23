<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import MyLogo from '@/components/icons/MyLogo.vue'
import Cube from '@/components/graphics/Cube.vue'
import Pyramid from '@/components/graphics/Pyramid.vue'

const isVisible = ref(false)

onMounted(async () => {
  await nextTick()
  isVisible.value = true
})
</script>

<template>
  <div
    class="min-[calc(100dvh-(64px+30px))] flex flex-col justify-center items-center p-8 relative overflow-hidden"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full items-center z-10 transition-all duration-700 ease-out"
      :class="{
        'opacity-100 translate-y-0': isVisible,
        'opacity-0 translate-y-8': !isVisible,
      }"
    >
      <div class="text-white">
        <p class="text-xl md:text-2xl ml-2 text-white/90 font-light">Senior Web Developer</p>
        <h1 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">John Florentino Dunglao</h1>
        <div class="mb-12">
          <p class="text-lg ml-2 text-white/80 leading-relaxed">
            Problem Solver • Technology Enthusiast • Gamer
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
      <div class="flex justify-center items-center relative">
        <!-- <MyLogo class="text-primary" /> -->
        <div
          class="w-120 h-120 object-contain overflow-hidden rounded-full border-4 border-white/20 shadow-lg shadow-black/30"
        >
          <img
            src="@/assets/images/me_thinking.jpg"
            alt="Picture of a man thinking while smiling"
          />
        </div>

        <!-- triangle -->
        <div class="absolute top-1/2 left-1/2 triangle"></div>
        <!-- circle -->
        <div class="absolute bottom-[-100px] right-[-100px] circle"></div>
        <!-- square -->
        <div class="absolute top-[-75px] left-[75px] square"></div>

        <!-- cube -->
        <Cube class="absolute top-[50px] right-[50px]" />

        <!-- pyramid -->
        <Pyramid class="absolute bottom-[50px] left-[50px]" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.triangle {
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 40px solid var(--color-primary);
}

.circle {
  width: 200px;
  height: 200px;
  background: var(--color-primary);
  border-radius: 50%;
}

.square {
  width: 150px;
  height: 150px;
  background: var(--color-primary);
}

.cube {
  width: 100px;
  height: 100px;
  background: var(--color-primary);
}
</style>
