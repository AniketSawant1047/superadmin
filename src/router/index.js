import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../components/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component: () => import('../components/HomePageView.vue'),
    children: [
      {
        path: '/DashboardView',
        name: 'DashboardView',
        component: () => import('../components/DashboardView.vue')
      },     
      {
        path: '/AdminFormView',
        name: 'AdminFormView',
        component: () => import('../components/AdminFormView.vue')
      },
      {
        path: '/AdminListView',
        name: 'AdminListView',
        component: () => import('../components/AdminListView.vue')
      },
      {
        path: '/BusinessFormView',
        name: 'BusinessFormView',
        component: () => import('../components/BusinessFormView.vue')
      },
      {
        path: '/BusinessListView',
        name: 'BusinessListView',
        component: () => import('../components/BusinessListView.vue')
      },
      {
        path: '/DoctorFormView',
        name: 'DoctorFormView',
        component: () => import('../components/DoctorFormView.vue')
      },
      {
        path: '/DoctorListView',
        name: 'DoctorListView',
        component: () => import('../components/DoctorListView.vue')
      },
      {
        path: '/ClinicFormView',
        name: 'ClinicFormView',
        component: () => import('../components/ClinicFormView.vue')
      },
      {
        path: '/ClinicListView',
        name: 'ClinicListView',
        component: () => import('../components/ClinicListView.vue')
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
