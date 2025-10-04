<script setup lang="ts">
import { useColorMode, useCycleList, useDark } from '@vueuse/core';
import { Theme } from '@/components/layouts/models/Theme';
import { watchEffect } from 'vue';
import { PhMoon, PhPersonArmsSpread, PhSun } from '@phosphor-icons/vue';

// TODO: implement other themes later
const mode = useColorMode<Theme>({
  initialValue: useDark() ? Theme.DARK : Theme.LIGHT,
  modes: {
    dracula: Theme.DRACULA,
  }
});

const { state, next } = useCycleList([Theme.LIGHT, Theme.DARK, Theme.DRACULA]);
watchEffect(() => mode.value = state.value);
</script>

<template>
  <button @click="next()">
    <span v-if="state === Theme.LIGHT"><PhMoon /></span>
    <span v-if="state === Theme.DARK"><PhSun /></span>
    <span v-if="state === Theme.DRACULA"><PhPersonArmsSpread /></span>
  </button>
</template>
