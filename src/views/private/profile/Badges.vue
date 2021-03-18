<template>
  <section>
    <p v-if="badges.sociable"> Insignia sociable obtenia </p>
  </section>
</template>

<script>

import { auth, db } from '../../../config/firebase';

export default {
  name: 'Badge',

  data(){
    return{
      badges: {
        sociable: false
      }
    }
  },

  mounted(){
    this.checkBadgeSociable()
  },

  methods: {
    checkBadgeSociable: async function(){
      const authUser = auth.currentUser;

      const document = await db
        .collection('users/' + authUser.uid + '/badges')
        .doc('Sociable')
        .get();
        
      let badgeSociable = document.data();
      this.badges.sociable = badgeSociable.aviable;
    }
  }
};
</script>

<style></style>
