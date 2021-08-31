import Vue from 'vue'
import VueRouter from 'vue-router'
import Active from '../views/Active.vue'
import All from '../views/All.vue'
import Completed from '../views/Completed.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/All',
    name: 'all',
    component:All
  },
  {
    path: '/',
    component:All
  },
  {
    path:'/Active',
    name:'active',
    component:Active
  },
  {
    path:'/Completed',
    name:'completed',
    component:Completed
  }
]

const router = new VueRouter({
  routes
})

export default router
