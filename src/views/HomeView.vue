<script>
  import Accordion from "@/components/Accordion.vue";

  export default {
    components: {
      Accordion
    },
  };
</script>

<template>
  <main>
    <div class="my-24 px-6">
      <div class="max-w-4xl mx-auto mb-12">
            <h1 class="mt-6 text-5xl xl:text-6xl font-semibold text-gray-950 dark:text-white">Tailus <br> <span class="text-gray-500">Vue Boilerplate</span></h1>
            <p class="mt-4 text-gray-700 dark:text-gray-300 text-lg">Start your Vue.js project with Tailus Themer and Radix-Vue installed</p>
        </div>
      <div class="sm:border flex items-center justify-center aspect-video max-w-4xl mx-auto sm:rounded-[--card-border-radius] sm:border-[--ui-light-border-color] sm:dark:border-[--ui-dark-border-color] sm:dark:bg-gray-900/50">
        <Accordion />
      </div>
    </div>
  </main>
</template>
