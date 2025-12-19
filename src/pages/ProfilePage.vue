<template>
  <!-- CENTER SCREEN -->
  <q-page style="display: flex; justify-content: center; background: #ffffff; min-height: 80vh">
    <!-- PHONE FRAME -->
    <div
      style="
        width: 390px;
        height: 780px;
        background: #f2f2f2;
        border-radius: 32px;
        overflow-y: auto;
        align-items: center;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
      "
    >
      <!-- ISI PROFILE -->
      <q-page class="bg-grey-2 q-pa-md">
        <!-- Header -->
        <div class="row items-center justify-between q-mb-lg">
          <div class="text-h6 text-weight-medium">Profile</div>
          <q-icon name="search" size="24px" />
        </div>

        <!-- Avatar -->
        <div class="column items-center q-mb-lg">
          <q-avatar size="90px" class="q-mb-sm">
            <img src="https://i.pravatar.cc/150?img=12" />
          </q-avatar>
          <div class="text-h6 text-weight-bold">Michale Dias</div>
        </div>

        <!-- Stats Card -->
        <q-card flat class="bg-primary text-white q-pa-md q-mb-lg rounded-borders">
          <div class="row text-center">
            <div class="col">
              <q-icon name="star" size="20px" />
              <div class="text-subtitle1 text-weight-bold">590</div>
              <div class="text-caption">Points</div>
            </div>
            <div class="col">
              <q-icon name="public" size="20px" />
              <div class="text-subtitle1 text-weight-bold">#1.438</div>
              <div class="text-caption">World Rank</div>
            </div>
            <div class="col">
              <q-icon name="place" size="20px" />
              <div class="text-subtitle1 text-weight-bold">#56</div>
              <div class="text-caption">Local Rank</div>
            </div>
          </div>
        </q-card>

        <!-- Tabs -->
        <q-btn-toggle
          v-model="tab"
          spread
          rounded
          unelevated
          class="q-mb-lg"
          toggle-color="primary"
          color="grey-4"
          text-color="dark"
          :options="[
            { label: 'Badge', value: 'badge' },
            { label: 'Stats', value: 'stats' },
            { label: 'Details', value: 'details' },
          ]"
        />

        <!-- BADGES -->
        <div v-if="tab === 'badge'" class="row q-col-gutter-md">
          <div class="col-4" v-for="(badge, i) in badges" :key="i">
            <q-card flat class="flex flex-center badge-card" :style="{ background: badge.color }">
              <q-icon :name="badge.icon" size="28px" />
            </q-card>
          </div>
        </div>

        <!-- STATS -->
        <div v-if="tab === 'stats'" class="text-center q-mt-lg">
          <div class="text-subtitle1">Stats Content</div>
          <div class="text-caption text-grey">Statistik pengguna akan ditampilkan di sini</div>
        </div>

        <!-- DETAILS -->
        <div v-if="tab === 'details'" class="text-center q-mt-lg">
          <div class="text-subtitle1">User Details</div>
          <div class="text-caption text-grey">Informasi detail pengguna</div>
        </div>
      </q-page>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ProfilePage',

  data() {
    return {
      tab: 'badge',

      badges: [
        { icon: 'emoji_events', color: '#FFD54F' },
        { icon: 'star', color: '#4FC3F7' },
        { icon: 'verified', color: '#81C784' },
        { icon: 'military_tech', color: '#BA68C8' },
        { icon: 'workspace_premium', color: '#FF8A65' },
        { icon: 'diamond', color: '#4DB6AC' },
      ],
    }
  },
}
</script>

<style scoped>
.badge-card {
  height: 80px;
  border-radius: 16px;
}

.floating-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
