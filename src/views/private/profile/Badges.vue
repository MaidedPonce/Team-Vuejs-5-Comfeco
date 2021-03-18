<template>
  <section>

    <section v-if="badges.sociable.aviable">
      <p> Insignia sociable obtenida </p>
      <p> descripcion </p>
      <p> {{badges.sociable.description}} </p>
      <p> objetivo </p>
      <p> {{badges.sociable.goal}} </p>
    </section>
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

<style></style>
