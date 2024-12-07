<script setup>
import rootApiKeyImage from "@/assets/img/agency/api-key.png";
import { ElNotification } from "element-plus";
import { onMounted, ref } from "vue";
import { initStore } from "@/stores/store";

const store = initStore();

// variabel
const restApi = ref([
  {
    id: 0,
    name: 'Create Token',
    slug: 'create-token',
    url: 'https://app.emmsandbox.com/api/v1/developer/create/token',
    open: false,
    response: {
      status: 'success',
      token: "20afd8972da5b1f8b0cd9f561281715c7a27aa37f6dda23817dd909124e8355c0e54e0b287e341ef",
      expired_at: 1733540670,
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
// method

</script>

<template>
  <main>

    <section>
      <h1 class="text-3xl font-semibold">Create Token</h1>
  
      <p class="mt-2">
        Before using other APIs, you need to create a token using your Client ID and Secret ID. 
        If you do not have a Client ID and Secret ID, you must first register as an agency on the 
        <a target="_blank" href="https://app.emmsandbox.com/agency-register" class="underline italic text-blue-700">Exatch Match Marketing</a> 
        website. This token will expire after 30 minutes. When the token expires, you will need to create a new one. 
        The generated token will be used as the Bearer Token.
      </p>
    </section>

    <section class="mt-7">
      <article class="">
        <img :src="rootApiKeyImage" alt="">
      </article>
    </section>

    <section class="mt-7">
      <article class="flex flex-col justify-center md:flex-row gap-5 md:gap-10">
        <div class="w-full md:w-[35%] flex flex-col gap-4">
          <div class="w-full">
            <div class="border-b border-b-neutral-400 pb-1">
              <h4 class="text-neutral-700">Body Parameter</h4>
            </div>
  
            <ul class="mt-2 class flex flex-col gap-1">
              <li>
                <h3>client_id</h3>
                <div class="pl-3">
                  <h4>- required</h4>
                  <h4>- text</h4>
                </div>    
              </li>
              <li>
                <h3>secret_id</h3>
                <div class="pl-3">
                  <h4>- required</h4>
                  <h4>- text</h4>
                </div>    
              </li>
            </ul>
          </div>
        </div>
  
        <div class="w-full md:w-[65%] flex flex-col justify-start gap-2">
          <!-- KOTAK ROUTE -->
          <div class="relative">
            <div class="h-12 px-2 flex justify-start items-center gap-3 bg-[rgb(17,23,26)] text-white cursor-pointer rounded" @click="openFullUrl">
              <p class="border border-neutral-500 bg-yellow-500 p-0.5">
                POST
              </p>
              <p class="text-base -mt-0.5">
                /create/token
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
              <p class="break-all cursor-pointer py-2 px-2 hover:bg-[rgba(240,240,240)]" @click="copyUrl(restApi[0].url)">{{ restApi[0].url }}</p>
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
                    "status": "success",
                  </div>
                  <div class="pl-8">
                    "token": "20afd8972da5b1f8b0cd9f561281715c7a27aa37f6dda23817dd909124e8355c0e54e0b287e341ef",
                  </div>
                  <div class="pl-8">
                    "expired_at": 1733540670
                  </div>
                  <div class="pl-8">
                    "status_code": 200
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
      </article>
    </section>


  </main>
</template>
