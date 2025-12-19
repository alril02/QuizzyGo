<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-200 via-teal-100 to-green-200"
  >
    <div
      class="w-[350px] h-[680px] bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl overflow-hidden relative"
    >
      <div class="px-6 mt-20">
        <div class="bg-white/80 rounded-3xl shadow-xl p-6">
          <div
            class="text-sm text-teal-600 mb-2 cursor-pointer hover:underline"
            @click="router.push('/auth/login')"
          >
            ← Back to Login
          </div>

          <h2 class="text-2xl font-semibold text-teal-700 mb-4">Sign Up</h2>

          <div class="relative mb-3">
            <span class="absolute left-3 top-3 text-gray-400 opacity-90 text-lg">✉️</span>
            <input
              v-model="email"
              type="email"
              placeholder="Email"
              class="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100/70"
            />
          </div>

          <div class="relative mb-3">
            <span class="absolute left-3 top-3 text-gray-400 opacity-90 text-lg">🔒</span>
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100/70"
            />
          </div>

          <div class="relative mb-3">
            <span class="absolute left-3 top-3 text-gray-400 opacity-90 text-lg">🔐</span>
            <input
              v-model="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              class="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100/70"
            />
          </div>

          <div class="relative mb-3">
            <span class="absolute left-3 top-3 text-gray-400 opacity-90 text-lg">📞</span>
            <input
              v-model="phone"
              type="tel"
              placeholder="Phone"
              class="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100/70"
            />
          </div>

          <button
            @click="handleRegister"
            class="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold"
          >
            Sign Up
          </button>
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
const confirmPassword = ref('')
const phone = ref('')

function handleRegister() {
  if (!email.value || !password.value || !confirmPassword.value || !phone.value) {
    alert('Semua field harus diisi!')
    return
  }
  if (password.value !== confirmPassword.value) {
    alert('Password dan konfirmasi password tidak cocok!')
    return
  }

  localStorage.setItem('token', 'logged-in')
  localStorage.setItem('hasSeenWelcome', 'false')
  router.replace('/welcome')
}
</script>
