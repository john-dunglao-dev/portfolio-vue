<script setup lang="ts">
import { PhX } from '@phosphor-icons/vue'
import { ref } from 'vue'
import VButton from '@/components/buttons/VButton.vue'

const dialogRef = ref<HTMLDialogElement | null>(null)

const show = () => {
  if (!dialogRef.value) {
    console.error('[Show Dialog] Referenced dialog is not found')
  }

  dialogRef.value?.showModal()
}
const hide = () => {
  if (!dialogRef.value) {
    console.error('[Hide Dialog] Referenced dialog is not found')
  }

  dialogRef.value?.close()
}

defineExpose({
  show,
  hide,
})
</script>

<template>
  <dialog
    ref="dialogRef"
    class="border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 top-1/2 left-1/2 -translate-1/2"
    @click.self="hide"
  >
    <div class="p-4">
      <form method="dialog" class="absolute right-2 top-2">
        <button>
          <PhX class="text-gray-500 hover:text-gray-700 transition-colors duration-200" />
        </button>
      </form>

      <h2 class="text-xl font-semibold mb-2">
        <slot name="title">Default Title</slot>
      </h2>

      <div>
        <slot name="override-content">
          <p class="text-gray-600 dark:text-gray-300 mb-2">
            <slot name="description">Default description text goes here.</slot>
          </p>
        </slot>
      </div>

      <div class="flex justify-end mt-2">
        <form method="dialog">
          <VButton color="secondary">close</VButton>
        </form>
      </div>
    </div>
  </dialog>
</template>
