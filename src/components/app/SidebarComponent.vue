<script setup>
import { reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';

// data
const hamburgerMenu = ref(null);
const isSidebarOpen = ref(false);
const sidebarData = reactive([
    {
        open: false,
        title: 'Client',
        slug: 'client',
        child: [
            {
                method: 'POST',
                name: 'Create Client',
                slug: 'create-client'
            },
            {
                method: 'PUT',
                name: 'Update Client',
                slug: 'update-client'
            },
            {
                method: 'POST',
                name: 'Login SSO',
                slug: 'login-sso'
            }
        ]
    },
    {
        open: false,
        title: 'Campaign',
        slug: 'campaign',
        child: [
            {
                method: 'POST',
                name: 'Create Campaign',
                slug: 'create-campaign',
            },
            {
                method: 'PUT',
                name: 'Update Campaign',
                slug: 'update-campaign',
            },
            {
                method: 'PUT',
                name: 'Update Price Campaign',
                slug: 'update-price-campaign',
            },
            {
                method: 'PUT',
                name: 'Update Status Campaign',
                slug: 'update-status-campaign',
            }
        ]
    },
    {
        open: false,
        title: 'General Setting',
        slug: 'general-setting',
        child: [
            {
                method: 'PUT',
                name: 'Update Default Price',
                slug: 'update-default-price',
            },
            {
                method: 'PUT',
                name: 'Update Default Payment',
                slug: 'update-default-payment',
            },
            {
                method: 'PUT',
                name: 'Update Product Name',
                slug: 'update-product-campaign',
            },
            {
                method: 'PUT',
                name: 'Update Subdomain',
                slug: 'update-subdomain',
            }
        ]
    },
]);
// data

// method
const hamburgerMenuToggle = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
}

const sidebarChildToggle = (index) => {
    sidebarData[index].open = !sidebarData[index].open;
}
// method

</script>

<template>
    <span class="hamburger-menu fixed top-3 right-3 z-[10] lg:hidden">
        <i 
            ref="hamburgerMenu"
            :class="{'cursor-pointer fa-solid fa-xmark text-[1.7rem]': isSidebarOpen, 'cursor-pointer fa-solid fa-bars text-[1.7rem]': !isSidebarOpen}" 
            @click="hamburgerMenuToggle">
        </i>
    </span>
    <div 
        class="sidebar bg-[rgb(148,36,52)] text-white overflow-x-hidden absolute top-0 bottom-0 left-0 z-[9] lg:static lg:z-0 lg:w-[25%] lg:pl-2.5 xl:w-[20%] 2xl:w-[17%]"
        :class="{'w-[80%] sm400:w-[65%] sm500:w-[50%] sm:w-[40%] md:w-[35%] pl-2.5 shadow-xl': isSidebarOpen, 'w-[0] pl-0 shadow-none': !isSidebarOpen}">
        <h1 class="text-start my-5 text-xl font-semibold">Emm Api</h1>
        <ul class="flex flex-col gap-1.5">
            <li v-for="(items, index) in sidebarData" :key="index">
                <div class="tracking-wide transition duration-200 cursor-pointer flex items-center gap-3" @click="sidebarChildToggle(index)">
                    <span class="mt-0.5">
                        <i 
                            class="fa-solid fa-caret-up fa-sm"
                            :class="{'fa-rotate-180': items.open,'fa-rotate-90': !items.open}">
                        </i>
                    </span>
                    <span>{{ items.title }}</span>
                </div>
                <ul 
                    class="pl-3 sm400:pl-5 mt-1" 
                    :class="{'h-full': items.open, 'h-0 overflow-hidden': !items.open}">
                    <li v-for="child in items.child" class="flex items-center h-[1.9rem]">
                        <router-link :to="`/${items.slug}/${child.slug}`" class="flex items-center gap-2">
                            <span 
                                class="text-[.6rem] mt-[1px] tracking-wider font-bold w-7"
                                :class="{'text-green-500': child.method == 'GET', 'text-blue-500': child.method == 'PUT', 'text-yellow-500': child.method == 'POST', 'text-red-500': child.method == 'DEL'}">
                                {{ child.method }}
                            </span>
                            <span>{{ child.name }}</span>
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>