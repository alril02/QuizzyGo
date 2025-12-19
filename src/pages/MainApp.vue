<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-2">
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>

    <!-- Bottom Navigation -->
    <BottomNav @add-click="handleAddClick" />
  </q-layout>
</template>

<script setup>
import { QPageContainer, QLayout } from 'quasar'
import BottomNav from '../components/navigation/BottomNav.vue'

function handleAddClick() {
  alert('FAB clicked!')
}
</script>
