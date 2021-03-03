<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="py-16">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>
