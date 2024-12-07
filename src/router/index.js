import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/agency/getting-started/create-token',
      name: 'agency_gettingstarted_createtoken',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/agency/CreateToken.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userType_LocalStorege = localStorage.getItem('userType');
  const userTypes = ['root','agency'];
  if(!userTypes.includes(userType_LocalStorege)) {
    localStorage.setItem('userType','root');
  }

  next();
});

export default router
