<template>
  <div class="min-h-screen p-6 bg-gray-100">
    <!-- HEADER -->
    <div class="flex items-center mb-4">
      <button @click="goBack" class="mr-3 text-gray-600 hover:text-green-600 text-xl">←</button>
      <h1 class="text-2xl font-bold">Create New Quiz</h1>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-md">
      <!-- Quiz Title -->
      <div class="mb-4">
        <label class="block mb-1 font-semibold">Quiz Title</label>
        <input
          v-model="quiz.title"
          type="text"
          placeholder="Enter quiz title"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <!-- Quiz Description -->
      <div class="mb-4">
        <label class="block mb-1 font-semibold">Description</label>
        <textarea
          v-model="quiz.description"
          placeholder="Enter quiz description"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
      </div>

      <!-- Questions -->
      <div v-for="(q, index) in quiz.questions" :key="index" class="mb-4">
        <label class="block mb-1 font-semibold"> Question {{ index + 1 }} </label>

        <input
          v-model="q.question"
          type="text"
          placeholder="Enter question"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 mb-2"
        />

        <input
          v-model="q.answer"
          type="text"
          placeholder="Answer"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button class="mt-2 text-red-500 hover:underline" @click="removeQuestion(index)">
          Remove Question
        </button>
      </div>

      <button
        class="w-full py-2 mt-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        @click="addQuestion"
      >
        + Add Question
      </button>

      <button
        class="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        @click="submitQuiz"
      >
        Save Quiz
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const quiz = reactive({
  title: '',
  description: '',
  questions: [{ question: '', answer: '' }],
})

function goBack() {
  router.back() // 🔥 tombol kembali
}

function addQuestion() {
  quiz.questions.push({ question: '', answer: '' })
}

function removeQuestion(index) {
  quiz.questions.splice(index, 1)
}

function submitQuiz() {
  if (!quiz.title || quiz.questions.length === 0) {
    alert('Please fill the title and at least one question.')
    return
  }

  console.log('Quiz Submitted:', quiz)

  alert('Quiz saved successfully!')

  quiz.title = ''
  quiz.description = ''
  quiz.questions = [{ question: '', answer: '' }]

  router.push('/quiz') // lebih natural kembali ke quiz list
}
</script>
