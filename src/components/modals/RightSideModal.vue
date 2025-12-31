<script setup lang="ts">
import { Dialog, DialogPanel, TransitionRoot } from '@headlessui/vue'

const openModal = defineModel('openModal', {
  type: Boolean,
  required: true,
})

const setOpenModal = (value: boolean) => {
  openModal.value = value
}
</script>

<template>
  <TransitionRoot as="template" :show="openModal">
    <Dialog as="div" class="relative z-50" @close="setOpenModal">
      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel class="pointer-events-auto w-screen max-w-md">
              <div class="flex h-full flex-col overflow-y-scroll bg-background shadow-xl">
                <div class="p-6">
                  <slot />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
