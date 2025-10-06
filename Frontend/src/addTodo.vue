<script setup lang="ts">
import PreviousButton from "./components/previousButton.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const API_URL = "http://localhost:3000/tasks";

const categories = ref<{ id: number; name: string }[]>([]);
const selected = ref("Select a category");
const selectedCategoryId = ref<number | null>(null);
const customCategory = ref("");
const isOpen = ref(false);
const showCustomInput = ref(false);

const task = ref("");

const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    categories.value = response.data;
  } catch (err) {
    console.error("Failed:", err);
  }
};

const selectCategory = (category: string | number) => {
  const found = categories.value.find((c) => c.name === category);
  if (category === "Add Category") {
    showCustomInput.value = true;
    customCategory.value = "";
    selected.value = "Add Category";
    selectedCategoryId.value = null;
  } else if (found) {
    selected.value = found.name;
    selectedCategoryId.value = found.id;
    showCustomInput.value = false;
  } else {
    selected.value = category as string;
  }
  isOpen.value = false;
};

const handleAddCategory = async () => {
  if (!customCategory.value) return;
  try {
    const response = await axios.post(`${API_URL}/tasks/categories`, {
      name: customCategory.value,
    });
    // Setelah tambah, ambil ulang kategori
    await fetchCategories();
    const newCat = categories.value.find(
      (c) => c.name === customCategory.value
    );
    if (newCat) {
      selected.value = newCat.name;
      selectedCategoryId.value = newCat.id;
    }
    customCategory.value = "";
    showCustomInput.value = false;
  } catch (err) {
    console.error("Failed:", err);
  }
};

const handleAddTask = async (e: Event) => {
  e.preventDefault();
  if (!task.value) {
    alert("Fill in all fields first!");
    return;
  }

  try {
    await axios.post(API_URL, {
      task: task.value,
      categoryId: selectedCategoryId.value,
    });

    task.value = "";
    selected.value = "Select a category";
    selectedCategoryId.value = null;


    // redirect ke dashboard
    router.push("/dashboard");
  } catch (err) {
    console.error("Failed:", err);
    alert("Failed to add task.");
  }
};

// ambil kategori saat komponen dimuat
onMounted(fetchCategories);
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-primary">
    <PreviousButton class="absolute top-0 left-0 ml-6 mt-5" />
    <div class="w-full max-w-md p-2 space-y-3 text-center">
      <h1 class="font-semibold text-xl">Welcome Onboard!</h1>
      <img
        src="/public/images/addtodo_image.png"
        alt="Login Image"
        class="mx-auto mb-4 mt-5 w-48 h-56"
      />
      <p class="text-secondary">Add what your want to do later on.</p>
      <div class="w-full max-w-md">
        <form @submit="handleAddTask" class="space-y-6">
          <!-- Category -->
          <div class="relative flex items-center justify-center">
            <button
              type="button"
              @click="isOpen = !isOpen"
              class="appearance-none w-80 md:w-96 flex justify-between items-center px-4 py-2.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <span
                class="text-base"
                :class="
                  selected === 'Select a category'
                    ? 'text-gray-500'
                    : 'text-black'
                "
                >{{ selected }}</span
              >
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

            <!-- Dropdown List -->
            <ul
              v-if="isOpen"
              class="absolute z-10 md:mt-62 mt-52 w-80 md:w-96 bg-white rounded-lg shadow-lg max-h-48 overflow-auto"
            >
              <li
                v-for="category in categories"
                :key="category.id"
                @click="selectCategory(category.name)"
                class="px-4 py-2 text-base hover:bg-gray-100 cursor-pointer"
              >
                {{ category.name }}
              </li>
              <li
                @click="selectCategory('Add Category')"
                class="px-4 py-2 text-base text-gray-500 hover:bg-gray-100 cursor-pointer"
              >
                + Add Category
              </li>
            </ul>
          </div>

          <!-- Input Custom Category -->
          <div v-if="showCustomInput" class="mt-2">
            <input
              type="text"
              v-model="customCategory"
              placeholder="Enter your category"
              class="md:w-96 w-80 px-4 py-2 mb-4 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="button"
              @click="handleAddCategory"
              class="bg-secondary text-white px-5 py-1.5 hover:bg-green-900"
            >
              Save
            </button>
          </div>
          <!-- Task -->
          <input
            v-model="task"
            type="task"
            id="task"
            name="task"
            placeholder="Enter your task"
            class="md:w-96 w-80 px-4 py-2 mb-4 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
          <!-- Submit Button -->
          <button
            type="submit"
            class="bg-secondary px-10 py-1.5 text-white hover:bg-green-900 transition"
          >
            Add to List
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
