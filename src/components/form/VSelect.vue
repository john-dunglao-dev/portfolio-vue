<script setup lang="ts">
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import type { PropType } from 'vue'
import type { Option } from '@/components/form/models/Option'
import { PhCaretDown } from '@phosphor-icons/vue'

defineProps({
  options: {
    type: Array as PropType<Option[]>,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Select an option',
  },
})

const selected = defineModel('selected', {
  type: Object as PropType<Option>,
})
</script>

<template>
  <div class="w-full">
    <Listbox v-model="selected" as="div">
      <ListboxLabel v-if="label" class="block text-sm font-medium text-foreground mb-1">
        {{ label }}
      </ListboxLabel>

      <div class="relative">
        <ListboxButton
          class="relative w-full cursor-default rounded-lg bg-background py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:text-sm text-foreground"
          :aria-label="label || 'Select from options'"
        >
          <span class="block truncate">
            {{ selected?.label ? `Theme: ${selected.label}` : placeholder }}
          </span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            aria-hidden="true"
          >
            <PhCaretDown size="16" class="text-comment" />
          </span>
        </ListboxButton>
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-60 w-full min-w-max overflow-auto rounded-md bg-selection py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-for="(option, index) in options"
            :key="`option-${option.value || index}`"
            :value="option"
            class="relative cursor-pointer select-none py-2 px-4 transition-colors text-foreground hover:bg-primary/10 focus:bg-primary focus:text-white"
            v-slot="{ selected: optionSelected, active }"
          >
            <div :class="{ 'bg-primary text-white': active }">
              <span class="block truncate" :class="{ 'font-semibold': optionSelected }">
                {{ option.label }}
              </span>
              <span v-if="optionSelected" class="sr-only">(selected)</span>
            </div>
          </ListboxOption>
        </ListboxOptions>
      </div>
    </Listbox>
  </div>
</template>
