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
            v-model="nickname"
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Correo Electronico</label
          >
          <input
            v-model="email"
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
            v-model="info.genero"
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Fecha de nacimiento</label
          >
          <input
            v-model="info.fecha_nacimiento"
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Pais</label
          >
          <input
            v-model="info.pais"
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
            v-model="password"
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
            v-model="info.facebook"
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >github.com/</label
          >
          <input
            v-model="info.github"
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >linkedin.com/in/</label
          >
          <input
            v-model="info.linkedin"
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >twitter.com/</label
          >
          <input
            v-model="info.twitter"
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
          v-model="info.biografia"
          class="w-full h-24 border resize-text-gray-700 none border-purple-700 p-1 rounded-md"
        ></textarea>
      </div>
      <div>
        <button
          @click="guardar"
          class="w-full text-gray-300 py-2 rounded-lg bg-purple-500"
        >
          Guardar Cambios
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { auth, database } from '../../../config/firebase';

export default {
  name: 'Edit',

  data() {
    return {
      nickname: '',
      email: '',
      password: '',

      info: {
        genero: '',
        fecha_nacimiento: '',
        pais: '',
        facebook: '',
        github: '',
        linkedin: '',
        twitter: '',
        biografia: '',
      },
    };
  },

  mounted() {
    let user = auth.currentUser;
    this.nickname = user.displayName;
    this.email = user.email;

    database
      .ref('/users/' + user.uid)
      .once('value')
      .then((snapshot) => {
        this.info.genero = (snapshot.val() && snapshot.val().genero) || '';
        this.info.fecha_nacimiento =
          (snapshot.val() && snapshot.val().fecha_nacimiento) || '';
        this.info.pais = (snapshot.val() && snapshot.val().pais) || '';
        this.info.facebook = (snapshot.val() && snapshot.val().facebook) || '';
        this.info.github = (snapshot.val() && snapshot.val().github) || '';
        this.info.linkedin = (snapshot.val() && snapshot.val().linkedin) || '';
        this.info.twitter = (snapshot.val() && snapshot.val().twitter) || '';
        this.info.biografia =
          (snapshot.val() && snapshot.val().biografia) || '';
      });
  },

  methods: {
    guardar() {
      let usuario_activo = auth.currentUser;

      let updateProfile = usuario_activo.updateProfile({
        displayName: this.nickname,
      });

      let updateEmail = usuario_activo.updateEmail(this.email);
      //let updatePassword = usuario_activo.updatePassword(this.password)
      let updateInfo = database
        .ref('users/' + usuario_activo.uid)
        .set(this.info);

      Promise.all([
        updateProfile,
        updateEmail,
        // updatePassword,
        updateInfo,
      ])
        .then(() => {
          alert('Se ha actualizado el perfil');
        })
        .catch(() => {
          alert('Ingrese password');
        });
    },
  },
};
</script>
