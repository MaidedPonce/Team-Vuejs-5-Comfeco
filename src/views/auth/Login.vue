<template>
  <div class="flex-grow bg-purple-400 py-16">
    <div
      class="bg-white w-11/12 md:w-3/5 lg:w-2/6 mx-auto my-10 px-6 md:px-10 py-10"
    >
      <div class="text-center mb-8">
        <h2 class="text-gray-700 text-4xl font-bold">Login</h2>
        <p class="text-3md mt-4">
          Ingresa tus credenciales para acceder a la plataforma
        </p>
      </div>
      <div v-if="loginError" class="bg-red-400 text-center my-2 py-2">
        <span class="text-white"
          >El correo o la contrasena son incorrectos</span
        >
      </div>
      <form @submit.prevent="login">
        <div class="my-3">
          <label for="" class="block text-gray-600 my-1"
            >Correo electronico</label
          >
          <input
            v-model.trim="$v.email.$model"
            type="text"
            class="w-full text-gray-700 border border-gray-700 focus:outline-none focus:border-pink-500 px-4 py-2 rounded-md"
            :class="{
              'border-red-400':
                (!$v.email.required || !$v.email.email) && $v.email.$dirty,
            }"
            placeholder="example@mail.com"
          />
          <div>
            <span
              v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty"
              class="text-xs text-red-400"
              >Un correo valido es requerido</span
            >
          </div>
        </div>
        <div class="my-3">
          <label for="" class="block text-gray-600 my-1">Contrasena</label>
          <input
            v-model.trim="$v.password.$model"
            type="password"
            class="w-full text-gray-700 border border-gray-700 focus:outline-none focus:border-pink-500 px-4 py-2 rounded-md"
            :class="{
              'border-red-400':
                (!$v.email.required || !$v.email.email) && $v.email.$dirty,
            }"
            placeholder="**************"
          />
          <div>
            <span
              v-if="!$v.password.required && $v.password.$dirty"
              class="text-xs text-red-400"
              >La contrasena es requerida</span
            >
          </div>
        </div>
        <div class="flex justify-between my-4 md:my-6">
          <div>
            <input type="checkbox" id="remember" />
            <label for="remember" class="text-gray-600 ml-3">Recordarme</label>
          </div>
          <div>
            <router-link
              to="/forgot-password"
              class="text-purple-500 font-semibold"
              >Olvidaste tu contrasena?</router-link
            >
          </div>
        </div>

        <button
          class="w-full bg-yellow-600 hover:bg-yellow-400 text-white font-semibold mt-2 py-3"
          type="submit"
          :disabled="isLoading"
        >
          Iniciar sesion
        </button>
      </form>
      <!-- Social auth... -->
      <div class="text-center">
        <p class="text-gray-600 my-4">O ingresa con</p>
        <div class="grid grid-cols-2 gap-2 md:gap-8">
          <button class="text-white bg-facebook py-2">Facebook</button>
          <button class="text-white bg-twitter py-2">Twitter</button>
        </div>
      </div>
      <p class="text-gray-600 mt-8 text-center">
        Aun no tienes una cuenta?
        <router-link to="/register" class="text-purple-500 font-semibold"
          >Registrarse</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators';
import { auth } from './../../config/firebase';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      loginError: false,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
  },

  methods: {
    login() {
      this.isLoading = true;
      this.$v.$touch();

      if (!this.$v.$invalid) {
        auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.replace('/dashboard');
          })
          .catch(() => {
            this.isLoading = false;
            this.loginError = true;
          });
      } else {
        this.isLoading = false;
      }
    },
  },
};
</script>
