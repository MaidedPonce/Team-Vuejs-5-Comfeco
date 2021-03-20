<template>
  <nav
    class="flex items-center justify-between shadow-md z-10 flex-wrap px-6 py-3 md:px-10"
  >
    <div class="flex items-center flex-shrink-0 mr-8">
      <router-link :to="{ name: 'home' }">
        <img
          class="w-32 h-auto md:w-48"
          src="../../assets/images/logo.png"
          alt="Comfeco"
        />
      </router-link>
    </div>
    <div class="block md:hidden">
      <button
        @click="toggleMenu"
        class="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-500"
      >
        <svg
          class="fill-current h-3 w-3 text-gray-600"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menú</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      class="w-full flex-grow md:flex md:items-center md:w-auto"
      :class="{ hidden: !responsiveMenu }"
    >
      <div class="text-sm md:flex-grow mt-2 md:m-0">
        <router-link
          to="/"
          class="block py-2 md:inline-block md:mt-0 text-gray-800 hover:text-gray-700 mr-4"
        >
          Inicio
        </router-link>
        <router-link
          to="/"
          class="block py-2 md:inline-block md:mt-0 text-gray-800 hover:text-gray-700 mr-4"
        >
          Comunidades
        </router-link>
        <router-link
          to="/"
          class="block py-2 md:inline-block md:mt-0 text-gray-800 hover:text-gray-700 mr-4"
        >
          Talleres
        </router-link>
        <router-link
          to="/"
          class="block py-2 md:inline-block md:mt-0 text-gray-800 hover:text-gray-700 mr-4"
        >
          Creadores de contenido
        </router-link>
      </div>
      <div v-if="isLoggedIn" class="relative">
        <div class="flex items-center">
          <div class="relative hidden md:block cursor-pointer mr-4">
            <img
              class="text-pink-500 w-7"
              src="../../assets/bell.svg"
              alt="Notifications"
            />
            <span
              class="text-xs text-white font-semibold px-1.5 py-0.5 bg-red-500 rounded-full absolute -top-1 -right-1"
              >6</span
            >
          </div>
          <div @click="toggleDropdown" class="flex items-center cursor-pointer">
            <h3 class="text-gray-600 font-medium mr-2 hidden md:block">
              {{ user.name }}
            </h3>
            <img
              class="w-12 rounded-full hidden md:block"
              :src="user.photo"
              :alt="user.name"
            />
          </div>
        </div>
        <div
          class="bg-white md:w-40 md:absolute md:right-0 md:shadow-md md:rounded-md border-t border-gray-400 md:border-none"
          :class="{ 'md:hidden': !responsiveDropdown }"
        >
          <h3
            href="#"
            class="text-sm block font-semibold md:px-2 py-2 md:hidden"
          >
            {{ user.name }}
          </h3>
          <a
            href="#"
            class="w-full flex justify-between items-center md:hidden"
          >
            <p class="text-sm text-pink-600 font-semibold block md:px-2 py-2">
              Notificaciones
            </p>
            <span
              class="text-white bg-purple-500 px-2 rounded-md align-middle items-center"
              >6</span
            >
          </a>

          <router-link
            to="/dashboard"
            class="text-sm block md:px-2 py-2 hover:text-gray-600"
            @click.native="responsiveDropdown = false"
            >Dashboard</router-link
          >
          <router-link
            to="/edit"
            class="text-sm block md:px-2 py-2 hover:text-gray-600"
            @click.native="responsiveDropdown = false"
            >Editar Perfil</router-link
          >
          <a href="#" class="text-sm block md:px-2 py-2 hover:text-gray-600" @click="responsiveDropdown = false"
            >Support</a
          >
          <a
            @click="logout"
            href="#"
            class="text-sm text-red-600 font-bold block md:px-2 py-2 hover:text-red-400"
            >Cerrar Sesión</a
          >
        </div>
      </div>
      <div v-if="!isLoggedIn">
        <router-link
          to="/login"
          class="bg-pink-400 block max-w-min text-sm px-4 py-2 leading-none border rounded text-white border-pink-800 mt-4 md:mt-0 md:inline-block md:mx-1 lg:mt-0"
          >Entrar</router-link
        >
        <router-link
          to="/register"
          class="bg-purple-400 block max-w-min text-sm px-4 py-2 leading-none border rounded text-white border-purple-800 mt-4 md:mt-0 md:inline-block md:mx-1 lg:mt-0"
          >Registrarse</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { auth } from '../../config/firebase';

export default {
  name: 'Header',
  data() {
    return {
      user: {},
      responsiveMenu: false,
      responsiveDropdown: false,
      isLoggedIn: false,
    };
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    checkAuth: function() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.isLoggedIn = true;
          this.user.name = user.displayName;
          this.user.email = user.email;
          this.user.photo = user.photoURL;
        } else {
          this.isLoggedIn = false;
        }
      });
    },
    logout: function() {
      auth.signOut().then(() => {
        this.$router.replace('/');
      });
    },
    toggleMenu: function() {
      this.responsiveMenu = !this.responsiveMenu;
    },
    toggleDropdown: function() {
      this.responsiveDropdown = !this.responsiveDropdown;
    },
  },
};
</script>
