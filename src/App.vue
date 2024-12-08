<script setup>
import { RouterView } from 'vue-router'
import SidebarComponent from './components/app/SidebarComponent.vue';
import { initStore } from './stores/initStore';

const store = initStore();

// METHOD
const closeSidebar = () => {
  if(store.isSidebarOpen) {
    store.isSidebarOpen = false;
  }
}

const globalClick = () => {
  closeSidebar();
}
// METHOD

</script>

<template>
  <main class="relative flex h-screen overflow-hidden" @click="globalClick">
    
    <SidebarComponent />

    <div class="pt-10 pb-5 px-4 overflow-y-auto sm500:px-6 md:px-8 xl:px-10 2xl:px-12 h-screen w-full lg:w-[70%] xl:w-[85%] 2xl:w-[80%]">
      <RouterView />
    </div>
  
  </main>
</template>
