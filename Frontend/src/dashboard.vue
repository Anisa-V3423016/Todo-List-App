<script setup lang="ts">
import AddButton from "./components/addButton.vue";
import { ref, onMounted, computed } from "vue";
import axios from "axios";

const name = ref("");
const tasks = ref<any[]>([]);
const groupedTasks = computed(() => {
  const groups: Record<string, any[]> = {};
  tasks.value.forEach((task) => {
    const category = task.category?.name || "Uncategorized";
    if (!groups[category]) groups[category] = [];
    groups[category].push(task);
  });
  return groups;
});

// Ambil data dari backend saat komponen dimuat
onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:3000/tasks");
    tasks.value = res.data;
  } catch (error) {
    console.error("Failed:", error);
  }

  const userData = localStorage.getItem("user");
  if (userData) {
    const user = JSON.parse(userData);
    name.value = user.name;
  }
});
</script>

<template>
  <div class="min-h-screen bg-primary">
    <div class="relative bg-secondary md:h-48 h-52 w-full clip-diagonal">
      <div class="flex flex-col items-center justify-center h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 20 20"
          height="80px"
          viewBox="0 0 20 20"
          width="80px"
          fill="#00000"
        >
          <g><rect fill="none" height="20" width="20" /></g>
          <g>
            <g>
              <path
                d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 3.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 11c-2.05 0-3.87-.95-5.07-2.44 1.45-.98 3.19-1.56 5.07-1.56s3.62.58 5.07 1.56c-1.2 1.49-3.02 2.44-5.07 2.44z"
              />
            </g>
          </g>
        </svg>
        <h2 class="text-xl font-bold text-black">Welcome {{ name }}</h2>
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
        <!-- Loop kategori -->
        <div
          v-for="(taskList, category) in groupedTasks"
          :key="category"
          class="rounded-xl shadow-md p-4 bg-white"
        >
          <div class="flex justify-between items-center mb-3">
            <h3 class="font-semibold text-gray-500">{{ category }}</h3>
            <AddButton />
          </div>

          <!-- List task -->
          <ul class="space-y-2">
            <li
              v-for="task in taskList"
              :key="task.id"
              class="flex items-center gap-2"
            >
              <input
                type="checkbox"
                class="custom-checkbox"
                :checked="task.isDone"
              />
              <span class="truncate w-56">{{ task.task }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
