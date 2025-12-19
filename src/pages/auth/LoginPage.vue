<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-200 via-teal-100 to-green-200"
  >
    <div
      class="w-[350px] h-[680px] bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl overflow-hidden"
    >
      <!-- HEADER -->
      <div
        class="bg-gradient-to-br from-teal-700 to-teal-500 h-[200px] rounded-b-[45px] px-6 pt-10 text-white"
      >
        <h1 class="text-4xl font-extrabold">Hello!</h1>
        <p class="text-sm opacity-90 mt-1">Welcome to QuizzyGo</p>
      </div>

      <!-- FORM -->
      <div class="px-6 -mt-16">
        <div class="bg-white rounded-3xl shadow-xl p-6">
          <h2 class="text-2xl font-semibold text-teal-700 mb-4">Login</h2>

          <!-- EMAIL -->
          <div class="mb-4">
            <input
              v-model="email"
              type="email"
              placeholder="Email"
              class="w-full pl-3 py-3 rounded-xl border"
            />
          </div>

          <!-- PASSWORD -->
          <div class="mb-3">
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="w-full pl-3 py-3 rounded-xl border"
            />
          </div>

          <!-- Social Login -->
          <div class="flex justify-center gap-4 mt-2">
            <!-- Facebook -->
            <div
              class="w-11 h-11 flex items-center justify-center bg-white/80 backdrop-blur-xl rounded-full shadow hover:scale-110 transition cursor-pointer border border-gray-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                <path
                  d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H8.1v-2.9h2.34V9.85c0-2.33 1.4-3.62 3.53-3.62 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.75h2.58l-.41 2.9h-2.17V22c4.78-.75 8.44-4.91 8.44-9.93z"
                />
              </svg>
            </div>

            <!-- Google -->
            <div
              class="w-11 h-11 flex items-center justify-center bg-white/80 backdrop-blur-xl rounded-full shadow hover:scale-110 transition cursor-pointer border border-gray-200"
            >
              <svg width="20" height="20" viewBox="0 0 533.5 544.3">
                <path
                  fill="#4285F4"
                  d="M533.5 278.4c0-17.4-1.5-34.1-4.3-50.3H272v95h147.5c-6.4 34.5-25.6 63.7-54.7 83l88.4 68.7c51.5-47.5 80.3-117.4 80.3-196.4z"
                />
                <path
                  fill="#34A853"
                  d="M272 544.3c73.7 0 135.5-24.4 180.6-66.2l-88.4-68.7c-24.5 16.4-55.9 26-92.2 26-71 0-131-47.9-152.4-112.3l-92.8 71.5c41.5 82.1 127 149.7 245.2 149.7z"
                />
                <path
                  fill="#FBBC05"
                  d="M119.6 323.1c-10.2-30.5-10.2-63.8 0-94.3L26.8 157.3C-9 229.4-9 314.9 26.8 387l92.8-63.9z"
                />
                <path
                  fill="#EA4335"
                  d="M272 107.7c39.9-.6 78.7 14.7 108.3 42.6l81.3-81.3C405.5 20.4 345.7-0.1 272 0 153.8 0 68.3 67.7 26.8 149.8l92.8 71.5C141 155.1 201 107.7 272 107.7z"
                />
              </svg>
            </div>

            <!-- Apple -->
            <div
              class="w-11 h-11 flex items-center justify-center bg-white/80 backdrop-blur-xl rounded-full shadow hover:scale-110 transition cursor-pointer border border-gray-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
                <path
                  d="M16.365 1.43c0 1.14-.42 2.07-1.26 2.88-.84.81-1.85 1.28-2.99 1.2-.02-1.06.45-2.04 1.26-2.83.81-.78 1.88-1.28 2.99-1.25zm4.93 16.14c-.36.84-.78 1.68-1.35 2.46-.72 1.02-1.32 1.74-1.83 2.22-.72.67-1.5 1.01-2.31 1-.57 0-1.26-.16-2.1-.51-.84-.34-1.61-.51-2.32-.51-.75 0-1.55.17-2.39.51-.84.35-1.51.54-2.01.54-.78.03-1.59-.31-2.34-1-.52-.49-1.15-1.24-1.86-2.25-.8-1.16-1.45-2.51-1.93-4.03-.54-1.68-.81-3.3-.81-4.86 0-1.79.39-3.34 1.18-4.63.62-1.06 1.45-1.9 2.49-2.51 1.04-.61 2.17-.93 3.36-.95.66 0 1.52.17 2.57.51 1.05.34 1.72.51 2.01.51.22 0 .93-.22 2.09-.65 1.12-.4 2.06-.57 2.82-.51 2.09.17 3.65 1 4.67 2.49-1.85 1.12-2.77 2.69-2.77 4.7 0 1.57.6 2.87 1.83 3.9.54.45 1.14.79 1.83 1.03-.15.45-.33.93-.54 1.44z"
                />
              </svg>
            </div>
          </div>

          <!-- LOGIN BUTTON -->
          <button
            @click="handleLogin"
            class="w-full py-3 mt-6 bg-teal-600 hover:bg-teal-700 text-white rounded-full"
          >
            Login
          </button>

          <p class="text-center mt-4 text-sm">
            Don’t have an account?
            <span
              class="text-teal-600 cursor-pointer font-semibold"
              @click="router.push('/register')"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

function handleLogin() {
  if (!email.value || !password.value) {
    alert('Email & password wajib diisi')
    return
  }

  localStorage.setItem('isLoggedIn', 'true')
  localStorage.setItem('hasSeenWelcome', 'false')

  router.replace('/welcome')
}
</script>
