<script setup lang="ts">
import { PhFileArrowDown } from '@phosphor-icons/vue'
import { differenceInMonths } from 'date-fns'
import { nextTick, onMounted, ref } from 'vue'

const isVisible = ref(false)
const experience = ref<number>(differenceInMonths(new Date(), new Date(2018, 2)) / 12)

onMounted(async () => {
  await nextTick()
  isVisible.value = true
})
</script>

<template>
  <div
    class="min-h-[calc(100dvh-(64px+30px))] flex flex-col justify-center items-center p-8 relative overflow-hidden"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full items-center z-10 transition-all duration-700 ease-out"
      :class="{
        'opacity-100 translate-y-0': isVisible,
        'opacity-0 translate-y-8': !isVisible,
      }"
    >
      <div>
        <p class="text-xl md:text-2xl ml-2 text-foreground/90 font-light">Senior Web Developer</p>
        <h1 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">John Florentino Dunglao</h1>
        <div class="mb-12">
          <p class="text-lg ml-2 text-foreground/80 leading-relaxed">
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
            class="px-8 py-4 bg-transparent text-foreground border-2 border-foreground/30 rounded-full text-base font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:bg-white/10 hover:border-white/50 hover:-translate-y-1"
          >
            Get in Touch
          </RouterLink>

          <a
            href="@/assets/pdfs/John-Florentino-Dunglao-CV.pdf"
            download
            class="border rounded-full p-4 text-primary hover:text-foreground transition-all duration-300 ease-in-out"
          >
            <PhFileArrowDown size="24" />
          </a>
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
      </div>

      <div class="col-span-2 grid grid-cols-1 md:grid-cols-4 text-center">
        <div>
          <div>
            <h6 class="text-foreground font-bold">
              {{ Math.trunc(experience) }}<span v-if="experience % 1 !== 0">+</span>
              years
            </h6>

            <p>Experience as a Web Developer</p>
          </div>
        </div>

        <div>
          <div>
            <h6 class="text-foreground font-bold">4</h6>

            <p>Junior Developers Mentored</p>
          </div>
        </div>

        <div>
          <div>
            <h6 class="text-foreground font-bold">3 years</h6>

            <p>Frontend Development Experience</p>
          </div>
        </div>

        <div>
          <div>
            <h6 class="text-foreground font-bold">5</h6>

            <p>Technologies & Frameworks Used</p>
          </div>
        </div>
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
