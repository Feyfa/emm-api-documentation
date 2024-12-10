<script setup>
import { ElNotification } from 'element-plus';
import { ref } from 'vue';

// variabel
const restApi = ref([
    {
        id: 0,
        name: 'Create Campaign Local',
        slug: 'create-campaign-local',
        endpoint: '/create/campaign/local',
        url: 'https://data.emmsandbox.com/api/v1/developer/create/campaign/local',
        method: 'POST',
        open: false,
        response: {
            status: 'success',
            campaign_id: 11111111,
            message: 'Campaign Type Local Created Successfully',
            status_code: 200,
        },
        iconclipboard: 'fa-solid fa-clipboard'
    },
    {
        id: 1,
        name: 'Create Campaign Local',
        slug: 'create-campaign-local',
        endpoint: '/create/campaign/local',
        url: 'https://data.emmsandbox.com/api/v1/developer/create/campaign/local',
        method: 'POST',
        open: false,
        response: {
            status: 'success',
            campaign_id: 11111112,
            message: 'Campaign Type Local Created Successfully',
            status_code: 200,
        },
        iconclipboard: 'fa-solid fa-clipboard'
    },
    {
        id: 2,
        name: 'Create Campaign Locator',
        slug: 'create-campaign-locator',
        endpoint: '/create/campaign/locator',
        url: 'https://data.emmsandbox.com/api/v1/developer/create/campaign/locator',
        method: 'POST',
        open: false,
        response: {
            status: 'success',
            campaign_id: 11111113,
            message: 'Campaign Type Locator Created Successfully',
            status_code: 200,
        },
        iconclipboard: 'fa-solid fa-clipboard'
    },
    {
        id: 3,
        name: 'Create Campaign Locator',
        slug: 'create-campaign-locator',
        endpoint: '/create/campaign/locator',
        url: 'https://data.emmsandbox.com/api/v1/developer/create/campaign/locator',
        method: 'POST',
        open: false,
        response: {
            status: 'success',
            campaign_id: 11111114,
            message: 'Campaign Type Locator Created Successfully',
            status_code: 200,
        },
        iconclipboard: 'fa-solid fa-clipboard'
    },
    {
        id: 4,
        name: 'Create Campaign Enhance',
        slug: 'create-campaign-enhance',
        endpoint: '/create/campaign/enhance',
        url: 'https://data.emmsandbox.com/api/v1/developer/create/campaign/enhance',
        method: 'POST',
        open: false,
        response: {
            status: 'success',
            campaign_id: 11111115,
            message: 'Campaign Type Enhance Created Successfully',
            status_code: 200,
        },
        iconclipboard: 'fa-solid fa-clipboard'
    },
    {
        id: 5,
        name: 'Create Campaign Enhance',
        slug: 'create-campaign-enhance',
        endpoint: '/create/campaign/enhance',
        url: 'https://data.emmsandbox.com/api/v1/developer/create/campaign/enhance',
        method: 'POST',
        open: false,
        response: {
            status: 'success',
            campaign_id: 11111116,
            message: 'Campaign Type Enhance Created Successfully',
            status_code: 200,
        },
        iconclipboard: 'fa-solid fa-clipboard'
    },
]);
// variabel

// method
const openFullUrl = (index) => {
  restApi.value[index].open = !restApi.value[index].open;
}

const copyUrl = (index) => {
    const value = restApi.value[index].url;

    const textarea = document.createElement("textarea");
    textarea.value = value;
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand("copy");
        ElNotification({ type: "success", title: 'Success', message: 'Copy Clipboard Success' });
    } catch (err) {
        console.error("Failed to copy text: ", err);
        ElNotification({ type: "error", title: 'Error', message: err });
    }

    document.body.removeChild(textarea);
}

const copyJson = (index) => {
    const value = restApi.value[index].response;

    const textarea = document.createElement("textarea");
    textarea.value = JSON.stringify(value, null, 2);
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand("copy");

        restApi.value[index].iconclipboard = 'fa-solid fa-clipboard-check';
        ElNotification({ type: "success", title: 'Success', message: 'Copy Clipboard Success' });

        setTimeout(() => {
            restApi.value[index].iconclipboard = 'fa-solid fa-clipboard';
        }, 1000);

    } catch (err) {
        console.error("Failed to copy text: ", err);
        ElNotification({ type: "error", title: 'Error', message: err });
    }

    document.body.removeChild(textarea);
}
// method

</script>

<template>
    <main>
        <section>
            <h1 class="text-3xl font-semibold">Create Campaign</h1>
  
            <p class="mt-2">
                This API allows you to create new campaigns for your agency. Using this endpoint, you can define campaign details such as name campaign, url, search keywords, context keyword, end date campaign etc. This API is specifically designed to help you effectively manage and launch campaigns that are tailored to your agency's goals.
            </p>
        </section>

        <section class="py-7 border-b-2 border-black">
            <article>
                <h1 class="text-xl font-semibold">1. Campaign Local</h1>
            </article>
            
            <article class="mt-5">
                <div class="flex flex-col justify-center md:flex-row gap-5 md:gap-10 mt-2">
                    <!-- PARAMETER -->
                    <div class="w-full md:w-[35%] flex flex-col gap-4">
                        <div class="w-full">
                            <h2 class="text-lg font-medium">1.1 Use Email Client</h2>
                        </div>

                        <div class="w-full">
                            <div class="border-b border-b-neutral-400 pb-1">
                                <h4 class="text-neutral-700">Bearer Token Parameter</h4>
                            </div>
                
                            <ul class="mt-2 class flex flex-col gap-1">
                                <li>
                                    <h3>token</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>    
                                </li>
                            </ul>
                        </div>
    
                        <div class="w-full">
                            <div class="border-b border-b-neutral-400 pb-1">
                                <h4 class="text-neutral-700">Body Parameter</h4>
                            </div>
                
                            <ul class="mt-2 class flex flex-col gap-1">
                                <li>
                                    <h3>email</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- email</h4>
                                        <h4>- text</h4>
                                    </div>    
                                </li>
                                <li>
                                    <h3>campaign_name</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>    
                                </li>
                                <li>
                                    <h3>url</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- url</h4>
                                        <h4>- text</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- PARAMETER -->
    
                    <!-- ROUTE -->
                    <div class="w-full md:w-[65%] flex flex-col justify-start gap-2">
                        <!-- KOTAK ROUTE -->
                        <div class="relative">
                            <div class="h-12 px-2 flex justify-start items-center gap-3 bg-[rgb(17,23,26)] text-white cursor-pointer rounded" @click="openFullUrl(0)">
                                <p 
                                    class="border border-neutral-800 p-0.5"
                                    :class="{'bg-yellow-500': restApi[0].method == 'POST'}">
                                    {{ restApi[0].method }}
                                </p>
                                <p class="text-base -mt-0.5">
                                    {{ restApi[0].endpoint }}
                                </p>
                                <p class="ml-auto">
                                    <i 
                                    class="fa-solid fa-angle-up"
                                    :class="{'fa-rotate-180': !restApi[0].open}">
                                    </i>
                                </p>
                            </div>
                            
                            <div 
                            class="absolute bg-white text-sm w-full z-[9]"
                            :class="{'h-0 overflow-hidden': !restApi[0].open, 'h-max border border-neutral-700 rounded': restApi[0].open}">
                                <p class="break-all cursor-pointer py-2 px-2 hover:bg-[rgba(230,230,230)]" @click="copyUrl(0)">{{ restApi[0].url }}</p>
                            </div>
                        </div>
                        <!-- KOTAK ROUTE -->
    
                        <!-- KOTAK RESPONSE -->
                        <div>
                            <div class="mx-auto border border-neutral-400 text-white bg-[rgb(17,23,26)] shadow-md rounded-md">
                            <div class="flex justify-between items-center border-b border-b-slate-600 relative">
                                <span class="border-r border-r-slate-600 rounded-sm px-4 py-1 shadow-2xl">Response</span>
                                <i 
                                :class="[
                                    restApi[0].iconclipboard,
                                    'text-slate-300 cursor-pointer hover:text-slate-200 mr-2'
                                ]"
                                @click="copyJson(0)">
                                </i>
                            </div>
                            <div class="overflow-auto font-medium p-3 text-sm">
                                <code class="break-all">
                                    <div>
                                        {
                                    </div>
                                    <div class="pl-8">
                                        "status": "{{ restApi[0].response.status }}",
                                    </div>
                                    <div class="pl-8">
                                        "campaign_id": {{ restApi[0].response.campaign_id }},
                                    </div>
                                    <div class="pl-8">
                                        "message": "{{ restApi[0].response.message }}",
                                    </div>
                                    <div class="pl-8">
                                        "status_code": {{ restApi[0].response.status_code }}
                                    </div>
                                    <div>
                                        }
                                    </div>
                                </code>
                            </div>
                            </div>
                        </div>
                        <!-- KOTAK RESPONSE -->
                    </div>
                    <!-- ROUTE -->
                </div>
            </article>

            <article class="mt-5">
                <div class="flex flex-col justify-center md:flex-row gap-5 md:gap-10 mt-2">
                    <!-- PARAMETER -->
                    <div class="w-full md:w-[35%] flex flex-col gap-4">
                        <div class="w-full">
                            <h2 class="text-lg font-medium">1.2 Use User ID Client</h2>
                        </div>

                        <div class="w-full">
                            <div class="border-b border-b-neutral-400 pb-1">
                                <h4 class="text-neutral-700">Bearer Token Parameter</h4>
                            </div>
                
                            <ul class="mt-2 class flex flex-col gap-1">
                                <li>
                                    <h3>token</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>    
                                </li>
                            </ul>
                        </div>
    
                        <div class="w-full">
                            <div class="border-b border-b-neutral-400 pb-1">
                                <h4 class="text-neutral-700">Body Parameter</h4>
                            </div>
                
                            <ul class="mt-2 class flex flex-col gap-1">
                                <li>
                                    <h3>user_id</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- integer</h4>
                                    </div>    
                                </li>
                                <li>
                                    <h3>campaign_name</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>    
                                </li>
                                <li>
                                    <h3>url</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- url</h4>
                                        <h4>- text</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- PARAMETER -->
    
                    <!-- ROUTE -->
                    <div class="w-full md:w-[65%] flex flex-col justify-start gap-2">
                        <!-- KOTAK ROUTE -->
                        <div class="relative">
                            <div class="h-12 px-2 flex justify-start items-center gap-3 bg-[rgb(17,23,26)] text-white cursor-pointer rounded" @click="openFullUrl(1)">
                                <p 
                                    class="border border-neutral-800 p-0.5"
                                    :class="{'bg-yellow-500': restApi[1].method == 'POST'}">
                                    {{ restApi[1].method }}
                                </p>
                                <p class="text-base -mt-0.5">
                                    {{ restApi[1].endpoint }}
                                </p>
                                <p class="ml-auto">
                                    <i 
                                    class="fa-solid fa-angle-up"
                                    :class="{'fa-rotate-180': !restApi[1].open}">
                                    </i>
                                </p>
                            </div>
                            
                            <div 
                            class="absolute bg-white text-sm w-full z-[9]"
                            :class="{'h-0 overflow-hidden': !restApi[1].open, 'h-max border border-neutral-700 rounded': restApi[1].open}">
                                <p class="break-all cursor-pointer py-2 px-2 hover:bg-[rgba(230,230,230)]" @click="copyUrl(1)">{{ restApi[1].url }}</p>
                            </div>
                        </div>
                        <!-- KOTAK ROUTE -->
    
                        <!-- KOTAK RESPONSE -->
                        <div>
                            <div class="mx-auto border border-neutral-400 text-white bg-[rgb(17,23,26)] shadow-md rounded-md">
                            <div class="flex justify-between items-center border-b border-b-slate-600 relative">
                                <span class="border-r border-r-slate-600 rounded-sm px-4 py-1 shadow-2xl">Response</span>
                                <i 
                                :class="[
                                    restApi[1].iconclipboard,
                                    'text-slate-300 cursor-pointer hover:text-slate-200 mr-2'
                                ]"
                                @click="copyJson(1)">
                                </i>
                            </div>
                            <div class="overflow-auto font-medium p-3 text-sm">
                                <code class="break-all">
                                    <div>
                                        {
                                    </div>
                                    <div class="pl-8">
                                        "status": "{{ restApi[1].response.status }}",
                                    </div>
                                    <div class="pl-8">
                                        "campaign_id": {{ restApi[1].response.campaign_id }},
                                    </div>
                                    <div class="pl-8">
                                        "message": "{{ restApi[1].response.message }}",
                                    </div>
                                    <div class="pl-8">
                                        "status_code": {{ restApi[1].response.status_code }}
                                    </div>
                                    <div>
                                        }
                                    </div>
                                </code>
                            </div>
                            </div>
                        </div>
                        <!-- KOTAK RESPONSE -->
                    </div>
                    <!-- ROUTE -->
                </div>
            </article>
        </section>

        <section class="py-7 border-b-2 border-black">
            <article>
                <h1 class="text-xl font-semibold">2. Campaign Locator</h1>
            </article>
            
            <article class="mt-5">
                <div class="flex flex-col justify-center md:flex-row gap-5 md:gap-10 mt-2">
                    <!-- PARAMETER -->
                    <div class="w-full md:w-[35%] flex flex-col gap-4">
                        <div class="w-full">
                            <h2 class="text-lg font-medium">2.1 Use Email Client</h2>
                        </div>

                        <div class="w-full">
                            <div class="border-b border-b-neutral-400 pb-1">
                                <h4 class="text-neutral-700">Bearer Token Parameter</h4>
                            </div>
                
                            <ul class="mt-2 class flex flex-col gap-1">
                                <li>
                                    <h3>token</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>    
                                </li>
                            </ul>
                        </div>
    
                        <div class="w-full">
                            <div class="border-b border-b-neutral-400 pb-1">
                                <h4 class="text-neutral-700">Body Parameter</h4>
                            </div>
                
                            <ul class="mt-2 class flex flex-col gap-1">
                                <li>
                                    <h3>email</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- email</h4>
                                        <h4>- text</h4>
                                    </div>    
                                </li>
                                <li>
                                    <h3>campaign_name</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>    
                                </li>
                                <li>
                                    <h3>search_keyword</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>
                                </li>
                                <li>
                                    <h3>context_keyword</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>
                                </li>
                                <li>
                                    <h3>end_date_campaign</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- date (Y-m-d)</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- PARAMETER -->
    
                    <!-- ROUTE -->
                    <div class="w-full md:w-[65%] flex flex-col justify-start gap-2">
                        <!-- KOTAK ROUTE -->
                        <div class="relative">
                            <div class="h-12 px-2 flex justify-start items-center gap-3 bg-[rgb(17,23,26)] text-white cursor-pointer rounded" @click="openFullUrl(2)">
                                <p 
                                    class="border border-neutral-800 p-0.5"
                                    :class="{'bg-yellow-500': restApi[2].method == 'POST'}">
                                    {{ restApi[2].method }}
                                </p>
                                <p class="text-base -mt-0.5">
                                    {{ restApi[2].endpoint }}
                                </p>
                                <p class="ml-auto">
                                    <i 
                                    class="fa-solid fa-angle-up"
                                    :class="{'fa-rotate-180': !restApi[2].open}">
                                    </i>
                                </p>
                            </div>
                            
                            <div 
                            class="absolute bg-white text-sm w-full z-[9]"
                            :class="{'h-0 overflow-hidden': !restApi[2].open, 'h-max border border-neutral-700 rounded': restApi[2].open}">
                                <p class="break-all cursor-pointer py-2 px-2 hover:bg-[rgba(230,230,230)]" @click="copyUrl(2)">{{ restApi[2].url }}</p>
                            </div>
                        </div>
                        <!-- KOTAK ROUTE -->
    
                        <!-- KOTAK RESPONSE -->
                        <div>
                            <div class="mx-auto border border-neutral-400 text-white bg-[rgb(17,23,26)] shadow-md rounded-md">
                            <div class="flex justify-between items-center border-b border-b-slate-600 relative">
                                <span class="border-r border-r-slate-600 rounded-sm px-4 py-1 shadow-2xl">Response</span>
                                <i 
                                :class="[
                                    restApi[2].iconclipboard,
                                    'text-slate-300 cursor-pointer hover:text-slate-200 mr-2'
                                ]"
                                @click="copyJson(2)">
                                </i>
                            </div>
                            <div class="overflow-auto font-medium p-3 text-sm">
                                <code class="break-all">
                                    <div>
                                        {
                                    </div>
                                    <div class="pl-8">
                                        "status": "{{ restApi[2].response.status }}",
                                    </div>
                                    <div class="pl-8">
                                        "campaign_id": {{ restApi[2].response.campaign_id }},
                                    </div>
                                    <div class="pl-8">
                                        "message": "{{ restApi[2].response.message }}",
                                    </div>
                                    <div class="pl-8">
                                        "status_code": {{ restApi[2].response.status_code }}
                                    </div>
                                    <div>
                                        }
                                    </div>
                                </code>
                            </div>
                            </div>
                        </div>
                        <!-- KOTAK RESPONSE -->
                    </div>
                    <!-- ROUTE -->
                </div>
            </article>

            <article class="mt-5">
                <div class="flex flex-col justify-center md:flex-row gap-5 md:gap-10 mt-2">
                    <!-- PARAMETER -->
                    <div class="w-full md:w-[35%] flex flex-col gap-4">
                        <div class="w-full">
                            <h2 class="text-lg font-medium">2.2 Use User ID Client</h2>
                        </div>

                        <div class="w-full">
                            <div class="border-b border-b-neutral-400 pb-1">
                                <h4 class="text-neutral-700">Bearer Token Parameter</h4>
                            </div>
                
                            <ul class="mt-2 class flex flex-col gap-1">
                                <li>
                                    <h3>token</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>    
                                </li>
                            </ul>
                        </div>
    
                        <div class="w-full">
                            <div class="border-b border-b-neutral-400 pb-1">
                                <h4 class="text-neutral-700">Body Parameter</h4>
                            </div>
                
                            <ul class="mt-2 class flex flex-col gap-1">
                                <li>
                                    <h3>user_id</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- integer</h4>
                                    </div>    
                                </li>
                                <li>
                                    <h3>campaign_name</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>    
                                </li>
                                <li>
                                    <h3>search_keyword</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>
                                </li>
                                <li>
                                    <h3>context_keyword</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>
                                </li>
                                <li>
                                    <h3>end_date_campaign</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- date (Y-m-d)</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- PARAMETER -->
    
                    <!-- ROUTE -->
                    <div class="w-full md:w-[65%] flex flex-col justify-start gap-2">
                        <!-- KOTAK ROUTE -->
                        <div class="relative">
                            <div class="h-12 px-2 flex justify-start items-center gap-3 bg-[rgb(17,23,26)] text-white cursor-pointer rounded" @click="openFullUrl(3)">
                                <p 
                                    class="border border-neutral-800 p-0.5"
                                    :class="{'bg-yellow-500': restApi[3].method == 'POST'}">
                                    {{ restApi[3].method }}
                                </p>
                                <p class="text-base -mt-0.5">
                                    {{ restApi[3].endpoint }}
                                </p>
                                <p class="ml-auto">
                                    <i 
                                    class="fa-solid fa-angle-up"
                                    :class="{'fa-rotate-180': !restApi[3].open}">
                                    </i>
                                </p>
                            </div>
                            
                            <div 
                            class="absolute bg-white text-sm w-full z-[9]"
                            :class="{'h-0 overflow-hidden': !restApi[3].open, 'h-max border border-neutral-700 rounded': restApi[3].open}">
                                <p class="break-all cursor-pointer py-2 px-2 hover:bg-[rgba(230,230,230)]" @click="copyUrl(3)">{{ restApi[3].url }}</p>
                            </div>
                        </div>
                        <!-- KOTAK ROUTE -->
    
                        <!-- KOTAK RESPONSE -->
                        <div>
                            <div class="mx-auto border border-neutral-400 text-white bg-[rgb(17,23,26)] shadow-md rounded-md">
                            <div class="flex justify-between items-center border-b border-b-slate-600 relative">
                                <span class="border-r border-r-slate-600 rounded-sm px-4 py-1 shadow-2xl">Response</span>
                                <i 
                                :class="[
                                    restApi[3].iconclipboard,
                                    'text-slate-300 cursor-pointer hover:text-slate-200 mr-2'
                                ]"
                                @click="copyJson(3)">
                                </i>
                            </div>
                            <div class="overflow-auto font-medium p-3 text-sm">
                                <code class="break-all">
                                    <div>
                                        {
                                    </div>
                                    <div class="pl-8">
                                        "status": "{{ restApi[3].response.status }}",
                                    </div>
                                    <div class="pl-8">
                                        "campaign_id": {{ restApi[3].response.campaign_id }},
                                    </div>
                                    <div class="pl-8">
                                        "message": "{{ restApi[3].response.message }}",
                                    </div>
                                    <div class="pl-8">
                                        "status_code": {{ restApi[3].response.status_code }}
                                    </div>
                                    <div>
                                        }
                                    </div>
                                </code>
                            </div>
                            </div>
                        </div>
                        <!-- KOTAK RESPONSE -->
                    </div>
                    <!-- ROUTE -->
                </div>
            </article>
        </section>

        <section class="py-7">
            <article>
                <h1 class="text-xl font-semibold">3. Campaign Enhance</h1>
            </article>
            
            <article class="mt-5">
                <div class="flex flex-col justify-center md:flex-row gap-5 md:gap-10 mt-2">
                    <!-- PARAMETER -->
                    <div class="w-full md:w-[35%] flex flex-col gap-4">
                        <div class="w-full">
                            <h2 class="text-lg font-medium">3.1 Use Email Client</h2>
                        </div>

                        <div class="w-full">
                            <div class="border-b border-b-neutral-400 pb-1">
                                <h4 class="text-neutral-700">Bearer Token Parameter</h4>
                            </div>
                
                            <ul class="mt-2 class flex flex-col gap-1">
                                <li>
                                    <h3>token</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>    
                                </li>
                            </ul>
                        </div>
    
                        <div class="w-full">
                            <div class="border-b border-b-neutral-400 pb-1">
                                <h4 class="text-neutral-700">Body Parameter</h4>
                            </div>
                
                            <ul class="mt-2 class flex flex-col gap-1">
                                <li>
                                    <h3>email</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- email</h4>
                                        <h4>- text</h4>
                                    </div>    
                                </li>
                                <li>
                                    <h3>campaign_name</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>    
                                </li>
                                <li>
                                    <h3>search_keyword</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- PARAMETER -->
    
                    <!-- ROUTE -->
                    <div class="w-full md:w-[65%] flex flex-col justify-start gap-2">
                        <!-- KOTAK ROUTE -->
                        <div class="relative">
                            <div class="h-12 px-2 flex justify-start items-center gap-3 bg-[rgb(17,23,26)] text-white cursor-pointer rounded" @click="openFullUrl(4)">
                                <p 
                                    class="border border-neutral-800 p-0.5"
                                    :class="{'bg-yellow-500': restApi[4].method == 'POST'}">
                                    {{ restApi[4].method }}
                                </p>
                                <p class="text-base -mt-0.5">
                                    {{ restApi[4].endpoint }}
                                </p>
                                <p class="ml-auto">
                                    <i 
                                    class="fa-solid fa-angle-up"
                                    :class="{'fa-rotate-180': !restApi[4].open}">
                                    </i>
                                </p>
                            </div>
                            
                            <div 
                            class="absolute bg-white text-sm w-full z-[9]"
                            :class="{'h-0 overflow-hidden': !restApi[4].open, 'h-max border border-neutral-700 rounded': restApi[4].open}">
                                <p class="break-all cursor-pointer py-2 px-2 hover:bg-[rgba(230,230,230)]" @click="copyUrl(4)">{{ restApi[4].url }}</p>
                            </div>
                        </div>
                        <!-- KOTAK ROUTE -->
    
                        <!-- KOTAK RESPONSE -->
                        <div>
                            <div class="mx-auto border border-neutral-400 text-white bg-[rgb(17,23,26)] shadow-md rounded-md">
                            <div class="flex justify-between items-center border-b border-b-slate-600 relative">
                                <span class="border-r border-r-slate-600 rounded-sm px-4 py-1 shadow-2xl">Response</span>
                                <i 
                                :class="[
                                    restApi[4].iconclipboard,
                                    'text-slate-300 cursor-pointer hover:text-slate-200 mr-2'
                                ]"
                                @click="copyJson(4)">
                                </i>
                            </div>
                            <div class="overflow-auto font-medium p-3 text-sm">
                                <code class="break-all">
                                    <div>
                                        {
                                    </div>
                                    <div class="pl-8">
                                        "status": "{{ restApi[4].response.status }}",
                                    </div>
                                    <div class="pl-8">
                                        "campaign_id": {{ restApi[4].response.campaign_id }},
                                    </div>
                                    <div class="pl-8">
                                        "message": "{{ restApi[4].response.message }}",
                                    </div>
                                    <div class="pl-8">
                                        "status_code": {{ restApi[4].response.status_code }}
                                    </div>
                                    <div>
                                        }
                                    </div>
                                </code>
                            </div>
                            </div>
                        </div>
                        <!-- KOTAK RESPONSE -->
                    </div>
                    <!-- ROUTE -->
                </div>
            </article>

            <article class="mt-5">
                <div class="flex flex-col justify-center md:flex-row gap-5 md:gap-10 mt-2">
                    <!-- PARAMETER -->
                    <div class="w-full md:w-[35%] flex flex-col gap-4">
                        <div class="w-full">
                            <h2 class="text-lg font-medium">3.2 Use User ID Client</h2>
                        </div>

                        <div class="w-full">
                            <div class="border-b border-b-neutral-400 pb-1">
                                <h4 class="text-neutral-700">Bearer Token Parameter</h4>
                            </div>
                
                            <ul class="mt-2 class flex flex-col gap-1">
                                <li>
                                    <h3>token</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>    
                                </li>
                            </ul>
                        </div>
    
                        <div class="w-full">
                            <div class="border-b border-b-neutral-400 pb-1">
                                <h4 class="text-neutral-700">Body Parameter</h4>
                            </div>
                
                            <ul class="mt-2 class flex flex-col gap-1">
                                <li>
                                    <h3>user_id</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- integer</h4>
                                    </div>    
                                </li>
                                <li>
                                    <h3>campaign_name</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>    
                                </li>
                                <li>
                                    <h3>search_keyword</h3>
                                    <div class="pl-3">
                                        <h4>- required</h4>
                                        <h4>- text</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- PARAMETER -->
    
                    <!-- ROUTE -->
                    <div class="w-full md:w-[65%] flex flex-col justify-start gap-2">
                        <!-- KOTAK ROUTE -->
                        <div class="relative">
                            <div class="h-12 px-2 flex justify-start items-center gap-3 bg-[rgb(17,23,26)] text-white cursor-pointer rounded" @click="openFullUrl(5)">
                                <p 
                                    class="border border-neutral-800 p-0.5"
                                    :class="{'bg-yellow-500': restApi[5].method == 'POST'}">
                                    {{ restApi[5].method }}
                                </p>
                                <p class="text-base -mt-0.5">
                                    {{ restApi[5].endpoint }}
                                </p>
                                <p class="ml-auto">
                                    <i 
                                    class="fa-solid fa-angle-up"
                                    :class="{'fa-rotate-180': !restApi[5].open}">
                                    </i>
                                </p>
                            </div>
                            
                            <div 
                            class="absolute bg-white text-sm w-full z-[9]"
                            :class="{'h-0 overflow-hidden': !restApi[5].open, 'h-max border border-neutral-700 rounded': restApi[5].open}">
                                <p class="break-all cursor-pointer py-2 px-2 hover:bg-[rgba(230,230,230)]" @click="copyUrl(5)">{{ restApi[5].url }}</p>
                            </div>
                        </div>
                        <!-- KOTAK ROUTE -->
    
                        <!-- KOTAK RESPONSE -->
                        <div>
                            <div class="mx-auto border border-neutral-400 text-white bg-[rgb(17,23,26)] shadow-md rounded-md">
                            <div class="flex justify-between items-center border-b border-b-slate-600 relative">
                                <span class="border-r border-r-slate-600 rounded-sm px-4 py-1 shadow-2xl">Response</span>
                                <i 
                                :class="[
                                    restApi[5].iconclipboard,
                                    'text-slate-300 cursor-pointer hover:text-slate-200 mr-2'
                                ]"
                                @click="copyJson(5)">
                                </i>
                            </div>
                            <div class="overflow-auto font-medium p-3 text-sm">
                                <code class="break-all">
                                    <div>
                                        {
                                    </div>
                                    <div class="pl-8">
                                        "status": "{{ restApi[5].response.status }}",
                                    </div>
                                    <div class="pl-8">
                                        "campaign_id": {{ restApi[5].response.campaign_id }},
                                    </div>
                                    <div class="pl-8">
                                        "message": "{{ restApi[5].response.message }}",
                                    </div>
                                    <div class="pl-8">
                                        "status_code": {{ restApi[5].response.status_code }}
                                    </div>
                                    <div>
                                        }
                                    </div>
                                </code>
                            </div>
                            </div>
                        </div>
                        <!-- KOTAK RESPONSE -->
                    </div>
                    <!-- ROUTE -->
                </div>
            </article>
        </section>
    </main>
</template>