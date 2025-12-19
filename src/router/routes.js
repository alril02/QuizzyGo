import LoginLayout from '../layouts/LoginLayout.vue'
import MainLayout from '../layouts/MainLayout.vue'

const routes = [
  // DEFAULT
  {
    path: '/',
    redirect: '/login',
  },

  // ================= AUTH =================
  {
    path: '/',
    component: LoginLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../pages/auth/LoginPage.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../pages/auth/RegisterPage.vue'),
      },
      {
        path: 'welcome',
        name: 'welcome',
        component: () => import('../pages/WelcomePage.vue'),
      },
    ],
  },

  // ================= MAIN APP =================
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'app',
        name: 'home',
        component: () => import('../pages/DashboardPage.vue'),
      },

      // 🔹 QUIZ LIST
      {
        path: 'quiz',
        name: 'quiz-list',
        component: () => import('../pages/QuizListPage.vue'),
        meta: { requiresAuth: true },
      },

      // 🔹 QUIZ DETAIL (INI KUNCI)
      {
        path: 'quiz/:id',
        name: 'quiz-detail',
        component: () => import('../pages/QuizDetailPage.vue'),
        meta: { requiresAuth: false }, // 🔥 INI KUNCI
      },

      {
        path: 'leaderboard',
        name: 'leaderboard',
        component: () => import('../pages/LeaderboardPage.vue'),
      },

      {
        path: 'profile',
        name: 'profile',
        component: () => import('../pages/ProfilePage.vue'),
      },

      {
        path: 'create-quiz',
        name: 'create-quiz',
        component: () => import('../pages/CreateQuizPage.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },

  // ================= FALLBACK =================
  {
    path: '/:catchAll(.*)*',
    redirect: '/login',
  },
]

export default routes
