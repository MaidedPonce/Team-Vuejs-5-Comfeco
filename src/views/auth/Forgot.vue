<template>
  <div class="flex-grow bg-purple-400">
    <div class="bg-white w-11/12 md:w-3/5 lg:w-2/6 mx-auto my-10 px-6 md:px-10 py-10">
      <div class="text-center mb-10">
        <h2 class="text-4xl font-bold">Recuperar Contrasena</h2>
        <p class="text-3md mt-2">Ingresa tu correo para reestablecer tu contrasena</p>
      </div>
      <div v-if="error" class="bg-red-400 text-center my-2 py-2">
        <span class="text-white">No existe una cuenta con este correo</span>
      </div>
      <form @submit.prevent="send">
        <div class="my-3">
          <label for="" class="block text-gray-600 my-1">Correo electronico</label>
          <input
            v-model.trim="$v.email.$model"
            type="text"
            class="w-full text-gray-700 border border-gray-700 focus:outline-none focus:border-pink-500 px-4 py-2 rounded-md"
            :class="{'border-red-400' : ((!$v.email.required || !$v.email.email) && $v.email.$dirty) }"
            placeholder="example@mail.com"
          />
          <div v-if="$v.$error">
            <span v-if="!$v.email.email && $v.email.$dirty" class="text-xs text-red-400">Ingresa un email valido</span>
            <span v-if="!$v.email.required && $v.email.$dirty" class="text-xs text-red-400">Este campo es requerido</span>
          </div>
        </div>
        <button
          class="w-full bg-yellow-600 hover:bg-yellow-400 text-white font-semibold mt-2 py-3"
          type="submit"
          :disabled="isLoading"
        >
          Reestablecer contrasena
        </button>
      </form>
      <p class="text-gray-600 mt-8 text-center">
        No tienes una cuenta?
        <router-link to="/register" class="text-purple-500 font-semibold">registrate</router-link>
      </p>
    </div>
  </div>
</template>


<script>
import { required, email } from "vuelidate/lib/validators";
import { auth } from "./../../config/firebase";

export default {
  name: "Forgot",
  data() {
    return {
      email: "",
      error: false,
      isLoading: false,
    };
  },

  validations: {
    email: {
      required,
      email,
    },
  },

  methods: {
    send() {
      this.$v.$touch();
      this.isLoading = true;

      if (!this.$v.$invalid) {
        auth.sendPasswordResetEmail(this.email)
          .then(() =>{
            this.$router.replace("/");
          })
          .catch(() =>{
            this.error = true;
            this.isLoading = false;
          });
      } else {
        this.isLoading = false;
      }
    },
  },
};
</script>