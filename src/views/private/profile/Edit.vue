<template>
  <section class="flex-grow py-16 w-10/12 md:w-8/12 lg:w-2/5 m-auto space-y-4">
    <h3 class="text-2xl text-center font-semibold my-2">Editar Perfil</h3>
    <figure
      class="w-32 h-32 m-auto relative rounded-full overflow-hidden border-4 border-purple-500"
    >
      <img :src="user.photo" :alt="user.name" />
      <div
        class="w-full text-center text-white absolute bottom-0 py-1.5 bg-purple-500"
      >
        <button>H</button>
      </div>
    </figure>

    <div class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Nick</label
          >
          <input
            v-model="user.nickname"
            :disabled="isLoading"
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Correo Electronico</label
          >
          <input
            v-model="user.email"
            :disabled="isLoading"
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
            v-model="user.gender"
            :disabled="isLoading"
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Fecha de nacimiento</label
          >
          <input
            v-model="user.birth"
            :disabled="isLoading"
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Pais</label
          >
          <input
            v-model="user.country"
            :disabled="isLoading"
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
            v-model="user.password"
            :disabled="isLoading"
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Confirmar Contrasena</label
          >
          <input
            :disabled="isLoading"
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
            v-model="user.facebook"
            :disabled="isLoading"
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >github.com/</label
          >
          <input
            v-model="user.github"
            :disabled="isLoading"
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >linkedin.com/in/</label
          >
          <input
            v-model="user.linkedin"
            :disabled="isLoading"
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >twitter.com/</label
          >
          <input
            v-model="user.twitter"
            :disabled="isLoading"
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
      </div>
      <div class="space-y-1">
        <label class="text-sm text-gray-700 font-semibold block"
          >Biografia</label
        >
        <textarea
          v-model="user.biography"
          :disabled="isLoading"
          class="w-full h-36 border resize-text-gray-700 none border-purple-700 p-1 px-2 rounded-md"
        ></textarea>
      </div>
      <div>
        <button
          @click="updateProfile"
          class="w-full text-gray-300 py-2 rounded-lg bg-purple-500"
          :disabled="isLoading"
          v-text="isLoading ? 'Actualizando' : 'Guardar Cambios'"
        ></button>
      </div>
    </div>
  </section>
</template>

<script>
import { auth, db } from '../../../config/firebase';

export default {
  name: 'Edit',
  data() {
    return {
      isLoading: false,
      user: {
        uid: '',
        nickname: '',
        email: '',
        password: '',
        photho: '',

        gender: '',
        birth: '',
        country: '',
        facebook: '',
        github: '',
        linkedin: '',
        twitter: '',
        biography: '',
      },
    };
  },

  mounted() {
    this.getCurrentUserData();
  },

  methods: {
    getCurrentUserData: async function() {
      const authUser = auth.currentUser;
      this.user.uid = authUser.uid;
      this.user.nickname = authUser.displayName;
      this.user.email = authUser.email;
      this.user.photo = authUser.photoURL;

      const document = await db
        .collection('users')
        .doc(this.user.uid)
        .get();

      const user = document.data();

      this.user.gender = user.gender;
      this.user.birth = user.birth;
      this.user.country = user.country;
      this.user.facebook = user.facebook;
      this.user.github = user.github;
      this.user.linkedin = user.linkedin;
      this.user.twitter = user.twitter;
      this.user.biography = user.biography;
    },
    updateProfile: async function() {
      this.isLoading = true;
      const user = {
        gender: this.user.gender,
        birth: this.user.birth,
        country: this.user.country,
        biography: this.user.biography,
        facebook: this.user.facebook,
        twitter: this.user.twitter,
        linkedin: this.user.linkedin,
        github: this.user.github,
      };

      await db
        .collection('users')
        .doc(this.user.uid)
        .set(user);

      this.isLoading = false;
    },
  },
};
</script>
