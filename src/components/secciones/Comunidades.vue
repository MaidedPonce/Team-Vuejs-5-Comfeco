<template>
  <div>
      <div class="bg-gray-300 p-4">
        <section class="space-y-4">
          <div class="flex justify-between">
            <h3 class="text-xl font-semibold">Comunidades</h3>
            <a href="#" class="text-blue-500 font-semibold">Ver mas</a>
          </div>
        </section>
        <div class="flex py-3 space-x-2 border-b border-purple-500">
          <figure class="w-12 h-12 rounded-full overflow-hidden">
            <img src="../../assets/avatar.jpg" alt="avatar" />
          </figure>
          <div>
            <h4 class="text-lg font-semibold leading-none">
              Comunidad de Programadores
            </h4>
            <a href="#" class="text-sm text-right text-blue-500 font-semibold"
              >Unirme</a
            >
          </div>
        </div>
        <div class="flex py-3 space-x-2 border-b border-purple-500">
          <figure class="w-12 h-12 rounded-full overflow-hidden">
            <img src="../../assets/avatar.jpg" alt="avatar" />
          </figure>
          <div>
            <h4 class="text-lg font-semibold leading-none">
              El lenguaje de los programadores
            </h4>
            <a href="#" class="text-sm text-right text-blue-500 font-semibold"
              >Unirme</a
            >
          </div>
        </div>
        <div
          class="flex items-center py-3 space-x-2 border-b border-purple-500"
        >
          <figure class="w-12 h-12 rounded-full overflow-hidden">
            <img src="../../assets/avatar.jpg" alt="avatar" />
          </figure>
          <div class="w-full">
            <h4 class="text-lg font-semibold leading-none">
              Latam Dev
            </h4>
            <a
              href="#"
              class="w-full text-sm text-right text-blue-500 font-semibold"
              >Unirme</a
            >
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Comunidades'
}
</script>

<style>

</style>