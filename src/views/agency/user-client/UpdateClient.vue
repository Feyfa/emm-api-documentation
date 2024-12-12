<script setup>
import { ElNotification } from 'element-plus';
import { ref } from 'vue';

// variabel
const restApi = ref([
    {
        id: 0,
        name: 'Update Client',
        slug: 'update-client',
        endpoint: '/update/user/client/{userid}',
        url: `https://data.emmsandbox.com/api/v1/developer/update/user/client/{userid}`,
        method: 'PUT',
        open: false,
        request: {
            email: 'dimas_update@gmail.com'
        },
        response: {
            status: 'success',
            message: 'Client Updated Successfully.',
            status_code: 200,
        },
        iconclipboard: {
            request: 'fa-solid fa-clipboard',
            response: 'fa-solid fa-clipboard',
        }
    }
]);
// variabel

// method
const openFullUrl = (index) => {
    restApi.value[index].open = !restApi.value[index].open;
}

const copyUrl = (index) => {
    const url = restApi.value[index].url;

    const textarea = document.createElement("textarea");
    textarea.value = url;
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
            <h1 class="text-3xl font-semibold">Update User Client</h1>
  
            <p class="mt-2">
                This API allows you to update the information of clients under your agency. Using this client endpoint and user_id, you can change the client details like their email. This API is specifically designed to simplify the process of managing and maintaining up-to-date client records in your agency system.
            </p>
        </section>

        <section class="mt-7">
            <article class="flex flex-col justify-center md:flex-row gap-5 md:gap-10">
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
                            <h4 class="text-neutral-700">Route Parameter</h4>
                        </div>
            
                        <ul class="mt-2 class flex flex-col gap-1">
                            <li>
                                <h3>userid</h3>
                                <div class="pl-3">
                                    <h4>- required</h4>
                                    <h4>- integer</h4>
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
            </article>
        </section>
    </main>
</template>