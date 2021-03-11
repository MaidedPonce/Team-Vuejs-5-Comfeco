<template>
  <div class="flex-grow bg-purple-400 py-16">
    <div
      class="bg-white w-11/12 md:w-3/5 lg:w-2/6 mx-auto my-10 px-6 md:px-10 py-10"
    >
      <div class="text-center mb-8">
        <h2 class="text-gray-700 text-4xl font-bold">Registrarse</h2>
        <p class="text-3md mt-4">Crea una cuenta para poder acceder</p>
      </div>
      <form @submit.prevent="signUp">
        <div>
          <label for="nick" class="block text-gray-600 my-1">Usuario</label>
          <input
            name="nick"
            type="text"
            v-model.trim="$v.nick.$model"
            class="w-full text-gray-700 border border-gray-700 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md"
            :class="{
              'border-red-400':
                (!$v.nick.required || !$v.nick.minLength || $v.nick.alphaNum) &&
                $v.email.$dirty,
            }"
            placeholder="Usuario"
          />
          <div>
            <span
              v-if="!$v.nick.alphaNum && $v.nick.$dirty"
              class="text-xs text-red-400"
              >Solo puedes ingresar letras y numeros (sin espacios).</span
            >
            <span
              v-if="!$v.nick.required && $v.nick.$dirty"
              class="text-xs text-red-400"
              >Este campo es requerido.</span
            >
            <span
              v-if="!$v.nick.minLength && $v.nick.$dirty"
              class="text-xs text-red-400"
              >Este campo debe tener al menos
              {{ $v.nick.$params.minLength.min }} caracteres</span
            >
          </div>
        </div>

        <div class="my-3">
          <label for="" class="block text-gray-600 my-1"
            >Correo electrónico</label
          >
          <input
            name="email"
            type="text"
            v-model.trim="$v.email.$model"
            class="w-full text-gray-700 border border-gray-700 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md"
            :class="{
              'border-red-400':
                (!$v.email.required || !$v.email.email) && $v.email.$dirty,
            }"
            placeholder="example@mail.com"
          />
          <div>
            <span
              v-if="!$v.email.required && $v.email.$dirty"
              class="text-xs text-red-400"
              >Este campo es requerido</span
            >
            <span
              v-if="!$v.email.email && $v.email.$dirty"
              class="text-xs text-red-400"
              >Tienes que ingresar un correo valido</span
            >
          </div>
        </div>
        <div class="my-3">
          <label for="" class="block text-gray-600 my-1">contraseña</label>
          <input
            name="password"
            type="password"
            v-model.trim="$v.password.$model"
            class="w-full text-gray-700 border border-gray-700 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md"
            :class="{
              'border-red-400':
                (!$v.password.required || !$v.password.minLength) &&
                $v.password.$dirty,
            }"
            placeholder="**************"
          />
          <div>
            <span
              v-if="!$v.password.required && $v.password.$dirty"
              class="text-xs text-red-400"
              >Este campo es requerido</span
            >
            <span
              v-if="!$v.password.minLength && $v.password.$dirty"
              class="text-xs text-red-400"
              >La contraseña debe contener al menos
              {{ $v.password.$params.minLength.min }} caracteres.</span
            >
          </div>
        </div>
        <div class="my-3">
          <label for="" class="block text-gray-600 my-1"
            >Confirmar contraseña</label
          >
          <input
            name="confirm"
            type="password"
            v-model.trim="$v.confirm.$model"
            class="w-full text-gray-700 border border-gray-700 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md"
            :class="{
              'border-red-400': !$v.confirm.sameAs && $v.confirm.$dirty,
            }"
            placeholder="**************"
          />
          <div>
            <span
              v-if="!$v.confirm.sameAs && $v.confirm.$dirty"
              class="text-xs text text-red-400"
              >La contraseña debe ser la misma</span
            >
          </div>
        </div>
        <div class="my-4">
          <input v-model.trim="$v.terms.$model" type="checkbox" id="terms" />
          <label for="terms">
            Acepto los
            <router-link
              to="/terminos-y-condiciones"
              class="text-blue-600 font-semibold"
              target="_blank"
              >Terminos y condiciones</router-link
            >
            y las
            <router-link
              to="/politicas-de-privacidad"
              class="text-blue-600 font-semibold"
              target="_blank"
              >Politicas de privacidad</router-link
            >
          </label>
          <div class="block">
            <span
              v-if="!$v.terms.sameAs && $v.terms.$dirty"
              class="text-xs text-red-400"
              >Debes aceptar los terminos y condiciones y las politicas de
              privacidad</span
            >
          </div>
        </div>

        <button
          class="w-full bg-yellow-600 hover:bg-yellow-400 text-white font-semibold mt-2 py-3"
          type="submit"
          :disabled="isLoading"
        >
          Registrarse
        </button>
      </form>
      <!-- Social auth... -->
      <div class="text-center">
        <p class="text-gray-600 my-4">O registrate con</p>
        <div class="grid grid-cols-2 gap-2 md:gap-8">
          <button class="text-white bg-facebook py-2">Facebook</button>
          <button class="text-white bg-twitter py-2">Twitter</button>
        </div>
      </div>
      <p class="text-gray-600 mt-8 text-center">
        Tienes una cuenta?
        <router-link to="/iniciarsesion" class="text-purple-500 font-semibold"
          >Iniciar Sesion</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import {
  required,
  alphaNum,
  sameAs,
  minLength,
  email,
} from 'vuelidate/lib/validators';
import { auth } from '../../config/firebase';
import getGravatarUrl from '../../utils/gravatar';

export default {
  name: 'Registrarse',
  data() {
    return {
      nick: '',
      email: '',
      password: '',
      confirm: '',
      terms: false,
      terminosCondiciones: false,
      isLoading: false,
      showModal: false,
    };
  },
  validations: {
    nick: {
      required,
      alphaNum,
      minLength: minLength(4),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(12),
    },
    confirm: {
      sameAs: sameAs('password'),
    },
    terms: {
      sameAs: sameAs(() => true),
    },
  },
  methods: {
    signUp() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.isLoading = true;

        auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(({ user }) => {
            user
              .updateProfile({
                displayName: this.nick.toLowerCase(),
                photoURL: getGravatarUrl(this.email),
              })
              .then(() => {
                this.$router.replace('/dashboard');
              });
          })
          .catch((error) => {
            this.submitStatus = null;
            var errorMessage = error.message;
            alert(errorMessage);
          });
      } else {
        this.isLoading = false;
      }
    },
    aceptar() {
      this.terminosCondiciones = true;
      this.showModal = false;
    },
  },
};
</script>
