const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DashboardPage.vue') },
      { path: 'squad', component: () => import('pages/SquadPage.vue') },
      { path: 'messager', component: () => import('pages/MessagerPage.vue') },
      { path: 'statistic', component: () => import('pages/StatisticPage.vue') },
      { path: 'calendar', component: () => import('pages/CalendarPage.vue') },
      { path: 'finance', component: () => import('pages/FinancePage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
