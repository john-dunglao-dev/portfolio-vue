<script setup lang="ts">
import { ref } from 'vue'
import CaptionedBox from '@/components/boxes/CaptionedBox.vue'
import GridBox from '@/components/boxes/GridBox.vue'
import BorderCard from '@/components/cards/BorderCard.vue'
import VDialog from '@/components/modals/VDialog.vue'
import { SKILL_CATEGORIES, type SkillDisplay } from '@/components/portfolio/models/Skill'

// const modal = ref<InstanceType<typeof VDialog>>()
const selectedSkill = ref<SkillDisplay | null>(null)
const isModalOpen = ref(false)

const openModal = (skill: SkillDisplay) => {
  selectedSkill.value = skill
  // modal.value?.show()
  isModalOpen.value = true
}
</script>

<template>
  <div>
    <h1 class="my-4 px-6 lg:px-0">About Me</h1>

    <div class="space-y-2 px-6 lg:px-0">
      <p>
        A passionate and dedicated software developer with a strong foundation in web development
        and a hardcore gamer. I have experience working with various programming languages and
        frameworks. Always eager to learn new technologies and improve my skills. My goal for the
        people I helpis to create efficient, scalable, and user-friendly applications that solve
        real-world problems.
      </p>

      <p>
        I graduated with an education degree in for Secondary Education but my passion for
        technology and programming led me to pursue a career in software development. I have since
        honed my skills through self-study, online courses, and hands-on experience in various
        projects. I am committed to continuous learning and growth in the ever-evolving field of
        technology.
      </p>

      <p>Here are some of my skills:</p>
    </div>
    <CaptionedBox
      v-for="(group, categoryIndex) in SKILL_CATEGORIES"
      :key="'SkillCategoryGroup' + categoryIndex"
      class="mt-4 mx-6 lg:mx-0"
    >
      <template #legend>
        <h5>{{ group.label }}</h5>
      </template>

      <GridBox as="ul">
        <li v-for="(skill, skillIndex) in group.skills" :key="'SkillItem' + skillIndex">
          <button class="block w-full h-full focus:outline-primary" @click="openModal(skill)">
            <BorderCard
              class="grid grid-cols-4 md:grid-cols-1 gap-2 place-items-center py-3 h-full px-3 lg:px-0"
            >
              <div class="h-10 flex items-center">
                <i :class="skill.icon" class="text-[32px]"></i>
              </div>

              <div class="text-lg text-center col-span-3 lg:col-span-1">
                <span>{{ skill.title }}</span>
              </div>
            </BorderCard>
          </button>
        </li>
      </GridBox>
    </CaptionedBox>

    <!-- TODO: Add handler to open modal with skill details -->
    <VDialog v-model:is-open="isModalOpen">
      <template #title>
        <h2>
          {{ selectedSkill?.title }}
        </h2>
      </template>

      <template #description>
        <p>
          {{ selectedSkill?.description }}
        </p>
      </template>
    </VDialog>
  </div>
</template>
