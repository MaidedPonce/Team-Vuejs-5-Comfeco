<template>
  <div class="w-11/12 md:w-8/12 lg:w-11/12 m-auto flex-grow py-16 grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-x-8">
    <Comunidades />
      <div class="col-span-3">
        <Bienvenida />
        <Carrusel />
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
    <div class="bg-gray-300 p-4 h-80 overflow-y-scroll">
      <Section />
    </div>
  </div>
</template>

<script>
import Carrusel from '../../components/Carrusel';
import CarouselMini from '../../components/CarouselMini';
import Counter from '../../components/Counter';
import Section from '../../components/secciones/Section';
import Comunidades from '../../components/secciones/Section'
import Bienvenida from '../../components/secciones/Bienvenida'
export default {
  name: 'Private',
  components: {
    Carrusel,
    CarouselMini,
    Counter,
    Section,
    Comunidades,
    Bienvenida
  },
  methods: {},
};
</script>
