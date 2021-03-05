<template>
<<<<<<< HEAD
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
=======
  <div
    class="w-11/12 md:w-8/12 lg:w-11/12 m-auto flex-grow py-16 grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-x-8"
  >
    <div>
      <div class="bg-gray-300 p-4">
        <section class="space-y-4">
          <div class="flex justify-between">
            <h3 class="text-xl font-semibold">Comunidades</h3>
            <a href="#" class="text-blue-500 font-semibold">Ver mas</a>
          </div>
        </section>
        <div class="flex py-3 space-x-2 border-b border-purple-500">
          <figure class="w-12 h-12 rounded-full overflow-hidden">
            <img src="../../assets/avatar.jpg" alt="avatar" />
          </figure>
          <div>
            <h4 class="text-lg font-semibold leading-none">
              Comunidad de Programadores
            </h4>
            <a href="#" class="text-sm text-right text-blue-500 font-semibold"
              >Unirme</a
            >
          </div>
        </div>
        <div class="flex py-3 space-x-2 border-b border-purple-500">
          <figure class="w-12 h-12 rounded-full overflow-hidden">
            <img src="../../assets/avatar.jpg" alt="avatar" />
          </figure>
          <div>
            <h4 class="text-lg font-semibold leading-none">
              El lenguaje de los programadores
            </h4>
            <a href="#" class="text-sm text-right text-blue-500 font-semibold"
              >Unirme</a
            >
          </div>
        </div>
        <div
          class="flex items-center py-3 space-x-2 border-b border-purple-500"
        >
          <figure class="w-12 h-12 rounded-full overflow-hidden">
            <img src="../../assets/avatar.jpg" alt="avatar" />
          </figure>
          <div class="w-full">
            <h4 class="text-lg font-semibold leading-none">
              Latam Dev
            </h4>
            <a
              href="#"
              class="w-full text-sm text-right text-blue-500 font-semibold"
              >Unirme</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-3">
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
    <div class="bg-gray-300 p-4 h-80 overflow-y-scroll">
      <Section />
    </div>
>>>>>>> 16df53146228ea4248ae3ea30d1baee5cd87750b
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
