<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-2">
    <q-page-container class="bg-grey-2">
      <div class="min-h-screen flex justify-center items-center">
        <div
          class="w-[360px] h-[720px] bg-white rounded-2xl shadow-xl overflow-hidden relative flex flex-col"
        >
          <div class="flex-1 overflow-hidden">
            <router-view />
          </div>

          <!-- BottomNav hanya muncul di main app -->
          <BottomNav
            v-if="
              ['/app', '/quiz', '/leaderboard', '/profile'].some((p) => route.path.startsWith(p))
            "
            v-model="tab"
          />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BottomNav from '../components/navigation/BottomNav.vue'

const route = useRoute()
const router = useRouter()
const tab = ref('home')

// ================= ROUTE → TAB =================
watch(
  () => route.path,
  (path) => {
    if (path.startsWith('/app')) tab.value = 'home'
    else if (path.startsWith('/quiz')) tab.value = 'quiz'
    else if (path.startsWith('/leaderboard')) tab.value = 'leaderboard'
    else if (path.startsWith('/profile')) tab.value = 'profile'
  },
  { immediate: true },
)

// ================= TAB → ROUTE =================
watch(tab, (val) => {
  // 🔥 CEGAH redirect kalau sudah di route yang benar
  if (val === 'home' && !route.path.startsWith('/app')) {
    router.push('/app')
  } else if (val === 'quiz' && route.path !== '/quiz') {
    router.push('/quiz')
  } else if (val === 'leaderboard' && route.path !== '/leaderboard') {
    router.push('/leaderboard')
  } else if (val === 'profile' && route.path !== '/profile') {
    router.push('/profile')
  }
})
</script>
