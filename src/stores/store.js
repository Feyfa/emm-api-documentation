import { defineStore } from "pinia";

export const initStore = defineStore('initStore', {
    state: () => ({
        isSidebarOpen: false,
    })
})