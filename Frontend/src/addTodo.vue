<script setup lang="ts">
import PreviousButton from './components/previousButton.vue';
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
          <div class="relative">
            <select
              id="category"
              name="category"
              class="appearance-none w-96 px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            >
              <option value="" hidden selected>Select a category</option>
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="study">Study</option>
              <option value="shopping">Shopping</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute right-8 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none"
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
          </div>
          <!-- Task -->
          <input
            type="task"
            id="task"
            name="task"
            placeholder="Enter your task"
            class="w-96 px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
          <!-- Description -->
          <input
            type="description"
            id="description"
            name="description"
            placeholder="Enter your description"
            class="w-96 px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
          <!-- Submit Button -->
          <button type="submit" class="bg-secondary px-16 py-1.5 text-white hover:bg-green-900 transition">
            Add to List
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
