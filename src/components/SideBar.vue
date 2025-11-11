<template>
  <aside class="h-screen w-32 border border-gray-400 p-2">
    <h2 class="mt-2 text-center text-[20px] font-bold">Trinita</h2>

    <ul
      class="mt-4 [&_li]:cursor-pointer [&_li]:rounded-lg [&_li]:px-2 [&_li]:py-1 [&_li:hover]:bg-teal-600 [&_li:hover]:text-white">
      <li class="bg-teal-800 text-white" @click="goToPage('/')">Dashboard</li>
      <li @click="goToPage('/squad')">Squad</li>
      <li @click="goToPage('/messager')">Messager</li>
      <li @click="goToPage('/statistic')">Statistic</li>
      <li @click="goToPage('/calendar')">Calendar</li>
      <li @click="goToPage('/finance')">Finance</li>
    </ul>
  </aside>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()


function goToPage(page) {
  router.push({ path: page })
}
</script>
<style scoped></style>
