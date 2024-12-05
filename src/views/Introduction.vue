<script setup>

</script>

<template>
  <main>

    <header>
      <h1 class="text-2xl font-semibold">Create Token</h1>

      <p class="mt-3">
        Before using other APIs, you need to create a token using your Client ID and Secret ID. 
        If you do not have a Client ID and Secret ID, you must first register as an agency on the 
        <a target="_blank" href="https://app.emmsandbox.com/agency-register" class="underline italic text-blue-700">Exatch Match Marketing</a> 
        website. This token will expire after 30 minutes. When the token expires, you will need to create a new one. 
        The generated token will be used as the Bearer Token.
      </p>
    </header>

    <section class="mt-5">
      <article class="border border-black h-16 px-1 py-10 flex items-center">
  
        <div class="border border-blue-500 w-1/2 h-10 p-2">
          
        </div>
  
        <div class="border border-green-500 w-1/2 h-10 p-2">
  
        </div>
  
      </article>
    </section>


  </main>
</template>
