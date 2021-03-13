<template>
  <section>
    <div class="p-4">
      <section class="space-y-4">
        <div class="flex justify-between">
          <h3 class="text-xl font-semibold">Comunidades</h3>
          <a href="#" class="text-blue-500 font-semibold">Ver mas</a>
        </div>
      </section>
      <community v-for="index in [1, 2, 3, 4, 5]" :key="index" />
    </div>
  </section>
</template>

<script>
import Community from './Community';
export default {
  components: {
    Community,
  },
};
</script>
