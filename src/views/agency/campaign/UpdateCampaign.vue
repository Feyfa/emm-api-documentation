<script setup>
import { ElNotification } from 'element-plus';
import { ref } from 'vue';

// variabel
const restApi = ref([
    {
        id: 0,
        name: 'Update Campaign Local',
        slug: 'update-campaign-local',
        endpoint: '/update/campaign/local',
        url: 'https://data.emmsandbox.com/api/v1/developer/update/campaign/local',
        method: 'PUT',
        open: false,
        request: {
            campaign_id: 11111111,
            campaign_name: 'Campaign Dimas Local Update',
            url: 'https://chatgpt.com'
        },
        response: {
            status: 'success',
            message: 'Update Campaign Successfully',
            status_code: 200,
        },
        iconclipboard: {
            request: 'fa-solid fa-clipboard',
            response: 'fa-solid fa-clipboard',
        }
    },
    {
        id: 1,
        name: 'Update Campaign Locator',
        slug: 'update-campaign-locator',
        endpoint: '/update/campaign/locator',
        url: 'https://data.emmsandbox.com/api/v1/developer/update/campaign/locator',
        method: 'PUT',
        open: false,
        request: {
            campaign_id: 11111112,
            campaign_name:  'Campaign Dimas Locator Update',
            search_keyword: 'youtube,google,facebook,instagram',
            context_keyword: 'youtube,google,facebook,instagram',
            end_date_campaign: '2025-10-10',
        },
        response: {
            status: 'success',
            message: 'Update Campaign Successfully',
            status_code: 200,
        },
        iconclipboard: {
            request: 'fa-solid fa-clipboard',
            response: 'fa-solid fa-clipboard',
        }
    },
    {
        id: 2,
        name: 'Update Campaign Enhance',
        slug: 'update-campaign-enhance',
        endpoint: '/update/campaign/enhance',
        url: 'https://data.emmsandbox.com/api/v1/developer/update/campaign/enhance',
        method: 'PUT',
        open: false,
        request: {
            campaign_id: 11111113,
            campaign_name: 'Campaign Dimas Enhance Update',
            search_keyword: 'bugatti,mclaren,bmw,ferarri,lamborgini'
        },
        response: {
            status: 'success',
            message: 'Update Campaign Successfully',
            status_code: 200,
        },
        iconclipboard: {
            request: 'fa-solid fa-clipboard',
            response: 'fa-solid fa-clipboard',
        }
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

    restApi.value[index].open = false;

    document.body.removeChild(textarea);
}

const copyJson = (index, value) => {
    const json = restApi.value[index][value];

    const textarea = document.createElement("textarea");
    textarea.value = JSON.stringify(json, null, 2);
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand("copy");

        restApi.value[index].iconclipboard[value] = 'fa-solid fa-clipboard-check';
        ElNotification({ type: "success", title: 'Success', message: 'Copy Clipboard Success' });

        setTimeout(() => {
            restApi.value[index].iconclipboard[value] = 'fa-solid fa-clipboard';
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
            <h1 class="text-3xl font-semibold">Update Campaign</h1>

            <p class="mt-2">
                This API allows you to update existing campaigns for your agency. Using this endpoint, you can modify campaign details such as campaign name, URL, search keywords, context keywords, end date, and more. This API is specifically designed to help you efficiently manage and optimize campaigns to align with your agency's objectives.
            </p>

        </section>

        <section class="py-7 border-b border-black">
            <article>
                <h1 class="text-xl font-semibold">1. Campaign Local</h1>
            </article>
            
            <article class="mt-5">
                <div class="flex flex-col justify-center md:flex-row gap-5 md:gap-10 mt-2">
                    <!-- PARAMETER -->
                    <div class="w-full md:w-[35%] flex flex-col gap-4">
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
                                    <h3>campaign_id</h3>
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
                            <div class="h-12 px-2 flex justify-start items-center gap-3 bg-[rgb(17,23,26)] text-white cursor-pointer rounded" @click="openFullUrl(0)">
                                <p 
                                    class="border border-neutral-800 p-0.5"
                                    :class="{'bg-blue-500': restApi[0].method == 'PUT'}">
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
    
                        <!-- KOTAK REQUEST DAN RESPONSE -->
                        <div class="flex flex-col gap-2">
                            <div class="w-full mx-auto border border-neutral-400 text-white bg-[rgb(17,23,26)] shadow-md rounded-md">
                                <div class="flex justify-between items-center border-b border-b-slate-600 relative">
                                    <span class="border-r border-r-slate-600 rounded-sm px-4 py-1 shadow-2xl">Request</span>
                                    <i 
                                        :class="[
                                            restApi[0].iconclipboard.request,
                                            'text-slate-300 cursor-pointer hover:text-slate-200 mr-2'
                                        ]"
                                        @click="copyJson(0, 'request')">
                                    </i>
                                </div>
                                <div class="overflow-auto font-medium p-3 text-sm">
                                    <pre class="whitespace-pre-wrap break-words"><code>{{ JSON.stringify(restApi[0].request, null, 4) }}</code></pre>
                                </div>
                            </div>

                            <div class="w-full mx-auto border border-neutral-400 text-white bg-[rgb(17,23,26)] shadow-md rounded-md">
                                <div class="flex justify-between items-center border-b border-b-slate-600 relative">
                                    <span class="border-r border-r-slate-600 rounded-sm px-4 py-1 shadow-2xl">Response</span>
                                    <i 
                                        :class="[
                                            restApi[0].iconclipboard.response,
                                            'text-slate-300 cursor-pointer hover:text-slate-200 mr-2'
                                        ]"
                                        @click="copyJson(0, 'response')">
                                    </i>
                                </div>
                                <div class="overflow-auto font-medium p-3 text-sm">
                                    <pre class="whitespace-pre-wrap break-words"><code>{{ JSON.stringify(restApi[0].response, null, 4) }}</code></pre>
                                </div>
                            </div>
                        </div>
                        <!-- KOTAK REQUEST DAN RESPONSE -->
                    </div>
                    <!-- ROUTE -->
                </div>
            </article>
        </section>

        <section class="py-7 border-b border-black">
            <article>
                <h1 class="text-xl font-semibold">2. Campaign Locator</h1>
            </article>
            
            <article class="mt-5">
                <div class="flex flex-col justify-center md:flex-row gap-5 md:gap-10 mt-2">
                    <!-- PARAMETER -->
                    <div class="w-full md:w-[35%] flex flex-col gap-4">
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
                                    <h3>campaign_id</h3>
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
                            <div class="h-12 px-2 flex justify-start items-center gap-3 bg-[rgb(17,23,26)] text-white cursor-pointer rounded" @click="openFullUrl(1)">
                                <p 
                                    class="border border-neutral-800 p-0.5"
                                    :class="{'bg-blue-500': restApi[1].method == 'PUT'}">
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
    
                        <!-- KOTAK REQUEST DAN RESPONSE -->
                        <div class="flex flex-col gap-2">
                            <div class="w-full mx-auto border border-neutral-400 text-white bg-[rgb(17,23,26)] shadow-md rounded-md">
                                <div class="flex justify-between items-center border-b border-b-slate-600 relative">
                                    <span class="border-r border-r-slate-600 rounded-sm px-4 py-1 shadow-2xl">Request</span>
                                    <i 
                                    :class="[
                                        restApi[1].iconclipboard.request,
                                        'text-slate-300 cursor-pointer hover:text-slate-200 mr-2'
                                    ]"
                                    @click="copyJson(1, 'request')">
                                    </i>
                                </div>
                                <div class="overflow-auto font-medium p-3 text-sm">
                                    <pre class="whitespace-pre-wrap break-words"><code>{{ JSON.stringify(restApi[1].request, null, 4) }}</code></pre>
                                </div>
                            </div>

                            <div class="w-full mx-auto border border-neutral-400 text-white bg-[rgb(17,23,26)] shadow-md rounded-md">
                                <div class="flex justify-between items-center border-b border-b-slate-600 relative">
                                    <span class="border-r border-r-slate-600 rounded-sm px-4 py-1 shadow-2xl">Response</span>
                                    <i 
                                    :class="[
                                        restApi[1].iconclipboard.response,
                                        'text-slate-300 cursor-pointer hover:text-slate-200 mr-2'
                                    ]"
                                    @click="copyJson(1, 'response')">
                                    </i>
                                </div>
                                <div class="overflow-auto font-medium p-3 text-sm">
                                    <pre class="whitespace-pre-wrap break-words"><code>{{ JSON.stringify(restApi[1].response, null, 4) }}</code></pre>
                                </div>
                            </div>
                        </div>
                        <!-- KOTAK REQUEST DAN RESPONSE -->
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
                                    <h3>campaign_id</h3>
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
                            <div class="h-12 px-2 flex justify-start items-center gap-3 bg-[rgb(17,23,26)] text-white cursor-pointer rounded" @click="openFullUrl(2)">
                                <p 
                                    class="border border-neutral-800 p-0.5"
                                    :class="{'bg-blue-500': restApi[2].method == 'PUT'}">
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
    
                        <!-- KOTAK REQUEST DAN RESPONSE -->
                        <div class="flex flex-col gap-2">
                            <div class="w-full mx-auto border border-neutral-400 text-white bg-[rgb(17,23,26)] shadow-md rounded-md">
                                <div class="flex justify-between items-center border-b border-b-slate-600 relative">
                                    <span class="border-r border-r-slate-600 rounded-sm px-4 py-1 shadow-2xl">Request</span>
                                    <i 
                                    :class="[
                                        restApi[2].iconclipboard.request,
                                        'text-slate-300 cursor-pointer hover:text-slate-200 mr-2'
                                    ]"
                                    @click="copyJson(2, 'request')">
                                    </i>
                                </div>
                                <div class="overflow-auto font-medium p-3 text-sm">
                                    <pre class="whitespace-pre-wrap break-words"><code>{{ JSON.stringify(restApi[2].request, null, 4) }}</code></pre>
                                </div>
                            </div>

                            <div class="w-full mx-auto border border-neutral-400 text-white bg-[rgb(17,23,26)] shadow-md rounded-md">
                                <div class="flex justify-between items-center border-b border-b-slate-600 relative">
                                    <span class="border-r border-r-slate-600 rounded-sm px-4 py-1 shadow-2xl">Response</span>
                                    <i 
                                    :class="[
                                        restApi[2].iconclipboard.response,
                                        'text-slate-300 cursor-pointer hover:text-slate-200 mr-2'
                                    ]"
                                    @click="copyJson(2, 'response')">
                                    </i>
                                </div>
                                <div class="overflow-auto font-medium p-3 text-sm">
                                    <pre class="whitespace-pre-wrap break-words"><code>{{ JSON.stringify(restApi[2].response, null, 4) }}</code></pre>
                                </div>
                            </div>
                        </div>
                        <!-- KOTAK REQUEST DAN RESPONSE -->
                    </div>
                    <!-- ROUTE -->
                </div>
            </article>
        </section>
    </main>
</template>