<template>
  <section
    class="w-11/12 md:10/12 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-16"
  >
    <div
      class="text-center space-y-3 border border-gray-500 shadow-sm px-8 py-4 rounded-lg"
    >
      <figure class="w-20 h-20 m-auto">
        <img src="../../../assets/images/badges/social-media.svg" alt="" />
      </figure>
      <h3 class="text-2xl font-bold">{{getTitleBadgeSociable}}</h3>
      <div class="space-y-4">
        <h6 class="font-semibold">Descripcion</h6>
        <p class="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor
          repellat possimus consectetur ab alias sit recusandae.
        </p>
      </div>
      <div class="border-t border-gray-500 pt-4 space-y-4">
        <h6 class="font-semibold">Como Ganarla?</h6>
        <p class="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, mollitia
          sapiente eligendi maxime itaque ea officia. Voluptatum placeat ipsam
          repellendus minus ex officia reprehenderit sunt magnam nihil dolorum,
          assumenda possimus.
        </p>
      </div>
    </div>
    <div
      class="text-center space-y-3 border border-gray-500 shadow-sm px-8 py-4 rounded-lg"
    >
      <figure class="w-20 h-20 m-auto">
        <img src="../../../assets/images/badges/medal.svg" alt="" />
      </figure>
      <h3 class="text-2xl font-bold">Sociable</h3>
      <div class="space-y-4">
        <h6 class="font-semibold">Descripcion</h6>
        <p class="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor
          repellat possimus consectetur ab alias sit recusandae.
        </p>
      </div>
      <div class="border-t border-gray-500 pt-4 space-y-4">
        <h6 class="font-semibold">Como Ganarla?</h6>
        <p class="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, mollitia
          sapiente eligendi maxime itaque ea officia. Voluptatum placeat ipsam
          repellendus minus ex officia reprehenderit sunt magnam nihil dolorum,
          assumenda possimus.
        </p>
      </div>
    </div>
    <div
      class="text-center space-y-3 border border-gray-500 shadow-sm px-8 py-4 rounded-lg"
    >
      <figure class="w-20 h-20 m-auto">
        <img src="../../../assets/images/badges/social-media.svg" alt="" />
      </figure>
      <h3 class="text-2xl font-bold">Sociable</h3>
      <div class="space-y-4">
        <h6 class="font-semibold">Descripcion</h6>
        <p class="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor
          repellat possimus consectetur ab alias sit recusandae.
        </p>
      </div>
      <div class="border-t border-gray-500 pt-4 space-y-4">
        <h6 class="font-semibold">Como Ganarla?</h6>
        <p class="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, mollitia
          sapiente eligendi maxime itaque ea officia. Voluptatum placeat ipsam
          repellendus minus ex officia reprehenderit sunt magnam nihil dolorum,
          assumenda possimus.
        </p>
      </div>
    </div>
    <div
      class="text-center space-y-3 border border-gray-500 shadow-sm px-8 py-4 rounded-lg"
    >
      <figure class="w-20 h-20 m-auto">
        <img src="../../../assets/images/badges/medal.svg" alt="" />
      </figure>
      <h3 class="text-2xl font-bold">Sociable</h3>
      <div class="space-y-4">
        <h6 class="font-semibold">Descripcion</h6>
        <p class="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor
          repellat possimus consectetur ab alias sit recusandae.
        </p>
      </div>
      <div class="border-t border-gray-500 pt-4 space-y-4">
        <h6 class="font-semibold">Como Ganarla?</h6>
        <p class="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, mollitia
          sapiente eligendi maxime itaque ea officia. Voluptatum placeat ipsam
          repellendus minus ex officia reprehenderit sunt magnam nihil dolorum,
          assumenda possimus.
        </p>
      </div>
    </div>
  </section>
</template>

<script>

import { auth, db } from '../../../config/firebase';

export default {
  name: 'Badge',

  data(){
    return{
      badges: {
        sociable: {
          aviable: false,
          description: '',
          goal: ''
        }
      }
    }
  },

  mounted(){
    this.checkBadgeSociable()
  },

  computed:{
    getTitleBadgeSociable(){
      if(this.badges.sociable.aviable){
        return "Sociable obtenida"
      }

      return "Sociable"
    }
  },

  methods: {
    checkBadgeSociable: async function(){
      const authUser = auth.currentUser;

      const documentUser = await db
        .collection('users/' + authUser.uid + '/badges')
        .doc('Sociable')
        .get();

      let badgeSociable = documentUser.data()
      this.badges.sociable.aviable = badgeSociable.aviable;

      if(this.badges.sociable.aviable){
        const documentBadge = await db
        .collection('badges')
        .doc('Sociable')
        .get();

        let badgeInfo = documentBadge.data()
        this.badges.sociable.description = badgeInfo.description
        this.badges.sociable.goal = badgeInfo.goal
      }
      
    }
  }
};
</script>
