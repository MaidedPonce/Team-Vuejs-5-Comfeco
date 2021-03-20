<template>
  <section
    class="w-11/12 md:w-8/12 lg:w-11/12 m-auto pt-16 grid grid-cols-1 lg:grid-cols-5 gap-y-10 md:gap-4 lg:gap-x-12"
  >
    <div>
      <div class="relative text-center border border-purple-300">
        <router-link
          to="/edit"
          class="text-sm text-blue-500 font-semibold absolute top-2 right-3"
          >Editar Perfil</router-link
        >
        <figure class="w-48 m-auto p-4">
          <img
            class="w-full rounded-full border border-gray-500"
            :src="user.photo"
            :alt="user.name"
          />
        </figure>
        <div class="p-4">
          <h2 class="text-lg font-bold">{{ user.name }}</h2>
          <span class="text-sm text-gray-600"
            >Frontend Developer / UI / UX</span
          >
          <p class="text-sm font-semibold my-4">{{ user.biography }}</p>
        </div>
        <div class="flex justify-around py-2 px-4 border-t-2 border-purple-400">
          <figure v-if="user.linkedin" class="w-10 h-10 rounded-full">
            <a
              :href="`https://linkedin.com/in/${user.linkedin}`"
              target="_blank"
            >
              <img
                src="../../../assets/images/socials/linkedin.png"
                alt="linkedin"
              />
            </a>
          </figure>
          <figure v-if="user.github" class="w-10 h-10 rounded-full">
            <a :href="`https://github.com/${user.github}`" target="_blank">
              <img
                src="../../../assets/images/socials/github.png"
                alt="github"
              />
            </a>
          </figure>
          <figure v-if="user.facebook" class="w-10 h-10 rounded-full">
            <a :href="`https://facebook.com/${user.facebook}`" target="_blank">
              <img
                src="../../../assets/images/socials/facebook.png"
                alt="facebook"
              />
            </a>
          </figure>
          <figure v-if="user.twitter" class="w-10 h-10 rounded-full">
            <a :href="`https://twitter.com/${user.twitter}`" target="_blank">
              <img
                src="../../../assets/images/socials/twitter.png"
                alt="twitter"
              />
            </a>
          </figure>
        </div>
      </div>
    </div>
    <div class="col-span-3 space-y-4">
      <div class="border border-pink-300 p-4">
        <h3 class="text-lg font-semibold">Insignias</h3>
        <div class="w-full md:w-4/6 m-auto flex justify-between">
          <figure class="w-12 h-12 md:w-24 md:h-24 rounded-full">
            <img
              class="drop-shadow"
              src="../../../assets/images/badges/medal.svg"
              alt="badge"
            />
          </figure>
          <figure class="w-12 h-12 md:w-24 md:h-24 rounded-full">
            <img
              class="drop-shadow"
              src="../../../assets/images/badges/social-media.svg"
              alt="badge"
            />
          </figure>
          <figure class="w-12 h-12 md:w-24 md:h-24 rounded-full">
            <img
              class="drop-shadow"
              src="../../../assets/images/badges/medal.svg"
              alt="badge"
            />
          </figure>
          <figure class="w-12 h-12 md:w-24 md:h-24 rounded-full">
            <img
              class="drop-shadow"
              src="../../../assets/images/badges/social-media.svg"
              alt="badge"
            />
          </figure>
        </div>
      </div>
      <div class="">
        <h3 class="text-lg font-semibold p-4">Actividad Reciente</h3>
        <div class="space-y-2">
          <div
            class="p-4 flex items-center border border-gray-400 shadow-md space-x-2"
          >
            <div class="flex-grow">
              Te has unido al evento Community Fest and Code
            </div>
            <figure class="w-8 h-8">
              <img src="../../../assets/images/activity/calendar.svg" alt="" />
            </figure>
          </div>
          <div
            class="p-4 flex items-center border border-gray-400 shadow-md space-x-2"
          >
            <div class="flex-grow">
              Haz compartido un evento de Community Fest and Code
            </div>
            <figure class="w-8 h-8">
              <img src="../../../assets/images/activity/share.svg" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
    <workshops />
  </section>
</template>

<script>
import { auth, db } from '../../../config/firebase';
import Workshops from '../../../components/sidebar/Workshops';

export default {
  data() {
    return {
      user: {
        uid: '',
        name: '',
        email: '',
        photo: '',
        facebook: '',
        github: '',
        linkedin: '',
        twitter: '',
        biography: '',
      },
    };
  },
  components: {
    Workshops,
  },
  mounted() {
    this.getCurrentUserData();
  },
  methods: {
    getCurrentUserData: function() {
      const authUser = auth.currentUser;
      this.user.uid = authUser.uid;
      this.user.name = authUser.displayName;
      this.user.email = authUser.email;
      this.user.photo = authUser.photoURL;

      this.getUserSocials(this.user.uid);
    },
    getUserSocials: async function(uid) {
      const document = await db
        .collection('users')
        .doc(uid)
        .get();

      const user = document.data();

      this.user.facebook = user.facebook;
      this.user.github = user.github;
      this.user.linkedin = user.linkedin;
      this.user.twitter = user.twitter;
      this.user.biography = user.biography;
    },
  },
};
</script>
