<script setup lang="ts">
import axios from 'axios'
import { reactive, ref } from 'vue'
import VDialog from '@/components/modals/VDialog.vue'
import { PhArrowClockwise } from '@phosphor-icons/vue'
import ElementBox from '@/components/boxes/ElementBox.vue'

const isSuccessModalOpen = ref<boolean>(false)
const isSending = ref<boolean>(false)
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
  <div class="mt-6 outline-none px-6 lg:px-0" contenteditable="true">
    <div>
      <ElementBox class="mb-6" tag-type="h1" tag-type-classes="text-3xl font-bold">
        <h1 class="my-0 leading-none">Contact Me</h1>
      </ElementBox>

      <ElementBox class="mb-4 lg:flex" tag-type="p">
        <p>Feel free to reach out to me through any of the following platforms:</p>
      </ElementBox>

      <ElementBox tag-type="ul">
        <ul>
          <li>
            <ElementBox class="lg:flex" tag-type="li">
              Email:
              <div class="inline-block" contenteditable="false">
                <ElementBox class="flex" tag-type="a">
                  <a href="mailto:jfsdunglao@gmail.com">jfsdunglao@gmail.com</a>
                </ElementBox>
              </div>
            </ElementBox>
          </li>
          <li>
            <ElementBox class="lg:flex" tag-type="li">
              LinkedIn:
              <div class="inline-block" contenteditable="false">
                <ElementBox class="lg:flex" tag-type="a">
                  <a href="https://www.linkedin.com/in/jfsdunglao">
                    https://www.linkedin.com/in/jfsdunglao
                  </a>
                </ElementBox>
              </div>
            </ElementBox>
          </li>
          <li>
            <ElementBox class="lg:flex" tag-type="li">
              GitHub:
              <div class="inline-block" contenteditable="false">
                <ElementBox class="lg:flex" tag-type="a">
                  <a href="https://github.com/john-dunglao-dev">
                    https://github.com/john-dunglao-dev
                  </a>
                </ElementBox>
              </div>
            </ElementBox>
          </li>
        </ul>
      </ElementBox>
    </div>

    <ElementBox class="my-4 flex" tag-type="p">
      <p>Or use this form to reach out</p>
    </ElementBox>

    <div class="mb-6">
      <form class="space-y-4" @submit.prevent="sendMessageToAuthor">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ElementBox
              class="flex"
              tag-type="label"
              tag-type-classes="text-sm"
              tag-attribute-text='for="name"'
            >
              <label for="name" class="block text-sm font-medium">Name:</label>
            </ElementBox>
            <input
              v-model="contactForm.name"
              type="text"
              id="name"
              name="name"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <ElementBox
              class="flex"
              tag-type="label"
              tag-type-classes="text-sm"
              tag-attribute-text='for="email"'
            >
              <label for="email" class="block text-sm font-medium">Email:</label>
            </ElementBox>
            <input
              v-model="contactForm.email"
              type="email"
              id="email"
              name="email"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your email address"
              required
            />
          </div>
        </div>

        <div>
          <ElementBox
            class="flex"
            tag-type="label"
            tag-type-classes="text-sm"
            tag-attribute-text='for="subject"'
          >
            <label for="subject" class="block text-sm font-medium">Subject:</label>
          </ElementBox>
          <input
            v-model="contactForm.subject"
            type="text"
            id="subject"
            name="subject"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Subject of your message"
            required
          />
        </div>

        <div>
          <ElementBox
            class="flex"
            tag-type="label"
            tag-type-classes="text-sm"
            tag-attribute-text='for="message"'
          >
            <label for="message" class="block text-sm font-medium">Message:</label>
          </ElementBox>
          <textarea
            v-model="contactForm.message"
            id="message"
            name="message"
            rows="4"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <div>
          <ElementBox tag-type="button" tag-attribute-text='type="submit"'>
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PhArrowClockwise v-if="isSending" class="mr-2 animate-spin inline-block" />
              {{ isSending ? 'Sending...' : 'Send Message' }}
            </button>
          </ElementBox>
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
