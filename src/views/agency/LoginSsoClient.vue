<script setup>
import { ElNotification } from 'element-plus';
import { ref } from 'vue';

// variabel
const restApi = ref([
  {
    id: 0,
    name: 'SSO Login Client',
    slug: 'sso-login-client',
    endpoint: '/sso/login/client',
    url: `https://data.emmsandbox.com/api/v1/developer/sso/login/client`,
    method: 'POST',
    open: false,
    response: {
      status: 'success',
      message: 'Access Login With SSO Available. Please not that, This link can only be used once and will expire afterward',
      url: 'https://asn.emmsandbox.com/sso?token=c24172be64e4649015e18c5558ba08ec2b7ab1c0f11af19818a44fef7d5bc697d06a892fcd73972b7afd81b61e792273a100',
      status_code: 200,
    },
    iconclipboard: 'fa-solid fa-clipboard'
  }
]);
// variabel

// method
const openFullUrl = () => {
  restApi.value[0].open = !restApi.value[0].open;
}

const copyUrl = (value) => {
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

const copyJson = (value) => {
  const textarea = document.createElement("textarea");
  textarea.value = JSON.stringify(value, null, 2);
  document.body.appendChild(textarea);
  textarea.select();
  
  try {
    document.execCommand("copy");

    restApi.value[0].iconclipboard = 'fa-solid fa-clipboard-check';
    ElNotification({ type: "success", title: 'Success', message: 'Copy Clipboard Success' });

    setTimeout(() => {
      restApi.value[0].iconclipboard = 'fa-solid fa-clipboard';
    }, 1000);

  } catch (err) {
    console.error("Failed to copy text: ", err);
    ElNotification({ type: "error", title: 'Error', message: err });
  }

  document.body.removeChild(textarea);
}
</script>

<template>
    <main>
        <section>
            <h1 class="text-3xl font-semibold">Login SSO Client</h1> 
            
            <p class="mt-2"> This API allows clients to log in seamlessly using only their <code>user_id</code>, without the need for additional login credentials. By using this endpoint, you can grant clients direct access to the designated URL securely and efficiently. This API is specifically designed to simplify client authentication and enhance the user experience in your agency's system. </p>
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
                        </ul>
                    </div>
                </div>
                <!-- PARAMETER -->

                <!-- ROUTE -->
                <div class="w-full md:w-[65%] flex flex-col justify-start gap-2">
                    <!-- KOTAK ROUTE -->
                    <div class="relative">
                        <div class="h-12 px-2 flex justify-start items-center gap-3 bg-[rgb(17,23,26)] text-white cursor-pointer rounded" @click="openFullUrl">
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
                            <p class="break-all cursor-pointer py-2 px-2 hover:bg-[rgba(230,230,230)]" @click="copyUrl(restApi[0].url)">{{ restApi[0].url }}</p>
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
                                    @click="copyJson(restApi[0].response)">
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
                                        "message": "{{ restApi[0].response.message }}",
                                    </div>
                                    <div class="pl-8">
                                        "url": "{{ restApi[0].response.url }}",
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
            </article>
        </section>
    </main>
</template>