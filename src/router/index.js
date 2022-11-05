import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/geo-graph',
      component: () => import('../pages/GeoGraph/index.vue'),
      children: [
        {
          path: '3d',
          component: () => import('../pages/GeoGraph/components/Orthographic.vue'),
        },
        {
          path: '2d',
          component: () => import('../pages/GeoGraph/components/Mercator.vue'),
        },
        {
          path: '',
          redirect: '/geo-graph/3d',
        },
      ],
    },
    {
      path: '/about',
      component: () => import('../pages/About/index.vue'),
    },
    {
      path: '/',
      redirect: '/geo-graph',
    },
  ],
});
