<script setup lang="ts">
import CaptionedBox from '@/components/boxes/CaptionedBox.vue';
import GridBox from '@/components/boxes/GridBox.vue';
import BorderCard from '@/components/cards/BorderCard.vue';
import VDialog from '@/components/modals/VDialog.vue';
import { backendIcons, databaseIcons, devopsIcons, frontendIcons } from '@/components/portfolio/models/Skill';
import { ref } from 'vue';

const ALL_SKILLS = [
  {
    legend: 'Frontend Skills',
    skills: frontendIcons
  },
  {
    legend: 'Backend Skills',
    skills: backendIcons
  },
  {
    legend: 'Database Skills',
    skills: databaseIcons
  },
  {
    legend: 'DevOps Skills',
    skills: devopsIcons
  },
]

const modal = ref<InstanceType<typeof VDialog>>();

const openModal = () => modal.value?.show();
</script>

<template>
  <div>
    <h1>About Me</h1>

    <p>This is the About Me page.</p>
    <p>
      A passionate and dedicated software developer with a strong foundation in computer science and a keen interest in web development. 
      I have experience working with various programming languages and frameworks. Always eager to learn new technologies and improve my skills. 
      My goal for the people I helpis to create efficient, scalable, and user-friendly applications that solve real-world problems.
    </p>


    <p>Here are some of my skills:</p>
    <CaptionedBox v-for="(group, index) in ALL_SKILLS" :key="'SkillGroup' + index">
      <template #legend>
        <h2 class="text-lg font-bold">{{ group.legend }}</h2>
      </template>

      <GridBox as="ul">
        <li v-for="(icon, skill) in group.skills" :key="skill">
          <BorderCard class="grid grid-cols-2 md:grid-cols-1 gap-2 place-items-center py-3 h-full">
            <div class="h-10">
              <i :class="icon" class="text-[32px]"></i>
            </div>

            <div class="text-lg text-center">
              {{ skill }}
            </div>
          </BorderCard>
        </li>
      </GridBox>
    </CaptionedBox>


    <button @click="openModal">Open Modal</button>
    <VDialog ref="modal"></VDialog>
  </div>
</template>