<script lang="ts" setup>
import PreviousButton from './components/previousButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const goToDashboard = () => {
  router.push('/dashboard')  
}

const goToRegister = () => {
  router.push('/register')  
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-primary">
        <PreviousButton class="absolute top-0 left-0 ml-6 mt-5"/>
        <div class="w-full max-w-md p-5 space-y-3 text-center">
            <h1 class="font-semibold text-xl">Welcome Back!</h1>
            <img src="/public/images/login_image.png" alt="Login Image" class="mx-auto mb-4 mt-5 w-56 h-56">
            <div class="w-full max-w-md">
                <form action="#" class="space-y-6"> 
                    <!-- Email -->
                    <input type="email" id="email" name="email" placeholder="Enter your email address" class="md:w-96 w-80 px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" required>
                    <!-- Password -->
                    <input type="password" id="password" name="password" placeholder="Confirm password" class="md:w-96 w-80 px-4 py-2 mb-4 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" required>
                    <!-- Forgot Password Button -->
                    <button type="submit" class="px-16 py-1.5 text-secondary font-medium mb-3">Forgot password?</button>
                    <!-- Submit Button -->
                    <button @click="goToDashboard" type="submit" class="bg-secondary md:px-16 px-10 py-1.5 text-white hover:bg-green-900 transition">Login</button>
                </form>
                <p class="text-sm mt-8">Don't have an account? 
                    <button @click="goToRegister" type="button" class="text-secondary font-bold">Sign Up</button>
                </p>
            </div>
        </div>
    </div>
</template>