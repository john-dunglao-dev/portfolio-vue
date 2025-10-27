<script setup lang="ts">
import { useColorMode, useCycleList, useDark } from '@vueuse/core'
import { watchEffect } from 'vue'
import { Theme } from '@/components/layouts/models/Theme'

// TODO: implement other themes later
const mode = useColorMode<Theme>({
  initialValue: useDark() ? Theme.DARK : Theme.LIGHT,
  modes: {
    dracula: Theme.DRACULA,
    nord: Theme.NORD,
    monokai: Theme.MONOKAI,
    'solarized-dark': Theme.SOLARIZED_DARK,
    'solarized-light': Theme.SOLARIZED_LIGHT,
    github: Theme.GITHUB,
    'github-dark': Theme.GITHUB_DARK,
    'one-dark': Theme.ONE_DARK,
    material: Theme.MATERIAL,
    'high-contrast': Theme.HIGH_CONTRAST,
    sepia: Theme.SEPIA,
    synthwave: Theme.SYNTHWAVE,
    forest: Theme.FOREST,
    ocean: Theme.OCEAN,
  },
})

const { state, next } = useCycleList([
  Theme.LIGHT,
  Theme.DARK,
  Theme.DRACULA,
  Theme.NORD,
  Theme.MONOKAI,
  Theme.SOLARIZED_DARK,
  Theme.SOLARIZED_LIGHT,
  Theme.GITHUB,
  Theme.GITHUB_DARK,
  Theme.ONE_DARK,
  Theme.MATERIAL,
  Theme.HIGH_CONTRAST,
  Theme.SEPIA,
  Theme.SYNTHWAVE,
  Theme.FOREST,
  Theme.OCEAN,
])
watchEffect(() => {
  mode.value = state.value
})
</script>

<template>
  <button @click="next()">Theme: {{ mode }}</button>
</template>
