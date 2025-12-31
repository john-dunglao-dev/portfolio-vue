<script setup lang="ts">
import { PhFileArrowDown } from '@phosphor-icons/vue'
import { differenceInMonths } from 'date-fns'
import { computed, nextTick, onMounted, ref } from 'vue'

const isVisible = ref(false)
const experience = ref<number>(differenceInMonths(new Date(), new Date(2018, 2)) / 12)

const yearsOfExperience = computed<number>(() => Math.trunc(experience.value))

onMounted(async () => {
  await nextTick()
  isVisible.value = true
})
</script>

<template>
  <div
    class="min-h-[calc(100dvh-(64px+30px))] lg:flex lg:flex-col lg:justify-center lg:items-center lg:p-8 relative lg:overflow-hidden transition-all duration-700 ease-out"
  >
    <div class="grid lg:grid-cols-2">
      <div class="order-2 lg:order-1 flex items-center">
        <div class="lg:max-w-lg lg:h-fit">
          <p
            class="text-xl lg:text-2xl ml-2 text-foreground/90 font-light text-center lg:text-left"
          >
            Senior Web Developer
          </p>

          <h1 class="text-4xl lg:text-6xl font-bold mb-4 leading-tight text-center lg:text-left">
            John Florentino Dunglao
          </h1>

          <div class="mb-12">
            <p class="text-lg ml-2 text-foreground/80 leading-relaxed text-center lg:text-left">
              Problem Solver • Technology Enthusiast • Gamer
            </p>
          </div>

          <div class="flex gap-4 flex-wrap flex-col lg:flex-row px-6 lg:px-0">
            <RouterLink
              :to="{ name: 'AboutMe' }"
              class="px-8 py-4 bg-linear-to-r from-red-500 to-orange-500 text-white border-none rounded-full text-base text-center lg:text-left font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider shadow-lg shadow-red-500/40 hover:shadow-xl hover:shadow-red-500/60 hover:-translate-y-1"
            >
              Know More
            </RouterLink>

            <RouterLink
              :to="{ name: 'ContactMe' }"
              class="px-8 py-4 bg-transparent text-foreground border-2 border-foreground/30 rounded-full text-base text-center lg:text-left font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:bg-white/10 hover:border-primary/50 hover:-translate-y-1"
            >
              Get in Touch
            </RouterLink>

            <a
              href="@/assets/pdfs/John-Florentino-Dunglao-CV.pdf"
              download
              class="border rounded-full p-4 text-primary hover:text-background hover:bg-primary transition-all duration-300 ease-in-out flex place-content-center gap-2 uppercase font-semibold"
            >
              <PhFileArrowDown size="24" /> <span class="lg:hidden">Download CV</span>
            </a>
          </div>
        </div>
      </div>

      <div class="order-1 lg:order-2 flex justify-center mt-6 lg:mt-0">
        <div
          class="w-50 h-50 lg:w-120 lg:h-120 object-contain overflow-hidden rounded-full border-4 border-white/20 shadow-lg shadow-black/30"
        >
          <img
            src="@/assets/images/me_thinking.jpg"
            alt="Picture of a man thinking while smiling"
          />
        </div>
      </div>
    </div>

    <div
      class="grid lg:grid-cols-2 lg:gap-16 lg:max-w-6xl lg:items-center z-10 my-6 lg:my-0 lg:mt-10"
      :class="{
        'opacity-100 translate-y-0': isVisible,
        'opacity-0 translate-y-8': !isVisible,
      }"
    >
      <div class="col-span-2 grid grid-cols-1 lg:grid-cols-4 text-center">
        <div>
          <div>
            <h6 class="text-foreground font-bold">
              {{ yearsOfExperience }}<span v-if="experience % 1 !== 0">+</span>
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
