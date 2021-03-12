<template>
  <section>
  <div class="carouselMini">
      <div class="prev" v-on:click="prev"></div>
    <ul>
      <li class="itemMini" v-for="(item, index) in sponsors" :key="index">
          <img class="itemMini__img" :src="item" alt="organization" />
      </li>
    </ul> 
    <div class="next" v-on:click="next"></div>
  </div>
</section>
</template>

<script>
export default {
name: 'CarouselMini',

data () {
    return {
        sponsors: 
        [ "/assets/images/huawei.jpg"
        , "/assets/images/tekki.jpg"
        , "/assets/images/fernandoherrera.jpg"
        , "/assets/images/domini.jpg"
        , "/assets/images/codigofacilito.png"
        , "/assets/images/codelytv.png"
        , "/assets/images/egghead.png"
        , "/assets/images/joselujan.jpg"
        , "/assets/images/latamdev.jpg"
        , "/assets/images/leonidasesteban.jpg"
        ]
    }
},

methods: {
    prev () {
        let first = this.sponsors.shift();
        this.sponsors.push(first)
    },

    next() {
        let last = this.sponsors.pop();
        this.sponsors.unshift(last);

    }
}
}
</script>

<style>
.carouselMini {
    align-items: center;
    display: flex;
    flex-direction: center;
    height: 100px;
    justify-content: center;
    margin: auto;
    overflow: hidden;
    overflow-x: auto;
    text-align: center;
    width: 400px;
}

.carouselMini::-webkit-scrollbar {
    width: 0;
}
.carouselMini ul {
    display: flex;
}

.itemMini {
    border-radius: 100%;
    cursor: pointer;
    display: flex;
    height: 50px;
    list-style: none;
    margin-right: 1px;
    overflow: hidden;
    position: relative;
    width: 50px;
}
.prev {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    background: rgba(196, 43, 235, 0.609);
    color: black;
    transition: all 0.7s;
    font-size: 20px;
    font-weight: bold;
    z-index: 100;
    left: 420px;
}

.next {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    background: rgba(196, 43, 235, 0.609);
    color: black;
    transition: all 0.7s;
    font-size: 20px;
    font-weight: bold;
    z-index: 100;
    right: 420px;
}


.next:hover,
.prev:hover{
    opacity: 1;
    background-color: rgba(88, 86, 86, 0.596);
}
.prev::before{
    content: '<';
}

.next::before {
    content: '>';
}

</style>