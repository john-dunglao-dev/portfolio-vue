<script setup lang="ts"></script>

<template>
  <div class="mt-6">
    <div>
      <h1 class="text-3xl">Contact Me</h1>
      <p class="mb-4">Feel free to reach out to me through any of the following platforms:</p>

      <ul>
        <li>
          Email:
          <a href="mailto:john.doe@example.com">john.doe@example.com</a>
        </li>
        <li>
          LinkedIn:
          <a href="https://www.linkedin.com/in/johndoe">https://www.linkedin.com/in/johndoe</a>
        </li>
        <li>
          GitHub:
          <a href="https://github.com/johndoe">https://github.com/johndoe</a>
        </li>
      </ul>
    </div>

    <p class="my-4">Or use this form to reach out</p>

    <div>
      <form class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="name" class="block text-sm font-medium">Name</label>
            <input
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
              type="email"
              id="email"
              name="email"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label for="message" class="block text-sm font-medium">Message</label>
          <textarea
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
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
