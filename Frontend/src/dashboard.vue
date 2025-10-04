<script setup lang="ts">
import AddButton from './components/addButton.vue';
</script>

<template>
  <div class="min-h-screen bg-primary">
    <div class="relative bg-secondary md:h-48 h-52 w-full clip-diagonal">
      <div class="flex flex-col items-center justify-center h-full">
        <img
          src="/public/images/profil_image.png"
          class="w-20 h-20 rounded-full"
          alt="avatar"
        />
        <h2 class="text-xl font-bold text-black mt-2">Welcome Fisayomi</h2>
      </div>
    </div>
    <div class="absolute inset-0 m-auto mt-44 w-56 h-56">
      <img src="/public/images/dashboard_image.png" alt="Dashboard Image" />
    </div>
    <div class="mt-56 md:px-0 px-4">
      <h3 class="text-lg font-semibold text-left ml-5">Todo Tasks.</h3>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 text-sm"
      >
        <!-- Work -->
        <div class="rounded-xl shadow-md p-4 bg-white">
          <div class="flex justify-between items-center mb-3">
            <h3 class="font-semibold text-gray-500">Work</h3>
            <AddButton />
          </div>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <input type="checkbox" class="custom-checkbox" />
              <span class="truncate w-56"
                >Follow OluwatsayomiDev on Twitter</span
              >
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="custom-checkbox" />
              <span class="truncate w-56">Learn Figma by 4pm</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="custom-checkbox" />
              <span class="truncate w-56">Coding at 8am</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="custom-checkbox" />
              <span class="truncate w-56">Watch Mr Beasts Videos</span>
            </li>
          </ul>
        </div>
        <!-- Personal -->
        <div class="bg-white rounded-xl shadow-md p-4">
          <div class="flex justify-between items-center mb-3">
            <h3 class="font-semibold text-gray-500">Personal</h3>
            <AddButton /> 
          </div>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <input type="checkbox" class="custom-checkbox" />
              <span class="truncate w-56">Workout at 7am</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="custom-checkbox" />
              <span class="truncate w-56">Call family</span>
            </li>
          </ul>
        </div>
        <!-- Study -->
        <div class="bg-white rounded-xl shadow-md p-4">
          <div class="flex justify-between items-center mb-3">
            <h3 class="font-semibold text-gray-500">Study</h3>
            <AddButton />
          </div>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <input type="checkbox" class="custom-checkbox" />
              <span class="truncate w-56">Read React Docs</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="custom-checkbox" />
              <span class="truncate w-56">Watch tutorial</span>
            </li>
          </ul>
        </div>
        <!-- Shopping -->
        <div class="bg-white rounded-xl shadow-md p-4">
          <div class="flex justify-between items-center mb-3">
            <h3 class="font-semibold text-gray-500">Shopping</h3>
            <AddButton />
          </div>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <input type="checkbox" class="custom-checkbox" />
              <span class="truncate w-56">Buy milk</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="custom-checkbox"/>
              <span class="truncate w-56">Buy bread</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
