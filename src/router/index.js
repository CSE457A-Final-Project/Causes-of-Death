import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/geo-graph',
      component: () => import('../pages/GeoGraph/index.vue'),
    },
    {
      // to be replaced
      path: '/stacked-bar',
      component: () => import('../pages/StackedBar/StackedBar.vue'),
    },
    {
      // to be replaced
      path: '/bar-chart',
      component: () => import('../pages/BarChart/BarChart.vue'),
    },
    {
      path: '/process-book',
      component: () => import('../pages/ProcessBook/index.vue'),
    },
    // {
    //   path: '/about',
    //   component: () => import('../pages/About/index.vue'),
    // },
    {
      path: '/video',
      component: () => import('../pages/Video/index.vue'),
    },
    {
      path: '/about',
      component: () => import('../pages/About/index.vue'),
    },
    {
      path: '/',
      redirect: '/geo-graph',
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    },
  ],
});
