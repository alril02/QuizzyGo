<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-teal-100 to-white-100 p-4"
  >
    <!-- Logo / Image -->
    <img src="/icons/welcome.png" class="w-3/4 max-w-xs mb-6" alt="Welcome" />

    <!-- Text -->
    <h2 class="text-2xl sm:text-3xl font-bold text-center mb-2">Welcome to QuizzyGo!</h2>
    <p class="text-gray-600 text-center text-sm sm:text-base mb-6 px-5">
      Play, Learn, and Explore Quizzes!
    </p>

    <!-- Button -->
    <button
      @click="goToApp"
      class="w-full max-w-xs py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full shadow-md transition-colors"
    >
      Get Started
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goToApp() {
  router.replace('/app')
}
</script>

<style scoped>
/* Optional: tambahkan animasi masuk */
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.05);
}
button:active {
  transform: scale(0.97);
}
</style>
