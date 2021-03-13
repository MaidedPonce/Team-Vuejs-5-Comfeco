<template>
  <section
    class="w-11/12 md:w-8/12 lg:w-11/12 m-auto flex-grow py-16 grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-x-12"
  >
    <Communities />
    <div class="col-span-3">
      <div class="text-center w-5/6 m-auto">
        <h1 class="text-3xl font-bold">
          Bienvenidos a Community Fest and Code
        </h1>
        <p class="text-xl text-gray-700">Conoce gente, aprende y gana!</p>
        <p class="text-sm font-semibold my-8">
          La proxima edicion regresa en el 2022, en el cual se planea involucrar
          a todos los programadores independientes del area de conocimiento que
          se encuentre, todo con un mismo proposito aprender en comunidad.
        </p>
      </div>
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
    <div class="h-full p-4">
      <Workshops />
    </div>
  </section>
</template>

<script>
import Carousel from '../components/Carousel';
import CarouselMini from '../components/CarouselMini';
import Counter from '../components/Counter';
import Workshops from '../components/sidebar/Workshops';
import Communities from '../components/sidebar/Communities';

export default {
  name: 'Private',
  components: {
    Carousel,
    CarouselMini,
    Counter,
    Workshops,
    Communities,
  },
  methods: {},
};
</script>
