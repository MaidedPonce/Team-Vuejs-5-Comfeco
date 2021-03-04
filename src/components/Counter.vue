<template>
  <section
    style="
font-family: Verdana, Geneva, Tahoma, sans-serif;
"
  >
    <div class="time">
      <h3 v-if="!expired">Time</h3>
      <h3 v-else>It's Done</h3>
    </div>
    <div v-if="loaded" class="timer">
      <div class="timer__numbers">
        {{ displayDays }}
        <p>Days</p>
      </div>
      <div class="timer__numbers">
        {{ displayHours }}
        <p>Hours</p>
      </div>
      <div class="timer__numbers">
        {{ displayMinutes }}
        <p>Minutes</p>
      </div>
      <div class="timer__numbers">
        {{ displaySeconds }}
        <p>Seconds</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Counter',
  props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond'],
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
    loaded: false,
    expired: false,
  }),
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
    end() {
      return new Date(
        this.year,
        this.month,
        this.date,
        this.hour,
        this.minute,
        this.second,
        this.millisecond
      );
    },
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNum: (num) => (num < 10 ? '0' + num : num),
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        // const end = new Date(2021, 2, 27, 10, 10, 10)
        const distance = this.end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          this.expired = true;
          this.loaded = true;
          return;
        }
        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displayMinutes = this.formatNum(minutes);
        this.displaySeconds = this.formatNum(seconds);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
        this.loaded = true;
      }, 1000);
    },
  },
};
</script>

<style scope>
.timer {
  justify-content: center;
  align-items: center;
  display: flex;
  width: 500px;
  margin: auto;
  height: 300px;
  background: rgba(196, 43, 235, 0.609);
}
.time h3 {
  background: rgba(0, 0, 0, 0.603);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin: auto;
  font-size: 30px;
}
.timer__items {
  justify-content: center;
  align-items: center;
  display: flex;
}
.timer__numbers {
  text-align: center;
  margin-left: 20px;
  font-size: 30px;
}
.timer__numbers p {
  color: black;
}
</style>
