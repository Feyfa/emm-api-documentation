<script setup>
import { reactive, ref, onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { initStore } from '@/stores/initStore';

const router = useRouter();
const store = initStore();

// const store = store();
const hamburgerMenu = ref(null);
const sidebarData = ref([
    {
        id: 0,
        open: false,
        userType: ['agency','root'],
        title: 'Getting Started',
        slug: 'getting-started',
        child: [
            {
                method: 'POST',
                name: 'Create Token',
                slug: 'create-token'
            },
        ]
    },
    {
        id: 1,
        open: false,
        userType: ['root'],
        title: 'User Agency',
        slug: 'user-agency',
        child: [
            {
                method: 'POST',
                name: 'Create User Agency',
                slug: 'create-user-agency'
            },
            {
                method: 'PUT',
                name: 'Update User Agency',
                slug: 'update-user-agency'
            },
            {
                method: 'POST',
                name: 'Login SSO Agency',
                slug: 'login-sso-agency'
            }
        ]
    },
    {
        id: 2,
        open: false,
        userType: ['agency'],
        title: 'User Client',
        slug: 'user-client',
        child: [
            {
                method: 'POST',
                name: 'Create User Client',
                slug: 'create-user-client'
            },
            {
                method: 'PUT',
                name: 'Update User Client',
                slug: 'update-user-client'
            },
            {
                method: 'POST',
                name: 'Login SSO Client',
                slug: 'login-sso-client'
            }
        ]
    },
    {
        id: 3,
        open: false,
        userType: ['agency'],
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
        id: 4,
        open: false,
        userType: ['agency','root'],
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
const sidebarDataFilter = ref([]);

const selectUserType = ref('root');
const userTypes = reactive([
    {
        label: 'Root',
        value: 'root'
    },
    {
        label: 'Agency',
        value: 'agency'
    },
]);
// data

// method
const hamburgerMenuToggle = () => {
    store.isSidebarOpen = !store.isSidebarOpen;
}

const sidebarChildToggle = (id) => {
    const index = sidebarDataFilter.value.findIndex(item => item.id == id);
    sidebarDataFilter.value[index].open = !sidebarDataFilter.value[index].open;
}

const filterSidebarData = (userType) => {
    sidebarData.value.forEach(item => item.open = false);
    sidebarDataFilter.value = sidebarData.value.filter(item => item.userType.includes(userType));
}

const userTypeChange = () => {
    localStorage.setItem('userType', selectUserType.value);
    filterSidebarData(selectUserType.value);

    store.isSidebarOpen = false;
    
    router.push('/');
}

/**
 * digunakan untuk membuka module sesuai path yang dibuka saat di refresh
 */
const openSidebarCurrent = () => {
    const currentPath = window.location.pathname;

    console.log(currentPath);

    sidebarData.value.forEach((item) => {
        // Reset semua open ke false terlebih dahulu
        item.open = false;

        // Cari indeks userType yang cocok
        const matchedIndex = item.userType.findIndex(userType => currentPath.startsWith(`/${userType}/${item.slug}`));

        if (matchedIndex !== -1) {
            // Jika ditemukan, lanjutkan ke child
            item.child.forEach((child) => {
                if (currentPath === `/${item.userType[matchedIndex]}/${item.slug}/${child.slug}`) {
                    // Set open ke true jika cocok
                    item.open = true;
                }
            });
        }
    });
};
// method

// mounted
onMounted(() => {
    const userType_LocalStorege = localStorage.getItem('userType') || 'agency';
    selectUserType.value = userType_LocalStorege;

    filterSidebarData(selectUserType.value);

    openSidebarCurrent();
});
// mounted

</script>

<template>
    <span class="hamburger-menu fixed top-3 right-3 z-[10] lg:hidden">
        <i 
            ref="hamburgerMenu"
            :class="{'cursor-pointer fa-solid fa-xmark text-[1.7rem]': store.isSidebarOpen, 'cursor-pointer fa-solid fa-bars text-[1.7rem]': !store.isSidebarOpen}" 
            @click.stop="hamburgerMenuToggle">
        </i>
    </span>
    <div 
        class="sidebar bg-[rgb(148,36,52)] text-white overflow-x-hidden absolute top-0 bottom-0 left-0 z-[9] lg:static lg:z-0 lg:w-[30%] lg:pl-2.5 xl:w-[25%] 2xl:w-[20%]"
        :class="{'w-[80%] sm400:w-[70%] sm500:w-[60%] sm:w-[50%] md:w-[40%] pl-2.5 shadow-xl': store.isSidebarOpen, 'w-[0] pl-0 shadow-none': !store.isSidebarOpen}"
        @click.stop>
        <div class="my-6 w-max">
            <router-link to="/">
                <h1 class="text-start text-base sm400:text-lg font-semibold">Exatch Match Marketing Api</h1>
            </router-link>

            <el-select
                class="mt-3"
                v-model="selectUserType"
                placeholder="Select"
                size="medium"
                @change="userTypeChange">
                <el-option
                    v-for="item in userTypes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
        </div>        
        
        <ul class="flex flex-col gap-1.5 text-base">
            <li v-for="(items, index) in sidebarDataFilter" :key="index">
                <div class="tracking-wide transition duration-200 cursor-pointer flex items-center gap-3" @click="sidebarChildToggle(items.id)">
                    <span class="mt-0.5">
                        <i 
                            class="fa-solid fa-caret-up fa-sm"
                            :class="{'fa-rotate-180': items.open,'fa-rotate-90': !items.open}">
                        </i>
                    </span>
                    <span>{{ items.title }}</span>
                </div>
                <ul 
                    class="pl-3 sm500:pl-5 mt-1" 
                    :class="{'h-full': items.open, 'h-0 overflow-hidden': !items.open}">
                    <li v-for="child in items.child" class="flex items-center h-[1.9rem]">
                        <router-link :to="`/${selectUserType}/${items.slug}/${child.slug}`" class="flex items-center gap-2">
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