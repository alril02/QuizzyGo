<template>
  <div class="nav-container">
    <!-- SVG lengkungan -->
    <svg class="nav-svg" viewBox="0 0 400 60" preserveAspectRatio="none">
      <path
        d="M0,0 L140,0 C170,0 190,35 200,35 C210,35 230,0 260,0 L400,0 L400,60 L0,60 Z"
        fill="white"
      />
    </svg>

    <!-- Nav items -->
    <div class="nav-content">
      <button v-for="item in navItems" :key="item.tab" @click="selectTab(item)" class="nav-item">
        <span :class="currentTab === item.tab ? 'active-icon' : 'inactive-icon'">
          {{ item.icon }}
        </span>
      </button>
    </div>

    <!-- FAB tengah (+) -->
    <div class="fab-button" @click="goCreateQuiz">+</div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const currentTab = ref('home')

const navItems = [
  { tab: 'home', icon: '🏠', path: '/app' },
  { tab: 'quiz', icon: '🧠', path: '/quiz' },
  { tab: 'leaderboard', icon: '📊', path: '/leaderboard' },
  { tab: 'profile', icon: '👤', path: '/profile' },
]

// klik nav biasa
function selectTab(item) {
  currentTab.value = item.tab
  router.push(item.path)
}

// 🔥 INI YANG KAMU BUTUHKAN
function goCreateQuiz() {
  router.push('/create-quiz')
}

// sinkron route → tab (biar aktifnya bener)
watch(
  () => route.path,
  (path) => {
    if (path.startsWith('/app')) currentTab.value = 'home'
    else if (path.startsWith('/quiz')) currentTab.value = 'quiz'
    else if (path.startsWith('/leaderboard')) currentTab.value = 'leaderboard'
    else if (path.startsWith('/profile')) currentTab.value = 'profile'
  },
  { immediate: true },
)
</script>

<style scoped>
.nav-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 50;
}

.nav-svg {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90%;
  filter: drop-shadow(0 -5px 6px rgba(0, 0, 0, 0.05));
  z-index: 1;
}

.nav-content {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  z-index: 2;
}

.nav-item {
  flex: 1;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
}

.inactive-icon {
  filter: grayscale(100%);
  color: #9ca3af;
}

.active-icon {
  color: #047857;
  transform: scale(1.3);
}

/* FAB tengah */
.fab-button {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 55px;
  height: 55px;
  background-color: #16a34a;
  border: 4px solid #ffffff;
  border-radius: 50%;
  color: white;
  font-size: 30px;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
