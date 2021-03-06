import Vue from 'vue';
import VueRouter from 'vue-router';
import Money from '@/views/Money.vue';
import Lables from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'Money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Lables
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/labels/edit',
    component: EditLabel
  },
  {
    path: '/labels/edit/:id',
    component: EditLabel
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
