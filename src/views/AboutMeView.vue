<script setup lang="ts">
import { ref } from 'vue'
import CaptionedBox from '@/components/boxes/CaptionedBox.vue'
import GridBox from '@/components/boxes/GridBox.vue'
import BorderCard from '@/components/cards/BorderCard.vue'
import VDialog from '@/components/modals/VDialog.vue'
import { SKILL_CATEGORIES, type SkillDisplay } from '@/components/portfolio/models/Skill'

const modal = ref<InstanceType<typeof VDialog>>()
const selectedSkill = ref<SkillDisplay | null>(null)

const openModal = (skill: SkillDisplay) => {
  selectedSkill.value = skill
  modal.value?.show()
}
</script>

<template>
  <div>
    <h1 class="text-3xl my-4">About Me</h1>

    <p>This is the About Me page.</p>
    <p>
      A passionate and dedicated software developer with a strong foundation in web development and
      a hardcore gamer. I have experience working with various programming languages and frameworks.
      Always eager to learn new technologies and improve my skills. My goal for the people I helpis
      to create efficient, scalable, and user-friendly applications that solve real-world problems.
    </p>
    <p>
      I graduated with an education degree in for Secondary Education but my passion for technology
      and programming led me to pursue a career in software development. I have since honed my
      skills through self-study, online courses, and hands-on experience in various projects. I am
      committed to continuous learning and growth in the ever-evolving field of technology.
    </p>

    <p>Here are some of my skills:</p>
    <CaptionedBox
      v-for="(group, categoryIndex) in SKILL_CATEGORIES"
      :key="'SkillCategoryGroup' + categoryIndex"
    >
      <template #legend>
        <h2 class="text-lg font-bold">{{ group.label }}</h2>
      </template>

      <GridBox as="ul">
        <li v-for="(skill, skillIndex) in group.skills" :key="'SkillItem' + skillIndex">
          <button class="block w-full h-full" @click="openModal(skill)">
            <BorderCard
              class="grid grid-cols-2 md:grid-cols-1 gap-2 place-items-center py-3 h-full"
            >
              <div class="h-10">
                <i :class="skill.icon" class="text-[32px]"></i>
              </div>

              <div class="text-lg text-center">
                <span>{{ skill.title }}</span>
              </div>
            </BorderCard>
          </button>
        </li>
      </GridBox>
    </CaptionedBox>

    <!-- TODO: Add handler to open modal with skill details -->
    <VDialog ref="modal">
      <template #title>
        {{ selectedSkill?.title }}
      </template>

      <template #description>
        {{ selectedSkill?.description }}
      </template>
    </VDialog>
  </div>
</template>
