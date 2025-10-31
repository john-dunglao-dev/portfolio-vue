<script setup lang="ts">
import VSelect from '@/components/form/VSelect.vue'
import { Theme } from '@/components/layouts/models/Theme'
import { ref, watch } from 'vue'
import type { Option } from '@/components/form/models/Option'
import { useColorMode, useDark } from '@vueuse/core'
import { useCapitalization } from '@/composables/text-manipulation/use-capitalization'

const themeOptions = [
  { label: useCapitalization(Theme.LIGHT), value: Theme.LIGHT },
  { label: useCapitalization(Theme.DARK), value: Theme.DARK },
  { label: useCapitalization(Theme.DRACULA), value: Theme.DRACULA },
  { label: useCapitalization(Theme.NORD), value: Theme.NORD },
  { label: useCapitalization(Theme.MONOKAI), value: Theme.MONOKAI },
  { label: useCapitalization(Theme.SOLARIZED_DARK), value: Theme.SOLARIZED_DARK },
  { label: useCapitalization(Theme.SOLARIZED_LIGHT), value: Theme.SOLARIZED_LIGHT },
  { label: useCapitalization(Theme.GITHUB), value: Theme.GITHUB },
  { label: useCapitalization(Theme.GITHUB_DARK), value: Theme.GITHUB_DARK },
  { label: useCapitalization(Theme.ONE_DARK), value: Theme.ONE_DARK },
  { label: useCapitalization(Theme.MATERIAL), value: Theme.MATERIAL },
  { label: useCapitalization(Theme.HIGH_CONTRAST), value: Theme.HIGH_CONTRAST },
  { label: useCapitalization(Theme.SEPIA), value: Theme.SEPIA },
  { label: useCapitalization(Theme.SYNTHWAVE), value: Theme.SYNTHWAVE },
  { label: useCapitalization(Theme.FOREST), value: Theme.FOREST },
  { label: useCapitalization(Theme.OCEAN), value: Theme.OCEAN },
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

const getCurrentThemeOptionIndex = () => {
  return themeOptions.findIndex((theme) => theme.value === mode.value)
}

// TODO: implement a way to persist selected theme across sessions
const selected = ref<Option>(themeOptions[getCurrentThemeOptionIndex()])
watch(selected, (newValue: Option) => {
  mode.value = newValue.value as Theme
})
</script>

<template>
  <VSelect v-model:selected="selected" :options="themeOptions"></VSelect>
</template>
