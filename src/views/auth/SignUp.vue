<template>
  <div class="flex-grow bg-purple-400">
    <div
      class="bg-white w-11/12 md:w-3/5 lg:w-2/6 mx-auto my-10 px-6 md:px-10 py-10"
    >
      <div class="text-center mb-10">
        <h2 class="text-4xl font-bold">Register</h2>
        <p class="text-3md mt-2">Create an account</p>
      </div>
      <form @submit.prevent="signUp">
        <div>
          <label for="nick" class="block text-gray-600 my-1">Nickname</label>
          <input
            name="nick"
            type="text"
            v-model.trim="$v.nick.$model"
            class="w-full text-gray-700 border border-green-500 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md"
            placeholder="Nickname"
          />
          <div>
            <span v-if="!$v.nick.required" class="text-xs text-red-400"
              >The nickname is required</span
            >
          </div>
        </div>

        <div class="my-3">
          <label for="" class="block text-gray-600 my-1">Email Address</label>
          <input
            name="email"
            type="text"
            v-model.trim="$v.email.$model"
            class="w-full text-gray-700 border border-red-500 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md"
            placeholder="example@mail.com"
          />
          <div>
            <span v-if="!$v.email.required" class="text-xs text-red-400"
              >The email is required</span
            >
          </div>
        </div>
        <div class="my-3">
          <label for="" class="block text-gray-600 my-1">Password</label>
          <input
            name="password"
            type="password"
            v-model.trim="$v.password.$model"
            class="w-full text-gray-700 border border-gray-500 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md"
            placeholder="**************"
          />
          <div>
            <span v-if="!$v.password.required" class="text-xs text-red-400"
              >The passsword is required</span
            >
            <span v-if="!$v.password.minLength" class="text-xs text-red-400"
              >Password must have at least
              {{ $v.password.$params.minLength.min }} letters.</span
            >
          </div>
        </div>
        <div class="my-3">
          <label for="" class="block text-gray-600 my-1"
            >Confirm Password</label
          >
          <input
            name="confirm"
            type="password"
            v-model.trim="$v.confirm.$model"
            class="w-full text-gray-700 border border-gray-500 focus:outline-none focus:border-pink-700 px-4 py-2 rounded-md"
            placeholder="**************"
          />
          <div>
            <span v-if="!$v.confirm.sameAsPassword" class="text-xs text-red-400"
              >Passwords must be identical.</span
            >
          </div>
        </div>

        <input
          type="button"
          @click="showModal = true"
          value="Terminos y condiciones"
          class="w-full bg-yellow-600 hover:bg-yellow-400 text-white font-semibold mt-2 py-3"
        /> 

        <Modal v-if="showModal" @close="showModal = false" @aceptar="aceptar"/>

        <button
          class="w-full bg-yellow-600 hover:bg-yellow-400 text-white font-semibold mt-2 py-3"
          type="submit"
          :disabled="submitStatus === 'PENDING'"
        >
          Submit!
        </button>
      </form>
      <!-- Social auth... -->
      <div class="text-center">
        <p class="text-gray-500 my-4">Or register with</p>
        <div class="grid grid-cols-2 gap-2 md:gap-8">
          <button class="text-white bg-facebook py-2">Facebook</button>
          <button class="text-white bg-twitter py-2">Twitter</button>
        </div>
      </div>
      <p class="text-gray-600 my-8 text-center">
        Have an account?
        <router-link to="/login" class="text-purple-500 font-semibold"
          >Login</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import { required, sameAs, minLength, email } from "vuelidate/lib/validators";
import { auth } from "./../../config/firebase";
import Modal from "./../../components/ModalTermCond"

export default {
  name: "SignUp",
  data() {
    return {
      nick: "",
      email: "",
      password: "",
      confirm: "",
      terminosCondiciones: false,
      submitStatus: null,
      showModal: false
    };
  },
  validations: {
    nick: {
      required,
      minLength: minLength(4),
    },
    email: {
      required,
      email,
      isUnique(value) {
        if (value === "") return true;
        var email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(email_regex.test(value));
          }, 350 + Math.random() * 300);
        });
      },
    },
    password: {
      required,
      minLength: minLength(12),
    },
    confirm: {
      sameAsPassword: sameAs("password"),
    },
  },

  methods: {
    signUp() {
      this.$v.$touch();

      if (this.$v.$invalid || !this.terminosCondiciones) {
        alert("fill in the fields");
      } else {

        this.submitStatus = 'PENDING'

        auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            this.submitStatus = 'OK'
            this.$router.replace("/dashboard");
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
          });
      }
    },

    aceptar(){
      this.terminosCondiciones = true;
      this.showModal = false;
    }
  },

  components: {
    Modal
  }
};
</script>

<style>
.signUp {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0px 30px;
  min-height: calc(100vh - 200px);
}
</style>