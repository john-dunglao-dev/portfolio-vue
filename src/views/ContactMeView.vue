<script setup lang="ts">
import axios from 'axios'
import { reactive, ref } from 'vue'
import VDialog from '@/components/modals/VDialog.vue'
import { PhArrowClockwise } from '@phosphor-icons/vue'

const isSuccessModalOpen = ref<boolean>(false)
const isSending = ref<boolean>(true)
const contactForm = reactive<Record<string, string>>({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const resetForm = () => {
  Object.keys(contactForm).forEach((key: string) => {
    contactForm[key] = ''
  })
}

const sendMessageToAuthor = () => {
  if (isSending.value) return
  isSending.value = true

  axios
    .post('/api/contact/send-to-author', contactForm)
    .then((response) => {
      console.log('Message sent successfully:', response.data)

      isSuccessModalOpen.value = true
      resetForm()
    })
    .catch((error) => {
      console.error('Error sending message:', error)
    })
    .finally(() => {
      isSending.value = false
    })
}
</script>

<template>
  <div class="mt-6">
    <div>
      <h1>Contact Me</h1>
      <p class="mb-4">Feel free to reach out to me through any of the following platforms:</p>

      <ul>
        <li>
          Email:
          <a href="mailto:jfsdunglao@gmail.com">jfsdunglao@gmail.com</a>
        </li>
        <li>
          LinkedIn:
          <a href="https://www.linkedin.com/in/jfsdunglao">
            https://www.linkedin.com/in/jfsdunglao
          </a>
        </li>
        <li>
          GitHub:
          <a href="https://github.com/johndoe">https://github.com/john-dunglao-dev</a>
        </li>
      </ul>
    </div>

    <p class="my-4">Or use this form to reach out</p>

    <div>
      <form class="space-y-4" @submit.prevent="sendMessageToAuthor">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="name" class="block text-sm font-medium">Name</label>
            <input
              v-model="contactForm.name"
              type="text"
              id="name"
              name="name"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium">Email</label>
            <input
              v-model="contactForm.email"
              type="email"
              id="email"
              name="email"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label for="subject" class="block text-sm font-medium">Subject</label>
          <input
            v-model="contactForm.subject"
            type="text"
            id="subject"
            name="subject"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium">Message</label>
          <textarea
            v-model="contactForm.message"
            id="message"
            name="message"
            rows="4"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PhArrowClockwise v-if="isSending" class="mr-2 animate-spin inline-block" />
            {{ isSending ? 'Sending...' : 'Send Message' }}
          </button>
        </div>
      </form>
    </div>

    <VDialog v-model:is-open="isSuccessModalOpen">
      <template #title>
        <h4>Thank you for reaching out!</h4>
      </template>

      <template #description>
        <p>Your message has been sent successfully. I will get back to you as soon as possible.</p>
      </template>
    </VDialog>
  </div>
</template>
