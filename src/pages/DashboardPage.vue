<template>
  <div class="p-3 bg-[#f7f2f2] min-h-screen">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <img src="https://i.pravatar.cc/150?img=32" class="w-12 h-12 rounded-full" />

        <div>
          <p class="text-xs">Welcome</p>
          <p class="text-lg font-semibold leading-none">Halo, Sayang!</p>
        </div>
      </div>

      <div class="bg-[#0d4638] text-white px-3 py-1.5 rounded-xl text-sm font-semibold">100 🟡</div>
    </div>

    <!-- Daily Task Card -->
    <div class="bg-white p-3 rounded-2xl shadow mt-5 flex gap-3">
      <img src="https://picsum.photos/300/200?random=1" class="w-24 h-20 object-cover rounded-xl" />

      <div class="flex-1">
        <h3 class="font-bold text-base">Daily Task</h3>
        <p class="text-gray-500 text-xs">14 Questions</p>

        <div class="w-full bg-gray-200 h-2 rounded-full mt-1.5">
          <div class="h-full bg-[#0d4638] rounded-full" style="width: 60%"></div>
        </div>

        <p class="text-xs mt-1">Progress: 9/14</p>
      </div>
    </div>

    <!-- Menu Buttons -->
    <div class="grid grid-cols-3 gap-3 mt-5">
      <div
        class="bg-[#0d4638] text-white p-4 rounded-2xl text-center font-semibold text-sm active:scale-95"
      >
        Create Quiz
      </div>

      <div
        class="bg-[#8b74ff] text-white p-4 rounded-2xl text-center font-semibold text-sm active:scale-95"
      >
        Solo Mode
      </div>

      <div
        class="bg-[#f0a238] text-white p-4 rounded-2xl text-center font-semibold text-sm active:scale-95"
      >
        Multiplayer
      </div>
    </div>

    <!-- Featured Categories -->
    <div class="flex justify-between items-center mt-6">
      <h2 class="font-semibold text-base">Featured Categories</h2>
      <p class="text-[#0d4638] text-sm font-medium">See All ></p>
    </div>

    <div class="flex gap-3 mt-2 overflow-x-auto no-scrollbar">
      <div class="cat-card">
        <img src="https://img.icons8.com/color/96/basketball.png" class="w-8 mx-auto" />
        <p class="text-center text-xs font-medium mt-1">Sports</p>
      </div>

      <div class="cat-card">
        <img src="https://img.icons8.com/color/96/planet.png" class="w-8 mx-auto" />
        <p class="text-center text-xs font-medium mt-1">Space</p>
      </div>

      <div class="cat-card">
        <img src="https://img.icons8.com/color/96/clapperboard.png" class="w-8 mx-auto" />
        <p class="text-center text-xs font-medium mt-1">Movies</p>
      </div>

      <div class="cat-card">
        <img src="https://img.icons8.com/color/96/musical-notes.png" class="w-8 mx-auto" />
        <p class="text-center text-xs font-medium mt-1">Music</p>
      </div>
    </div>

    <!-- Recent Quiz -->
    <div class="flex justify-between items-center mt-6">
      <h2 class="font-semibold text-base">Recent Quiz</h2>
      <p class="text-[#0d4638] text-sm font-medium">See All ></p>
    </div>

    <div class="flex gap-3 mt-2 overflow-x-auto pb-3 no-scrollbar">
      <div class="quiz-card">
        <img
          src="https://picsum.photos/300/200?random=2"
          class="w-full h-24 object-cover rounded-t-xl"
        />

        <div class="p-2">
          <p class="font-semibold text-sm">Sport Quiz</p>
          <p class="text-gray-600 text-xs">20 Questions</p>
        </div>
      </div>

      <div class="quiz-card">
        <img
          src="https://picsum.photos/300/200?random=3"
          class="w-full h-24 object-cover rounded-t-xl"
        />

        <div class="p-2">
          <p class="font-semibold text-sm">Movies Quiz</p>
          <p class="text-gray-600 text-xs">20 Questions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
}
</script>

<style scoped>
.cat-card {
  background: white;
  padding: 10px;
  border-radius: 15px;
  min-width: 70px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.quiz-card {
  background: white;
  min-width: 150px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

/* Hilangkan scrollbar di HP */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
