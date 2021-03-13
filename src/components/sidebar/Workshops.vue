<template>
  <section class="space-y-4">
    <div class="flex justify-between">
      <h3 class="text-xl font-semibold">Talleres</h3>
      <a href="#" class="text-blue-500 font-semibold">Ver mas</a>
    </div>
    <select
      class="text-gray-600 border border-gray-500 focus:border-purple-400 rounded-md outline-none w-full p-3"
    >
      <option value="">Talleres por areas de conocimiento</option>
      <option value="">VueJs</option>
      <option value="">ReactJs</option>
      <option value="">Svelte</option>
      <option value="">Angular</option>
    </select>
    <div class="border border-purple-300">
      <h6 class="text-white font-semibold bg-purple-500 px-2 py-1">Hoy</h6>
      <div class="px-2">
        <workshop v-for="index in [1, 2, 3, 4]" :key="index" />
      </div>
    </div>
  </section>
</template>

<script>
import Workshop from './Workshop.vue';
export default {
  name: 'Workshops',
  components: { Workshop },
};
</script>
