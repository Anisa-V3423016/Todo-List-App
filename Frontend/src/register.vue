<script lang="ts" setup>
import PreviousButton from './components/previousButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const goToLogin = () => {
  router.push('/login')  
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-primary">
        <PreviousButton class="absolute top-0 left-0 ml-6 mt-5"/>
        <div class="w-full max-w-md p-5 space-y-3 text-center">
            <h1 class="font-semibold text-xl">Welcome Onboard!</h1>
            <p class="text-sm text-secondary mt-3 mb-15">Let's help you meet up your task</p>
            <div class="w-full max-w-md">
                <form action="#" class="space-y-6"> 
                    <!-- Full Name -->
                    <input type="name" id="name" name="name" placeholder="Enter your full name" class="md:w-96 w-80 px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" required>
                    <!-- Email -->
                    <input type="email" id="email" name="email" placeholder="Enter your email address" class="md:w-96 w-80 px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" required>
                    <!-- Create Password -->
                    <input type="password" id="password" name="password" placeholder="Create a password" class="md:w-96 w-80 px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" required>
                    <!-- Confirm Password -->
                    <input type="password" id="password" name="password" placeholder="Confirm your password" class="md:w-96 w-80 px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" required>
                    <!-- Submit Button -->
                    <button @click="goToLogin" type="submit" class="bg-secondary md:px-16 px-10 py-1.5 mt-10 text-white hover:bg-green-900 transition">Sign Up</button>
                </form>
                <p class="text-sm mt-8">Already have an account? 
                    <button @click="goToLogin" type="button" class="text-secondary font-bold">Sign In</button>
                </p>
            </div>
        </div>
    </div>
</template>