<template>
  <q-page class="q-pa-md bg-grey-2">
    <!-- Header -->
    <div class="row items-center q-mb-md">
      <q-btn flat round icon="arrow_back" @click="goBack" />
      <div class="text-h6 q-ml-sm">Sports Quiz</div>
    </div>

    <!-- Progress -->
    <q-linear-progress :value="progress" color="primary" class="q-mb-md" />

    <!-- Question -->
    <q-card class="q-pa-md">
      <div class="text-subtitle1 text-weight-bold q-mb-md">
        {{ questions[currentIndex].question }}
      </div>

      <q-option-group
        v-model="selectedAnswer"
        :options="questions[currentIndex].options"
        type="radio"
        color="primary"
      />
    </q-card>

    <!-- Button -->
    <div class="q-mt-lg">
      <q-btn
        label="Next"
        color="primary"
        class="full-width"
        :disable="!selectedAnswer"
        @click="nextQuestion"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

const router = useRouter()
const $q = useQuasar()

const questions = [
  {
    question: "Siapakah pemain sepak bola dengan Ballon d'Or terbanyak?",
    options: [
      { label: 'Lionel Messi', value: 'Messi' },
      { label: 'Cristiano Ronaldo', value: 'Ronaldo' },
      { label: 'Neymar', value: 'Neymar' },
      { label: 'Mbappe', value: 'Mbappe' },
    ],
    answer: 'Messi',
  },
  {
    question: 'Negara pemenang Piala Dunia 2022?',
    options: [
      { label: 'Prancis', value: 'France' },
      { label: 'Argentina', value: 'Argentina' },
      { label: 'Brasil', value: 'Brazil' },
      { label: 'Jerman', value: 'Germany' },
    ],
    answer: 'Argentina',
  },
]

const currentIndex = ref(0)
const selectedAnswer = ref(null)
const score = ref(0)

const progress = computed(() => {
  return (currentIndex.value + 1) / questions.length
})

function goBack() {
  router.push('/quiz') // 🔥 FIX UTAMA
}

function nextQuestion() {
  if (selectedAnswer.value === questions[currentIndex.value].answer) {
    score.value++
  }

  selectedAnswer.value = null

  if (currentIndex.value < questions.length - 1) {
    currentIndex.value++
  } else {
    $q.dialog({
      title: 'Quiz Selesai 🎉',
      message: `Skor kamu: ${score.value}/${questions.length}`,
      ok: 'Kembali ke Quiz',
    }).onOk(() => {
      router.push('/quiz') // 🔥 FIX JUGA DI SINI
    })
  }
}
</script>
