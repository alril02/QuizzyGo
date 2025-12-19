<template>
  <div class="min-h-screen bg-green-100 flex flex-col items-center p-4">
    <!-- Header -->
    <div class="w-full max-w-[360px] mb-6 text-center">
      <h1 class="text-2xl font-bold text-teal-700 mb-1">Leaderboard</h1>
      <p class="text-gray-500 text-sm">Check out the top players!</p>
    </div>

    <!-- Filter -->
    <div class="w-full max-w-[360px] flex justify-around mb-4">
      <q-btn
        v-for="filter in filters"
        :key="filter"
        rounded
        size="sm"
        :label="filter"
        :color="activeFilter === filter ? 'teal' : 'grey-4'"
        :text-color="activeFilter === filter ? 'white' : 'black'"
        @click="setActiveFilter(filter)"
      />
    </div>

    <!-- Leaderboard List -->
    <div class="w-full max-w-[360px] bg-white rounded-2xl shadow-xl p-4">
      <q-list separator bordered>
        <q-item
          v-for="user in sortedUsers"
          :key="user.rank"
          clickable
          class="hover:bg-teal-50 transition-colors rounded-xl my-1"
        >
          <q-item-section avatar>
            <q-avatar
              :color="getAvatarColor(user.rank)"
              text-color="white"
              class="text-lg font-bold"
            >
              {{ user.rank }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="font-semibold">{{ user.name }}</q-item-label>
            <q-item-label caption>{{ user.score }} pts</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-badge v-if="user.rank <= 3" :color="getBadgeColor(user.rank)" align="top right">
              🏆
            </q-badge>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const filters = ['Today', 'Weekly', 'All time']
const activeFilter = ref('Today')

const users = ref([
  { rank: 1, name: 'Andi', score: 120 },
  { rank: 2, name: 'Budi', score: 110 },
  { rank: 3, name: 'Citra', score: 100 },
  { rank: 4, name: 'Dewi', score: 95 },
  { rank: 5, name: 'Eka', score: 80 },
])

const setActiveFilter = (filter) => {
  activeFilter.value = filter
}

const sortedUsers = computed(() => {
  // Buat salinan array agar tidak ada side effect
  return users.value.slice().sort((a, b) => b.score - a.score)
})

const getAvatarColor = (rank) => {
  if (rank === 1) return 'yellow-7'
  if (rank === 2) return 'pink-6'
  if (rank === 3) return 'orange-7'
  return 'teal'
}

const getBadgeColor = (rank) => {
  if (rank === 1) return 'yellow-7'
  if (rank === 2) return 'pink-6'
  if (rank === 3) return 'orange-7'
}
</script>

<style scoped>
/* Optional: animasi ringan */
.q-item {
  transition: transform 0.2s;
}
.q-item:hover {
  transform: scale(1.02);
}
</style>
