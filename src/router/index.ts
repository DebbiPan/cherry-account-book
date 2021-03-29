import Vue from 'vue'
import VueRouter from 'vue-router'
import  Money from '@/views/Money.vue'
import  Lables from '@/views/Labels.vue'
import  Statistics from '@/views/Statistics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'Money'
  },
  {
    path:'/money',
    component:Money
  },
  {
    path:'/labels',
    component: Lables
  },
  {
    path:'/statistics',
    component: Statistics
  }
]

const router = new VueRouter({
  routes
})

export default router
