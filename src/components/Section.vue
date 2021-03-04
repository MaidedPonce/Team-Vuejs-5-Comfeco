<template>
  <section class="space-y-4">
    <div class="flex justify-between">
      <h3 class="text-xl font-semibold">Talleres</h3>
      <a href="#" class="text-blue-500 font-semibold">Ver mas</a>
    </div>
    <select class="text-gray-600 w-full p-3" name="" id="">
      <option value="">Talleres por areas de conocimiento</option>
      <option value="">VueJs</option>
      <option value="">ReactJs</option>
      <option value="">Svelte</option>
      <option value="">Angular</option>
    </select>
    <div class="border border-purple-300">
      <h6 class="text-white font-semibold bg-purple-500 px-2 py-1">Hoy</h6>
      <div class="px-2">
        <div class="flex py-3 space-x-2 border-t border-purple-500">
          <figure class="w-8 h-8 rounded-full overflow-hidden border">
            <img src="../assets/avatar.jpg" alt="avatar" />
          </figure>
          <div>
            <h4 class="text-lg font-semibold leading-none">
              State Of Javascript
            </h4>
            <p class="text-sm text-gray-700">16:00 PM</p>
            <p class="font-semibold">
              By <a href="#" class="text-blue-500">Juan Pablo de la Torre</a>
            </p>
          </div>
        </div>
        <div class="flex py-3 space-x-2 border-t border-purple-500">
          <figure class="w-8 h-8 rounded-full overflow-hidden border">
            <img src="../assets/avatar.jpg" alt="avatar" />
          </figure>
          <div>
            <h4 class="text-lg font-semibold leading-none">
              IA con Python
            </h4>
            <p class="text-sm text-gray-700">22:00 PM</p>
            <p class="font-semibold">
              By <a href="#" class="text-blue-500">Yesi Days</a>
            </p>
          </div>
        </div>
        <div class="flex py-3 space-x-2 border-t border-purple-500">
          <figure class="w-8 h-8 rounded-full overflow-hidden border">
            <img src="../assets/avatar.jpg" alt="avatar" />
          </figure>
          <div>
            <h4 class="text-lg font-semibold leading-none">
              State Of Javascript
            </h4>
            <p class="text-sm text-gray-700">16:00 PM</p>
            <p class="font-semibold">
              By <a href="#" class="text-blue-500">Juan Pablo de la Torre</a>
            </p>
          </div>
        </div>
        <div class="flex py-3 space-x-2 border-t border-purple-500">
          <figure class="w-8 h-8 rounded-full overflow-hidden border">
            <img src="../assets/avatar.jpg" alt="avatar" />
          </figure>
          <div>
            <h4 class="text-lg font-semibold leading-none">
              IA con Python
            </h4>
            <p class="text-sm text-gray-700">22:00 PM</p>
            <p class="font-semibold">
              By <a href="#" class="text-blue-500">Yesi Days</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
};
</script>
