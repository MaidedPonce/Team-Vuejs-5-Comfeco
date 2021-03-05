<template>
  <div class="flex-grow py-12">
    <router-link class="w-full bg-yellow-600 hover:bg-yellow-400 text-white font-semibold mt-2 py-3"
          to="/edit" type="submit" >Editar perfil</router-link>
    <Section />
    <Carousel />
    <CarouselMini />
    <Counter
      :year="2021"
      :month="2"
      :date="27"
      :hour="23"
      :minute="59"
      :second="59"
      :millisecond="31"
    />
  </div>
</template>

<script>
import Carousel from '../../components/Carousel';
import CarouselMini from '../../components/CarouselMini';
import Counter from '../../components/Counter';
import Section from '../../components/Section';

export default {
  name: 'Private',
  components: {
    Carousel,
    CarouselMini,
    Counter,
    Section,
  },
  methods: {},
};
</script>
