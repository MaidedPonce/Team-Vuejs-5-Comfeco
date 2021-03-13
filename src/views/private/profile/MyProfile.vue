<template>
  <section
    class="w-11/12 md:w-8/12 lg:w-11/12 m-auto flex-grow py-16 grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-x-12"
  >
    <div class="text-center border border-purple-300">
      <figure class="w-48 m-auto p-4">
        <img
          class="rounded-full border border-gray-500"
          src="../../../assets/avatar.jpg"
          alt="Homero Simpson"
        />
      </figure>
      <div class="p-4">
        <h2 class="text-lg font-bold">Homero J. Simpson</h2>
        <span class="text-sm text-gray-600">Frontend Developer / UI / UX</span>
        <p class="text-sm font-semibold my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit,
          quia porro vitae mollitia incidunt sint nam quam ratione.
        </p>
      </div>
      <div class="flex justify-between py-2 px-4 border-t-2 border-purple-400">
        <div class="w-10 h-10 bg-gray-500 rounded-full"></div>
        <div class="w-10 h-10 bg-gray-500 rounded-full"></div>
        <div class="w-10 h-10 bg-gray-500 rounded-full"></div>
        <div class="w-10 h-10 bg-gray-500 rounded-full"></div>
      </div>
    </div>
    <div class="col-span-3 space-y-4">
      <div class="bg-gray-400 p-4">
        <h3 class="text-lg font-semibold">Insignias</h3>
        <div class="w-4/6 m-auto flex justify-between">
          <div class="w-24 h-24 bg-green-500 rounded-full"></div>
          <div class="w-24 h-24 bg-green-500 rounded-full"></div>
          <div class="w-24 h-24 bg-green-500 rounded-full"></div>
          <div class="w-24 h-24 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <div class="">
        <h3 class="text-lg font-semibold p-4">Actividad Reciente</h3>
        <div class="space-y-2">
          <div class="p-4 flex items-center border border-gray-400 shadow-md">
            <div class="flex-grow">
              Te has unido al evento Community Fest and Code
            </div>
            <figure class="w-14 h-14 bg-green-800"></figure>
          </div>
          <div class="p-4 flex items-center border border-gray-400 shadow-md">
            <div class="flex-grow">
              Te has unido al evento Community Fest and Code
            </div>
            <figure class="w-14 h-14 bg-green-800"></figure>
          </div>
        </div>
      </div>
    </div>
    <div class="h-full p-4">
      Eventos de tu interes
    </div>
  </section>
</template>
