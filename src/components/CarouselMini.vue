<template>
  <section style="padding-bottom: 100%;">
<div class="prev"></div>
  <div class="carouselMini">
    <ul>
      <li class="itemMini">
          <img class="itemMini__img" src="../assets/images/huawei.jpg" alt="organization">
      </li>
      <li class="itemMini">
          <img class="itemMini__img" src="../assets/images/tekki.jpg" alt="organization">
      </li>
      <li class="itemMini">
          <img class="itemMini__img" src="../assets/images/fernandoherrera.jpg" alt="organization">
      </li>
      <li class="itemMini">
          <img class="itemMini__img" src="../assets/images/domini.jpg" alt="organization">
      </li>
      <li class="itemMini">
          <img class="itemMini__img" src="../assets/images/User.png" alt="organization">
      </li>
      <li class="itemMini">
          <img class="itemMini__img" src="../assets/images/codigofacilito.png" alt="organization">
      </li>
      <li class="itemMini">
          <img class="itemMini__img" src="../assets/images/codelytv.png" alt="organization">
      </li>
      <li class="itemMini">
          <img class="itemMini__img" src="../assets/images/User.png" alt="organization">
      </li>
      <li class="itemMini">
          <img class="itemMini__img" src="../assets/images/User.png" alt="organization">
      </li>
      <li class="itemMini">
          <img class="itemMini__img" src="../assets/images/User.png" alt="organization">
      </li>
      <li class="itemMini">
          <img class="itemMini__img" src="../assets/images/User.png" alt="organization">
      </li>
      <li class="itemMini">
          <img class="itemMini__img" src="../assets/images/User.png" alt="organization">
      </li>
    </ul> 
    <div class="next"></div>
  </div>
</section>
</template>

<script>
export default {
name: 'CarouselMini'
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
    background: blue;
    color: black;
    transition: all 0.7s;
    font-size: 20px;
    font-weight: bold;
    z-index: 100;
    right: 570px;
    margin-top: 20px;
}

.next {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    background: blue;
    color: black;
    transition: all 0.7s;
    font-size: 20px;
    font-weight: bold;
    z-index: 100;
    left: 570px;
}


.next:hover,
.prev:hover{
    opacity: 1;
    background-color: black;
}
.prev::before{
    content: '<';
}

.next {
    right: -70px;
}
.next::before {
    content: '>';
}

</style>