<template>
  <div class="flex-grow bg-purple-400">
    <div
      class="bg-white w-11/12 md:w-3/5 lg:w-2/6 mx-auto my-10 px-6 md:px-10 py-10"
    >
      <div class="text-center mb-10">
        <h2 class="text-4xl font-bold">Login</h2>
        <p class="text-3md mt-2">Login into your page account</p>
      </div>

      <div class="w-full bg-yellow-600" v-if="loginError"><p>email or pasword incorrect</p></div>
      <form @submit.prevent="login">
        <div class="my-3">
          <label for="" class="block text-gray-600 my-1">Email Address</label>
          <input
            v-model.trim="$v.email.$model"
            type="text"
            class="w-full text-gray-700 border border-green-500 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md"
            placeholder="example@mail.com"
          />
          <div>
            <span v-if="!$v.email.email" class="text-xs text-red-400"
              >The email is incorrect</span
            >
            <span v-if="!$v.email.required" class="text-xs text-red-400"
              >The email is required</span
            >
          </div>
        </div>
        <div class="my-3">
          <label for="" class="block text-gray-600 my-1">Password</label>
          <input
            v-model.trim="$v.password.$model"
            type="password"
            class="w-full text-gray-700 border border-red-500 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md"
            placeholder="**************"
          />
          <div>
            <span v-if="!$v.password.required" class="text-xs text-red-400"
              >The password is required</span
            >
          </div>
        </div>
        <div class="flex justify-between my-4 md:my-6">
          <div>
            <input type="checkbox" id="remember" />
            <label for="remember" class="text-gray-600 ml-3">Remember me</label>
          </div>
          <div>
            <router-link
              to="/forgot-password"
              class="text-purple-500 font-semibold"
              >Forgot Password?</router-link
            >
          </div>
        </div>

        <button
          class="w-full bg-yellow-600 hover:bg-yellow-400 text-white font-semibold mt-2 py-3"
          type="submit"
          :disabled="submitStatus === 'PENDING'"
        >
          Login
        </button>
      </form>
      <!-- Social auth... -->
      <div class="text-center">
        <p class="text-gray-500 my-4">Or login with</p>
        <div class="grid grid-cols-2 gap-2 md:gap-8">
          <button class="text-white bg-facebook py-2">Facebook</button>
          <button class="text-white bg-twitter py-2">Twitter</button>
        </div>
      </div>
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
import { required, sameAs, minLength, email } from "vuelidate/lib/validators";
import { auth } from "./../../config/firebase";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      submitStatus: null,
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
      minLength: minLength(12),
    },
  },

  methods: {
    login() {
      this.$v.$touch();
      this.submitStatus = "PENDING";

      if (!this.$v.$invalid) {
        auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            this.$router.replace("/dashboard");
            this.submitStatus = "OK";
          })
          .catch((error) => {
            this.submitStatus = null;
            this.loginError = true;
          });
      }
    },
  },
};
</script>