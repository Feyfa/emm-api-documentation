<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SidebarComponent from './components/app/SidebarComponent.vue';
</script>

<template>
  <main class="relative flex h-screen overflow-hidden">
    
    <SidebarComponent />

    <div class="pt-8 pb-10 h-screen px-4 w-full lg:w-[75%] lg:overflow-y-auto lg:px-10 xl:w-[80%] xl:px-20 2xl:w-[83%]">
      <RouterView />
    </div>
  
  </main>
</template>
