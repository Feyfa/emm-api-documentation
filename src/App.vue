<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SidebarComponent from './components/app/SidebarComponent.vue';
</script>

<template>
  <main class="relative flex h-screen overflow-hidden">
    
    <SidebarComponent />

    <div class="p-[1.6rem] h-screen w-full lg:w-[75%] lg:overflow-y-auto xl:w-[80%] 2xl:w-[83%]">
      <RouterView />
    </div>
  
  </main>
</template>
