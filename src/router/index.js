import { createRouter, createWebHistory } from 'vue-router'
import { initStore } from '@/stores/initStore';

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
      component: () => import('../views/agency/CreateToken.vue'),
    },
    {
      path: '/agency/user-client/create-user-client',
      name: 'agency_userclient_createuserclient',
      component: () => import('../views/agency/CreateClient.vue')
    },
    {
      path: '/agency/user-client/update-user-client',
      name: 'agency_userclient_updateuserclient',
      component: () => import('../views/agency/UpdateClient.vue')
    },
    {
      path: '/agency/user-client/login-sso-client',
      name: 'agency_userclient_loginssoclient',
      component: () => import('../views/agency/LoginSsoClient.vue')
    }
  ],
})

router.beforeEach((to, from, next) => {
  const store = initStore();
  if(store.isSidebarOpen) {
    store.isSidebarOpen = false;
  }
  
  const userType_LocalStorege = localStorage.getItem('userType');
  const userTypes = ['root','agency'];
  if(!userTypes.includes(userType_LocalStorege)) {
    localStorage.setItem('userType','root');
  }

  next();
});

export default router
