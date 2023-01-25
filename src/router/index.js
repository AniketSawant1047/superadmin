import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../components/Login/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component: () => import('../components/Home-Dashboard/HomePageView.vue'),
    children: [
      {
        path: '/DashboardView',
        name: 'DashboardView',
        component: () => import('../components/Home-Dashboard/DashboardView.vue')
      },     
      {
        path: '/AdminFormView',
        name: 'AdminFormView',
        component: () => import('../components/Admin/AdminFormView.vue')
      },
      {
        path: '/AdminListView',
        name: 'AdminListView',
        component: () => import('../components/Admin/AdminListView.vue')
      },
      {
        path: '/BusinessFormView',
        name: 'BusinessFormView',
        component: () => import('../components/Business/BusinessFormView.vue')
      },
      {
        path: '/BusinessListView',
        name: 'BusinessListView',
        component: () => import('../components/Business/BusinessListView.vue')
      },
      {
        path: '/ClinicFormView',
        name: 'ClinicFormView',
        component: () => import('../components/Clinics/ClinicFormView.vue')
      },
      {
        path: '/ClinicListView',
        name: 'ClinicListView',
        component: () => import('../components/Clinics/ClinicListView.vue')
      },
      {
        path: '/DoctorFormView',
        name: 'DoctorFormView',
        component: () => import('../components/Doctors/DoctorFormView.vue')
      },
      {
        path: '/DoctorListView',
        name: 'DoctorListView',
        component: () => import('../components/Doctors/DoctorListView.vue')
      },
      {
        path: '/PatientFormView',
        name: 'PatientFormView',
        component: () => import('../components/Patients/PatientRegistrationView.vue')
      },
      {
        path: '/PatientListView',
        name: 'PatientListView',
        component: () => import('../components/Patients/PatientListView.vue')
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
