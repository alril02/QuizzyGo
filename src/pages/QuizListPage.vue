<template>
  <div class="q-pa-md bg-grey-2 min-h-screen">
    <!-- Header -->
    <div class="row items-center q-mb-md">
      <q-btn flat round icon="arrow_back" @click="$router.push('/')" />
      <div class="text-h6 q-ml-sm">Sports Quiz</div>
      <q-space />
      <q-btn flat round icon="search" />
    </div>

    <!-- Quiz List -->
    <q-list bordered separator class="rounded-borders bg-white">
      <q-item v-for="quiz in quizzes" :key="quiz.id" clickable @click="openQuiz(quiz.id)">
        <q-item-section avatar>
          <q-avatar rounded size="56px">
            <img :src="quiz.image" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-bold">
            {{ quiz.title }}
          </q-item-label>
          <q-item-label caption> {{ quiz.questions }} Questions </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const quizzes = [
  {
    id: 1,
    title: 'The Football Brain Test',
    questions: 25,
    image: 'https://picsum.photos/200?random=1',
  },
  {
    id: 2,
    title: 'Cricket Craze Quiz',
    questions: 15,
    image: 'https://picsum.photos/200?random=2',
  },
  {
    id: 3,
    title: 'Hoop Dreams Quiz',
    questions: 10,
    image: 'https://picsum.photos/200?random=3',
  },
  {
    id: 4,
    title: 'Tennis Trivia Time',
    questions: 14,
    image: 'https://picsum.photos/200?random=4',
  },
  {
    id: 5,
    title: 'Ring Rumble Quiz',
    questions: 10,
    image: 'https://picsum.photos/200?random=5',
  },
]

function openQuiz(id) {
  router.push(`/quiz/${id}`) // ✅ FIX
}
</script>
