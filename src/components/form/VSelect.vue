<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import type { PropType } from 'vue'
import type { Option } from '@/components/form/models/Option'
import { PhCaretDown } from '@phosphor-icons/vue'

defineProps({
  options: {
    type: Array as PropType<Option[]>,
    required: true,
  },
})

const selected = defineModel('selected', {
  type: Object as PropType<Option>,
})
</script>

<template>
  <Listbox v-model="selected">
    <div class="relative mt-1">
      <ListboxButton
        class="relative w-full cursor-default rounded-lg bg-selection py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
      >
        <span class="block truncate">
          {{ selected?.label ?? 'Select an option' }}
        </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <PhCaretDown size="16" />
        </span>
      </ListboxButton>
      <ListboxOptions
        class="absolute mt-1 max-h-60 w-fit max-w-96 overflow-auto rounded-md bg-selection py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      >
        <ListboxOption
          v-for="(option, index) in options"
          v-slot="{ selected: optionSelected }"
          :key="`ListboxOption-${index}`"
          :value="option"
          class="relative cursor-default select-none py-2 px-4 hover:bg-primary"
        >
          <span class="block truncate" :class="{ 'font-bold': optionSelected }">
            {{ option.label }}
          </span>
        </ListboxOption>
      </ListboxOptions>
    </div>
  </Listbox>
</template>
