<template>
  <main class="p-2">
    <h2 class="text-3xl font-semibold mb-4">Dashboard</h2>

    <!-- Row 1: Next Game + Game Stats -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <!-- Next Game -->
      <div class="w-full bg-white/80 border border-gray-300 rounded-xl shadow-xl p-3">
        <h3 class="font-bold text-lg">Next Game</h3>
        <p class="text-sm text-gray-500">Serie A • 21:00, 11 Nov 2020</p>
        <div class="flex justify-between items-center mt-2">
          <span class="font-bold">Juventus</span>
          <span class="text-red-500">VS</span>
          <span class="font-bold">Sassuolo</span>
        </div>
      </div>

      <!-- Game Statistics -->
      <div class="w-full bg-white/80 border border-gray-300 rounded-xl shadow-xl p-3">
        <h3 class="font-bold text-lg">Game Statistics</h3>
        <div class="flex justify-between mt-2 text-sm">
          <div>Played: <span class="font-bold">8</span></div>
          <div>Victories: <span class="font-bold">6</span></div>
          <div>Draws: <span class="font-bold">1</span></div>
          <div>Lost: <span class="font-bold">1</span></div>
        </div>
        <div class="mt-2 h-2 bg-gray-200 rounded">
          <div class="h-2 bg-teal-600 rounded" style="width:75%"></div>
        </div>
      </div>
    </div>

    <!-- Row 2: KIRI = Standings (besar) | KANAN = 4 small cards (2x2) -->
    <div class="grid grid-cols-2 gap-4 mb-4 items-stretch">
      <!-- Left: Standings (besar, akan mengikuti tinggi kanan karena items-stretch) -->
      <div class="w-full bg-white/80 border border-gray-300 rounded-xl shadow-xl p-3 h-full overflow-auto">
        <h3 class="font-bold text-lg mb-2">Standings</h3>
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b">
              <th class="text-left">#</th>
              <th class="text-left">Team</th>
              <th>MP</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Juventus</td>
              <td>8</td>
              <td>6</td>
              <td>1</td>
              <td>1</td>
              <td>19</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Atalanta</td>
              <td>8</td>
              <td>5</td>
              <td>1</td>
              <td>2</td>
              <td>16</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Inter</td>
              <td>8</td>
              <td>5</td>
              <td>0</td>
              <td>3</td>
              <td>15</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Napoli</td>
              <td>8</td>
              <td>4</td>
              <td>1</td>
              <td>3</td>
              <td>13</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Milan</td>
              <td>8</td>
              <td>4</td>
              <td>1</td>
              <td>3</td>
              <td>13</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Right: 4 small cards arranged 2x2 -->
      <div class="grid grid-cols-2 gap-4">
        <div
          class="h-24 flex flex-col justify-center items-center bg-white/80 border border-gray-300 rounded-xl shadow-xl">
          <p class="text-gray-500 text-sm">Possession</p>
          <p class="text-xl font-bold">65%</p>
        </div>

        <div
          class="h-24 flex flex-col justify-center items-center bg-white/80 border border-gray-300 rounded-xl shadow-xl">
          <p class="text-gray-500 text-sm">Overall Price</p>
          <p class="text-xl font-bold">$690.2m</p>
        </div>

        <div
          class="h-24 flex flex-col justify-center items-center bg-white/80 border border-gray-300 rounded-xl shadow-xl">
          <p class="text-gray-500 text-sm">Transfer Budget</p>
          <p class="text-xl font-bold">$240.6m</p>
        </div>

        <div
          class="h-24 flex flex-col justify-center items-center bg-white/80 border border-gray-300 rounded-xl shadow-xl">
          <p class="text-gray-500 text-sm">Average Score</p>
          <p class="text-xl font-bold">7.2</p>
        </div>
      </div>
    </div>

    <!-- Row 3: Training Reminder (full width) -->
    <div class="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl shadow-xl p-4">
      <h3 class="text-lg font-bold">Don’t Forget</h3>
      <p class="text-sm">Setup training for next week</p>
      <button class="mt-2 px-3 py-1 bg-white text-teal-600 rounded-lg font-bold">Go to Training Center</button>
    </div>
  </main>
</template>
<script setup></script>
