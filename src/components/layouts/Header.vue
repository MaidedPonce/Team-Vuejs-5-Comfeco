<template>
  <nav class="flex items-center justify-between border-b border-purple-700 shadow-md flex-wrap px-6 py-3 md:px-10">
    <div class="flex items-center flex-shrink-0 mr-6">
      <router-link to="/">
        <img
          class="w-32 h-auto md:w-48"
          src='../../assets/images/logo.png'
          alt="Comfeco"
        />
      </router-link>
    </div>
    <div class="block md:hidden">
      <button @click="openMenu" class="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-500">
        <svg class="fill-current h-3 w-3 text-gray-600" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full flex-grow md:flex md:items-center md:w-auto" :class="{'hidden' : !responsiveMenu}">
      <div class="text-sm md:flex-grow">
        <router-link to="/" class="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-gray-600 mr-4">
          Home
        </router-link>
        <a href="#responsive-header" class="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-gray-600 mr-4">
          About Us
        </a>
        <a href="#responsive-header" class="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-gray-600">
          Blog
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  name: 'Header',
  data() {
    return {
      responsiveMenu: false,
    }
  },
  methods: {
    openMenu: function() {
      this.responsiveMenu = !this.responsiveMenu;
    },
  }
}
</script>
