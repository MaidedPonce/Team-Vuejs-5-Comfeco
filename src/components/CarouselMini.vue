<template>
  <section style="padding-bottom: 100%;">
  <div class="carouselMini">
    <ul>
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
    width: 200px;
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
</style>