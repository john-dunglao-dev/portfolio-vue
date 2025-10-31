<script setup lang="ts">
import VSelect from '@/components/form/VSelect.vue'
import { Theme } from '@/components/layouts/models/Theme'
import { ref, watch } from 'vue'
import type { Option } from '@/components/form/models/Option'
import { useColorMode, useDark } from '@vueuse/core'

const themeOptions = [
  { label: Theme.LIGHT, value: Theme.LIGHT },
  { label: Theme.DARK, value: Theme.DARK },
  { label: Theme.DRACULA, value: Theme.DRACULA },
  { label: Theme.NORD, value: Theme.NORD },
  { label: Theme.MONOKAI, value: Theme.MONOKAI },
  { label: Theme.SOLARIZED_DARK, value: Theme.SOLARIZED_DARK },
  { label: Theme.SOLARIZED_LIGHT, value: Theme.SOLARIZED_LIGHT },
  { label: Theme.GITHUB, value: Theme.GITHUB },
  { label: Theme.GITHUB_DARK, value: Theme.GITHUB_DARK },
  { label: Theme.ONE_DARK, value: Theme.ONE_DARK },
  { label: Theme.MATERIAL, value: Theme.MATERIAL },
  { label: Theme.HIGH_CONTRAST, value: Theme.HIGH_CONTRAST },
  { label: Theme.SEPIA, value: Theme.SEPIA },
  { label: Theme.SYNTHWAVE, value: Theme.SYNTHWAVE },
  { label: Theme.FOREST, value: Theme.FOREST },
  { label: Theme.OCEAN, value: Theme.OCEAN },
]
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

// TODO: implement a way to persist selected theme across sessions
const selected = ref<Option>(themeOptions[0])
watch(selected, (newValue: Option) => {
  mode.value = newValue.value as Theme
})
</script>

<template>
  <VSelect v-model:selected="selected" :options="themeOptions"></VSelect>
</template>
