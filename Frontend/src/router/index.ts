import { createRouter, createWebHistory } from 'vue-router'
import Home from '../home.vue'
import Login from '../login.vue'
import Register from '../register.vue'
import AddToDo from '../addTodo.vue'
import Dashboard from '../dashboard.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/addtodo', name: 'AddToDo', component: AddToDo },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router 
