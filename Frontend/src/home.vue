<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLogin = () => {
  router.push('/login')  
}
</script>

<template>
  <div class="min-h-screen bg-primary">
    <div class="max-w-3xl mx-auto font-poppins p-11 md:pt-14 sm:pt-14 pt-48">
      <div class="flex justify-center">
        <img
          src="/public/images/home_image.png"
          alt="Home Image"
          class="w-full max-w-md"
        />
      </div>
      <h1 class="text-xl font-semibold mb-5 text-center">
        Get things done with TO-DO
      </h1>
      <p
        class="text-xs text-center font-normal mx-auto mb-6 text-gray-700 max-w-xs"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing. Maxime, tempore!
        Animi nemo aut atque, deleniti nihil dolorem repellendus.
      </p>
      <div class="mt-4 flex justify-center">
        <button
          @click="goToLogin"
          class="bg-secondary text-white text-sm font-medium px-6 py-2 hover:bg-green-900 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>
