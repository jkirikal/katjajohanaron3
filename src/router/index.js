import { createWebHistory, createRouter } from "vue-router"
import SignupView from '../views/SignupView.vue'
import MainView from '../views/MainView.vue'

const routes = [
    {
      path: "/signup",
      name: "SignupView",
      component: SignupView,
    },
    {
        path: "/main",
        name: "MainView",
        component: MainView
    },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router