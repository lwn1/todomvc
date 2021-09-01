import Vue from 'vue'
import VueRouter from 'vue-router'
import All from '../views/All.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:All
  },
  {
    path: '/All',
    component:()=>import('../views/All.vue')
  },
  {
    path:'/Active',
    name:'active',
    component:()=>import('../views/Active.vue')
  },
  {
    path:'/Completed',
    name:'completed',
    component:()=>import('../views/Completed.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
