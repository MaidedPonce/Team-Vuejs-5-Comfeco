<template>
  <section class="w-10/12 md:w-8/12 lg:w-2/5 m-auto space-y-4">
    <h3 class="text-2xl text-center font-semibold my-2">Editar Perfil</h3>
    <figure
      class="w-32 h-32 m-auto relative rounded-full overflow-hidden border-4 border-purple-500"
    >
      <img src="../../../assets/avatar.jpg" alt="Homero Simpson" />
      <div
        class="w-full text-center text-white absolute bottom-0 py-1.5 bg-purple-500"
      >
        <button>H</button>
      </div>
    </figure>

    <div class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Nick</label
          >
          <input
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Correo Electronico</label
          >
          <input
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4">
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Genero</label
          >
          <input
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Fecha de nacimiento</label
          >
          <input
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Pais</label
          >
          <input
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Contrasena</label
          >
          <input
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Confirmar Contrasena</label
          >
          <input
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >facebook.com/</label
          >
          <input
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >github.com/</label
          >
          <input
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >linkedin.com/in/</label
          >
          <input
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >twitter.com/</label
          >
          <input
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
      </div>
      <div class="space-y-1">
        <label for="" class="text-sm text-gray-700 font-semibold block"
          >Biografia</label
        >
        <textarea
          class="w-full h-24 border resize-text-gray-700 none border-purple-700 p-1 rounded-md"
        ></textarea>
      </div>
      <div>
        <button class="w-full text-gray-300 py-2 rounded-lg bg-purple-500">
          Guardar Cambios
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Edit',
};
</script>
