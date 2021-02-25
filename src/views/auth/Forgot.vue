<template>
  <div class="flex-grow bg-purple-400">
    <div
      class="bg-white w-11/12 md:w-3/5 lg:w-2/6 mx-auto my-10 px-6 md:px-10 py-10"
    >
      <div class="text-center mb-10">
        <h2 class="text-4xl font-bold">Forgot Password</h2>
        <p class="text-3md mt-2">For recover your password</p>
      </div>
      <form @submit.prevent="send">
        <div class="my-3">
          <label for="" class="block text-gray-600 my-1">Email Address</label>
          <input
            v-model.trim="$v.email.$model"
            type="text"
            class="w-full text-gray-700 border border-red-500 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md"
            placeholder="example@mail.com"
          />
          <span v-if="!$v.email.email" class="text-xs text-red-400"
            >The email is incorrect</span
          >
          <span v-if="!$v.email.required" class="text-xs text-red-400"
            >The email is required</span
          >
        </div>
        <button
          class="w-full bg-yellow-600 hover:bg-yellow-400 text-white font-semibold mt-2 py-3"
          type="submit"
          :disabled="submitStatus === 'PENDING'"
        >
          Send Me Email
        </button>
      </form>
      <p class="text-gray-600 my-8 text-center">
        Don't have an account?
        <router-link to="/register" class="text-purple-500 font-semibold"
          >Register</router-link
        >
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
      submitStatus: null,
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
      this.submitStatus = "PENDING";
      if (!this.$v.$invalid) {
        auth
          .sendPasswordResetEmail(this.email)
          .then(response =>{
            this.$router.replace("/");
          })
          .catch(error =>{
            console.log(error);
          });
      }
    },
  },
};
</script>