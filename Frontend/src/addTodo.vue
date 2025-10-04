<script setup lang="ts">
import PreviousButton from './components/previousButton.vue';
import { ref } from 'vue';

const categories = ['Work', 'Personal', 'Study', 'Shopping', 'Add Category']
const selected = ref('Select a category')
const customCategory = ref('')
const isOpen = ref(false)
const showCustomInput = ref(false)

const selectCategory = (category: string) => {
  selected.value = category
  isOpen.value = false

  if (category === 'Add Category') {
    showCustomInput.value = true
    customCategory.value = ''
  } else {
    showCustomInput.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-primary">
    <PreviousButton class="absolute top-0 left-0 ml-6 mt-5"/>
    <div class="w-full max-w-md p-2 space-y-3 text-center">
      <h1 class="font-semibold text-xl">Welcome Onboard!</h1>
      <img
        src="/public/images/addtodo_image.png"
        alt="Login Image"
        class="mx-auto mb-4 mt-5 w-48 h-56"
      />
      <p class="text-secondary">Add what your want to do later on.</p>
      <div class="w-full max-w-md">
        <form action="#" class="space-y-6">
          <!-- Category -->
          <div class="relative flex items-center justify-center">
            <button
              type="button"
              @click="isOpen = !isOpen"
              class="appearance-none w-80 md:w-96 flex justify-between items-center px-4 py-2.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <span class="text-base" :class="selected === 'Select a category' ? 'text-gray-500' : 'text-black'">{{ selected }}</span>
              <svg
                class="w-4 h-4 ml-2 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              v-if="isOpen"
              class="absolute z-10 md:mt-48 mt-52 w-80 md:w-96 bg-white rounded-lg shadow-lg max-h-48 overflow-auto"
            >
              <li
                v-for="category in categories"
                :key="category"
                @click="selectCategory(category)"
                class="px-4 py-2 text-base hover:bg-gray-100 cursor-pointer"
              >
                {{ category }}
              </li>
            </div>
          </div>

          <div v-if="showCustomInput" class="mt-2">
            <input
              type="text"
              v-model="customCategory"
              placeholder="Enter your category"
              class="md:w-96 w-80 px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <!-- Task -->
          <input
            type="task"
            id="task"
            name="task"
            placeholder="Enter your task"
            class="md:w-96 w-80 px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
          <!-- Description -->
          <input
            type="description"
            id="description"
            name="description"
            placeholder="Enter your description"
            class="md:w-96 w-80 px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
          <!-- Submit Button -->
          <button type="submit" class="bg-secondary md:px-16 px-10 py-1.5 text-white hover:bg-green-900 transition">
            Add to List
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
