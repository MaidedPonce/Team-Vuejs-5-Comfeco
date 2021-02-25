<template>
  <div class="flex-grow bg-white">
    <div>
      <router-link to="/login" class="bg-pink-400 block max-w-min text-sm px-4 py-2 leading-none border rounded text-white border-pink-800 mt-4 md:mt-0 md:inline-block md:mx-1 lg:mt-0">Login</router-link>
      <router-link to="/register" class="bg-purple-400 block max-w-min text-sm px-4 py-2 leading-none border rounded text-white border-purple-800 mt-4 md:mt-0 md:inline-block md:mx-1 lg:mt-0">Register</router-link>
    </div>
    <div class="container w-11/12 mx-auto h-full flex flex-col items-center align-middle py-10">
      <h1>This is a home page</h1>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>