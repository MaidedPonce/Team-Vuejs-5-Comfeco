<template>
  <section class="flex-grow py-16 w-10/12 md:w-8/12 lg:w-2/5 m-auto space-y-4">
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

    <div class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Nick</label
          >
          <input
            v-model="user.primary_info.nickname"
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
            v-model="user.primary_info.email"
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
            v-model="user.secondary_info.gender"
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
            v-model="user.secondary_info.birth"
            :disabled="isLoading"
            type="date"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Pais</label
          >
          <input
            v-model="user.secondary_info.country"
            :disabled="isLoading"
            type="text"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Area de conocimiento</label
          >

          <select v-model="user.secondary_info.knowledge_area" class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md">
            <option disabled value="">Seleccione un elemento</option>
            <option>frontend</option>
            <option>backend</option>
            <option>DevOps</option>
            <option>Video Game Developers</option>
            <option>Database Developer</option>
            <option>Cloud Computing</option>

          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >facebook.com/</label
          >
          <input
            v-model="user.secondary_info.facebook"
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
            v-model="user.secondary_info.github"
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
            v-model="user.secondary_info.linkedin"
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
            v-model="user.secondary_info.twitter"
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
          v-model="user.secondary_info.biography"
          :disabled="isLoading"
          class="w-full h-36 border resize-text-gray-700 none border-purple-700 p-1 px-2 rounded-md"
        ></textarea>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Nueva Contraseña</label
          >
          <input
            v-model="user.password"
            :disabled="isLoading"
            type="password"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Confirmar Contrasena</label
          >
          <input
            :disabled="isLoading"
            type="password"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
        <div class="space-y-1">
          <label for="" class="text-sm text-gray-700 font-semibold block"
            >Contraseña</label
          >
          <input
            v-model="user.old_password"
            :disabled="isLoading"
            type="password"
            class="w-full text-gray-700 border border-purple-700 px-2 py-1 rounded-md"
          />
        </div>
      </div>

      <div>
        <button
          @click="reauthenticate"
          class="w-full text-gray-300 py-2 rounded-lg bg-purple-500"
          :disabled="isLoading"
          v-text="isLoading ? 'Actualizando' : 'Guardar Cambios'"
        ></button>
      </div>
    </div>
  </section>
</template>

<script>
import { auth, db, emailProvider } from '../../../config/firebase';

export default {
  name: 'Edit',
  data() {
    return {
      isLoading: false,
      user: {
        primary_info:{
          uid: '',
          nickname: '',
          email: '',
          password: '',
        },

        secondary_info:{
          gender: '',
          birth: '',
          country: '',
          facebook: '',
          github: '',
          linkedin: '',
          twitter: '',
          biography: '',
          knowledge_area: '',
        },

        old_email: '',
        old_password: '',
      },
    };
  },

  mounted() {
    this.getCurrentUserData();
  },

  methods: {
    getCurrentUserData: async function() {
      const authUser = auth.currentUser;
      this.user.primary_info.uid = authUser.uid;
      this.user.primary_info.nickname = authUser.displayName;
      this.user.primary_info.email = authUser.email;
      this.user.old_email = authUser.email;

      const document = await db
        .collection('users')
        .doc(this.user.primary_info.uid)
        .get();

      const user = document.data();

      this.user.secondary_info.gender = user.gender;
      this.user.secondary_info.birth = user.birth;
      this.user.secondary_info.country = user.country;
      this.user.secondary_info.facebook = user.facebook;
      this.user.secondary_info.github = user.github;
      this.user.secondary_info.linkedin = user.linkedin;
      this.user.secondary_info.twitter = user.twitter;
      this.user.secondary_info.biography = user.biography;
      this.user.secondary_info.knowledge_area = user.knowledge_area;
    },

    updateProfile: async function() {
      const authUser = auth.currentUser;
      this.isLoading = true;
      let aviableSociable = false;
      let userInfo = db.collection('users').doc(this.user.primary_info.uid)

      await userInfo.set(this.user.secondary_info);

      await authUser.updateProfile({
        displayName: this.user.primary_info.nickname
      });

      if(this.user.primary_info.email !== this.user.old_email)
        await authUser.updateEmail(this.user.primary_info.email)

      if(this.user.primary_info.password !== '')
        await authUser.updatePassword(this.user.primary_info.password)

      if(this.updateBadge()){
        aviableSociable = true;
      }

      userInfo.collection('badges').doc('Sociable').set({
        aviable: aviableSociable
      })
      
      this.isLoading = false;
      this.user.old_email = this.user.primary_info.email
      this.user.old_password = ''
      this.user.primary_info.password = ''
    },

    reauthenticate: async function(){
      const credential = emailProvider.credential(this.user.old_email, this.user.old_password);

      try {
        await auth.currentUser.reauthenticateWithCredential(credential)
        this.updateProfile()
      } catch(e){
        alert("Inserte la contrasena")
      }
    },

    updateBadge: function(){
      return Object.entries(this.user.secondary_info).filter(function(val){ return val[1] === ''}).length === 0;
    },

  },
};
</script>