<template>
  <section class="flex-grow py-16">
    <Header />
    <router-view></router-view>
  </section>
</template>

<script>
import Header from '../../components/private/Header';
export default {
  components: {
    Header,
  },
};
</script>
