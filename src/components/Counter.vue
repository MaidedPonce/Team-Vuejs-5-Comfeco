<template>
  <section class="w-full my-8 space-y-6">
    <h3 class="text-2xl text-center font-bold">
      Preparate lo bueno esta por venir
    </h3>
    <p v-if="isTime" class="text-center text-gray-600">
      El momento ha llegado
      <!-- <a href="#" class="text-blue-600 font-semibold">click aqui</a> -->
    </p>
    <div v-else class="md:w-2/3 m-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      <div class="text-center border border-gray-300 rounded-lg shadow-md p-4">
        <p class="text-2xl font-semibold">{{ this.days }}</p>
        <span class="text-gray-600">dias</span>
      </div>
      <div class="text-center border border-gray-300 rounded-lg shadow-md p-4">
        <p class="text-2xl font-semibold">{{ this.hours }}</p>
        <span class="text-gray-600">horas</span>
      </div>
      <div class="text-center border border-gray-300 rounded-lg shadow-md p-4">
        <p class="text-2xl font-semibold">{{ this.minutes }}</p>
        <span class="text-gray-600">minutos</span>
      </div>
      <div class="text-center border border-gray-300 rounded-lg shadow-md p-4">
        <p class="text-2xl font-semibold">{{ this.seconds }}</p>
        <span class="text-gray-600">segundos</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Counter',
  props: ['deadline'],
  data: () => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isTime: false,
  }),
  mounted() {
    this.countdown();
  },
  methods: {
    countdown: function() {
      const timerUpdate = setInterval(() => {
        let now = new Date(),
          remainTime = (new Date(this.deadline) - now + 1000) / 1000,
          remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
          remainMinutes = ('0' + Math.floor((remainTime / 60) % 60)).slice(-2),
          remainHours = ('0' + Math.floor((remainTime / 3600) % 24)).slice(-2),
          remainDays = Math.floor(remainTime / (3600 * 24));

        this.days = remainDays;
        this.hours = remainHours;
        this.minutes = remainMinutes;
        this.seconds = remainSeconds;

        if (remainTime <= 1) {
          this.isTime = true;
          clearInterval(timerUpdate);
        }
      }, 1000);
    },
  },
};
</script>
