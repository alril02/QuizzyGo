<template>
  <q-layout class="flex bg-gradient-to-br from-blue-500/50 to-amber-500/20 border border-gray-500">
    <!-- Sidebar -->
    <SideBar />
    <!-- Content -->
    <div class="flex-1" id="content">
      <!-- Header -->
      <header class="flex justify-between p-1">
        <div class="text-xs text-teal-700">Welcome Home</div>
        <div class="flex items-center gap-1">
          <button class="size-6 bg-amber-700 rounded-full"></button>
          <button class="size-6 bg-amber-700 rounded-full"></button>
          <div class="flex gap-2">
            <button class="size-6 bg-amber-700 rounded-full"></button>
            <span class="font-bold text-sm">Ferren</span>
          </div>
        </div>
      </header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>

</template>
<script setup>
import SideBar from 'src/components/SideBar.vue'


</script>
