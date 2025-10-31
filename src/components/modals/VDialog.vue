<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogTitle, DialogPanel } from '@headlessui/vue'

const isOpen = defineModel<boolean>('isOpen', { required: true })

const closeModal = () => (isOpen.value = false)
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-60">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/70" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-background p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h2">
                <slot name="title">Payment successful</slot>
              </DialogTitle>

              <div class="mt-2">
                <slot name="description">
                  <p class="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you an email with all
                    of the details of your order.
                  </p>
                </slot>
              </div>

              <div class="mt-4 text-right">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-secondary px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
